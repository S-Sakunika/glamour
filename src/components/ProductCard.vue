<template>
    <div>
        <div class="border rounded-xl border-gray-900 p-3">
            <router-link to="#">
                <img :src="getProductImageUrl(product.image_link)" :alt="product.name" class="rounded-xl"
                    :class="!imageLoaded ? 'opacity-10 object-cotain p-16 max-h-[200px] mx-auto' : 'w-full h-[200px] object-cover object-center'"
                    @error="imageErrorHandler()">
            </router-link>
        </div>
        <div class="mt-8">
            <div class="font-medium text-ellipsis whitespace-nowrap overflow-hidden">
                <router-link to="#">{{ product.name }}</router-link>
            </div>
            <div class="flex justify-between items-center mt-3">
                <div>
                    <span class="mr-1">{{ product.currency }}</span>
                    <span>{{ product.price }}</span>
                    <span>{{ product.price_sign }}</span>
                </div>
                <button id="addToCart" @click="addToCart(product.id)"
                    class="px-4 py-1 bg-gray-900 text-gray-50 rounded-md hover:bg-rose-300"
                    :class="clicked ? 'added' : ''"><span>Add to
                        cart</span><span>Added</span></button>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import store from '../store';

const { product } = defineProps(['product'])

const imageLoaded = ref(true)
const clicked = ref(false)

function getProductImageUrl(url) {
    return imageLoaded.value ? url : '/src/assets/images/placeholder.png'
}

function imageErrorHandler() {
    imageLoaded.value = false
}

function addToCart(id) {
    clicked.value = true
    store.dispatch('addToCart', id)

    setTimeout(() => {
        clicked.value = false
    }, 1500)
}
</script>

<style scoped>
#addToCart {
    position: relative;
    transition: all 500ms;
}

#addToCart.added {
    background-color: theme('colors.pink.300');
    ;
    transition: all 500ms;
}

#addToCart.added span {
    display: inline-block;
}

#addToCart span:last-child {
    position: absolute;
    right: 0;
    width: 100%;
    opacity: 0;
}

#addToCart.added span:last-child {
    animation: textzoomin 3000ms ease-in 100ms 1 normal;
}

@keyframes textzoomin {
    0% {
        transform: scale(0);
        opacity: 0;
    }

    10% {
        transform: scale(1);
        opacity: 1;
    }

    100% {
        transform: scale(1);
        opacity: 1;
    }
}

#addToCart.added span:first-child {
    animation: textzoomout 3000ms ease-out 0ms 1 normal;
}

@keyframes textzoomout {
    0% {
        transform: scale(1);
        opacity: 1;
    }

    10% {
        transform: scale(0);
        opacity: 0;
    }

    100% {
        transform: scale(0);
        opacity: 0;
    }
}
</style>