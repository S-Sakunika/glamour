export default {
    SET_PRODUCTS(state, products) {
        state.products = products
    },
    addToCartProducts(state, product) {
        state.cartProducts.push(product)
    }
}