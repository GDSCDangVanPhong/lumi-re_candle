<template>
    <div>
        <CommonsHeader />
        <div
             class="backdrop-blur border-b sticky top-32 z-40 bg-default/75 border-default"
           >
             <div class="max-w-7xl mx-auto px-4 flex justify-center">
               <UNavigationMenu :items="items" :highlight="true" />
             </div>
           </div>
        <slot />
        <CommonsFooter />
    </div>
</template>
<script setup lang="ts">
import type { NavigationMenuItem } from "@nuxt/ui";



const items = computed<NavigationMenuItem[]>(() => [
  {
    label: 'Home',
    to: '/'
  },
  {
    label: 'Scented candle',
    to: '/a'
  },
  {
    label: 'Cup',
    to: '/b'
  },
  {
    label: 'Gift boxes',
    to: '/c'
  },
  {
    label: 'Sales off',
    to: '/d'
  },
  {
    label: 'Tips',
    to: '/e'
  },
  {
    label: 'About',
    to: '/f'
  }
  
  
]);
</script>
