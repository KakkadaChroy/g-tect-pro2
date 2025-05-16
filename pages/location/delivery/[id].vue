<template>
  <div class="pb-20 pt-10">
    <MainDelivery/>
  </div>
</template>
<script setup lang="ts">
import MainDelivery from "~/components/location/components/MainDelivery.vue";

useHead({
  title: 'Location Delivery',
  meta: [
    { name: 'description', content: 'Browse our delicious Location options.' }
  ]
})
</script>