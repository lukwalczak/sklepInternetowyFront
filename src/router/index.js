import Vue from 'vue'
import VueRouter from 'vue-router'
import mainPage from "@/views/mainPage";
import profile from "@/views/loginPage";
import register from "@/views/registerPage";
import cartPage from "@/views/cartPage";
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: mainPage
  },
  {
    path: '/profile',
    name: 'profile',
    component: profile,
  },
  {
    path: '/register',
    name: 'register',
    component: register
  },
  {
    path: '/cart',
    name: 'cartPage',
    component: cartPage
  },
  {path: '*', redirect: '/'}
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
