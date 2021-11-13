<template>
  <div class="calendar">
    <el-row :gutter="20">
      <el-col :span="5">
        <el-date-picker v-model="curMon" type="month"
                        placeholder="Select a month" size="medium"
                        @change="monChange" value-format="yyyy-MM">
        </el-date-picker>
      </el-col>
      <el-col :span="5">
        <el-select v-model="selectedMode" placeholder="Select a mode" @change="modeChange">
          <el-option
            v-for="item in allModes"
            :key="item.value"
            :label="item.value"
            :value="item.value">
          </el-option>
        </el-select>
      </el-col>
    </el-row>
    <p></p>
    <div id="calendarAll" style="width: 800px;height:600px;"></div>
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
      calendar: "",
      startDate: "2005-01",
      endDate: "2005-02",
      // Options
      option: "",
      curOption: "",
      // Total accidents options
      dailyTotalAccidents: "",

      allData: [],
      // Selected month
      curMonthData: [],
      // Pie chart data name (weather, road .etc)
      dataName: [],
      curYear: 2005,
      // Default month is 2005-01
      curMon: '2005-01',
      curNonDataHeatMap: [],
      selectedMode: "Daily Accident",
      allModes: [
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
      scatterData: [],
      // Light condition
      lightCondition: "",
      roadCondition: "",
      weatherCondition: "",
      app: {}
    }
  },
  methods: {
    drawDefault()
    {
      this.calendar = this.$echarts.init(document.getElementById("calendarAll"));
      this.calendar.showLoading();
      let urlAll = "http://localhost:8090/calendarData";
      axios.get(urlAll).then(response =>
      {
        //If query is success
        if (response.status == 200)
        {
          // console.log(response.data[1][0])
          this.allData = response.data;
          this.curMonthData = response.data[0][0][0];
          this.scatterData = this.curMonthData;
          console.log(this.allData)
          this.lightCondition = this.allData[1];
          this.roadCondition = this.allData[2];
          this.weatherCondition = this.allData[3];
          this.curOption = {
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
                range: '2005-1'
            },
            series: [
              {
                type: 'effectScatter',
                coordinateSystem: 'calendar',
                symbolSize: function (val) {
                  return val[1] / 30;
                },
                data: this.curMonthData
              }
            ]
          };
          this.dailyTotalAccidents = this.curOption;
          this.calendar.hideLoading();
          this.option = this.curOption;
          this.calendar.setOption(this.option);
        }





      });
    },
    getPieSeries(scatterData, chart)
    {
      let year = parseInt(this.curMon.split("-")[0])
      let mon = parseInt(this.curMon.split("-")[1])
      let yearDiffer = year - 2005;
      let monDiffer = mon - 1;
      let data_attr = [];
      let colorList = [];
      if(this.selectedMode == "Light Condition")
      {
        for(let i = 0; i < this.lightCondition[yearDiffer][monDiffer].length; i++)
          data_attr.push(this.lightCondition[yearDiffer][monDiffer][i].data)
        colorList = ['#ff8936', '#c89b40', '#003472'];
      }
      else if(this.selectedMode == "Road Surface")
      {
        for(let i = 0; i < this.roadCondition[yearDiffer][monDiffer].length; i++)
          data_attr.push(this.roadCondition[yearDiffer][monDiffer][i].data)
        colorList = ['#eacd76', '#87CEEB', '#21a675', '#2e4e7e', '#9D2933'];
      }
      else if(this.selectedMode == "Weather Condition")
      {
        for(let i = 0; i < this.weatherCondition[yearDiffer][monDiffer].length; i++)
          data_attr.push(this.weatherCondition[yearDiffer][monDiffer][i].data)
        colorList = ['#fac858', '#91cc75', '#3eede7', '#2e4e7e', '#8b4bbb', '#9d2933', '#56004f'];
      }
      chart = this.calendar
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
    getPieSeriesUpdate(scatterData, chart)
    {
      chart = this.calendar
      return this.$echarts.util.map(scatterData, function (item, index)
        {
          let center = chart.convertToPixel('calendar', item);
          return {
            id: index + 'pie',
            center: center
          };
        });
    },
    calendarMaps(item, index)
    {
      let center = this.calendar.convertToPixel('calendar', item);
      console.log(index)
      return [center, index]
    },
    modeChange()
    {
      let year = parseInt(this.curMon.split("-")[0])
      let mon = parseInt(this.curMon.split("-")[1])
      let yearDiffer = year - 2005;
      let monDiffer = mon - 1;
      this.curMonthData = this.allData[0][yearDiffer][monDiffer];
      if(this.selectedMode == "Daily Accident")
      {
        this.calendar.showLoading();
        this.calendar.clear();
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
              range: [this.curMon]
            },
          series: [
            {
              type: 'effectScatter',
              coordinateSystem: 'calendar',
              symbolSize: function (val) {
                return val[1] / 30;
              },
              data: this.curMonthData
            }
          ]
        };
        this.option = optionTotal;
        this.curOption = optionTotal;
        this.calendar.setOption(this.option)
        this.calendar.hideLoading();
      }
      else if(this.selectedMode == "Light Condition")
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
            range: [this.curMon]
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
              data: this.curMonthData
            }
          ]
        };

        this.calendar.clear();
        this.calendar.setOption(option)
        let pieInitialized = true;
        let pieSeries = this.getPieSeries(this.curMonthData, this.calendar);
        console.log(pieSeries)
        if(!this.calendar.inNode)
        {
          this.calendar.setOption({
            series: pieSeries
          });
        }
        this.calendar.onresize = function () {
          if (pieInitialized) {
            this.calendar.setOption({
              series: this.getPieSeriesUpdate(this.curMonthData, this.calendar)
            });
          }
        };
      }
      else if(this.selectedMode == "Road Surface")
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
            range: [this.curMon]
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
              data: this.curMonthData
            }
          ]
        };

        this.calendar.clear();
        this.calendar.setOption(option)
        let pieInitialized = true;
        let pieSeries = this.getPieSeries(this.curMonthData, this.calendar);
        console.log(pieSeries)
        if(!this.calendar.inNode)
        {
          this.calendar.setOption({
            series: pieSeries
          });
        }
        this.calendar.onresize = function () {
          if (pieInitialized) {
            this.calendar.setOption({
              series: this.getPieSeriesUpdate(this.curMonthData, this.calendar)
            });
          }
        };
      }
      else if(this.selectedMode == "Weather Condition")
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
            range: [this.curMon]
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
              data: this.curMonthData
            }
          ]
        };

        this.calendar.clear();
        this.calendar.setOption(option)
        let pieInitialized = true;
        let pieSeries = this.getPieSeries(this.curMonthData, this.calendar);
        console.log(pieSeries)
        if(!this.calendar.inNode)
        {
          this.calendar.setOption({
            series: pieSeries
          });
        }
        this.calendar.onresize = function () {
          if (pieInitialized) {
            this.calendar.setOption({
              series: this.getPieSeriesUpdate(this.curMonthData, this.calendar)
            });
          }
        };
      }

    },
    monChange()
    {
      let year = parseInt(this.curMon.split("-")[0])
      let mon = parseInt(this.curMon.split("-")[1])
      let yearDiffer = year - 2005;
      let monDiffer = mon - 1;
      this.curMonthData = this.allData[0][yearDiffer][monDiffer];
      if(this.selectedMode == "Daily Accident")
      {
        this.calendar.showLoading();
        this.calendar.clear();
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
            range: [this.curMon]
          },
          series: [
            {
              type: 'effectScatter',
              coordinateSystem: 'calendar',
              symbolSize: function (val) {
                return val[1] / 30;
              },
              data: this.curMonthData
            }
          ]
        };
        this.option = optionTotal;
        this.curOption = optionTotal;
        this.calendar.setOption(this.option)
        this.calendar.hideLoading();
      }
      else if(this.selectedMode == "Light Condition")
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
            range: [this.curMon]
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
              data: this.curMonthData
            }
          ]
        };

        this.calendar.clear();
        this.calendar.setOption(option)
        let pieInitialized = true;
        let pieSeries = this.getPieSeries(this.curMonthData, this.calendar);
        console.log(pieSeries)
        if(!this.calendar.inNode)
        {
          this.calendar.setOption({
            series: pieSeries
          });
        }
        this.calendar.onresize = function () {
          if (pieInitialized) {
            this.calendar.setOption({
              series: this.getPieSeriesUpdate(this.curMonthData, this.calendar)
            });
          }
        };
      }
      else if(this.selectedMode == "Road Surface")
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
            range: [this.curMon]
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
              data: this.curMonthData
            }
          ]
        };

        this.calendar.clear();
        this.calendar.setOption(option)
        let pieInitialized = true;
        let pieSeries = this.getPieSeries(this.curMonthData, this.calendar);
        console.log(pieSeries)
        if(!this.calendar.inNode)
        {
          this.calendar.setOption({
            series: pieSeries
          });
        }
        this.calendar.onresize = function () {
          if (pieInitialized) {
            this.calendar.setOption({
              series: this.getPieSeriesUpdate(this.curMonthData, this.calendar)
            });
          }
        };
      }
      else if(this.selectedMode == "Weather Condition")
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
            range: [this.curMon]
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
              data: this.curMonthData
            }
          ]
        };

        this.calendar.clear();
        this.calendar.setOption(option)
        let pieInitialized = true;
        let pieSeries = this.getPieSeries(this.curMonthData, this.calendar);
        console.log(pieSeries)
        if(!this.calendar.inNode)
        {
          this.calendar.setOption({
            series: pieSeries
          });
        }
        this.calendar.onresize = function () {
          if (pieInitialized) {
            this.calendar.setOption({
              series: this.getPieSeriesUpdate(this.curMonthData, this.calendar)
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
    console.log(this.curMonthData + " AAA")
    this.drawDefault();
  }
}
</script>

<style scoped>

</style>
