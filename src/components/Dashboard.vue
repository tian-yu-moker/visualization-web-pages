<template>

  <div style="overflow-y:hidden;">
    <!--<div style="width: 100%">
      <el-tabs v-model="activeName" @tab-click="handleClick" :stretch="true">
        <el-tab-pane label="UK Traffic Visualization" name="first">
          <template #label>
            <span>
              <el-image
                style="width: 160px; height: 40px"
                :src="require('../assets/VisualizationImages/Logo.png')"
              ></el-image>
            </span>
          </template>
        </el-tab-pane>
        <el-tab-pane label="用户管理" name="first"></el-tab-pane>
        <el-tab-pane label="配置管理" name="second"></el-tab-pane>
        <el-tab-pane label="角色管理" name="third"></el-tab-pane>
        <el-tab-pane label="定时任务补偿" name="fourth"></el-tab-pane>
      </el-tabs>

    </div>-->

    <div id="headerImage" style="height:750px;">
      <br><br>
      <br><br>
      <br><br>
      <h1 style="font-size: 50px; color: sandybrown">VISUALIZATION OF UK</h1>
      <br>
      <h1 style="font-size: 50px; color: sandybrown">TRAFFIC ACCIDENTS</h1>
      <br>
      <h2 style="font-size: 35px; color: sandybrown"><a href="https://echarts.apache.org/en/" style="font-size: 35px; color: sandybrown">Build with Apache ECharts.js v5.2</a></h2>
      <div style="height:30px"></div>
      <el-row :gutter="15">
        <el-col :span="2">
          <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div>
        </el-col>
        <el-col :span="20">
          <el-row :gutter="12">
            <el-col :span="8">
              <el-card shadow="hover">
                <h2><i class="el-icon-s-platform"> Interaction</i></h2>
                <p>Mainly based on Echarts & JavaScript, users can interact with the charts as they want.
                  Hover the mouse on graphs, the related elements will be displayed on a tooltip.</p>
              </el-card>
            </el-col>
            <el-col :span="8">
              <el-card shadow="hover"><h2><i class="el-icon-view"> Exploration</i> </h2>
                <p>Based on Echarts & JavaScript, users can interact with the charts as they want</p>
              </el-card>
            </el-col>
            <el-col :span="8">
              <el-card shadow="hover"><h2><i class="el-icon-finished"> Completion</i> </h2>
                <p>Based on Echarts & JavaScript, users can interact with the charts as they want</p>
              </el-card>
            </el-col>
          </el-row>
        </el-col>
        <el-col :span="2"><div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div></el-col>
      </el-row>
    </div>
    <div style="height: 10px;"></div>
    <el-divider></el-divider>
    <div style="height: 10px;"></div>
    <el-row :gutter="10">
      <el-col :span="6">
        <div style="height: 260px;">
          <el-card shadow="always" style="height: 636px">
            <el-row :gutter="3">
              <el-col :span="8"><el-image
                style="width: 100px; height: 50px"
                :src="require('../assets/VisualizationImages/UK Flag.png')"></el-image>
              </el-col>
              <el-col :span="16" align="left">
                <strong style="font-size: 25px">United Kingdom</strong>
                <div style="height: 7px"></div>
                <strong style="font-size: 16px">Traffic Accidents (05~15)</strong>
              </el-col>
            </el-row>
            <div style="height: 7px"></div>
            <el-divider></el-divider>
            <div style="height: 7px"></div>
            <div align="left">
              <i style="font-size: 16px" class="el-icon-data-line">
                <strong> Accidents statistics across the UK</strong>
              </i>
              <div style="height: 3px"></div>
              <strong style="font-size: 13px">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;200M accidents in 10 years</strong>
              <br>
              <strong style="font-size: 13px">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Death rate: 2420 / 10,0000</strong>
              <div style="height: 10px"></div>
              <i class="el-icon-warning">
              <strong style="font-size: 16px;">
                 Over 500/D accidents happens!
              </strong></i>
              <div style="height: 3px"></div>
              <strong style="font-size: 13px">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Be careful on the road.</strong>
              <div style="height: 10px;"></div>
              <i class="el-icon-s-data">
                <strong style="font-size: 16px;">
                  <a href="https://www.gov.uk/" style="color: black"> Data from UK.GOV</a>
                </strong>
              </i>
            </div>
          </el-card>

        </div>
      </el-col>
      <el-col :span="18">
        <el-card>
          <el-row :gutter="5">
            <el-col :span="12">
              <el-row :gutter="2" align="left">
                <el-col :span="8">
                  <el-image
                    style="width: 150px; height: 138px"
                    :src="require('../assets/VisualizationImages/Intro.png')"></el-image>
                </el-col>
                <el-col :span="1"></el-col>
                <el-col :span="15" align="left">
                  <p style="font-size: 17px;font-weight: bolder">DATASET&nbsp;&nbsp;&nbsp;BRIEF&nbsp;&nbsp;&nbsp;INTRODUCTION</p>
                  <el-row :gutter="0">
                    <el-col :span="11" align="left">
                      <span style="font-weight: bolder; font-size: 45px">200M</span>
                      <span style="font-size: 20px">ACCIDENTS</span>
                    </el-col>
                    <el-col :span="2">

                    </el-col>
                    <el-col :span="11" align="center">
                      <span style="font-weight: bolder; font-size: 45px">200+</span>
                      <span style="font-size: 20px">UKREGIONS</span>
                    </el-col>
                  </el-row>
                  <p style="font-size: 24px; color: firebrick; font-weight: bold; margin-top: 8px">ADDITIONAL DATASETS</p>
                  <p style="font-size: 16px; font-weight: bold">GDP.&nbsp;&nbsp;&nbsp;&nbsp;POP.&nbsp;&nbsp;&nbsp;&nbsp;WEATHER.&nbsp;&nbsp;&nbsp;&nbsp;VEHICLE</p>
                </el-col>
              </el-row>
            </el-col>
            <el-col :span="12">
              <el-row :gutter="3">
                <el-col :span="8">
                  <el-image
                    style="width: 150px; height: 140px"
                    :src="require('../assets/VisualizationImages/Intro_2.png')"></el-image>
                </el-col>
                <el-col :span="16" align="left">
                  <p STYLE="font-weight: bolder"> VISUALIZATION&nbsp;&nbsp;&nbsp;ELEMENTS & METHODS</p>
                  <i class="el-icon-map-location" style="margin-top: 10px; font-size: 13px; font-weight: bold">
                    Map Visualization: based on geo-information
                  </i>
                  <i class="el-icon-coordinate" style="margin-top: 5px; font-size: 13px; font-weight: bold">
                    Multiple coordinates: map, calendars & 2D
                  </i>
                  <i class="el-icon-coordinate" style="margin-top: 5px; font-size: 13px; font-weight: bold">
                    Multiple coordinates: map, calendars & 2D
                  </i>
                  <i class="el-icon-coordinate" style="margin-top: 5px; font-size: 13px; font-weight: bold">
                    Multiple coordinates: map, calendars & 2D
                  </i>
                  <i class="el-icon-coordinate" style="margin-top: 5px; font-size: 13px; font-weight: bold">
                    Multiple coordinates: map, calendars & 2D
                  </i>
                  <i class="el-icon-coordinate" style="margin-top: 5px; font-size: 13px; font-weight: bold">
                    Multiple coordinates: map, calendars & 2D
                  </i>
                </el-col>
              </el-row>
            </el-col>
          </el-row>
        </el-card>
        <div style="height:10px"></div>
        <el-card>
          <div align="left"><i class="el-icon-s-marketing" style="font-size: 25px"><strong> Overview of traffic accidents over 11 years</strong></i></div>
          <div id="totalLineChartOverviewHeaderDIVXK" style="margin-top: 5px;width: 100%;height:370px;"></div>
        </el-card>
      </el-col>
    </el-row>
    <div style="height:5px;"></div>
    <el-divider></el-divider>
    <div style="height:5px;"></div>
    <el-row :gutter="10">
      <el-col :span="2">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</el-col>
      <el-col :span="20">
        <el-card>
          <div id="ukmap" style="width:100%;height:800px;background: rgba(12,134,211,0.2)"></div>
          <div class="block">
            <el-row>
              <el-col :span="19">
                <el-slider v-model="selectMapYear"
                           range
                           show-stops
                           :min="2005"
                           :max="2015"
                           :step="1"
                           :marks=" {2005: '2005', 2006: '2006', 2007: '2007', 2008: '2008', 2009 :'2009',
                           2010: '2010', 2011: '2011', 2012: '2012', 2013: '2013', 2014: '2014', 2015: '2015'}"
                           @change="mapYearChange"
                           style="width: 100%">
                </el-slider>
              </el-col>
              <el-col :span="5" align="right" style="margin-top: 9px">
                <el-switch
                  style="display: block"
                  v-model="ukMapOrBar"
                  active-color="#13ce66"
                  inactive-color="#3399ff"
                  active-text="Bar Statistics"
                  inactive-text="Map"
                  @change="ukMapOrBarSelect"
                >
                </el-switch>
              </el-col>
            </el-row>
          </div>
        </el-card>
      </el-col>
      <el-col :span="2">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</el-col>

    </el-row>
    <div style="height: 5px"></div>
    <el-divider></el-divider>
    <div style="height: 5px"></div>
    <!--Calendar Visualization-->

    <div class="calendars" align="left">
      <el-row :gutter="10">
        <el-col :span="2">&nbsp;&nbsp;&nbsp;</el-col>
        <el-col :span="20">
          <i class="el-icon-data-board" style="font-size: 20px; font-weight: bolder">
            <span> Calendar Coordinate System Visualization</span>
          </i>
        </el-col>
        <el-col :span="2">&nbsp;&nbsp;&nbsp;</el-col>
      </el-row>
      <el-row :gutter="10">
        <el-col :span="2">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</el-col>
        <el-col :span="12" style="height: 700px">
          <el-card class="calendar">
            <el-row :gutter="10">
              <el-col :span="10" align="left">
                <el-date-picker v-model="curMonCalendarTY" type="month"
                                placeholder="Select a month" size="medium"
                                @change="monChangeCalendarTY" value-format="yyyy-MM">
                </el-date-picker>
              </el-col>
              <el-col :span="4">&nbsp;&nbsp;&nbsp;</el-col>
              <el-col :span="10" align="right">
                <el-select v-model="selectModeInCalendarsTY" placeholder="Select a mode" size="medium" @change="modeChangeCalendarTY">
                  <el-option
                    v-for="item in allModesInCalendarTY"
                    :key="item.value"
                    :label="item.value"
                    :value="item.value">
                  </el-option>
                </el-select>
              </el-col>
            </el-row>
            <div id="calendarAllTY" style="width: 800px;height: 600px; margin-top: 5px"></div>
          </el-card>
          <br><br><br><br><br>
        </el-col>
        <el-col :span="8">
          <el-card shadow="always" style="height: 680px">
            <div style="height: 200px">
              <el-row :gutter="3">
                <el-col :span="8">
                  <el-image style="width: 180px; height: 180px; margin-top: 2px"
                            :src="require('../assets/VisualizationImages/' +
                          calendarRightDescriptionLogoUrl + '.png')">
                  </el-image>
                </el-col>
                <el-col :span="4">&nbsp;&nbsp;&nbsp;</el-col>
                <el-col :span="12">
                  <div id="calendarRightPanelDescriptionTY" align="left"></div>
                </el-col>
              </el-row>
            </div>
            <el-divider></el-divider>
            <div style="height: 480px;">
              <div id="calendarRadar_line" style="width: 100%; height: 240px;"></div>
              <el-divider></el-divider>
              <div id="calendarRadar_bar" style="width: 100%; height: 240px;"></div>
            </div>
          </el-card>
        </el-col>
        <el-col :span="2">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</el-col>
      </el-row>
      <div></div>
    </div>

    <div style="height:20px;background-color:#ff8936">空白</div>
    <el-row :gutter="15">
      <el-col :span="2" style="background-color:#b2e2fa">Placeholder</el-col>
      <el-col :span="10" style="background-color:#3333FF; height: 300px">
        <div>开姐的图</div>
        <div style="height:20px;background-color:#ff8936">空白</div>
        <div>时间图-高士玮</div>
      </el-col>
      <el-col :span="10" style="background-color:#ff8936; height: 300px">
        <div>男女</div>
        <div style="height:20px;background-color:#3333FF">空白</div>
        <div>品牌图-田宇</div>
      </el-col>
      <el-col :span="2" style="background-color:#b2e2fa">Placeholder</el-col>
    </el-row>


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
  name: 'Dashboard',
  data() {
    return {
      mapUKGeoJson: "",
      mapUK: "",
      ukMapOption: "",
      ukMapBarOption: "",
      accidentDataOnMap: "",
      selectMapYear: [2005, 2015],
      curAccidentMapData: [],
      ukMapOrBar: false,
      mapUKHoverDisabled: false,
      mapUKHoverShow: false,
      // Default start and end date
      calendarTY: "",
      calendarStartDateTY: "2005-01",
      calendarEndDateTY: "2005-02",
      // Options
      optionCalendarsTY: "",
      curOptionCalendarTY: "",
      // Total accidents options
      dailyTotalAccidentsCalendarTY: "",
      allDataCalendarTY: [],
      // Selected month
      curMonthDataCalendarTY: [],
      // Pie chart data name (weather, road .etc)
      dataNameCalendarTY: [],
      curYearCalendarTY: 2005,
      // Default month is 2005-01
      curMonCalendarTY: '2005-01',
      curMonDataHeatMapCalendarTY: [],
      selectModeInCalendarsTY: "Daily Accident",
      allModesInCalendarTY: [
        {
          value: "Daily Accident"
        },
        {
          value: "Light Condition"
        },
        {
          value: "Road Surface"
        },
        {
          value: "Weather Condition"
        }
      ],
      // First calendar
      scatterDataCalendarTY: [],
      // Light condition
      lightConditionCalendarTY: "",
      roadConditionCalendarTY: "",
      weatherConditionCalendarTY: "",
      calendarRightLineTY: "",
      calendarRightBarTY: "",
      calendarRightDescriptionLogoUrl: "statis logo"
    }
  },
  methods:{
    loadGeoMapData()
    {
      // let chartDom = echarts.init(document.getElementById('map'));
      this.mapUK = echarts.init(document.getElementById('ukmap'));
      // var option;
      this.mapUK.showLoading();
      axios.get('../../static/JsonData/England.json', {}).then(response =>
      {
        if (response.status == 200)
        {
          //console.log(response.data)
          this.mapUKGeoJson = response.data;
          echarts.registerMap('UK-Map', this.mapUKGeoJson);

          let urlMap = "http://localhost:8090/mapData";
          axios.get(urlMap, {}).then(response =>
          {
            if (response.status == 200)
            {
              //console.log(response.data);
              this.accidentDataOnMap = response.data;
              this.curAccidentMapData = this.accidentDataOnMap[0];
              let max = Math.max.apply(Math,this.curAccidentMapData.map(item => { return item.value }))
              let min = Math.min.apply(Math,this.curAccidentMapData.map(item => { return item.value }))
              this.ukMapOption = {
                title: {
                  text: "UK Traffic Accidents",
                  subtext: "Current Period: " + this.selectMapYear[0] + " ~ " + this.selectMapYear[1]
                },
                tooltip: {
                  padding: 3,
                  // backgroundColor: '#777',
                  // borderColor: '#000',
                  borderWidth: 1,
                  formatter: function (obj)
                  {
                    let name = obj.name;
                    let value = obj.value;
                    let length = response.data.length;
                    let hoveredCity = [];
                    let color = obj.color;
                    for(let i = 1; i < length; i++)
                    {
                      for(let j = 0; j < response.data[0].length; j++)
                      {
                        if(response.data[i][j].name == name)
                        {
                          hoveredCity.push(response.data[i][j].value);
                          break;
                        }
                      }
                    }

                    //alert(hoveredCity)
                    //这两步就是获取 x 和y 坐标
                    // var yindex=obj.dataIndex;
                    // var xindex=obj.seriesIndex;
                    // //当调用这个方法后，不会立即获取到ebox这个ID，所以用定时器，或许有别的方法，欢迎补充
                    setTimeout(function(){
                      //   //给饼图传入ID
                      let xIndex = [2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015]
                      let lineOption = {
                        title: [
                          {
                            text: name + " 05 ~15.  Current period: " + value,
                            textStyle: {
                              color: '#333333',
                              fontWeight: 'bold',
                              fontSize: 10
                            }
                          }
                        ],
                        xAxis: {
                          type: 'category',
                          data: xIndex
                        },
                        yAxis: {
                          type: 'value'
                        },
                        grid:{
                          x:50,
                          y:30,
                          x2:30,
                          y2:30,
                          borderWidth:1
                        },
                        series: [
                          {
                            data: hoveredCity,
                            type: 'line',
                            smooth: true,
                            itemStyle: {
                              normal: {
                                color: color, //改变折线点的颜色
                                lineStyle: {
                                  color: color //改变折线颜色
                                }
                              }
                            },
                          }
                        ]
                      };
                      let tooltipLine = echarts.init(document.getElementById('ukMapTooltips'));
                      tooltipLine.setOption(lineOption);
                    },200);
                    //重点是这一步，返回一个DIV模型
                    return '<div id="ukMapTooltips" style="width:250px; height:150px;" class="ukMapTooltips"></div>'

                  }
                },
                toolbox: {
                  show: true,
                  orient: 'vertical',
                  left: 'right',
                  top: 'center',
                  feature: {
                    dataView: { readOnly: false },
                    restore: {},
                    saveAsImage: {}
                  }
                },
                visualMap: {
                  min: min,
                  max: max,
                  text: ['High', 'Low'],
                  realtime: false,
                  calculable: true,
                  inRange: {
                    color: [
                      '#4575b4',
                      '#74add1',
                      '#abd9e9',
                      '#e0f3f8',
                      '#ffffbf',
                      '#fee090',
                      '#fdae61',
                      '#f46d43',
                      '#d73027',
                      '#a50026'
                    ]
                  }
                },
                series: [
                  {
                    id: "uk_map_series",
                    name: 'UK Traffic',
                    type: 'map',
                    map: 'UK-Map',
                    roam: true,
                    selectedMode: 'multiple',
                    layoutCenter: ['35%', '50%'],
                    layoutSize: '100%',
                    data: this.curAccidentMapData
                  }
                ]
              };
              this.mapUK.hideLoading();
              this.mapUK.setOption(this.ukMapOption);
              // this.mapUK.on('click', this.mapUKItemClick);
              // this.mapUK.on('mouseover', this.mapUKItemHover)
            }
          });
        }
      });
    },
    mapYearChange()
    {
      //console.log(this.selectMapYear);
      this.mapUK.showLoading();
      let startYear = this.selectMapYear[0];
      let endYear = this.selectMapYear[1];
      let differ = endYear - startYear;
      // If select a single year
      if(differ == 0)
        this.curAccidentMapData = this.accidentDataOnMap[startYear - 2005 + 1];
      // 05 ~ 15
      else if(differ == 10)
        this.curAccidentMapData = this.accidentDataOnMap[0]
      // 05 ~ 07
      else
      {
        let length = this.accidentDataOnMap[0].length;
        let newDataOnMap = [];

        for(let i = 0; i < length; i++)
        {
          let name = "";
          let value = 0;
          for(let j = startYear; j <= endYear; j++)
          {
            let index = j - 2005 + 1;
            let entryYear = this.accidentDataOnMap[index][i];
            name = entryYear.name;
            value += parseInt(entryYear.value);
          }
          newDataOnMap.push({
            "name": name,
            "value": value
          });
        }
        this.curAccidentMapData = newDataOnMap;
      }
      this.curAccidentMapData.sort(function (a, b) {
        return a.value - b.value;
      });
      let max = Math.max.apply(Math,this.curAccidentMapData.map(item => { return item.value }))
      let min = Math.min.apply(Math,this.curAccidentMapData.map(item => { return item.value }))
      if(this.ukMapOrBar)
      {
        let max = Math.max.apply(Math,this.curAccidentMapData.map(item => { return item.value }))
        let min = Math.min.apply(Math,this.curAccidentMapData.map(item => { return item.value }))
        const barOption = {
          title: {
            text: "Rank of UK Traffic Accidents",
            subtext: "Current Period: " + this.selectMapYear[0] + " ~ " + this.selectMapYear[1]
          },
          xAxis: {
            type: 'value'
          },
          yAxis: {
            type: 'category',
            axisLabel: {
              rotate: 30
            },
            data: this.curAccidentMapData.map(function (item) {
              return item.name;
            })
          },
          tooltip: {

          },
          visualMap: {
            orient: 'horizontal',
            left: 'center',
            min: min,
            max: max,
            text: ['High', 'Low'],
            // Map the score column to color
            dimension: 0,
            inRange: {
              color: [
                '#4575b4',
                '#74add1',
                '#abd9e9',
                '#e0f3f8',
                '#ffffbf',
                '#fee090',
                '#fdae61',
                '#f46d43',
                '#d73027',
                '#a50026'
              ]
            }
          },
          animationDurationUpdate: 1000,
          series: {
            type: 'bar',
            id: 'uk_map_series',
            data: this.curAccidentMapData.map(function (item) {
              return item.value;
            }),
            universalTransition: true,
          }
        };
        this.ukMapOption = barOption
      }
      else
      {
        let data = this.accidentDataOnMap;
        this.ukMapOption = {
          title: {
            text: "UK Traffic Accidents",
            subtext: "Current Period: " + this.selectMapYear[0] + " ~ " + this.selectMapYear[1]
          },
          tooltip: {
            padding: 3,
            // backgroundColor: '#777',
            // borderColor: '#000',
            borderWidth: 1,
            formatter: function (obj)
            {
              let name = obj.name;
              let value = obj.value;
              let length = data.length;
              let hoveredCity = [];
              let color = obj.color;
              for(let i = 1; i < length; i++)
              {
                for(let j = 0; j < data[0].length; j++)
                {
                  if(data[i][j].name == name)
                  {
                    hoveredCity.push(data[i][j].value);
                    break;
                  }
                }
              }

              //alert(hoveredCity)
              //这两步就是获取 x 和y 坐标
              // var yindex=obj.dataIndex;
              // var xindex=obj.seriesIndex;
              // //当调用这个方法后，不会立即获取到ebox这个ID，所以用定时器，或许有别的方法，欢迎补充
              setTimeout(function(){
                //   //给饼图传入ID
                let xIndex = [2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015]
                let lineOption = {
                  title: [
                    {
                      text: name + " 05 ~15.  Current period: " + value,
                      textStyle: {
                        color: '#333333',
                        fontWeight: 'bold',
                        fontSize: 10
                      }
                    }
                  ],
                  xAxis: {
                    type: 'category',
                    data: xIndex
                  },
                  yAxis: {
                    type: 'value'
                  },
                  grid:{
                    x:50,
                    y:30,
                    x2:30,
                    y2:30,
                    borderWidth:1
                  },
                  series: [
                    {
                      data: hoveredCity,
                      type: 'line',
                      smooth: true,
                      itemStyle: {
                        normal: {
                          color: color, //改变折线点的颜色
                          lineStyle: {
                            color: color //改变折线颜色
                          }
                        }
                      },
                    }
                  ]
                };
                let tooltipLine = echarts.init(document.getElementById('ukMapTooltips'));
                tooltipLine.setOption(lineOption);
              },200);
              //重点是这一步，返回一个DIV模型
              return '<div id="ukMapTooltips" style="width:250px; height:150px;" class="ukMapTooltips"></div>'

            }
          },
          visualMap: {
            min: min,
            max: max,
            text: ['High', 'Low'],
            realtime: false,
            calculable: true,
            inRange: {
              color: [
                '#4575b4',
                '#74add1',
                '#abd9e9',
                '#e0f3f8',
                '#ffffbf',
                '#fee090',
                '#fdae61',
                '#f46d43',
                '#d73027',
                '#a50026'
              ]
            }
          },
          toolbox: {
            show: true,
            orient: 'vertical',
            left: 'right',
            top: 'center',
            feature: {
              dataView: { readOnly: false },
              restore: {},
              saveAsImage: {}
            }
          },
          series: [
            {
              id: "uk_map_series",
              name: 'UK Traffic',
              type: 'map',
              map: 'UK-Map',
              roam: true,
              selectedMode: 'multiple',
              layoutCenter: ['35%', '50%'],
              layoutSize: '100%',
              data: this.curAccidentMapData
            }
          ]
        };
      }
      this.mapUK.hideLoading();
      this.mapUK.setOption(this.ukMapOption);

    },
    ukMapOrBarSelect()
    {
      // Switch to bar chart
      this.curAccidentMapData.sort(function (a, b) {
        return a.value - b.value;
      });
      if(this.ukMapOrBar)
      {
        let max = Math.max.apply(Math,this.curAccidentMapData.map(item => { return item.value }))
        let min = Math.min.apply(Math,this.curAccidentMapData.map(item => { return item.value }))
        const barOption = {
          title: {
            text: "Rank of UK Traffic Accidents",
            subtext: "Current Period: " + this.selectMapYear[0] + " ~ " + this.selectMapYear[1]
          },
          xAxis: {
            type: 'value'
          },
          yAxis: {
            type: 'category',
            axisLabel: {
              rotate: 30
            },
            data: this.curAccidentMapData.map(function (item) {
              return item.name;
            })
          },
          tooltip: {

          },
          visualMap: {
            orient: 'horizontal',
            left: 'center',
            min: min,
            max: max,
            text: ['High', 'Low'],
            // Map the score column to color
            dimension: 0,
            inRange: {
              color: [
                '#4575b4',
                '#74add1',
                '#abd9e9',
                '#e0f3f8',
                '#ffffbf',
                '#fee090',
                '#fdae61',
                '#f46d43',
                '#d73027',
                '#a50026'
              ]
            }
          },
          animationDurationUpdate: 1000,
          series: {
            type: 'bar',
            id: 'uk_map_series',
            data: this.curAccidentMapData.map(function (item) {
              return item.value;
            }),
            universalTransition: true,
          }
        };
        this.mapUK.setOption(barOption, true);
      }
      // Switch to map
      else
      {
        let data = this.accidentDataOnMap;
        let max = Math.max.apply(Math,this.curAccidentMapData.map(item => { return item.value }))
        let min = Math.min.apply(Math,this.curAccidentMapData.map(item => { return item.value }))
        this.ukMapOption = {
          title: {
            text: "UK Traffic Accidents",
            subtext: "Current Period: " + this.selectMapYear[0] + " ~ " + this.selectMapYear[1]
          },
          tooltip: {
            padding: 3,
            // backgroundColor: '#777',
            // borderColor: '#000',
            borderWidth: 1,
            formatter: function (obj)
            {
              let name = obj.name;
              let value = obj.value;
              let length = data.length;
              let hoveredCity = [];
              let color = obj.color;
              for(let i = 1; i < length; i++)
              {
                for(let j = 0; j < data[0].length; j++)
                {
                  if(data[i][j].name == name)
                  {
                    hoveredCity.push(data[i][j].value);
                    break;
                  }
                }
              }

              //alert(hoveredCity)
              //这两步就是获取 x 和y 坐标
              // var yindex=obj.dataIndex;
              // var xindex=obj.seriesIndex;
              // //当调用这个方法后，不会立即获取到ebox这个ID，所以用定时器，或许有别的方法，欢迎补充
              setTimeout(function(){
                //   //给饼图传入ID
                let xIndex = [2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015]
                let lineOption = {
                  title: [
                    {
                      text: name + " 05 ~15.  Current period: " + value,
                      textStyle: {
                        color: '#333333',
                        fontWeight: 'bold',
                        fontSize: 10
                      }
                    }
                  ],
                  xAxis: {
                    type: 'category',
                    data: xIndex
                  },
                  yAxis: {
                    type: 'value'
                  },
                  grid:{
                    x:50,
                    y:30,
                    x2:30,
                    y2:30,
                    borderWidth:1
                  },
                  series: [
                    {
                      data: hoveredCity,
                      type: 'line',
                      smooth: true,
                      itemStyle: {
                        normal: {
                          color: color,
                          lineStyle: {
                            color: color
                          }
                        }
                      },
                    }
                  ]
                };
                let tooltipLine = echarts.init(document.getElementById('ukMapTooltips'));
                tooltipLine.setOption(lineOption);
              },200);
              //重点是这一步，返回一个DIV模型
              return '<div id="ukMapTooltips" style="width:250px; height:150px;" class="ukMapTooltips"></div>'

            }
          },
          visualMap: {
            min: min,
            max: max,
            text: ['High', 'Low'],
            realtime: false,
            calculable: true,
            inRange: {
              color: [
                '#4575b4',
                '#74add1',
                '#abd9e9',
                '#e0f3f8',
                '#ffffbf',
                '#fee090',
                '#fdae61',
                '#f46d43',
                '#d73027',
                '#a50026'
              ]
            }
          },
          toolbox: {
            show: true,
            orient: 'vertical',
            left: 'right',
            top: 'center',
            feature: {
              dataView: { readOnly: false },
              restore: {},
              saveAsImage: {}
            }
          },
          series: [
            {
              id: "uk_map_series",
              name: 'UK Traffic',
              type: 'map',
              map: 'UK-Map',
              roam: true,
              selectedMode: 'multiple',
              layoutCenter: ['35%', '50%'],
              layoutSize: '100%',
              animationDurationUpdate: 1000,
              universalTransition: true,
              data: this.curAccidentMapData
            }
          ]
        };
        this.mapUK.setOption(this.ukMapOption, true);
      }
    },
    drawDefaultCalendarTY()
    {
      this.calendarTY = this.$echarts.init(document.getElementById("calendarAllTY"));
      this.calendarRightLineTY = echarts.init(document.getElementById('calendarRadar_line'));
      this.calendarRightBarTY = echarts.init(document.getElementById('calendarRadar_bar'));
      this.calendarRightLineTY.showLoading()
      this.calendarRightBarTY.showLoading();
      this.calendarTY.showLoading();
      let urlAll = "http://localhost:8090/calendarData";
      axios.get(urlAll).then(response =>
      {
        //If query is success
        if (response.status == 200)
        {
          // console.log(response.data[1][0])
          this.allDataCalendarTY = response.data;
          this.curMonthDataCalendarTY = response.data[0][0][0];
          this.scatterDataCalendarTY = this.curMonthDataCalendarTY;
          //console.log(this.allDataCalendarTY)
          this.lightConditionCalendarTY = this.allDataCalendarTY[1];
          this.roadConditionCalendarTY = this.allDataCalendarTY[2];
          this.weatherConditionCalendarTY = this.allDataCalendarTY[3];
          this.curOptionCalendarTY = {
            tooltip: {
              position: 'top'
            },
            visualMap: [
              {
                min: 110,
                max: 850,
                bottom: "0%",
                left: "23%",
                text: ['High', 'Accident number: Low'],
                inRange: {
                  color: ['#74add1', '#abd9e9', '#fee090',
                    '#fdae61', '#f46d43', '#d73027', '#a50026'],
                  opacity: [0, 0.5]
                },
                controller: {
                  inRange: {
                    opacity: [0.3, 0.9]
                  },
                  outOfRange: {
                    color: '#ccc'
                  }
                },
                orient: 'horizontal'
              }
            ],
            calendar: {
              left: "10%",
              orient: 'vertical',
              yearLabel: {
                show: false
              },
              dayLabel: {
                firstDay: 1,
                nameMap: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
              },
              monthLabel: {
                margin: 10,
                nameMap: [
                  'Jan', 'Feb', 'Mar',
                  'Apr', 'May', 'Jun',
                  'Jul', 'Aug', 'Sep',
                  'Oct', 'Nov', 'Dec'
                ]
              },
              cellSize: 80,
              range: '2005-1'
            },
            series: [
              {
                type: 'effectScatter',
                coordinateSystem: 'calendar',
                symbolSize: function (val) {
                  return val[1] / 30;
                },
                data: this.curMonthDataCalendarTY
              }
            ]
          };
          this.dailyTotalAccidentsCalendarTY = this.curOptionCalendarTY;
          this.calendarTY.hideLoading();
          this.optionCalendarsTY = this.curOptionCalendarTY;
          this.calendarTY.setOption(this.optionCalendarsTY);
        }
        this.loadCalendarRightChartsTY(response.data);
        this.loadCalendarRightDescriptionTY();
      });
    },
    getPieSeriesCalendarTY(scatterData, chart)
    {
      let year = parseInt(this.curMonCalendarTY.split("-")[0])
      let mon = parseInt(this.curMonCalendarTY.split("-")[1])
      let yearDiffer = year - 2005;
      let monDiffer = mon - 1;
      let data_attr = [];
      let colorList = [];
      if(this.selectModeInCalendarsTY == "Light Condition")
      {
        for(let i = 0; i < this.lightConditionCalendarTY[yearDiffer][monDiffer].length; i++)
          data_attr.push(this.lightConditionCalendarTY[yearDiffer][monDiffer][i].data)
        colorList = ['#ff8936', '#c89b40', '#003472'];
      }
      else if(this.selectModeInCalendarsTY == "Road Surface")
      {
        for(let i = 0; i < this.roadConditionCalendarTY[yearDiffer][monDiffer].length; i++)
          data_attr.push(this.roadConditionCalendarTY[yearDiffer][monDiffer][i].data)
        colorList = ['#eacd76', '#87CEEB', '#21a675', '#2e4e7e', '#9D2933'];
      }
      else if(this.selectModeInCalendarsTY == "Weather Condition")
      {
        for(let i = 0; i < this.weatherConditionCalendarTY[yearDiffer][monDiffer].length; i++)
          data_attr.push(this.weatherConditionCalendarTY[yearDiffer][monDiffer][i].data)
        colorList = ['#fac858', '#91cc75', '#3eede7', '#2e4e7e', '#8b4bbb', '#9d2933', '#56004f'];
      }
      chart = this.calendarTY
      return this.$echarts.util.map(scatterData, function(item, index)
      {
        let center = chart.convertToPixel('calendar', item);
        //console.log(item)
        return {
          color: colorList,
          id: index + 'pie-calendar',
          type: 'pie',
          center: center,
          label: {
            formatter: '{c}',
            position: 'inside'
          },
          radius: 27,
          data: data_attr[index]
        };
      });
    },
    getPieSeriesUpdateCalendarTY(scatterData, chart)
    {
      chart = this.calendarTY
      return this.$echarts.util.map(scatterData, function (item, index)
      {
        let center = chart.convertToPixel('calendar', item);
        return {
          id: index + 'pie',
          center: center
        };
      });
    },
    modeChangeCalendarTY()
    {
      let year = parseInt(this.curMonCalendarTY.split("-")[0])
      let mon = parseInt(this.curMonCalendarTY.split("-")[1])
      let yearDiffer = year - 2005;
      let monDiffer = mon - 1;
      this.curMonthDataCalendarTY = this.allDataCalendarTY[0][yearDiffer][monDiffer];
      if(this.selectModeInCalendarsTY == "Daily Accident")
      {
        this.calendarTY.showLoading();
        this.calendarTY.clear();
        let optionTotal = {
          tooltip: {
            position: 'top'
          },
          visualMap: [
            {
              min: 110,
              max: 850,
              bottom: "0%",
              left: "23%",
              text: ['High', 'Accident number: Low'],
              inRange: {
                color: ['#74add1', '#abd9e9', '#fee090',
                  '#fdae61', '#f46d43', '#d73027', '#a50026'],
                opacity: [0, 0.5]
              },
              controller: {
                inRange: {
                  opacity: [0.3, 0.9]
                },
                outOfRange: {
                  color: '#ccc'
                }
              },
              orient: 'horizontal'
            }
          ],
          calendar: {
            left: "10%",
            orient: 'vertical',
            yearLabel: {
              show: false
            },
            dayLabel: {
              top: "5%",
              firstDay: 1,
              nameMap: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
            },
            monthLabel: {
              margin: 10,
              nameMap: [
                'Jan', 'Feb', 'Mar',
                'Apr', 'May', 'Jun',
                'Jul', 'Aug', 'Sep',
                'Oct', 'Nov', 'Dec'
              ]
            },
            cellSize: [80, 80],
            range: [this.curMonCalendarTY]
          },
          series: [
            {
              type: 'effectScatter',
              coordinateSystem: 'calendar',
              symbolSize: function (val) {
                return val[1] / 30;
              },
              data: this.curMonthDataCalendarTY
            }
          ]
        };
        this.optionCalendarsTY = optionTotal;
        this.curOptionCalendarTY = optionTotal;
        this.calendarTY.setOption(this.optionCalendarsTY)
        this.calendarTY.hideLoading();
      }
      else if(this.selectModeInCalendarsTY == "Light Condition")
      {
        let data_name= ['Daylight', 'Weak light', 'No light'];
        let cellSize = [80, 80];
        let option = {
          tooltip: {
            position: 'top'
          },
          legend: {
            data: data_name,
            bottom: 5,
            left: "28%"
          },
          calendar: {
            left: "10%",
            orient: 'vertical',
            yearLabel: {
              show: false
            },
            dayLabel: {
              firstDay: 1,
              nameMap: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
            },
            monthLabel: {
              margin: 10,
              nameMap: [
                'Jan', 'Feb', 'Mar',
                'Apr', 'May', 'Jun',
                'Jul', 'Aug', 'Sep',
                'Oct', 'Nov', 'Dec'
              ]
            },
            cellSize: 80,
            range: [this.curMonCalendarTY]
          },
          series: [
            {
              id: 'label',
              type: 'scatter',
              coordinateSystem: 'calendar',
              symbolSize: 1,
              label: {
                show: true,
                formatter: function (params) {
                  return echarts.format.formatTime('dd', params.value[0]);
                },
                offset: [-cellSize[0] / 2 + 10, -cellSize[1] / 2 + 10],
                fontSize: 12
              },
              data: this.curMonthDataCalendarTY
            }
          ]
        };

        this.calendarTY.clear();
        this.calendarTY.setOption(option)
        let pieInitialized = true;
        let pieSeries = this.getPieSeriesCalendarTY(this.curMonthDataCalendarTY, this.calendarTY);
        //console.log(pieSeries)
        if(!this.calendarTY.inNode)
        {
          this.calendarTY.setOption({
            series: pieSeries
          });
        }
        this.calendarTY.onresize = function () {
          if (pieInitialized) {
            this.calendar.setOption({
              series: this.getPieSeriesUpdateCalendarTY(this.curMonthDataCalendarTY, this.calendar)
            });
          }
        };
      }
      else if(this.selectModeInCalendarsTY == "Road Surface")
      {
        let data_name= ['Dry', 'Damp', 'Frost',
          'Snow', "Flood"];
        let cellSize = [70, 70];
        let option = {
          tooltip: {
            position: 'top'
          },
          legend: {
            data: data_name,
            bottom: 5,
            left: '25%'
          },
          calendar: {
            left: "10%",
            orient: 'vertical',
            yearLabel: {
              show: false
            },
            dayLabel: {
              firstDay: 1,
              nameMap: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
            },
            monthLabel: {
              margin: 10,
              nameMap: [
                'Jan', 'Feb', 'Mar',
                'Apr', 'May', 'Jun',
                'Jul', 'Aug', 'Sep',
                'Oct', 'Nov', 'Dec'
              ]
            },
            cellSize: 80,
            range: [this.curMonCalendarTY]
          },
          series: [
            {
              id: 'label',
              type: 'scatter',
              coordinateSystem: 'calendar',
              symbolSize: 1,
              label: {
                show: true,
                formatter: function (params) {
                  return echarts.format.formatTime('dd', params.value[0]);
                },
                offset: [-cellSize[0] / 2 + 10, -cellSize[1] / 2 + 10],
                fontSize: 12
              },
              data: this.curMonthDataCalendarTY
            }
          ]
        };

        this.calendarTY.clear();
        this.calendarTY.setOption(option)
        let pieInitialized = true;
        let pieSeries = this.getPieSeriesCalendarTY(this.curMonthDataCalendarTY, this.calendarTY);
        //console.log(pieSeries)
        if(!this.calendarTY.inNode)
        {
          this.calendarTY.setOption({
            series: pieSeries
          });
        }
        this.calendarTY.onresize = function () {
          if (pieInitialized) {
            this.calendar.setOption({
              series: this.getPieSeriesUpdateCalendarTY(this.curMonthDataCalendarTY, this.calendar)
            });
          }
        };
      }
      else if(this.selectModeInCalendarsTY == "Weather Condition")
      {
        let data_name1 = ['Fine', 'Rain', 'Snow', 'High winds']
        let data_name2 = ["Rain & high winds", "Fog", 'Snow & high winds'];
        let cellSize = [70, 70];
        let option = {
          tooltip: {
            position: 'top'
          },
          legend: [
            {
              data: data_name1,
              bottom: 30,
              left: '25%'
            },
            {
              data: data_name2,
              bottom: 5,
              left: '22%'
            }
          ],
          calendar: {
            left: "10%",
            orient: 'vertical',
            yearLabel: {
              show: false
            },
            dayLabel: {
              firstDay: 1,
              nameMap: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
            },
            monthLabel: {
              margin: 10,
              nameMap: [
                'Jan', 'Feb', 'Mar',
                'Apr', 'May', 'Jun',
                'Jul', 'Aug', 'Sep',
                'Oct', 'Nov', 'Dec'
              ]
            },
            cellSize: 80,
            range: [this.curMonCalendarTY]
          },
          series: [
            {
              id: 'label',
              type: 'scatter',
              coordinateSystem: 'calendar',
              symbolSize: 1,
              label: {
                show: true,
                formatter: function (params) {
                  return echarts.format.formatTime('dd', params.value[0]);
                },
                offset: [-cellSize[0] / 2 + 10, -cellSize[1] / 2 + 10],
                fontSize: 12
              },
              data: this.curMonthDataCalendarTY
            }
          ]
        };

        this.calendarTY.clear();
        this.calendarTY.setOption(option)
        let pieInitialized = true;
        let pieSeries = this.getPieSeriesCalendarTY(this.curMonthDataCalendarTY, this.calendarTY);
        //console.log(pieSeries)
        if(!this.calendarTY.inNode)
        {
          this.calendarTY.setOption({
            series: pieSeries
          });
        }
        this.calendarTY.onresize = function () {
          if (pieInitialized) {
            this.calendar.setOption({
              series: this.getPieSeriesUpdateCalendarTY(this.curMonthDataCalendarTY, this.calendar)
            });
          }
        };
      }
      this.loadCalendarRightChartsTY(this.allDataCalendarTY);
      this.loadCalendarRightDescriptionTY();
    },
    monChangeCalendarTY()
    {
      let year = parseInt(this.curMonCalendarTY.split("-")[0])
      let mon = parseInt(this.curMonCalendarTY.split("-")[1])
      let yearDiffer = year - 2005;
      let monDiffer = mon - 1;
      this.curMonthDataCalendarTY = this.allDataCalendarTY[0][yearDiffer][monDiffer];
      if(this.selectModeInCalendarsTY == "Daily Accident")
      {
        this.calendarTY.showLoading();
        this.calendarTY.clear();
        let optionTotal = {
          tooltip: {
            position: 'top'
          },
          visualMap: [
            {
              min: 110,
              max: 850,
              bottom: "0%",
              left: "20%",
              text: ['High', 'Accident number: Low'],
              inRange: {
                color: ['#74add1', '#abd9e9', '#fee090',
                  '#fdae61', '#f46d43', '#d73027', '#a50026'],
                opacity: [0, 0.5]
              },
              controller: {
                inRange: {
                  opacity: [0.3, 0.9]
                },
                outOfRange: {
                  color: '#ccc'
                }
              },
              orient: 'horizontal'
            }
          ],
          calendar: {
            left: "10%",
            orient: 'vertical',
            yearLabel: {
              show: false
            },
            dayLabel: {
              top: "5%",
              firstDay: 1,
              nameMap: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
            },
            monthLabel: {
              margin: 10,
              nameMap: [
                'Jan', 'Feb', 'Mar',
                'Apr', 'May', 'Jun',
                'Jul', 'Aug', 'Sep',
                'Oct', 'Nov', 'Dec'
              ]
            },
            cellSize: [80, 80],
            range: [this.curMonCalendarTY]
          },
          series: [
            {
              type: 'effectScatter',
              coordinateSystem: 'calendar',
              symbolSize: function (val) {
                return val[1] / 30;
              },
              data: this.curMonthDataCalendarTY
            }
          ]
        };
        this.optionCalendarsTY = optionTotal;
        this.curOptionCalendarTY = optionTotal;
        this.calendarTY.setOption(this.optionCalendarsTY)
        this.calendarTY.hideLoading();
      }
      else if(this.selectModeInCalendarsTY == "Light Condition")
      {
        let data_name= ['Daylight', 'Weak light', 'No light'];
        let cellSize = [70, 70];
        let option = {
          tooltip: {
            position: 'top'
          },
          legend: {
            data: data_name,
            bottom: 5,
            left: '28%'
          },
          calendar: {
            left: "10%",
            orient: 'vertical',
            yearLabel: {
              show: false
            },
            dayLabel: {
              firstDay: 1,
              nameMap: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
            },
            monthLabel: {
              margin: 10,
              nameMap: [
                'Jan', 'Feb', 'Mar',
                'Apr', 'May', 'Jun',
                'Jul', 'Aug', 'Sep',
                'Oct', 'Nov', 'Dec'
              ]
            },
            cellSize: 80,
            range: [this.curMonCalendarTY]
          },
          series: [
            {
              id: 'label',
              type: 'scatter',
              coordinateSystem: 'calendar',
              symbolSize: 1,
              label: {
                show: true,
                formatter: function (params) {
                  return echarts.format.formatTime('dd', params.value[0]);
                },
                offset: [-cellSize[0] / 2 + 10, -cellSize[1] / 2 + 10],
                fontSize: 12
              },
              data: this.curMonthDataCalendarTY
            }
          ]
        };

        this.calendarTY.clear();
        this.calendarTY.setOption(option)
        let pieInitialized = true;
        let pieSeries = this.getPieSeriesCalendarTY(this.curMonthDataCalendarTY, this.calendarTY);
        //console.log(pieSeries)
        if(!this.calendarTY.inNode)
        {
          this.calendarTY.setOption({
            series: pieSeries
          });
        }
        this.calendarTY.onresize = function () {
          if (pieInitialized) {
            this.calendar.setOption({
              series: this.getPieSeriesUpdateCalendarTY(this.curMonthDataCalendarTY, this.calendar)
            });
          }
        };
      }
      else if(this.selectModeInCalendarsTY == "Road Surface")
      {
        let data_name= ['Dry', 'Damp', 'Frost',
          'Snow', "Flood"];
        let cellSize = [70, 70];
        let option = {
          tooltip: {
            position: 'top'
          },
          legend: {
            data: data_name,
            bottom: 5,
            left: "25%"
          },
          calendar: {
            left: "10%",
            orient: 'vertical',
            yearLabel: {
              show: false
            },
            dayLabel: {
              firstDay: 1,
              nameMap: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
            },
            monthLabel: {
              margin: 10,
              nameMap: [
                'Jan', 'Feb', 'Mar',
                'Apr', 'May', 'Jun',
                'Jul', 'Aug', 'Sep',
                'Oct', 'Nov', 'Dec'
              ]
            },
            cellSize: 80,
            range: [this.curMonCalendarTY]
          },
          series: [
            {
              id: 'label',
              type: 'scatter',
              coordinateSystem: 'calendar',
              symbolSize: 1,
              label: {
                show: true,
                formatter: function (params) {
                  return echarts.format.formatTime('dd', params.value[0]);
                },
                offset: [-cellSize[0] / 2 + 10, -cellSize[1] / 2 + 10],
                fontSize: 12
              },
              data: this.curMonthDataCalendarTY
            }
          ]
        };

        this.calendarTY.clear();
        this.calendarTY.setOption(option)
        let pieInitialized = true;
        let pieSeries = this.getPieSeriesCalendarTY(this.curMonthDataCalendarTY, this.calendarTY);
        //console.log(pieSeries)
        if(!this.calendarTY.inNode)
        {
          this.calendarTY.setOption({
            series: pieSeries
          });
        }
        this.calendarTY.onresize = function () {
          if (pieInitialized) {
            this.calendar.setOption({
              series: this.getPieSeriesUpdateCalendarTY(this.curMonthDataCalendarTY, this.calendar)
            });
          }
        };
      }
      else if(this.selectModeInCalendarsTY == "Weather Condition")
      {
        let data_name1 = ['Fine', 'Rain', 'Snow', 'High winds']
        let data_name2 = ["Rain & high winds", "Fog", 'Snow & high winds'];
        let cellSize = [70, 70];
        let option = {
          tooltip: {
            position: 'top'
          },
          legend: [
            {
              data: data_name1,
              bottom: 30,
              left: "25%"
            },
            {
              data: data_name2,
              bottom: 5,
              left: "22%",
            }
          ],
          calendar: {
            left: "10%",
            orient: 'vertical',
            yearLabel: {
              show: false
            },
            dayLabel: {
              firstDay: 1,
              nameMap: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
            },
            monthLabel: {
              margin: 10,
              nameMap: [
                'Jan', 'Feb', 'Mar',
                'Apr', 'May', 'Jun',
                'Jul', 'Aug', 'Sep',
                'Oct', 'Nov', 'Dec'
              ]
            },
            cellSize: 80,
            range: [this.curMonCalendarTY]
          },
          series: [
            {
              id: 'label',
              type: 'scatter',
              coordinateSystem: 'calendar',
              symbolSize: 1,
              label: {
                show: true,
                formatter: function (params) {
                  return echarts.format.formatTime('dd', params.value[0]);
                },
                offset: [-cellSize[0] / 2 + 10, -cellSize[1] / 2 + 10],
                fontSize: 12
              },
              data: this.curMonthDataCalendarTY
            }
          ]
        };

        this.calendarTY.clear();
        this.calendarTY.setOption(option)
        let pieInitialized = true;
        let pieSeries = this.getPieSeriesCalendarTY(this.curMonthDataCalendarTY, this.calendarTY);
        //console.log(pieSeries)
        if(!this.calendarTY.inNode)
        {
          this.calendarTY.setOption({
            series: pieSeries
          });
        }
        this.calendarTY.onresize = function () {
          if (pieInitialized) {
            this.calendar.setOption({
              series: this.getPieSeriesUpdateCalendarTY(this.curMonthDataCalendarTY, this.calendar)
            });
          }
        };
      }
      this.loadCalendarRightChartsTY(this.allDataCalendarTY);
    },
    loadCalendarRightChartsTY(allData)
    {
      let year = parseInt(this.curMonCalendarTY.split("-")[0]);
      let mon = parseInt(this.curMonCalendarTY.split("-")[1]);
      let yearDiffer = year - 2005;
      let monDiffer = mon - 1;
      //alert(this.allDataCalendarTY)
      let lineData = allData[0][yearDiffer][monDiffer];
      let lineX = [];
      let lineY = [];
      for(let i = 0; i < lineData.length; i++)
      {
        let day = lineData[i][0].split("-")[2];
        let value = lineData[i][1];
        lineX.push(day);
        lineY.push(value);
      }
      this.calendarRightBarTY.showLoading();
      let lineOption = {
        title: {
          text: "Overview of " + year + "-" + mon + " accidents",
          subtext: "From first to last day"
        },
        xAxis: {
          type: 'category',
          data: lineX
        },
        yAxis: {
          type: 'value'
        },
        tooltip: {
          trigger: 'item',
          formatter: year + '-0' + mon + '-' +'{b} : {c}'
        },
        series: [
          {
            data: lineY,
            type: 'line',
            smooth: true
          }
        ]
      };
      this.calendarRightLineTY.hideLoading();
      this.calendarRightLineTY.setOption(lineOption);

      let lightData = allData[1][yearDiffer][monDiffer];
      let roadData = allData[2][yearDiffer][monDiffer];
      let weatherData = allData[3][yearDiffer][monDiffer];
      this.calendarRightBarTY.clear();
      let barData;
      //console.log(lightData)
      if(this.selectModeInCalendarsTY == "Daily Accident" || this.selectModeInCalendarsTY == "Light Condition")
      {
        barData = lightData;
        let daylight = {};
        let daylightValue = 0;
        let weakLight = {};
        let weakValue = 0;
        let noLight = {};
        let noValue = 0;
        let light = [];
        for(let i = 0; i < barData.length; i++)
        {
          for(let j = 0; j < barData[i].data.length; j++)
          {
            if(barData[i].data[j].name == 'Daylight')
              daylightValue += parseInt(barData[i].data[j].value);
            if(barData[i].data[j].name == 'Weak light')
              weakValue += parseInt(barData[i].data[j].value);
            if(barData[i].data[j].name == 'No light')
              noValue += parseInt(barData[i].data[j].value);
          }
        }
        daylight = {
          name: 'Daylight',
          value: daylightValue
        };
        weakLight = {
          name: 'Weak light',
          value: weakValue
        };
        noLight = {
          name: 'No light',
          value: noValue
        };
        light.push(daylight);
        light.push(weakLight);
        light.push(noLight);
        let pieOption = {
            title: {
              text: 'Light condition statistic',
              subtext: 'Current month',
            },
            tooltip: {
              trigger: 'item'
            },
            legend: {
              bottom: '10%'
            },
            series: [
              {
                name: 'Access From',
                type: 'pie',
                radius: '50%',
                data: light,
                emphasis: {
                  itemStyle: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                  }
                }
              }
            ]
          };
        this.calendarRightBarTY.hideLoading();
        this.calendarRightBarTY.setOption(pieOption)
      }
      if(this.selectModeInCalendarsTY == "Road Surface")
      {
        // alert("!!!")
        barData = roadData;
        let dry = {};
        let dryValue = 0;
        let damp = {};
        let dampValue = 0;
        let frost = {};
        let frostValue = 0;
        let snow = {};
        let snowValue = 0;
        let flood = {};
        let floodValue = 0;
        let road = [];
        for(let i = 0; i < barData.length; i++)
        {
          for(let j = 0; j < barData[i].data.length; j++)
          {
            if(barData[i].data[j].name == 'Dry')
              dryValue += parseInt(barData[i].data[j].value);
            if(barData[i].data[j].name == 'Damp')
              dampValue += parseInt(barData[i].data[j].value);
            if(barData[i].data[j].name == 'Snow')
              snowValue += parseInt(barData[i].data[j].value);
            if(barData[i].data[j].name == 'Flood')
              floodValue += parseInt(barData[i].data[j].value);
            if(barData[i].data[j].name == 'Frost')
              frostValue += parseInt(barData[i].data[j].value);
          }
        }
        dry = {
          name: 'Dry',
          value: dryValue
        };
        damp = {
          name: 'Damp',
          value: dampValue
        };
        frost = {
          name: 'Frost',
          value: frostValue
        };
        snow = {
          name: 'Snow',
          value: snowValue
        };
        flood = {
          name: 'Flood',
          value: floodValue
        };
        road.push(dry);
        road.push(damp);
        road.push(frost);
        road.push(snow);
        road.push(flood);
        let pieOption = {
          title: {
            text: 'Road surface condition statistic',
            subtext: 'Current month',
          },
          tooltip: {
            trigger: 'item'
          },
          xAxis: {
            type: 'category',
            data: ['Dry', 'Damp', 'Frost', 'Snow', 'Flood']
          },
          yAxis: {
            type: 'value'
          },
          series: [
            {
              name: 'Access From',
              type: 'bar',
              radius: '50%',
              data: road,
              emphasis: {
                itemStyle: {
                  shadowBlur: 10,
                  shadowOffsetX: 0,
                  shadowColor: 'rgba(0, 0, 0, 0.5)',
                }
              },
              itemStyle: {
                normal: {
                  color: function(params)
                  {
                    let colorList = ['#eacd76', '#87CEEB', '#21a675', '#2e4e7e', '#9D2933'];
                    return colorList[params.dataIndex]
                  }
                }
              }
            }
          ]
        };
        this.calendarRightBarTY.hideLoading();
        this.calendarRightBarTY.setOption(pieOption)
      }
      if(this.selectModeInCalendarsTY == "Weather Condition")
      {
        barData = weatherData;
        let fine = {};
        let fineValue = 0;
        let rain = {};
        let rainValue = 0;
        let highWinds = {};
        let highWindsValue = 0;
        let snow = {};
        let snowValue = 0;
        let rainHighWinds = {};
        let rainHighWindsValue = 0;
        let fog = {};
        let fogValue = 0;
        let snowHighWinds = {};
        let snowHighWindsValue = 0;
        let weather = [];
        for(let i = 0; i < barData.length; i++)
        {
          for(let j = 0; j < barData[i].data.length; j++)
          {
            if(barData[i].data[j].name == 'Fine')
              fineValue += parseInt(barData[i].data[j].value);
            if(barData[i].data[j].name == 'Rain')
              rainValue += parseInt(barData[i].data[j].value);
            if(barData[i].data[j].name == 'Snow')
              snowValue += parseInt(barData[i].data[j].value);
            if(barData[i].data[j].name == 'High winds')
              highWindsValue += parseInt(barData[i].data[j].value);
            if(barData[i].data[j].name == 'Rain & high winds')
              rainHighWindsValue += parseInt(barData[i].data[j].value);
            if(barData[i].data[j].name == 'Fog')
              fogValue += parseInt(barData[i].data[j].value);
            if(barData[i].data[j].name == 'Snow & high winds')
              snowHighWindsValue += parseInt(barData[i].data[j].value);
          }
        }
        fine = {
          name: 'Fine',
          value: fineValue
        };
        rain = {
          name: 'Rain',
          value: rainValue
        };
        snow = {
          name: 'Snow',
          value: snowValue
        };
        highWinds = {
          name: 'High winds',
          value: highWindsValue
        };
        rainHighWinds = {
          name: 'Rain & High winds',
          value: rainHighWindsValue
        };
        fog = {
          name: 'Fog',
          value: fogValue
        };
        snowHighWinds = {
          name: 'Snow & High winds',
          value: snowHighWindsValue
        };
        weather.push(fine);
        weather.push(rain);
        weather.push(snow);
        weather.push(highWinds);
        weather.push(rainHighWinds);
        weather.push(fog);
        weather.push(snowHighWinds);
        let pieOption = {
          title: {
            text: 'Weather condition statistic',
            subtext: 'Current month',
          },
          tooltip: {
            trigger: 'item'
          },
          xAxis: {
            type: 'category',
            data: ['Fine', 'Rain', 'Snow', 'High winds', 'High winds',
              "Rain & high winds", "Fog", 'Snow & high winds']
          },
          yAxis: {
            type: 'value'
          },
          series: [
            {
              name: 'Weather',
              type: 'bar',
              radius: '50%',
              data: weather,
              emphasis: {
                itemStyle: {
                  shadowBlur: 10,
                  shadowOffsetX: 0,
                  shadowColor: 'rgba(0, 0, 0, 0.5)',
                }
              },
              itemStyle: {
                normal: {
                  color: function(params)
                  {
                    let colorList = ['#fac858', '#91cc75', '#3eede7', '#2e4e7e',
                      '#8b4bbb', '#9d2933', '#56004f'];
                    return colorList[params.dataIndex]
                  }
                }
              }
            }
          ]
        };
        this.calendarRightBarTY.hideLoading();
        this.calendarRightBarTY.setOption(pieOption)
      }
      //alert("AAA")
      // radarLight.setOption(optionRadarLight);
    },
    // To load the right description, related to calendar type
    loadCalendarRightDescriptionTY()
    {
      let div = document.getElementById("calendarRightPanelDescriptionTY");
      if(this.selectModeInCalendarsTY == "Daily Accident")
      {
        this.calendarRightDescriptionLogoUrl = 'statis logo';
        div.innerHTML = '<span style="font-weight: bolder; font-size: 17px;">Daily accidents statistics<br></span>' +
          '<i class="el-icon-aim" style="font-size: 15px;margin-top: 15px"><span style="font-style: italic"> Daily visualization<br></span></i>' +
          '<i class="el-icon-circle-check" style="font-size: 15px;margin-top: 5px"><span style="font-style: italic"> Group: monthly & weeks</span></i>' +
          '<i class="el-icon-circle-check" style="font-size: 15px;margin-top: 5px"><span style="font-style: italic"> Color: deeper->more</span></i>' +
          '<i class="el-icon-circle-check" style="font-size: 15px;margin-top: 5px"><span style="font-style: italic"> Size: larger->more</span></i>' +
          '<i class="el-icon-circle-check" style="font-size: 15px;margin-top: 5px"><span style="font-style: italic"> Hover: show details</span></i>' +
          '<i class="el-icon-circle-check" style="font-size: 15px;margin-top: 5px"><span style="font-style: italic"> Heapmap: show degrees</span></i>' +
          '<i class="el-icon-circle-check" style="font-size: 15px;margin-top: 5px"><span style="font-style: italic"> Line&pie: overview</span></i>';
      }
      if(this.selectModeInCalendarsTY == "Light Condition")
      {
        this.calendarRightDescriptionLogoUrl = 'light logo';
        div.innerHTML = '<span style="font-weight: bolder; font-size: 17px;">Light conditions statistics<br></span>' +
          '<i class="el-icon-circle-check" style="font-size: 15px;margin-top: 5px"><span style="font-style: italic"> Group: three conditions</span></i>' +
          '<i class="el-icon-circle-check" style="font-size: 15px;margin-top: 5px"><span style="font-style: italic"> Daylight: in daytime</span></i>' +
          '<i class="el-icon-circle-check" style="font-size: 15px;margin-top: 5px"><span style="font-style: italic"> Weaklight: darkness time</span></i>' +
          '<i class="el-icon-circle-check" style="font-size: 15px;margin-top: 5px"><span style="font-style: italic"> Nolight: without light</span></i>' +
          '<i class="el-icon-circle-check" style="font-size: 15px;margin-top: 5px"><span style="font-style: italic"> Show the visualization of different light conditions, normally, people trends to go out in daytime, </span><span style="color: darkred"> so the number of daylight is larger.' +
          '</span></i>'

        ;
      }
      if(this.selectModeInCalendarsTY == "Road Surface")
      {
        this.calendarRightDescriptionLogoUrl = 'road logo';
        div.innerHTML = '<span style="font-weight: bolder; font-size: 17px;">Road conditions statistics<br></span>' +
          '<i class="el-icon-circle-check" style="font-size: 15px;margin-top: 5px"><span style="font-style: italic"> Colors: related to road condition level</span></i>' +
          '<i class="el-icon-circle-check" style="font-size: 15px;margin-top: 5px"><span style="font-style: italic"> Dry: normal condition</span></i>' +
          '<i class="el-icon-circle-check" style="font-size: 15px;margin-top: 5px"><span style="font-style: italic"> Damp: road is wet</span></i>' +
          '<i class="el-icon-circle-check" style="font-size: 15px;margin-top: 5px"><span style="font-style: italic"> Frost: ice on road</span></i>' +
          '<i class="el-icon-circle-check" style="font-size: 15px;margin-top: 5px"><span style="font-style: italic"> Snow: snow on road</span></i>' +
          '<i class="el-icon-circle-check" style="font-size: 15px;margin-top: 5px"><span style="font-style: italic"> Flood: flood over 3cm</span></i>' +
          '</span></i>'

        ;
      }
      if(this.selectModeInCalendarsTY == "Weather Condition")
      {
        this.calendarRightDescriptionLogoUrl = 'weather logo';
        div.innerHTML = '<span style="font-weight: bolder; font-size: 17px;">Weather conditions<br></span>' +
          '<i class="el-icon-sunny" style="font-size: 15px;margin-top: 5px"><span style="font-style: italic"> Fine: good weather</span></i>' +
          '<i class="el-icon-heavy-rain" style="font-size: 15px;margin-top: 2px"><span style="font-style: italic"> Rain: noraml rain</span></i>' +
          '<i class="el-icon-light-rain" style="font-size: 15px;margin-top: 2px"><span style="font-style: italic"> Snow: normal snow</span></i>' +
          '<i class="el-icon-wind-power" style="font-size: 15px;margin-top: 2px"><span style="font-style: italic"> Wind: high winds</span></i>' +
          '<i class="el-icon-heavy-rain" style="font-size: 15px;margin-top: 2px"> <i class="el-icon-wind-power"></i><span style="font-style: italic"> Rain&Winds: High winds with rain</span></i>' +
          '</span></i>' +
          '<i class="el-icon-cloudy" style="font-size: 15px;margin-top: 2px"><span style="font-style: italic"> Fog: mist / fog</span></i>' +
          '<i class="el-icon-light-rain" style="font-size: 15px;margin-top: 2px"> <i class="el-icon-wind-power"></i><span style="font-style: italic"> Snow&Winds: High winds with Snow</span></i>' +
          '</span></i>'
        ;
      }


    },
    TotalLineHeaderOptionXK() {
      this.overview = this.$echarts.init(document.getElementById("totalLineChartOverviewHeaderDIVXK"));
      this.overview.hideLoading();
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
          this.TotalLineOptionXK = {
            tooltip : {
              borderColor: '#1d5dc9', // 提示框浮层的边框颜色。
              borderWidth: 2, // 提示框浮层的边框宽
              backgroundColor: 'rgba(255,255,255,0.7)', // 提示框浮层的背景颜色。
              textStyle: { // 提示框浮层的文本样式。
                // color: '#fff',
                fontSize: 16,
                align:'left',
              },
              axisPointer: { // 坐标轴指示器配置项。
                type: 'shadow', // 'line' 直线指示器  'shadow' 阴影指示器  'none' 无指示器  'cross' 十字准星指示器。
                axis: 'auto', // 指示器的坐标轴。
                snap: true, // 坐标轴指示器是否自动吸附到点上
              },
              trigger: 'axis',
              formatter(params){
                return  '<span style="display:inline-block; border-radius:20px;width:12px;height:12px;background-color:#3699F1 ">'+'</span>'+'   '+ '<span style="color:#1d5dc9; fontSize: 26;">'+ params[0].axisValue+'</span>'+'<br>'+
                  " Total Num of Accident: "+
                  '<span style="color:darkred;">'+params[0].data.value+'</span>'+'<br>'+
                  "Total Num of Casualties: "+'<span style="color:darkred;">'+params[0].data.num+'</span>'+'<br>'+
                  "Three Accident Injury Level-- "+'<br>'+
                  "Fatal: "+'<span style="color:darkred;">'+params[0].data.fatal+'</span>'+'<br>'+
                  "Serious: "+'<span style="color:darkred;">'+params[0].data.serious+'</span><br>' +
                  "Slight: "+'<span style="color:darkred;">'+params[0].data.slight+'</span>'+'<br>';


              }
            },
            xAxis: [{
              type: 'category',
              data: ['2005','2006', '2007', '2008', '2009','2010', '2011','2012','2013','2014','2015'],
              splitLine: {
                show: true,
                lineStyle:{
                  color: ['#DDDDDD'],
                  width: 1,
                  type:'dashed',

                }
              },
              axisLine: {
                lineStyle: {
                  width: 2, // 粗细
                }
              },
              axisLabel: {
                textStyle: {
                  fontSize:15,

                }
              }

            }],

            yAxis: [{
              type: 'value',
              min:120000,
              axisLabel: {
                textStyle: {
                  fontSize:15,
                  lineStyle: {
                    type: 'solid',
                    width:'5'
                  },
                },
              },

            }],
            series: [
              {
                name:'蒸发量',
                type: 'line',
                smooth: true,

                lineStyle:{
                  width:3,
                },
                data: [{value: "198735",num:"271017",fatal:"2913",slight:"170793",serious:"25029"},
                  {value: "189161",num:"258404",fatal:"2926",slight:"161289",serious:"24946"},
                  {value: "182115",num:"247780",fatal:"2714",slight:"155079",serious:"24322"},
                  {value: "170591",num:"230905",fatal:"2314",slight:"145129",serious:"23121"},
                  {value: "163554",num:"222146",fatal:"2057",slight:"139500",serious:"21997"},
                  {value: "154414",num:"208648",fatal:"1731",slight:"132243",serious:"20440"},
                  {value: "151474",num:"203950",fatal:"1797",slight:"128691",serious:"20986"},
                  {value: "145571",num:"195723",fatal:"1637",slight:"123033",serious:"20901"},
                  {value: "138600",num:"183670",fatal:"1608",slight:"117428",serious:"19624"},
                  {value: "146322",num:"194477",fatal:"1658",slight:"123988",serious:"20676"},
                  {value: "140056",num:"186189",fatal:"1616",slight:"118402",serious:"20038"},

                ]
              },
            ]
          };

          this.overview.clear();
          this.overview.setOption(this.TotalLineOptionXK);
          // console.log(values);

        }
      });

      // option && overview.setOption(option);
    },
  },
  created()
  {
    // let urlAll = "http://localhost:8090/calendarData";
    //this.loadGeoMapData();
  },
  mounted () {
    this.TotalLineHeaderOptionXK()
    this.loadGeoMapData();
    this.drawDefaultCalendarTY();
    // this.loadRadarTY();
  },
  beforeRouteEnter(to, from, next) {
    document.querySelector('body').setAttribute('style','margin:0;padding:0')
    next();
  },

  beforeRouteLeave(to, from, next) {

    // 去除背景色

    document.querySelector('body').setAttribute('style','')

    next()

  }
}
</script>

<style scoped>
*{
  padding:0px;
  margin:0px;
  border:0px;
}
#headerImage{
  background: url("../assets/VisualizationImages/HeaderBackground.png") no-repeat;

  height: 100%;
  width: 100%;
  background-size: 100% 100%;

}
a{text-decoration:none}
</style>
