import axios from "../services/axiosinstance";
export default {
    state:{
        cart:[],
    },
    getters:{
        getCart: state => state.cart,
    },
    mutations:{
        addCartItem(state, id){
            console.log("1")
            if(Array.isArray(id)){
                state.cart = state.cart.concat(id)
                console.log("2")
            }
            else {
                state.cart.push(id);
            }
        }
    },
    actions:{
        LOAD_USER_CART:({commit},payload)=>{
            return new Promise((resolve, reject)=>{
                axios.defaults.headers.common['Authorization'] = 'Bearer '+ localStorage.getItem('token');
                axios
                    .get('userData/cart')
                    .then(({data})=>{
                        console.log(data+"DATA");
                        commit('addCartItem',data);
                    })
                    .catch(error =>{

                    })
            })
        },
        ADD_TO_CART:({commit},payload)=>{
            return new Promise((resolve,reject)=>{
                axios.defaults.headers.common['Authorization'] = 'Bearer '+ localStorage.getItem('token');
                if (!Array.isArray(payload))
                {
                    payload = [payload];
                }
                axios
                    .post('/userData/cart/add', payload);
            })
        }
    },
}