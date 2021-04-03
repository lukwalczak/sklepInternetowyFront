import axios from "src/services/axiosinstance";
export default {
    state:{
        cart:[],
    },
    getters:{
        getCart: state => state.cart,
    },
    mutations:{
        addCartItem(state, id){

        }
    },
    actions:{
        LOAD_USER_CART(){
            return new Promise(()=>{

            })
        }
    },
}