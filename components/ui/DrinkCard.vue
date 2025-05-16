<template>
  <div class="h-[240px] w-[267px] rounded-[8px] custom-shadow relative">
    <div class="h-full flex flex-col justify-end gap-3 px-5 py-5">
      <h3 class="text-[18px]">{{ name }}</h3>
      <div class="flex justify-between items-center">
        <p class="text-[18px] font-semibold">
          ${{ price }} {{qty}}
        </p>
        <button
            @click="handleCheckout"
            class="w-[94px] h-[36px] rounded-[18px] bg-[#FFF3F0] text-[14px] text-[#F96540] transition-colors hover:bg-[#F96540] hover:text-white">
          {{ isItemInCart ? 'Added' : 'Add to card' }}
        </button>
      </div>
    </div>
    <div class="absolute -top-[45%] left-0 right-0 w-full flex justify-center">
      <img class="h-[219px] w-[219px] object-center" :src="image" alt="card"/>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import type {ID} from "assets/ts/model";
import {useOrderStore} from "~/stores/order";
import type {DrinkModel} from "~/components/location/core/model";

const props = defineProps<{
  id?: ID;
  image?: string;
  name?: string;
  price?: number;
}>();

const orderStore = useOrderStore();

// Check if this item is in the cart
const isItemInCart = computed(() => {
  return orderStore.drinkCardItems.some(drink => drink.id === props.id);
});

// Function
const handleCheckout = () => {
  if (isItemInCart.value) return;
  orderStore.isAdded = true;
  const newDrink: DrinkModel = {
    id: props.id,
    name: props.name,
    image: props.image,
    price: props.price
  }
  orderStore.addDrinkToCart(newDrink);
};
</script>
