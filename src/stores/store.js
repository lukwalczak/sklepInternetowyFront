import Vue from 'vue'
import Vuex from 'vuex'
import User from './user.js'
import Products from './products.js'

Vue.use(Vuex);

export default  new Vuex.Store({
    modules: {
        user: User,
        products: Products,
    }
});