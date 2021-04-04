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
            if(Array.isArray(id)){
                state.cart = state.cart.concat(id)
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
                    payload = {"games":[payload]};
                }
                axios
                    .post('/userData/cart/add', payload)
                    .then(({data, status}) =>{
                        if (status === 201) {
                            resolve(true);
                        }
                    })
                    .catch(error => {
                        reject(error);
                    });
            })
        },
        REMOVE_FROM_CART:({commit},payload)=>{
            return new Promise((resolve,reject)=>{
                axios.defaults.headers.common['Authorization'] = 'Bearer '+ localStorage.getItem('token');
                axios
                    .delete(`/userData/cart/remove/${payload}`)
                    .then(({data, status}) =>{
                        if (status === 201) {
                            resolve(true);
                        }
                    })
                    .catch(error => {
                        reject(error);
                    });
            })
        }
    },
}