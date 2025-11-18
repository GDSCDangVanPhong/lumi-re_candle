<!-- components/LandingDiscountCarouselCTA.vue -->
<script setup lang="ts">
const slides = [
  {
    image: '/CTA1.png',
    promo: 'UP TO 20% OFF',
    buttonText: 'Buy Now'
  },
  {
    image: '/CTA2.png',
    promo: 'FREE GIFT WRAPPING',
    buttonText: 'Buy Now'
  },
]
</script>

<template>
  <div class="mt-6">
    <div class="rounded-2xl overflow-hidden shadow-2xl bg-white">

      <UCarousel
        :items="slides"
        :autoplay="{ delay: 4500 }"
        indicators
        class="w-full"
      >
        <template #default="{ item }">
          <div
            class="relative w-full bg-gray-100"
            :style="{ aspectRatio: '2432 / 918' }"
          >
            <!-- Ảnh slide -->
            <NuxtImg
              :src="item.image"
              width="2432"
              height="918"
              format="webp"
              quality="85"
              fit="cover"
              alt="20.10 Promotion"
              class="absolute inset-0 w-full h-full object-cover object-center"
              loading="lazy"
              placeholder
            />

            <!-- Overlay + Nội dung căn giữa chính xác -->
            <div class="absolute inset-0 bg-black/40">
              <div class="flex h-full items-center justify-center text-center px-6">
                <div class="max-w-4xl space-y-6">
                  <h1 class="text-4xl md:text-6xl font-bold text-white drop-shadow-2xl">
                    Lumière Candle
                  </h1>
                  <p class="text-lg md:text-2xl text-white/90 drop-shadow-lg leading-relaxed">
                    A premium handcrafted candle brand offering beautifully designed,<br class="hidden md:block">
                    soothingly aromatic, and thoughtfully curated scents to elevate your everyday living.
                  </p>
                  <UButton
                    :label="item.buttonText"
                    size="xl"
                    variant="solid"
                    class="mt-8 shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300
                           bg-white text-black hover:bg-gray-100 font-semibold px-10"
                  />
                </div>
              </div>
            </div>
          </div>
        </template>
      </UCarousel>
    </div>
  </div>
</template>