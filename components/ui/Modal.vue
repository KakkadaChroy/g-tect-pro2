<template>
  <div>
    <!-- Modal Overlay -->
    <div v-if="orderStore.isModal" class="fixed inset-0 z-40 flex items-center justify-center p-4">
      <!-- Modal Container -->
      <div class="bg-white rounded-[8px] w-full max-w-[816px] max-h-[684px] overflow-hidden flex flex-col relative shadow-sm">
        <!-- Close Button -->
        <button
            @click="orderStore.handleClose()"
            class="absolute right-4 top-4 text-gray-500 hover:text-gray-700 cursor-pointer"
        >
          <img class="w-6 h-6" :src="xIcon" alt="xIcon" />
        </button>

        <!-- Modal Header -->
        <div class="flex items-center p-4" v-if="storedItems">
          <img
              :src="storedItems.image"
              alt="Poke Bowl"
              class="w-[98px] h-[98px] rounded-md object-cover mr-4"
          />
          <div>
            <h3 class="text-[32px]">{{storedItems.title}}</h3>
            <p class="text-[16px]">Extra proteins for an additional charge.</p>
          </div>
        </div>

        <!-- Modal Content - Scrollable -->
        <div class="flex-1 overflow-y-auto p-4">
          <!-- Step 1: Choose a Base -->
          <div class="mb-6">
            <div class="text-sm text-gray-500 mb-1">Step 1</div>
            <h4 class="text-lg font-semibold mb-3">Choose a Base</h4>

            <div class="space-y-3">
              <!-- White Rice -->
              <label class="flex items-center cursor-pointer">
                <input
                    type="checkbox"
                    name="base"
                    value="white-rice"
                    :checked="selectedBases.includes('white-rice')"
                    @change="toggleBase('white-rice')"
                    class="form-radio h-4 w-4 accent-[#F84A1F] focus:ring-orange-500 cursor-pointer"
                />
                <span class="ml-2">White Rice</span>
              </label>

              <!-- Brown Rice -->
              <label class="flex items-center cursor-pointer">
                <input
                    type="checkbox"
                    name="base"
                    value="brown-rice"
                    :checked="selectedBases.includes('brown-rice')"
                    @change="toggleBase('brown-rice')"
                    class="form-radio h-4 w-4 accent-[#F84A1F] focus:ring-orange-500 cursor-pointer"
                />
                <span class="ml-2">Brown Rice</span>
              </label>

              <!-- Salad -->
              <label class="flex items-center cursor-pointer">
                <input
                    type="checkbox"
                    name="base"
                    value="salad"
                    :checked="selectedBases.includes('salad')"
                    @change="toggleBase('salad')"
                    class="form-radio h-4 w-4 accent-[#F84A1F] focus:ring-orange-500 cursor-pointer"
                />
                <span class="ml-2">Salad</span>
              </label>

              <!-- Noodles -->
              <label class="flex items-center cursor-pointer">
                <input
                    type="checkbox"
                    name="base"
                    value="noodles"
                    :checked="selectedBases.includes('noodles')"
                    @change="toggleBase('noodles')"
                    class="form-radio h-4 w-4 accent-[#F84A1F] focus:ring-orange-500 cursor-pointer"
                />
                <span class="ml-2">Noodles</span>
              </label>

              <!-- Half and Half (White Rice and Brown Rice) -->
              <label class="flex items-center cursor-pointer">
                <input
                    type="checkbox"
                    name="base"
                    value="half-white-brown"
                    :checked="selectedBases.includes('half-white-brown')"
                    @change="toggleBase('half-white-brown')"
                    class="form-radio h-4 w-4 accent-[#F84A1F] focus:ring-orange-500 cursor-pointer"
                />
                <span class="ml-2">Half and Half (White Rice and Brown Rice)</span>
              </label>

              <!-- Half and Half (White Rice and Salad) -->
              <label class="flex items-center cursor-pointer">
                <input
                    type="checkbox"
                    name="base"
                    value="half-white-salad"
                    :checked="selectedBases.includes('half-white-salad')"
                    @change="toggleBase('half-white-salad')"
                    class="form-radio h-4 w-4 accent-[#F84A1F] focus:ring-orange-500 cursor-pointer"
                />
                <span class="ml-2">Half and Half (White Rice and Salad)</span>
              </label>

              <!-- Half and Half (Brown Rice and Salad) -->
              <label class="flex items-center cursor-pointer">
                <input
                    type="checkbox"
                    name="base"
                    value="half-brown-salad"
                    :checked="selectedBases.includes('half-brown-salad')"
                    @change="toggleBase('half-brown-salad')"
                    class="form-radio h-4 w-4 accent-[#F84A1F] focus:ring-orange-500 cursor-pointer"
                />
                <span class="ml-2">Half and Half (Brown Rice and Salad)</span>
              </label>

              <!-- Half and Half (Noodles and Salad) -->
              <label class="flex items-center cursor-pointer">
                <input
                    type="checkbox"
                    name="base"
                    value="half-noodles-salad"
                    :checked="selectedBases.includes('half-noodles-salad')"
                    @change="toggleBase('half-noodles-salad')"
                    class="form-radio h-4 w-4 accent-[#F84A1F] focus:ring-orange-500 cursor-pointer"
                />
                <span class="ml-2">Half and Half (Noodles and Salad)</span>
              </label>
            </div>
          </div>
        </div>

        <!-- Modal Footer -->
        <div class="p-4 border-t border-[#DEE1E6] flex justify-between items-center">
          <!-- Quantity Controls -->
          <div class="flex items-center">
            <button
                @click="decrementQuantity"
                class="w-8 h-8 cursor-pointer flex items-center justify-center rounded-[4px] bg-[#F3F4F6] text-gray-600 hover:bg-gray-200"
                :disabled="quantity <= 1"
                :class="{ 'opacity-50 cursor-not-allowed': quantity <= 1 }"
            >
              <img class="w-[12px] h-[12px]" :src="minusIcon" alt="minusIcon"/>
            </button>

            <input
                type="number"
                v-model="quantity"
                class="w-10 mx-2 text-center border-none"
                min="1"
            />

            <button
                @click="incrementQuantity"
                class="cursor-pointer w-8 h-8 flex items-center justify-center rounded-[4px] bg-[#F96540] text-white hover:bg-orange-600"
            >
              <img class="w-[12px] h-[12px]" :src="plusIcon" alt="plusIcon"/>
            </button>
          </div>

          <!-- Add to Cart Button -->
          <button
              @click="addToCart"
              class="bg-[#97DB32] hover:bg-[#97DB32]/90 text-[#354F0E] text-[16px] px-6 py-2 rounded-[22px] cursor-pointer"
          >
            Add to cart ${{storedItems.price}}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {ref, computed} from 'vue';
