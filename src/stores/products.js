import axios from "../services/axiosinstance";
export default {
    state: {
        status: false,
        products: [],
    },
    getters: {
        getProductsState: state => state.status,
        getProducts: state => state.products,
        getGameUrl: (state) => (id) => {
            return state.products.find(game => game.id === id).imageURL;
        },
        getGameName: (state) => (id) => {
            return state.products.find(game => game.id === id).productName;
        }
    },
    mutations: {
        updateProductList(state, productList){
            state.products = productList;
        },
        loadedProductsState(state){
            state.status = true;
        },
        loadingProductsState(state){
            state.status = false;
        }
    },
    actions: {
        GET_PRODUCT_LIST: ({commit})=>{
            return new Promise( (resolve, reject) => {
                commit('loadingProductsState');
                axios
                    .get('products/get', {withCredentials: false})
                    .then(({data, status})=>{
                        if (status===200){
                            commit('updateProductList', data);
                            commit('loadedProductsState');
                            resolve(true);
                        }
                    })
                    .catch(error => {
                        reject(error);
                    })
                }
            );
        }
    },
}