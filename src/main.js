// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// import axios from 'axios'
import Vant from 'vant'
import 'vant/lib/index.css'
import '@/utils/index'
import '@/api'
// import VueAMap from 'vue-amap'
Vue.use(Vant)
Vue.config.productionTip = false
Vue.prototype.root = process.env.API_ROOT // 'http://120.79.4.43:3000'
// Vue.prototype.axios = axios
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
