import { createRouter, createWebHistory } from 'vue-router'
// import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../components/HomeComp.vue')
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../components/AboutComp.vue')
  },
  {
    path: '/services',
    name: 'services',
    component: () => import('../components/ServicesComp.vue')
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import('../components/ContactComp.vue')
  },
  // {
  //   path: '/home',
  //   name: 'home',
  //   component: () => import('../views/HomeView.vue')
  // }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
