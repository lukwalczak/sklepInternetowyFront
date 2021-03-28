import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './stores/store'
import axios from "axios";

Vue.config.productionTip = false

axios.defaults.baseURL = "http://127.0.0.1:2115/";
axios.defaults.withCredentials = true;
// if (localStorage.getItem('token')){
//   axios.defaults.headers.common['Authorization'] = 'Bearer '+ localStorage.getItem('token');
// }

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')