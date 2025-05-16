<template>
  <div class="min-h-screen bg-gray-50 py-8">
    <div class="container mx-auto">
      <div class="max-w-7xl mx-auto">
        <div class="flex flex-col md:flex-row gap-8">
          <!-- Left Column - Order Summary -->
          <div class="w-full md:w-3/5">
            <h2 class="text-xl font-semibold mb-6">Order summary</h2>

            <div class="bg-white rounded-lg shadow-sm">
              <!-- Order Items -->
              <div>
                <h2 class="px-5 py-5">You're own bowl</h2>
              </div>
              <div>
                <div v-if="orderStore.orderItems.length > 0">
                  <div v-for="(item, index) in orderStore.orderItems" :key="index"
                       :class="{'border-b border-gray-200': index < orderStore.orderItems.length - 1}"
                       class="p-4 flex items-center">
                    <div class="w-16 h-16 rounded-full overflow-hidden mr-4">
                      <img
                          :src="item.image"
                          alt="images"
                          class="w-full h-full object-cover"
                      />
                    </div>
                    <div class="flex-1">
                      <h3 class="font-medium">{{ item.title }}</h3>
                      <p class="text-sm text-gray-500">{{ item.description }}</p>
                    </div>
                    <div class="text-lg font-medium ml-4">${{ item.price }}</div>
                    <div class="ml-4 flex space-x-3">
                      <button class="text-gray-400 hover:text-gray-600">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                          <path
                              d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"/>
                        </svg>
                      </button>
                      <button @click="orderStore.clearOrder" class="text-gray-400 hover:text-gray-600 cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                          <path fill-rule="evenodd"
                                d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                                clip-rule="evenodd"/>
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
                <div v-else class="h-[51px] flex items-center justify-center text-sm text-gray-500">
                  <span>No Order</span>
                </div>
              </div>
              <!--Drinks Items-->
              <div>
                <div>
                  <h2 class="px-5">Drinks</h2>
                </div>
                <div v-if="orderStore.drinkCardItems.length > 0">
                  <div
                      v-for="(item, index) in orderStore.drinkCardItems" :key="index"
                      :class="{'border-b border-gray-200': index < orderStore.drinkCardItems.length - 1}"
                      class="p-4 flex items-center">
                    <div class="w-16 h-16 rounded-full overflow-hidden mr-4">
                      <img
                          :src="item.image"
                          alt="images"
                          class="w-full h-full object-cover"
                      />
                    </div>
                    <div class="flex-1">
                      <h3 class="font-medium">{{ item.name }}</h3>
                    </div>
                    <div class="text-lg font-medium ml-4">${{ item.price }}</div>
                    <div class="ml-4 flex space-x-3">
                      <button class="text-gray-400 hover:text-gray-600">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                          <path
                              d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"/>
                        </svg>
                      </button>
                      <button @click="orderStore.removeDrinks" class="text-gray-400 hover:text-gray-600 cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                          <path fill-rule="evenodd"
                                d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                                clip-rule="evenodd"/>
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
                <div v-else class="h-[51px] flex items-center justify-center text-sm text-gray-500">
                  <span>No Drinks</span>
                </div>
              </div>
            </div>
          </div>

          <!-- Right Column - Payment & Summary -->
          <div class="w-full md:w-2/5">
            <!-- Payment Method -->
            <div class="mb-8">
              <h2 class="text-lg font-medium mb-4">Payment method</h2>
              <p class="text-blue-500 text-sm mb-4 cursor-pointer hover:underline">Change payment methods</p>

              <div class="border border-gray-200 rounded-lg p-4 flex items-center justify-between bg-[#97DB32]/10">
                <div class="flex items-center">
                  <div class="mr-2">
                    <div class="flex items-center">
                      <div class="w-[36px] h-[36px] flex items-center justify-center">
                        <img class="w-full h-full object-fit object-center" :src="visaIcon" alt="visaIcon"/>
                      </div>
                      <span class="ml-2 font-medium">Mastercard</span>
                    </div>
                  </div>
                </div>
                <div class="text-gray-600">**** 5987</div>
              </div>
            </div>

            <!-- Voucher -->
            <div class="mb-8">
              <h2 class="text-lg font-medium mb-4">Voucher</h2>
              <div class="flex space-x-2 mb-3">
                <input
                    v-model="voucherCode"
                    type="text"
                    placeholder="freeship"
                    class="flex-1 border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <button
                    @click="applyVoucher"
                    class="text-yellow-700 font-medium px-3 py-2 hover:underline">
                  Apply
                </button>
              </div>

              <div v-if="appliedVoucher"
                   class="inline-block bg-yellow-100 text-yellow-800 rounded-full px-3 py-1 text-sm">
                {{ appliedVoucher }}
              </div>
            </div>

            <!-- Summary -->
            <div class="mb-8">
              <h2 class="text-lg font-medium mb-4">Summary</h2>

              <div class="space-y-3 mb-4">
                <div class="flex justify-between">
                  <span class="text-gray-600">Subtotal</span>
                  <span class="font-medium">${{ subtotal }}</span>
                </div>
                <div class="flex justify-between">
                  <span class="text-gray-600">Ship</span>
                  <span class="font-medium">${{ shipping }}</span>
                </div>
                <div class="flex justify-between">
                  <span class="text-gray-600">Fee</span>
                  <span class="font-medium">${{ fee }}</span>
                </div>
              </div>

              <div class="flex justify-between font-medium">
                <span>Total</span>
                <span class="text-red-500 text-xl">${{ total }}</span>
              </div>
            </div>

            <!-- Proceed Button -->
            <button
                @click="proceedToPayment"
                class="w-full bg-orange-500 cursor-pointer hover:bg-orange-600 text-white py-3 px-4 rounded-full font-medium transition-colors">
              Proceed to payment
            </button>
          </div>
        </div>
      </div>

      <Container>
        <div class="py-10">
          <h2 class="text-[24px] font-semibold">You might also like</h2>
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
          <h2 class="text-[24px] font-semibold">Drinks</h2>
          <div class="grid grid-cols-4 gap-16 py-36">
            <DrinkCard
                v-for="item in drinkItems"
                :key="item.id"
                :id="item.id"
                :image="item.image"
                :name="item.name"
                :price="item.price"
            />
          </div>
        </div>

        <Modal/>
      </Container>
    </div>
  </div>
</template>

<script setup lang="ts">
import {ref, computed} from 'vue'
import {useOrderStore} from "@/stores/order.js";
import {foodItems} from "~/components/food/core/dummy/dummy.js";
import BuildYourOwnBowlCard from "~/components/ui/BuildYourOwnBowlCard.vue";
import Container from "~/components/ui/Container.vue";
import Modal from "~/components/ui/Modal.vue";

import visaIcon from '@/assets/images/icons/Image 174.png';
import {drinkItems} from "~/components/location/core/dummy/dummy";
import DrinkCard from "~/components/ui/DrinkCard.vue";

// Voucher functionality
const voucherCode = ref('');
const appliedVoucher = ref('freeship');
const shipping = ref(0);
const fee = ref(0);
const orderStore = useOrderStore();


const applyVoucher = () => {
  if (voucherCode.value) {
    appliedVoucher.value = voucherCode.value;
    voucherCode.value = '';
  }
}

// Calculate totals
const subtotal = computed(() => {
  return orderStore.orderItems.reduce((sum, item) => sum + item.price, 0);
})

const total = computed(() => {
  return subtotal.value + shipping.value + fee.value;
})

// Checkout function
const proceedToPayment = () => {
  orderStore.setTotal(total.value);
  navigateTo('/location/menu/checkout/success');
}
</script>