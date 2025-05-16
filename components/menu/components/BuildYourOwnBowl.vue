<template>
  <Container>
    <div class="flex flex-col items-center">
      <div class="pb-10">
        <h2 class="text-title text-center">Build Your Own Bowl</h2>
      </div>
      <div v-for="item in yourOwnCardItems">
        <BuildYourOwnCard
            :key="item.id"
            :number="item.number"
            :step="item.step"
            :title="item.title"
            :content="item.content"
        />
      </div>
      <div class="w-full flex justify-center pb-10">
        <button class="w-[219px] h-[52px] text-white rounded-[26px] text-[18px] bg-[#F96540]">Order Now</button>
      </div>
    </div>
  </Container>
</template>
<script setup lang="ts">
import BuildYourOwnCard from "~/components/ui/BuildYourOwnCard.vue";
import Container from "~/components/ui/Container.vue";
import {yourOwnCardItems} from "~/components/menu/core/dummy/dummy";
</script>