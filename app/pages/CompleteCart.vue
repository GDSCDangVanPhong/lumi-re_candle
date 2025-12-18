<template>
  <div class="min-h-screen bg-gray-50 py-10 px-4 font-sans text-slate-900 mt-5">
    <div class="max-w-6xl mx-auto">

      <!-- STEP -->
      <nav class="flex justify-center items-center gap-3 mb-12 text-xs font-bold uppercase tracking-widest">
        <span class="text-gray-400">Giỏ hàng</span>
        <span class="text-gray-300">»</span>
        <span class="text-black border-b-2 border-black pb-1">Kiểm tra chi tiết</span>
        <span class="text-gray-300">»</span>
        <span class="text-gray-400">Hoàn thành đơn hàng</span>
      </nav>

      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12">

        <!-- FORM -->
        <section class="lg:col-span-7">
          <h2 class="text-2xl font-bold mb-8 uppercase">Billing Details</h2>

          <form class="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div class="md:col-span-2">
              <label class="label-style">Họ và tên</label>
              <input v-model="form.fullName" class="input-field" />
            </div>

            <div>
              <label class="label-style">Điện thoại</label>
              <input v-model="form.phone" class="input-field" />
            </div>

            <div>
              <label class="label-style">Email</label>
              <input v-model="form.email" class="input-field" />
            </div>

            <div v-for="f in formFields" :key="f.key">
              <label class="label-style">{{ f.label }}</label>
              <input v-model="form[f.key]" class="input-field" />
            </div>

            <div class="md:col-span-2">
              <label class="label-style">Order notes</label>
              <textarea v-model="form.notes" rows="4" class="input-field"></textarea>
            </div>
          </form>
        </section>

        <!-- ORDER -->
        <aside class="lg:col-span-5 space-y-6">
          <div class="border-2 border-slate-900 p-1 bg-white">
            <table class="w-full text-sm">
              <tbody>
                <tr>
                  <td class="p-4 font-bold">Subtotals</td>
                  <td class="p-4 text-right font-bold">
                    {{ formatPrice(359000) }} VND
                  </td>
                </tr>
                <tr>
                  <td class="p-4 font-bold">Shipping</td>
                  <td class="p-4 text-right italic">
                    {{ formatPrice(30000) }} VND
                  </td>
                </tr>
                <tr class="bg-slate-50">
                  <td class="p-4 font-black text-lg">Totals</td>
                  <td class="p-4 text-right font-black text-xl text-red-600">
                    {{ formatPrice(389000) }} VND
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <!-- PAYMENT -->
          <div class="space-y-3">
            <div
              v-for="m in paymentMethods"
              :key="m.id"
              class="payment-item"
              :class="{ active: selectedPayment === m.id }"
              @click="selectedPayment = m.id"
            >
              <input type="radio" :value="m.id" v-model="selectedPayment" />
              <span>{{ m.name }}</span>
            </div>
          </div>

          <button class="w-full bg-yellow-600 text-white py-4 font-black uppercase">
            Place Order
          </button>
        </aside>
      </div>

      <!-- QR -->
      <transition name="fade">
        <div v-if="['bank','momo'].includes(selectedPayment)" class="mt-16">
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div v-for="qr in qrCodes" :key="qr.bankName">
              <img :src="qr.image" class="w-40 h-40 mx-auto mb-3" />
              <p class="font-bold">{{ qr.owner }}</p>
              <p class="text-sm">{{ qr.number }}</p>
              <p class="text-xs text-gray-500">{{ qr.bankName }}</p>
            </div>
          </div>
        </div>
      </transition>

    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
definePageMeta({
  layout: 'common'
})
const formFields = [
  { label: 'Tỉnh/Thành phố', key: 'city' },
  { label: 'Quận/Huyện', key: 'district' },
  { label: 'Xã/Phường', key: 'ward' },
  { label: 'Địa chỉ', key: 'address' }
]

const form = reactive({
  fullName: '',
  phone: '',
  email: '',
  city: '',
  district: '',
  ward: '',
  address: '',
  notes: ''
})

const selectedPayment = ref('bank')

const paymentMethods = [
  { id: 'bank', name: 'Chuyển khoản ngân hàng' },
  { id: 'cod', name: 'COD' },
  { id: 'momo', name: 'Momo' }
]

const qrCodes = [
  {
    image: 'https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=bank',
    owner: 'ĐẶNG BẢO ĐĂNG',
    number: '3564 39 39 39',
    bankName: 'Techcombank'
  },
  {
    image: 'https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=bank',
    owner: 'ĐẶNG BẢO ĐĂNG',
    number: '3564 39 39 39',
    bankName: 'MBBank'
  },
  {
    image: 'https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=bank',
    owner: 'ĐẶNG BẢO ĐĂNG',
    number: '3564 39 39 39',
    bankName: 'Techcombank'
  }
]

const formatPrice = (val) =>
  Number(val || 0).toLocaleString('vi-VN')
</script>

<style scoped>
.label-style {
  font-size: 12px;
  font-weight: 800;
  margin-bottom: 4px;
  display: block;
}

.input-field {
  width: 100%;
  border: 1px solid #ccc;
  padding: 10px;
}

.payment-item {
  border: 1px solid #ddd;
  padding: 12px;
  cursor: pointer;
  display: flex;
  gap: 8px;
  align-items: center;
}

.payment-item.active {
  border-color: #000;
  background: #fff;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.4s;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
