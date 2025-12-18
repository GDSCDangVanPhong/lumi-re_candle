<template>
    <UHeader class='h-32'>
        <template #title>
            <NuxtImg src="/logo.svg" alt="Logo" format="webp" width='200' />
        </template>
        <UInput class='w-[550px]' type="search" placeholder="Search an item" variant="subtle"  size="lg" icon='ion:search-sharp'/>
        <template #right>
            <CommonsColorMode/>
            <UChip :text="cart.count" size="3xl">
                <UButton icon="lets-icons:bag" variant="ghost" class="cursor-pointer" to="/BeforeCart"/>
            </UChip>
            <NuxtLink to='/login'>
                <UButton label="Sign in" variant="outline" class="cursor-pointer"/>
            </NuxtLink>
        </template>
    </UHeader>
</template>
<script setup lang="ts">
import { useCartStore } from '~/stores/cart'

const cart = useCartStore()
</script>
