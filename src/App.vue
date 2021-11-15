<template>
  <div id="app">
    <div v-if="$route.meta.keepAlive">
      <!--<div>
        <el-menu
          :default-active="activeIndex"
          class="el-menu-demo"
          mode="horizontal"
          @select="handleSelect"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b"
          :router="true">
          <el-menu-item index="./query">
            <i class="el-icon-menu"></i>
            <span slot="title">处理中心</span>
          </el-menu-item>
          <el-submenu index="management">
            <template slot="title">
              <i class="el-icon-s-custom"></i>
              管理账户
            </template>
            <el-menu-item index="./manageAccount">
              <i class="el-icon-edit"></i>
              修改信息
            </el-menu-item>
            <el-menu-item index="./administer">
              <i class="el-icon-edit-outline"></i>
              管理员
            </el-menu-item>
          </el-submenu>
          <el-menu-item index="./invoicesRecord">
            <i class="el-icon-notebook-2"></i>
            完成记录
          </el-menu-item>
          <el-menu-item index="./flow">
            <i class="el-icon-data-line"></i>
            流水记录
          </el-menu-item>
        </el-menu>
        <router-view></router-view>
      </div>-->
    </div>
    <router-view v-if="!$route.meta.keepAlive"></router-view>
  </div>
</template>

<script>

import Login from './components/Login'
import HelloWorld from './components/HelloWorld'
import Manage from './components/ManageAccount'

export default {
  name: 'App',
  methods: {
    handleSelect(key, keyPath){
    }
  },
  components: {

  },
  data()
  {
    return {
      screenWidth:document.documentElement.clientWidth
    };
  },
  computed: {
    activeIndex()
    {
      const { name } = this.$route
      switch (name)
      {
        case './query':
          return './query'
        case './manageAccount':
          return './manageAccount'
        case './administer':
          return './administer'
        case './invoicesRecord':
          return './invoicesRecord'
        case './flow':
          return './flow'
      }
    }
  },
  mounted () {
    document.body.style.backgroundColor="#EAEAEA";
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #000000;
  margin-top: 0px;
}
</style>
