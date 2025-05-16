<template>
  <div>
    <div class="w-[368px] h-[517px] rounded-[8px] custom-shadow overflow-hidden">
      <div>
        <img class="h-[221px] w-full object-fit object-center" :src="image" alt="card" />
      </div>
      <div class="px-5 py-5 flex flex-col gap-3">
        <h5 class="font-semibold text-[16px]">{{title}}</h5>
        <p class="text-[16px]">
          {{description}}
        </p>
        <div class="flex items-center gap-3">
          <img class="h-[24px] w-[24px] object-fit object-center" :src="phoneIcon" alt="phone"/>
          <p class="text-[16px] text-[#6E7787]">{{ phone }}</p>
        </div>
        <div class="flex items-center gap-3">
          <img class="h-[24px] w-[24px] object-fit object-center" :src="locationIcon" alt="location"/>
          <p class="text-[16px] text-[#6E7787]">{{location}}</p>
        </div>
        <div class="flex items-center gap-3 py-5">
          <NuxtLink :to="`/location/delivery/${id}`">
            <button class="cursor-pointer h-[36px] px-10 rounded-[18px] border border-[#F96540] text-sm">Delivery</button>
          </NuxtLink>
          <NuxtLink :to="`/location/delivery/${id}`">
            <button class="cursor-pointer h-[36px] px-10 rounded-[18px] border border-[#765903] text-sm">Pickup</button>
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import phoneIcon from '@/assets/images/icons/Phone Icon.png';
import locationIcon from '@/assets/images/icons/Location Icon.png';
import type {ID} from "assets/ts/model";

defineProps<{
  id?: ID;
  title?: string;
  image?: string;
  description?: string;
  phone?: string;
  location?: string;
}>();
</script>