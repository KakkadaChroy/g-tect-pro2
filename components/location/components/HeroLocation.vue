<template>
  <div class="w-full h-[379px] overflow-hidden">
    <img class="w-full h-full object-fit object-center object-cover" :src="hero" alt="hero" />
  </div>
</template>

<script setup lang="ts">
import hero from '@/assets/images/hero/hero-location.png';
</script>