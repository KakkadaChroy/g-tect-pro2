<template>
  <Container>
    <div class="h-[314px] w-full bg-dark rounded-[8px]">
      <div class="h-full w-[568px] flex flex-col gap-5 justify-center px-10">
        <h3 class="text-white text-title">Find our locations</h3>
        <p class="sub-text text-white">Serving fresh fish daily at Boston Harbor Islands, Boylston St, Congress St, Kendall Square, Cambridge St, Haviland St.</p>
        <NuxtLink to="/location">
          <button class="w-[244px] h-[52px] rounded-[26px] bg-[#F96540] text-[18px] text-white hover:bg-white transition-all duration-500 hover:text-black cursor-pointer">
            Locations & Hours
          </button>
        </NuxtLink>
      </div>
    </div>
  </Container>
</template>
<script setup lang="ts">
import Container from "~/components/ui/Container.vue";
</script>