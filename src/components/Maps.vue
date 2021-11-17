<template>
  <div>
    <div id="ukmap" style="width:800px;height:800px;background: rgba(12,134,211,0.2)">
    </div>
    <div class="block">
      <el-row>
        <el-col :span="15">
          <el-slider v-model="selectMapYear" range
                     show-stops :min="2005"
                     :max="2015" :step="1"
                     @change="mapYearChange"
                     style="width: 500px">
          </el-slider>
        </el-col>
        <el-col :span="3">
          <el-switch
            style="display: block"
            v-model="ukMapOrBar"
            active-color="#13ce66"
            inactive-color="#3399ff"
            active-text="Bar Statistics"
            inactive-text="Map"
            @change="ukMapOrBarSelect"
          >
          </el-switch>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import * as echarts from 'echarts';
Vue.prototype.$echarts = echarts
import * as UK from '../components/British'
import axios from 'axios'
import Vue from 'vue'
import { UniversalTransition } from 'echarts/features';
echarts.use([UniversalTransition]);

export default {
  name: 'Maps',
  data() {
    return {
      mapUKGeoJson: "",
      mapUK: "",
      ukMapOption: "",
      ukMapBarOption: "",
      accidentDataOnMap: "",
      selectMapYear: [2005, 2015],
      curAccidentMapData: [],
      ukMapOrBar: false,
      mapUKHoverDisabled: false,
      mapUKHoverShow: false
    }
  },
  methods:{
    loadGeoMapData()
    {
      // let chartDom = echarts.init(document.getElementById('map'));
      this.mapUK = echarts.init(document.getElementById('ukmap'));
      // var option;
      this.mapUK.showLoading();
      axios.get('../../static/JsonData/England.json', {}).then(response =>
      {
        if (response.status == 200)
        {
          console.log(response.data)
          this.mapUKGeoJson = response.data;
          echarts.registerMap('UK-Map', this.mapUKGeoJson);

          let urlMap = "http://localhost:8090/mapData";
          axios.get(urlMap, {}).then(response =>
          {
            if (response.status == 200)
            {
              console.log(response.data);
              this.accidentDataOnMap = response.data;
              this.curAccidentMapData = this.accidentDataOnMap[0];
              let max = Math.max.apply(Math,this.curAccidentMapData.map(item => { return item.value }))
              let min = Math.min.apply(Math,this.curAccidentMapData.map(item => { return item.value }))
              this.ukMapOption = {
                title: {
                  text: "UK Traffic Accidents",
                  subtext: "Current Period: " + this.selectMapYear[0] + " ~ " + this.selectMapYear[1]
                },
                tooltip: {
                  padding: 3,
                  // backgroundColor: '#777',
                  // borderColor: '#000',
                  borderWidth: 1,
                  formatter: function (obj)
                  {
                    let name = obj.name;
                    let value = obj.value;
                    let length = response.data.length;
                    let hoveredCity = [];
                    let color = obj.color;
                    for(let i = 1; i < length; i++)
                    {
                      for(let j = 0; j < response.data[0].length; j++)
                      {
                        if(response.data[i][j].name == name)
                        {
                          hoveredCity.push(response.data[i][j].value);
                          break;
                        }
                      }
                    }

                    //alert(hoveredCity)
                    //这两步就是获取 x 和y 坐标
                    // var yindex=obj.dataIndex;
                    // var xindex=obj.seriesIndex;
                    // //当调用这个方法后，不会立即获取到ebox这个ID，所以用定时器，或许有别的方法，欢迎补充
                    setTimeout(function(){
                    //   //给饼图传入ID
                      let xIndex = [2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015]
                      let lineOption = {
                        title: [
                          {
                            text: name + " 05 ~15.  Current period: " + value,
                            textStyle: {
                              color: '#333333',
                              fontWeight: 'bold',
                              fontSize: 10
                            }
                          }
                        ],
                        xAxis: {
                          type: 'category',
                          data: xIndex
                        },
                        yAxis: {
                          type: 'value'
                        },
                        grid:{
                          x:50,
                          y:30,
                          x2:30,
                          y2:30,
                          borderWidth:1
                        },
                        series: [
                          {
                            data: hoveredCity,
                            type: 'line',
                            smooth: true,
                            itemStyle: {
                              normal: {
                                color: color, //改变折线点的颜色
                                lineStyle: {
                                  color: color //改变折线颜色
                                }
                              }
                            },
                          }
                        ]
                      };
                      let tooltipLine = echarts.init(document.getElementById('ukMapTooltips'));
                      tooltipLine.setOption(lineOption);
                    },200);
                    //重点是这一步，返回一个DIV模型
                    return '<div id="ukMapTooltips" style="width:250px; height:150px;" class="ukMapTooltips"></div>'

                  }
                },
                toolbox: {
                  show: true,
                  orient: 'vertical',
                  left: 'right',
                  top: 'center',
                  feature: {
                    dataView: { readOnly: false },
                    restore: {},
                    saveAsImage: {}
                  }
                },
                visualMap: {
                  min: min,
                  max: max,
                  text: ['High', 'Low'],
                  realtime: false,
                  calculable: true,
                  inRange: {
                    color: [
                      '#4575b4',
                      '#74add1',
                      '#abd9e9',
                      '#e0f3f8',
                      '#ffffbf',
                      '#fee090',
                      '#fdae61',
                      '#f46d43',
                      '#d73027',
                      '#a50026'
                    ]
                  }
                },
                series: [
                  {
                    id: "uk_map_series",
                    name: 'UK Traffic',
                    type: 'map',
                    map: 'UK-Map',
                    roam: true,
                    selectedMode: 'multiple',
                    layoutCenter: ['35%', '50%'],
                    layoutSize: '90%',
                    data: this.curAccidentMapData
                  }
                ]
              };
              this.mapUK.hideLoading();
              this.mapUK.setOption(this.ukMapOption);
              // this.mapUK.on('click', this.mapUKItemClick);
              // this.mapUK.on('mouseover', this.mapUKItemHover)
            }
          });
        }
      });
    },
    mapYearChange()
    {
      console.log(this.selectMapYear);
      this.mapUK.showLoading();
      let startYear = this.selectMapYear[0];
      let endYear = this.selectMapYear[1];
      let differ = endYear - startYear;
      // If select a single year
      if(differ == 0)
        this.curAccidentMapData = this.accidentDataOnMap[startYear - 2005 + 1];
      // 05 ~ 15
      else if(differ == 10)
        this.curAccidentMapData = this.accidentDataOnMap[0]
      // 05 ~ 07
      else
      {
        let length = this.accidentDataOnMap[0].length;
        let newDataOnMap = [];

        for(let i = 0; i < length; i++)
        {
          let name = "";
          let value = 0;
          for(let j = startYear; j <= endYear; j++)
          {
            let index = j - 2005 + 1;
            let entryYear = this.accidentDataOnMap[index][i];
            name = entryYear.name;
            value += parseInt(entryYear.value);
          }
          newDataOnMap.push({
            "name": name,
            "value": value
          });
        }
        this.curAccidentMapData = newDataOnMap;
      }
      this.curAccidentMapData.sort(function (a, b) {
        return a.value - b.value;
      });
      let max = Math.max.apply(Math,this.curAccidentMapData.map(item => { return item.value }))
      let min = Math.min.apply(Math,this.curAccidentMapData.map(item => { return item.value }))
      if(this.ukMapOrBar)
      {
        let max = Math.max.apply(Math,this.curAccidentMapData.map(item => { return item.value }))
        let min = Math.min.apply(Math,this.curAccidentMapData.map(item => { return item.value }))
        const barOption = {
          title: {
            text: "Rank of UK Traffic Accidents",
            subtext: "Current Period: " + this.selectMapYear[0] + " ~ " + this.selectMapYear[1]
          },
          xAxis: {
            type: 'value'
          },
          yAxis: {
            type: 'category',
            axisLabel: {
              rotate: 30
            },
            data: this.curAccidentMapData.map(function (item) {
              return item.name;
            })
          },
          tooltip: {

          },
          visualMap: {
            orient: 'horizontal',
            left: 'center',
            min: min,
            max: max,
            text: ['High', 'Low'],
            // Map the score column to color
            dimension: 0,
            inRange: {
              color: [
                '#4575b4',
                '#74add1',
                '#abd9e9',
                '#e0f3f8',
                '#ffffbf',
                '#fee090',
                '#fdae61',
                '#f46d43',
                '#d73027',
                '#a50026'
              ]
            }
          },
          animationDurationUpdate: 1000,
          series: {
            type: 'bar',
            id: 'uk_map_series',
            data: this.curAccidentMapData.map(function (item) {
              return item.value;
            }),
            universalTransition: true,
          }
        };
        this.ukMapOption = barOption
      }
      else
      {
        let data = this.accidentDataOnMap;
        this.ukMapOption = {
          title: {
            text: "UK Traffic Accidents",
            subtext: "Current Period: " + this.selectMapYear[0] + " ~ " + this.selectMapYear[1]
          },
          tooltip: {
            padding: 3,
            // backgroundColor: '#777',
            // borderColor: '#000',
            borderWidth: 1,
            formatter: function (obj)
            {
              let name = obj.name;
              let value = obj.value;
              let length = data.length;
              let hoveredCity = [];
              let color = obj.color;
              for(let i = 1; i < length; i++)
              {
                for(let j = 0; j < data[0].length; j++)
                {
                  if(data[i][j].name == name)
                  {
                    hoveredCity.push(data[i][j].value);
                    break;
                  }
                }
              }

              //alert(hoveredCity)
              //这两步就是获取 x 和y 坐标
              // var yindex=obj.dataIndex;
              // var xindex=obj.seriesIndex;
              // //当调用这个方法后，不会立即获取到ebox这个ID，所以用定时器，或许有别的方法，欢迎补充
              setTimeout(function(){
                //   //给饼图传入ID
                let xIndex = [2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015]
                let lineOption = {
                  title: [
                    {
                      text: name + " 05 ~15.  Current period: " + value,
                      textStyle: {
                        color: '#333333',
                        fontWeight: 'bold',
                        fontSize: 10
                      }
                    }
                  ],
                  xAxis: {
                    type: 'category',
                    data: xIndex
                  },
                  yAxis: {
                    type: 'value'
                  },
                  grid:{
                    x:50,
                    y:30,
                    x2:30,
                    y2:30,
                    borderWidth:1
                  },
                  series: [
                    {
                      data: hoveredCity,
                      type: 'line',
                      smooth: true,
                      itemStyle: {
                        normal: {
                          color: color, //改变折线点的颜色
                          lineStyle: {
                            color: color //改变折线颜色
                          }
                        }
                      },
                    }
                  ]
                };
                let tooltipLine = echarts.init(document.getElementById('ukMapTooltips'));
                tooltipLine.setOption(lineOption);
              },200);
              //重点是这一步，返回一个DIV模型
              return '<div id="ukMapTooltips" style="width:250px; height:150px;" class="ukMapTooltips"></div>'

            }
          },
          visualMap: {
            min: min,
            max: max,
            text: ['High', 'Low'],
            realtime: false,
            calculable: true,
            inRange: {
              color: [
                '#4575b4',
                '#74add1',
                '#abd9e9',
                '#e0f3f8',
                '#ffffbf',
                '#fee090',
                '#fdae61',
                '#f46d43',
                '#d73027',
                '#a50026'
              ]
            }
          },
          toolbox: {
            show: true,
            orient: 'vertical',
            left: 'right',
            top: 'center',
            feature: {
              dataView: { readOnly: false },
              restore: {},
              saveAsImage: {}
            }
          },
          series: [
            {
              id: "uk_map_series",
              name: 'UK Traffic',
              type: 'map',
              map: 'UK-Map',
              roam: true,
              selectedMode: 'multiple',
              layoutCenter: ['35%', '50%'],
              layoutSize: '90%',
              data: this.curAccidentMapData
            }
          ]
        };
      }
      this.mapUK.hideLoading();
      this.mapUK.setOption(this.ukMapOption);

    },
    ukMapOrBarSelect()
    {
      // Switch to bar chart
      this.curAccidentMapData.sort(function (a, b) {
        return a.value - b.value;
      });
      if(this.ukMapOrBar)
      {
        let max = Math.max.apply(Math,this.curAccidentMapData.map(item => { return item.value }))
        let min = Math.min.apply(Math,this.curAccidentMapData.map(item => { return item.value }))
        const barOption = {
          title: {
            text: "Rank of UK Traffic Accidents",
            subtext: "Current Period: " + this.selectMapYear[0] + " ~ " + this.selectMapYear[1]
          },
          xAxis: {
            type: 'value'
          },
          yAxis: {
            type: 'category',
            axisLabel: {
              rotate: 30
            },
            data: this.curAccidentMapData.map(function (item) {
              return item.name;
            })
          },
          tooltip: {

          },
          visualMap: {
            orient: 'horizontal',
            left: 'center',
            min: min,
            max: max,
            text: ['High', 'Low'],
            // Map the score column to color
            dimension: 0,
            inRange: {
              color: [
                '#4575b4',
                '#74add1',
                '#abd9e9',
                '#e0f3f8',
                '#ffffbf',
                '#fee090',
                '#fdae61',
                '#f46d43',
                '#d73027',
                '#a50026'
              ]
            }
          },
          animationDurationUpdate: 1000,
          series: {
            type: 'bar',
            id: 'uk_map_series',
            data: this.curAccidentMapData.map(function (item) {
              return item.value;
            }),
            universalTransition: true,
          }
        };
        this.mapUK.setOption(barOption, true);
      }
      // Switch to map
      else
      {
        let data = this.accidentDataOnMap;
        let max = Math.max.apply(Math,this.curAccidentMapData.map(item => { return item.value }))
        let min = Math.min.apply(Math,this.curAccidentMapData.map(item => { return item.value }))
        this.ukMapOption = {
          title: {
            text: "UK Traffic Accidents",
            subtext: "Current Period: " + this.selectMapYear[0] + " ~ " + this.selectMapYear[1]
          },
          tooltip: {
            padding: 3,
            // backgroundColor: '#777',
            // borderColor: '#000',
            borderWidth: 1,
            formatter: function (obj)
            {
              let name = obj.name;
              let value = obj.value;
              let length = data.length;
              let hoveredCity = [];
              let color = obj.color;
              for(let i = 1; i < length; i++)
              {
                for(let j = 0; j < data[0].length; j++)
                {
                  if(data[i][j].name == name)
                  {
                    hoveredCity.push(data[i][j].value);
                    break;
                  }
                }
              }

              //alert(hoveredCity)
              //这两步就是获取 x 和y 坐标
              // var yindex=obj.dataIndex;
              // var xindex=obj.seriesIndex;
              // //当调用这个方法后，不会立即获取到ebox这个ID，所以用定时器，或许有别的方法，欢迎补充
              setTimeout(function(){
                //   //给饼图传入ID
                let xIndex = [2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015]
                let lineOption = {
                  title: [
                    {
                      text: name + " 05 ~15.  Current period: " + value,
                      textStyle: {
                        color: '#333333',
                        fontWeight: 'bold',
                        fontSize: 10
                      }
                    }
                  ],
                  xAxis: {
                    type: 'category',
                    data: xIndex
                  },
                  yAxis: {
                    type: 'value'
                  },
                  grid:{
                    x:50,
                    y:30,
                    x2:30,
                    y2:30,
                    borderWidth:1
                  },
                  series: [
                    {
                      data: hoveredCity,
                      type: 'line',
                      smooth: true,
                      itemStyle: {
                        normal: {
                          color: color,
                          lineStyle: {
                            color: color
                          }
                        }
                      },
                    }
                  ]
                };
                let tooltipLine = echarts.init(document.getElementById('ukMapTooltips'));
                tooltipLine.setOption(lineOption);
              },200);
              //重点是这一步，返回一个DIV模型
              return '<div id="ukMapTooltips" style="width:250px; height:150px;" class="ukMapTooltips"></div>'

            }
          },
          visualMap: {
            min: min,
            max: max,
            text: ['High', 'Low'],
            realtime: false,
            calculable: true,
            inRange: {
              color: [
                '#4575b4',
                '#74add1',
                '#abd9e9',
                '#e0f3f8',
                '#ffffbf',
                '#fee090',
                '#fdae61',
                '#f46d43',
                '#d73027',
                '#a50026'
              ]
            }
          },
          toolbox: {
            show: true,
            orient: 'vertical',
            left: 'right',
            top: 'center',
            feature: {
              dataView: { readOnly: false },
              restore: {},
              saveAsImage: {}
            }
          },
          series: [
            {
              id: "uk_map_series",
              name: 'UK Traffic',
              type: 'map',
              map: 'UK-Map',
              roam: true,
              selectedMode: 'multiple',
              layoutCenter: ['35%', '50%'],
              layoutSize: '90%',
              animationDurationUpdate: 1000,
              universalTransition: true,
              data: this.curAccidentMapData
            }
          ]
        };
        this.mapUK.setOption(this.ukMapOption, true);
      }
    }
  },
  created()
  {
    // let urlAll = "http://localhost:8090/calendarData";
    //this.loadGeoMapData();
  },
  mounted () {
    this.loadGeoMapData();
    /*echarts.registerMap('British', mapJson)
    var map = echarts.init(document.getElementById('map'));
    map.setOption(
      {
        series: [
          {
            name:'British',
            type:'map',
            mapType:'British'
          }
        ]
      }
    );*/
  }
}
</script>
<style scoped>

</style>
