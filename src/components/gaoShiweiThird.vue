<template>
  <div class="GSWSecond">

    <div id="GSWThirdImage" style="width: 850px;height:500px;"></div>
  </div>
</template>

<script>
import * as echarts from 'echarts';
import Vue from 'vue'
import axios from 'axios'
Vue.prototype.$echarts = echarts
export default {
  name: 'GSWThird',
  methods:{
    GSWdrawGDPandPopulation(){
      let GSWThirdChart = document.getElementById('GSWThirdImage');
      let GSWThirdmyChart = echarts.init(GSWThirdChart);
      let GSWThirdOption;
      let GSWThirdUrl="http://localhost:8090/gdpAccident"

      GSWThirdmyChart.showLoading();
      axios.get(GSWThirdUrl).then(response=>
       {
         let GSWThirdData=response.data;
         console.log(GSWThirdData);
        GSWThirdmyChart.hideLoading();
         let itemStyle = {
          opacity: 0.8
        };
         let sizeFunction = function (x) {
           let y = Math.sqrt(x / 1.5e6) + 0.03;
          return y * 80;
        };
        // Schema:
        var schema = [
          { name: 'Income', index: 0, text: 'GDP', unit: ' pounds million' },
          { name: 'LifeExpectancy', index: 1, text: 'Accident', unit: ' times' },
          { name: 'Population', index: 2, text: 'Population', unit: '' },
          { name: 'Country', index: 3, text: 'Area', unit: '' }
        ];
        GSWThirdOption = {
          baseOption: {
            timeline: {
              axisType: 'category',
              orient: 'vertical',
              autoPlay: true,
              inverse: true,
              playInterval: 1000,
              left: null,
              right: 0,
              top: 20,
              bottom: 20,
              width: 55,
              height: null,
              symbol: 'none',
              checkpointStyle: {
                borderWidth: 2
              },
              controlStyle: {
                showNextBtn: false,
                showPrevBtn: false
              },
              textStyle: {
                fontSize: 70,
                fontFamily:'Microsoft YaHei',
                fontWeight:'bold'
              },
              data: []
            },
            title: [
              {
                text: GSWThirdData.timeline[0],
                textAlign: 'center',
                left: '63%',
                top: '65%',
                textStyle: {
                  fontSize: 70,
                  fontFamily:'Microsoft YaHei',
                  fontWeight:'bold'
                }
              },
              {
                text: 'Relation between Accident and GDP',
                left: 'center',
                top: 10,
                textStyle: {
                  fontWeight: 'bold',
                  fontSize: 20,
                  fontFamily:'Microsoft YaHei',
                }
              }
            ],
            tooltip: {
              padding: 5,
              borderWidth: 1,
              formatter: function (obj) {
                let value = obj.value;
                // prettier-ignore
                return schema[3].text + '：' + value[3] + '<br>'
                  + schema[1].text + '：' + value[1] + schema[1].unit + '<br>'
                  + schema[0].text + '：' + value[0] + schema[0].unit + '<br>'
                  + schema[2].text + '：' + value[2] + '<br>';
              }
            },
            grid: {
              top: 100,
              containLabel: true,
              left: 30,
              right: '110'
            },
            xAxis: {
              type: 'value',
              name: 'GDP (pounds million)',
              max: 25000,
              min: 500,
              nameGap: 25,
              nameLocation: 'middle',
              nameTextStyle: {
                fontSize: 18
              },
              splitLine: {
                show: false
              },
              axisLabel: {
                formatter: '{value} £',
                fontFamily:'Microsoft YaHei',
                fontWeight:'bold'
              }
            },
            yAxis: {
              type: 'value',
              name: 'Accident',
              max: 2500,
              min:0,
              nameTextStyle: {
                fontSize: 18
              },
              splitLine: {
                show: false
              },
              axisLabel: {
                formatter: '{value} times',
                fontFamily:'Microsoft YaHei',
                fontWeight:'bold'
              }
            },
            visualMap: [
              {
                show: false,
                dimension: 3,
                categories: GSWThirdData.counties,
                inRange: {
                  color: (function () {
                    // prettier-ignore
                    let colors = ['#87CEEB', '#FFEFD5', '#FF8C00', '#FF0000',
                      '#659d84', '#D2691E', '#A0522D', '#FFC0CB',
                      '#9932CC', '#FFA500','#9400D3','#90EE90',
                      '#8B008B', '#800080','#A9A9A9','#00FA9A',
                      '#00BFFF','#BA55D3','#FFB6C1','#FFFF00'];
                    return colors.concat(colors);
                  })()
                }
              }
            ],
            series: [
              {
                type: 'scatter',
                itemStyle: itemStyle,
                data: GSWThirdData.series[0],
                symbolSize: function (val) {
                  return sizeFunction(val[2]);
                }
              }
            ],
            animationDurationUpdate: 1000,
            animationEasingUpdate: 'quinticInOut'
          },
          options: []
        };
        for (let n = 0; n < GSWThirdData.timeline.length; n++) {
          GSWThirdOption.baseOption.timeline.data.push(GSWThirdData.timeline[n]);
          GSWThirdOption.options.push({
            title: {
              show: true,
              text: GSWThirdData.timeline[n] + ''
            },
            series: {
              name: GSWThirdData.timeline[n],
              type: 'scatter',
              itemStyle: itemStyle,
              data: GSWThirdData.series[n],
              symbolSize: function (val) {
                return sizeFunction(val[2]);
              }
            }
          });
        }
        GSWThirdmyChart.setOption(GSWThirdOption);
      });

      GSWThirdOption && GSWThirdmyChart.setOption(GSWThirdOption);
    }
  },
  mounted()
  {

    this.GSWdrawGDPandPopulation();
  }
}
</script>

<style scoped>

</style>
