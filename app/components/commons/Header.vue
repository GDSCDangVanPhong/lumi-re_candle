<template>
    <UHeader>
        <template #title>
            <NuxtImg src="/logo.svg" alt="Logo" format="webp" width='120' />
        </template>
        <UNavigationMenu :items='item' />
        <template #right>
            <CommonsColorMode/>
            <UButton icon="lets-icons:bag" variant="ghost" class="cursor-pointer"/>
            <CommonsSearchModal/>
            <NuxtLink to='/login'>
                <UButton label="Sign in" variant="outline" class="cursor-pointer"/>
            </NuxtLink>
        </template>
    </UHeader>
</template>
<script setup lang="ts">
import type { NavigationMenuItem } from "@nuxt/ui";

const item = computed<NavigationMenuItem[]>(() => [
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
