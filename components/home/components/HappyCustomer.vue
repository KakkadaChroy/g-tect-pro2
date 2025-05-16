<template>
  <Container>
    <div class="flex justify-between">
      <div class="w-[462px] flex flex-col gap-16">
        <div class="flex flex-col gap-8">
          <h3 class="text-title">Our happy customers</h3>
          <p class="text-[24px] text-[#171A1F]">I'm a big fan of poke bowls, and this place definitely delivers. The
            quality of the ingredients is top-notch, and the variety of toppings allows you to customize your bowl.</p>
          <span class="font-semibold text-[24px]">
          Lauren Martinez
        </span>
        </div>
        <div>
          <Customer/>
        </div>
      </div>
      <div class="h-[512px] w-[512px] rounded-[8px] overflow-hidden">
        <img class="h-full w-full object-fit object-center" :src="hero" alt="hero"/>
      </div>
    </div>
  </Container>
</template>
<script setup lang="ts">
import Container from "~/components/ui/Container.vue";
import hero from '@/assets/images/hero/hero2.png';
import Customer from "~/components/shared/Customer.vue";
</script>