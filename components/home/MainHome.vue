<template>
  <div>
    <Hero/>
    <Poke/>
    <Signature title="Signature Bowls"/>
    <HappyCustomer/>
    <div class="py-20">
      <OurLocation/>
    </div>
  </div>
</template>
<script setup lang="ts">
import Hero from "~/components/home/components/Hero.vue";
import Poke from "~/components/home/components/Poke.vue";
import Signature from "~/components/home/components/Signature.vue";
import HappyCustomer from "~/components/home/components/HappyCustomer.vue";
import OurLocation from "~/components/shared/OurLocation.vue";
</script>