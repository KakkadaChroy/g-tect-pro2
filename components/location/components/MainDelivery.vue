<template>
  <div class="max-w-7xl mx-auto p-4">
    <div class="flex flex-col md:flex-row justify-between gap-6">
      <!-- Left Column -->
      <div class="w-full md:w-2/5">
        <!-- Delivery/Pickup Toggle -->
        <div class="flex rounded-lg overflow-hidden mb-6 w-fit">
          <button
              :class="[
              'px-6 py-2 focus:outline-none',
              deliveryMethod === 'delivery' ? 'bg-yellow-200 font-medium' : 'bg-gray-100 hover:bg-gray-200'
            ]"
              @click="deliveryMethod = 'delivery'"
          >
            Delivery
          </button>
          <button
              :class="[
              'px-6 py-2 focus:outline-none',
              deliveryMethod === 'pickup' ? 'bg-yellow-200 font-medium' : 'bg-gray-100 hover:bg-gray-200'
            ]"
              @click="deliveryMethod = 'pickup'"
          >
            Pickup
          </button>
        </div>

        <!-- Location Search -->
        <div class="mb-6">
          <p class="text-gray-700 mb-2">Find nearby locations to order from</p>
          <div class="relative">
            <div class="absolute inset-y-0 left-3 flex items-center pointer-events-none">
              <img :src="searchIcon" alt="searchIcon"/>
            </div>
            <input
                @input="onChangeInput"
                type="text"
                placeholder="Find a store near you"
                class="w-full pl-10 pr-4 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
            />
          </div>
        </div>

        <!-- Store Listings -->
        <div class="overflow-auto max-h-[600px] pr-2">
          <!-- Store 1 - Active/Selected -->
          <div v-for="item in filteredStores">
            <div
                :class="['rounded-lg overflow-hidden mb-3 p-4',
                item.id === parsId ? 'bg-orange-500 text-white' : 'shadow-sm text-dark'
            ]">
              <div class="flex items-start">
                <div class="mr-3 mt-1">
                  <img :src="locationIcon" alt="locationIcon"/>
                </div>
                <div class="flex-1">
                  <h3 class="font-semibold text-lg">{{ item.address.split(',')[0] }}</h3>
                  <p class="text-sm mb-3">{{ item.address }}</p>
                  <div class="flex justify-between items-center">
                    <NuxtLink :to="`/location/menu/${item.id}`">
                      <button
                          class="cursor-pointer w-[200px] h-[36px] border border-[#F96540] bg-white text-[#F96540] rounded-full">
                        Select
                      </button>
                    </NuxtLink>
                    <div class="flex">
                      <span class="text-sm">{{ item.km }}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Right Column - Map -->
      <div class="w-[552px] h-[736px] bg-gray-100 rounded-lg overflow-hidden relative">
        <img :src="map" alt="map"/>
        <div class="absolute z-20 top-50 left-30">
          <img class="h-[51px] w-[51px] object-fit object-center" :src="locationIcon2" alt="locationIcon2"/>
        </div>
        <div class="absolute z-20 top-[34%] right-[18%]">
          <img class="h-[51px] w-[51px] object-fit object-center" :src="locationIcon3" alt="locationIcon2"/>
        </div>
        <div class="absolute z-20 top-[47%] right-[23%]">
          <img class="h-[51px] w-[51px] object-fit object-center" :src="locationIcon4" alt="locationIcon2"/>
        </div>
        <div class="absolute z-20 top-[59%] right-[45.5%]">
          <img class="h-[51px] w-[51px] object-fit object-center" :src="locationIcon3" alt="locationIcon2"/>
        </div>
        <div class="absolute z-20 top-[59%] left-[16%]">
          <img class="h-[51px] w-[51px] object-fit object-center" :src="locationIcon4" alt="locationIcon2"/>
        </div>
        <div class="absolute z-20 bottom-[15%] right-[23%]">
          <img class="h-[51px] w-[51px] object-fit object-center" :src="locationIcon5" alt="locationIcon2" />
        </div>
        <div class="absolute z-20 bottom-[3%] left-[11.5%]">
          <img class="h-[51px] w-[51px] object-fit object-center" :src="locationIcon3" alt="locationIcon2"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {ref} from 'vue';
import searchIcon from '@/assets/images/icons/Search Icon.png';
import map from '@/assets/images/Map.png';
import locationIcon from '@/assets/images/icons/Location Icon.png';
import locationIcon2 from '@/assets/images/icons/Location 2.png';
import locationIcon3 from '@/assets/images/icons/Location 3.png';
import locationIcon4 from '@/assets/images/icons/Location 4.png';
import locationIcon5 from '@/assets/images/icons/Location 5.png';
import {locationsItems} from "~/components/location/core/dummy/dummy.js";

const route = useRoute();
const id = String(route.params.id);
const parsId = parseInt(id)

// Delivery method
const deliveryMethod = ref('delivery');
const stores = ref(locationsItems);
const searchText = ref('')

const onChangeInput = (e: Event) => {
  const target = e.target as HTMLInputElement
  searchText.value = target.value
}

const filteredStores = computed(() =>
    stores.value.filter(item =>
        item.address.toLowerCase().includes(searchText.value.toLowerCase())
    )
)

</script>