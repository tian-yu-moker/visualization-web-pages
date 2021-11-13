import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Login from '../components/Login'
import HelloWorld from '../components/HelloWorld'
import Manage from '../components/ManageAccount'
import Query from '../components/Query'
import ManageAccount from '../components/ManageAccount'
import Administer from '../components/Administer'
import InvoiceRecord from '../components/InvoiceRecord'
import FlowRecord from '../components/FlowRecord'
import Homepage from '../components/Homepage'
import gaoShiweiTest from '../components/gaoShiweiTest'
import tests from '../components/tests'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Root',
      component: gaoShiweiTest,
      meta:{
        title: 'Homepage',
        keepAlive: false
      }
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
      meta: {
        title: '登录',
        keepAlive: false
      }
    },
    {
      path: '/hello',
      name: 'HelloWorld',
      component: HelloWorld,
      meta: {
        keepAlive: true
      }
    },
    {
      path: '/query',
      name: 'Query',
      component: Query,
      meta: {
        title: '查询',
        keepAlive: true
      }
    },
    {
      path: '/manageAccount',
      name: 'ManageAccount',
      component: ManageAccount,
      meta: {
        title: '修账户信息',
        keepAlive: true
      }
    },
    {
      path: '/administer',
      name: 'administer',
      component: Administer,
      meta: {
        title: '管理员操作',
        keepAlive: true
      }
    },
    {
      path: '/invoicesRecord',
      name: 'invoices',
      component: InvoiceRecord,
      meta: {
        title: '已查验发票',
        keepAlive: true
      }
    },
    {
      path: '/flow',
      name: 'flow',
      component: FlowRecord,
      meta: {
        title: '流水记录',
        keepAlive: true
      }
    }
  ]
})
