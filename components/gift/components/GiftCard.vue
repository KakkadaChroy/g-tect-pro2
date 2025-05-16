<template>
  <div class="max-w-full mx-auto py-4 flex flex-col md:flex-row">
    <!-- Left Column -->
    <Container>
      <div class="w-full py-4">
        <h1 class="text-4xl font-bold mb-2">Give the Perfect Gift</h1>
        <p class="mb-8 text-gray-600">Get a voucher for yourself or gift one to a friend</p>

        <div class="mb-8">
          <h2 class="text-xl font-semibold mb-4">What kind of gift is it?</h2>
          <div class="flex gap-5">
            <!-- Individual Gift Option -->
            <div
                :class="[
              'border rounded-lg p-4 cursor-pointer flex items-start w-[280px] h-[102px]',
              giftType === 'individual' ? 'border-[#F96540] bg-orange-50' : 'border-gray-300 hover:border-gray-400'
            ]"
                @click="giftType = 'individual'"
            >
              <div class="mr-3">
                <img class="h-[36px] w-[36px]" :src="giftIcon" alt="giftIcon"/>
              </div>
              <div>
                <div class="font-semibold">For one individual</div>
                <div class="text-sm text-gray-600">Send a gift card to one recipient</div>
              </div>
            </div>

            <!-- Group Gift Option -->
            <div
                :class="[
              'border rounded-lg p-4 cursor-pointer flex items-start w-[280px] h-[102px]',
              giftType === 'group' ? 'border-orange-500 bg-orange-50' : 'border-gray-300 hover:border-gray-400'
            ]"
                @click="giftType = 'group'"
            >
              <div class="mr-3">
                <img class="h-[36px] w-[56px]" :src="diversityIcon" alt="Diversity"/>
              </div>
              <div>
                <div class="font-semibold">Group gift card</div>
                <div class="text-sm text-gray-600">Pool money from multiple contributors for one recipient</div>
              </div>
            </div>
          </div>
        </div>

        <div class="mb-8">
          <h2 class="text-xl font-semibold mb-4">eGift card amount</h2>
          <div class="grid grid-cols-2 md:grid-cols-5 w-[396px]">
            <button
                v-for="amount in amounts"
                :key="amount"
                :class="[
              'py-2 w-[78px] rounded border text-center',
              selectedAmount === amount ? 'bg-yellow-100 border-yellow-400 font-medium' : 'border-gray-300 hover:border-gray-400'
            ]"
                @click="selectedAmount = amount"
            >
              {{ amount === 'custom' ? 'Custom' : `$${amount}` }}
            </button>
          </div>
          <div v-if="selectedAmount === 'custom'" class="mt-4">
            <label class="block text-sm text-gray-600 mb-1">Enter custom amount</label>
            <input
                type="number"
                v-model="customAmount"
                class="border border-gray-300 rounded p-2 w-full focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                placeholder="Enter amount"
                min="10"
            />
          </div>
          <div class="mt-4">
            <button class="text-blue-500 hover:text-blue-700 text-sm font-medium">Add Promo Code</button>
          </div>
        </div>

        <div class="mb-8 w-[395px]">
          <h2 class="text-xl font-semibold mb-4">Your details</h2>
          <div class="space-y-4">
            <div>
              <input
                  type="text"
                  placeholder="Name"
                  class="border border-gray-300 rounded p-3 w-full focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              />
            </div>
            <div>
              <input
                  type="email"
                  placeholder="Your Email"
                  class="border border-gray-300 rounded p-3 w-full focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              />
            </div>
            <div>
            <textarea
                placeholder="Your Message (optional)"
                rows="4"
                class="border border-gray-300 rounded p-3 w-full focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
            ></textarea>
            </div>
          </div>
        </div>

        <div class="mb-8 w-[395px]">
          <h2 class="text-xl font-semibold mb-4">Delivery details</h2>
          <div class="flex items-center justify-between mb-6">
            <span>Send this card to myself</span>
            <label class="inline-flex items-center cursor-pointer">
              <input type="checkbox" v-model="sendToSelf" class="sr-only peer">
              <span class="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-green-300 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-500"></span>
            </label>
          </div>

          <button class="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-lg font-medium">
            Checkout
          </button>
        </div>
      </div>
    </Container>

    <!-- Right Column -->
    <div class="md:w-1/2 grid grid-cols-2 gap-4 p-4">
      <div class="rounded-lg overflow-hidden">
        <img :src="r1" alt="Food Bowl" class="w-full h-full object-cover">
      </div>
      <div class="rounded-lg overflow-hidden">
        <img :src="r2" alt="Food Bowl" class="w-full h-full object-cover">
      </div>
      <div class="rounded-lg overflow-hidden">
        <img :src="r3" alt="Food Bowl" class="w-full h-full object-cover"/>
      </div>
      <div class="rounded-lg overflow-hidden">
        <img :src="r4" alt="Food Bowl" class="w-full h-full object-cover">
      </div>
      <div class="rounded-lg overflow-hidden">
        <img :src="r5" alt="Food Bowl" class="w-full h-full object-cover">
      </div>
      <div class="rounded-lg overflow-hidden">
        <img :src="r6" alt="Food Bowl" class="w-full h-full object-cover">
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Container from "~/components/ui/Container.vue";

import giftIcon from '@/assets/images/icons/Gift Icon.png';
import diversityIcon from '@/assets/images/icons/Diversity Icon.png';

import r1 from '@/assets/images/foods/r1.png';
import r2 from '@/assets/images/foods/r2.png';
import r3 from '@/assets/images/foods/r3.png';
import r4 from '@/assets/images/foods/r4.png';
import r5 from '@/assets/images/foods/r5.png';
import r6 from '@/assets/images/foods/r6.png';

// Gift type selection state
const giftType = ref('individual');

// Amount selection state
const amounts = ['25.00', '35.00', '50.00', '100.00', 'custom'];
const selectedAmount = ref('25.00');
const customAmount = ref(null);

// Send to self toggle state
const sendToSelf = ref(false);
</script>