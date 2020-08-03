import App from './App.vue'
import LandingPage from './components/marketing/LandingPage'
import AboutPage from './components/marketing/AboutPage'
import FAQ from './components/marketing/FAQ'
import Privacy from './components/marketing/Privacy'
import Contact from './components/marketing/Contact'
import Login from './components/auth/Login'
import Register from './components/auth/Register'
import Forgetpassword from './components/auth/Forgetpassword'
import Support from './components/marketing/Support'

const routes = [
  { path: '/', name: 'home', component: LandingPage },
  { path: '/essay', name: 'essay', component: App, meta: { requiresAuth: true } },
  { path: '/about', name: 'about', component: AboutPage },
  { path: '/login', name: 'login', component: Login },
  { path: '/register', name: 'register', component: Register },
  { path: '/forgetpassword', name: 'forgetpassword', component: Forgetpassword },
  { path: '/faq', name: 'faq', component: FAQ },
  { path: '/contact', name: 'contact', component: Contact },
  { path: '/privacy', name: 'privacy', component: Privacy },
  { path: '/support', name: 'support', component: Support }
]

export default routes
