<template>
<div class="GSWTest">

<div id="GSWFirstImage" style="width: 800px;height:800px;"></div>
</div>
</template>

<script>
import * as echarts from 'echarts';
import Vue from 'vue'
import axios from 'axios'
Vue.prototype.$echarts = echarts


export default {
  name: 'GSWTest',

  methods:{
    GSWDrawCalendar(){

      let GSWFirstChart = document.getElementById('GSWFirstImage');
      let GSWFirstMyChart = echarts.init(GSWFirstChart);
      let GSWFirstOption;

// prettier-ignore
      const GSWHours = [
        '22:00-24:00', '20:00-22:00', '18:00-20:00', '16:00-18:00', '14:00-16:00', '12:00-14:00', '10:00-12:00',
        '08:00-10:00', '06:00-08:00', '04:00-06:00', '02:00-04:00', '00:00-02:00'
      ];
// prettier-ignore
      const GSWdays = [
        'Monday', 'Tuesday', 'Wednesday',
        'Thursday', 'Friday', 'Saturday', 'Sunday'
      ];
// prettier-ignore
      let GSWintvalue=[];
      let GSWFirstUrl="http://localhost:8090/dayandtime";
      axios.get(GSWFirstUrl).then(response=>
      {
          var x=0,y=11;
          for(var i=0;i<response.data.length;i++)
          {
            GSWintvalue.push([parseInt(y),parseInt(x),parseInt(response.data[i].value)]);
            y--;
            if(y==-1){
              y=11;
              x++;
            }
          }

      let values=[];
      for(let i=0;i<GSWintvalue.length;i++){
        values.push(GSWintvalue[i])
      };
      const GSWFirstdata =
        GSWintvalue
        .map(function (item) {
          return [item[1], item[0], item[2] || '-'];
        });
      GSWFirstOption = {
        tooltip: {
          position: 'top'
        },
        grid: {
          height: '50%',
          top: '10%'
        },
        xAxis: {
          type: 'category',
          data: GSWdays,
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
          data: GSWHours,
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
            data: GSWFirstdata,
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

      GSWFirstOption && GSWFirstMyChart.setOption(GSWFirstOption);

      });
    }

  },
  mounted(){
    this.GSWDrawCalendar();
  }
}
</script>

<style scoped>

</style>
