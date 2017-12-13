// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './router'
import Mint from 'mint-ui'
import App from './App'
import List from './views/List'

import 'mint-ui/lib/style.css'
import './style/main.css'

Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(Mint)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  routes,
  template: '<App/>',
  components: { App }
})
