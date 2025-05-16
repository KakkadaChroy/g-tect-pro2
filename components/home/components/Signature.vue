<template>
  <Container>
    <div class="h-[683px] w-full flex flex-col items-center gap-5">
      <div class="text-center">
        <h2 class="text-title">{{ title }}</h2>
      </div>
      <div class="h-full min-h-full flex flex-col items-center justify-center">
        <div class="grid grid-cols-4 gap-16">
          <SignatureCard
              v-for="item in foodItems"
              :key="item.id"
              :image="item.image"
              :title="item.title"
              :description="item.description"
          />
        </div>
        <div class="py-10">
          <NuxtLink to="/menu">
            <button class="w-[219px] h-[52px] rounded-[26px] border-[#171A1F] border-2 hover:bg-[#F96540] hover:text-white sub-text transition-all duration-500 cursor-pointer">
              Explore more
            </button>
          </NuxtLink>
        </div>
      </div>
    </div>
  </Container>
</template>
<script setup lang="ts">
import SignatureCard from "~/components/ui/SignatureCard.vue";
import Container from "~/components/ui/Container.vue";
import {foodItems} from "~/components/food/core/dummy/dummy";

defineProps<{
  title?: string;
}>();
</script>