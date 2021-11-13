<template>
<div class="GaoShiweiTest">

<div id="main" style="width: 800px;height:800px;"></div>
</div>
</template>

<script>
import * as echarts from 'echarts';
import Vue from 'vue'
import axios from 'axios'
Vue.prototype.$echarts = echarts


export default {
  name: 'gaoShiweiTest',
  data() {
    return {
      day: [],
    time:[],
      value:[]
  };
  },
  methods:{
    drawCalendar(){

      var chartDom = document.getElementById('main');
      var myChart = echarts.init(chartDom);
      var option;

// prettier-ignore
      const hours = [
        '22:00-24:00', '20:00-22:00', '18:00-20:00', '16:00-18:00', '14:00-16:00', '12:00-14:00', '10:00-12:00',
        '08:00-10:00', '06:00-08:00', '04:00-06:00', '02:00-04:00', '00:00-02:00'
      ];
// prettier-ignore
      const days = [
        'Monday', 'Tuesday', 'Wednesday',
        'Thursday', 'Friday', 'Saturday', 'Sunday'
      ];
// prettier-ignore
      var intvalue=[];
      var url="http://localhost:8090/dayandtime";
      axios.get(url).then(response=>
      {
          var x=0,y=11;
          for(var i=0;i<response.data.length;i++)
          {
            intvalue.push([parseInt(y),parseInt(x),parseInt(response.data[i].value)]);
            y--;
            if(y==-1){
              y=11;
              x++;
            }
          }

      var values=[];
      for(var i=0;i<intvalue.length;i++){
        values.push(intvalue[i])
      };
      console.log(intvalue);
      console.log(typeof(intvalue[1][0]));
      const data =
        intvalue
        .map(function (item) {
          return [item[1], item[0], item[2] || '-'];
        });
      console.log(data)
      option = {
        tooltip: {
          position: 'top'
        },
        grid: {
          height: '50%',
          top: '10%'
        },
        xAxis: {
          type: 'category',
          data: days,
          axisLabel:{
              fontSize:12,
            fontFamily:'Microsoft YaHei',
            fontWeight:'bold'
          },
          splitArea: {
            show: true,
            fontSize:35,
          }
        },
        yAxis: {
          type: 'category',
          data: hours,
          axisLabel:{
            fontSize:12,
            fontFamily:'Microsoft YaHei',
            fontWeight:'bold'
          },
          splitArea: {
            show: true
          }
        },
        visualMap: {
          min: 2000,
          max: 58000,
          calculable: true,
          orient: 'horizontal',
          left: 'center',
          bottom: '27%',
          textStyle:{
            fontSize:12,
            fontFamily:'Microsoft YaHei',
            fontWeight:'bold'
          }
        },
        series: [
          {
            name: 'Punch Card',
            type: 'heatmap',
            data: data,
            label: {
              show: true,
              fontSize:12,
              fontFamily:'Microsoft YaHei',
              fontWeight:'bold'
            },
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowColor: 'rgba(0, 0, 0, 0.5)',
                fontSize:10,
              }
            }

          }
        ]
      };

      option && myChart.setOption(option);

      });
    }

  },
  mounted(){
    this.drawCalendar();
  }
}
</script>

<style scoped>

</style>
