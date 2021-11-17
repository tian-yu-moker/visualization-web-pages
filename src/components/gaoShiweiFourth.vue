<template>
  <div class="GSWFourth">

    <div id="GSWFourthImage" style="width: 400px;height:250px;"></div>
  </div>
</template>

<script>
import * as echarts from 'echarts';
import Vue from 'vue'
import axios from 'axios'
Vue.prototype.$echarts = echarts
export default {
  name: 'gaoShiweiForth',
  methods:{
    GSWDrawGDP(){
      var ROOT_PATH =
        'https://cdn.jsdelivr.net/gh/apache/echarts-website@asf-site/examples';

      var chartDom = document.getElementById('GSWFourthImage');
      var myChart = echarts.init(chartDom);
      var option;
      var url=ROOT_PATH+'/data/asset/data/life-expectancy-table.json'

      axios.get("http://localhost:8090/GDP").then(response=>
      {
        let _rawData=response.data;

        // var countries = ['Australia', 'Canada', 'China', 'Cuba', 'Finland', 'France', 'Germany', 'Iceland', 'India', 'Japan', 'North Korea', 'South Korea', 'New Zealand', 'Norway', 'Poland', 'Russia', 'Turkey', 'United Kingdom', 'United States'];
        const countries = [
          'Manchester',
          'Glasgow City',
          'Bradford',
          'Liverpool',
          'Sheffield',
          'City of Edinburgh',
          'County Durham',
          'Bristol, City of',
          "Lambeth",
          "Kirklees",
          "Barnet",
          "Doncaster",
          "Ealing",
          "Brent",
          "Coventry",
          "Barnsley",
          "Oldham",
          "Bexley",
          "Bath and North East Somerset",
          "Angus"
        ];
        const datasetWithFilters = [];
        const seriesList = [];
        echarts.util.each(countries, function (country) {
          var datasetId = 'dataset_' + country;
          datasetWithFilters.push({
            id: datasetId,
            fromDatasetId: 'dataset_raw',
            transform: {
              type: 'filter',
              config: {
                and: [
                  { dimension: 'Year', gte: 2005 },
                  { dimension: 'Country', '=': country }
                ]
              }
            }
          });
          seriesList.push({
            type: 'line',
            datasetId: datasetId,
            showSymbol: false,
            name: country,
            /*endLabel: {
              show: true,
              formatter: function (params) {
                return params.value[3] + ': ' + params.value[0];
              }
            },*/
            labelLayout: {
              moveOverlap: 'shiftY'
            },
            emphasis: {
              focus: 'series'
            },
            encode: {
              x: 'Year',
              y: 'Income',
              label: ['Country', 'Income'],
              itemName: 'Year',
              tooltip: ['Income']
            }
          });
        });
        option = {
          animationDuration: 10000,
          dataset: [
            {
              id: 'dataset_raw',
              source: _rawData
            },
            ...datasetWithFilters
          ],
          /*title: {
            text: 'GDP change of main city'
          },*/
          tooltip: {
            order: 'valueDesc',
            trigger: 'axis'
          },
          xAxis: {
            type: 'category',
            name:"Year",
            //nameLocation: 'middle',
            axisLabel: {
              fontFamily:'Microsoft YaHei',
              fontWeight:'bold'
            }
          },
          yAxis: {
            name: 'GDP (pounds million)',
            axisLabel: {
              formatter: '{value} £',
              fontFamily:'Microsoft YaHei',
              fontWeight:'bold'
            }
          },
          grid: {
            //right: 140
            height:"60%",
            left:"17%"
          },
          series: seriesList
        };
        myChart.setOption(option);
      });

      option && myChart.setOption(option);

    }
  },
  mounted(){
    this.GSWDrawGDP();
  }
}
</script>

<style scoped>

</style>
