<template>
  <header class="h-[80px] w-full bg-white flex items-center sticky top-0 left-0 right-0 z-[99]">
    <Container>
      <nav class="h-full flex items-center justify-between">
        <!--logo-->
        <div>
          <NuxtLink to="/home">
            <img class="h-[48px] w-[155px] object-center" :src="logo" alt="logo">
          </NuxtLink>
        </div>
        <!--menu-->
        <div>
          <NavMenu customTextColor="text-[#424955]"/>
        </div>
        <!--button-->
        <div class="flex items-center gap-5">
          <span class="text-[#171A1F] text-[16px]">Order Online</span>
          <button class="w-[126px] h-[44px] rounded-[22px] bg-[#171A1F] text-white text-[16px]">
            Book a Table
          </button>
        </div>
      </nav>
    </Container>
  </header>
</template>

<script setup lang="ts">
import logo from '../../../assets/images/logo/logo.png';
import Container from "~/components/ui/Container.vue";
import NavMenu from "assets/helpers/components/NavMenu.vue";
</script>