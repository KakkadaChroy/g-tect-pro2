<template>
  <div>
    <Hero :image="heroImage"/>
    <Container>
      <div v-if="storedItems" class="py-20">
        <h2 class="text-[38px]">{{ storedItems.address.split(',')[0] }}</h2>
        <div class="flex justify-between items-end">
          <div class="flex flex-col gap-3 py-5">
            <div class="flex items-center gap-2">
              <img :src="locationIcon" alt="locationIcon"/>
              <span class="text-[16px]">{{ storedItems.address.split(',').slice(1).join(',').trim() }}</span>
              <NuxtLink to="/location" class="text-[#379AE6] border-b">Change Location</NuxtLink>
            </div>
            <div class="flex items-center gap-2">
              <img :src="clickIcon" alt="clickIcon"/>
              <span class="text-[16px]">{{ storedItems.hours }}</span>
            </div>
          </div>
          <div class="w-[157px] h-[36px] border border-[#FCDD80] flex items-center rounded-[4.5px]">
            <button class="w-[77px] h-full text-[#765903] text-sm bg-[#FCDD80]">Delivery</button>
            <button class="w-[77px] h-full text-[#765903] text-sm">Pickup</button>
          </div>
        </div>
      </div>
      <div>
        <h2 class="text-[24px]">Menu</h2>
        <div class="grid grid-cols-4 gap-16 pt-36 pb-16">
          <BuildYourOwnBowlCard
              v-for="item in foodItems"
              :key="item.id"
              :id="item.id"
              :image="item.image"
              :title="item.title"
              :description="item.description"
              :price="item.price"
          />
        </div>
      </div>
      <div>
        <h2 class="text-[24px]">Drink</h2>
        <div class="grid grid-cols-4 gap-16 py-36">
          <DrinkCard
              v-for="item in drinkItems"
              :key="item.id"
              :image="item.image"
              :name="item.name"
              :price="item.price"
          />
        </div>
      </div>
    </Container>
    <div>
      <Teleport to="body">
        <transition
            enter-active-class="transition duration-300 ease-out"
            enter-from-class="transform scale-95 opacity-0 translate-y-4"
            enter-to-class="transform scale-100 opacity-100 translate-y-0"
            leave-active-class="transition duration-200 ease-in"
            leave-from-class="transform scale-100 opacity-100 translate-y-0"
            leave-to-class="transform scale-95 opacity-0 translate-y-4"
        >
          <Modal/>
        </transition>
      </Teleport>
    </div>
  </div>
</template>

<script setup lang="ts">
import {drinkItems, locationsItems} from "~/components/location/core/dummy/dummy";
import Hero from "~/components/ui/Hero.vue";
import heroImage from '@/assets/images/hero/hero-5.png';
import locationIcon from '@/assets/images/icons/Location Icon.png';
import clickIcon from '@/assets/images/icons/Clock Icon.png';
import type {PokeBarLocation} from "~/components/location/core/model";
import Container from "~/components/ui/Container.vue";
import {foodItems} from "~/components/food/core/dummy/dummy";
import DrinkCard from "~/components/ui/DrinkCard.vue";
import Modal from "~/components/ui/Modal.vue";
import BuildYourOwnBowlCard from "~/components/ui/BuildYourOwnBowlCard.vue";

// get id from params
const route = useRoute();
const id = String(route.params.id);
const parsId = parseInt(id);

// state
const storedItems = ref<PokeBarLocation | null>(null);

// find data from list
onMounted(() => {
  storedItems.value = locationsItems.find(item => item.id === parsId) || null;
})


useHead({
  title: 'Location Menu',
  meta: [
    { name: 'description', content: 'Browse our delicious Location options.' }
  ]
})
</script>