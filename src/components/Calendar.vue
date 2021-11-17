<template>
  <div class="calendar">
    <el-row :gutter="20">
      <el-col :span="8">
        <el-date-picker v-model="curMonCalendarTY" type="month"
                        placeholder="Select a month" size="medium"
                        @change="monChangeCalendarTY" value-format="yyyy-MM">
        </el-date-picker>
      </el-col>
      <el-col :span="8">
        <el-select v-model="selectModeInCalendarsTY" placeholder="Select a mode" size="medium" @change="modeChangeCalendarTY">
          <el-option
            v-for="item in allModesInCalendarTY"
            :key="item.value"
            :label="item.value"
            :value="item.value">
          </el-option>
        </el-select>
      </el-col>
    </el-row>
    <div id="calendarAllTY" style="width: 800px;height:600px;"></div>
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
  name: 'Calendar',
  data() {
    return {
      // Default start and end date
      calendarTY: "",
      calendarStartDateTY: "2005-01",
      calendarEndDateTY: "2005-02",
      // Options
      optionCalendarsTY: "",
      curOptionCalendarTY: "",
      // Total accidents options
      dailyTotalAccidentsCalendarTY: "",

      allDataCalendarTY: [],
      // Selected month
      curMonthDataCalendarTY: [],
      // Pie chart data name (weather, road .etc)
      dataNameCalendarTY: [],
      curYearCalendarTY: 2005,
      // Default month is 2005-01
      curMonCalendarTY: '2005-01',
      curMonDataHeatMapCalendarTY: [],
      selectModeInCalendarsTY: "Daily Accident",
      allModesInCalendarTY: [
        {
          value: "Daily Accident"
        },
        {
          value: "Light Condition"
        },
        {
          value: "Road Surface"
        },
        {
          value: "Weather Condition"
        }
      ],
      // First calendar
      scatterDataCalendarTY: [],
      // Light condition
      lightConditionCalendarTY: "",
      roadConditionCalendarTY: "",
      weatherConditionCalendarTY: "",
    }
  },
  methods: {
    drawDefaultCalendarTY()
    {
      this.calendarTY = this.$echarts.init(document.getElementById("calendarAllTY"));
      this.calendarTY.showLoading();
      let urlAll = "http://localhost:8090/calendarData";
      axios.get(urlAll).then(response =>
      {
        //If query is success
        if (response.status == 200)
        {
          // console.log(response.data[1][0])
          this.allDataCalendarTY = response.data;
          this.curMonthDataCalendarTY = response.data[0][0][0];
          this.scatterDataCalendarTY = this.curMonthDataCalendarTY;
          console.log(this.allDataCalendarTY)
          this.lightConditionCalendarTY = this.allDataCalendarTY[1];
          this.roadConditionCalendarTY = this.allDataCalendarTY[2];
          this.weatherConditionCalendarTY = this.allDataCalendarTY[3];
          this.curOptionCalendarTY = {
            tooltip: {
              position: 'top'
            },
            visualMap: [
              {
                min: 0,
                max: 850,
                bottom: "15%",
                left: "20%",
                text: ['High', 'Accident number: Low'],
                inRange: {
                  color: ['lightskyblue','yellow', 'red'],
                  opacity: [0, 0.5]
                },
                controller: {
                  inRange: {
                    opacity: [0.3, 0.9]
                  },
                  outOfRange: {
                    color: '#ccc'
                  }
                },
                orient: 'horizontal'
              }
            ],
            calendar: {
                left: "10%",
                orient: 'vertical',
                yearLabel: {
                  show: false
                },
                dayLabel: {
                  firstDay: 1,
                  nameMap: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
                },
                monthLabel: {
                  margin: 10,
                  nameMap: [
                    'Jan', 'Feb', 'Mar',
                    'Apr', 'May', 'Jun',
                    'Jul', 'Aug', 'Sep',
                    'Oct', 'Nov', 'Dec'
                  ]
                },
                cellSize: 70,
                range: '2005-1'
            },
            series: [
              {
                type: 'effectScatter',
                coordinateSystem: 'calendar',
                symbolSize: function (val) {
                  return val[1] / 30;
                },
                data: this.curMonthDataCalendarTY
              }
            ]
          };
          this.dailyTotalAccidentsCalendarTY = this.curOptionCalendarTY;
          this.calendarTY.hideLoading();
          this.optionCalendarsTY = this.curOptionCalendarTY;
          this.calendarTY.setOption(this.optionCalendarsTY);
        }





      });
    },
    getPieSeriesCalendarTY(scatterData, chart)
    {
      let year = parseInt(this.curMonCalendarTY.split("-")[0])
      let mon = parseInt(this.curMonCalendarTY.split("-")[1])
      let yearDiffer = year - 2005;
      let monDiffer = mon - 1;
      let data_attr = [];
      let colorList = [];
      if(this.selectModeInCalendarsTY == "Light Condition")
      {
        for(let i = 0; i < this.lightConditionCalendarTY[yearDiffer][monDiffer].length; i++)
          data_attr.push(this.lightConditionCalendarTY[yearDiffer][monDiffer][i].data)
        colorList = ['#ff8936', '#c89b40', '#003472'];
      }
      else if(this.selectModeInCalendarsTY == "Road Surface")
      {
        for(let i = 0; i < this.roadConditionCalendarTY[yearDiffer][monDiffer].length; i++)
          data_attr.push(this.roadConditionCalendarTY[yearDiffer][monDiffer][i].data)
        colorList = ['#eacd76', '#87CEEB', '#21a675', '#2e4e7e', '#9D2933'];
      }
      else if(this.selectModeInCalendarsTY == "Weather Condition")
      {
        for(let i = 0; i < this.weatherConditionCalendarTY[yearDiffer][monDiffer].length; i++)
          data_attr.push(this.weatherConditionCalendarTY[yearDiffer][monDiffer][i].data)
        colorList = ['#fac858', '#91cc75', '#3eede7', '#2e4e7e', '#8b4bbb', '#9d2933', '#56004f'];
      }
      chart = this.calendarTY
      return this.$echarts.util.map(scatterData, function(item, index)
      {
        let center = chart.convertToPixel('calendar', item);
        console.log(item)
        return {
          color: colorList,
          id: index + 'pie-calendar',
          type: 'pie',
          center: center,
          label: {
            formatter: '{c}',
            position: 'inside'
          },
          radius: 25,
          data: data_attr[index]
        };
      });
    },
    getPieSeriesUpdateCalendarTY(scatterData, chart)
    {
      chart = this.calendarTY
      return this.$echarts.util.map(scatterData, function (item, index)
        {
          let center = chart.convertToPixel('calendar', item);
          return {
            id: index + 'pie',
            center: center
          };
        });
    },
    modeChangeCalendarTY()
    {
      let year = parseInt(this.curMonCalendarTY.split("-")[0])
      let mon = parseInt(this.curMonCalendarTY.split("-")[1])
      let yearDiffer = year - 2005;
      let monDiffer = mon - 1;
      this.curMonthDataCalendarTY = this.allDataCalendarTY[0][yearDiffer][monDiffer];
      if(this.selectModeInCalendarsTY == "Daily Accident")
      {
        this.calendarTY.showLoading();
        this.calendarTY.clear();
        let optionTotal = {
          tooltip: {
            position: 'top'
          },
          visualMap: [
            {
              min: 0,
              max: 850,
              bottom: "15%",
              left: "20%",
              text: ['High', 'Accident number: Low'],
              inRange: {
                color: ['lightskyblue','yellow', 'dark red'],
                opacity: [0, 0.5]
              },
              controller: {
                inRange: {
                  opacity: [0.3, 0.9]
                },
                outOfRange: {
                  color: '#ccc'
                }
              },
              orient: 'horizontal'
            }
          ],
          calendar: {
              left: "20%",
              orient: 'vertical',
              yearLabel: {
                show: false
              },
              dayLabel: {
                top: "5%",
                firstDay: 1,
                nameMap: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
              },
              monthLabel: {
                margin: 10,
                nameMap: [
                    'Jan', 'Feb', 'Mar',
                    'Apr', 'May', 'Jun',
                    'Jul', 'Aug', 'Sep',
                    'Oct', 'Nov', 'Dec'
                ]
              },
              cellSize: [70, 70],
              range: [this.curMonCalendarTY]
            },
          series: [
            {
              type: 'effectScatter',
              coordinateSystem: 'calendar',
              symbolSize: function (val) {
                return val[1] / 30;
              },
              data: this.curMonthDataCalendarTY
            }
          ]
        };
        this.optionCalendarsTY = optionTotal;
        this.curOptionCalendarTY = optionTotal;
        this.calendarTY.setOption(this.optionCalendarsTY)
        this.calendarTY.hideLoading();
      }
      else if(this.selectModeInCalendarsTY == "Light Condition")
      {
        let data_name= ['Daylight', 'Weak light', 'No light'];
        let cellSize = [70, 70];
        let option = {
          tooltip: {
            position: 'top'
          },
          legend: {
            data: data_name,
            bottom: 5
          },
          calendar: {
            left: "20%",
            orient: 'vertical',
            yearLabel: {
              show: false
            },
            dayLabel: {
              firstDay: 1,
              nameMap: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
            },
            monthLabel: {
              margin: 10,
              nameMap: [
                'Jan', 'Feb', 'Mar',
                'Apr', 'May', 'Jun',
                'Jul', 'Aug', 'Sep',
                'Oct', 'Nov', 'Dec'
              ]
            },
            cellSize: 70,
            range: [this.curMonCalendarTY]
          },
          series: [
            {
              id: 'label',
              type: 'scatter',
              coordinateSystem: 'calendar',
              symbolSize: 1,
              label: {
                show: true,
                formatter: function (params) {
                  return echarts.format.formatTime('dd', params.value[0]);
                },
                offset: [-cellSize[0] / 2 + 10, -cellSize[1] / 2 + 10],
                fontSize: 12
              },
              data: this.curMonthDataCalendarTY
            }
          ]
        };

        this.calendarTY.clear();
        this.calendarTY.setOption(option)
        let pieInitialized = true;
        let pieSeries = this.getPieSeriesCalendarTY(this.curMonthDataCalendarTY, this.calendarTY);
        console.log(pieSeries)
        if(!this.calendarTY.inNode)
        {
          this.calendarTY.setOption({
            series: pieSeries
          });
        }
        this.calendarTY.onresize = function () {
          if (pieInitialized) {
            this.calendar.setOption({
              series: this.getPieSeriesUpdateCalendarTY(this.curMonthDataCalendarTY, this.calendar)
            });
          }
        };
      }
      else if(this.selectModeInCalendarsTY == "Road Surface")
      {
        let data_name= ['Dry', 'Damp', 'Frost',
          'Snow', "Flood"];
        let cellSize = [70, 70];
        let option = {
          tooltip: {
            position: 'top'
          },
          legend: {
            data: data_name,
            bottom: 5
          },
          calendar: {
            left: "20%",
            orient: 'vertical',
            yearLabel: {
              show: false
            },
            dayLabel: {
              firstDay: 1,
              nameMap: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
            },
            monthLabel: {
              margin: 10,
              nameMap: [
                'Jan', 'Feb', 'Mar',
                'Apr', 'May', 'Jun',
                'Jul', 'Aug', 'Sep',
                'Oct', 'Nov', 'Dec'
              ]
            },
            cellSize: 70,
            range: [this.curMonCalendarTY]
          },
          series: [
            {
              id: 'label',
              type: 'scatter',
              coordinateSystem: 'calendar',
              symbolSize: 1,
              label: {
                show: true,
                formatter: function (params) {
                  return echarts.format.formatTime('dd', params.value[0]);
                },
                offset: [-cellSize[0] / 2 + 10, -cellSize[1] / 2 + 10],
                fontSize: 12
              },
              data: this.curMonthDataCalendarTY
            }
          ]
        };

        this.calendarTY.clear();
        this.calendarTY.setOption(option)
        let pieInitialized = true;
        let pieSeries = this.getPieSeriesCalendarTY(this.curMonthDataCalendarTY, this.calendarTY);
        console.log(pieSeries)
        if(!this.calendarTY.inNode)
        {
          this.calendarTY.setOption({
            series: pieSeries
          });
        }
        this.calendarTY.onresize = function () {
          if (pieInitialized) {
            this.calendar.setOption({
              series: this.getPieSeriesUpdateCalendarTY(this.curMonthDataCalendarTY, this.calendar)
            });
          }
        };
      }
      else if(this.selectModeInCalendarsTY == "Weather Condition")
      {
        let data_name1 = ['Fine', 'Rain', 'Snow', 'High winds']
        let data_name2 = ['High winds', "Rain & high winds", "Fog", 'Snow & high winds'];
        let cellSize = [70, 70];
        let option = {
          tooltip: {
            position: 'top'
          },
          legend: [
            {
              data: data_name1,
              bottom: 30
            },
            {
              data: data_name2,
              bottom: 5
            }
          ],
          calendar: {
            left: "20%",
            orient: 'vertical',
            yearLabel: {
              show: false
            },
            dayLabel: {
              firstDay: 1,
              nameMap: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
            },
            monthLabel: {
              margin: 10,
              nameMap: [
                'Jan', 'Feb', 'Mar',
                'Apr', 'May', 'Jun',
                'Jul', 'Aug', 'Sep',
                'Oct', 'Nov', 'Dec'
              ]
            },
            cellSize: 70,
            range: [this.curMonCalendarTY]
          },
          series: [
            {
              id: 'label',
              type: 'scatter',
              coordinateSystem: 'calendar',
              symbolSize: 1,
              label: {
                show: true,
                formatter: function (params) {
                  return echarts.format.formatTime('dd', params.value[0]);
                },
                offset: [-cellSize[0] / 2 + 10, -cellSize[1] / 2 + 10],
                fontSize: 12
              },
              data: this.curMonthDataCalendarTY
            }
          ]
        };

        this.calendarTY.clear();
        this.calendarTY.setOption(option)
        let pieInitialized = true;
        let pieSeries = this.getPieSeriesCalendarTY(this.curMonthDataCalendarTY, this.calendarTY);
        console.log(pieSeries)
        if(!this.calendarTY.inNode)
        {
          this.calendarTY.setOption({
            series: pieSeries
          });
        }
        this.calendarTY.onresize = function () {
          if (pieInitialized) {
            this.calendar.setOption({
              series: this.getPieSeriesUpdateCalendarTY(this.curMonthDataCalendarTY, this.calendar)
            });
          }
        };
      }

    },
    monChangeCalendarTY()
    {
      let year = parseInt(this.curMonCalendarTY.split("-")[0])
      let mon = parseInt(this.curMonCalendarTY.split("-")[1])
      let yearDiffer = year - 2005;
      let monDiffer = mon - 1;
      this.curMonthDataCalendarTY = this.allDataCalendarTY[0][yearDiffer][monDiffer];
      if(this.selectModeInCalendarsTY == "Daily Accident")
      {
        this.calendarTY.showLoading();
        this.calendarTY.clear();
        let optionTotal = {
          tooltip: {
            position: 'top'
          },
          visualMap: [
            {
              min: 0,
              max: 850,
              bottom: "15%",
              left: "20%",
              text: ['High', 'Accident number: Low'],
              inRange: {
                color: ['lightskyblue','yellow', 'dark red'],
                opacity: [0, 0.5]
              },
              controller: {
                inRange: {
                  opacity: [0.3, 0.9]
                },
                outOfRange: {
                  color: '#ccc'
                }
              },
              orient: 'horizontal'
            }
          ],
          calendar: {
            left: "20%",
            orient: 'vertical',
            yearLabel: {
              show: false
            },
            dayLabel: {
              top: "5%",
              firstDay: 1,
              nameMap: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
            },
            monthLabel: {
              margin: 10,
              nameMap: [
                'Jan', 'Feb', 'Mar',
                'Apr', 'May', 'Jun',
                'Jul', 'Aug', 'Sep',
                'Oct', 'Nov', 'Dec'
              ]
            },
            cellSize: [70, 70],
            range: [this.curMonCalendarTY]
          },
          series: [
            {
              type: 'effectScatter',
              coordinateSystem: 'calendar',
              symbolSize: function (val) {
                return val[1] / 30;
              },
              data: this.curMonthDataCalendarTY
            }
          ]
        };
        this.optionCalendarsTY = optionTotal;
        this.curOptionCalendarTY = optionTotal;
        this.calendarTY.setOption(this.optionCalendarsTY)
        this.calendarTY.hideLoading();
      }
      else if(this.selectModeInCalendarsTY == "Light Condition")
      {
        let data_name= ['Daylight', 'Weak light', 'No light'];
        let cellSize = [70, 70];
        let option = {
          tooltip: {
            position: 'top'
          },
          legend: {
            data: data_name,
            bottom: 5
          },
          calendar: {
            left: "20%",
            orient: 'vertical',
            yearLabel: {
              show: false
            },
            dayLabel: {
              firstDay: 1,
              nameMap: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
            },
            monthLabel: {
              margin: 10,
              nameMap: [
                'Jan', 'Feb', 'Mar',
                'Apr', 'May', 'Jun',
                'Jul', 'Aug', 'Sep',
                'Oct', 'Nov', 'Dec'
              ]
            },
            cellSize: 70,
            range: [this.curMonCalendarTY]
          },
          series: [
            {
              id: 'label',
              type: 'scatter',
              coordinateSystem: 'calendar',
              symbolSize: 1,
              label: {
                show: true,
                formatter: function (params) {
                  return echarts.format.formatTime('dd', params.value[0]);
                },
                offset: [-cellSize[0] / 2 + 10, -cellSize[1] / 2 + 10],
                fontSize: 12
              },
              data: this.curMonthDataCalendarTY
            }
          ]
        };

        this.calendarTY.clear();
        this.calendarTY.setOption(option)
        let pieInitialized = true;
        let pieSeries = this.getPieSeriesCalendarTY(this.curMonthDataCalendarTY, this.calendarTY);
        console.log(pieSeries)
        if(!this.calendarTY.inNode)
        {
          this.calendarTY.setOption({
            series: pieSeries
          });
        }
        this.calendarTY.onresize = function () {
          if (pieInitialized) {
            this.calendar.setOption({
              series: this.getPieSeriesUpdateCalendarTY(this.curMonthDataCalendarTY, this.calendar)
            });
          }
        };
      }
      else if(this.selectModeInCalendarsTY == "Road Surface")
      {
        let data_name= ['Dry', 'Damp', 'Frost',
          'Snow', "Flood"];
        let cellSize = [70, 70];
        let option = {
          tooltip: {
            position: 'top'
          },
          legend: {
            data: data_name,
            bottom: 5
          },
          calendar: {
            left: "20%",
            orient: 'vertical',
            yearLabel: {
              show: false
            },
            dayLabel: {
              firstDay: 1,
              nameMap: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
            },
            monthLabel: {
              margin: 10,
              nameMap: [
                'Jan', 'Feb', 'Mar',
                'Apr', 'May', 'Jun',
                'Jul', 'Aug', 'Sep',
                'Oct', 'Nov', 'Dec'
              ]
            },
            cellSize: 70,
            range: [this.curMonCalendarTY]
          },
          series: [
            {
              id: 'label',
              type: 'scatter',
              coordinateSystem: 'calendar',
              symbolSize: 1,
              label: {
                show: true,
                formatter: function (params) {
                  return echarts.format.formatTime('dd', params.value[0]);
                },
                offset: [-cellSize[0] / 2 + 10, -cellSize[1] / 2 + 10],
                fontSize: 12
              },
              data: this.curMonthDataCalendarTY
            }
          ]
        };

        this.calendarTY.clear();
        this.calendarTY.setOption(option)
        let pieInitialized = true;
        let pieSeries = this.getPieSeriesCalendarTY(this.curMonthDataCalendarTY, this.calendarTY);
        console.log(pieSeries)
        if(!this.calendarTY.inNode)
        {
          this.calendarTY.setOption({
            series: pieSeries
          });
        }
        this.calendarTY.onresize = function () {
          if (pieInitialized) {
            this.calendar.setOption({
              series: this.getPieSeriesUpdateCalendarTY(this.curMonthDataCalendarTY, this.calendar)
            });
          }
        };
      }
      else if(this.selectModeInCalendarsTY == "Weather Condition")
      {
        let data_name1 = ['Fine', 'Rain', 'Snow', 'High winds']
        let data_name2 = ['High winds', "Rain & high winds", "Fog", 'Snow & high winds'];
        let cellSize = [70, 70];
        let option = {
          tooltip: {
            position: 'top'
          },
          legend: [
            {
              data: data_name1,
              bottom: 30
            },
            {
              data: data_name2,
              bottom: 5
            }
          ],
          calendar: {
            left: "20%",
            orient: 'vertical',
            yearLabel: {
              show: false
            },
            dayLabel: {
              firstDay: 1,
              nameMap: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
            },
            monthLabel: {
              margin: 10,
              nameMap: [
                'Jan', 'Feb', 'Mar',
                'Apr', 'May', 'Jun',
                'Jul', 'Aug', 'Sep',
                'Oct', 'Nov', 'Dec'
              ]
            },
            cellSize: 70,
            range: [this.curMonCalendarTY]
          },
          series: [
            {
              id: 'label',
              type: 'scatter',
              coordinateSystem: 'calendar',
              symbolSize: 1,
              label: {
                show: true,
                formatter: function (params) {
                  return echarts.format.formatTime('dd', params.value[0]);
                },
                offset: [-cellSize[0] / 2 + 10, -cellSize[1] / 2 + 10],
                fontSize: 12
              },
              data: this.curMonthDataCalendarTY
            }
          ]
        };

        this.calendarTY.clear();
        this.calendarTY.setOption(option)
        let pieInitialized = true;
        let pieSeries = this.getPieSeriesCalendarTY(this.curMonthDataCalendarTY, this.calendarTY);
        console.log(pieSeries)
        if(!this.calendarTY.inNode)
        {
          this.calendarTY.setOption({
            series: pieSeries
          });
        }
        this.calendarTY.onresize = function () {
          if (pieInitialized) {
            this.calendar.setOption({
              series: this.getPieSeriesUpdateCalendarTY(this.curMonthDataCalendarTY, this.calendar)
            });
          }
        };
      }
    }
  },
  created ()
  {

  },
  mounted ()
  {
    console.log(this.curMonthDataCalendarTY + " AAA")
    this.drawDefaultCalendarTY();
  }
}
</script>

<style scoped>

</style>
