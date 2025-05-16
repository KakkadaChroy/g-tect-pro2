<template>
  <div class="flex gap-5">
    <div v-for="item in socialLinks" :key="item.id">
      <div
          class="h-[44px] w-[44px] rounded-full overflow-hidden flex justify-center items-center"
          :style="{ backgroundColor: item.color }"
      >
        <img class="h-[20px] w-[20px] object-fit object-center" :src="item.iconImage" alt="icon" />
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import {socialLinks} from "assets/ts/dummy.js";
</script>