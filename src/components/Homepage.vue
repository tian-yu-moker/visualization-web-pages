<template>
  <div class="homepage">
    <el-row :gutter="20">
      <el-col :span="3">
        <el-select v-model="selectedYear" placeholder="Select a year" @change="selectionYearChange">
          <el-option
            v-for="item in yearList"
            :key="item.value"
            :label="item.value"
            :value="item.value">
          </el-option>
        </el-select>
      </el-col>
      <el-col :span="6">
        <el-radio-group v-model="radio" @change="treeOrSun">
          <el-radio v-model="radio" label="Treemap" border>Treemap</el-radio>
          <el-radio v-model="radio" label="Sunburst" border>Sunburst</el-radio>
        </el-radio-group>
      </el-col>
    </el-row>
    <div id="main" style="width: 800px;height:400px;"></div>
  </div>
</template>

<script>
import * as echarts from 'echarts';
Vue.prototype.$echarts = echarts
import axios from 'axios'
import Vue from 'vue'
import { UniversalTransition } from 'echarts/features';
echarts.use([UniversalTransition]);


export default {
  name: 'Homepage',
  data() {
    return {
      carsBrandOverview: [],
      carsYearlyData: [],
      defaultAllYearData: [],
      overview: "",
      curBrandOption: "",
      treeOrLine: 0,
      treeBrandOption: "",
      sunBrandOption: "",
      barBrandOption: "",
      radio: 'Treemap',
      yearList: [
        {
          value: 2005
        },
        {
          value: 2006
        },
        {
          value: 2007
        },
        {
          value: 2008
        },
        {
          value: 2009
        },
        {
          value: 2010
        },
        {
          value: 2011
        },
        {
          value: 2012
        },
        {
          value: 2013
        },
        {
          value: 2014
        },
        {
          value: 2015
        }
      ],
      selectedYear: "",
    };
  },
  methods:{
    drawVehicleTreemap() {
      this.overview = this.$echarts.init(document.getElementById("main"));
      this.overview.hideLoading();
      const formatUtil = echarts.format;
      this.curBrandOption = this.treeBrandOption;
      this.treeOrLine = 0;
      // this.overview.setOption(this.curBrandOption);
      let urlAll = "http://localhost:8090/cars/getAllCars";
      axios.get(urlAll).then(response =>
      {
        // If query is success
        if (response.status == 200)
        {
          console.log(response.data[0])
          this.carsBrandOverview = response.data[0];
          this.defaultAllYearData = response.data[0];
          this.carsYearlyData = response.data[1];
          this.treeBrandOption = {
            title: {
              text: 'Vehicle Brand (Accident number > 3000 in 10 years)',
              left: 'center'
            },
            tooltip: {
              formatter: function (info)
              {
                let value = info.value;
                let name = info.name;
                return [
                  '<div class="tooltip-title" id="tooltips">' +
                  formatUtil.encodeHTML(name) +
                  '</div>',
                  'Total Accident Count: ' + value
                ].join('');
              }
            },
            series: [
              {
                type: 'treemap',
                id: 'brands',
                animationDurationUpdate: 1000,
                roam: false,
                nodeClick: undefined,
                data: this.carsBrandOverview,
                universalTransition: true,
                visibleMin: 2000,
                label: {
                  show: true
                },
                breadcrumb: {
                  show: false
                }
              }
            ]
          };
          this.sunBrandOption = {
            title: {
              text: 'Vehicle Brand (Accident number > 3000 in 10 years)',
              left: 'center'
            },
            tooltip: {
              formatter: function (info)
              {
                let value = info.value;
                let name = info.name;
                return [
                  '<div class="tooltip-title" id="tooltips">' +
                  formatUtil.encodeHTML(name) +
                  '</div>',
                  'Total Accident Count: ' + value
                ].join('');
              }
            },
            series: [
              {
                type: 'sunburst',
                id: 'brands',
                radius: ['20%', '90%'],
                animationDurationUpdate: 1000,
                nodeClick: undefined,
                data: this.carsBrandOverview,
                universalTransition: true,
                visibleMin: 2000,
                itemStyle: {
                  borderWidth: 1,
                  borderColor: 'rgba(255,255,255,.5)'
                },
                label: {
                  show: false
                }
              }
            ]};

          this.overview.setOption(this.treeBrandOption)
        }
      });
      this.overview.on('click', this.overviewClick);
      this.overview.getZr().on('click', this.returnTreemap)
      // option && overview.setOption(option);
    },
    treeOrSun()
    {
      this.overview.clear();
      if(this.radio == "Treemap")
      {
        this.overview.setOption(this.treeBrandOption);
      }
      else if(this.radio == "Sunburst")
      {
        this.overview.setOption(this.sunBrandOption);
      }
    },
    returnTreemap(params)
    {
      if(this.treeOrLine == 1)
      {
        this.curBrandOption = this.treeBrandOption;
        this.treeOrLine = 0;
        this.overview.clear();
        this.overview.setOption(this.curBrandOption);
        this.overview.setOption({
          series: [
            {
              data: this.carsBrandOverview
            }
          ]
        })
      }
    },
    overviewClick(params)
    {
      // alert(this.carsYearlyData.length);
      if(this.treeOrLine == 0)
      {
        this.treeOrLine = 1;
        let brand = params.name;
        let curYear = 0;
        let lineData = [];
        for(let i = 0; i < this.carsYearlyData.length; i++)
        {
          if(this.carsYearlyData[i].name == brand)
          {
            lineData.push(this.carsYearlyData[i].value);
            if(this.carsYearlyData[i].year == 2016)
              break;
          }
        }
        let lineOption = {
          title: {
            text: 'The statistics of the ' + brand + ' cars accidents in the decade.',
            left: 'center'
          },
          xAxis: {
            type: 'category',
            data: ['2005', '2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015']
          },
          yAxis: {
            type: 'value'
          },
          series: [
            {
              data: lineData,
              type: 'line',
              smooth: true,
              id: 'brands',
              universalTransition: true,
              animationDurationUpdate: 1000
            }
          ]
        };
        this.overview.clear();
        this.curBrandOption = lineOption;
        this.overview.setOption(this.curBrandOption);
      }
    },
    selectionYearChange(val)
    {
      let selected = [];
      let curVal = 0;
      for(let i = 0; i < this.carsYearlyData.length; i++)
      {

        if(parseInt(this.selectedYear) == parseInt(this.carsYearlyData[i].year))
        {
          let one = {
            "label": this.carsYearlyData[i].name,
            "value": this.carsYearlyData[i].value
          }
          selected.push(one);
        }
      }
      selected.sort(function (a,b)
      {
        return b.value - a.value;
      });
      let labels = [];
      let values = [];
      let count = 0;
      let others = 0
      for(let i = 0; i < selected.length; i++)
      {
        count += 1;
        if(count <= 10)
        {
          labels.push(selected[i].label.toString());
          values.push(selected[i].value);
        }
      }
      const formatUtil = echarts.format;
      this.barBrandOption = {
        title: {
          text: 'The top 10 crash car brand in ' + this.selectedYear,
          left: 'center'
        },
        xAxis: {
          type: 'category',
          data: labels
        },
        yAxis: {
          type: 'value'
        },
        tooltip: {
          formatter: function (info)
          {
            let value = info.value;
            let name = info.name;
            return [
              '<div class="tooltip-title" id="tooltips">' +
               formatUtil.encodeHTML('Brand: ' + name) +
              '</div>',
              'Accident Count in the year: ' + value
            ].join('');
          }
        },
        series: [
          {
            data: values,
            type: 'bar',
            showBackground: true,
            backgroundStyle: {
              color: 'rgba(180, 180, 180, 0.2)'
            },
            itemStyle: {
              normal:{
                color: function(param)
                {
                  let colorArray = [
                    '#5470c6', '#91cc75', '#fac858', '#ee6666', '#73c0de',
                    '#3ba272', '#fc8452', '#9a60b4', '#ea7ccc',
                    '#9BCA63'
                  ];
                  return colorArray[param.dataIndex];
                }
              }
            }
          }
        ]
      }
      this.overview.clear();
      this.curBrandOption = this.barBrandOption;
      this.overview.setOption(this.curBrandOption);
      console.log(values);
    }
  },
  created () {
    let urlAll = "http://localhost:8090/cars/getAllCars";
    axios.get(urlAll).then(response =>
    {
      //If query is success
      if (response.status == 200)
      {
        console.log(response.data[0])
        this.carsBrandOverview = response.data[0];
        this.defaultAllYearData = response.data[0];
      }



    });
    console.log(this.defaultAllYearData + "aaa")
  },
  mounted () {
    console.log(this.defaultAllYearData + "aaa")
    this.drawVehicleTreemap();
  }
}
</script>

<style scoped>

</style>
