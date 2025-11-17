<template>
    <div>
        <USeparator label="Hot Products" class="mt-5"/>
        <div class="flex justify-end mt-5">
            <UButton label="See more!" variant="subtle" class=" cursor-pointer" size="lg" />
        </div>
        <UCarousel
            v-slot="{ item }"
            dots
            arrows
            autoplay
            :items="items"
            :ui="{ item: 'basis-1/3' }"
            class="mt-10"
        >
            <div class="flex flex-col justify-center">
                <NuxtImg :src="item.img" class='rounded-md' />
                <p class="text-center text-sm mt-5 font-bold">{{ item.title }}</p>
                <p class="text-center text-sm mt-2 text-red-500">{{ item.price }}</p>
            </div>
        </UCarousel>
    </div>
</template>
<script setup lang="ts">
const items = [
    {
        title: "Premium Essential Oil Scented Candle – Amethyst Crystal Hotel Fragrance",
        price: "$19.99",
        img: '/Frame 21.png'
    },
    {
        title: "Premium Essential Oil Scented Candle – Amethyst Crystal Hotel Fragrance",
        price: "$19.99",
        img: '/Frame 21.png'

    },
    {
        title: "Premium Essential Oil Scented Candle – Amethyst Crystal Hotel Fragrance",
        price: "$19.99",
        img: '/Frame 21.png'

    },
    {
        title: "Premium Essential Oil Scented Candle – Amethyst Crystal Hotel Fragrance",
        price: "$19.99",
        img: '/Frame 21.png'

    },
    {
        title: "Premium Essential Oil Scented Candle – Amethyst Crystal Hotel Fragrance",
        price: "$19.99",
        img: '/Frame 21.png'

    },
];
</script>
