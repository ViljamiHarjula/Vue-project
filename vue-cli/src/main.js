import Vue from 'vue'
import App from './App.vue'
import Vuetify from 'vuetify'

Vue.use(Vuetify)

import VueRouter from 'vue-router'

Vue.use(VueRouter)

import routes from './router/index.js'

const app = new Vue({
  el: '#app',
  router: routes,
  render: h => h(App)
})
