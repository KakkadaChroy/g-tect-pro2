<template>
  <div>
    <Checkout/>
  </div>
</template>
<script setup lang="ts">
import Checkout from "~/components/shared/Checkout.vue";

useHead({
  title: 'Location Checkout',
  meta: [
    { name: 'description', content: 'Browse our delicious Location options.' }
  ]
})
</script>