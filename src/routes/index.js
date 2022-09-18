import Main from '@/components/pages/catalog/Main'
import ContactUs from '@/components/pages/contact/ContactUs'
import Basket from '@/components/pages/basket/Basket'
import Account from '@/components/pages/user/Account'
import CardShoes from '@/components/pages/catalog/shoes/CardShoes'
import Catalog from '@/components/pages/catalog/Catalog'
import NotFound from '@/components/pages/errors/404'
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
  {
    path: '/catalog/shoes',
    component: Catalog,
    meta:{chapter: 'shoes'}
  },
  {
    path: '/catalog/shoes/:id',
    component: CardShoes
  },
  {
    path: '/404',
    component: NotFound
  },
  {
    path: "/:catchAll(.*)",
    redirect: '/404'
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
    next('/?message=needLogin')
  } else{
    next()
  }
})

export default router