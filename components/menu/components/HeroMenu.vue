<template>
  <div class="h-[379px] w-full overflow-hidden">
    <img class="h-full w-full object-fit object-center object-cover" :src="hero" alt="hero" />
  </div>
</template>
<script setup lang="ts">
import hero from '@/assets/images/hero/menu-hero.png';
</script>