<template>
  <ul class="flex items-center gap-5">
    <li v-for="item in navItems">
      <NuxtLink
          :to="item.path" :key="item.id"
          class="text-[16px]"
          :class="customTextColor"
          exact-active-class="text-[#F6A200] text-[16px]"
      >
        {{ item.name }}
      </NuxtLink>
    </li>
  </ul>
</template>
<script setup lang="ts">
import {navItems} from "assets/ts/dummy";
defineProps<{
  customTextColor?: string;
}>();
</script>