import Vue from 'vue'
import routers from './routers'
import Router from 'vue-router'
import { getToken } from '@/utils/auth'
Vue.use(Router)
const router = new Router({
  mode: 'history',
  routes: routers
})
router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requireAuth)) {
    let localtoken = getToken()
    if (!localtoken) {
      next({path: '/login'})
    } else {
      console.log(111)
      next()
    }
  } else {
    next()
  }
  // if (to.matched.some(record => record.meta.requireAuth)) {
  //   let localtoken = getToken()
  //   if (!localtoken) {
  //     next({path: '/login', query: {redirect: to.fullPath}})
  //   }
  // } else {
  //   next()
  // }
})
export default router
