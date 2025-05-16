<template>
  <div class="h-[150vh] w-full flex items-center mt-24 overflow-x-hidden">
    <div class="h-full flex justify-between items-center">
      <Container>
        <h2 class="text-title">Traditional Heritage, Modern Result</h2>
        <p class="sub-text">One of the reasons for poke's popularity is its versatility. While the traditional version
          remains a favorite, there are now numerous variations available, allowing people to customize their poke bowls
          according to their preferences. </p>
      </Container>
      <div class="h-full w-full relative">
        <div class="h-full w-full flex items-center justify-center absolute -right-50 top-0">
          <ModernRightContent/>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import Container from "~/components/ui/Container.vue";
import ModernRightContent from "~/components/our-history/components/ModernRightContent.vue";
</script>