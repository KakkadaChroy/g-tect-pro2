<template>
  <div>
    <HeroMenu/>
    <MenuList/>
    <BuildYourOwnBowl/>
    <div class="py-20">
      <HappyCustomer/>
    </div>
    <div class="pb-10">
      <OurLocation/>
    </div>
  </div>
</template>
<script setup lang="ts">
import HeroMenu from "~/components/menu/components/HeroMenu.vue";
import MenuList from "~/components/menu/components/MenuList.vue";
import BuildYourOwnBowl from "~/components/menu/components/BuildYourOwnBowl.vue";
import HappyCustomer from "~/components/home/components/HappyCustomer.vue";
import OurLocation from "~/components/shared/OurLocation.vue";
</script>