<template>
  <div class="container mx-auto">
    <div class="p-4">
      <RouterView />
    </div>
    <Footer />
  </div>
</template>

<script setup>
import Footer from './components/Footer.vue'
</script>