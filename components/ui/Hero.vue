<template>
  <div class="w-full h-[379px] overflow-hidden">
    <img class="w-full h-full object-fit object-center object-cover" :src="image" alt="hero" />
  </div>
</template>

<script setup lang="ts">
defineProps<{
  image?: string;
}>();
</script>