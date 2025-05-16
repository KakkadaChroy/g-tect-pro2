<template>
  <div class="flex items-center gap-5">
    <div v-for="item in socialFooterLinks" :key="item.id">
      <img class="h-[24px] w-[24px] object-center" :src="item.iconImage" alt="social logo" />
    </div>
  </div>
</template>
<script setup lang="ts">
import {socialFooterLinks} from "assets/ts/dummy.js";
</script>