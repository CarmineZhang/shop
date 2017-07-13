// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
// import store from './store'
import router from './router'
import AlertPlugin from '@/plugins/alert'
import ConfirmPlugin from '@/plugins/confirm'
import ToastPlugina from '@/plugins/toast'
import './assets/css/weui.css'
import './sass/main.scss'
Vue.config.productionTip = false

Vue.use(AlertPlugin)
Vue.use(ConfirmPlugin)
Vue.use(ToastPlugina)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  // store,
  render: h => h(App)
})
