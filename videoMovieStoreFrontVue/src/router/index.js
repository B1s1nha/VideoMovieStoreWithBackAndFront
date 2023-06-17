import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'
import Guard from '../services/middleware'
import StoreView from '../views/StoreView.vue'
import AboutView from '../views/AboutView.vue'
import BasketView from '../views/BasketView.vue'
import StoreCategoryView from '../views/StoreCategoryView.vue'
import StoreFoodView from '../views/StoreFoodView.vue'

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
    path: '/store/:category',
    name: 'action',
    props: true,
    component: StoreCategoryView,
    
  },
  {
    path: '/store/food',
    name: 'food',
    component: StoreFoodView,
    
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
