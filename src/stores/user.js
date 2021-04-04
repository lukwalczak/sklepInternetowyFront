import axios from "../services/axiosinstance";
import store from "@/stores/store";
export default {
    state: {
        status: '',
        token: localStorage.getItem('token') || '',
        user: {
            id: '',
            email: '',
            roles: [],
            orders: [],
        }
    },
    getters : {
        isLoggedIn: state => !!state.token,
        authStatus: state => state.status,
        userId: state => state.user.id,
        userEmail: state => state.user.email,
        userRoles: state => state.user.roles,
        userCart: state => state.user.cart,
        userOrders: state => state.user.orders,
    },
    mutations: {
        setUserData(state, payload){
            state.user.id = payload.id;
            state.user.email = payload.email;
            state.user.roles = payload.roles;
        },
        authRequest(state){
            state.status = 'loading';
        },
        authSuccess(state, token){
            state.status = 'success';
            state.token = token;
        },
        authError(state){
            state.status = 'error';
        },
        logout(state){
            state.status = '';
            state.token = '';
        },
        setUserOrders(state, order){
          state.user.orders = order;
        },
    },
    actions: {
        LOGIN: ({commit}, payload) => {
            return new Promise(((resolve, reject) => {
                commit('authRequest');
                axios
                    .post('login_check',payload, {withCredentials: false})
                    .then(({data, status}) =>{
                        if (status === 200) {
                            const token = data.token;
                            localStorage.setItem('token', token);
                            axios.defaults.headers.common['Authorization'] = 'Bearer '+ token;
                            commit('authSuccess',token);
                            resolve(true);
                        }
                    })
                    .catch(error => {
                        commit('authError');
                        localStorage.removeItem('token')
                        reject(error);
                    });
            }));
        },
        REGISTER: ({commit}, payload) => {
            return new Promise(((resolve, reject) => {
                axios
                    .post('register',payload)
                    .then(({data, status}) =>{
                        if (status === 201) {
                            resolve(true);
                        }
                    })
                    .catch(error => {
                        reject(error);
                    });
            }));
        },
        GET_USERDATA: ({commit})=> {
            return new Promise(((resolve, reject) => {
                axios.defaults.headers.common['Authorization'] = 'Bearer '+ localStorage.getItem('token');
                axios
                    .get('userData')
                    .then(({data, status}) =>{
                        if (status === 200){
                            commit('setUserData', data);
                            resolve(true);
                        }
                    })
                    .catch(error => {
                        commit('authError');
                        reject(error);
                    });
            }));
        },
        CHANGE_PASSWORD: ({commit},payload)=>{
            return new Promise(((resolve, reject) => {
                axios
                    .patch('restore',payload, {withCredentials: false})
                    .then(({status})=>{
                        if (status===200)
                        {
                            resolve(true);
                        }
                    })
                    .catch(error=>{
                        reject(false);
                    })
            }))
        },
        GET_USER_ORDERS: ({commit})=>{
          return new Promise(((resolve, reject) => {
              axios.defaults.headers.common['Authorization'] = 'Bearer '+ localStorage.getItem('token');
              axios
                  .get('/orders')
                  .then(({data})=>{
                      commit('setUserOrders',data);
                      resolve(true);
                  })
                  .catch(error=>{
                      reject(error);
                  })
          }))
        },
    },
}