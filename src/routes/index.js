import Main from '@/components/pages/catalog/Main'
import ContactUs from '@/components/pages/contact/ContactUs'
import Basket from '@/components/pages/basket/Basket'
import Account from '@/components/pages/user/Account'
import store from '@/store/index'

import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: Main
  },
  {
    path: '/about',
    component: ContactUs
  },
  {
    meta: {auth: true},
    path: '/order/basket',
    component: Basket
  },
  {
    meta: {auth: true},
    path: '/user/account',
    component: Account
  },
]

const router = createRouter({
  routes,
  history: createWebHistory(process.env.BASE)
})

router.beforeEach((to, from, next)=>{
  const isAuth = store.state.isAuth
  const requiredAuth = to.matched.some(record => record.meta.auth)
  if (requiredAuth && isAuth === false) {
    next('/')
  } else{
    next()
  }
})

export default router