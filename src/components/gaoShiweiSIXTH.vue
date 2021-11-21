<template>
  <div class="GSWFourth">

    <div id="GSWFourthImage" style="width: 400px;height:250px;"></div>
  </div>
</template>

<script>
import * as echarts from 'echarts';
import Vue from 'vue'
import axios from 'axios'
export default {
  name: 'gaoShiweiSIXTH',
  methods:{
    GSWDrawgdp(){
      let GSWFourthchartDom = document.getElementById('GSWFourthImage');
      let GSWFourthmyChart = echarts.init(GSWFourthchartDom);
      let GSWFourthoption;

      GSWFourthoption = {
        title: {
          show:false,
          text: 'Stacked Line'
        },
        tooltip: {
          show:true,
          trigger: 'axis'
        },
        legend: {
          show:false,
          data: ['Manchester',
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
            "Angus"]
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '0%',
          top:'5%',
          containLabel: true
        },
        toolbox: {
          show:false,
          feature: {
            saveAsImage: {}
          }
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: ['2005','2006','2007','2008','2009','2010','2011','2012','2013','2014','2015']
        },
        yAxis: {
          type: 'value',
        },
        series: [
          {
            name: 'Manchester',
            type: 'line',
            stack: 'Total',
            data: [14234,15261,16292,16524,16854,17411,17707,18692,19175,20041,20947
            ],
            color:'#87CEEB'
          },
          {
            name: 'Glasgow City',
            type: 'line',
            stack: 'Total',
            data: [16846,17701,18515,19084,18870,18543,19255,19646,20587,21185,21362
            ],
            color:'#FFEFD5'
          },
          {
            name: 'Bradford',
            type: 'line',
            stack: 'Total',
            data: [8071,8408,8772,9013,8933,9062,9494,9665,9900,9967,10408
            ],
            color:'#FF8C00'
          },
          {
            name: 'Liverpool',
            type: 'line',
            stack: 'Total',
            data: [9957,10843,10940,11505,11983,12196,12354,12228,12519,13159,13421
            ],
            color:'#FF0000'
          },
          {
            name: 'Sheffield',
            type: 'line',
            stack: 'Total',
            data: [10369,10922,11649,11427,11412,11714,12203,12421,12865,13246,13632
            ],
            color:'#659d84'
          },
          {
            name: 'Edinburgh',
            type: 'line',
            stack: 'Total',
            data: [15835,16504,17726,17616,17977,17855,18240,19113,20080,20757,21215

            ],
            color:'#D2691E'
          },
          {
            name: 'Durham',
            type: 'line',
            stack: 'Total',
            data: [7542,8010,8381,8668,8716,8876,8865,9129,9263,9307,9484

            ],
            color:'#A0522D'
          },
          {
            name: 'Bristol',
            type: 'line',
            stack: 'Total',
            data: [9864,10423,11195,11595,11900,12411,12541,12817,13231,13968,14469

            ],
            color:'#FFC0CB'
          },
          {
            name: 'Lambeth',
            type: 'line',
            stack: 'Total',
            data: [7837,8129,9166,9690,9533,10309,10852,11169,10843,12184,12465

            ],
            color:'#9932CC'
          },
          {
            name: 'Kirklees',
            type: 'line',
            stack: 'Total',
            data: [6058,6293,6568,6641,6512,6665,6906,7006,7227,7545,7935

            ],
            color:'#FFA500'
          },
          {
            name: 'Barnet',
            type: 'line',
            stack: 'Total',
            data: [6679,7138,7506,7462,7102,7364,7633,8292,8579,9171,9378

            ],
            color:'#9400D3'
          },
          {
            name: 'Doncaster',
            type: 'line',
            stack: 'Total',
            data: [4367,4651,4943,4955,4754,4943,5034,5172,5294,5640,6077

            ],
            color:'#90EE90'
          },
          {
            name: 'Ealing',
            type: 'line',
            stack: 'Total',
            data: [7208,7639,8050,8069,7545,7836,8169,8542,9010,9685,10268

            ],
            color:'#8B008B'
          },
          {
            name: 'Brent',
            type: 'line',
            stack: 'Total',
            data: [6135,	6570,6870,6926,6655,6933,7164,7581,7971,8628,9352

            ],
            color:'#800080'
          },
          {
            name: 'Coventry',
            type: 'line',
            stack: 'Total',
            data: [6705,6777,7132,7286,7163,7567,7890,8422,8722,9302,10147

            ],
            color:'#A9A9A9'
          },
          {
            name: 'Barnsley',
            type: 'line',
            stack: 'Total',
            data: [3172,3329,3548,3480,3372,3496,3630,3787,3932,4109,4224

            ],
            color:'#00FA9A'
          },
          {
            name: 'Oldham',
            type: 'line',
            stack: 'Total',
            data: [3122,3274,3401,3470,3411,3478,3564,3673,3786,3937,4190

            ],
            color:'#00BFFF'
          },
          {
            name: 'Bexley',
            type: 'line',
            stack: 'Total',
            data: [4473,4703,4950,5028,4767,4923,5016,5622,6310,6436,6698

            ],
            color:'#BA55D3'
          },
          {
            name: 'Bath and North East Somerset',
            type: 'line',
            stack: 'Total',
            data: [3518,3686,3837,3962,3865,4084,4142,4231,4224,4396,4462

            ],
            color:'#FFB6C1'
          },
          {
            name: 'Angus',
            type: 'line',
            stack: 'Total',
            data: [1551,1728,1802,1840,1768,1803,1863,1915,2021,2171,2129

            ],
            color:'#FFFF00'
          },


        ]
      };

      GSWFourthoption && GSWFourthmyChart.setOption(GSWFourthoption);

    }
  },
  mounted(){
    this.GSWDrawgdp();
  }
}
</script>

<style scoped>

</style>
