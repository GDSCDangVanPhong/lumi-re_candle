<script setup lang="ts">
definePageMeta({
  layout: 'common',
})

/* ===== FAKE DATA (sau thay bằng API) ===== */
const post = {
  title: 'Ưu đãi Đặt Quà Sớm – Gửi lời yêu thương dịp hẹn 20.10',
  image: '/News.png',
  date: '20.10',
  content: `
  <p><strong>10 LỜI CHÚC GIÁNG SINH TIẾNG ANH HAY NHẤT 2023</strong></p>

  <p>
  1. Wishing you peace, joy, and unconditional love at Christmas and always.
  </p>

  <p>
  2. May your Christmas sparkle with moments of love, laughter and goodwill.
  </p>

  <p>
  3. Merry Christmas! Wishing you all the happiness your holiday can hold!
  </p>

  <p>
  4. Best wishes for a joyous Christmas filled with love, happiness, and success!
  </p>

  <p>
  5. Warmest thoughts and best wishes for a wonderful Christmas and a Happy New Year.
  </p>
  `
}

const prevPost = {
  title: 'Làm Nến Thơm – Cách Tinh Tế Mùi Hương Khi Làm Nến Thơm',
  slug: 'lam-nen-thom'
}

const nextPost = {
  title: 'Làm Nến Thơm – Cách Tinh Tế Mùi Hương Khi Làm Nến Thơm',
  slug: 'lam-nen-thom-2'
}
</script>

<template>
  <UContainer class="py-6 max-w-md">
    <!-- ===== BREADCRUMB ===== -->
    <nav class="text-sm text-gray-500 mb-4">
      <NuxtLink to="/" class="hover:underline">Trang chủ</NuxtLink>
      <span class="mx-1">›</span>
      <NuxtLink to="/news" class="hover:underline">Tin tức</NuxtLink>
      <span class="mx-1">›</span>
      <span class="text-gray-900 font-medium line-clamp-1">
        {{ post.title }}
      </span>
    </nav>

    <!-- ===== TITLE ===== -->
    <h1 class="text-base font-semibold text-gray-900 leading-snug mb-4">
      {{ post.title }}
    </h1>

    <!-- ===== IMAGE ===== -->
    <div class="rounded-lg overflow-hidden mb-4">
      <img
        :src="post.image"
        alt=""
        class="w-full object-cover"
      />
    </div>

    <!-- ===== CTA ===== -->
    <div class="flex items-center justify-between mb-6">
      <span class="text-sm text-rose-500 font-semibold">
        {{ post.date }}
      </span>

      <UButton color="rose" size="sm">
        ĐẶT NGAY
      </UButton>
    </div>

    <!-- ===== CONTENT ===== -->
    <article
      class="prose prose-sm max-w-none text-gray-700"
      v-html="post.content"
    />

    <!-- ===== DIVIDER ===== -->
    <UDivider class="my-6" />

    <!-- ===== PREV / NEXT ===== -->
    <div class="flex justify-between text-sm text-gray-600">
      <NuxtLink
        :to="`/news/${prevPost.slug}`"
        class="flex items-center gap-1 hover:text-gray-900"
      >
        ‹ {{ prevPost.title }}
      </NuxtLink>

      <NuxtLink
        :to="`/news/${nextPost.slug}`"
        class="flex items-center gap-1 hover:text-gray-900 text-right"
      >
        {{ nextPost.title }} ›
      </NuxtLink>
    </div>
  </UContainer>
</template>
