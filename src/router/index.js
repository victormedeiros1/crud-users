import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Dashboard from '../views/Dashboard.vue'
import Register from '../views/Register.vue'
import Update from '../views/Update.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: Dashboard,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/dashboard/update',
      name: 'update',
      component: Update,
      meta: {
        requiresAuth: true
      }
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth) {
    const token = sessionStorage.getItem('token')
    if (token) {
      next()
    } else {
      next('/')
    }
  } else {
    next()
  }
})

export default router
