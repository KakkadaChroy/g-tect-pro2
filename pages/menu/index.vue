<template>
  <div>
    <MainMenu/>
  </div>
</template>
<script setup lang="ts">
import MainMenu from "~/components/menu/MainMenu.vue";

useHead({
  title: 'Menu',
  meta: [
    { name: 'description', content: 'Browse our delicious menu options.' }
  ]
})
</script>