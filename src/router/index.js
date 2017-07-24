import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home'
import Index from '@/components/index'
import Category from '@/components/category'
import Test from '@/components/Test'
Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'home',
    component: Home,
    children: [{
      path: '/index',
      component: Index
    }, {
      path: '/category',
      component: Category
    }]
  }, {
    path: '/test',
    component: Test
  }]
})
