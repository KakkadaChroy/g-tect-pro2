<template>
  <div class="w-[368px] h-[64px] flex gap-5">
    <div
        v-for="item in customerItems"
        class="h-[64px] w-[64px] rounded-full overflow-hidden"
    >
      <img
          class="h-full w-full object-fit object-center"
          :src="item.image" alt="customers"
          :key="item.id"
      />
    </div>
    <div class="h-[64px] w-[64px] rounded-[32px] overflow-hidden flex justify-center items-center bg-[#FFF3F0]">
      <img class="h-[38px] w-[38px] object-fit object-center" :src="arrowRight" alt="arrowRight" />
    </div>
  </div>
</template>
<script setup lang="ts">
import {customerItems} from "~/components/home/core/dummy/dummy";
import arrowRight from '@/assets/images/icons/Chevron right large.png';
</script>