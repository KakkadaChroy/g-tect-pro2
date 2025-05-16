<template>
  <div>
    <Header/>
    <main>
      <NuxtLayout>
        <NuxtPage/>
      </NuxtLayout>
    </main>
    <Footer/>
  </div>
</template>
<script setup lang="ts">
import Header from "~/common/layouts/components/Header.vue";
import Footer from "~/common/layouts/components/Footer.vue";
</script>