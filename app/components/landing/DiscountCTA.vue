<script setup lang="ts">
defineProps({
  image: { type: String, required: true },
  title: { type: String, required: true },
  subtitle: { type: String, required: true },
  buttonText: { type: String, default: "Learn more" }
})
</script>

<template>
  <UContainer class="mt-8">
    <section 
      class="relative w-full rounded-2xl overflow-hidden shadow-2xl group cursor-pointer bg-gray-100"
      :style="{ aspectRatio: '2432 / 918' }"
    >
      <!-- Ảnh nền -->
      <NuxtImg
        :src="image"
        :width="2432"
        :height="918"
        alt="20.10 Banner"
        format="webp"
        quality="85"
        fit="cover"
        class="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
        sizes="sm:100vw md:100vw lg:100vw"
        loading="eager"
        placeholder
      />

      <!-- Gradient overlay nhẹ (tăng khi hover) -->
      <div 
        class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-500"
      ></div>

      <!-- Nội dung: Ẩn → Hiện khi hover, nằm bên PHẢI -->
      <div 
        class="absolute top-0 right-0 h-full flex flex-col justify-center pr-6 md:pr-12 lg:pr-16 
                opacity-0 translate-x-8 group-hover:opacity-100 group-hover:translate-x-0 
                transition-all duration-500 ease-out z-10"
      >
        <div class="max-w-md space-y-2">
          <!-- 20.10 nhỏ -->
          <h1 class="text-2xl font-bold text-white tracking-tight">
              Speacial offer
          </h1>

          <!-- Tiêu đề -->
          <h2 class="text-lg md:text-xl font-semibold text-white">
            {{ title }}
          </h2>

          <!-- Phụ đề -->
          <p class="text-xs md:text-sm text-white/80 leading-tight">
            {{ subtitle }}
          </p>

          <!-- Promo -->
          <p class="text-sm md:text-base font-bold text-white">
            {{ promo }}
          </p>

          <!-- Nút nhỏ, hiện mượt -->
          <UButton v-if="buttonText" label="Buy now"/>
        </div>
      </div>
    </section>
  </UContainer>
</template>