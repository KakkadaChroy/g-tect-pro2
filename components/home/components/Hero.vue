<template>
  <div class="w-full h-[810px] overflow-hidden">
    <div class="h-full relative">
      <img class="h-full w-full object-center object-cover" :src="hero" alt="hero">
      <Container>
        <div class="absolute top-0 h-full flex justify-start items-center">
          <HeroCard/>
        </div>
      </Container>
    </div>
  </div>
</template>
<script setup lang="ts">
import hero from '../../../assets/images/hero/hero.png';
import HeroCard from "~/components/ui/HeroCard.vue";
import Container from "~/components/ui/Container.vue";
</script>