<template>
  <div class="home">
    <HeroBanner v-if="banners.length" :banners="banners" />

    <section class="section intro-section">
      <div class="container intro-content">
        <span class="location-badge">📍 {{ site.location }}</span>
        <h2>农文旅融合发展体系</h2>
        <p class="intro-desc">
          立足密云水库，构建集<strong>渔食、渔居、渔赏、渔享</strong>于一体的农文旅融合发展体系，
          创新推出沉浸式体验场景与数字化运营模式，推动农业资源向体验资源转化、
          文化资源向消费资源转化、生态资源向经济资源转化，
          实现产业增值、农民增收和乡村振兴协同发展。
        </p>
      </div>
    </section>

    <section class="section pillars-section">
      <div class="container">
        <h2 class="section-title">四大体验板块</h2>
        <div class="grid-4">
          <FeatureCard
            v-for="pillar in pillars"
            :key="pillar.to"
            :icon="pillar.icon"
            :title="pillar.title"
            :description="pillar.description"
            :to="pillar.to"
          />
        </div>
      </div>
    </section>

    <section class="section features-section">
      <div class="container">
        <h2 class="section-title">数字平台服务</h2>
        <div class="grid-3">
          <FeatureCard
            v-for="feature in features"
            :key="feature.to"
            :icon="feature.icon"
            :title="feature.title"
            :description="feature.description"
            :to="feature.to"
          />
        </div>
      </div>
    </section>

    <section class="section scenic-section">
      <div class="container">
        <h2 class="section-title">走马庄体验场景</h2>
        <div class="grid-3" v-if="spots.length">
          <ScenicCard v-for="spot in spots.slice(0, 6)" :key="spot.id" :spot="spot" />
        </div>
        <div class="section-action">
          <router-link to="/tourism" class="btn btn-outline">查看全部场景</router-link>
        </div>
      </div>
    </section>

    <section class="section stats-section">
      <div class="container">
        <div class="stats-grid">
          <div v-for="stat in stats" :key="stat.label" class="stat-item">
            <span class="stat-icon">{{ stat.icon }}</span>
            <div class="stat-value">{{ stat.value }}</div>
            <div class="stat-label">{{ stat.label }}</div>
          </div>
        </div>
      </div>
    </section>

    <section class="section cta-section">
      <div class="container">
        <div class="cta-card">
          <h2>走进走马庄村 · 感受渔韵密云</h2>
          <p>赏水库风光、品渔家美食、住民宿院落、享渔耕乐趣</p>
          <div class="cta-buttons">
            <router-link to="/booking" class="btn btn-primary">预约体验</router-link>
            <router-link to="/guide" class="btn btn-outline" style="color: #fff; border-color: #fff">
              智能导览
            </router-link>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import HeroBanner from '@/components/HeroBanner.vue'
import FeatureCard from '@/components/FeatureCard.vue'
import ScenicCard from '@/components/ScenicCard.vue'
import { getBanners, getMarketingStats } from '@/api/marketing'
import { getScenicSpots } from '@/api/tourism'
import { SITE } from '@/constants/site'

const site = SITE
const banners = ref([])
const spots = ref([])
const stats = ref([])

const pillars = [
  { icon: '🍲', title: '渔食', description: '密云水库鲜鱼、灶台鱼、渔家小炒，品味舌尖上的渔文化', to: '/tourism' },
  { icon: '🏡', title: '渔居', description: '渔家民宿聚落，北方渔村院落，临水而居、听渔歌入眠', to: '/tourism' },
  { icon: '🌄', title: '渔赏', description: '水库观景、生态绿道、观鸟摄影，生态资源转化为文旅体验', to: '/guide' },
  { icon: '🎣', title: '渔享', description: '垂钓体验、渔耕研学、非遗工坊，沉浸式参与渔耕生活', to: '/booking' }
]

const features = [
  { icon: '🗺️', title: '旅游服务', description: '密云水库周边场景与特色线路，一站式规划行程', to: '/tourism' },
  { icon: '📅', title: '活动预约', description: '开渔节、垂钓营、美食课，在线预约便捷参与', to: '/booking' },
  { icon: '📱', title: '智能导览', description: '语音讲解、路线导航，数字化导览走马庄村', to: '/guide' },
  { icon: '🛒', title: '渔品商城', description: '水库鲜鱼、农产特产，助农直供直达餐桌', to: '/shop' },
  { icon: '📣', title: '数字营销', description: '优惠券、直播、打卡，数字化运营赋能乡村振兴', to: '/marketing' }
]

onMounted(async () => {
  banners.value = await getBanners()
  spots.value = await getScenicSpots()
  stats.value = await getMarketingStats()
})
</script>

<style scoped>
.intro-section {
  background: #fff;
  padding: 56px 0;
}

.intro-content {
  max-width: 820px;
  margin: 0 auto;
  text-align: center;
}

.location-badge {
  display: inline-block;
  padding: 6px 16px;
  background: var(--color-primary-light);
  color: var(--color-primary-dark);
  border-radius: var(--radius-full);
  font-size: 0.875rem;
  font-weight: 600;
  margin-bottom: 20px;
}

.intro-content h2 {
  font-size: 1.75rem;
  font-weight: 700;
  margin-bottom: 20px;
  color: var(--color-text);
}

.intro-desc {
  font-size: 1.05rem;
  color: var(--color-text-secondary);
  line-height: 1.9;
}

.intro-desc strong {
  color: var(--color-primary-dark);
}

.pillars-section {
  background: linear-gradient(180deg, #f0f9ff 0%, var(--color-bg) 100%);
}

.features-section {
  background: #fff;
}

.section-action {
  text-align: center;
  margin-top: 40px;
}

.stats-section {
  background: linear-gradient(135deg, var(--color-primary-dark), var(--color-primary));
  padding: 48px 0;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 32px;
}

.stat-item {
  text-align: center;
  color: #fff;
}

.stat-icon {
  font-size: 2rem;
  display: block;
  margin-bottom: 8px;
}

.stat-value {
  font-size: 2rem;
  font-weight: 800;
  margin-bottom: 4px;
}

.stat-label {
  font-size: 0.9rem;
  opacity: 0.85;
}

.cta-section {
  padding-bottom: 0;
}

.cta-card {
  background: linear-gradient(135deg, #0f172a 0%, #1e3a5f 100%);
  border-radius: var(--radius-lg);
  padding: 64px 48px;
  text-align: center;
  color: #fff;
}

.cta-card h2 {
  font-size: 2rem;
  margin-bottom: 12px;
}

.cta-card p {
  opacity: 0.8;
  margin-bottom: 32px;
  font-size: 1.05rem;
}

.cta-buttons {
  display: flex;
  gap: 16px;
  justify-content: center;
  flex-wrap: wrap;
}

@media (max-width: 768px) {
  .stats-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .cta-card {
    padding: 40px 24px;
  }

  .cta-card h2 {
    font-size: 1.5rem;
  }
}
</style>
