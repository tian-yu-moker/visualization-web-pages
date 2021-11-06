<template>
  <div class="homepage">
    <div id="main" style="width: 600px;height:400px;"></div>
  </div>
</template>

<script>
import * as echarts from 'echarts';
Vue.prototype.$echarts = echarts
import axios from 'axios'
import Vue from 'vue'


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
      treeBrandOption: ""
    };
  },
  methods:{
    drawVehicleTreemap() {
      this.overview = this.$echarts.init(document.getElementById("main"));

      this.overview.hideLoading();
      const formatUtil = echarts.format;
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
            name: 'Vehicle Brand',
            type: 'treemap',
            visibleMin: 2000,
            roam: true,
            leafDepth: 1,
            nodeClick: false,
            label: {
                show: true,
                formatter: '{b}'
            },
            itemStyle: {
              borderColor: '#fff'
            },
            data: []
          }]
      };
      this.curBrandOption = this.treeBrandOption;
      this.treeOrLine = 0;
      this.overview.setOption(this.curBrandOption);
      let urlAll = "http://localhost:8090/cars/getAllCars";
      axios.get(urlAll).then(response =>
      {
        //If query is success
        if (response.status == 200)
        {
          console.log(response.data[0])
          this.carsBrandOverview = response.data[0];
          this.defaultAllYearData = response.data[0];
          this.carsYearlyData = response.data[1];
          this.overview.setOption({
            series: [
              {
                data: this.carsBrandOverview
              }
            ]
          })
        }
      });
      this.overview.on('click', this.overviewClick);
      // option && overview.setOption(option);
    },
    overviewClick(params)
    {
      // alert(this.carsYearlyData.length);
      if(this.treeOrLine == 1)
      {
        this.curBrandOption = this.treeBrandOption;
        this.treeOrLine = 0;
        this.overview.setOption(this.curBrandOption);
        this.overview.setOption({
          series: [
            {
              data: this.carsBrandOverview
            }
          ]
        })
      }
      else
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
              smooth: true
            }
          ]
        };
        this.curBrandOption = lineOption;
        this.overview.setOption(this.curBrandOption);
      }
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
