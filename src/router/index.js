import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
/* eslint-disable */
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/theta',
    name: 'theta',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "theta" */ '../views/ThetaView.vue')
  },
  {
    path: '/numeroloji',
    name: 'numeroloji',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "numeroloji" */ '../views/NumerolojiView.vue')
  },
  {
    path: '/hizmetler',
    name: 'hizmetler',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "hizmetler" */ '../views/ServicesView.vue')
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "theta" */ '../views/AboutView.vue')
  },
  {
    path: '/iletisim',
    name: 'iletisim',
    // route level code-splitting
    // this generates a separate chunk (contact.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "contact" */ '../views/ContactView.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router


/*
Content

Layout
https://colorhunt.co/palette/ccd6a6dae2b6dfe8ccf7eddb


TODO 
Tum sayfayi ortaya al
ana sayfadaki resmi simdilik kaldir ve her bolume palete uygun bir renk ver
Ana sayfa bolumlerini netle ve sayiyi ona indirge
alakasiz komponentleri sil


*/