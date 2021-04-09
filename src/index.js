import Vue from 'vue'

import App from './app.vue'
import { createRouter } from './router'
import { createStore } from './store'

const router = createRouter()
const store = createStore()

// init app
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
