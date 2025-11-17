<template>
    <UModal>
        <UButton icon="ion:search-sharp" variant="ghost" class="cursor-pointer"/>
        <template #content>
            <UCommandPalette v-model="value" :groups="groups" class="flex-1 h-80" />
        </template>
    </UModal>
</template>
<script setup lang="ts">
const groups = ref([
  {
    id: 'users',
    label: 'Hot Products',
    items: [
      {
        label: 'Crystal Candle',
        avatar: {
          src: '/Frame 21.png'
        }
      },
      {
        label: 'Crystal Candle',
        avatar: {
          src: '/Frame 21.png'
        }
      },
      {
        label: 'Crystal Candle',
        avatar: {
          src: '/Frame 21.png'
        }
      },
      {
        label: 'Crystal Candle',
        avatar: {
          src: '/Frame 21.png'
        }
      },
      {
        label: 'Crystal Candle',
        avatar: {
          src: '/Frame 21.png'
        }
      },
      {
        label: 'Crystal Candle',
        avatar: {
          src: '/Frame 21.png'
        }
      },
      {
        label: 'Crystal Candle',
        avatar: {
          src: '/Frame 21.png'
        }
      },
      {
        label: 'Crystal Candle',
        avatar: {
          src: '/Frame 21.png'
        }
      },
    ]
  }
])
const value = ref({})
</script>