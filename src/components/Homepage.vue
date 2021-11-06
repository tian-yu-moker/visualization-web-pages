<template>
  <div class="homepage">
    <div id="main" style="width: 600px;height:400px;"></div>
  </div>
</template>

<script>
import * as echarts from 'echarts';
Vue.prototype.$echarts = echarts
import axios from 'axios'
import Vue from 'vue'


export default {
  name: 'Homepage',
  data() {
    return {
      carsBrandOverview: [],
      carsYearlyData: [],
      defaultAllYearData: [],
      overview: ""
    };
  },
  methods:{
    drawVehicleTreemap() {
      this.overview = this.$echarts.init(document.getElementById("main"));

      this.overview.hideLoading();
      const formatUtil = echarts.format;
      this.overview.setOption(
        ({
          title: {
            text: 'Vehicle Brand (Accident number > 3000 in 10 years)',
            left: 'center'
          },
          tooltip: {
            formatter: function (info)
            {
              let value = info.value;
              let name = info.name;
              return [
                '<div class="tooltip-title" id="tooltips">' +
                formatUtil.encodeHTML(name) +
                '</div>',
                'Total Accident Count: ' + value
              ].join('');
            }
          },
          series: [
            {
              name: 'Vehicle Brand',
              type: 'treemap',
              visibleMin: 2000,
              roam:'false',
              leafDepth: 1,
              label: {
                show: true,
                formatter: '{b}'
              },
              itemStyle: {
                borderColor: '#fff'
              },
              data: []
            }
          ]
        })
      );
      let urlAll = "http://localhost:8090/cars/getAllCars";
      axios.get(urlAll).then(response =>
      {
        //If query is success
        if (response.status == 200)
        {
          console.log(response.data[0])
          this.carsBrandOverview = response.data[0];
          this.defaultAllYearData = response.data[0];
        }
        this.overview.setOption({
          series: [
            {
              data: this.carsBrandOverview
            }
          ]
        })
      });
      this.overview.on('click', this.overviewClick);
      // option && overview.setOption(option);
    },
    overviewClick(params)
    {
      alert(params.name);

    }
  },
  created () {
    let urlAll = "http://localhost:8090/cars/getAllCars";
    axios.get(urlAll).then(response =>
    {
      //If query is success
      if (response.status == 200)
      {
        console.log(response.data[0])
        this.carsBrandOverview = response.data[0];
        this.defaultAllYearData = response.data[0];
      }



    });
    console.log(this.defaultAllYearData + "aaa")
  },
  mounted () {
    console.log(this.defaultAllYearData + "aaa")
    this.drawVehicleTreemap();
  }
}
</script>

<style scoped>

</style>
