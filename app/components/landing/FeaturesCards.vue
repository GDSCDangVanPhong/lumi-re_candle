<template>
    <UPageSection
    title="Light Up Your Home with Scents"
    description="Handmade, safe, and inspiring scented candles – designed to make your space truly yours."
    >
        <UPageGrid>
            <UPageCard
            v-for="item in items"
            :key="item.title"
            variant="subtle"
            :spotlight="true"
            :title="item.title"
            :description="item.description"
            :icon="item.icon"
            />
        </UPageGrid>
    </UPageSection>
    
</template>
<script setup lang="ts">
import type { PageCardProps } from '@nuxt/ui';

const items: PageCardProps[] = [
  {
    title:'Authentic products',
    description:'The perfume products are manufactured directly in Vietnam with authorization from the Department of Planning and Investment and have been officially registered with the Ministry of Industry and Trade.',
    icon:'fluent:certificate-16-regular'
  },
  {
    title:'Free shipping',
    description:'Lumière Candle offers free shipping for all customers nationwide.',
    icon:'mdi:truck'
  },
  {
    title:'Loyalty member benefits',
    description:'Customers who make a purchase will receive a 5% discount on future orders, and a 10% discount with the VIP card upon reaching a spending level of 5 million VND.',
    icon:'ic:baseline-card-membership'
  },
]
</script>