import Main from '@/components/pages/catalog/Main'
import ContactUs from '@/components/pages/contact/ContactUs'
import Basket from '@/components/pages/basket/Basket'
import Account from '@/components/pages/user/Account'

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
    path: '/order/basket',
    component: Basket
  },
  {
    path: '/user/account',
    component: Account
  },
]

const router = createRouter({
  routes,
  history: createWebHistory(process.env.BASE)
})

export default router