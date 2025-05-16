<template>
  <div class="min-h-screen bg-white flex flex-col items-center py-10 px-4">
    <div class="max-w-md w-full">
      <!-- Header with image and checkmark -->
      <div class="flex justify-center mb-6 relative">
        <div class="w-40 h-40 rounded-full overflow-hidden border-4 border-gray-100">
          <img :src="successImage" alt="Poke bowl" class="w-full h-full object-cover" />
        </div>
        <!-- Green checkmark -->
        <div class="absolute bottom-0 right-1/3 bg-green-500 rounded-full p-1">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
          </svg>
        </div>
      </div>

      <!-- Thank you heading -->
      <div class="text-center mb-8">
        <h1 class="text-2xl font-bold mb-2">Thank you for your purchase!</h1>
        <p class="text-gray-500">Food is on its way to you</p>
      </div>

      <!-- Order information -->
      <div class="mb-8">
        <div class="flex items-center py-4 border-b border-gray-100">
          <div class="text-orange-500 mr-4">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd" />
            </svg>
          </div>
          <div class="flex-1">Date</div>
          <div class="font-medium">27/04/2023</div>
        </div>

        <div class="flex items-center py-4 border-b border-gray-100">
          <div class="text-orange-500 mr-4">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd" />
            </svg>
          </div>
          <div class="flex-1">Customer</div>
          <div class="font-medium">John Miller</div>
        </div>

        <div class="flex items-center py-4 border-b border-gray-100">
          <div class="text-orange-500 mr-4">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd" />
            </svg>
          </div>
          <div class="flex-1">Payment Method</div>
          <div>
            <div class="h-6 w-10 relative">
              <div class="absolute inset-0">
                <div class="absolute left-0 top-0 w-5 h-6 bg-red-500 rounded-l-sm"></div>
                <div class="absolute right-0 top-0 w-5 h-6 bg-yellow-500 rounded-r-sm"></div>
              </div>
              <div class="absolute inset-0 flex items-center justify-center">
                <div class="w-4 h-4 bg-red-500 opacity-40 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>

        <div class="flex items-center py-4 border-b border-gray-100">
          <div class="text-orange-500 mr-4">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clip-rule="evenodd" />
            </svg>
          </div>
          <div class="flex-1">Order Number</div>
          <div class="font-medium">586789963</div>
        </div>

        <div class="flex items-center py-4 border-b border-gray-100">
          <div class="text-orange-500 mr-4">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clip-rule="evenodd" />
            </svg>
          </div>
          <div class="flex-1">Total</div>
          <div class="font-medium">${{orderStore.totalPrice}}</div>
        </div>
      </div>

      <!-- Order Line -->
      <div class="mb-8">
        <h2 class="text-lg font-medium mb-4">Order Line</h2>

        <!-- First Item -->
        <div class="flex mb-4" v-for="item in orderStore.orderItems">
          <div class="w-16 h-16 rounded-full overflow-hidden mr-4">
            <img :src="item.image" alt="Build Your Own Poke Bowl" class="w-full h-full object-cover" />
          </div>
          <div class="flex-1 flex flex-col justify-center">
            <h3 class="font-medium">{{item.title}}</h3>
            <p class="text-sm text-gray-500">
              {{ item.description.slice(0, 25).replace('•', '-') }}...
            </p>
            <p class="text-sm text-gray-500">x1</p>
          </div>
          <div class="font-medium flex items-center">${{item.price}}</div>
        </div>

        <h2 class="py-5">Drinks</h2>
        <div class="flex mb-4" v-for="item in orderStore.drinkCardItems">
          <div class="w-16 h-16 rounded-full overflow-hidden mr-4">
            <img :src="item.image" alt="Build Your Own Poke Bowl" class="w-full h-full object-cover" />
          </div>
          <div class="flex-1 flex flex-col justify-center">
            <h3 class="font-medium">{{item.name}}</h3>
            <p class="text-sm text-gray-500">x1</p>
          </div>
          <div class="font-medium flex items-center">${{item.price}}</div>
        </div>
      </div>

      <!-- Back to home button -->
      <div class="flex justify-center mb-10">
        <button
            @click="navigateTo('/home')"
            class="bg-orange-500 hover:bg-orange-600 text-white font-medium py-2 px-8 rounded-full">
          Back to home
        </button>
      </div>

      <!-- Rating -->
      <div class="text-center">
        <h3 class="text-lg mb-4">How was your experience?</h3>
        <div class="flex justify-center">
          <div class="flex space-x-1">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {useOrderStore} from "~/stores/order";
import successImage from '@/assets/images/success.png';

const orderStore = useOrderStore();

</script>