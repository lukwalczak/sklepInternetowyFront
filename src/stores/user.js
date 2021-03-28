import axios from "axios";
export default {
    state: {
        status: '',
        token: localStorage.getItem('token') || '',
        user : {}
    },
    getters : {
        isLoggedIn: state => !!state.token,
        authStatus: state => state.status,
    },
    mutations: {
        auth_request(state){
            state.status = 'loading'
        },
        auth_success(state, token, user){
            state.status = 'success'
            state.token = token
            state.user = user
        },
        auth_error(state){
            state.status = 'error'
        },
        logout(state){
            state.status = ''
            state.token = ''
        },
    },
    actions: {
        LOGIN: ({commit}, payload) => {
            return new Promise(((resolve, reject) => {
                commit('auth_request');
                axios
                    .post('login_check',payload, {withCredentials: false})
                    .then(({data, status}) =>{
                        if (status === 200) {
                            const token = data.token;
                            const user = data.user;
                            localStorage.setItem('token', token);
                            axios.defaults.headers.common['Authorization'] = 'Bearer '+token;
                            commit('auth_success',token,user);
                            resolve(true);
                        }
                    })
                    .catch(error => {
                        commit('auth_error');
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
    }
}