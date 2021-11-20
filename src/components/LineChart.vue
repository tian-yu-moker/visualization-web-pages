<template>
  <div class="Linechart">
    <el-row :gutter="20">
      <el-col :span="3">
        <el-select v-model="LineSelectedYearXK" multiple=2 placeholder="Select two years" @change="LineHandleSelectYearXK" @visible-change="$forceUpdate()">
          <el-option
            v-for="item in yearListXK"
            :key="item.value"
            :label="item.value"
            :value="item.value">
          </el-option>
        </el-select>
      </el-col>

    </el-row>
    <div id="LineOptionXK1" style="width: 750px;height:310px; top:5px; "></div>
    <div id="LineOptionXK2" style="width: 750px;height:310px; top:5px; "></div>
    <div id="LineOptionXK3" style="width: 750px;height:310px; top:5px; " ></div>

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
  name: 'Linechart',
  data() {
    return {
      LineOverviewXK: "",
      yearListXK: [
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
      LineSelectedYearXK: [],
      selectLimitedXK: 0,
      allYearTimesDataXK: []
    };
  },
  methods:{
    LineOptionXK1() {
      this.LineOverviewXK = this.$echarts.init(document.getElementById("LineOptionXK1"));
      this.LineOverviewXK.hideLoading();
      const formatUtil = echarts.format;

      // this.overview.setOption(this.curBrandOption);
      let urlAll = "http://localhost:8090/Acc/getDailyAcc";
      axios.get(urlAll).then(response =>
      {
        //If query is success
        if (response.status == 200)
        {
          console.log(response.data[0])
          this.allYearTimesDataXK = response.data;
          this.accident_daily_XK = response.data[0];
          const formatUtil = echarts.format;
          this.LineOptionXK_1 = {
            title: [
              {
                text: 'January of 2005',
                left:'1%',
                textStyle: {
                  fontSize: 15,
                }
              },
              {
                text: 'February of 2005',
                left: '44%',
                textStyle: {
                  fontSize: 15,
                }
              },
              {
                text: 'March of 2005',
                top: '50%',
                left:'1%',
                textStyle: {
                  fontSize: 15,
                }
              },
              {
                text: 'April of 2005',
                top: '50%',
                left: '44%',
                textStyle: {
                  fontSize: 15,
                }
              },
            ],
            grid: [
              {
                left: '6%', top: '11%', width: '34%', height: '29%'
              },
              {
                right: '16%', top: '11%', width:'34%', height: '29%'
              },
              {
                left: '6%', bottom: '11%', width: '34%', height: '29%'
              },
              {
                right: '16%', bottom: '11%', width: '34%', height: '29%'
              }

            ],

            tooltip: {
              formatter: function (info)
              {
                let value = info.value;
                let name = info.name;
                if(name=="zero_to_two"){
                  return '0:00 - 2:00'+'<br>'+ 'Daily Accident number: ' + value
                }
                if(name=="two_to_four"){
                  return '2:00 - 4:00'+'<br>'+ 'Daily Accident number: ' + value
                }
                if(name== "four_to_six"){
                  return '4:00 - 6:00'+'<br>'+ 'Daily Accident number: ' + value
                }
                if(name=="six_to_eight"){
                  return '6:00 - 8:00'+'<br>'+ 'Daily Accident number: ' + value
                }
                if(name=="eight_to_ten"){
                  return '8:00 - 10:00'+'<br>'+ 'Daily Accident number: ' + value
                }
                if(name=="ten_to_twelve"){
                  return '10:00 - 12:00'+'<br>'+ 'Daily Accident number: ' + value
                }
                if(name=="twelve_to_fourteen"){
                  return '12:00 - 14:00'+'<br>'+ 'Daily Accident number: ' + value
                }
                if(name=="fourteen_to_sixteen"){
                  return '14:00 - 16:00'+'<br>'+ 'Daily Accident number: ' + value
                }
                if(name=="sixteen_to_eighteen"){
                  return '16:00 - 18:00'+'<br>'+ 'Daily Accident number: ' + value
                }
                if(name=="eighteen_to_twenty"){
                  return '18:00 - 20:00'+'<br>'+ 'Daily Accident number: ' + value
                }
                if(name=="twenty_to_twentytwo"){
                  return '20:00 - 22:00'+'<br>'+ 'Daily Accident number: ' + value
                }
                if(name=="twentytwo_to_twentyfour"){
                  return '22:00 - 24:00'+'<br>'+ 'Daily Accident number: ' + value
                }

              }
            },
            xAxis: [
              {
                data:[2,4,6,8,10,12,14,16,18,20,22,24],
                gridIndex: 0,
                boundaryGap: true,
                splitLine: {
                  show: true,
                  lineStyle:{
                    color: ['#DDDDDD'],
                    width: 1,
                  }
                },
              },
              {
                data:[2,4,6,8,10,12,14,16,18,20,22,24],
                gridIndex: 1,
                boundaryGap: true,
                splitLine: {
                  show: true,
                  lineStyle:{
                    color: ['#DDDDDD'],
                    width: 1,
                  }
                },
              },
              {
                data:[2,4,6,8,10,12,14,16,18,20,22,24],
                gridIndex: 2,
                boundaryGap: true,
                splitLine: {
                  show: true,
                  lineStyle:{
                    color: ['#DDDDDD'],
                    width: 1,
                  }
                },
              },
              {
                data:[2,4,6,8,10,12,14,16,18,20,22,24],
                gridIndex: 3,
                boundaryGap: true,
                splitLine: {
                  show: true,
                  lineStyle:{
                    color: ['#DDDDDD'],
                    width: 1,
                  }
                },
              },
            ],
            yAxis: [
              {
                type:'value',
                gridIndex:0,
                splitLine:{
                  show:true,
                  lineStyle:{
                    color: ['#DDDDDD'],
                    width: 1,

                  }
                }
              },
              {
                type:'value',
                gridIndex:1,
                splitLine:{
                  show:true,
                  lineStyle:{
                    color: ['#DDDDDD'],
                    width: 1,

                  }
                }
              },
              {
                type:'value',
                gridIndex:2,
                splitLine:{
                  show:true,
                  lineStyle:{
                    color: ['#DDDDDD'],
                    width: 1,

                  }
                }
              },
              {
                type:'value',
                gridIndex:3,
                splitLine:{
                  show:true,
                  lineStyle:{
                    color: ['#DDDDDD'],
                    width: 1,

                  }
                }
              },
            ],
            series: [
              {
                name: 'I-5',
                type: 'line',
                xAxisIndex: 0,
                yAxisIndex: 0,
                data: this.accident_daily_XK[0],
                smooth: true,

                symbol: 'circle',
                color : '#A8CD74'

              },

              {
                name: 'II',
                type: 'line',
                xAxisIndex: 1,
                yAxisIndex: 1,
                data: this.accident_daily_XK[1],
                smooth: true,

                symbol: 'circle',
                color : '#A8CD74'

              },
              {
                name: 'III',
                type: 'line',
                xAxisIndex: 2,
                yAxisIndex: 2,
                data: this.accident_daily_XK[2],
                smooth: true,

                symbol: 'circle',
                color : '#A8CD74'
              },
              {
                name: 'IV',
                type: 'line',
                xAxisIndex: 3,
                yAxisIndex: 3,
                data: this.accident_daily_XK[3],
                smooth: true,

                symbol: 'circle',
                color : '#A8CD74'
              },

            ]
          };

          this.LineOverviewXK.clear();
          this.LineOverviewXK.setOption(this.LineOptionXK_1);
          // console.log(values);

        }
      });

    },

    LineOptionXK2() {
      this.LineOverviewXK2= this.$echarts.init(document.getElementById("LineOptionXK2"));
      this.LineOverviewXK2.hideLoading();
      const formatUtil = echarts.format;
      // this.overview.setOption(this.curBrandOption);
      let urlAll = "http://localhost:8090/Acc/getDailyAcc";
      axios.get(urlAll).then(response =>
      {
        //If query is success
        if (response.status == 200)
        {
          console.log(response.data[0])
          this.allYearTimesDataXK = response.data;
          this.accident_daily_XK=response.data[0];

          const formatUtil = echarts.format;
          this.LineOptionXK_2 = {
            title: [
              {
                text: 'May of 2005',
                left:'1%',
                textStyle: {
                  fontSize: 15,
                }
              },
              {
                text: 'June of 2005',
                left: '44%',
                textStyle: {
                  fontSize: 15,
                }
              },
              {
                text: 'July of 2005',
                top: '50%',
                left:'1%',
                textStyle: {
                  fontSize: 15,
                }
              },
              {
                text: 'August of 2005',
                top: '50%',
                left: '44%',
                textStyle: {
                  fontSize: 15,
                }
              },
            ],
            grid: [
              {
                left: '6%', top: '11%', width: '34%', height: '29%'
              },
              {
                right: '16%', top: '11%', width:'34%', height: '29%'
              },
              {
                left: '6%', bottom: '11%', width: '34%', height: '29%'
              },
              {
                right: '16%', bottom: '11%', width: '34%', height: '29%'
              }

            ],


            tooltip: {
              formatter: function (info)
              {
                let value = info.value;
                let name = info.name;
                if(name=="zero_to_two"){
                  return '0:00 - 2:00'+'<br>'+ 'Daily Accident number: ' + value
                }
                if(name=="two_to_four"){
                  return '2:00 - 4:00'+'<br>'+ 'Daily Accident number: ' + value
                }
                if(name== "four_to_six"){
                  return '4:00 - 6:00'+'<br>'+ 'Daily Accident number: ' + value
                }
                if(name=="six_to_eight"){
                  return '6:00 - 8:00'+'<br>'+ 'Daily Accident number: ' + value
                }
                if(name=="eight_to_ten"){
                  return '8:00 - 10:00'+'<br>'+ 'Daily Accident number: ' + value
                }
                if(name=="ten_to_twelve"){
                  return '10:00 - 12:00'+'<br>'+ 'Daily Accident number: ' + value
                }
                if(name=="twelve_to_fourteen"){
                  return '12:00 - 14:00'+'<br>'+ 'Daily Accident number: ' + value
                }
                if(name=="fourteen_to_sixteen"){
                  return '14:00 - 16:00'+'<br>'+ 'Daily Accident number: ' + value
                }
                if(name=="sixteen_to_eighteen"){
                  return '16:00 - 18:00'+'<br>'+ 'Daily Accident number: ' + value
                }
                if(name=="eighteen_to_twenty"){
                  return '18:00 - 20:00'+'<br>'+ 'Daily Accident number: ' + value
                }
                if(name=="twenty_to_twentytwo"){
                  return '20:00 - 22:00'+'<br>'+ 'Daily Accident number: ' + value
                }
                if(name=="twentytwo_to_twentyfour"){
                  return '22:00 - 24:00'+'<br>'+ 'Daily Accident number: ' + value
                }

              }
            },
            xAxis: [
              {
                data:[2,4,6,8,10,12,14,16,18,20,22,24],
                gridIndex: 0,
                boundaryGap: true,
                splitLine: {
                  show: true,
                  lineStyle:{
                    color: ['#DDDDDD'],
                    width: 1,
                  }
                },
              },
              {
                data:[2,4,6,8,10,12,14,16,18,20,22,24],
                gridIndex: 1,
                boundaryGap: true,
                splitLine: {
                  show: true,
                  lineStyle:{
                    color: ['#DDDDDD'],
                    width: 1,
                  }
                },
              },
              {
                data:[2,4,6,8,10,12,14,16,18,20,22,24],
                gridIndex: 2,
                boundaryGap: true,
                splitLine: {
                  show: true,
                  lineStyle:{
                    color: ['#DDDDDD'],
                    width: 1,
                  }
                },
              },
              {
                data:[2,4,6,8,10,12,14,16,18,20,22,24],
                gridIndex: 3,
                boundaryGap: true,
                splitLine: {
                  show: true,
                  lineStyle:{
                    color: ['#DDDDDD'],
                    width: 1,
                  }
                },
              },
            ],
            yAxis: [
              {
                type:'value',
                gridIndex:0,
                splitLine:{
                  show:true,
                  lineStyle:{
                    color: ['#DDDDDD'],
                    width: 1,

                  }
                }
              },
              {
                type:'value',
                gridIndex:1,
                splitLine:{
                  show:true,
                  lineStyle:{
                    color: ['#DDDDDD'],
                    width: 1,

                  }
                }
              },
              {
                type:'value',
                gridIndex:2,
                splitLine:{
                  show:true,
                  lineStyle:{
                    color: ['#DDDDDD'],
                    width: 1,

                  }
                }
              },
              {
                type:'value',
                gridIndex:3,
                splitLine:{
                  show:true,
                  lineStyle:{
                    color: ['#DDDDDD'],
                    width: 1,

                  }
                }
              },
            ],
            series: [
              {
                name: 'I-5',
                type: 'line',
                xAxisIndex: 0,
                yAxisIndex: 0,
                data: this.accident_daily_XK[4],
                smooth: true,

                symbol: 'circle',
                color : '#FFD047'
              },

              {
                name: 'II',
                type: 'line',
                xAxisIndex: 1,
                yAxisIndex: 1,
                data: this.accident_daily_XK[5],
                smooth: true,

                symbol: 'circle',
                color : '#FFD047'
              },
              {
                name: 'III',
                type: 'line',
                xAxisIndex: 2,
                yAxisIndex: 2,
                data: this.accident_daily_XK[6],
                smooth: true,

                symbol: 'circle',
                color : '#FFD047'
              },
              {
                name: 'IV',
                type: 'line',
                xAxisIndex: 3,
                yAxisIndex: 3,
                data: this.accident_daily_XK[7],
                smooth: true,

                symbol: 'circle',
                color : '#FFD047'
              },

            ]
          };
          this.LineOverviewXK2.clear();
          this.LineOverviewXK2.setOption(this.LineOptionXK_2);
          // console.log(values);

        }
      });

      // option && overview.setOption(option);
    },

    LineOptionXK3() {
      this.LineOverviewXK3 = this.$echarts.init(document.getElementById("LineOptionXK3"));
      this.LineOverviewXK3.hideLoading();
      const formatUtil = echarts.format;

      // this.overview.setOption(this.curBrandOption);
      let urlAll = "http://localhost:8090/Acc/getDailyAcc";
      axios.get(urlAll).then(response =>
      {
        //If query is success
        if (response.status == 200)
        {
          console.log(response.data[0])
          this.allYearTimesDataXK = response.data;

          this.accident_daily_XK=response.data[0];

          const formatUtil = echarts.format;
          this.LineOptionXK_3 = {
            title: [
              {
                text: 'September of 2005',
                left:'1%',
                textStyle: {
                  fontSize: 15,
                }
              },
              {
                text: 'October of 2005',
                left: '44%',
                textStyle: {
                  fontSize: 15,
                }
              },
              {
                text: 'November of 2005',
                top: '50%',
                left:'1%',
                textStyle: {
                  fontSize: 15,
                }
              },
              {
                text: 'December of 2005',
                top: '50%',
                left: '44%',
                textStyle: {
                  fontSize: 15,
                }
              },
            ],
            grid: [
              {
                left: '6%', top: '11%', width: '34%', height: '29%'
              },
              {
                right: '16%', top: '11%', width:'34%', height: '29%'
              },
              {
                left: '6%', bottom: '11%', width: '34%', height: '29%'
              },
              {
                right: '16%', bottom: '11%', width: '34%', height: '29%'
              }

            ],

            tooltip: {
              formatter: function (info)
              {
                let value = info.value;
                let name = info.name;
                if(name=="zero_to_two"){
                  return '0:00 - 2:00'+'<br>'+ 'Daily Accident number: ' + value
                }
                if(name=="two_to_four"){
                  return '2:00 - 4:00'+'<br>'+ 'Daily Accident number: ' + value
                }
                if(name== "four_to_six"){
                  return '4:00 - 6:00'+'<br>'+ 'Daily Accident number: ' + value
                }
                if(name=="six_to_eight"){
                  return '6:00 - 8:00'+'<br>'+ 'Daily Accident number: ' + value
                }
                if(name=="eight_to_ten"){
                  return '8:00 - 10:00'+'<br>'+ 'Daily Accident number: ' + value
                }
                if(name=="ten_to_twelve"){
                  return '10:00 - 12:00'+'<br>'+ 'Daily Accident number: ' + value
                }
                if(name=="twelve_to_fourteen"){
                  return '12:00 - 14:00'+'<br>'+ 'Daily Accident number: ' + value
                }
                if(name=="fourteen_to_sixteen"){
                  return '14:00 - 16:00'+'<br>'+ 'Daily Accident number: ' + value
                }
                if(name=="sixteen_to_eighteen"){
                  return '16:00 - 18:00'+'<br>'+ 'Daily Accident number: ' + value
                }
                if(name=="eighteen_to_twenty"){
                  return '18:00 - 20:00'+'<br>'+ 'Daily Accident number: ' + value
                }
                if(name=="twenty_to_twentytwo"){
                  return '20:00 - 22:00'+'<br>'+ 'Daily Accident number: ' + value
                }
                if(name=="twentytwo_to_twentyfour"){
                  return '22:00 - 24:00'+'<br>'+ 'Daily Accident number: ' + value
                }

              }
            },
            xAxis: [
              {
                data:[2,4,6,8,10,12,14,16,18,20,22,24],
                gridIndex: 0,
                boundaryGap: true,
                splitLine: {
                  show: true,
                  lineStyle:{
                    color: ['#DDDDDD'],
                    width: 1,
                  }
                },
              },
              {
                data:[2,4,6,8,10,12,14,16,18,20,22,24],
                gridIndex: 1,
                boundaryGap: true,
                splitLine: {
                  show: true,
                  lineStyle:{
                    color: ['#DDDDDD'],
                    width: 1,
                  }
                },
              },
              {
                data:[2,4,6,8,10,12,14,16,18,20,22,24],
                gridIndex: 2,
                boundaryGap: true,
                splitLine: {
                  show: true,
                  lineStyle:{
                    color: ['#DDDDDD'],
                    width: 1,
                  }
                },
              },
              {
                data:[2,4,6,8,10,12,14,16,18,20,22,24],
                gridIndex: 3,
                boundaryGap: true,
                splitLine: {
                  show: true,
                  lineStyle:{
                    color: ['#DDDDDD'],
                    width: 1,
                  }
                },
              },
            ],
            yAxis: [
              {
                type:'value',
                gridIndex:0,
                splitLine:{
                  show:true,
                  lineStyle:{
                    color: ['#DDDDDD'],
                    width: 1,

                  }
                }
              },
              {
                type:'value',
                gridIndex:1,
                splitLine:{
                  show:true,
                  lineStyle:{
                    color: ['#DDDDDD'],
                    width: 1,

                  }
                }
              },
              {
                type:'value',
                gridIndex:2,
                splitLine:{
                  show:true,
                  lineStyle:{
                    color: ['#DDDDDD'],
                    width: 1,

                  }
                }
              },
              {
                type:'value',
                gridIndex:3,
                splitLine:{
                  show:true,
                  lineStyle:{
                    color: ['#DDDDDD'],
                    width: 1,

                  }
                }
              },
            ],
            series: [
              {
                name: 'I-5',
                type: 'line',
                xAxisIndex: 0,
                yAxisIndex: 0,
                data: this.accident_daily_XK[8],
                smooth: true,

                symbol: 'circle',
                color : '#65CBFF'
              },

              {
                name: 'II',
                type: 'line',
                xAxisIndex: 1,
                yAxisIndex: 1,
                data: this.accident_daily_XK[9],
                smooth: true,

                symbol: 'circle',
                color : '#65CBFF'
              },
              {
                name: 'III',
                type: 'line',
                xAxisIndex: 2,
                yAxisIndex: 2,
                data: this.accident_daily_XK[10],
                smooth: true,

                symbol: 'circle',
                color : '#65CBFF'
              },
              {
                name: 'IV',
                type: 'line',
                xAxisIndex: 3,
                yAxisIndex: 3,
                data: this.accident_daily_XK[11],
                smooth: true,

                symbol: 'circle',
                color : '#65CBFF'
              },

            ]
          };
          this.LineOverviewXK3.clear();
          this.LineOverviewXK3.setOption(this.LineOptionXK_3);
          // console.log(values);

        }
      });
      this.LineOverviewXK3.on('click', this.overviewClick);
      this.LineOverviewXK3.getZr().on('click', this.returnTreemap)
      // option && overview.setOption(option);
    },

    LineHandleSelectYearXK(val)
    {
      this.selectLimitedXK++;
      if(this.selectLimitedXK == 2)
      {
        console.log(this.LineSelectedYearXK[0])
        let selectYear1 = parseInt(this.LineSelectedYearXK[0]);
        let selectYear2 = parseInt(this.LineSelectedYearXK[1]);

        let differ1 = selectYear1 - 2005;
        let differ2 = selectYear2 - 2005;

        console.log(this.allYearTimesDataXK[differ1][0])
        console.log(this.allYearTimesDataXK[differ2][0])

        const formatUtil = echarts.format;
        this.LineOptionXK_1 = {
          title: [
            {
              text: 'January of '+ this.LineSelectedYearXK[0]+', '+ this.LineSelectedYearXK[1],
              left:'1%',
              textStyle: {
                fontSize: 15,
              }
            },
            {
              text: 'February of '+  this.LineSelectedYearXK[0]+', '+ this.LineSelectedYearXK[1],
              left: '44%',
              textStyle: {
                fontSize: 15,
              }
            },
            {
              text: 'March of '+  this.LineSelectedYearXK[0]+', '+ this.LineSelectedYearXK[1],
              top: '50%',
              left:'1%',
              textStyle: {
                fontSize: 15,
              }
            },
            {
              text: 'April of '+  this.LineSelectedYearXK[0]+', '+ this.LineSelectedYearXK[1],
              top: '50%',
              left: '44%',
              textStyle: {
                fontSize: 15,
              }
            },
          ],
          grid: [
            {
              left: '6%', top: '11%', width: '34%', height: '29%'
            },
            {
              right: '16%', top: '11%', width:'34%', height: '29%'
            },
            {
              left: '6%', bottom: '11%', width: '34%', height: '29%'
            },
            {
              right: '16%', bottom: '11%', width: '34%', height: '29%'
            }

          ],


          tooltip: {
            formatter: function (info)
            {
              let value = info.value;
              let name = info.name;
              if(name=="zero_to_two"){
                return '0:00 - 2:00'+'<br>'+ 'Daily Accident number: ' + value
              }
              if(name=="two_to_four"){
                return '2:00 - 4:00'+'<br>'+ 'Daily Accident number: ' + value
              }
              if(name== "four_to_six"){
                return '4:00 - 6:00'+'<br>'+ 'Daily Accident number: ' + value
              }
              if(name=="six_to_eight"){
                return '6:00 - 8:00'+'<br>'+ 'Daily Accident number: ' + value
              }
              if(name=="eight_to_ten"){
                return '8:00 - 10:00'+'<br>'+ 'Daily Accident number: ' + value
              }
              if(name=="ten_to_twelve"){
                return '10:00 - 12:00'+'<br>'+ 'Daily Accident number: ' + value
              }
              if(name=="twelve_to_fourteen"){
                return '12:00 - 14:00'+'<br>'+ 'Daily Accident number: ' + value
              }
              if(name=="fourteen_to_sixteen"){
                return '14:00 - 16:00'+'<br>'+ 'Daily Accident number: ' + value
              }
              if(name=="sixteen_to_eighteen"){
                return '16:00 - 18:00'+'<br>'+ 'Daily Accident number: ' + value
              }
              if(name=="eighteen_to_twenty"){
                return '18:00 - 20:00'+'<br>'+ 'Daily Accident number: ' + value
              }
              if(name=="twenty_to_twentytwo"){
                return '20:00 - 22:00'+'<br>'+ 'Daily Accident number: ' + value
              }
              if(name=="twentytwo_to_twentyfour"){
                return '22:00 - 24:00'+'<br>'+ 'Daily Accident number: ' + value
              }

            }
          },
          xAxis: [
            {
              data:[2,4,6,8,10,12,14,16,18,20,22,24],
              gridIndex: 0,
              boundaryGap: true,
              splitLine: {
                show: true,
                lineStyle:{
                  color: ['#DDDDDD'],
                  width: 1,
                }
              },
            },
            {
              data:[2,4,6,8,10,12,14,16,18,20,22,24],
              gridIndex: 1,
              boundaryGap: true,
              splitLine: {
                show: true,
                lineStyle:{
                  color: ['#DDDDDD'],
                  width: 1,
                }
              },
            },
            {
              data:[2,4,6,8,10,12,14,16,18,20,22,24],
              gridIndex: 2,
              boundaryGap: true,
              splitLine: {
                show: true,
                lineStyle:{
                  color: ['#DDDDDD'],
                  width: 1,
                }
              },
            },
            {
              data:[2,4,6,8,10,12,14,16,18,20,22,24],
              gridIndex: 3,
              boundaryGap: true,
              splitLine: {
                show: true,
                lineStyle:{
                  color: ['#DDDDDD'],
                  width: 1,
                }
              },
            },
          ],
          yAxis: [
            {
              type:'value',
              gridIndex:0,
              splitLine:{
                show:true,
                lineStyle:{
                  color: ['#DDDDDD'],
                  width: 1,

                }
              }
            },
            {
              type:'value',
              gridIndex:1,
              splitLine:{
                show:true,
                lineStyle:{
                  color: ['#DDDDDD'],
                  width: 1,

                }
              }
            },
            {
              type:'value',
              gridIndex:2,
              splitLine:{
                show:true,
                lineStyle:{
                  color: ['#DDDDDD'],
                  width: 1,

                }
              }
            },
            {
              type:'value',
              gridIndex:3,
              splitLine:{
                show:true,
                lineStyle:{
                  color: ['#DDDDDD'],
                  width: 1,

                }
              }
            },
          ],

          series: [
            {
              name: '0:00am - 2:00am',
              type: 'line',
              xAxisIndex: 0,
              yAxisIndex: 0,
              data: this.allYearTimesDataXK[differ1][0],
              smooth: true,

              symbol: 'circle',
              color : '#A8CD74'

            },
            {
              name: '2:00am - 4:00am',
              type: 'line',
              xAxisIndex: 0,
              yAxisIndex: 0,
              data: this.allYearTimesDataXK[differ2][0],
              smooth: true,

              symbol: 'circle',
              color : '#42680F'
            },


            {
              name: 'II',
              type: 'line',
              xAxisIndex: 1,
              yAxisIndex: 1,
              data: this.allYearTimesDataXK[differ1][1],
              smooth: true,

              symbol: 'circle',
              color : '#A8CD74'


            },
            {
              name: 'II',
              type: 'line',
              xAxisIndex: 1,
              yAxisIndex: 1,
              data: this.allYearTimesDataXK[differ2][1],
              smooth: true,

              symbol: 'circle',
              color : '#42680F'

            },
            {
              name: 'III',
              type: 'line',
              xAxisIndex: 2,
              yAxisIndex: 2,
              data: this.allYearTimesDataXK[differ1][2],
              smooth: true,

              symbol: 'circle',
              color : '#A8CD74'
            },
            {
              name: 'III',
              type: 'line',
              xAxisIndex: 2,
              yAxisIndex: 2,
              data: this.allYearTimesDataXK[differ2][2],
              smooth: true,

              symbol: 'circle',
              color : '#42680F'

            },
            {
              name: 'IV',
              type: 'line',
              xAxisIndex: 3,
              yAxisIndex: 3,
              data: this.allYearTimesDataXK[differ1][3],
              smooth: true,

              symbol: 'circle',
              color : '#A8CD74'
            },
            {
              name: 'IV',
              type: 'line',
              xAxisIndex: 3,
              yAxisIndex: 3,
              data: this.allYearTimesDataXK[differ2][3],
              smooth: true,

              symbol: 'circle',
              color : '#42680F'
            },

          ]
        };


        this.LineOptionXK_2 = {
          title: [
            {
              text: 'May of '+ this.LineSelectedYearXK[0]+', '+ this.LineSelectedYearXK[1],
              left:'1%',
              textStyle: {
                fontSize: 15,
              }
            },
            {
              text: 'June of '+  this.LineSelectedYearXK[0]+', '+ this.LineSelectedYearXK[1],
              left: '44%',
              textStyle: {
                fontSize: 15,
              }
            },
            {
              text: 'July of '+  this.LineSelectedYearXK[0]+', '+ this.LineSelectedYearXK[1],
              top: '50%',
              left:'1%',
              textStyle: {
                fontSize: 15,
              }
            },
            {
              text: 'August of '+  this.LineSelectedYearXK[0]+', '+ this.LineSelectedYearXK[1],
              top: '50%',
              left: '44%',
              textStyle: {
                fontSize: 15,
              }
            },
          ],
          grid: [
            {
              left: '6%', top: '11%', width: '34%', height: '29%'
            },
            {
              right: '16%', top: '11%', width:'34%', height: '29%'
            },
            {
              left: '6%', bottom: '11%', width: '34%', height: '29%'
            },
            {
              right: '16%', bottom: '11%', width: '34%', height: '29%'
            }

          ],

          tooltip: {
            formatter: function (info)
            {
              let value = info.value;
              let name = info.name;
              if(name=="zero_to_two"){
                return '0:00 - 2:00'+'<br>'+ 'Daily Accident number: ' + value
              }
              if(name=="two_to_four"){
                return '2:00 - 4:00'+'<br>'+ 'Daily Accident number: ' + value
              }
              if(name== "four_to_six"){
                return '4:00 - 6:00'+'<br>'+ 'Daily Accident number: ' + value
              }
              if(name=="six_to_eight"){
                return '6:00 - 8:00'+'<br>'+ 'Daily Accident number: ' + value
              }
              if(name=="eight_to_ten"){
                return '8:00 - 10:00'+'<br>'+ 'Daily Accident number: ' + value
              }
              if(name=="ten_to_twelve"){
                return '10:00 - 12:00'+'<br>'+ 'Daily Accident number: ' + value
              }
              if(name=="twelve_to_fourteen"){
                return '12:00 - 14:00'+'<br>'+ 'Daily Accident number: ' + value
              }
              if(name=="fourteen_to_sixteen"){
                return '14:00 - 16:00'+'<br>'+ 'Daily Accident number: ' + value
              }
              if(name=="sixteen_to_eighteen"){
                return '16:00 - 18:00'+'<br>'+ 'Daily Accident number: ' + value
              }
              if(name=="eighteen_to_twenty"){
                return '18:00 - 20:00'+'<br>'+ 'Daily Accident number: ' + value
              }
              if(name=="twenty_to_twentytwo"){
                return '20:00 - 22:00'+'<br>'+ 'Daily Accident number: ' + value
              }
              if(name=="twentytwo_to_twentyfour"){
                return '22:00 - 24:00'+'<br>'+ 'Daily Accident number: ' + value
              }

            }
          },
          xAxis: [
            {
              data:[2,4,6,8,10,12,14,16,18,20,22,24],
              gridIndex: 0,
              boundaryGap: true,
              splitLine: {
                show: true,
                lineStyle:{
                  color: ['#DDDDDD'],
                  width: 1,
                }
              },
            },
            {
              data:[2,4,6,8,10,12,14,16,18,20,22,24],
              gridIndex: 1,
              boundaryGap: true,
              splitLine: {
                show: true,
                lineStyle:{
                  color: ['#DDDDDD'],
                  width: 1,
                }
              },
            },
            {
              data:[2,4,6,8,10,12,14,16,18,20,22,24],
              gridIndex: 2,
              boundaryGap: true,
              splitLine: {
                show: true,
                lineStyle:{
                  color: ['#DDDDDD'],
                  width: 1,
                }
              },
            },
            {
              data:[2,4,6,8,10,12,14,16,18,20,22,24],
              gridIndex: 3,
              boundaryGap: true,
              splitLine: {
                show: true,
                lineStyle:{
                  color: ['#DDDDDD'],
                  width: 1,
                }
              },
            },
          ],
          yAxis: [
            {
              type:'value',
              gridIndex:0,
              splitLine:{
                show:true,
                lineStyle:{
                  color: ['#DDDDDD'],
                  width: 1,

                }
              }
            },
            {
              type:'value',
              gridIndex:1,
              splitLine:{
                show:true,
                lineStyle:{
                  color: ['#DDDDDD'],
                  width: 1,

                }
              }
            },
            {
              type:'value',
              gridIndex:2,
              splitLine:{
                show:true,
                lineStyle:{
                  color: ['#DDDDDD'],
                  width: 1,

                }
              }
            },
            {
              type:'value',
              gridIndex:3,
              splitLine:{
                show:true,
                lineStyle:{
                  color: ['#DDDDDD'],
                  width: 1,

                }
              }
            },
          ],

          series: [
            {
              name: 'I-5',
              type: 'line',
              xAxisIndex: 0,
              yAxisIndex: 0,
              data: this.allYearTimesDataXK[differ1][4],
              smooth: true,

              symbol: 'circle',
              color : '#FFD047'

            },
            {
              name: 'I-5',
              type: 'line',
              xAxisIndex: 0,
              yAxisIndex: 0,
              data: this.allYearTimesDataXK[differ2][4],
              smooth: true,

              symbol: 'circle',
              color : '#FF7E00'
            },


            {
              name: 'II',
              type: 'line',
              xAxisIndex: 1,
              yAxisIndex: 1,
              data: this.allYearTimesDataXK[differ1][5],
              smooth: true,

              symbol: 'circle',
              color : '#FFD047'


            },
            {
              name: 'II',
              type: 'line',
              xAxisIndex: 1,
              yAxisIndex: 1,
              data: this.allYearTimesDataXK[differ2][5],
              smooth: true,

              symbol: 'circle',
              color : '#FF7E00'

            },
            {
              name: 'III',
              type: 'line',
              xAxisIndex: 2,
              yAxisIndex: 2,
              data: this.allYearTimesDataXK[differ1][6],
              smooth: true,

              symbol: 'circle',
              color : '#FFD047'
            },
            {
              name: 'III',
              type: 'line',
              xAxisIndex: 2,
              yAxisIndex: 2,
              data: this.allYearTimesDataXK[differ2][6],
              smooth: true,

              symbol: 'circle',
              color : '#FF7E00'

            },
            {
              name: 'IV',
              type: 'line',
              xAxisIndex: 3,
              yAxisIndex: 3,
              data: this.allYearTimesDataXK[differ1][7],
              smooth: true,

              symbol: 'circle',
              color : '#FFD047'
            },
            {
              name: 'IV',
              type: 'line',
              xAxisIndex: 3,
              yAxisIndex: 3,
              data: this.allYearTimesDataXK[differ2][7],
              smooth: true,

              symbol: 'circle',
              color : '#FF7E00'
            },

          ]
        };

        this.LineOptionXK_3 = {
          title: [
            {
              text: 'September of '+  this.LineSelectedYearXK[0]+', '+ this.LineSelectedYearXK[1],
              left:'1%',
              textStyle: {
                fontSize: 15,
              }
            },
            {
              text: 'October of '+  this.LineSelectedYearXK[0]+', '+ this.LineSelectedYearXK[1],
              left: '44%',
              textStyle: {
                fontSize: 15,
              }
            },
            {
              text: 'November of '+  this.LineSelectedYearXK[0]+', '+ this.LineSelectedYearXK[1],
              top: '50%',
              left:'1%',
              textStyle: {
                fontSize: 15,
              }
            },
            {
              text: 'December of '+  this.LineSelectedYearXK[0]+', '+ this.LineSelectedYearXK[1],
              top: '50%',
              left: '44%',
              textStyle: {
                fontSize: 15,
              }
            },
          ],
          grid: [
            {
              left: '6%', top: '11%', width: '34%', height: '29%'
            },
            {
              right: '16%', top: '11%', width:'34%', height: '29%'
            },
            {
              left: '6%', bottom: '11%', width: '34%', height: '29%'
            },
            {
              right: '16%', bottom: '11%', width: '34%', height: '29%'
            }

          ],

          tooltip: {
            formatter: function (info)
            {
              let value = info.value;
              let name = info.name;
              if(name=="zero_to_two"){
                return '0:00 - 2:00'+'<br>'+ 'Daily Accident number: ' + value
              }
              if(name=="two_to_four"){
                return '2:00 - 4:00'+'<br>'+ 'Daily Accident number: ' + value
              }
              if(name== "four_to_six"){
                return '4:00 - 6:00'+'<br>'+ 'Daily Accident number: ' + value
              }
              if(name=="six_to_eight"){
                return '6:00 - 8:00'+'<br>'+ 'Daily Accident number: ' + value
              }
              if(name=="eight_to_ten"){
                return '8:00 - 10:00'+'<br>'+ 'Daily Accident number: ' + value
              }
              if(name=="ten_to_twelve"){
                return '10:00 - 12:00'+'<br>'+ 'Daily Accident number: ' + value
              }
              if(name=="twelve_to_fourteen"){
                return '12:00 - 14:00'+'<br>'+ 'Daily Accident number: ' + value
              }
              if(name=="fourteen_to_sixteen"){
                return '14:00 - 16:00'+'<br>'+ 'Daily Accident number: ' + value
              }
              if(name=="sixteen_to_eighteen"){
                return '16:00 - 18:00'+'<br>'+ 'Daily Accident number: ' + value
              }
              if(name=="eighteen_to_twenty"){
                return '18:00 - 20:00'+'<br>'+ 'Daily Accident number: ' + value
              }
              if(name=="twenty_to_twentytwo"){
                return '20:00 - 22:00'+'<br>'+ 'Daily Accident number: ' + value
              }
              if(name=="twentytwo_to_twentyfour"){
                return '22:00 - 24:00'+'<br>'+ 'Daily Accident number: ' + value
              }

            }
          },
          xAxis: [
            {
              data:[2,4,6,8,10,12,14,16,18,20,22,24],
              gridIndex: 0,
              boundaryGap: true,
              splitLine: {
                show: true,
                lineStyle:{
                  color: ['#DDDDDD'],
                  width: 1,
                }
              },
            },
            {
              data:[2,4,6,8,10,12,14,16,18,20,22,24],
              gridIndex: 1,
              boundaryGap: true,
              splitLine: {
                show: true,
                lineStyle:{
                  color: ['#DDDDDD'],
                  width: 1,
                }
              },
            },
            {
              data:[2,4,6,8,10,12,14,16,18,20,22,24],
              gridIndex: 2,
              boundaryGap: true,
              splitLine: {
                show: true,
                lineStyle:{
                  color: ['#DDDDDD'],
                  width: 1,
                }
              },
            },
            {
              data:[2,4,6,8,10,12,14,16,18,20,22,24],
              gridIndex: 3,
              boundaryGap: true,
              splitLine: {
                show: true,
                lineStyle:{
                  color: ['#DDDDDD'],
                  width: 1,
                }
              },
            },
          ],
          yAxis: [
            {
              type:'value',
              gridIndex:0,
              splitLine:{
                show:true,
                lineStyle:{
                  color: ['#DDDDDD'],
                  width: 1,

                }
              }
            },
            {
              type:'value',
              gridIndex:1,
              splitLine:{
                show:true,
                lineStyle:{
                  color: ['#DDDDDD'],
                  width: 1,

                }
              }
            },
            {
              type:'value',
              gridIndex:2,
              splitLine:{
                show:true,
                lineStyle:{
                  color: ['#DDDDDD'],
                  width: 1,

                }
              }
            },
            {
              type:'value',
              gridIndex:3,
              splitLine:{
                show:true,
                lineStyle:{
                  color: ['#DDDDDD'],
                  width: 1,

                }
              }
            },
          ],

          series: [
            {
              name: 'I-5',
              type: 'line',
              xAxisIndex: 0,
              yAxisIndex: 0,
              data: this.allYearTimesDataXK[differ1][8],
              smooth: true,

              symbol: 'circle',
              color : '#65CBFF'

            },
            {
              name: 'I-5',
              type: 'line',
              xAxisIndex: 0,
              yAxisIndex: 0,
              data: this.allYearTimesDataXK[differ2][8],
              smooth: true,

              symbol: 'circle',
              color : '#0056E6'
            },


            {
              name: 'II',
              type: 'line',
              xAxisIndex: 1,
              yAxisIndex: 1,
              data: this.allYearTimesDataXK[differ1][9],
              smooth: true,

              symbol: 'circle',
              color : '#65CBFF'


            },
            {
              name: 'II',
              type: 'line',
              xAxisIndex: 1,
              yAxisIndex: 1,
              data: this.allYearTimesDataXK[differ2][9],
              smooth: true,

              symbol: 'circle',
              color : '#0056E6'

            },
            {
              name: 'III',
              type: 'line',
              xAxisIndex: 2,
              yAxisIndex: 2,
              data: this.allYearTimesDataXK[differ1][10],
              smooth: true,

              symbol: 'circle',
              color : '#65CBFF'
            },
            {
              name: 'III',
              type: 'line',
              xAxisIndex: 2,
              yAxisIndex: 2,
              data: this.allYearTimesDataXK[differ2][10],
              smooth: true,

              symbol: 'circle',
              color : '#0056E6'

            },
            {
              name: 'IV',
              type: 'line',
              xAxisIndex: 3,
              yAxisIndex: 3,
              data: this.allYearTimesDataXK[differ1][11],
              smooth: true,

              symbol: 'circle',
              color : '#65CBFF'
            },
            {
              name: 'IV',
              type: 'line',
              xAxisIndex: 3,
              yAxisIndex: 3,
              data: this.allYearTimesDataXK[differ2][11],
              smooth: true,

              symbol: 'circle',
              color : '#0056E6'
            },

          ]
        };

        this.LineSelectedYearXK=0;
        this.selectLimitedXK=0;
        this.LineOverviewXK.clear();
        this.LineOverviewXK.setOption(this.LineOptionXK_1);

        this.LineOverviewXK2.clear();
        this.LineOverviewXK2.setOption(this.LineOptionXK_2);

        this.LineOverviewXK3.clear();
        this.LineOverviewXK3.setOption(this.LineOptionXK_3);

      }

    },
  },

  mounted () {
    console.log(this.defaultAllYearData + "aaa")
    //this.drawLine1();
    this.LineOptionXK1();
    this.LineOptionXK2();
    this.LineOptionXK3();

  }
}
</script>

<style scoped>

</style>
