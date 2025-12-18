<template>
  <div class="container">
    <div class="breadcrumb">
      <a href="#">Home</a> / <a href="#">Sản phẩm</a> / <a href="#">Nến thơm</a> / Item type 1
    </div>
    
    <div class="product-grid">
      <!-- Image Section -->
      <div class="image-gallery">
        <img :src="mainImage" alt="Vega Candle" class="main-image">
        <div class="thumbnails">
          <img
            v-for="(thumb, index) in thumbnails"
            :key="index"
            :src="thumb"
            alt="Thumbnail"
            class="thumbnail"
            @click="changeImage(thumb)"
          >
        </div>
      </div>
      
      <!-- Product Info Section -->
      <div class="product-info">
        <h1 class="product-title">Nến Thơm Star Collect type Capella</h1>
        
        <div class="price">
          <span class="old-price">357.990VND</span>
          <span class="new-price">259.000VND</span>
        </div>
        
        <div class="rating">★★★★★</div>
        
        <ul class="product-details">
          <li>Trọng Lượng 180gr</li>
          <li>Thời sự dụng 60 Tiếng</li>
          <li>Phông khach - Gian bếp</li>
          <li>Nến thơm Handmade ngây lieu 100% tu nhiên.</li>
          <li>Giao hang ngay trong ngay</li>
          <li>Thiết kế theo yêu cầu của don gian.</li>
        </ul>
        
        <div class="quantity">
          <button @click="decreaseQuantity">-</button>
          <input type="text" :value="quantity" readonly>
          <button @click="increaseQuantity">+</button>
        </div>
        
        <button class="add-to-cart" @click="addToCart">ADD TO CART</button>
      </div>
    
    </div>
    <div class="mt-5">
        <h1 class="text-2xl font-bold mb-3">Description</h1>
        <p class="w-full">Nến Thơm Giáng Sinh Tinh Dầu Cao Cấp First Sight Tết An Yên Hũ 250GR
        𝓐𝓷 𝓨𝓮̂𝓷 – Mùi hương khơi gợi sự an lành, bình yên cho ngày đầu năm mới.
        Nến thơm có có vị ngọt và thơm, hương vị đậm đà và lưu hương lâu. Mang đến cảm giác thanh mát nhẹ nhàng trong lần đầu cảm nhận, đi theo sau là những note hương ấm áp như Xạ hương, tuyết tùng cho cảm giác ngọt, ấm giúp thư giãn và đem lại mùi hương sang trọng. thơm và lưu hương lâu.
        Cũng nhờ những note hương mang tính ấm, ngọt nhưng vẫn giữ được sự trong lành nên dễ dàng giúp ta cảm thấy nhẹ nhàng và an yên hơn khi dịp Lễ Tết ngồi hàn huyên, thưởng trà cùng người thân yêu.
        Hương Đầu: Quả bưởi, Quả mộc qua
        Hương giữa: Hoa nhài, Hoa lan dạ hương
        Hương cuối: Xạ hương, Hoa diên vĩ, Gỗ tuyết tùng Virginia, Hổ phách</p>
    </div>
    <div class="mt-10">
        <LandingHotsProduct/>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
definePageMeta({
  layout: 'common',
})
const mainImage = ref('/Frame 101.svg')
const thumbnails = ref([
  '/Frame 101.svg',
  '/Frame 101.svg',
  '/Frame 101.svg',
  '/Frame 101.svg'
])
const quantity = ref(1)

const changeImage = (thumb) => {
  mainImage.value = thumb.replace('100x100', '400x400')
}

const increaseQuantity = () => {
  quantity.value++
}

const decreaseQuantity = () => {
  if (quantity.value > 1) {
    quantity.value--
  }
}

const addToCart = () => {
  console.log(`Added ${quantity.value} items to cart`)
  // Implement add to cart logic here
}
</script>

<style scoped>
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  font-family: Arial, sans-serif;
}
.breadcrumb {
  font-size: 14px;
  color: #666;
  margin-bottom: 20px;
}
.breadcrumb a {
  text-decoration: none;
  color: #666;
}
.product-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
}
.image-gallery {
  position: relative;
}
.main-image {
  width: 100%;
  height: auto;
  border-radius: 8px;
}
.thumbnails {
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
}
.thumbnail {
  width: 23%;
  height: auto;
  border-radius: 4px;
  cursor: pointer;
}
.product-info {
  padding: 20px 0;
}
.product-title {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
}
.price {
  font-size: 20px;
  margin-bottom: 10px;
}
.old-price {
  text-decoration: line-through;
  color: #999;
  margin-right: 10px;
}
.new-price {
  color: red;
  font-weight: bold;
}
.rating {
  color: #ffd700;
  font-size: 18px;
  margin-bottom: 10px;
}
.product-details {
  list-style-type: disc;
  padding-left: 20px;
  margin-bottom: 20px;
}
.quantity {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
}
.quantity input {
  width: 50px;
  text-align: center;
  margin: 0 10px;
  border: 1px solid #ccc;
  padding: 5px;
}
.quantity button {
  background: #eee;
  border: 1px solid #ccc;
  padding: 5px 10px;
  cursor: pointer;
}
.add-to-cart {
  background: #007bff;
  color: white;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  font-size: 16px;
}
@media (max-width: 768px) {
  .product-grid {
    grid-template-columns: 1fr;
  }
}
</style>