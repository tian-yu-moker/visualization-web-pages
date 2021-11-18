import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import HelloWorld from '../components/HelloWorld'
import Homepage from '../components/Homepage'
import gaoShiweiTest from '../components/gaoShiweiTest'
import gaoShiweiThird from '../components/gaoShiweiThird'
import tests from '../components/tests'
import Dashboard from '../components/Dashboard'
import gaoShiweiFourth from '../components/gaoShiweiFourth'
import gaoShiweiFifth from '../components/gaoShiweiFifth'
import LineChart from '../components/LineChart'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Homepage',
      component: Dashboard,
      meta:{
        title: 'Homepage',
        keepAlive: false
      }
    }
  ]
})
