<template>
  <router-link :to="`/tourism/${spot.id}`" class="scenic-card card">
    <div class="scenic-image">
      <AppImage :src="spot.image" :alt="spot.name" />
      <div class="scenic-tags">
        <span v-for="tag in spot.tags" :key="tag" class="badge badge-primary">{{ tag }}</span>
      </div>
    </div>
    <div class="scenic-body">
      <h3>{{ spot.name }}</h3>
      <p class="location">📍 {{ spot.location }}</p>
      <div class="scenic-meta">
        <span class="rating">⭐ {{ spot.rating }}</span>
        <span class="price" v-if="spot.price > 0">¥{{ spot.price }}起</span>
        <span class="price free" v-else>免费</span>
      </div>
    </div>
  </router-link>
</template>

<script setup>
import AppImage from '@/components/AppImage.vue'

defineProps({
  spot: { type: Object, required: true }
})
</script>

<style scoped>
.scenic-card {
  display: block;
}

.scenic-image {
  position: relative;
  height: 200px;
  overflow: hidden;
}

.scenic-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.4s ease;
}

.scenic-card:hover .scenic-image img {
  transform: scale(1.05);
}

.scenic-tags {
  position: absolute;
  top: 12px;
  left: 12px;
  display: flex;
  gap: 6px;
  flex-wrap: wrap;
}

.scenic-body {
  padding: 20px;
}

.scenic-body h3 {
  font-size: 1.1rem;
  font-weight: 700;
  margin-bottom: 6px;
}

.location {
  font-size: 0.85rem;
  color: var(--color-text-secondary);
  margin-bottom: 12px;
}

.scenic-meta {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.rating {
  font-size: 0.9rem;
  font-weight: 600;
}

.price {
  font-size: 1rem;
  font-weight: 700;
  color: var(--color-accent);
}

.price.free {
  color: var(--color-success);
}
</style>
