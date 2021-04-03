import Vue from 'vue'
import VueRouter from 'vue-router'
import mainPage from "@/views/mainPage";
import profile from "@/views/loginPage";
import register from "@/views/registerPage";
import cartPage from "@/views/cartPage";
import resetPasswordPage from "@/views/resetPasswordPage"
import store from "@/stores/store";
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
    component: cartPage,
    meta: {
      requiresLogin: true
    }
  },
  {
    path: '/resetPassword',
    name: 'resetPassword',
    component: resetPasswordPage,
  },
  {path: '*', redirect: '/'}
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
router.beforeResolve(((to, from, next) => {
  const isLoggedIn = router.app.$store.getters.isLoggedIn;
  if (to.matched.some(record=> record.meta.requiresLogin) && !isLoggedIn){
    next({name:'profile'})
  }
  else if(to.name === 'cartPage'){
    router.app.$store.dispatch('LOAD_USER_CART');
    next();
  }
  else{
    next();
  }
}))
export default router
