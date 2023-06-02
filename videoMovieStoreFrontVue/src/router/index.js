import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'
import Guard from '../services/middleware'
import StoreView from '../views/StoreView.vue'
import AboutView from '../views/AboutView.vue'
import BasketView from '../views/BasketView.vue'
import StoreDramaView from '../views/StoreDramaView.vue'
import StoreCrimeView from '../views/StoreCrimeView.vue'
import StoreActionView from '../views/StoreActionView.vue'
import StoreScifiView from '../views/StoreScifiView.vue'
import StoreThrillerView from '../views/StoreThrillerView.vue'
import StoreFantasyView from '../views/StoreFantasyView.vue'
import StoreAnimationView from '../views/StoreAnimationView.vue'
import StoreHorrorView from '../views/StoreHorrorView.vue'
import StoreRomanceView from '../views/StoreRomanceView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView
  },
  {
    path: '/store',
    name: 'store',
    component: StoreView,
    
  },
  {
    path: '/store/drama',
    name: 'drama',
    component: StoreDramaView,
    
  },
  {
    path: '/store/crime',
    name: 'crime',
    component: StoreCrimeView,
    
  },
  {
    path: '/store/action',
    name: 'action',
    component: StoreActionView,
    
  },
  {
    path: '/store/sci-fi',
    name: 'sci-fi',
    component: StoreScifiView,
    
  },
  {
    path: '/store/thriller',
    name: 'thriller',
    component: StoreThrillerView,
    
  },
  {
    path: '/store/fantasy',
    name: 'fantasy',
    component: StoreFantasyView,
    
  },
  {
    path: '/store/animation',
    name: 'animation',
    component: StoreAnimationView,
    
  },
  {
    path: '/store/horror',
    name: 'horror',
    component: StoreHorrorView,
    
  },
  {
    path: '/store/romance',
    name: 'romance',
    component: StoreRomanceView,
    
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
  },
  {
    path: '/basket',
    name: 'basket',
    component: BasketView,
    beforeEnter: Guard.auth
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
