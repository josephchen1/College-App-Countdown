import App from './App.vue'
import LandingPage from './components/marketing/LandingPage'
import AboutPage from './components/marketing/AboutPage'
import Login from './components/auth/Login'
import Register from './components/auth/Register'

const routes = [
  { path: './', name: 'home', component: LandingPage },
  { path: './essay', name: 'essay', component: App, meta: { requiresAuth: true } },
  { path: './about', name: 'about', component: AboutPage },
  { path: './login', name: 'login', component: Login },
  { path: './register', name: 'register', component: Register }
]

export default routes
