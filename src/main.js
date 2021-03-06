// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
// import {
//   sync
// } from 'vuex-router-sync'
import App from './App'
// import store from './store'
import router from './router'
import AlertPlugin from '@/plugins/alert'
import ConfirmPlugin from '@/plugins/confirm'
import ToastPlugin from '@/plugins/toast'
import LoadingPlugin from '@/plugins/loading'
import TopTipPlugin from '@/plugins/toptip'
import Validator from '@/plugins/validator'
import mixins from '@/mixins'
import './assets/css/weui.css'
import './sass/main.scss'
Vue.config.productionTip = false

Vue.use(AlertPlugin)
Vue.use(ConfirmPlugin)
Vue.use(ToastPlugin)
Vue.use(LoadingPlugin)
Vue.use(TopTipPlugin)
Vue.use(Validator)
Vue.mixin(mixins)

// sync(store, router)


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  // store,
  render: h => h(App)
})
