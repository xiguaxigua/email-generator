import Vue from 'vue'
import App from './App'
import router from './router'

import './common/register-comp'

import 'normalize.css'
import './common/app.less'
import './assets/style.css'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
