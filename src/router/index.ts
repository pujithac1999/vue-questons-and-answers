import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/bind',
    name: 'bind',
    component: () => import('../views/BindConcept.vue')
  },
  {
    path: '/vfor',
    name: 'vfor',
    component:() => import('../views/VforConcept.vue')
  },
  {
    path:'/comp',
    name: 'comp',
    component: () => import('../views/computedPro.vue')
  },
  {
    path:'/watch',
    name: 'waatch',
    component: () => import('../views/watcherComp.vue')
  },
  {
    path: '/props',
    name: 'props',
    component: () => import('../views/propsCon.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
