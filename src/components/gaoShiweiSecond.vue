<template>
<div class="GSWSecond">

  <div id="GSWSecondImage" style="width: 400px;height:400px;"></div>
</div>
</template>

<script src="https://public.tableau.com/javascripts/api/tableau-2.min.js"></script>



<script>
import * as echarts from 'echarts';
import Vue from 'vue'
import axios from 'axios'
Vue.prototype.$echarts = echarts


export default {
  name: 'GSWSecond',
  methods:{
    GSWinitTableau() {
  let containerDiv = document.getElementById("GSWSecondImage"),
    url = "https://public.tableau.com/views/MaleandFemale_16368776788840/1_1?:language=en-US&:display_count=n&:origin=viz_share_link";


  let viz = new tableau.Viz(containerDiv, url);
}
  },

      mounted()
      {

  this.GSWinitTableau()
      }
}
</script>

<style scoped>

</style>
