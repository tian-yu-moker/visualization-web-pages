<template>
  <div class="GSWFifth">

    <div id="GSWFifthImage" style="width: 500px;height:350px;"></div>
  </div>
</template>

<script>
import * as echarts from 'echarts';
import Vue from 'vue'
import axios from 'axios'
Vue.prototype.$echarts = echarts
export default {
  name: 'gaoShiweiFifth',
  methods:{
    GSWDrawPopulation(){
      var chartDom = document.getElementById('GSWFifthImage');
      var myChart = echarts.init(chartDom);
      var option;

      const data = [
        [569250, 606340, 585856.36],
        [525721, 569177, 545650.81],
        [497218, 519347, 509380],
        [491361, 529879, 514270.54],
        [455745, 529809, 492684.81],
        [452278, 480873, 463217],
        [449470, 498810, 471698.18],
        [405407, 450640, 425138.72],
        [400724, 432855, 417899.54],
        [327541, 378778, 351981.54],
        [312774, 344285, 331261],
        [298386, 344288, 315576.81],
        [292174, 305496, 300111.36],
        [277620, 320736, 298895.81],
        [270939, 323443, 301092.18],
        [222618, 239855, 230825.72],
        [222391, 242387, 231100.54],
        [219288, 230197, 224073.18],
        [171274, 184287, 175820.63],
        [111340, 116900, 114950.90],
      ];
// prettier-ignore
      const cities = ['Glasgow', 'Sheffield', 'County Durham', 'Bradford', 'Manchester', 'Liverpool', 'City of Edinburgh', 'Bristol, City of', 'Kirklees', 'Barnet', 'Ealing', 'Coventry', 'Doncaster', 'Lambeth', 'Brent', 'Barnsley', 'Bexley', 'Oldham', 'Bath and North East Somerset','Angus'];
      const barHeight = 500;
      option = {
        /*title: {
          text: 'How expensive is it to rent an apartment in China?',
          subtext: 'Data from https://www.numbeo.com'
        },*/
        legend: {
          show: true,
          bottom:"0%",
          data: ['Range', 'Average'],
          textStyle: {
            fontSize:10,
            fontFamily: 'Microsoft YaHei',
            fontWeight: 'bold'
          }
        },
        grid: {
          top: 40,
          left:"0%",
        },
        angleAxis: {
          type: 'category',
          data: cities,
          axisLabel:{
            fontSize:8,
            fontFamily:'Microsoft YaHei',
            fontWeight:'bold'
          }
        },
        tooltip: {
          show: true,
          formatter: function (params) {
            const id = params.dataIndex;
            return (
              cities[id] +
              '<br>2005 population：' +
              data[id][0] +
              '<br>2015 population：' +
              data[id][1] +
              '<br>Average：' +
              data[id][2]
            );
          }
        },
        radiusAxis: {
          min:"100000",
          axisLabel:{
            fontSize:8,
            fontFamily:'Microsoft YaHei',
            fontWeight:'bold'
          }

        },
        polar: {},
        series: [
          {
            type: 'bar',
            itemStyle: {
              color: 'transparent'
            },
            data: data.map(function (d) {
              return d[0];
            }),
            coordinateSystem: 'polar',
            stack: 'Min Max',
            silent: true
          },
          {
            type: 'bar',
            data: data.map(function (d) {
              return d[1] - d[0];
            }),
            coordinateSystem: 'polar',
            name: 'Range',
            stack: 'Min Max'
          },
          {
            type: 'bar',
            itemStyle: {
              color: 'transparent'
            },
            data: data.map(function (d) {
              return d[2] - barHeight;
            }),
            coordinateSystem: 'polar',
            stack: 'Average',
            silent: true,
            z: 10
          },
          {
            type: 'bar',
            data: data.map(function (d) {
              return barHeight * 2;
            }),
            coordinateSystem: 'polar',
            name: 'Average',
            stack: 'Average',
            barGap: '-100%',
            z: 10
          }
        ]
      };

      option && myChart.setOption(option);
    }
  },
  mounted(){
    this.GSWDrawPopulation();
  }
}
</script>

<style scoped>

</style>
