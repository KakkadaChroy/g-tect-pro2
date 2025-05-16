<template>
  <div class="h-[292px] w-[267px] rounded-[8px] custom-shadow relative">
    <div class="h-full flex flex-col justify-end gap-3 px-5 py-5">
      <h3 class="text-[18px]">{{ title }}</h3>
      <p class="text-[12px] sub-text">
        {{ description }}
      </p>
      <div class="flex justify-between items-center">
        <span class="text-[18px] font-semibold">${{ price }}</span>
        <button
            @click="openModalWithId"
            class="w-[94px] h-[36px] rounded-[18px] bg-[#FFF3F0] text-[14px] text-[#F96540] cursor-pointer">
          Add to cart
        </button>
      </div>
    </div>
    <div class="absolute -top-[40%] left-0 right-0 w-full flex justify-center">
      <img class="h-[219px] w-[219px] object-center" :src="image" alt="card"/>
    </div>
  </div>
</template>

<script setup lang="ts">

import type {ID} from "assets/ts/model";
import {useOrderStore} from "@/stores/order";

const orderStore = useOrderStore();

const props = defineProps<{
  id: ID;
  image?: string;
  title?: string;
  description?: string;
  price?: number;
}>();

// Function
const openModalWithId = () => {
  console.log('Opening modal with ID:', props.id);
  orderStore.handleOpen(props.id);
};

</script>