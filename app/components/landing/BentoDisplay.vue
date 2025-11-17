<template>
  <CommonsBentoGrid class="mx-auto max-w-4xl">
    <CommonsBentoGridItem
      v-for="(item, index) in items"
      :key="index"
      :class="index === 3 || index === 6 ? 'md:col-span-2' : ''"
    >
      <template #header>
        <div class="flex size-full  space-x-4">
            <div class="w-full h-44 rounded-md overflow-hidden bg-zinc-800">
              <NuxtImg :src="item.image" alt="Item Image" class="w-full h-full object-cover" />
            </div>
        </div>
      </template>

      <template #title>
        <strong>{{ item.title }}</strong>
      </template>

      <template #description>
        <p>{{ item.description }}</p>
      </template>
    </CommonsBentoGridItem>
  </CommonsBentoGrid>
</template>

<script lang="ts" setup>
const items = [
  {
    title: "The Dawn of Innovation",
    description: "Explore the birth of groundbreaking ideas and inventions.",
    image: "/LILLY.webp",
  },
  {
    title: "The Digital Revolution",
    description: "Dive into the transformative power of technology.",
    image: "/Frame 21.png",
  },
  {
    title: "The Art of Design",
    description: "Discover the beauty of thoughtful and experience design.",
    image: "/eug8z6fut1u.png",
  },
  {
    title: "The Power of Communication",
    description: "Understand the impact of effective communication in our lives.",
    image: "/hero.png",
  },
  {
    title: "The Pursuit of Knowledge",
    description: "Join the quest for understanding and enlightenment.",
    image: "/lumiere-the-mini-candle-of-light-897879 1.png",
  },
  {
    title: "The Joy of Creation",
    description: "Experience the thrill of bringing ideas to life.",
    image: "/image 3.png",
  },
  {
    title: "The Spirit of Adventure",
    description: "Embark on exciting journeys and thrilling discoveries.",
    image: "/Frame 15.png",
  },
];
</script>