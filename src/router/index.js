import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/views/Home'

// 路由懒加载
const Page = () => import(/* webpackChunkName: "page" */ '@/views/Page')

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/Home',
      component: Home,
      meta: {
        title: 'Home',
        depth: 1
      },
    },
    {
      path: '/Page',
      component: Page,
      meta: {
        title: 'Page',
        depth: 2
      },
    },
    {
      path: '*',
      redirect: '/Home'
    },
  ]
})
