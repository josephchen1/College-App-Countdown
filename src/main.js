import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes'
import Master from './components/layouts/Master'
import './registerServiceWorker'
import store from './store'
import * as firebase from 'firebase/app'
import 'firebase/auth'
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'

Vue.use(Buefy)

Vue.prototype.$eventBus = new Vue()

Vue.config.productionTip = false

Vue.use(VueRouter)

const router = new VueRouter({
  routes,
  mode: 'history'
})

router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth)
  const isAuthenticated = firebase.auth().currentUser
  if (requiresAuth & !isAuthenticated) {
    next({ name: 'login' })
  } else {
    next()
  }
})

let app

firebase.auth().onAuthStateChanged(user => {
  console.log(user)
  if (!app) {
    app = new Vue({
      store,
      router: router,
      render: h => h(Master)
    }).$mount('#app')
  }
})
