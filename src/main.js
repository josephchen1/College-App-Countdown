import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes'
import Master from './components/layouts/Master'
import './registerServiceWorker'
import store from './store'

Vue.prototype.$eventBus = new Vue()

Vue.config.productionTip = false

Vue.use(VueRouter)

const router = new VueRouter({
  routes,
  mode: 'history'
})

new Vue({
  store,
  router: router,
  render: h => h(Master)
}).$mount('#app')
