<template>
  <div>
    <div>
      <h1 class="text-title text-center py-10">Locations & Hours</h1>
    </div>
    <Container>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 pb-10">
        <LocationCard
            v-for="item in locationsItems"
            :key="item.id"
            :id="item.id"
            :image="item.image"
            :title="item.address"
            :description="item.hours"
            :location="item.email"
            :phone="item.phone"
        />
      </div>
    </Container>
  </div>
</template>

<script setup lang="ts">
import LocationCard from "~/components/ui/LocationCard.vue";
import Container from "~/components/ui/Container.vue";
import {locationsItems} from "~/components/location/core/dummy/dummy";
</script>