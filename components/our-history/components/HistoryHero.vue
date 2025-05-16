<template>
  <div class="w-full h-[450px]">
    <div class="relative">
      <img class="h-full w-full object-fit object-center" :src="hero" alt="hero"/>

      <!--Card Content-->
      <div class="h-full w-full absolute -bottom-50 right-0 left-0 z-20 flex justify-center">
        <div class="w-[738px] h-[532px] rounded-[8px] bg-white custom-shadow p-8">
          <div class="flex flex-col gap-3">
            <h1 class="text-title text-center">Our story begins</h1>
            <p class="sub-text">At Poke Now, we believe fast food should be fresh food. From our premium ingredients to
              our
              exceptional service, eating healthy has never been easier—or more enjoyable! </p>
            <div class="flex flex-col gap-3 py-3">
              <h5 class="text-dark text-[24px] font-semibold">What's poke</h5>
              <p class="text-[18px] text-dark">Poke is a traditional Hawaiian dish that typically consists of diced raw
                fish
                (such as tuna or salmon) marinated in soy sauce and other flavorful ingredients. It is often served over
                a
                bed of rice and topped with various toppings like seaweed, cucumber, avocado, and sesame seeds.</p>
              <div class="flex justify-center items-center pt-16">
                <button
                    @click="navigateTo('/menu')"
                    class="h-[52px] w-[219px] rounded-[26px] bg-[#F96540]">
                  Order Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import hero from '@/assets/images/hero/hero-story.png';
import HeroContent from "~/components/our-history/components/HeroContent.vue";
</script>