<template>
  <div class="h-[678px] w-[678px] rounded-full border-[5px] border-[#FCDD80]">
    <div class="h-full w-full relative">
      <div class="h-full w-full flex items-center absolute -left-50">
        <img class="w-[463px] h-[463px] object-fit object-center" :src="food1" alt="food1" />
      </div>
      <div class="h-full w-full flex items-start absolute z-50 -top-25 -right-[57%]">
        <img class="h-auto w-auto object-fit object-center" :src="food2" alt="food2" />
      </div>
      <div class="h-full w-full flex items-end absolute z-50 -bottom-20 -right-[57%]">
        <img class="h-auto w-auto object-fit object-center" :src="food3" alt="food3" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import food1 from '../../../assets/images/foods/food1.png';
import food2 from '../../../assets/images/foods/food2.png';
import food3 from '../../../assets/images/foods/food3.png';
</script>