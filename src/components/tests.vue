<template>
  <div class="EchartPractice">
    <div id="main"></div>
  </div>
</template>

<script>
export default {
  name: "EchartPractice",
  methods:{
    drawChart() {
      let myEchart = this.$echarts.init(document.getElementById("main"));
      let option = {
        title:{
          text:"Vue中使用Echarts小练习"
        },
        tooltip:{},
        legend:{
          data:["销量"]
        },
        xAxis:{
          data: ["苹果","香蕉","橘子","葡萄",]
        },
        yAxis:{},
        series:[{
          name:'销量',
          type:"bar",
          data:[50,60,45,30,]
        }]
      };
      myEchart.setOption(option);
    }
  },
  mounted() {
    this.drawChart();
  }
}
</script>

<style scoped>
#main {
  width: 600px;
  height:400px;
  margin: auto;
  margin-top: 100px
}
</style>

