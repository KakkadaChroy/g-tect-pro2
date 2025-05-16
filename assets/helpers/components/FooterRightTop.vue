<template>
  <div class="container mx-auto px-4 py-8">
    <h2 class="text-2xl font-bold mb-6">{{ title }}</h2>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      <div v-for="(image, index) in images" :key="index"
           class="relative overflow-hidden rounded-lg shadow-lg h-64 cursor-pointer group">
        <img :src="image.src" :alt="image.alt"
             class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
        <div class="absolute inset-0 bg-black bg-opacity-30 opacity-0 group-hover:opacity-50 transition-opacity duration-300 flex items-end">
          <div class="p-4 text-white">
            <h3 class="font-semibold">{{ image.title }}</h3>
            <p class="text-sm">{{ image.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import r1 from '@/assets/images/foods/f1.png';
import r2 from '@/assets/images/foods/f2.png';
import r3 from '@/assets/images/foods/f3.png';
import r4 from '@/assets/images/foods/f4.png';
import r5 from '@/assets/images/foods/f5.png';
import r6 from '@/assets/images/foods/f6.png';
import r7 from '@/assets/images/foods/f7.png';
import r8 from '@/assets/images/foods/f8.png';
import r9 from '@/assets/images/foods/f9.png';


const props = defineProps({
  title: {
    type: String,
    default: 'Food Gallery'
  },
  images: {
    type: Array,
    default: () => [
      {
        src: r1,
        alt: 'Healthy bowl with various vegetables',
        title: 'Veggie Bowl',
        description: 'Fresh vegetables with sprouts and dressing'
      },
      {
        src: r2,
        alt: 'Colorful salad in hand',
        title: 'Rainbow Salad',
        description: 'Hand-tossed fresh ingredients'
      },
      {
        src: r3,
        alt: 'Salmon poke bowl',
        title: 'Salmon Poke',
        description: 'Fresh salmon with avocado and sesame seeds'
      },
      {
        src: r4,
        alt: 'Spicy poke bowl',
        title: 'Spicy Bowl',
        description: 'With jalapeños and cucumber'
      },
      {
        src: r5,
        alt: 'Fresh ingredients in compartments',
        title: 'Ingredient Tray',
        description: 'Fresh separated ingredients ready to mix'
      },
      {
        src: r6,
        alt: 'Colorful Buddha bowl',
        title: 'Buddha Bowl',
        description: 'Nutritious mix of grains and vegetables'
      },
      {
        src: r7,
        alt: 'Colorful Buddha bowl',
        title: 'Buddha Bowl',
        description: 'Nutritious mix of grains and vegetables'
      },
      {
        src: r8,
        alt: 'Colorful Buddha bowl',
        title: 'Buddha Bowl',
        description: 'Nutritious mix of grains and vegetables'
      },
      {
        src: r9,
        alt: 'Colorful Buddha bowl',
        title: 'Buddha Bowl',
        description: 'Nutritious mix of grains and vegetables'
      },
    ]
  }
})
</script>