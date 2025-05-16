<template>
  <div>
    <div class="flex items-center gap-3">
      <h1 class="text-[80px] text-[#F96540] opacity-[20%]">{{ number }}</h1>
      <div class="flex flex-col gap-3">
        <span class="text-[16px] text-[#565E6C]">{{ step }}</span>
        <span class="font-bold text-[24px]">{{ title }}</span>
      </div>
    </div>
    <div class="min-h-full justify-center grid grid-cols-4 gap-10 pb-16">
      <div v-for="item in content" :key="item.id">
        <div class="w-[206px] flex flex-col gap-3 text-center items-center mx-10">
          <div class="h-[206px] w-[206px] rounded-full overflow-hidden">
            <img class="h-full w-full object-fit object-center" :src="item.imageSrc" :alt="item.name"/>
          </div>
          <span class="font-semibold text-[18px]">{{ item.name }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type {ContentModel} from "~/components/menu/core/model";

defineProps<{
  number?: number;
  step?: string;
  title?: string;
  content?: ContentModel[];
}>();
</script>