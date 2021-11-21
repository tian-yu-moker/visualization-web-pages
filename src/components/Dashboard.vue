<template>

  <div style="overflow-y:hidden;">

    <div id="headerImage" style="height:750px;">
      <br><br>

      <h1 style="font-size: 50px; color: whitesmoke">VISUALIZATION OF UK</h1>
      <br>
      <h1 style="font-size: 50px; color: whitesmoke">TRAFFIC ACCIDENTS</h1>
      <br><br>
      <h2 style="font-size: 35px; color: whitesmoke"><a href="https://echarts.apache.org/en/" style="font-size: 35px; color: whitesmoke">Build with Apache ECharts.js v5.2</a></h2>
      <div style="height:100px"></div>
      <el-row :gutter="15">
        <el-col :span="2">
          <div>&nbsp;</div>
        </el-col>
        <el-col :span="20">
          <el-row :gutter="12">
            <el-col :span="8">
              <el-card shadow="hover" style="height: 320px">
                <div style="font-weight: bold; font-size: 50px"><i class="el-icon-s-platform"></i></div>
                <div style="font-weight: bold; font-size: 30px; color: #696969">Interaction</div>
                <p style="text-align:justify; margin-top: 10px">Mainly based on Echarts & JavaScript,
                  users can interact with the charts as they want.
                  Users can explore the situation of traffic accidents each time period of each day of UK from 2005 to 2015.
                  Users can gradually explore more specific information and solve the doubts in the website.</p>
              </el-card>
            </el-col>
            <el-col :span="8">
              <el-card shadow="hover" style="height: 320px">
                <div style="font-weight: bold; font-size: 50px"><i class="el-icon-view"></i></div>
                <div style="font-weight: bold; font-size: 30px; color: #696969">Exploration</div>
                <p style="text-align:justify; margin-top: 10px">Some interesting slights are explored.
                  Combines different datasets with the traffic accidents, such as weather, light conditions, GDP, population and vehicle brands.
                  From data to pattern then to knowledge. Deep understanding on the dataset, useful information filtered.
                </p>
              </el-card>
            </el-col>
            <el-col :span="8">
              <el-card shadow="hover" style="height: 320px">
                <div style="font-weight: bold; font-size: 50px"><i class="el-icon-finished"></i></div>
                <div style="font-weight: bold; font-size: 30px; color: #696969">Completion</div>
                <p style="text-align:justify; margin-top: 10px">
                  Multi-category charts, such as map, pie, line, sun burst .etc.
                  Achieve data visualization with selected dataset, and show the multiple interesting insights.
                  Use abundant color, shape, type to label and to quantify different elements in various methods.
                </p>
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
          <el-card shadow="always" style="height: 660px">
            <el-row :gutter="3">
              <el-col :span="8"><el-image
                style="width: 100px; height: 60px"
                :src="require('../assets/VisualizationImages/UK Flag.png')"></el-image>
              </el-col>
              <el-col :span="16" align="left">
                <strong style="font-size: 24px">United Kingdom</strong>
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
              <i class="el-icon-monitor">
                <strong style="font-size: 16px;">
                  Over 500/D accidents happens!
                </strong></i>
              <div style="height: 3px"></div>
              <div>
                <i class="el-icon-warning" style="font-size: 100px; color: #E6A23C; margin-left: 30%"></i>
                <p style="margin-left: 15%; margin-top: 10px; font-weight: bold; font-size: 18px">Be careful on the road!</p>
              </div>

              <div style="height: 10px;"></div>
              <i class="el-icon-s-data">
                <strong style="font-size: 16px;">
                  <a href="https://www.gov.uk/" style="color: black"> Origin data from UK.GOV</a>
                </strong>
              </i>
              <div style="height: 3px"></div>
              <strong style="font-size: 13px">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Capture from dataworlds</strong>
              <div style="height: 10px;"></div>
              <i class="el-icon-s-data">
                <strong style="font-size: 16px;">
                  <a href="https://www.gov.uk/" style="color: black"> Dataset statistic</a>
                </strong>
              </i>
              <div id="datasetoverview" style="width: 100%; height: 250px"></div>
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
                  <i class="el-icon-pie-chart" style="margin-top: 5px; font-size: 13px; font-weight: bold">
                    Pie: multi-element comparison under calendar
                  </i>
                  <i class="el-icon-data-board" style="margin-top: 5px; font-size: 13px; font-weight: bold">
                    Rectangular Tree map: based on sorted data
                  </i>
                  <i class="el-icon-data-line" style="margin-top: 5px; font-size: 13px; font-weight: bold">
                    Line graphs matrices: changed in value over time
                  </i>
                  <i class="el-icon-timer" style="margin-top: 5px; font-size: 13px; font-weight: bold">
                    Dynamic charts: auto changing over time
                  </i>
                </el-col>
              </el-row>
            </el-col>
          </el-row>
        </el-card>
        <div style="height:10px"></div>
        <el-card>
          <el-row :gutter="5">
            <el-col :span="14">
              <div align="left"><i class="el-icon-s-marketing" style="font-size: 25px"><strong> Overview of traffic accidents over 11 years</strong></i></div>
            </el-col>
            <el-col :span="10">
              <el-switch
                style="display: block"
                v-model="overviewOrCondition"
                active-color="#13ce66"
                inactive-color="#3399ff"
                active-text="Bad Weather / Road Conditions"
                inactive-text="Overview"
                @change="overviewOrConditionsSelect"
              >
              </el-switch>
            </el-col>
          </el-row>
          <div id="totalLineChartOverviewHeaderDIVXK" style="margin-top: 5px;width: 100%;height:370px;"></div>
        </el-card>
      </el-col>
    </el-row>
    <div style="height:5px;"></div>
    <el-divider></el-divider>
    <div style="height:5px;"></div>
    <el-row :gutter="10">
      <el-col :span="2">&nbsp;&nbsp;&nbsp;</el-col>
      <el-col :span="20" align="left">
        <i class="el-icon-map-location" style="font-size: 20px; font-weight: bolder">
          <span> Map Visualization</span>
        </i>
      </el-col>
      <el-col :span="2">&nbsp;&nbsp;&nbsp;</el-col>
    </el-row>
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
              <el-col :span="5"><div id="cal_title"></div></el-col>
              <el-col :span="9" align="right">
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
                <el-col :span="4">&nbsp;</el-col>
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
    <div align="left">
      <el-row :gutter="10">
        <el-col :span="2">&nbsp;&nbsp;&nbsp;</el-col>
        <el-col :span="20">
          <i class="el-icon-help" style="font-size: 20px; font-weight: bolder">
            <span> Light, Road & Weather Visualization</span>
          </i>
        </el-col>
        <el-col :span="2">&nbsp;&nbsp;&nbsp;</el-col>
      </el-row>
      <el-row :gutter="10">
        <el-col :span="2">&nbsp;&nbsp;&nbsp;</el-col>
        <el-col :span="20">
          <el-card style="height: 330px">
            <el-row :gutter="3">
              <el-col :span="8" align="center">
                <div align="left"><i class="el-icon-moon-night" style="font-size: 15px">
                  <span style="font-weight: bold"> Light & Accidents Casualties (Per 1000 acc)</span></i>
                </div>
                <div id="radarLightCasualtyTY" style="width: 100%; height: 300px"></div>
              </el-col>
              <el-col :span="8">
                <div align="left"><i class="el-icon-place" style="font-size: 15px">
                  <span style="font-weight: bold"> Road & Accidents Casualties (per 1000 acc)</span></i>
                </div>
                <div id="roadCasualtyTY" style="width: 100%; height: 300px"></div>
              </el-col>
              <el-col :span="8">
                <div align="left"><i class="el-icon-partly-cloudy" style="font-size: 15px">
                  <span style="font-weight: bold"> Weather & Accidents Casualties (per 1000 acc)</span></i>
                </div>
                <div id="weatherCasualtyTY" style="width: 100%; height: 300px"></div>
              </el-col>
            </el-row>
          </el-card>
        </el-col>
        <el-col :span="2">&nbsp;&nbsp;&nbsp;</el-col>
      </el-row>
    </div>
    <div style="height:5px"></div>
    <el-divider></el-divider>
    <div style="height:5px"></div>
    <div align="left">
      <el-row :gutter="10">
        <el-col :span="2">&nbsp;&nbsp;&nbsp;</el-col>
        <el-col :span="20">
          <i class="el-icon-stopwatch" style="font-size: 20px; font-weight: bolder">
            <span> Dynamic Relations between GDP, Population & Accidents</span>
          </i>
        </el-col>
        <el-col :span="2">&nbsp;&nbsp;&nbsp;</el-col>
      </el-row>
      <el-row :gutter="10">
        <el-col :span="2">&nbsp;&nbsp;&nbsp;</el-col>
        <el-col :span="6">
          <el-card shadow="always" style="height: 600px">
            <div align="left"><i class="el-icon-s-finance" style="font-size: 15px"><span style="font-weight: bold"> GDP (pounds million)</span></i></div>

            <div id="GSWFourthImage" style="height: 260px"></div>
            <div align="left"><i class="el-icon-user-solid" style="font-size: 15px"><span style="font-weight: bold"> Population</span></i></div>

            <div id="GSWFifthImage" style="height: 270px"></div>
          </el-card>
        </el-col>
        <el-col :span="14">
          <el-card shadow="always" style="height:600px">
            <div align="left"><i class="el-icon-s-finance" style="font-size: 20px"><span style="font-weight: bold"> Relationship between GDP, Population & Accidents</span></i></div>
            <div id="GSWThirdImage" style="width: 800px;height:560px;"></div>
          </el-card>
        </el-col>
        <el-col :span="2">&nbsp;&nbsp;&nbsp;</el-col>
      </el-row>
    </div>

    <div style="height:5px"></div>
    <el-divider></el-divider>
    <div style="height:5px"></div>
    <div align="left">
      <el-row :gutter="10">
        <el-col :span="2">&nbsp;</el-col>
        <el-col :span="20"><i class="el-icon-s-data" style="font-size: 20px; font-weight: bolder"><span> Explosive Information</span></i></el-col>
        <el-col :span="2">&nbsp;</el-col>
      </el-row>
      <el-row :gutter="10">
        <el-col :span="2">&nbsp;</el-col>
        <el-col :span="10">
          <el-card shadow="always" style="height:1200px">
            <div align="left"><i class="el-icon-menu" style="font-size: 17px"><span style="font-weight: bold"> Accident frequency time during weeks</span></i></div>
            <div id="GSWFirstImage" style="width: 110%; height:700px;"></div>
            <el-row :gutter="3"><el-col :span=8 align="center"><el-image
              style="width: 100px; height: 100px"
              :src="require('../assets/VisualizationImages/logo5.png')"></el-image></el-col>
              <el-col :span=8 align="center"><div align="center"><i class="el-icon-user" style="font-size: 17px; margin-top: 10px"><span style="font-weight: bold"> Accident Difference<br><br>between<br><br>male and female</span></i></div>
              </el-col>
              <el-col :span=8 align="center"><el-image
                style="width: 100px; height: 100px"
                :src="require('../assets/VisualizationImages/logo6.png')"></el-image></el-col>
            </el-row>

            <div id="GSWSecondImage" style="width:100%;height:520px;"></div>
          </el-card>
        </el-col>
        <el-col :span="10">
          <el-card shadow="always" style="height:1200px">
            <el-row :gutter="20">
              <el-col :span="8">
                <el-select v-model="LineSelectedYearXK" :multiple="true" placeholder="Select two years" @change="LineHandleSelectYearXK" @visible-change="$forceUpdate()">
                  <el-option
                    v-for="item in yearListXK"
                    :key="item.value"
                    :label="item.value"
                    :value="item.value">
                  </el-option>
                </el-select>
              </el-col>
              <el-col :span="16" style="margin-top: 2px">
                <span style="font-weight: bold">DAILY TRAVEL PATTERNS BY MONTH</span><br>
                <span style="font-style: italic; margin-top: 1px">Two years comparision</span>
              </el-col>
            </el-row>
            <div id="LineOptionXK1" style="width: 120%;height:310px; top:40px;"></div>
            <div id="LineOptionXK2" style="width: 120%;height:310px; top:40px;"></div>
            <div id="LineOptionXK3" style="width: 120%;height:310px; top:40px;"></div>
            <div>
              <el-row>
                <el-col :span="2">&nbsp;</el-col>
                <el-col :span="12">
                  <i class="el-icon-question" style="font-weight: bold; font-size: 17px; margin-top: 70px"><span> How to read these charts?</span></i><br>
                  <span style="font-style: italic; font-size: 15px; margin-top: 5px; margin-bottom: 70px"> Different directions of cells<br>refer to different meanings</span>
                </el-col>
                <el-col :span="8" style="margin-top: 60px">
                  <el-image style="width: 250px; height: 100px;" :src="require('../assets/VisualizationImages/Number&time.png')"></el-image>
                </el-col>
                <el-col :span="2">&nbsp;</el-col>
              </el-row>
            </div>
          </el-card>
        </el-col>
        <el-col :span="2">&nbsp;</el-col>
      </el-row>
    </div>


    <div style="height:5px"></div>
    <el-divider></el-divider>
    <div style="height:5px"></div>
    <div align="left">
      <el-row :gutter="10">
        <el-col :span="2">&nbsp;</el-col>
        <el-col :span="20"><i class="el-icon-truck" style="font-size: 20px; font-weight: bolder"><span> Vehicle Information</span></i></el-col>
        <el-col :span="2">&nbsp;</el-col>
      </el-row>
      <el-row :gutter="10">
        <el-col :span="2">&nbsp;</el-col>
        <el-col :span="12">
          <el-card shadow="always">
            <el-row :gutter="20">
              <el-col :span="10">
                <el-select v-model="selectedYearCarBrandsTY" placeholder="Select a year" @change="selectionYearChangeCarBrandsTY">
                  <el-option
                    v-for="item in yearListCarBrandsTY"
                    :key="item.value"
                    :label="item.value"
                    :value="item.value">
                  </el-option>
                </el-select>
              </el-col>
              <el-col :span="14">
                <el-radio-group v-model="radioCarBrands" @change="treeOrSunDeciderCarBrandsTY">
                  <el-radio v-model="radioCarBrands" label="Treemap" border>Treemap</el-radio>
                  <el-radio v-model="radioCarBrands" label="Sunburst" border>Sunburst</el-radio>
                </el-radio-group>
              </el-col>
            </el-row>
            <div id="carBrandsTreemapContainer" style="width: 100%;height:400px; margin-top: 5px"></div>
          </el-card>
          <div style="height: 5px"></div>
          <el-divider></el-divider>
          <div style="height: 5px"></div>
          <i class="el-icon-rank" style="font-size: 20px; font-weight: bolder"><span> Top 5 Regions Statistics</span></i>
          <el-card>
            <i class="el-icon-data-line" style="font-size: 20px; font-weight: bolder"><span> Top 5 Regions Traffic Accidents over the Decade</span></i>
            <div id="TopLineOptionXK" style="width: 100%;height: 383px; "></div>
          </el-card>
        </el-col>
        <el-col :span="8">
          <el-card shadow="always">
            <i class="el-icon-odometer" style="font-weight: bold; font-size: 20px"><span> Sun Map of Vehicle Types</span></i>
            <div id="vehicleTypeSunbrustContainer" style="width: 100%; height:400px;"></div>
            <el-divider></el-divider>
            <i class="el-icon-pie-chart" style="font-weight: bold; font-size: 20px; margin-top: 5px"><span> Percentage of Each Vehicle Category</span></i>
            <div id="vehicleTypleContainer" style="width: 100%; height: 400px;"></div>
            <el-divider></el-divider>
            <div style="height: 5px"></div>
            <div>
              <i class="el-icon-warning" style="font-style: italic">
                <span> Among all categories, the "Car" takes up the highest rate.</span>
              </i>
              <i class="el-icon-warning" style="font-style: italic">
                <span> Among all brands, the "VAUXHALL" and "FORD" are more likely to meet a traffic accidents.</span>
              </i>
            </div>
          </el-card>
        </el-col>
        <el-col :span="2">&nbsp;</el-col>
      </el-row>
      <div style="height: 5px"></div>
      <el-divider></el-divider>
      <div style="height: 5px"></div>
      <el-row :gutter="10">
        <el-col :span="2">&nbsp;&nbsp;&nbsp;</el-col>
        <el-col :span="20">
          <i class="el-icon-price-tag" style="font-size: 20px; font-weight: bolder">
            <span> About Us</span>
          </i>
        </el-col>
        <el-col :span="2">&nbsp;&nbsp;&nbsp;</el-col>
      </el-row>

      <div>
        <el-row :gutter="10">
          <el-col :span="2">&nbsp;</el-col>
          <el-col :span="8">
            <el-card align="left" style="height: 270px">
              <i class="el-icon-coin" style="font-size: 20px; font-weight: bold">
                <span> GitHub Repository<br></span>
              </i>
              <el-divider></el-divider>
              <i class="el-icon-link" style="margin-top: 5px"> <span style="font-weight: bold"> Web Client <br></span>
                <a href="https://github.com/tian-yu-moker/visualization-web-pages"
                   style="text-align:justify; color: black">
                  https://github.com/tian-yu-moker/visualization-web-pages
                </a>
              </i>
              <br>
              <i class="el-icon-link" style="margin-top: 5px"> <span style="font-weight: bold"> API Server <br></span>
                <a href="https://github.com/shituweian/visualization_back_end"
                   style="text-align:justify; color: black">
                  https://github.com/shituweian/
                  visualization_back_end
                </a>
              </i>
              <br>
              <i class="el-icon-s-tools" style="margin-top: 5px"> <span style="font-weight: bold"> Developed  by<br></span>
                <el-row :gutter="2" style="margin-top: 5px">
                  <el-col :span="5" style="margin-top: 5px">
                    <el-image style="width: 80px; height: 80px;"
                              :src="require('../assets/VisualizationImages/spring.png')">
                    </el-image>
                  </el-col>
                  <el-col :span="6">
                    <el-image style="width: 80px; height: 80px;"
                              :src="require('../assets/VisualizationImages/vue.png')">
                    </el-image>
                  </el-col>
                  <el-col :span="5">
                    <el-image style="width: 80px; height: 80px;"
                              :src="require('../assets/VisualizationImages/echarts.png')">
                    </el-image>
                  </el-col>
                  <el-col :span="5">
                    <el-image style="width: 80px; height: 80px;"
                              :src="require('../assets/VisualizationImages/TABLEAU.png')">
                    </el-image>
                  </el-col>
                  <el-col :span="3">
                    <el-image style="width: 80px; height: 80px;"
                              :src="require('../assets/VisualizationImages/MYSQL.png')">
                    </el-image>
                  </el-col>
                </el-row>
              </i>
            </el-card>
          </el-col>
          <el-col :span="6">
            <el-card style="height: 270px">
              <i class="el-icon-document-copy" style="font-size: 20px; font-weight: bold">
                <span> Demo & Report<br></span>
              </i>
              <el-divider></el-divider>
              <div style="height: 5px"></div>
              <i class="el-icon-question" style="margin-top: 5px"> <span style="font-weight: bold"> Want to learn more?<br></span>
                <p style="text-align:justify; color: black"> Check the report & demo video online!</p>
              </i>
              <el-row :gutter="10">
                <el-col :span="2" style="margin-top: 5px">&nbsp;</el-col>
                <el-col :span="10" style="margin-top: 5px" align="center">
                  <el-button>View Report</el-button>
                  <el-image style="width: 80px; height: 80px;"
                            :src="require('../assets/VisualizationImages/Report.png')">
                  </el-image>
                </el-col>
                <el-col :span="10" style="margin-top: 5px" align="center">
                  <el-button>View Demo</el-button>
                  <el-image style="width: 80px; height: 80px;"
                            :src="require('../assets/VisualizationImages/Demo.png')">
                  </el-image>
                </el-col>
                <el-col :span="2" style="margin-top: 5px">&nbsp;</el-col>
              </el-row>
              <i class="el-icon-school" style="margin-top: 5px"> <span style="font-weight: bold"> Monitored by<br></span>
                <p style="text-align:justify; color: black"> COMP7507 Visualization and visual analytics @HKU</p>
              </i>
            </el-card>
          </el-col>
          <el-col :span="6">
            <el-card style="height: 270px">
              <i class="el-icon-document-copy" style="font-size: 20px; font-weight: bold">
                <span> Presented by Group 7<br></span>
              </i>
              <el-divider></el-divider>
              <div style="height: 5px"></div>
              <el-row :gutter="3" style="margin-top: 5px">
                <el-col :span="4">
                  <el-avatar
                    :src="require('../assets/VisualizationImages/TY.jpg')"></el-avatar>
                </el-col>
                <el-col :span="20">
                  <p style="font-weight: bold">Tian, Yu</p>
                  <a href="mailto:tianyu98@connect.hku.hk" style="font-size: 13px; color: black">Email: tianyu98@connect.hku.hk</a>
                </el-col>
              </el-row>
              <el-divider></el-divider>
              <el-row :gutter="3" style="margin-top: 5px">
                <el-col :span="4">
                  <el-avatar
                    :src="require('../assets/VisualizationImages/GSW.png')"></el-avatar>
                </el-col>
                <el-col :span="20">
                  <p style="font-weight: bold">Gao, Shiwei</p>
                  <a href="mailto:gshiwei@connect.hku.hk" style="font-size: 13px; color: black">Email: gshiwei@connect.hku.hk</a>
                </el-col>
              </el-row>
              <el-divider></el-divider>
              <el-row :gutter="3" style="margin-top: 5px">
                <el-col :span="4">
                  <el-avatar
                    :src="require('../assets/VisualizationImages/XK.png')"></el-avatar>
                </el-col>
                <el-col :span="20">
                  <p style="font-weight: bold">Xing, Ke</p>
                  <a href="mailto:u3591499@connect.hku.hk" style="font-size: 13px; color: black">Email: u3591499@connect.hku.hk</a>
                </el-col>
              </el-row>

              <i class="el-icon-s-comment" style="margin-top: 5px; font-weight: bold">
                <span> Contact Us <br></span>
              </i>
              <p> Your comments are welcome!</p>

            </el-card>
          </el-col>
          <el-col :span="2">&nbsp;</el-col>
        </el-row>
      </div>
    </div>
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
      overviewOrCondition: false,
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
      calendarRightDescriptionLogoUrl: "statis logo",
      carsBrandOverviewTY: [],
      carsYearlyDataTY: [],
      defaultAllYearDataCarsTY: [],
      overviewCarsBrandsTY: "",
      curCarBrandOptionTY: "",
      treeOrLineCarBrandsTY: 0,
      treeCarsBrandOptionTY: "",
      sunCarBrandOptionTY: "",
      barCarBrandOptionTY: "",
      radioCarBrands: 'Treemap',

      yearListCarBrandsTY: [
        {
          value: 2005
        },
        {
          value: 2006
        },
        {
          value: 2007
        },
        {
          value: 2008
        },
        {
          value: 2009
        },
        {
          value: 2010
        },
        {
          value: 2011
        },
        {
          value: 2012
        },
        {
          value: 2013
        },
        {
          value: 2014
        },
        {
          value: 2015
        }
      ],
      selectedYearCarBrandsTY: "",
      overviewLineChartGroupXK: "",
      yearListXK: [
        {
          value: 2005
        },
        {
          value: 2006
        },
        {
          value: 2007
        },
        {
          value: 2008
        },
        {
          value: 2009
        },
        {
          value: 2010
        },
        {
          value: 2011
        },
        {
          value: 2012
        },
        {
          value: 2013
        },
        {
          value: 2014
        },
        {
          value: 2015
        }
      ],
      LineSelectedYearXK: [],
      selectLimitedXK: 0,
      selectLimitedLineGroupsXK: 0,
      allYearTimesDataXK: [],
      vehicleTypeSunbrustData: [],
      vehicleTypeSunGraphTY: "",
      vehicleTypeSunGraphOptionTY: "",
      vehicleTypeCurDataTY: [],
      vehicleTypePieGraphTY: "",
      vehicleTypePieGraphOptionTY: ""
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
    overviewOrConditionsSelect()
    {
      this.overviewXK = this.$echarts.init(document.getElementById("totalLineChartOverviewHeaderDIVXK"));
      this.overviewXK.hideLoading();
      const formatUtil = echarts.format;
      if(this.overviewOrCondition)
      {
        this.TotalLineOptionXK = {
          tooltip : {
          },
          legend: {
            data: ['Bad Weathers', 'Bad Road Conditions', ]
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
            min: 10000,
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
              name:'Bad Weathers',
              type: 'line',
              smooth: true,
              lineStyle:{
                width:3,
              },
              data: [39757, 37941, 38239, 38078, 35028, 31018, 26694, 27443, 26376, 30828, 26107]
            },
            {
              name:'Bad Road Conditions',
              type: 'line',
              smooth: true,
              lineStyle:{
                width:2,
                type:'dashed',
              },
              data: [63218, 60129, 56767, 57085, 53271, 49939, 40829, 44303, 41526, 48504, 38701]
            },

          ]
        };
      }
      else
      {
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
                "Slight: "+'<span style="color:darkred;">'+params[0].data.slight+'</span>'+'<br>'+
                "Serious: "+'<span style="color:darkred;">'+params[0].data.serious+'</span>';

            }
          },
          legend: {
            data: ['Total Num of Accident', 'Total Num of Casualties', ]
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
            min:90000,
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
              name:'Total Num of Accident',
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
            {
              name:'Total Num of Casualties',
              type: 'line',
              smooth: true,
              lineStyle:{
                width:2,
                type:'dashed',
              },
              data: [271017,	258404,	247780,	230905,	222146,	208648,	203950,	195723,	183670,	194477,	186189]
            },

          ]
        };
      }

      this.overviewXK.clear();
      this.overviewXK.setOption(this.TotalLineOptionXK);

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
      if(year > 2015)
      {
        year = 2015;
        this.curMonCalendarTY = '2015-12'
        mon = 12;
        this.$notify({
          title: 'Warning',
          message: 'You can only choose date from 2005-01 to 2015-12',
          type: 'warning'
        });
      }
      if(year < 2005)
      {
        year = 2005;
        mon = 1;
        this.curMonCalendarTY = '2005-01'
        this.$notify({
          title: 'Warning',
          message: 'You can only choose date from 2005-01 to 2015-12',
          type: 'warning'
        });
      }

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
      let title = document.getElementById("cal_title");
      if(this.selectModeInCalendarsTY == "Daily Accident")
      {
        this.calendarRightDescriptionLogoUrl = 'statis logo';
        title.innerHTML = '<span style="font-weight: bolder; font-size: 13px;">Daily Accidents <br></span>'
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
        title.innerHTML = '<span style="font-weight: bolder; font-size: 12px;">Light Conditions <br></span>'
        div.innerHTML = '<span style="font-weight: bolder; font-size: 17px;">Light conditions statistics<br></span>' +
          '<i class="el-icon-circle-check" style="font-size: 15px;margin-top: 5px"><span style="font-style: italic"> Group: three conditions</span></i>' +
          '<i class="el-icon-circle-check" style="font-size: 15px;margin-top: 5px"><span style="font-style: italic"> Daylight: in daytime</span></i>' +
          '<i class="el-icon-circle-check" style="font-size: 15px;margin-top: 5px"><span style="font-style: italic"> Weaklight: darkness time</span></i>' +
          '<i class="el-icon-circle-check" style="font-size: 15px;margin-top: 5px"><span style="font-style: italic"> Nolight: without light</span></i>' +
          '<i class="el-icon-circle-check" style="font-size: 15px;margin-top: 5px"><span style="font-style: italic"> In winter months, the weak light and no light conditions take up larger rate than summer.</span></i>'

        ;
      }
      if(this.selectModeInCalendarsTY == "Road Surface")
      {
        this.calendarRightDescriptionLogoUrl = 'road logo';
        title.innerHTML = '<span style="font-weight: bolder; font-size: 13px;">Road Surface <br></span>'
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
        title.innerHTML = '<span style="font-weight: bolder; font-size: 13px;">Weather Condition<br></span>'
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
    datasetOverview()
    {
      let overviewData = this.$echarts.init(document.getElementById("datasetoverview"));

      let data = [2047256, 3262270, 46200, 3850];
      let bar = {
        tooltip: {
          trigger: 'item'
        },
        xAxis: {
          type: 'category',
          data: ['Accidents', 'Cars', 'GDP', 'Pop'],
          axisLabel: {
            fontSize: 9,
            fontFamily:'Microsoft YaHei',
            fontWeight:'bold'
          },
        },
        grid: {
          top: '5%'
        },
        yAxis: {
          type: 'value',
          axisLabel: {
            show: false
          }
        },
        series: [
          {
            name: 'Access From',
            type: 'bar',
            radius: '50%',
            data: data,
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
                  let colorList = ['#eacd76', '#87CEEB', '#21a675', '#2e4e7e'];
                  return colorList[params.dataIndex]
                }
              }
            }
          }
        ]
      };
      overviewData.setOption(bar);
    },

    drawRadarTY()
    {
      let lightCasualtyChart = echarts.init(document.getElementById('radarLightCasualtyTY'));
      let lightOptionCasualty;
      const lightCasualty = [
        {
          value: 1235,
          name: 'Daylight',
          title: {
            offsetCenter: ['0%', '-40%']
          },
          detail: {
            valueAnimation: true,
            offsetCenter: ['0%', '-25%']
          }
        },
        {
          value: 1351,
          name: 'Weak light',
          title: {
            offsetCenter: ['0%', '-10%']
          },
          detail: {
            valueAnimation: true,
            offsetCenter: ['0%', '5%']
          }
        },
        {
          value: 1537,
          name: 'No light',
          title: {
            offsetCenter: ['0%', '20%']
          },
          detail: {
            valueAnimation: true,
            offsetCenter: ['0%', '35%']
          }
        }
      ];
      lightOptionCasualty = {
        color: ['#ff8936', '#c89b40', '#003472'],
        tooltip: {
          formatter: '{b} : {c}/1000 acc'
        },
        series: [
          {
            type: 'gauge',
            startAngle: 90,
            min: 1100,
            max: 1600,
            endAngle: -270,
            pointer: {
              show: false
            },
            progress: {
              show: true,
              overlap: false,
              roundCap: true,
              clip: false,
              itemStyle: {
                borderWidth: 1,
                borderColor: '#464646'
              }
            },
            axisLine: {
              lineStyle: {
                width: 40
              }
            },
            splitLine: {
              show: false,
              distance: 0,
              length: 10
            },
            axisTick: {
              show: false
            },
            axisLabel: {
              show: false,
              distance: 50
            },
            data: lightCasualty,
            title: {
              fontSize: 10
            },
            detail: {
              width: 30,
              height: 10,
              fontSize: 10,
              color: 'auto',
              borderColor: 'auto',
              borderRadius: 30,
              borderWidth: 1,
              formatter: '{value}'
            }
          }
        ]
      };

      let roadCasualtyChart = echarts.init(document.getElementById('roadCasualtyTY'));
      let roadOptionCasualty;
      const roadCasualty = [
        {
          value: 1329,
          name: 'Dry',
          title: {
            offsetCenter: ['-30%', '-35%']
          },
          detail: {
            valueAnimation: true,
            offsetCenter: ['-30%', '-20%']
          }
        },
        {
          value: 1345,
          name: 'Damp',
          title: {
            offsetCenter: ['30%', '-35%']
          },
          detail: {
            valueAnimation: true,
            offsetCenter: ['30%', '-20%']
          }
        },
        {
          value: 1401,
          name: 'Frost',
          title: {
            offsetCenter: ['-30%', '-5%']
          },
          detail: {
            valueAnimation: true,
            offsetCenter: ['-30%', '10%']
          }
        },
        {
          value: 1358,
          name: 'Snow',
          title: {
            offsetCenter: ['30%', '-5%']
          },
          detail: {
            valueAnimation: true,
            offsetCenter: ['30%', '10%']
          }
        },
        {
          value: 1467,
          name: 'Flood',
          title: {
            offsetCenter: ['0%', '25%']
          },
          detail: {
            valueAnimation: true,
            offsetCenter: ['0%', '40%']
          }
        },
      ];
      roadOptionCasualty = {
        color: ['#eacd76', '#87CEEB', '#21a675', '#2e4e7e', '#9D2933'],
        tooltip: {
          formatter: '{b} : {c}/1000 acc'
        },
        series: [
          {
            type: 'gauge',
            startAngle: 90,
            min: 1100,
            max: 1500,
            endAngle: -270,
            pointer: {
              show: false
            },
            progress: {
              show: true,
              overlap: false,
              roundCap: true,
              clip: false,
              itemStyle: {
                borderWidth: 1,
                borderColor: '#464646'
              }
            },
            axisLine: {
              lineStyle: {
                width: 40
              }
            },
            splitLine: {
              show: false,
              distance: 0,
              length: 10
            },
            axisTick: {
              show: false
            },
            axisLabel: {
              show: false,
              distance: 50
            },
            data: roadCasualty,
            title: {
              fontSize: 10
            },
            detail: {
              width: 30,
              height: 8,
              fontSize: 10,
              color: 'auto',
              borderColor: 'auto',
              borderRadius: 35,
              borderWidth: 1,
              formatter: '{value}'
            }
          }
        ]
      };

      let weatherCasualtyChart = echarts.init(document.getElementById('weatherCasualtyTY'));
      let weatherOptionCasualty;
      const weatherCasualty = [
        {
          value: 1341,
          name: 'Fine',
          title: {
            offsetCenter: ['0%', '-55%']
          },
          detail: {
            valueAnimation: true,
            offsetCenter: ['0%', '-43%']
          }
        },
        {
          value: 1356,
          name: 'Rain',
          title: {
            offsetCenter: ['-30%', '-32%']
          },
          detail: {
            valueAnimation: true,
            offsetCenter: ['-30%', '-20%']
          }
        },
        {
          value: 1392,
          name: 'Snow',
          title: {
            offsetCenter: ['30%', '-32%']
          },
          detail: {
            valueAnimation: true,
            offsetCenter: ['30%', '-20%']
          }
        },
        {
          value: 1378,
          name: 'Winds',
          title: {
            offsetCenter: ['-30%', '-5%']
          },
          detail: {
            valueAnimation: true,
            offsetCenter: ['-30%', '10%']
          }
        },
        {
          value: 1395,
          name: 'Rain&winds',
          title: {
            offsetCenter: ['30%', '-5%']
          },
          detail: {
            valueAnimation: true,
            offsetCenter: ['30%', '10%']
          }
        },
        {
          value: 1444,
          name: 'Fog',
          title: {
            offsetCenter: ['-20%', '25%']
          },
          detail: {
            valueAnimation: true,
            offsetCenter: ['-20%', '40%']
          }
        },
        {
          value: 1432,
          name: 'Snow&winds',
          title: {
            offsetCenter: ['20%', '25%']
          },
          detail: {
            valueAnimation: true,
            offsetCenter: ['20%', '40%']
          }
        },
      ];
      weatherOptionCasualty = {
        color: ['#fac858', '#91cc75', '#3eede7', '#2e4e7e', '#8b4bbb', '#9d2933', '#56004f'],
        tooltip: {
          formatter: '{b} : {c}/1000 acc'
        },
        series: [
          {
            type: 'gauge',
            startAngle: 90,
            min: 1100,
            max: 1500,
            endAngle: -270,
            pointer: {
              show: false
            },
            progress: {
              show: true,
              overlap: false,
              roundCap: true,
              clip: false,
              itemStyle: {
                borderWidth: 1,
                borderColor: '#464646'
              }
            },
            axisLine: {
              lineStyle: {
                width: 40
              }
            },
            splitLine: {
              show: false,
              distance: 0,
              length: 10
            },
            axisTick: {
              show: false
            },
            axisLabel: {
              show: false,
              distance: 50
            },
            data: weatherCasualty,
            title: {
              fontSize: 8
            },
            detail: {
              width: 20,
              height: 8,
              fontSize: 8,
              color: 'auto',
              borderColor: 'auto',
              borderRadius: 35,
              borderWidth: 1,
              formatter: '{value}'
            }
          }
        ]
      };

      lightOptionCasualty && lightCasualtyChart.setOption(lightOptionCasualty);
      roadOptionCasualty && roadCasualtyChart.setOption(roadOptionCasualty);
      weatherOptionCasualty && weatherCasualtyChart.setOption(weatherOptionCasualty);
    },

    TotalLineHeaderOptionXK() {
      this.overviewXK = this.$echarts.init(document.getElementById("totalLineChartOverviewHeaderDIVXK"));
      this.overviewXK.hideLoading();
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
                  "Slight: "+'<span style="color:darkred;">'+params[0].data.slight+'</span>'+'<br>'+
                  "Serious: "+'<span style="color:darkred;">'+params[0].data.serious+'</span>';

              }
            },
            legend: {
              data: ['Total Num of Accident', 'Total Num of Casualties', ]
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
              min:90000,
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
                name:'Total Num of Accident',
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
              {
                name:'Total Num of Casualties',
                type: 'line',
                smooth: true,
                lineStyle:{
                  width:2,
                  type:'dashed',
                },
                data: [271017,	258404,	247780,	230905,	222146,	208648,	203950,	195723,	183670,	194477,	186189]
              },

            ]
          };

          this.overviewXK.clear();
          this.overviewXK.setOption(this.TotalLineOptionXK);
          // console.log(values);

        }
      });

      // option && overview.setOption(option);
    },
    GSWdrawGDPandPopulation() {
      let GSWThirdChart = document.getElementById('GSWThirdImage');
      let GSWThirdmyChart = echarts.init(GSWThirdChart);
      let GSWThirdOption;
      let GSWThirdUrl="http://localhost:8090/gdpAccident"

      GSWThirdmyChart.showLoading();
      axios.get(GSWThirdUrl).then(response=>
      {
        let GSWThirdData=response.data;
        // console.log(GSWThirdData);
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
    },
    drawVehicleBrandsTreemapTY() {
      this.overviewCarsBrandsTY = this.$echarts.init(document.getElementById("carBrandsTreemapContainer"));
      this.overviewCarsBrandsTY.hideLoading();
      const formatUtil = echarts.format;
      this.curCarBrandOptionTY = this.treeCarsBrandOptionTY;
      this.treeOrLineCarBrandsTY = 0;
      // this.overview.setOption(this.curBrandOption);
      let urlAll = "http://localhost:8090/cars/getAllCars";
      axios.get(urlAll).then(response =>
      {
        // If query is success
        if (response.status == 200)
        {
          //console.log(response.data[0])
          this.carsBrandOverviewTY = response.data[0];
          this.defaultAllYearDataCarsTY = response.data[0];
          this.carsYearlyDataTY = response.data[1];
          this.treeCarsBrandOptionTY = {
            title: {
              text: 'Vehicle Brand (Accident number > 3000 in 10 years)',
              left: '10%',
              top: '3%'
            },
            grid: {
              left: '2%'
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
                type: 'treemap',
                id: 'brands',
                animationDurationUpdate: 1000,
                roam: false,
                nodeClick: undefined,
                data: this.carsBrandOverviewTY,
                universalTransition: true,
                visibleMin: 2000,
                label: {
                  show: true
                },
                breadcrumb: {
                  show: false
                }
              }
            ]
          };
          this.sunCarBrandOptionTY = {
            title: {
              text: 'Vehicle Brand (Accident number > 3000 in 10 years)',
              left: 'center',
              top: '3%'
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
                type: 'sunburst',
                id: 'brands',
                radius: ['20%', '70%'],
                animationDurationUpdate: 1000,
                nodeClick: undefined,
                data: this.carsBrandOverviewTY,
                universalTransition: true,
                visibleMin: 2000,
                itemStyle: {
                  borderWidth: 1,
                  borderColor: 'rgba(255,255,255,.5)'
                },
                label: {
                  show: false
                }
              }
            ]};

          this.overviewCarsBrandsTY.setOption(this.treeCarsBrandOptionTY)
        }
      });
      this.overviewCarsBrandsTY.on('click', this.overviewClickCarBrandsTY);
      this.overviewCarsBrandsTY.getZr().on('click', this.returnTreemapCarBrandsTY)
      // option && overview.setOption(option);
    },
    treeOrSunDeciderCarBrandsTY()
    {
      this.overviewCarsBrandsTY.clear();
      if(this.radioCarBrands == "Treemap")
      {
        this.overviewCarsBrandsTY.setOption(this.treeCarsBrandOptionTY);
      }
      else if(this.radioCarBrands == "Sunburst")
      {
        this.overviewCarsBrandsTY.setOption(this.sunCarBrandOptionTY);
      }
    },
    returnTreemapCarBrandsTY(params)
    {
      if(this.treeOrLineCarBrandsTY == 1)
      {
        this.curCarBrandOptionTY = this.treeCarsBrandOptionTY;
        this.treeOrLineCarBrandsTY = 0;
        this.overviewCarsBrandsTY.clear();
        this.overviewCarsBrandsTY.setOption(this.curCarBrandOptionTY);
        this.overviewCarsBrandsTY.setOption({
          series: [
            {
              data: this.carsBrandOverviewTY
            }
          ]
        })
      }
    },
    overviewClickCarBrandsTY(params)
    {
      // alert(this.carsYearlyData.length);
      if(this.treeOrLineCarBrandsTY == 0)
      {
        this.treeOrLineCarBrandsTY = 1;
        let brand = params.name;
        let curYear = 0;
        let lineData = [];
        for(let i = 0; i < this.carsYearlyDataTY.length; i++)
        {
          if(this.carsYearlyDataTY[i].name == brand)
          {
            lineData.push(this.carsYearlyDataTY[i].value);
            if(this.carsYearlyDataTY[i].year == 2016)
              break;
          }
        }
        let lineOption = {
          title: {
            text: 'The statistics of the ' + brand + ' cars accidents in the decade.',
            left: 'center'
          },
          xAxis: {
            type: 'category',
            data: ['2005', '2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015']
          },
          yAxis: {
            type: 'value'
          },
          tooltip: {},
          series: [
            {
              data: lineData,
              type: 'line',
              smooth: true,
              id: 'brands',
              universalTransition: true,
              animationDurationUpdate: 1000
            }
          ]
        };
        this.overviewCarsBrandsTY.clear();
        this.curCarBrandOptionTY = lineOption;
        this.overviewCarsBrandsTY.setOption(this.curCarBrandOptionTY);
      }
    },
    selectionYearChangeCarBrandsTY(val)
    {
      let selected = [];
      let curVal = 0;
      for(let i = 0; i < this.carsYearlyDataTY.length; i++)
      {

        if(parseInt(this.selectedYearCarBrandsTY) == parseInt(this.carsYearlyDataTY[i].year))
        {
          let one = {
            "label": this.carsYearlyDataTY[i].name,
            "value": this.carsYearlyDataTY[i].value
          }
          selected.push(one);
        }
      }
      selected.sort(function (a,b)
      {
        return b.value - a.value;
      });
      let labels = [];
      let values = [];
      let count = 0;
      let others = 0
      for(let i = 0; i < selected.length; i++)
      {
        count += 1;
        if(count <= 10)
        {
          labels.push(selected[i].label.toString());
          values.push(selected[i].value);
        }
      }
      const formatUtil = echarts.format;
      this.barCarBrandOptionTY = {
        title: {
          text: 'The top 10 crash car brand in ' + this.selectedYearCarBrandsTY,
          left: '10%',
          top: '3%'
        },
        xAxis: {
          type: 'category',
          data: labels
        },
        yAxis: {
          type: 'value'
        },
        tooltip: {
          formatter: function (info)
          {
            let value = info.value;
            let name = info.name;
            return [
              '<div class="tooltip-title" id="tooltips">' +
              formatUtil.encodeHTML('Brand: ' + name) +
              '</div>',
              'Accident Count in the year: ' + value
            ].join('');
          }
        },
        series: [
          {
            data: values,
            type: 'bar',
            showBackground: true,
            backgroundStyle: {
              color: 'rgba(180, 180, 180, 0.2)'
            },
            itemStyle: {
              normal:{
                color: function(param)
                {
                  let colorArray = [
                    '#5470c6', '#91cc75', '#fac858', '#ee6666', '#73c0de',
                    '#3ba272', '#fc8452', '#9a60b4', '#ea7ccc',
                    '#9BCA63'
                  ];
                  return colorArray[param.dataIndex];
                }
              }
            }
          }
        ]
      }
      this.overviewCarsBrandsTY.clear();
      this.curCarBrandOptionTY = this.barCarBrandOptionTY;
      this.overviewCarsBrandsTY.setOption(this.curCarBrandOptionTY);
      //console.log(values);
    },
    GSWDrawCalendar(){

      let GSWFirstChart = document.getElementById('GSWFirstImage');
      let GSWFirstMyChart = echarts.init(GSWFirstChart);
      let GSWFirstOption;

// prettier-ignore
      const GSWHours = [
        '22-24 p.m.', '20-22 p.m.', '18-20 p.m.', '16-18 p.m.', '14-16 p.m.', '12-14 p.m.', '10-12 a.m.',
        '8-10 a.m.', '6-8 a.m.', '4-6 a.m.', '2-4 a.m.', '0-2 a.m.'
      ];
// prettier-ignore
      const GSWdays = [
        'Mon.', 'Tues.', 'Wed.',
        'Thur.', 'Fri.', 'Sat.', 'Sun.'
      ];
// prettier-ignore
      let GSWintvalue=[];
      let GSWFirstUrl="http://localhost:8090/dayandtime";
      axios.get(GSWFirstUrl).then(response=>
      {
        var x=0,y=11;
        for(var i=0;i<response.data.length;i++)
        {
          GSWintvalue.push([parseInt(y),parseInt(x),parseInt(response.data[i].value)]);
          y--;
          if(y==-1){
            y=11;
            x++;
          }
        }

        let values=[];
        for(let i=0;i<GSWintvalue.length;i++){
          values.push(GSWintvalue[i])
        };
        const GSWFirstdata =
          GSWintvalue
            .map(function (item) {
              return [item[1], item[0], item[2] || '-'];
            });
        GSWFirstOption = {
          tooltip: {
            position: 'top'
          },
          grid: {
            height: '80%',
            top: '3.5%',
            left:"12%",
          },
          xAxis: {
            type: 'category',
            data: GSWdays,
            axisLabel:{
              fontSize:12,
              fontFamily:'Microsoft YaHei',
              fontWeight:'bold'
            },
            splitArea: {
              show: true,
              fontSize:35,
            }
          },
          yAxis: {
            type: 'category',
            data: GSWHours,
            axisLabel:{
              fontSize:12,
              fontFamily:'Microsoft YaHei',
              fontWeight:'bold'
            },
            splitArea: {
              show: true
            }
          },
          visualMap: {
            min: 2000,
            max: 58000,
            calculable: true,
            orient: 'horizontal',
            left: 'center',
            bottom: '4%',
            textStyle:{
              fontSize:12,
              fontFamily:'Microsoft YaHei',
              fontWeight:'bold'
            }
          },
          series: [
            {
              name: 'Punch Card',
              type: 'heatmap',
              data: GSWFirstdata,
              label: {
                show: true,
                fontSize:12,
                fontFamily:'Microsoft YaHei',
                fontWeight:'bold'
              },
              emphasis: {
                itemStyle: {
                  shadowBlur: 10,
                  shadowColor: 'rgba(0, 0, 0, 0.5)',
                  fontSize:10,
                }
              }

            }
          ]
        };

        GSWFirstOption && GSWFirstMyChart.setOption(GSWFirstOption);

      });
    },
    LineOptionXK1() {
      this.LineOverviewXK = this.$echarts.init(document.getElementById("LineOptionXK1"));
      this.LineOverviewXK.hideLoading();
      const formatUtil = echarts.format;

      // this.overview.setOption(this.curBrandOption);
      let urlAll = "http://localhost:8090/Acc/getDailyAcc";
      axios.get(urlAll).then(response =>
      {
        //If query is success
        if (response.status == 200)
        {
          //console.log(response.data[0])
          this.allYearTimesDataXK = response.data;
          this.accident_daily_XK = response.data[0];
          const formatUtil = echarts.format;
          this.LineOptionXK_1 = {
            title: [
              {
                text: 'January of 2005',
                left:'1%',
                textStyle: {
                  fontSize: 15,
                }
              },
              {
                text: 'February of 2005',
                left: '44%',
                textStyle: {
                  fontSize: 15,
                }
              },
              {
                text: 'March of 2005',
                top: '50%',
                left:'1%',
                textStyle: {
                  fontSize: 15,
                }
              },
              {
                text: 'April of 2005',
                top: '50%',
                left: '44%',
                textStyle: {
                  fontSize: 15,
                }
              },
            ],
            grid: [
              {
                left: '6%', top: '11%', width: '34%', height: '29%'
              },
              {
                right: '16%', top: '11%', width:'34%', height: '29%'
              },
              {
                left: '6%', bottom: '11%', width: '34%', height: '29%'
              },
              {
                right: '16%', bottom: '11%', width: '34%', height: '29%'
              }

            ],

            tooltip: {
              formatter: function (info)
              {
                let value = info.value;
                let name = info.name;
                if(name=="zero_to_two"){
                  return '0:00 - 2:00'+'<br>'+ 'Daily Accident number: ' + value
                }
                if(name=="two_to_four"){
                  return '2:00 - 4:00'+'<br>'+ 'Daily Accident number: ' + value
                }
                if(name== "four_to_six"){
                  return '4:00 - 6:00'+'<br>'+ 'Daily Accident number: ' + value
                }
                if(name=="six_to_eight"){
                  return '6:00 - 8:00'+'<br>'+ 'Daily Accident number: ' + value
                }
                if(name=="eight_to_ten"){
                  return '8:00 - 10:00'+'<br>'+ 'Daily Accident number: ' + value
                }
                if(name=="ten_to_twelve"){
                  return '10:00 - 12:00'+'<br>'+ 'Daily Accident number: ' + value
                }
                if(name=="twelve_to_fourteen"){
                  return '12:00 - 14:00'+'<br>'+ 'Daily Accident number: ' + value
                }
                if(name=="fourteen_to_sixteen"){
                  return '14:00 - 16:00'+'<br>'+ 'Daily Accident number: ' + value
                }
                if(name=="sixteen_to_eighteen"){
                  return '16:00 - 18:00'+'<br>'+ 'Daily Accident number: ' + value
                }
                if(name=="eighteen_to_twenty"){
                  return '18:00 - 20:00'+'<br>'+ 'Daily Accident number: ' + value
                }
                if(name=="twenty_to_twentytwo"){
                  return '20:00 - 22:00'+'<br>'+ 'Daily Accident number: ' + value
                }
                if(name=="twentytwo_to_twentyfour"){
                  return '22:00 - 24:00'+'<br>'+ 'Daily Accident number: ' + value
                }

              }
            },
            xAxis: [
              {
                data:[2,4,6,8,10,12,14,16,18,20,22,24],
                gridIndex: 0,
                boundaryGap: true,
                splitLine: {
                  show: true,
                  lineStyle:{
                    color: ['#DDDDDD'],
                    width: 1,
                  }
                },
              },
              {
                data:[2,4,6,8,10,12,14,16,18,20,22,24],
                gridIndex: 1,
                boundaryGap: true,
                splitLine: {
                  show: true,
                  lineStyle:{
                    color: ['#DDDDDD'],
                    width: 1,
                  }
                },
              },
              {
                data:[2,4,6,8,10,12,14,16,18,20,22,24],
                gridIndex: 2,
                boundaryGap: true,
                splitLine: {
                  show: true,
                  lineStyle:{
                    color: ['#DDDDDD'],
                    width: 1,
                  }
                },
              },
              {
                data:[2,4,6,8,10,12,14,16,18,20,22,24],
                gridIndex: 3,
                boundaryGap: true,
                splitLine: {
                  show: true,
                  lineStyle:{
                    color: ['#DDDDDD'],
                    width: 1,
                  }
                },
              },
            ],
            yAxis: [
              {
                type:'value',
                gridIndex:0,
                splitLine:{
                  show:true,
                  lineStyle:{
                    color: ['#DDDDDD'],
                    width: 1,

                  }
                }
              },
              {
                type:'value',
                gridIndex:1,
                splitLine:{
                  show:true,
                  lineStyle:{
                    color: ['#DDDDDD'],
                    width: 1,

                  }
                }
              },
              {
                type:'value',
                gridIndex:2,
                splitLine:{
                  show:true,
                  lineStyle:{
                    color: ['#DDDDDD'],
                    width: 1,

                  }
                }
              },
              {
                type:'value',
                gridIndex:3,
                splitLine:{
                  show:true,
                  lineStyle:{
                    color: ['#DDDDDD'],
                    width: 1,

                  }
                }
              },
            ],
            series: [
              {
                name: 'I-5',
                type: 'line',
                xAxisIndex: 0,
                yAxisIndex: 0,
                data: this.accident_daily_XK[0],
                smooth: true,

                symbol: 'circle',
                color : '#A8CD74'

              },

              {
                name: 'II',
                type: 'line',
                xAxisIndex: 1,
                yAxisIndex: 1,
                data: this.accident_daily_XK[1],
                smooth: true,

                symbol: 'circle',
                color : '#A8CD74'

              },
              {
                name: 'III',
                type: 'line',
                xAxisIndex: 2,
                yAxisIndex: 2,
                data: this.accident_daily_XK[2],
                smooth: true,

                symbol: 'circle',
                color : '#A8CD74'
              },
              {
                name: 'IV',
                type: 'line',
                xAxisIndex: 3,
                yAxisIndex: 3,
                data: this.accident_daily_XK[3],
                smooth: true,

                symbol: 'circle',
                color : '#A8CD74'
              },

            ]
          };

          this.LineOverviewXK.clear();
          this.LineOverviewXK.setOption(this.LineOptionXK_1);
          // console.log(values);

        }
      });

    },

    LineOptionXK2() {
      this.LineOverviewXK2= this.$echarts.init(document.getElementById("LineOptionXK2"));
      this.LineOverviewXK2.hideLoading();
      const formatUtil = echarts.format;
      // this.overview.setOption(this.curBrandOption);
      let urlAll = "http://localhost:8090/Acc/getDailyAcc";
      axios.get(urlAll).then(response =>
      {
        //If query is success
        if (response.status == 200)
        {
          //console.log(response.data[0])
          this.allYearTimesDataXK = response.data;
          this.accident_daily_XK=response.data[0];

          const formatUtil = echarts.format;
          this.LineOptionXK_2 = {
            title: [
              {
                text: 'May of 2005',
                left:'1%',
                textStyle: {
                  fontSize: 15,
                }
              },
              {
                text: 'June of 2005',
                left: '44%',
                textStyle: {
                  fontSize: 15,
                }
              },
              {
                text: 'July of 2005',
                top: '50%',
                left:'1%',
                textStyle: {
                  fontSize: 15,
                }
              },
              {
                text: 'August of 2005',
                top: '50%',
                left: '44%',
                textStyle: {
                  fontSize: 15,
                }
              },
            ],
            grid: [
              {
                left: '6%', top: '11%', width: '34%', height: '29%'
              },
              {
                right: '16%', top: '11%', width:'34%', height: '29%'
              },
              {
                left: '6%', bottom: '11%', width: '34%', height: '29%'
              },
              {
                right: '16%', bottom: '11%', width: '34%', height: '29%'
              }

            ],


            tooltip: {
              formatter: function (info)
              {
                let value = info.value;
                let name = info.name;
                if(name=="zero_to_two"){
                  return '0:00 - 2:00'+'<br>'+ 'Daily Accident number: ' + value
                }
                if(name=="two_to_four"){
                  return '2:00 - 4:00'+'<br>'+ 'Daily Accident number: ' + value
                }
                if(name== "four_to_six"){
                  return '4:00 - 6:00'+'<br>'+ 'Daily Accident number: ' + value
                }
                if(name=="six_to_eight"){
                  return '6:00 - 8:00'+'<br>'+ 'Daily Accident number: ' + value
                }
                if(name=="eight_to_ten"){
                  return '8:00 - 10:00'+'<br>'+ 'Daily Accident number: ' + value
                }
                if(name=="ten_to_twelve"){
                  return '10:00 - 12:00'+'<br>'+ 'Daily Accident number: ' + value
                }
                if(name=="twelve_to_fourteen"){
                  return '12:00 - 14:00'+'<br>'+ 'Daily Accident number: ' + value
                }
                if(name=="fourteen_to_sixteen"){
                  return '14:00 - 16:00'+'<br>'+ 'Daily Accident number: ' + value
                }
                if(name=="sixteen_to_eighteen"){
                  return '16:00 - 18:00'+'<br>'+ 'Daily Accident number: ' + value
                }
                if(name=="eighteen_to_twenty"){
                  return '18:00 - 20:00'+'<br>'+ 'Daily Accident number: ' + value
                }
                if(name=="twenty_to_twentytwo"){
                  return '20:00 - 22:00'+'<br>'+ 'Daily Accident number: ' + value
                }
                if(name=="twentytwo_to_twentyfour"){
                  return '22:00 - 24:00'+'<br>'+ 'Daily Accident number: ' + value
                }

              }
            },
            xAxis: [
              {
                data:[2,4,6,8,10,12,14,16,18,20,22,24],
                gridIndex: 0,
                boundaryGap: true,
                splitLine: {
                  show: true,
                  lineStyle:{
                    color: ['#DDDDDD'],
                    width: 1,
                  }
                },
              },
              {
                data:[2,4,6,8,10,12,14,16,18,20,22,24],
                gridIndex: 1,
                boundaryGap: true,
                splitLine: {
                  show: true,
                  lineStyle:{
                    color: ['#DDDDDD'],
                    width: 1,
                  }
                },
              },
              {
                data:[2,4,6,8,10,12,14,16,18,20,22,24],
                gridIndex: 2,
                boundaryGap: true,
                splitLine: {
                  show: true,
                  lineStyle:{
                    color: ['#DDDDDD'],
                    width: 1,
                  }
                },
              },
              {
                data:[2,4,6,8,10,12,14,16,18,20,22,24],
                gridIndex: 3,
                boundaryGap: true,
                splitLine: {
                  show: true,
                  lineStyle:{
                    color: ['#DDDDDD'],
                    width: 1,
                  }
                },
              },
            ],
            yAxis: [
              {
                type:'value',
                gridIndex:0,
                splitLine:{
                  show:true,
                  lineStyle:{
                    color: ['#DDDDDD'],
                    width: 1,

                  }
                }
              },
              {
                type:'value',
                gridIndex:1,
                splitLine:{
                  show:true,
                  lineStyle:{
                    color: ['#DDDDDD'],
                    width: 1,

                  }
                }
              },
              {
                type:'value',
                gridIndex:2,
                splitLine:{
                  show:true,
                  lineStyle:{
                    color: ['#DDDDDD'],
                    width: 1,

                  }
                }
              },
              {
                type:'value',
                gridIndex:3,
                splitLine:{
                  show:true,
                  lineStyle:{
                    color: ['#DDDDDD'],
                    width: 1,

                  }
                }
              },
            ],
            series: [
              {
                name: 'I-5',
                type: 'line',
                xAxisIndex: 0,
                yAxisIndex: 0,
                data: this.accident_daily_XK[4],
                smooth: true,

                symbol: 'circle',
                color : '#FFD047'
              },

              {
                name: 'II',
                type: 'line',
                xAxisIndex: 1,
                yAxisIndex: 1,
                data: this.accident_daily_XK[5],
                smooth: true,

                symbol: 'circle',
                color : '#FFD047'
              },
              {
                name: 'III',
                type: 'line',
                xAxisIndex: 2,
                yAxisIndex: 2,
                data: this.accident_daily_XK[6],
                smooth: true,

                symbol: 'circle',
                color : '#FFD047'
              },
              {
                name: 'IV',
                type: 'line',
                xAxisIndex: 3,
                yAxisIndex: 3,
                data: this.accident_daily_XK[7],
                smooth: true,

                symbol: 'circle',
                color : '#FFD047'
              },

            ]
          };
          this.LineOverviewXK2.clear();
          this.LineOverviewXK2.setOption(this.LineOptionXK_2);
          // console.log(values);

        }
      });

      // option && overview.setOption(option);
    },

    LineOptionXK3() {
      this.LineOverviewXK3 = this.$echarts.init(document.getElementById("LineOptionXK3"));
      this.LineOverviewXK3.hideLoading();
      const formatUtil = echarts.format;

      // this.overview.setOption(this.curBrandOption);
      let urlAll = "http://localhost:8090/Acc/getDailyAcc";
      axios.get(urlAll).then(response =>
      {
        //If query is success
        if (response.status == 200)
        {
          //console.log(response.data[0])
          this.allYearTimesDataXK = response.data;

          this.accident_daily_XK=response.data[0];

          const formatUtil = echarts.format;
          this.LineOptionXK_3 = {
            title: [
              {
                text: 'September of 2005',
                left:'1%',
                textStyle: {
                  fontSize: 15,
                }
              },
              {
                text: 'October of 2005',
                left: '44%',
                textStyle: {
                  fontSize: 15,
                }
              },
              {
                text: 'November of 2005',
                top: '50%',
                left:'1%',
                textStyle: {
                  fontSize: 15,
                }
              },
              {
                text: 'December of 2005',
                top: '50%',
                left: '44%',
                textStyle: {
                  fontSize: 15,
                }
              },
            ],
            grid: [
              {
                left: '6%', top: '11%', width: '34%', height: '29%'
              },
              {
                right: '16%', top: '11%', width:'34%', height: '29%'
              },
              {
                left: '6%', bottom: '11%', width: '34%', height: '29%'
              },
              {
                right: '16%', bottom: '11%', width: '34%', height: '29%'
              }

            ],

            tooltip: {
              formatter: function (info)
              {
                let value = info.value;
                let name = info.name;
                if(name=="zero_to_two"){
                  return '0:00 - 2:00'+'<br>'+ 'Daily Accident number: ' + value
                }
                if(name=="two_to_four"){
                  return '2:00 - 4:00'+'<br>'+ 'Daily Accident number: ' + value
                }
                if(name== "four_to_six"){
                  return '4:00 - 6:00'+'<br>'+ 'Daily Accident number: ' + value
                }
                if(name=="six_to_eight"){
                  return '6:00 - 8:00'+'<br>'+ 'Daily Accident number: ' + value
                }
                if(name=="eight_to_ten"){
                  return '8:00 - 10:00'+'<br>'+ 'Daily Accident number: ' + value
                }
                if(name=="ten_to_twelve"){
                  return '10:00 - 12:00'+'<br>'+ 'Daily Accident number: ' + value
                }
                if(name=="twelve_to_fourteen"){
                  return '12:00 - 14:00'+'<br>'+ 'Daily Accident number: ' + value
                }
                if(name=="fourteen_to_sixteen"){
                  return '14:00 - 16:00'+'<br>'+ 'Daily Accident number: ' + value
                }
                if(name=="sixteen_to_eighteen"){
                  return '16:00 - 18:00'+'<br>'+ 'Daily Accident number: ' + value
                }
                if(name=="eighteen_to_twenty"){
                  return '18:00 - 20:00'+'<br>'+ 'Daily Accident number: ' + value
                }
                if(name=="twenty_to_twentytwo"){
                  return '20:00 - 22:00'+'<br>'+ 'Daily Accident number: ' + value
                }
                if(name=="twentytwo_to_twentyfour"){
                  return '22:00 - 24:00'+'<br>'+ 'Daily Accident number: ' + value
                }

              }
            },
            xAxis: [
              {
                data:[2,4,6,8,10,12,14,16,18,20,22,24],
                gridIndex: 0,
                boundaryGap: true,
                splitLine: {
                  show: true,
                  lineStyle:{
                    color: ['#DDDDDD'],
                    width: 1,
                  }
                },
              },
              {
                data:[2,4,6,8,10,12,14,16,18,20,22,24],
                gridIndex: 1,
                boundaryGap: true,
                splitLine: {
                  show: true,
                  lineStyle:{
                    color: ['#DDDDDD'],
                    width: 1,
                  }
                },
              },
              {
                data:[2,4,6,8,10,12,14,16,18,20,22,24],
                gridIndex: 2,
                boundaryGap: true,
                splitLine: {
                  show: true,
                  lineStyle:{
                    color: ['#DDDDDD'],
                    width: 1,
                  }
                },
              },
              {
                data:[2,4,6,8,10,12,14,16,18,20,22,24],
                gridIndex: 3,
                boundaryGap: true,
                splitLine: {
                  show: true,
                  lineStyle:{
                    color: ['#DDDDDD'],
                    width: 1,
                  }
                },
              },
            ],
            yAxis: [
              {
                type:'value',
                gridIndex:0,
                splitLine:{
                  show:true,
                  lineStyle:{
                    color: ['#DDDDDD'],
                    width: 1,

                  }
                }
              },
              {
                type:'value',
                gridIndex:1,
                splitLine:{
                  show:true,
                  lineStyle:{
                    color: ['#DDDDDD'],
                    width: 1,

                  }
                }
              },
              {
                type:'value',
                gridIndex:2,
                splitLine:{
                  show:true,
                  lineStyle:{
                    color: ['#DDDDDD'],
                    width: 1,

                  }
                }
              },
              {
                type:'value',
                gridIndex:3,
                splitLine:{
                  show:true,
                  lineStyle:{
                    color: ['#DDDDDD'],
                    width: 1,

                  }
                }
              },
            ],
            series: [
              {
                name: 'I-5',
                type: 'line',
                xAxisIndex: 0,
                yAxisIndex: 0,
                data: this.accident_daily_XK[8],
                smooth: true,

                symbol: 'circle',
                color : '#65CBFF'
              },

              {
                name: 'II',
                type: 'line',
                xAxisIndex: 1,
                yAxisIndex: 1,
                data: this.accident_daily_XK[9],
                smooth: true,

                symbol: 'circle',
                color : '#65CBFF'
              },
              {
                name: 'III',
                type: 'line',
                xAxisIndex: 2,
                yAxisIndex: 2,
                data: this.accident_daily_XK[10],
                smooth: true,

                symbol: 'circle',
                color : '#65CBFF'
              },
              {
                name: 'IV',
                type: 'line',
                xAxisIndex: 3,
                yAxisIndex: 3,
                data: this.accident_daily_XK[11],
                smooth: true,

                symbol: 'circle',
                color : '#65CBFF'
              },

            ]
          };
          this.LineOverviewXK3.clear();
          this.LineOverviewXK3.setOption(this.LineOptionXK_3);
          // console.log(values);

        }
      });
      this.LineOverviewXK3.on('click', this.overviewClick);
      this.LineOverviewXK3.getZr().on('click', this.returnTreemap)
      // option && overview.setOption(option);
    },

    LineHandleSelectYearXK(val)
    {
      this.selectLimitedXK == this.LineSelectedYearXK.length;

      // console.log(this.LineSelectedYearXK.length)
      if(this.LineSelectedYearXK.length == 2)
      {
        //console.log(this.LineSelectedYearXK[0])
        let selectYear1 = parseInt(this.LineSelectedYearXK[0]);
        let selectYear2 = parseInt(this.LineSelectedYearXK[1]);

        let differ1 = selectYear1 - 2005;
        let differ2 = selectYear2 - 2005;

        //console.log(this.allYearTimesDataXK[differ1][0])
        //console.log(this.allYearTimesDataXK[differ2][0])

        const formatUtil = echarts.format;
        this.LineOptionXK_1 = {
          title: [
            {
              text: 'January of '+ this.LineSelectedYearXK[0]+', '+ this.LineSelectedYearXK[1],
              left:'1%',
              textStyle: {
                fontSize: 15,
              }
            },
            {
              text: 'February of '+  this.LineSelectedYearXK[0]+', '+ this.LineSelectedYearXK[1],
              left: '44%',
              textStyle: {
                fontSize: 15,
              }
            },
            {
              text: 'March of '+  this.LineSelectedYearXK[0]+', '+ this.LineSelectedYearXK[1],
              top: '50%',
              left:'1%',
              textStyle: {
                fontSize: 15,
              }
            },
            {
              text: 'April of '+  this.LineSelectedYearXK[0]+', '+ this.LineSelectedYearXK[1],
              top: '50%',
              left: '44%',
              textStyle: {
                fontSize: 15,
              }
            },
          ],
          grid: [
            {
              left: '6%', top: '11%', width: '34%', height: '29%'
            },
            {
              right: '16%', top: '11%', width:'34%', height: '29%'
            },
            {
              left: '6%', bottom: '11%', width: '34%', height: '29%'
            },
            {
              right: '16%', bottom: '11%', width: '34%', height: '29%'
            }

          ],


          tooltip: {
            formatter: function (info)
            {
              let value = info.value;
              let name = info.name;
              if(name=="zero_to_two"){
                return '0:00 - 2:00'+'<br>'+ 'Daily Accident number: ' + value
              }
              if(name=="two_to_four"){
                return '2:00 - 4:00'+'<br>'+ 'Daily Accident number: ' + value
              }
              if(name== "four_to_six"){
                return '4:00 - 6:00'+'<br>'+ 'Daily Accident number: ' + value
              }
              if(name=="six_to_eight"){
                return '6:00 - 8:00'+'<br>'+ 'Daily Accident number: ' + value
              }
              if(name=="eight_to_ten"){
                return '8:00 - 10:00'+'<br>'+ 'Daily Accident number: ' + value
              }
              if(name=="ten_to_twelve"){
                return '10:00 - 12:00'+'<br>'+ 'Daily Accident number: ' + value
              }
              if(name=="twelve_to_fourteen"){
                return '12:00 - 14:00'+'<br>'+ 'Daily Accident number: ' + value
              }
              if(name=="fourteen_to_sixteen"){
                return '14:00 - 16:00'+'<br>'+ 'Daily Accident number: ' + value
              }
              if(name=="sixteen_to_eighteen"){
                return '16:00 - 18:00'+'<br>'+ 'Daily Accident number: ' + value
              }
              if(name=="eighteen_to_twenty"){
                return '18:00 - 20:00'+'<br>'+ 'Daily Accident number: ' + value
              }
              if(name=="twenty_to_twentytwo"){
                return '20:00 - 22:00'+'<br>'+ 'Daily Accident number: ' + value
              }
              if(name=="twentytwo_to_twentyfour"){
                return '22:00 - 24:00'+'<br>'+ 'Daily Accident number: ' + value
              }

            }
          },
          xAxis: [
            {
              data:[2,4,6,8,10,12,14,16,18,20,22,24],
              gridIndex: 0,
              boundaryGap: true,
              splitLine: {
                show: true,
                lineStyle:{
                  color: ['#DDDDDD'],
                  width: 1,
                }
              },
            },
            {
              data:[2,4,6,8,10,12,14,16,18,20,22,24],
              gridIndex: 1,
              boundaryGap: true,
              splitLine: {
                show: true,
                lineStyle:{
                  color: ['#DDDDDD'],
                  width: 1,
                }
              },
            },
            {
              data:[2,4,6,8,10,12,14,16,18,20,22,24],
              gridIndex: 2,
              boundaryGap: true,
              splitLine: {
                show: true,
                lineStyle:{
                  color: ['#DDDDDD'],
                  width: 1,
                }
              },
            },
            {
              data:[2,4,6,8,10,12,14,16,18,20,22,24],
              gridIndex: 3,
              boundaryGap: true,
              splitLine: {
                show: true,
                lineStyle:{
                  color: ['#DDDDDD'],
                  width: 1,
                }
              },
            },
          ],
          yAxis: [
            {
              type:'value',
              gridIndex:0,
              splitLine:{
                show:true,
                lineStyle:{
                  color: ['#DDDDDD'],
                  width: 1,

                }
              }
            },
            {
              type:'value',
              gridIndex:1,
              splitLine:{
                show:true,
                lineStyle:{
                  color: ['#DDDDDD'],
                  width: 1,

                }
              }
            },
            {
              type:'value',
              gridIndex:2,
              splitLine:{
                show:true,
                lineStyle:{
                  color: ['#DDDDDD'],
                  width: 1,

                }
              }
            },
            {
              type:'value',
              gridIndex:3,
              splitLine:{
                show:true,
                lineStyle:{
                  color: ['#DDDDDD'],
                  width: 1,

                }
              }
            },
          ],

          series: [
            {
              name: '0:00am - 2:00am',
              type: 'line',
              xAxisIndex: 0,
              yAxisIndex: 0,
              data: this.allYearTimesDataXK[differ1][0],
              smooth: true,

              symbol: 'circle',
              color : '#A8CD74'

            },
            {
              name: '2:00am - 4:00am',
              type: 'line',
              xAxisIndex: 0,
              yAxisIndex: 0,
              data: this.allYearTimesDataXK[differ2][0],
              smooth: true,

              symbol: 'circle',
              color : '#42680F'
            },


            {
              name: 'II',
              type: 'line',
              xAxisIndex: 1,
              yAxisIndex: 1,
              data: this.allYearTimesDataXK[differ1][1],
              smooth: true,

              symbol: 'circle',
              color : '#A8CD74'


            },
            {
              name: 'II',
              type: 'line',
              xAxisIndex: 1,
              yAxisIndex: 1,
              data: this.allYearTimesDataXK[differ2][1],
              smooth: true,

              symbol: 'circle',
              color : '#42680F'

            },
            {
              name: 'III',
              type: 'line',
              xAxisIndex: 2,
              yAxisIndex: 2,
              data: this.allYearTimesDataXK[differ1][2],
              smooth: true,

              symbol: 'circle',
              color : '#A8CD74'
            },
            {
              name: 'III',
              type: 'line',
              xAxisIndex: 2,
              yAxisIndex: 2,
              data: this.allYearTimesDataXK[differ2][2],
              smooth: true,

              symbol: 'circle',
              color : '#42680F'

            },
            {
              name: 'IV',
              type: 'line',
              xAxisIndex: 3,
              yAxisIndex: 3,
              data: this.allYearTimesDataXK[differ1][3],
              smooth: true,

              symbol: 'circle',
              color : '#A8CD74'
            },
            {
              name: 'IV',
              type: 'line',
              xAxisIndex: 3,
              yAxisIndex: 3,
              data: this.allYearTimesDataXK[differ2][3],
              smooth: true,

              symbol: 'circle',
              color : '#42680F'
            },

          ]
        };


        this.LineOptionXK_2 = {
          title: [
            {
              text: 'May of '+ this.LineSelectedYearXK[0]+', '+ this.LineSelectedYearXK[1],
              left:'1%',
              textStyle: {
                fontSize: 15,
              }
            },
            {
              text: 'June of '+  this.LineSelectedYearXK[0]+', '+ this.LineSelectedYearXK[1],
              left: '44%',
              textStyle: {
                fontSize: 15,
              }
            },
            {
              text: 'July of '+  this.LineSelectedYearXK[0]+', '+ this.LineSelectedYearXK[1],
              top: '50%',
              left:'1%',
              textStyle: {
                fontSize: 15,
              }
            },
            {
              text: 'August of '+  this.LineSelectedYearXK[0]+', '+ this.LineSelectedYearXK[1],
              top: '50%',
              left: '44%',
              textStyle: {
                fontSize: 15,
              }
            },
          ],
          grid: [
            {
              left: '6%', top: '11%', width: '34%', height: '29%'
            },
            {
              right: '16%', top: '11%', width:'34%', height: '29%'
            },
            {
              left: '6%', bottom: '11%', width: '34%', height: '29%'
            },
            {
              right: '16%', bottom: '11%', width: '34%', height: '29%'
            }

          ],

          tooltip: {
            formatter: function (info)
            {
              let value = info.value;
              let name = info.name;
              if(name=="zero_to_two"){
                return '0:00 - 2:00'+'<br>'+ 'Daily Accident number: ' + value
              }
              if(name=="two_to_four"){
                return '2:00 - 4:00'+'<br>'+ 'Daily Accident number: ' + value
              }
              if(name== "four_to_six"){
                return '4:00 - 6:00'+'<br>'+ 'Daily Accident number: ' + value
              }
              if(name=="six_to_eight"){
                return '6:00 - 8:00'+'<br>'+ 'Daily Accident number: ' + value
              }
              if(name=="eight_to_ten"){
                return '8:00 - 10:00'+'<br>'+ 'Daily Accident number: ' + value
              }
              if(name=="ten_to_twelve"){
                return '10:00 - 12:00'+'<br>'+ 'Daily Accident number: ' + value
              }
              if(name=="twelve_to_fourteen"){
                return '12:00 - 14:00'+'<br>'+ 'Daily Accident number: ' + value
              }
              if(name=="fourteen_to_sixteen"){
                return '14:00 - 16:00'+'<br>'+ 'Daily Accident number: ' + value
              }
              if(name=="sixteen_to_eighteen"){
                return '16:00 - 18:00'+'<br>'+ 'Daily Accident number: ' + value
              }
              if(name=="eighteen_to_twenty"){
                return '18:00 - 20:00'+'<br>'+ 'Daily Accident number: ' + value
              }
              if(name=="twenty_to_twentytwo"){
                return '20:00 - 22:00'+'<br>'+ 'Daily Accident number: ' + value
              }
              if(name=="twentytwo_to_twentyfour"){
                return '22:00 - 24:00'+'<br>'+ 'Daily Accident number: ' + value
              }

            }
          },
          xAxis: [
            {
              data:[2,4,6,8,10,12,14,16,18,20,22,24],
              gridIndex: 0,
              boundaryGap: true,
              splitLine: {
                show: true,
                lineStyle:{
                  color: ['#DDDDDD'],
                  width: 1,
                }
              },
            },
            {
              data:[2,4,6,8,10,12,14,16,18,20,22,24],
              gridIndex: 1,
              boundaryGap: true,
              splitLine: {
                show: true,
                lineStyle:{
                  color: ['#DDDDDD'],
                  width: 1,
                }
              },
            },
            {
              data:[2,4,6,8,10,12,14,16,18,20,22,24],
              gridIndex: 2,
              boundaryGap: true,
              splitLine: {
                show: true,
                lineStyle:{
                  color: ['#DDDDDD'],
                  width: 1,
                }
              },
            },
            {
              data:[2,4,6,8,10,12,14,16,18,20,22,24],
              gridIndex: 3,
              boundaryGap: true,
              splitLine: {
                show: true,
                lineStyle:{
                  color: ['#DDDDDD'],
                  width: 1,
                }
              },
            },
          ],
          yAxis: [
            {
              type:'value',
              gridIndex:0,
              splitLine:{
                show:true,
                lineStyle:{
                  color: ['#DDDDDD'],
                  width: 1,

                }
              }
            },
            {
              type:'value',
              gridIndex:1,
              splitLine:{
                show:true,
                lineStyle:{
                  color: ['#DDDDDD'],
                  width: 1,

                }
              }
            },
            {
              type:'value',
              gridIndex:2,
              splitLine:{
                show:true,
                lineStyle:{
                  color: ['#DDDDDD'],
                  width: 1,

                }
              }
            },
            {
              type:'value',
              gridIndex:3,
              splitLine:{
                show:true,
                lineStyle:{
                  color: ['#DDDDDD'],
                  width: 1,

                }
              }
            },
          ],

          series: [
            {
              name: 'I-5',
              type: 'line',
              xAxisIndex: 0,
              yAxisIndex: 0,
              data: this.allYearTimesDataXK[differ1][4],
              smooth: true,

              symbol: 'circle',
              color : '#FFD047'

            },
            {
              name: 'I-5',
              type: 'line',
              xAxisIndex: 0,
              yAxisIndex: 0,
              data: this.allYearTimesDataXK[differ2][4],
              smooth: true,

              symbol: 'circle',
              color : '#FF7E00'
            },


            {
              name: 'II',
              type: 'line',
              xAxisIndex: 1,
              yAxisIndex: 1,
              data: this.allYearTimesDataXK[differ1][5],
              smooth: true,

              symbol: 'circle',
              color : '#FFD047'


            },
            {
              name: 'II',
              type: 'line',
              xAxisIndex: 1,
              yAxisIndex: 1,
              data: this.allYearTimesDataXK[differ2][5],
              smooth: true,

              symbol: 'circle',
              color : '#FF7E00'

            },
            {
              name: 'III',
              type: 'line',
              xAxisIndex: 2,
              yAxisIndex: 2,
              data: this.allYearTimesDataXK[differ1][6],
              smooth: true,

              symbol: 'circle',
              color : '#FFD047'
            },
            {
              name: 'III',
              type: 'line',
              xAxisIndex: 2,
              yAxisIndex: 2,
              data: this.allYearTimesDataXK[differ2][6],
              smooth: true,

              symbol: 'circle',
              color : '#FF7E00'

            },
            {
              name: 'IV',
              type: 'line',
              xAxisIndex: 3,
              yAxisIndex: 3,
              data: this.allYearTimesDataXK[differ1][7],
              smooth: true,

              symbol: 'circle',
              color : '#FFD047'
            },
            {
              name: 'IV',
              type: 'line',
              xAxisIndex: 3,
              yAxisIndex: 3,
              data: this.allYearTimesDataXK[differ2][7],
              smooth: true,

              symbol: 'circle',
              color : '#FF7E00'
            },

          ]
        };

        this.LineOptionXK_3 = {
          title: [
            {
              text: 'September of '+  this.LineSelectedYearXK[0]+', '+ this.LineSelectedYearXK[1],
              left:'1%',
              textStyle: {
                fontSize: 15,
              }
            },
            {
              text: 'October of '+  this.LineSelectedYearXK[0]+', '+ this.LineSelectedYearXK[1],
              left: '44%',
              textStyle: {
                fontSize: 15,
              }
            },
            {
              text: 'November of '+  this.LineSelectedYearXK[0]+', '+ this.LineSelectedYearXK[1],
              top: '50%',
              left:'1%',
              textStyle: {
                fontSize: 15,
              }
            },
            {
              text: 'December of '+  this.LineSelectedYearXK[0]+', '+ this.LineSelectedYearXK[1],
              top: '50%',
              left: '44%',
              textStyle: {
                fontSize: 15,
              }
            },
          ],
          grid: [
            {
              left: '6%', top: '11%', width: '34%', height: '29%'
            },
            {
              right: '16%', top: '11%', width:'34%', height: '29%'
            },
            {
              left: '6%', bottom: '11%', width: '34%', height: '29%'
            },
            {
              right: '16%', bottom: '11%', width: '34%', height: '29%'
            }

          ],

          tooltip: {
            formatter: function (info)
            {
              let value = info.value;
              let name = info.name;
              if(name=="zero_to_two"){
                return '0:00 - 2:00'+'<br>'+ 'Daily Accident number: ' + value
              }
              if(name=="two_to_four"){
                return '2:00 - 4:00'+'<br>'+ 'Daily Accident number: ' + value
              }
              if(name== "four_to_six"){
                return '4:00 - 6:00'+'<br>'+ 'Daily Accident number: ' + value
              }
              if(name=="six_to_eight"){
                return '6:00 - 8:00'+'<br>'+ 'Daily Accident number: ' + value
              }
              if(name=="eight_to_ten"){
                return '8:00 - 10:00'+'<br>'+ 'Daily Accident number: ' + value
              }
              if(name=="ten_to_twelve"){
                return '10:00 - 12:00'+'<br>'+ 'Daily Accident number: ' + value
              }
              if(name=="twelve_to_fourteen"){
                return '12:00 - 14:00'+'<br>'+ 'Daily Accident number: ' + value
              }
              if(name=="fourteen_to_sixteen"){
                return '14:00 - 16:00'+'<br>'+ 'Daily Accident number: ' + value
              }
              if(name=="sixteen_to_eighteen"){
                return '16:00 - 18:00'+'<br>'+ 'Daily Accident number: ' + value
              }
              if(name=="eighteen_to_twenty"){
                return '18:00 - 20:00'+'<br>'+ 'Daily Accident number: ' + value
              }
              if(name=="twenty_to_twentytwo"){
                return '20:00 - 22:00'+'<br>'+ 'Daily Accident number: ' + value
              }
              if(name=="twentytwo_to_twentyfour"){
                return '22:00 - 24:00'+'<br>'+ 'Daily Accident number: ' + value
              }

            }
          },
          xAxis: [
            {
              data:[2,4,6,8,10,12,14,16,18,20,22,24],
              gridIndex: 0,
              boundaryGap: true,
              splitLine: {
                show: true,
                lineStyle:{
                  color: ['#DDDDDD'],
                  width: 1,
                }
              },
            },
            {
              data:[2,4,6,8,10,12,14,16,18,20,22,24],
              gridIndex: 1,
              boundaryGap: true,
              splitLine: {
                show: true,
                lineStyle:{
                  color: ['#DDDDDD'],
                  width: 1,
                }
              },
            },
            {
              data:[2,4,6,8,10,12,14,16,18,20,22,24],
              gridIndex: 2,
              boundaryGap: true,
              splitLine: {
                show: true,
                lineStyle:{
                  color: ['#DDDDDD'],
                  width: 1,
                }
              },
            },
            {
              data:[2,4,6,8,10,12,14,16,18,20,22,24],
              gridIndex: 3,
              boundaryGap: true,
              splitLine: {
                show: true,
                lineStyle:{
                  color: ['#DDDDDD'],
                  width: 1,
                }
              },
            },
          ],
          yAxis: [
            {
              type:'value',
              gridIndex:0,
              splitLine:{
                show:true,
                lineStyle:{
                  color: ['#DDDDDD'],
                  width: 1,

                }
              }
            },
            {
              type:'value',
              gridIndex:1,
              splitLine:{
                show:true,
                lineStyle:{
                  color: ['#DDDDDD'],
                  width: 1,

                }
              }
            },
            {
              type:'value',
              gridIndex:2,
              splitLine:{
                show:true,
                lineStyle:{
                  color: ['#DDDDDD'],
                  width: 1,

                }
              }
            },
            {
              type:'value',
              gridIndex:3,
              splitLine:{
                show:true,
                lineStyle:{
                  color: ['#DDDDDD'],
                  width: 1,

                }
              }
            },
          ],

          series: [
            {
              name: 'I-5',
              type: 'line',
              xAxisIndex: 0,
              yAxisIndex: 0,
              data: this.allYearTimesDataXK[differ1][8],
              smooth: true,

              symbol: 'circle',
              color : '#65CBFF'

            },
            {
              name: 'I-5',
              type: 'line',
              xAxisIndex: 0,
              yAxisIndex: 0,
              data: this.allYearTimesDataXK[differ2][8],
              smooth: true,

              symbol: 'circle',
              color : '#0056E6'
            },


            {
              name: 'II',
              type: 'line',
              xAxisIndex: 1,
              yAxisIndex: 1,
              data: this.allYearTimesDataXK[differ1][9],
              smooth: true,

              symbol: 'circle',
              color : '#65CBFF'


            },
            {
              name: 'II',
              type: 'line',
              xAxisIndex: 1,
              yAxisIndex: 1,
              data: this.allYearTimesDataXK[differ2][9],
              smooth: true,

              symbol: 'circle',
              color : '#0056E6'

            },
            {
              name: 'III',
              type: 'line',
              xAxisIndex: 2,
              yAxisIndex: 2,
              data: this.allYearTimesDataXK[differ1][10],
              smooth: true,

              symbol: 'circle',
              color : '#65CBFF'
            },
            {
              name: 'III',
              type: 'line',
              xAxisIndex: 2,
              yAxisIndex: 2,
              data: this.allYearTimesDataXK[differ2][10],
              smooth: true,

              symbol: 'circle',
              color : '#0056E6'

            },
            {
              name: 'IV',
              type: 'line',
              xAxisIndex: 3,
              yAxisIndex: 3,
              data: this.allYearTimesDataXK[differ1][11],
              smooth: true,

              symbol: 'circle',
              color : '#65CBFF'
            },
            {
              name: 'IV',
              type: 'line',
              xAxisIndex: 3,
              yAxisIndex: 3,
              data: this.allYearTimesDataXK[differ2][11],
              smooth: true,

              symbol: 'circle',
              color : '#0056E6'
            },

          ]
        };

        this.LineSelectedYearXK=0;
        this.selectLimitedXK=0;
        this.LineOverviewXK.clear();
        this.LineOverviewXK.setOption(this.LineOptionXK_1);

        this.LineOverviewXK2.clear();
        this.LineOverviewXK2.setOption(this.LineOptionXK_2);

        this.LineOverviewXK3.clear();
        this.LineOverviewXK3.setOption(this.LineOptionXK_3);

      }

    },
    drawVehicleTypeSunbrustGraphTY()
    {
      let url = "http://localhost:8090/vehicle/types";
      axios.get(url, {}).then(response =>
      {
        if (response.status == 200)
        {
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
              },
              bottom: '20%',
              text: ['High', 'Low'],
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
    },
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
          // console.log(response.data[0])

          const formatUtil = echarts.format;
          this.TopLineOptionXK = {
            legend: {
              data: ['Kent', 'Surrey', 'Lancashire', 'Essex', 'Hampshire'],
              top:'7%',
            },
            grid: {
              left: '0%',
              right: '3%',
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
    GSWDrawGDP(){

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
            //stack: 'Total',
            color:'#87CEEB',
            itemStyle : {
              normal : {
                color:'#87CEEB',
                lineStyle:{
                  color:'#87CEEB',
                }
              }
            },
            data: [14234,15261,16292,16524,16854,17411,17707,18692,19175,20041,20947
            ],
          },
          {
            name: 'Glasgow City',
            type: 'line',
            //stack: 'Total',

            color:'#FFEFD5',
            itemStyle : {
              normal : {
                color:'#FFEFD5',
                lineStyle:{
                  color:'#FFEFD5',
                }
              }
            },
            data: [16846,17701,18515,19084,18870,18543,19255,19646,20587,21185,21362
            ],
          },
          {
            name: 'Bradford',
            type: 'line',
            //stack: 'Total',

            color:'#FF8C00',
            itemStyle : {
              normal : {
                color:'#FF8C00',
                lineStyle:{
                  color:'#FF8C00',
                }
              }
            },
            data: [8071,8408,8772,9013,8933,9062,9494,9665,9900,9967,10408
            ],
          },
          {
            name: 'Liverpool',
            type: 'line',
            //stack: 'Total',
            color:'#FF0000',
            itemStyle : {
              normal : {
                color:'#FF0000',
                lineStyle:{
                  color:'#FF0000',
                }
              }
            },
            data: [9957,10843,10940,11505,11983,12196,12354,12228,12519,13159,13421
            ],
          },
          {
            name: 'Sheffield',
            type: 'line',
            //stack: 'Total',
            color:'#659d84',
            itemStyle : {
              normal : {
                color:'#659d84',
                lineStyle:{
                  color:'#659d84',
                }
              }
            },
            data: [10369,10922,11649,11427,11412,11714,12203,12421,12865,13246,13632
            ],
          },
          {
            name: 'Edinburgh',
            type: 'line',
            //stack: 'Total',
            color:'#D2691E',
            itemStyle : {
              normal : {
                color:'#D2691E',
                lineStyle:{
                  color:'#D2691E',
                }
              }
            },
            data: [15835,16504,17726,17616,17977,17855,18240,19113,20080,20757,21215

            ],
          },
          {
            name: 'Durham',
            type: 'line',
            //stack: 'Total',
            color:'#A0522D',
            itemStyle : {
              normal : {
                color:'#A0522D',
                lineStyle:{
                  color:'#A0522D',
                }
              }
            },
            data: [7542,8010,8381,8668,8716,8876,8865,9129,9263,9307,9484

            ],
          },
          {
            name: 'Bristol',
            type: 'line',
            //stack: 'Total',
            color:'#FFC0CB',
            itemStyle : {
              normal : {
                color:'#FFC0CB',
                lineStyle:{
                  color:'#FFC0CB',
                }
              }
            },
            data: [9864,10423,11195,11595,11900,12411,12541,12817,13231,13968,14469

            ],
          },
          {
            name: 'Lambeth',
            type: 'line',
            //stack: 'Total',
            color:'#9932CC',
            itemStyle : {
              normal : {
                color:'#9932CC',
                lineStyle:{
                  color:'#9932CC',
                }
              }
            },
            data: [7837,8129,9166,9690,9533,10309,10852,11169,10843,12184,12465

            ],
          },
          {
            name: 'Kirklees',
            type: 'line',
            //stack: 'Total',
            color:'#FFA500',
            itemStyle : {
              normal : {
                color:'#FFA500',
                lineStyle:{
                  color:'#FFA500',
                }
              }
            },
            data: [6058,6293,6568,6641,6512,6665,6906,7006,7227,7545,7935

            ],
          },
          {
            name: 'Barnet',
            type: 'line',
            //stack: 'Total',
            color:'#9400D3',
            itemStyle : {
              normal : {
                color:'#9400D3',
                lineStyle:{
                  color:'#9400D3',
                }
              }
            },
            data: [6679,7138,7506,7462,7102,7364,7633,8292,8579,9171,9378

            ],
          },
          {
            name: 'Doncaster',
            type: 'line',
            //stack: 'Total',
            color:'#90EE90',
            itemStyle : {
              normal : {
                color:'#90EE90',
                lineStyle:{
                  color:'#90EE90',
                }
              }
            },
            data: [4367,4651,4943,4955,4754,4943,5034,5172,5294,5640,6077

            ],
          },
          {
            name: 'Ealing',
            type: 'line',
            //stack: 'Total',
            color:'#8B008B',
            itemStyle : {
              normal : {
                color:'#8B008B',
                lineStyle:{
                  color:'#8B008B',
                }
              }
            },
            data: [7208,7639,8050,8069,7545,7836,8169,8542,9010,9685,10268

            ],
          },
          {
            name: 'Brent',
            type: 'line',
            //stack: 'Total',
            color:'#800080',
            itemStyle : {
              normal : {
                color:'#800080',
                lineStyle:{
                  color:'#800080',
                }
              }
            },
            data: [6135,6570,6870,6926,6655,6933,7164,7581,7971,8628,9352

            ],
          },
          {
            name: 'Coventry',
            type: 'line',
            //stack: 'Total',
            color:'#A9A9A9',
            itemStyle : {
              normal : {
                color:'#A9A9A9',
                lineStyle:{
                  color:'#A9A9A9',
                }
              }
            },
            data: [6705,6777,7132,7286,7163,7567,7890,8422,8722,9302,10147

            ],
          },
          {
            name: 'Barnsley',
            type: 'line',
            //stack: 'Total',

            color:'#00FA9A',
            itemStyle : {
              normal : {
                color:'#00FA9A',
                lineStyle:{
                  color:'#00FA9A',
                }
              }
            },
            data: [3172,3329,3548,3480,3372,3496,3630,3787,3932,4109,4224

            ],
          },
          {
            name: 'Oldham',
            type: 'line',
            //stack: 'Total',
            color:'#00BFFF',
            itemStyle : {
              normal : {
                color:'#00BFFF',
                lineStyle:{
                  color:'#00BFFF',
                }
              }
            },
            data: [3122,3274,3401,3470,3411,3478,3564,3673,3786,3937,4190

            ],
          },
          {
            name: 'Bexley',
            type: 'line',
            //stack: 'Total',
            color:'#BA55D3',
            itemStyle : {
              normal : {
                color:'#BA55D3',
                lineStyle:{
                  color:'#BA55D3',
                }
              }
            },
            data: [4473,4703,4950,5028,4767,4923,5016,5622,6310,6436,6698

            ],
          },
          {
            name: 'Bath and North East Somerset',
            type: 'line',
            //stack: 'Total',
            color:'#FFB6C1',
            itemStyle : {
              normal : {
                color:'#FFB6C1',
                lineStyle:{
                  color:'#FFB6C1',
                }
              }
            },
            data: [3518,3686,3837,3962,3865,4084,4142,4231,4224,4396,4462

            ],
          },
          {
            name: 'Angus',
            type: 'line',
            //stack: 'Total',
            color:'#FFFF00',
            itemStyle : {
              normal : {
                color:'#FFFF00',
                lineStyle:{
                  color:'#FFFF00',
                }
              }
            },
            data: [1551,1728,1802,1840,1768,1803,1863,1915,2021,2171,2129

            ],
          },


        ]
      };

      GSWFourthoption && GSWFourthmyChart.setOption(GSWFourthoption);


    },
    GSWDrawPopulation(){
      let GSWFifthChart = document.getElementById('GSWFifthImage');
      let GSWFifthMychart = echarts.init(GSWFifthChart);
      let GSWFifthOption;

      let GSWFifthdata = [
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
      let cities = ['Glasgow', 'Sheffield', 'County Durham', 'Bradford', 'Manchester', 'Liverpool', 'City of Edinburgh', 'Bristol, City of', 'Kirklees', 'Barnet', 'Ealing', 'Coventry', 'Doncaster', 'Lambeth', 'Brent', 'Barnsley', 'Bexley', 'Oldham', 'Bath and North East Somerset','Angus'];
      let barHeight = 500;
      GSWFifthOption = {
        color:["#00BFFF", "#191970"],
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
          top: "10%",
          left:"0%",
        },
        angleAxis: {
          type: 'category',
          data: cities,
          show:false,
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
              GSWFifthdata[id][0] +
              '<br>2015 population：' +
              GSWFifthdata[id][1] +
              '<br>Average：' +
              GSWFifthdata[id][2]
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
            data: GSWFifthdata.map(function (d) {
              return d[0];
            }),
            coordinateSystem: 'polar',
            stack: 'Min Max',
            silent: true
          },
          {
            type: 'bar',
            data: GSWFifthdata.map(function (d) {
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
            data: GSWFifthdata.map(function (d) {
              return d[2] - barHeight;
            }),
            coordinateSystem: 'polar',
            stack: 'Average',
            silent: true,
            z: 10
          },
          {
            type: 'bar',
            data: GSWFifthdata.map(function (d) {
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

      GSWFifthOption && GSWFifthMychart.setOption(GSWFifthOption);
    },

    GSWinitTableau() {
      let containerDiv = document.getElementById("GSWSecondImage"),
        url = "https://public.tableau.com/views/MaleandFemale_16368776788840/1_1?:language=zh-CN&publish=yes&:display_count=n&:origin=viz_share_link";


      let viz = new tableau.Viz(containerDiv, url);
    }

  },
  created()
  {
    // let urlAll = "http://localhost:8090/calendarData";
    //this.loadGeoMapData();
  },
  mounted () {
    this.datasetOverview();
    this.TotalLineHeaderOptionXK()
    this.loadGeoMapData();
    this.drawDefaultCalendarTY();
    this.drawRadarTY();
    this.GSWdrawGDPandPopulation();
    this.GSWDrawCalendar();
    this.LineOptionXK1();
    this.LineOptionXK2();
    this.LineOptionXK3();
    this.drawVehicleBrandsTreemapTY();
    this.drawVehicleTypeSunbrustGraphTY();
    this.TopLineOptionXK();
    this.GSWDrawGDP();
    this.GSWDrawPopulation();
    this.GSWinitTableau();
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
  background: url("../assets/VisualizationImages/background.jpg") no-repeat;
  height: 100%;
  width: 100%;
  background-size: 100% 100%;
}
#bottomPage{
  background: url("../assets/43.jpg") no-repeat;
  height: 100%;
  width: 100%;
  background-size: 100% 100%;
}
a{text-decoration:none}
</style>
