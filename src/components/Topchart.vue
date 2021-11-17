<template>
  <div class="Topchart">

    <div id="TopLineOptionXK" style="width: 750px;height:380px; "></div>

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
  name: 'Topchart',
  data() {
    return {

    };
  },
  methods:{
    TopLineOptionXK() {
      this.TopOverviewXK = this.$echarts.init(document.getElementById("TopLineOptionXK"));
      this.TopOverviewXK.hideLoading();
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
          this.TopLineOptionXK = {
            title: [
              {
                text: 'The top five cities of UK traffic accident',
                left:'2%',
                textStyle: {
                  fontSize: 18,
                }
              },

            ],
            legend: {
              data: ['Kent', 'Surrey', 'Lancashire', 'Essex', 'Hampshire'],
              top:'7%',
            },
            grid: {
              left: '3%',
              right: '4%',
              bottom: '3%',
              containLabel: true
            },

            tooltip: {
              trigger: 'axis'
            },
            xAxis: {
              type: 'category',
              boundaryGap: false,
              data: ['2005','2006', '2007', '2008', '2009','2010', '2011','2012','2013','2014','2015', ]
            },
            yAxis: {
              type: 'value',
              min:2500,
            },
            series: [
              {
                name:'Kent',
                type: 'line',

                data: [4852,	4752,	4779,	4596,	4486,	4278,	4211,	4163,	4252,	4618,	4222]
              },
              {
                name: 'Surrey',
                type: 'line',

                data: [4826,	4684,	4272,	4150,	4094,	3803,	4023,	3967,	3793,	3962,	3858]
              },
              {
                name: 'Lancashire',
                type: 'line',

                data: [4516,	4297,	4265,	3972,	3705,	3530,	3234,	3047,	2911,	3078,	2940]
              },
              {
                name: 'Essex',
                type: 'line',

                data: [4471,	4292,	4070,	3557,	3342,	3152,	3189,	3133,	3071,	3273,	3009]
              },
              {
                name: 'Hampshire',
                type: 'line',

                data: [3866,	3708,	3768,	3233,	3103,	3177,	3253,	3074,	2927,	2976,	2865]
              }
            ]
          };

          this.TopOverviewXK.clear();
          this.TopOverviewXK.setOption(this.TopLineOptionXK);
          // console.log(values);

        }
      });

      // option && overview.setOption(option);
    },

  },

  mounted () {
    console.log(this.defaultAllYearData + "aaa")
    //this.drawLine1();
    this.TopLineOptionXK();

  }
}
</script>

<style scoped>

</style>
