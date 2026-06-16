<template>
  <div class="guide-page">
    <div class="page-header">
      <div class="container">
        <h1>智能导览</h1>
        <p>数字化导览走马庄村，语音讲解带您深度体验渔赏、渔享路线</p>
      </div>
    </div>

    <section class="section">
      <div class="container guide-layout">
        <div class="routes-panel">
          <h3>选择导览路线</h3>
          <div
            v-for="route in routes"
            :key="route.id"
            class="route-item card"
            :class="{ active: selectedRoute?.id === route.id }"
            @click="selectRoute(route)"
          >
            <AppImage :src="route.image" :alt="route.name" />
            <div class="route-info">
              <h4>{{ route.name }}</h4>
              <p>{{ route.duration }} · {{ route.distance }} · {{ route.points }}个讲解点</p>
            </div>
          </div>
        </div>

        <div class="map-panel card">
          <div class="map-header">
            <h3>{{ selectedRoute?.name || '请选择路线' }}</h3>
            <span v-if="selectedRoute" class="badge badge-primary">
              {{ currentPoints.length }} 个讲解点
            </span>
          </div>

          <div class="map-area">
            <div class="map-bg">
              <svg viewBox="0 0 100 100" class="map-svg">
                <path
                  d="M10,75 Q30,40 50,55 T90,30"
                  fill="none"
                  stroke="#0ea5e9"
                  stroke-width="0.5"
                  stroke-dasharray="2,1"
                  opacity="0.5"
                />
              </svg>
              <button
                v-for="point in currentPoints"
                :key="point.id"
                class="map-point"
                :class="{ active: selectedPoint?.id === point.id }"
                :style="{ left: point.x + '%', top: point.y + '%' }"
                @click="selectPoint(point)"
                :title="point.name"
              >
                <span class="point-num">{{ point.id }}</span>
              </button>
            </div>
          </div>

          <div v-if="selectedPoint" class="point-detail">
            <h4>{{ selectedPoint.name }}</h4>
            <p>{{ selectedPoint.description }}</p>
            <button class="btn btn-sm btn-primary" @click="playAudio">
              🔊 {{ isPlaying ? '播放中...' : '语音讲解' }}
            </button>
          </div>
          <div v-else class="point-hint">
            点击地图上的标记点，查看讲解内容
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { getGuideRoutes, getGuidePoints } from '@/api/guide'
import AppImage from '@/components/AppImage.vue'
import { showToast } from '@/utils/request'

const routes = ref([])
const selectedRoute = ref(null)
const currentPoints = ref([])
const selectedPoint = ref(null)
const isPlaying = ref(false)

async function selectRoute(route) {
  selectedRoute.value = route
  selectedPoint.value = null
  currentPoints.value = await getGuidePoints(route.id)
}

function selectPoint(point) {
  selectedPoint.value = point
  isPlaying.value = false
}

function playAudio() {
  if (!selectedPoint.value) return
  isPlaying.value = true
  showToast(`正在播放：${selectedPoint.value.audio.substring(0, 30)}...`)
  setTimeout(() => {
    isPlaying.value = false
  }, 3000)
}

onMounted(async () => {
  routes.value = await getGuideRoutes()
  if (routes.value.length) {
    selectRoute(routes.value[0])
  }
})
</script>

<style scoped>
.guide-layout {
  display: grid;
  grid-template-columns: 320px 1fr;
  gap: 24px;
  align-items: start;
}

.routes-panel h3 {
  font-size: 1rem;
  font-weight: 700;
  margin-bottom: 16px;
}

.route-item {
  display: flex;
  gap: 12px;
  padding: 12px;
  margin-bottom: 12px;
  cursor: pointer;
  border: 2px solid transparent;
}

.route-item.active {
  border-color: var(--color-primary);
  background: var(--color-primary-light);
}

.route-item img {
  width: 72px;
  height: 72px;
  object-fit: cover;
  border-radius: var(--radius-sm);
  flex-shrink: 0;
}

.route-info h4 {
  font-size: 0.95rem;
  font-weight: 600;
  margin-bottom: 4px;
}

.route-info p {
  font-size: 0.8rem;
  color: var(--color-text-muted);
}

.map-panel {
  padding: 24px;
}

.map-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.map-header h3 {
  font-size: 1.1rem;
  font-weight: 700;
}

.map-area {
  border-radius: var(--radius-md);
  overflow: hidden;
  margin-bottom: 20px;
}

.map-bg {
  position: relative;
  height: 400px;
  background: linear-gradient(180deg, #ecfdf5 0%, #a7f3d0 35%, #6ee7b7 100%);
}

.map-svg {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
}

.map-point {
  position: absolute;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: #fff;
  border: 3px solid var(--color-primary);
  cursor: pointer;
  transform: translate(-50%, -50%);
  transition: all var(--transition);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  box-shadow: var(--shadow-md);
}

.map-point:hover,
.map-point.active {
  background: var(--color-primary);
  transform: translate(-50%, -50%) scale(1.15);
}

.map-point.active .point-num,
.map-point:hover .point-num {
  color: #fff;
}

.point-num {
  font-size: 0.8rem;
  font-weight: 700;
  color: var(--color-primary);
}

.point-detail {
  padding: 20px;
  background: var(--color-bg);
  border-radius: var(--radius-sm);
}

.point-detail h4 {
  font-size: 1.05rem;
  font-weight: 700;
  margin-bottom: 8px;
}

.point-detail p {
  font-size: 0.9rem;
  color: var(--color-text-secondary);
  margin-bottom: 16px;
  line-height: 1.6;
}

.point-hint {
  text-align: center;
  padding: 24px;
  color: var(--color-text-muted);
  font-size: 0.9rem;
}

@media (max-width: 768px) {
  .guide-layout {
    grid-template-columns: 1fr;
  }

  .map-bg {
    height: 300px;
  }
}
</style>
