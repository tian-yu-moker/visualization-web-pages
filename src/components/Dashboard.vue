<template>
  <div>
    <div style="width: 100%;height:50px;background-color:#3333FF">标题</div>
    <div style="height:200px;background-color:#b2e2fa">图片</div>
    <div style="height:30px;background-color:#c2c2c2">空白</div>
    <h1>Build with Vue.js 3.0</h1>
    <div style="height:30px;background-color:#c2c2c2">空白</div>
    <el-row :gutter="20">
      <el-col :span="2"><div class="grid-content bg-purple">Placeholder</div></el-col>
      <el-col :span="20">
        <el-row :gutter="12">
          <el-col :span="8">
            <el-card shadow="hover">这里放项目介绍</el-card>
          </el-col>
          <el-col :span="8">
            <el-card shadow="hover">这里放项目介绍</el-card>
          </el-col>
          <el-col :span="8">
            <el-card shadow="hover">这里放项目介绍</el-card>
          </el-col>
        </el-row>
      </el-col>
      <el-col :span="2"><div class="grid-content bg-purple-light">Placeholder</div></el-col>
    </el-row>
    <div style="height:30px;background-color:#c2c2c2">空白</div>

    <el-row :gutter="10">
      <el-col :span="6">
        <div style="height: 260px; background-color:#b2e2fa">说点啥，总述</div>
      </el-col>
      <el-col :span="18">
        <el-row :gutter="5">
          <el-col :span="12">
            <div class="grid-content bg-purple-light">总述数据集，有200万起车祸，在10年内，配图</div>
          </el-col>
          <el-col :span="12">
            <div class="grid-content bg-purple-light">每年因此受伤。。。</div>
          </el-col>
        </el-row>
        <div style="height:20px;background-color:#c2c2c2">空白</div>
        <el-row>
          <el-col :span="6" style="background-color:#b2e2fa"> Ten years data overview</el-col>
        </el-row>
        <div style="height: 200px; background-color:#c2c2c2">
          一个图
        </div>
      </el-col>
    </el-row>
    <div style="height:20px;background-color:#ff8936">空白</div>
    <el-row :gutter="10">
      <el-col :span="2" style="background-color:#b2e2fa">Placeholder</el-col>
      <el-col :span="20" style="background-color:#3333FF; height: 300px">地图</el-col>
      <el-col :span="2" style="background-color:#b2e2fa">Placeholder</el-col>
    </el-row>
    <div style="height:20px;background-color:#ff8936">空白</div>
    <el-row :gutter="15">
      <el-col :span="2" style="background-color:#b2e2fa">Placeholder</el-col>
      <el-col :span="3" style="background-color:#b2e2fa">和日历相关的图片</el-col>
      <el-col :span="14" style="background-color:#3333FF; height: 300px">
        <div>日历</div>
        <br>
        <div>雷达</div>
      </el-col>
      <el-col :span="3" style="background-color:#b2e2fa">文字描述</el-col>
      <el-col :span="2" style="background-color:#b2e2fa">Placeholder</el-col>
    </el-row>
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
export default {
  name: 'Dashboard',
  beforeRouteEnter(to, from, next) {

    // 添加背景色 margin:0;padding:0是为了解决vue四周有白边的问题

    document.querySelector('body').setAttribute('style','margin:0;padding:0')

    next()

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
</style>
