<template>
  <div>
    <CheckoutSuccess/>
  </div>
</template>
<script setup lang="ts">
import CheckoutSuccess from "~/components/shared/CheckoutSuccess.vue";

useHead({
  title: 'Success',
  meta: [
    { name: 'description', content: 'Browse our delicious Location options.' }
  ]
})
</script>