<template>
  <div class="shop-page">
    <div class="page-header">
      <div class="container">
        <h1>渔品商城</h1>
        <p>密云水库鲜鱼、走马庄农产特产，产地直供，助农增收</p>
      </div>
    </div>

    <section class="section">
      <div class="container">
        <div class="category-bar">
          <button
            v-for="cat in categories"
            :key="cat"
            class="category-btn"
            :class="{ active: currentCategory === cat }"
            @click="filterCategory(cat)"
          >
            {{ cat }}
          </button>
        </div>

        <div class="shop-layout">
          <div class="products-grid">
            <ProductCard
              v-for="product in products"
              :key="product.id"
              :product="product"
              @add="addToCart"
            />
          </div>

          <aside class="cart-panel card" v-if="cart.length">
            <h3>购物车 ({{ cartCount }})</h3>
            <div class="cart-items">
              <div v-for="item in cart" :key="item.id" class="cart-item">
                <span class="cart-name">{{ item.name }}</span>
                <div class="cart-controls">
                  <button @click="decreaseQty(item)">−</button>
                  <span>{{ item.qty }}</span>
                  <button @click="increaseQty(item)">+</button>
                </div>
                <span class="cart-price">¥{{ item.price * item.qty }}</span>
              </div>
            </div>
            <div class="cart-total">
              <span>合计</span>
              <span class="total-price">¥{{ cartTotal }}</span>
            </div>
            <button class="btn btn-accent" style="width: 100%" @click="checkout">
              去结算
            </button>
          </aside>
        </div>

        <div v-if="!products.length && !loading" class="empty-state">暂无商品</div>
        <div v-if="loading" class="loading">加载中...</div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import ProductCard from '@/components/ProductCard.vue'
import { getProducts, getCategories } from '@/api/shop'
import { showToast } from '@/utils/request'

const products = ref([])
const categories = ref([])
const currentCategory = ref('全部')
const cart = ref([])
const loading = ref(true)

const cartCount = computed(() => cart.value.reduce((sum, item) => sum + item.qty, 0))
const cartTotal = computed(() => cart.value.reduce((sum, item) => sum + item.price * item.qty, 0))

async function filterCategory(cat) {
  currentCategory.value = cat
  loading.value = true
  products.value = await getProducts(cat)
  loading.value = false
}

function addToCart(product) {
  const existing = cart.value.find((item) => item.id === product.id)
  if (existing) {
    existing.qty++
  } else {
    cart.value.push({ ...product, qty: 1 })
  }
  showToast(`已添加 ${product.name} 到购物车`)
}

function increaseQty(item) {
  item.qty++
}

function decreaseQty(item) {
  if (item.qty > 1) {
    item.qty--
  } else {
    cart.value = cart.value.filter((i) => i.id !== item.id)
  }
}

function checkout() {
  showToast(`结算成功！共计 ¥${cartTotal.value}`)
  cart.value = []
}

onMounted(async () => {
  categories.value = await getCategories()
  products.value = await getProducts()
  loading.value = false
})
</script>

<style scoped>
.category-bar {
  display: flex;
  gap: 8px;
  margin-bottom: 32px;
  flex-wrap: wrap;
}

.category-btn {
  padding: 8px 20px;
  border: 1px solid var(--color-border);
  border-radius: var(--radius-full);
  background: #fff;
  font-size: 0.9rem;
  cursor: pointer;
  transition: all var(--transition);
  color: var(--color-text-secondary);
}

.category-btn.active {
  background: var(--color-accent);
  color: #fff;
  border-color: var(--color-accent);
}

.shop-layout {
  display: grid;
  grid-template-columns: 1fr 300px;
  gap: 24px;
  align-items: start;
}

.products-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}

.cart-panel {
  padding: 24px;
  position: sticky;
  top: calc(var(--header-height) + 24px);
}

.cart-panel h3 {
  font-size: 1rem;
  font-weight: 700;
  margin-bottom: 16px;
  padding-bottom: 12px;
  border-bottom: 1px solid var(--color-border);
}

.cart-item {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 0;
  border-bottom: 1px solid var(--color-border);
  font-size: 0.85rem;
}

.cart-name {
  flex: 1;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.cart-controls {
  display: flex;
  align-items: center;
  gap: 8px;
}

.cart-controls button {
  width: 24px;
  height: 24px;
  border: 1px solid var(--color-border);
  border-radius: 4px;
  background: #fff;
  cursor: pointer;
  font-size: 0.9rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

.cart-price {
  font-weight: 600;
  color: var(--color-accent);
  min-width: 50px;
  text-align: right;
}

.cart-total {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 0;
  font-weight: 700;
}

.total-price {
  font-size: 1.25rem;
  color: var(--color-accent);
}

@media (max-width: 1024px) {
  .shop-layout {
    grid-template-columns: 1fr;
  }

  .products-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .cart-panel {
    position: static;
  }
}

@media (max-width: 640px) {
  .products-grid {
    grid-template-columns: 1fr;
  }
}
</style>
