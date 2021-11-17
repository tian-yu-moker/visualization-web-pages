<template>
  <div>
    <div id="vehicleTypeSunbrustContainer" style="width: 500px;height:400px;"></div>
    <div id="vehicleTypleContainer" style="width: 1000px;height:400px;"></div>
  </div>
</template>

<script>
import * as echarts from 'echarts';
Vue.prototype.$echarts = echarts
import * as UK from '../components/British'
import axios from 'axios'
import Vue from 'vue'
import { UniversalTransition } from 'echarts/features';
echarts.use([UniversalTransition]);
export default {
  name: 'VehicleTypes',
  data() {
    return {
      vehicleTypeSunbrustData: [],
      vehicleTypeSunGraphTY: "",
      vehicleTypeSunGraphOptionTY: "",
      vehicleTypeCurDataTY: [],
      vehicleTypePieGraphTY: "",
      vehicleTypePieGraphOptionTY: ""


    }
  },
  methods:
  {
    drawVehicleTypeSunbrustGraphTY()
    {
      let url = "http://localhost:8090/vehicle/types";
      axios.get(url, {}).then(response =>
      {
        if (response.status == 200)
        {
          console.log(response.data)
          this.vehicleTypeSunGraphTY = this.$echarts.init(document.getElementById("vehicleTypeSunbrustContainer"));
          this.vehicleTypePieGraphTY = this.$echarts.init(document.getElementById("vehicleTypleContainer"));
          this.vehicleTypeSunbrustData = response.data;
          this.vehicleTypeCurDataTY = response.data[0];
          let optionSun = {
            visualMap: {
              type: 'continuous',
              min: 0,
              max: 20000,
              inRange: {
                color: ['#2F93C8', '#AEC48F', '#FFDB5C', '#F98862']
              }
            },
            series:
            {
                type: 'sunburst',
                data: this.vehicleTypeCurDataTY,
                radius: [0, '70%'],
                datasetIndex: 1,
                label: {
                  rotate: 'radial'
                }
            }
          };

          let optionPie = {
            title: {
              text: 'Weather Statistics',
              subtext: 'Fake Data',
              left: 'center'
            },
            tooltip: {
              trigger: 'item',
              formatter: '{b} : {c} ({d}%)'
            },
            legend: {
              bottom: 10,
              left: 'center',
              data: ['Motorcycle', 'Car', 'Bus', 'Truck', 'Scooter']
            },
            series: {
              type: 'pie',
              radius: '70%',
              center: ['50%', '50%'],
              selectedMode: 'single',
              data: this.vehicleTypeSunbrustData[1]
            },
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
            }
          }
          this.vehicleTypeSunGraphOptionTY = optionSun;
          this.vehicleTypePieGraphOptionTY = optionPie;
          this.vehicleTypeSunGraphTY.setOption(this.vehicleTypeSunGraphOptionTY);
          this.vehicleTypePieGraphTY.setOption(this.vehicleTypePieGraphOptionTY);
        }
      });
    }
  },
  created ()
  {

  },
  mounted ()
  {
    this.drawVehicleTypeSunbrustGraphTY()
  }
}
</script>

<style scoped>

</style>
