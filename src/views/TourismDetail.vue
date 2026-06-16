<template>
  <div class="detail-page" v-if="spot">
    <div class="detail-hero" :style="{ backgroundImage: `url(${spot.image})` }">
      <div class="hero-overlay"></div>
      <div class="container detail-hero-content">
        <router-link to="/tourism" class="back-link">← 返回景点列表</router-link>
        <h1>{{ spot.name }}</h1>
        <p>📍 {{ spot.location }} · ⭐ {{ spot.rating }}</p>
      </div>
    </div>

    <div class="container detail-body">
      <div class="detail-main">
        <section class="detail-section">
          <h2>景点介绍</h2>
          <p>{{ spot.description }}</p>
        </section>

        <section class="detail-section">
          <h2>特色亮点</h2>
          <div class="highlights">
            <span v-for="item in spot.highlights" :key="item" class="highlight-item">
              ✓ {{ item }}
            </span>
          </div>
        </section>
      </div>

      <aside class="detail-sidebar">
        <div class="info-card card">
          <div class="info-row">
            <span class="label">门票价格</span>
            <span class="value price" v-if="spot.price > 0">¥{{ spot.price }}</span>
            <span class="value free" v-else>免费</span>
          </div>
          <div class="info-row">
            <span class="label">开放时间</span>
            <span class="value">{{ spot.openTime }}</span>
          </div>
          <div class="info-row">
            <span class="label">标签</span>
            <div class="tags">
              <span v-for="tag in spot.tags" :key="tag" class="badge badge-primary">{{ tag }}</span>
            </div>
          </div>
          <button class="btn btn-primary" style="width: 100%; margin-top: 16px" @click="showToast('门票预订功能开发中')">
            预订门票
          </button>
          <router-link to="/guide" class="btn btn-outline" style="width: 100%; margin-top: 8px; display: block; text-align: center">
            智能导览
          </router-link>
        </div>
      </aside>
    </div>
  </div>
  <div v-else class="loading">加载中...</div>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue'
import { useRoute } from 'vue-router'
import { getScenicSpotById } from '@/api/tourism'
import { showToast } from '@/utils/request'

const route = useRoute()
const spot = ref(null)

async function loadSpot() {
  spot.value = await getScenicSpotById(route.params.id)
}

onMounted(loadSpot)
watch(() => route.params.id, loadSpot)
</script>

<style scoped>
.detail-hero {
  height: 360px;
  background-size: cover;
  background-position: center;
  position: relative;
}

.hero-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, rgba(15, 23, 42, 0.8), rgba(15, 23, 42, 0.3));
}

.detail-hero-content {
  position: relative;
  z-index: 1;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding-bottom: 40px;
  color: #fff;
}

.back-link {
  font-size: 0.9rem;
  opacity: 0.8;
  margin-bottom: 16px;
  transition: opacity var(--transition);
}

.back-link:hover {
  opacity: 1;
}

.detail-hero-content h1 {
  font-size: 2.5rem;
  font-weight: 800;
  margin-bottom: 8px;
}

.detail-body {
  display: grid;
  grid-template-columns: 1fr 320px;
  gap: 40px;
  padding: 40px 24px 64px;
}

.detail-section {
  margin-bottom: 32px;
}

.detail-section h2 {
  font-size: 1.25rem;
  font-weight: 700;
  margin-bottom: 16px;
  padding-bottom: 8px;
  border-bottom: 2px solid var(--color-primary-light);
}

.detail-section p {
  color: var(--color-text-secondary);
  line-height: 1.8;
}

.highlights {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 12px;
}

.highlight-item {
  padding: 12px 16px;
  background: var(--color-primary-light);
  border-radius: var(--radius-sm);
  color: var(--color-primary-dark);
  font-size: 0.9rem;
  font-weight: 500;
}

.info-card {
  padding: 24px;
  position: sticky;
  top: calc(var(--header-height) + 24px);
}

.info-row {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 12px 0;
  border-bottom: 1px solid var(--color-border);
}

.info-row .label {
  color: var(--color-text-muted);
  font-size: 0.9rem;
}

.info-row .value {
  font-weight: 600;
  text-align: right;
}

.info-row .value.price {
  font-size: 1.5rem;
  color: var(--color-accent);
}

.info-row .value.free {
  color: var(--color-success);
}

.tags {
  display: flex;
  gap: 6px;
  flex-wrap: wrap;
  justify-content: flex-end;
}

@media (max-width: 768px) {
  .detail-body {
    grid-template-columns: 1fr;
  }

  .detail-hero-content h1 {
    font-size: 1.75rem;
  }

  .highlights {
    grid-template-columns: 1fr;
  }
}
</style>
