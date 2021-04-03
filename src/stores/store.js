import Vue from 'vue'
import Vuex from 'vuex'
import User from './user.js'
import Products from './products.js'
import Cart from "./cart.js";

Vue.use(Vuex);

export default  new Vuex.Store({
    modules: {
        user: User,
        products: Products,
        cart: Cart
    }
});