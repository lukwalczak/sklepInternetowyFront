import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './stores/store'
import axios from "axios";

Vue.config.productionTip = false

axios.defaults.baseURL = "http://127.0.0.1:2115/";
axios.defaults.withCredentials = true;

const token = localStorage.getItem('user-token')
if (token) {
  Vue.prototype.$http.defaults.headers.common['Authorization'] = token
}

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')