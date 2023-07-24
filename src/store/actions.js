import axiosClient from '../../axiosClient.js';

export default {
    async getAllProducts({ commit }) {
        const response = await axiosClient.get()
        commit('SET_PRODUCTS', response.data)
    },
    addToCart({ commit }, product) {
        commit('addToCartProducts', product)
    }
}