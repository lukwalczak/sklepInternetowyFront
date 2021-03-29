import axios from "../services/axiosinstance";
export default {
    state: {
        status: '',
        token: localStorage.getItem('token') || '',
        user: {
            id: '',
            email: '',
            roles: []
        }
    },
    getters : {
        isLoggedIn: state => !!state.token,
        authStatus: state => state.status,
        userId: state => state.user.id,
        userEmail: state => state.user.email,
        userRoles: state => state.user.roles,
    },
    mutations: {
        set_user_data(state, payload){
            state.user.id = payload.id;
            state.user.email = payload.email;
            state.user.roles = payload.roles;
        },
        auth_request(state){
            state.status = 'loading'
        },
        auth_success(state, token){
            state.status = 'success'
            state.token = token
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
                            localStorage.setItem('token', token);
                            axios.defaults.headers.common['Authorization'] = 'Bearer '+ token;
                            commit('auth_success',token);
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
        GET_USERDATA: ({commit})=> {
            return new Promise(((resolve, reject) => {
                axios.defaults.headers.common['Authorization'] = 'Bearer '+ localStorage.getItem('token');
                axios
                    .get('userData')
                    .then(({data, status}) =>{
                        if (status === 200){
                            commit('set_user_data', data);
                            resolve(true);
                        }
                    })
                    .catch(error => {
                        commit('auth_error');
                        reject(error);
                    });
            }));
        },

    }
}