<template>
  <div>
    <MainLocation/>
  </div>
</template>
<script setup lang="ts">
import MainLocation from "~/components/location/MainLocation.vue";


useHead({
  title: 'Location',
  meta: [
    { name: 'description', content: 'Browse our delicious Location options.' }
  ]
})
</script>