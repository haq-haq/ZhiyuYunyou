<template>
  <div class="product-card card">
    <div class="product-image">
      <AppImage :src="product.image" :alt="product.name" />
      <span class="category-badge badge badge-accent">{{ product.category }}</span>
    </div>
    <div class="product-body">
      <h3>{{ product.name }}</h3>
      <p class="product-desc">{{ product.description }}</p>
      <div class="product-meta">
        <span class="sales">已售 {{ product.sales }}</span>
        <span class="unit">/ {{ product.unit }}</span>
      </div>
      <div class="product-footer">
        <div class="prices">
          <span class="current-price">¥{{ product.price }}</span>
          <span class="original-price">¥{{ product.originalPrice }}</span>
        </div>
        <button class="btn btn-sm btn-accent" @click="$emit('add', product)">
          加入购物车
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import AppImage from '@/components/AppImage.vue'

defineProps({
  product: { type: Object, required: true }
})

defineEmits(['add'])
</script>

<style scoped>
.product-image {
  position: relative;
  height: 200px;
  overflow: hidden;
}

.product-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.4s ease;
}

.product-card:hover .product-image img {
  transform: scale(1.05);
}

.category-badge {
  position: absolute;
  top: 12px;
  left: 12px;
}

.product-body {
  padding: 20px;
}

.product-body h3 {
  font-size: 1.05rem;
  font-weight: 700;
  margin-bottom: 6px;
}

.product-desc {
  font-size: 0.85rem;
  color: var(--color-text-secondary);
  margin-bottom: 8px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.product-meta {
  font-size: 0.8rem;
  color: var(--color-text-muted);
  margin-bottom: 12px;
}

.product-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.current-price {
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--color-accent);
}

.original-price {
  font-size: 0.85rem;
  color: var(--color-text-muted);
  text-decoration: line-through;
  margin-left: 8px;
}

.prices {
  display: flex;
  align-items: baseline;
}
</style>
