// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import config from '../config'
import jquery from 'jquery'

axios.defaults.baseURL = process.env.NODE_ENV === 'production' ? config.build.apiDomain : config.dev.apiDomain
Vue.prototype.$http = axios
Vue.prototype.$ = jquery

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
