<template>
  <div class="tourism-page">
    <div class="page-header">
      <div class="container">
        <h1>旅游服务</h1>
        <p>漫步密云水库，探访走马庄村，体验渔食、渔居、渔赏、渔享四大场景</p>
      </div>
    </div>

    <section class="section">
      <div class="container">
        <h2 class="section-title">体验场景</h2>
        <div class="grid-3" v-if="spots.length">
          <ScenicCard v-for="spot in spots" :key="spot.id" :spot="spot" />
        </div>
        <div v-else class="loading">加载中...</div>
      </div>
    </section>

    <section class="section routes-section">
      <div class="container">
        <h2 class="section-title">推荐线路</h2>
        <div class="routes-grid" v-if="routes.length">
          <div v-for="route in routes" :key="route.id" class="route-card card">
            <div class="route-image">
              <AppImage :src="route.image" :alt="route.name" />
            </div>
            <div class="route-body">
              <h3>{{ route.name }}</h3>
              <div class="route-meta">
                <span class="badge badge-primary">{{ route.duration }}</span>
                <span class="route-price">¥{{ route.price }}</span>
              </div>
              <div class="route-spots">
                <span v-for="spot in route.spots" :key="spot" class="spot-tag">{{ spot }}</span>
              </div>
              <button class="btn btn-primary btn-sm" @click="showToast('线路咨询已提交，客服将联系您')">
                咨询线路
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import ScenicCard from '@/components/ScenicCard.vue'
import AppImage from '@/components/AppImage.vue'
import { getScenicSpots, getRoutes } from '@/api/tourism'
import { showToast } from '@/utils/request'

const spots = ref([])
const routes = ref([])

onMounted(async () => {
  spots.value = await getScenicSpots()
  routes.value = await getRoutes()
})
</script>

<style scoped>
.routes-section {
  background: #fff;
}

.routes-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}

.route-card {
  display: flex;
  flex-direction: column;
}

.route-image {
  height: 180px;
  overflow: hidden;
}

.route-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.route-body {
  padding: 20px;
  flex: 1;
  display: flex;
  flex-direction: column;
}

.route-body h3 {
  font-size: 1.1rem;
  font-weight: 700;
  margin-bottom: 12px;
}

.route-meta {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
}

.route-price {
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--color-accent);
}

.route-spots {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-bottom: 16px;
  flex: 1;
}

.spot-tag {
  font-size: 0.75rem;
  padding: 4px 10px;
  background: var(--color-bg);
  border-radius: var(--radius-full);
  color: var(--color-text-secondary);
}

@media (max-width: 1024px) {
  .routes-grid {
    grid-template-columns: 1fr;
  }
}
</style>