import xIcon from '@/assets/images/icons/Close Button.png';
import plusIcon from '@/assets/images/icons/E add.png';
import minusIcon from '@/assets/images/icons/Remove.png';
import {useOrderStore} from "@/stores/order";
import {foodItems} from "~/components/food/core/dummy/dummy";

// Form state
const orderStore = useOrderStore();
const selectedBases = ref<string[]>([]); // Array for multiple selections
const quantity = ref(1);

const storedItems = computed(() => {
  const id = orderStore.selectedItemId;
  return id ? foodItems.find(item => item.id === id) || null : null;
});

// Toggle base selection
const toggleBase = (base: string) => {
  if (selectedBases.value.includes(base)) {
    // Remove base if already selected
    selectedBases.value = selectedBases.value.filter(b => b !== base);
  } else {
    // Add base
    selectedBases.value.push(base);
  }
};

// Methods
const incrementQuantity = () => {
  quantity.value++;

};

const decrementQuantity = () => {
  if (quantity.value > 1) {
    quantity.value--;
  }
};

const addToCart = () => {
  if (!storedItems.value) {
    console.error('No item selected');
    return;
  }

  const order = {
    ...storedItems.value,
    type: 'custom-poke',
    bases: selectedBases.value,
    quantity: quantity.value,
    price: storedItems.value.price * quantity.value
  };

  orderStore.addToOrder(order);
  orderStore.handleClose();
  selectedBases.value = '';
  navigateTo('/location/menu/checkout');
};

</script>