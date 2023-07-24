<template>
    <div class="grid grid-cols-5 gap-10 mt-24">
        <div class="bg-gray-900 rounded-xl text-gray-50 flex items-center justify-center tracking-wider">
            {{ getProductTypeLabel(pTypeId) }}
        </div>
        <div v-for="(p, index) in getProductsInDispalay(pType)" :key="index">
            <ProductCard :product="p" />
        </div>
    </div>
</template>

<script setup>
import shopService from '../services/shopService.js'
import ProductCard from './ProductCard.vue'

const { pType, pTypeId } = defineProps(['pType', 'pTypeId'])

function getProductTypeLabel(getProductTypeLabel) {
    return shopService.getProductTypeLabel(getProductTypeLabel);
}

function getProductsInDispalay(products) {
    return products.slice(0, 4);
}
</script>