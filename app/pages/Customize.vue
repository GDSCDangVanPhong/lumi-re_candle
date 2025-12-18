<template>
  <div class="container">
    <h1 class="title">Customize Your Candle (Pure SVG)</h1>

    <div class="customizer">
      <!-- LEFT: STEPS -->
      <aside class="sidebar">
        <div
          v-for="s in steps"
          :key="s.id"
          class="step"
          :class="{ active: step === s.id, done: step > s.id }"
        >
          <div class="step-index">{{ step > s.id ? '✓' : s.id }}</div>
          <div class="step-body">
            <h3>{{ s.title }}</h3>
            <p>{{ s.desc }}</p>
          </div>
        </div>
      </aside>

      <!-- CENTER: SVG PREVIEW -->
      <section class="preview">
        <svg
          class="jar-svg"
          viewBox="0 0 240 360"
          xmlns="http://www.w3.org/2000/svg"
        >
          <!-- glass -->
          <rect
            x="40"
            y="40"
            width="160"
            height="260"
            rx="28"
            fill="rgba(255,255,255,0.6)"
            stroke="#ccc"
            stroke-width="3"
          />

          <!-- wax -->
          <rect
            x="50"
            :y="waxY"
            width="140"
            :height="waxHeight"
            rx="20"
            :fill="selectedColor"
            opacity="0.9"
          />

          <!-- label -->
          <g v-if="message1 || message2">
            <rect
              x="60"
              y="150"
              width="120"
              height="60"
              rx="12"
              fill="white"
              opacity="0.85"
            />
            <text
              x="120"
              y="175"
              text-anchor="middle"
              font-size="12"
              font-weight="600"
              fill="#333"
            >{{ message1 }}</text>
            <text
              x="120"
              y="195"
              text-anchor="middle"
              font-size="11"
              fill="#555"
            >{{ message2 }}</text>
          </g>

          <!-- rim -->
          <rect x="35" y="30" width="170" height="20" rx="10" fill="#eee" />
        </svg>

        <p class="meta">SVG Candle Jar · Live Props</p>
      </section>

      <!-- RIGHT: CONTROLS -->
      <section class="controls">
        <div v-if="step === 1" class="panel">
          <h2>Wax Color</h2>
          <div class="colors">
            <button
              v-for="c in colors"
              :key="c.hex"
              :style="{ background: c.hex }"
              :class="{ selected: selectedColor === c.hex }"
              @click="selectColor(c.hex)"
            />
          </div>
        </div>

        <div v-if="step === 2" class="panel">
          <h2>Wax Level</h2>
          <input type="range" min="20" max="180" v-model="waxHeight" />
        </div>

        <div v-if="step === 3" class="panel">
          <h2>Label Message</h2>
          <input v-model="message1" placeholder="Line 1" />
          <input v-model="message2" placeholder="Line 2" />
        </div>

        <div v-if="step === 4" class="panel confirm">
          <h2>Review & Add to Cart</h2>
          <ul class="summary">
            <li><strong>Wax color:</strong> {{ selectedColor }}</li>
            <li><strong>Wax level:</strong> {{ waxHeight }}</li>
            <li><strong>Label:</strong> {{ message1 || '—' }} {{ message2 }}</li>
          </ul>
          <button
            class="add"
            @click="addToCart"
            :disabled="adding || added"
          >
            <span v-if="adding">Adding...</span>
            <span v-else-if="added">✓ Added</span>
            <span v-else>Add to Cart</span>
          </button>

        </div>

        <div class="actions">
          <button @click="prev" :disabled="step === 1">Back</button>
          <button @click="next" :disabled="step === 4">Next</button>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useCartStore } from '~/stores/cart'

definePageMeta({
  layout: 'common'
})
const step = ref(1)
const adding = ref(false)
const added = ref(false)
const cart = useCartStore()


const steps = [
  { id: 1, title: 'Color', desc: 'Wax color' },
  { id: 2, title: 'Level', desc: 'Wax height' },
  { id: 3, title: 'Label', desc: 'Custom text' },
  { id: 4, title: 'Add to Cart', desc: 'Confirm & add' }
]

const colors = [
  { hex: '#a8c4a0' },
  { hex: '#fff1c1' },
  { hex: '#ffb6c1' },
  { hex: '#add8e6' }
]

const selectedColor = ref('#a8c4a0')
const waxHeight = ref(140)
const message1 = ref('')
const message2 = ref('')

const waxY = computed(() => 300 - waxHeight.value)

const selectColor = c => {
  selectedColor.value = c
  step.value = 2
}

const next = () => step.value < 4 && step.value++
const prev = () => step.value > 1 && step.value--

const addToCart = async () => {
  if (adding.value) return
  adding.value = true

  const payload = {
    product: 'custom-candle',
    color: selectedColor.value,
    waxLevel: waxHeight.value,
    label: [message1.value, message2.value]
  }

  cart.add(payload)

  await new Promise(r => setTimeout(r, 600))

  adding.value = false
  added.value = true
}


</script>

<style scoped>
.container { max-width: 1400px; margin:auto; padding:40px }
.customizer { display:grid; grid-template-columns:240px 1fr 360px; gap:40px }
.title { text-align:center; margin-bottom:40px }

.sidebar .step { display:flex; gap:12px; margin-bottom:20px; opacity:.4 }
.step.active, .step.done { opacity:1 }
.step-index { width:28px; height:28px; border-radius:50%; background:#1890ff; color:#fff; display:flex;align-items:center;justify-content:center }

.preview { display:flex; flex-direction:column; align-items:center }
.jar-svg { width:280px }
.meta { margin-top:16px; color:#666 }

.panel { background:#fafafa; padding:20px; border-radius:14px }
.colors { display:flex; gap:14px }
.colors button { width:40px; height:40px; border-radius:50%; border:2px solid #eee }
.colors button.selected { outline:3px solid #1890ff }

.actions { display:flex; justify-content:space-between; margin-top:20px }
</style>
