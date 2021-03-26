import Vue from 'vue'
import VueRouter from 'vue-router'
import mainPage from "@/views/mainPage";
import profile from "@/views/profile";
import register from "@/views/register";
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
  {path: '*', redirect: '/'}
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
