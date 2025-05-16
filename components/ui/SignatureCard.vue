<template>
  <div class="h-[292px] w-[267px] rounded-[8px] custom-shadow relative">
    <div class="h-full flex flex-col justify-end gap-3 px-5 py-5">
      <h3 class="text-[18px]">{{ title }}</h3>
      <p class="text-[12px] sub-text">
        {{ description }}
      </p>
      <NuxtLink to="/location">
        <button
            @click="handleClick"
            class="w-[94px] h-[36px] rounded-[18px] bg-[#FFF3F0] hover:bg-[#F96540] transition-all duration-500 hover:text-white text-[14px] text-[#F96540] cursor-pointer">
          Order Now
        </button>
      </NuxtLink>
    </div>
    <div class="absolute -top-[40%] left-0 right-0 w-full flex justify-center">
      <img class="h-[219px] w-[219px] object-center" :src="image" alt="card"/>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  image?: string;
  title?: string;
  description?: string;
  handleClick?: () => void;
}>();
</script>