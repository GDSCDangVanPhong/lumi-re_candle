<template>
<UPage>
    <UContainer class="mt-8 flex justify-between">
        <UBreadcrumb separator-icon="i-lucide-arrow-right" :items="items"/>
        <div class="flex gap-4 items-center">
            <p>Showing 1-10 products of  100 results</p>
            <USelect v-model="value" :items="selectItems" class="w-60"/>
        </div>
    </UContainer>
    <UContainer>
        <UPage>
            <template #left>
            <UPageAside >
                  <UNavigationMenu orientation="vertical" :items="navigationItems" class="data-[orientation=vertical]:w-60"  />
            </UPageAside>
            </template>
            <template #default>
            <div class="mt-16 ml-6">
                <UPageGrid>
                  <UPageCard
                    v-for="(card, index) in cards"
                    :key="index"
                    v-bind="card"
                    
                  >
                      <div class="flex flex-col items-center gap-3.5">
                          <NuxtImg src="/Frame 82.png"  class="rounded-md" height="200"/>
                          <p class="text-sm ">Drink Summer Strawberry Candles</p>
                          <p>$10</p>
                      </div>
                  </UPageCard>
                </UPageGrid>
                <div class="flex justify-center mt-10">
                    <UPagination :page="1" :total="100" />
                </div>
                
            </div>
            </template>
        </UPage>
    </UContainer>
</UPage>
</template>
<script setup lang="ts">
import type { BreadcrumbItem , NavigationMenuItem} from '@nuxt/ui'
definePageMeta({
  layout: 'common',
})
const items = ref<BreadcrumbItem[]>([
  {
    label: 'Home',
    icon: 'lucide:home',
    to: '/docs'
  },
  {
    label: 'Products',
    icon: 'icon-park-outline:ad-product',
    to: '/docs/components'
  },
  {
    label: 'Candles',
    icon: 'mingcute:candles-fill',
    to: '/docs/components/breadcrumb'
  }
])
const selectItems = ref(['Sort by latest', 'Sort by price: high to low', 'Sort by price: low to high', 'Sort by average rating'])
const value = ref('Sort by latest')



const navigationItems = ref<NavigationMenuItem[][]>([
  [
    {
      label: 'Products',
      type: 'label',
      class: 'text-2xl '
    },
    {
      label: 'Hot Products',
      icon: 'mdi:fire',
      badge: '26',
      children: [
        {
          label: 'Introduction',
          description: 'Fully styled and customizable components for Nuxt.',
          icon: 'i-lucide-house'
        },
        {
          label: 'Installation',
          description: 'Learn how to install and configure Nuxt UI in your application.',
          icon: 'i-lucide-cloud-download'
        },
        {
          label: 'Icons',
          icon: 'i-lucide-smile',
          description: 'You have nothing to do, @nuxt/icon will handle it automatically.'
        },
        {
          label: 'Colors',
          icon: 'i-lucide-swatch-book',
          description: 'Choose a primary and a neutral color from your Tailwind CSS theme.'
        },
        {
          label: 'Theme',
          icon: 'i-lucide-cog',
          description: 'You can customize components by using the `class` / `ui` props or in your app.config.ts.'
        }
      ]
    },
    {
      label: 'New Arrivals',
      icon: 'fluent:new-16-filled',
      badge: '26',
      children: [
        {
          label: 'defineShortcuts',
          icon: 'i-lucide-file-text',
          description: 'Define shortcuts for your application.',
          to: '/docs/composables/define-shortcuts'
        },
        {
          label: 'useOverlay',
          icon: 'i-lucide-file-text',
          description: 'Display a modal/slideover within your application.',
          to: '/docs/composables/use-overlay'
        },
        {
          label: 'useToast',
          icon: 'i-lucide-file-text',
          description: 'Display a toast within your application.',
          to: '/docs/composables/use-toast'
        }
      ]
    },
    {
      label: 'Sale Products',
      icon: 'mdi:sale',
      badge: '26',
      children: [
        {
          label: 'Link',
          icon: 'i-lucide-file-text',
          description: 'Use NuxtLink with superpowers.',
          to: '/docs/components/link'
        },
        {
          label: 'Modal',
          icon: 'i-lucide-file-text',
          description: 'Display a modal within your application.',
          to: '/docs/components/modal'
        },
        {
          label: 'NavigationMenu',
          icon: 'i-lucide-file-text',
          description: 'Display a list of links.',
          to: '/docs/components/navigation-menu'
        },
        {
          label: 'Pagination',
          icon: 'i-lucide-file-text',
          description: 'Display a list of pages.',
          to: '/docs/components/pagination'
        },
        {
          label: 'Popover',
          icon: 'i-lucide-file-text',
          description: 'Display a non-modal dialog that floats around a trigger element.',
          to: '/docs/components/popover'
        },
        {
          label: 'Progress',
          icon: 'i-lucide-file-text',
          description: 'Show a horizontal bar to indicate task progression.',
          to: '/docs/components/progress'
        }
      ]
    },
    {
      label: 'Scented Candles',
      icon: 'mingcute:candles-fill',
      badge: '26',
      defaultOpen: true,
      active: true,
      children: [
        {
          label: 'Item type 1',
          icon: 'i-lucide-file-text',
          description: 'Use NuxtLink with superpowers.',
          
        },
        {
          label: 'Item type 2',
          icon: 'i-lucide-file-text',
          description: 'Display a modal within your application.',
          
        },
        {
          label: 'Item type 3',
          icon: 'i-lucide-file-text',
          description: 'Display a list of links.',
          
        },
        
      ]
    }
  ],
])
const cards = ref([
  {
    to: '/docs/getting-started/integrations/icons'
  },
  {
    
    to: '/docs/getting-started/integrations/fonts'
  },
  {
    
    to: '/docs/getting-started/integrations/color-mode'
  },
  {
   
    to: '/docs/getting-started/integrations/icons'
  },
  {
    
    to: '/docs/getting-started/integrations/fonts'
  },
  {
    
    to: '/docs/getting-started/integrations/color-mode'
  },
  {
    
    to: '/docs/getting-started/integrations/icons'
  },
  {
    
    to: '/docs/getting-started/integrations/fonts'
  },
  {
    
    to: '/docs/getting-started/integrations/color-mode'
  },
])

</script>