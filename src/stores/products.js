import axios from "../services/axiosinstance";
export default {
    state: {
        status: false,
        products: [],
    },
    getters: {
        getProductsState: state => state.status,
        getProducts: state => state.products,
        // getGameUrl(gameID): state => state.products.
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
                            let products = data
                            commit('updateProductList', products);
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