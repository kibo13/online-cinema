import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '@/views/Home'
import Film from '@/views/Film'
import NotFound from '@/views/404'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/:id',
    name: 'film',
    component: Film,
    beforeEnter: (to, from, next) => {
      if (localStorage.getItem('auth')) {
        next()
      } else {
        next({ name: 'home' })
      }
    }
  },
  {
    path: '*',
    component: NotFound
  }

]

const router = new VueRouter({
  routes
})

export default router
