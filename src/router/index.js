import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home'
// import Index from '@/components/index'
import Category from '@/components/category'
import Login from '@/components/login'
import Register from '@/components/register'
import Test from '@/components/Test'
Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'home',
    component: Home,
    children: [{
      path: '/index',
      component: Login
    }, {
      path: '/category',
      component: Category
    }]
  }, {
    path: '/test',
    component: Test
  }, {
    path: '/register',
    component: Register
  }, {
    path: '/login',
    component: Login
  }]
})
