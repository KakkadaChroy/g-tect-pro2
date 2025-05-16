<template>
  <div>
    <HistoryHero/>
    <ModernResultSection/>
    <div class="mb-12">
      <OurLocation/>
    </div>
  </div>
</template>
<script setup lang="ts">
import HistoryHero from "~/components/our-history/components/HistoryHero.vue";
import ModernResultSection from "~/components/our-history/components/ModernResultSection.vue";
import OurLocation from "~/components/shared/OurLocation.vue";
</script>