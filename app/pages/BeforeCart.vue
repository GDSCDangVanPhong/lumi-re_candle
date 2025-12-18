<template>
  <div class="cart-container">
    <h1 class="breadcrumb">GIỎ HÀNG &gt; KIỂM TRA CHI TIẾT &gt; HOÀN THÀNH ĐƠN HÀNG</h1>
    
    <div class="cart-layout">
      <table class="cart-table">
        <thead>
          <tr>
            <th>Product</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in cartItems" :key="index">
            <td class="product-cell">
              <button class="remove-btn" @click="removeItem(index)">×</button>
              <img :src="item.image" alt="Product Image" class="product-image ">
              <span class="product-name">{{ item.name }}</span>
            </td>
            <td>{{ item.price }}</td>
            <td>
              <div class="quantity-control">
                <button @click="decreaseQuantity(index)">-</button>
                <input type="text" :value="item.quantity" readonly>
                <button @click="increaseQuantity(index)">+</button>
              </div>
            </td>
            <td>{{ item.total }}</td>
          </tr>
        </tbody>
      </table>
      
      <div class="cart-totals">
        <table>
          <tr>
            <td>Subtotals</td>
            <td>{{ subtotals }}</td>
          </tr>
          <tr>
            <td>Shipping</td>
            <td>Giao tại nhà: Đồng giá 30.000 VND</td>
          </tr>
          <tr>
            <td>Totals</td>
            <td>{{ totals }}</td>
          </tr>
        </table>
        
        <button class="continue-shopping" @click="navigateTo('/products')">&lt; Continue Shopping</button>
        <button class="proceed-checkout" @click="navigateTo('/CompleteCart')">Proceed to checkout</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
definePageMeta({
  layout: 'common'
})
const cartItems = ref([
  {
    image: '/Frame 101.svg',
    name: 'Nến Thơm Star Collect Capella',
    price: '359.000VND',
    quantity: 1,
    total: '359.000VND'
  }
])

const subtotals = computed(() => {
  return cartItems.value.reduce((sum, item) => sum + parseFloat(item.total.replace(/[^0-9.-]+/g, '')), 0).toLocaleString() + 'VND'
})

const totals = computed(() => {
  const sub = parseFloat(subtotals.value.replace(/[^0-9.-]+/g, ''))
  return (sub + 30000).toLocaleString() + 'VND'
})

const removeItem = (index) => {
  cartItems.value.splice(index, 1)
}

const increaseQuantity = (index) => {
  cartItems.value[index].quantity++
  updateTotal(index)
}

const decreaseQuantity = (index) => {
  if (cartItems.value[index].quantity > 1) {
    cartItems.value[index].quantity--
    updateTotal(index)
  }
}

const updateTotal = (index) => {
  const price = parseFloat(cartItems.value[index].price.replace(/[^0-9.-]+/g, ''))
  cartItems.value[index].total = (price * cartItems.value[index].quantity).toLocaleString() + 'VND'
}
</script>

<style scoped>
.cart-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  font-family: Arial, sans-serif;
}

.breadcrumb {
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 20px;
  text-align: center;
}

.cart-layout {
  display: flex;
  justify-content: space-between;
  gap: 20px;
}

.cart-table {
  width: 70%;
  border-collapse: collapse;
}

.cart-table th, .cart-table td {
  border: 1px solid #ddd;
  padding: 10px;
  text-align: left;
}

.product-cell {
  display: flex;
  align-items: center;
}

.remove-btn {
  background: none;
  border: none;
  font-size: 20px;
  cursor: pointer;
  margin-right: 10px;
}

.product-image {
  width: 50px;
  height: 500px;
  margin-right: 10px;
}

.quantity-control {
  display: flex;
  align-items: center;
}

.quantity-control input {
  width: 40px;
  text-align: center;
  border: 1px solid #ccc;
  margin: 0 5px;
}

.quantity-control button {
  background: #f0f0f0;
  border: 1px solid #ccc;
  padding: 5px 10px;
  cursor: pointer;
}

.cart-totals {
  width: 30%;
  background: #f9f9f9;
  padding: 20px;
  border: 1px solid #ddd;
}

.cart-totals table {
  width: 100%;
  border-collapse: collapse;
}

.cart-totals td {
  padding: 10px;
  border: 1px solid #ddd;
}

.continue-shopping {
  background: #f0f0f0;
  border: 1px solid #ccc;
  padding: 10px;
  width: 100%;
  margin-top: 20px;
  cursor: pointer;
}

.proceed-checkout, .apply-voucher {
  background: #d4af37;
  color: white;
  border: none;
  padding: 10px;
  width: 100%;
  margin-top: 10px;
  cursor: pointer;
  font-weight: bold;
}

@media (max-width: 768px) {
  .cart-layout {
    flex-direction: column;
  }
  .cart-table, .cart-totals {
    width: 100%;
  }
}
</style>