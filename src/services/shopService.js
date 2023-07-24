import axiosClient from '../../axiosClient.js';

export default {
    getProductTypeLabel(value) {
        const label = value.replace('_', ' ')
        return label.charAt(0).toUpperCase() + label.slice(1)
    },

    async getAllProductTypes() {
        const response = await axiosClient.get()
        const filteredPproductTypes = new Set(response.data.map((el) => el['product_type']))

        const productTypes = []
        filteredPproductTypes.forEach((el) => {
            const label = el.replace('_', ' ')

            productTypes.push({
                'value': el,
                'label': label.charAt(0).toUpperCase() + label.slice(1)
            })
        })

        return productTypes
    },

    async getProductsByType(type) {
        const response = await axiosClient.get('?product_type=' + type)
        return response.data
    },

}