<template>
    <div class="grid grid-cols-3 gap-4">
        <div>
            <img src="../assets/images/black-woman-with-light-pink-lips-sending-kiss.jpg"
                alt="black woman with light pink lips sending kiss" class="h-[600px] w-full object-cover rounded-xl">
        </div>
        <div class="mt-24">
            <img src="..//assets/images/black-woman-with-metallic-eyeshadows-bright-pink-lips.jpg"
                alt="black woman with light pink lips sending kiss" class="h-[600px] w-full object-cover rounded-xl">
        </div>
        <div class="flex flex-col justify-center px-8 text-right items-end">
            <img src="/logo.png" alt="Glamour logo" class="w-[150px]">
            <h1 class="mt-16 text-4xl font-bold text-gray-300 font-display leading-[1.6em]">Transform Your <span
                    class="bg-gray-900 text-white px-1">Look</span><br>
                <span class="bg-gray-900 text-white px-1">Transform</span> Your
                Confidence!
            </h1>
        </div>
    </div>
    <ProductDisplay v-for="(pType, index) in productsByType" :key="index" :pType="pType" :pTypeId="index" />
</template>

<script setup>
import { onMounted, computed, ref } from 'vue';
import store from '../store';
import ProductDisplay from '../components/ProductDisplay.vue';

const products = computed(() => store.state.products)

const productsByType = computed(() => {
    return products.value.reduce((r, a) => {
        r[a.product_type] = r[a.product_type] || [];
        r[a.product_type].push(a);
        return r;
    }, Object.create(null));
})

onMounted(() => {
    store.dispatch('getAllProducts')
})
</script>