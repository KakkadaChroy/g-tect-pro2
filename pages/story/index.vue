<template>
  <div>
    <MainHistory/>
  </div>
</template>
<script setup lang="ts">
import MainHistory from "~/components/our-history/MainHistory.vue";


useHead({
  title: 'Our Story',
  meta: [
    { name: 'description', content: 'Browse our delicious our story options.' }
  ]
})
</script>