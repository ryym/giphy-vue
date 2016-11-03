import Vue from 'vue'
import App from './App'
import store from './vuex/store'
import 'whatwg-fetch'

import 'material-design-lite/dist/material.min.css'

/* eslint-disable no-new */
new Vue({
  store,
  el: '#app',
  template: '<App/>',
  components: { App }
})
