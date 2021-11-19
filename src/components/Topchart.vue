<template>

  <div class="Totalchart">

    <div id="TotalLineXK" style="width: 1500px;height:450px; "></div>

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
  name: 'Totalchart',
  data() {
    return {

    }
  },
  methods:{
    TotalLineHeaderOptionXK() {
      this.overviewXK = this.$echarts.init(document.getElementById("TotalLineXK"));
      this.overviewXK.hideLoading();
      const formatUtil = echarts.format;

      // this.overview.setOption(this.curBrandOption);
      let urlAll = "http://localhost:8090/Acc/getDailyAcc";
      axios.get(urlAll).then(response =>
      {
        //If query is success
        if (response.status == 200)
        {
          console.log(response.data[0])

          const formatUtil = echarts.format;
          this.TotalLineOptionXK = {
            title: [
              {
                text: 'The Total Traffic Accident from 2005 to 2015',
                left:'2%',
                textStyle: {
                  fontSize: 22,
                }
              },

            ],

            tooltip : {
              borderColor: '#1d5dc9', // 提示框浮层的边框颜色。
              borderWidth: 2, // 提示框浮层的边框宽
              backgroundColor: 'rgba(255,255,255,0.7)', // 提示框浮层的背景颜色。
              textStyle: { // 提示框浮层的文本样式。
                // color: '#fff',
                fontSize: 16,
                align:'left',
              },
              axisPointer: { // 坐标轴指示器配置项。
                type: 'shadow', // 'line' 直线指示器  'shadow' 阴影指示器  'none' 无指示器  'cross' 十字准星指示器。
                axis: 'auto', // 指示器的坐标轴。
                snap: true, // 坐标轴指示器是否自动吸附到点上
              },

              trigger: 'axis',
              formatter(params){
                return  '<span style="display:inline-block; border-radius:20px;width:12px;height:12px;background-color:#3699F1 ">'+'</span>'+'   '+ '<span style="color:#1d5dc9; fontSize: 26;">'+ params[0].axisValue+'</span>'+'<br>'+
                  " Total Num of Accident: "+
                  '<span style="color:darkred;">'+params[0].data.value+'</span>'+'<br>'+
                  "Total Num of Casualties: "+'<span style="color:darkred;">'+params[0].data.num+'</span>'+'<br>'+
                  "Three Accident Injury Level-- "+'<br>'+
                  "Fatal: "+'<span style="color:darkred;">'+params[0].data.fatal+'</span>'+'<br>'+
                  "Slight: "+'<span style="color:darkred;">'+params[0].data.slight+'</span>'+'<br>'+
                  "Serious: "+'<span style="color:darkred;">'+params[0].data.serious+'</span>';

              }
            },
            legend: {
              data: ['Total Num of Accident', 'Total Num of Casualties', ]
            },
            xAxis: [{
              type: 'category',
              data: ['2005','2006', '2007', '2008', '2009','2010', '2011','2012','2013','2014','2015'],
              splitLine: {
                show: true,
                lineStyle:{
                  color: ['#DDDDDD'],
                  width: 1,
                  type:'dashed',

                }
              },
              axisLine: {
                lineStyle: {
                  width: 2, // 粗细
                }
              },
              axisLabel: {
                textStyle: {
                  fontSize:15,

                }
              }

            }],

            yAxis: [{
              type: 'value',
              min:90000,
              axisLabel: {
                textStyle: {
                  fontSize:15,
                  lineStyle: {
                    type: 'solid',
                    width:'5'
                  },
                },
              },

            }],
            series: [
              {
                name:'Total Num of Accident',
                type: 'line',
                smooth: true,
                lineStyle:{
                  width:3,
                },
                data: [{value: "198735",num:"271017",fatal:"2913",slight:"170793",serious:"25029"},
                  {value: "189161",num:"258404",fatal:"2926",slight:"161289",serious:"24946"},
                  {value: "182115",num:"247780",fatal:"2714",slight:"155079",serious:"24322"},
                  {value: "170591",num:"230905",fatal:"2314",slight:"145129",serious:"23121"},
                  {value: "163554",num:"222146",fatal:"2057",slight:"139500",serious:"21997"},
                  {value: "154414",num:"208648",fatal:"1731",slight:"132243",serious:"20440"},
                  {value: "151474",num:"203950",fatal:"1797",slight:"128691",serious:"20986"},
                  {value: "145571",num:"195723",fatal:"1637",slight:"123033",serious:"20901"},
                  {value: "138600",num:"183670",fatal:"1608",slight:"117428",serious:"19624"},
                  {value: "146322",num:"194477",fatal:"1658",slight:"123988",serious:"20676"},
                  {value: "140056",num:"186189",fatal:"1616",slight:"118402",serious:"20038"},

                ]
              },
              {
                name:'Total Num of Casualties',
                type: 'line',
                smooth: true,
                lineStyle:{
                  width:2,
                  type:'dashed',
                },
                data: [271017,	258404,	247780,	230905,	222146,	208648,	203950,	195723,	183670,	194477,	186189]
              },

            ]
          };

          this.overviewXK.clear();
          this.overviewXK.setOption(this.TotalLineOptionXK);
          // console.log(values);

        }
      });

      // option && overview.setOption(option);
    },

  },

  mounted () {
    console.log(this.defaultAllYearData + "aaa")
    //this.drawLine1();
    this. TotalLineHeaderOptionXK();

  }
}
</script>

<style scoped>

</style>
