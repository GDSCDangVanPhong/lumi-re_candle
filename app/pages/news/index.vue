<script setup lang="ts">
import { ref, computed } from 'vue'
definePageMeta({
  layout: 'common',
})
/* ====== FAKE DATA ====== */
const items = ref([
  {
    id: 1,
    title: 'Ưu đãi Đặt Quà Sớm – Gửi lời yêu thương dịp hẹn 20.10',
    description:
      'Ưu đãi Đặt Quà Sớm – Gửi lời yêu thương dịp hẹn 20.10 First Sight...',
    image: '/News.png',
    date: '20.10',
    cta: 'ĐẶT NGAY'
  },
  {
    id: 2,
    title: 'Ưu đãi Đặt Quà Sớm – Gửi lời yêu thương dịp hẹn 20.10',
    description:
      'Ưu đãi Đặt Quà Sớm – Gửi lời yêu thương dịp hẹn 20.10 First Sight...',
    image: '/News.png',
    date: '20.10',
    cta: 'ĐẶT NGAY'
  },
  // thêm data nếu cần
])

/* ====== PAGINATION ====== */
const page = ref(1)
const pageSize = 2

const paginatedItems = computed(() => {
  const start = (page.value - 1) * pageSize
  return items.value.slice(start, start + pageSize)
})
</script>

<template>
  <UContainer class="py-6 max-w-md">
    <!-- ===== BREADCRUMB ===== -->
    <nav class="text-sm text-gray-500 mb-4">
      <NuxtLink to="/" class="hover:underline">Trang chủ</NuxtLink>
      <span class="mx-1">›</span>
      <span class="text-gray-900 font-medium">Tin tức</span>
    </nav>

    <!-- ===== LIST ===== -->
    <div class="space-y-6">
      <article
        v-for="item in paginatedItems"
        :key="item.id"
        class="border rounded-lg overflow-hidden bg-white"
      >
        <!-- IMAGE -->
        <img
          :src="item.image"
          alt=""
          class="w-full object-cover"
        />

        <!-- CONTENT -->
        <div class="p-4 space-y-3">
          <h3 class="font-semibold text-gray-900 leading-snug">
            {{ item.title }}
          </h3>

          <p class="text-sm text-gray-600 line-clamp-3">
            {{ item.description }}
          </p>

          <div class="flex items-center justify-between">
            <span class="text-sm text-gray-500">
              {{ item.date }}
            </span>

            <UButton
              size="sm"
              color="rose"
              variant="solid"
            >
              {{ item.cta }}
            </UButton>
          </div>

          <NuxtLink
            to="#"
            class="inline-block text-sm text-gray-400 hover:underline"
          >
            Chi tiết →
          </NuxtLink>
        </div>
      </article>
    </div>

    <!-- ===== PAGINATION ===== -->
    <div class="flex justify-center mt-6">
      <UPagination
        v-model="page"
        :page-count="Math.ceil(items.length / pageSize)"
        :max="5"
      />
    </div>
  </UContainer>
</template>
