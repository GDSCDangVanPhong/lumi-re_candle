import { defineStore } from 'pinia'

export const useCartStore = defineStore('cart', {
  state: () => ({
    items: [] as any[]
  }),

  actions: {
    add(item: any) {
      this.items.push(item)
    }
  },

  getters: {
    count: state => state.items.length
  }
})
