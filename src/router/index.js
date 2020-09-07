import Vue from 'vue'
import Router from 'vue-router'

import { initCurrentUserStateMiddleware, checkAccessMiddleware, setPageTitleMiddleware } from './middlewares'
import { routes } from './routes'

import { auth } from '../services/firebase'

Vue.use(Router)

const router = new Router({
  linkActiveClass: 'is-active',
  mode: 'history',
  routes
})

router.beforeEach(initCurrentUserStateMiddleware)
router.beforeEach(checkAccessMiddleware)
router.beforeEach(setPageTitleMiddleware)

router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(x => x.meta.requiresAuth)

  if (requiresAuth && !auth.currentUser) {
    next('/login')
  } else {
    next()
  }
})

export default router
