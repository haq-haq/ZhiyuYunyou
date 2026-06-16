<template>
  <div class="marketing-page">
    <div class="page-header">
      <div class="container">
        <h1>数字营销</h1>
        <p>数字化运营模式，助力品牌推广、助农销售与乡村振兴</p>
      </div>
    </div>

    <section class="section">
      <div class="container">
        <div class="stats-row">
          <div v-for="stat in stats" :key="stat.label" class="stat-card card">
            <span class="stat-icon">{{ stat.icon }}</span>
            <div class="stat-value">{{ stat.value }}</div>
            <div class="stat-label">{{ stat.label }}</div>
          </div>
        </div>
      </div>
    </section>

    <section class="section promotions-section">
      <div class="container">
        <h2 class="section-title">优惠券活动</h2>
        <div class="promotions-grid">
          <div v-for="promo in promotions" :key="promo.id" class="promo-card card">
            <div class="promo-image">
              <AppImage :src="promo.image" :alt="promo.title" />
            </div>
            <div class="promo-body">
              <h3>{{ promo.title }}</h3>
              <p>{{ promo.description }}</p>
              <div class="promo-code">
                <code>{{ promo.code }}</code>
                <button class="btn btn-sm btn-outline" @click="copyCode(promo.code)">
                  复制
                </button>
              </div>
              <span class="promo-expire">有效期至 {{ promo.expire }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <h2 class="section-title">营销活动</h2>
        <div class="campaigns-grid">
          <div v-for="campaign in campaigns" :key="campaign.id" class="campaign-card card">
            <div class="campaign-image">
              <AppImage :src="campaign.image" :alt="campaign.title" />
              <span class="badge badge-success">进行中</span>
            </div>
            <div class="campaign-body">
              <h3>{{ campaign.title }}</h3>
              <p>{{ campaign.description }}</p>
              <div class="campaign-footer">
                <span class="participants">{{ campaign.participants }} 人参与</span>
                <button class="btn btn-sm btn-primary" @click="joinCampaign(campaign)">
                  立即参与
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { getPromotions, getCampaigns, getMarketingStats } from '@/api/marketing'
import AppImage from '@/components/AppImage.vue'
import { showToast } from '@/utils/request'

const stats = ref([])
const promotions = ref([])
const campaigns = ref([])

function copyCode(code) {
  navigator.clipboard?.writeText(code)
  showToast(`优惠码 ${code} 已复制`)
}

function joinCampaign(campaign) {
  showToast(`已成功参与「${campaign.title}」`)
}

onMounted(async () => {
  stats.value = await getMarketingStats()
  promotions.value = await getPromotions()
  campaigns.value = await getCampaigns()
})
</script>

<style scoped>
.stats-row {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
}

.stat-card {
  text-align: center;
  padding: 32px 20px;
}

.stat-card .stat-icon {
  font-size: 2rem;
  display: block;
  margin-bottom: 8px;
}

.stat-card .stat-value {
  font-size: 1.75rem;
  font-weight: 800;
  color: var(--color-primary-dark);
  margin-bottom: 4px;
}

.stat-card .stat-label {
  font-size: 0.9rem;
  color: var(--color-text-secondary);
}

.promotions-section {
  background: #fff;
}

.promotions-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}

.promo-card {
  overflow: hidden;
}

.promo-image {
  height: 140px;
  overflow: hidden;
}

.promo-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.promo-body {
  padding: 20px;
}

.promo-body h3 {
  font-size: 1.1rem;
  font-weight: 700;
  margin-bottom: 6px;
}

.promo-body p {
  font-size: 0.9rem;
  color: var(--color-text-secondary);
  margin-bottom: 16px;
}

.promo-code {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 8px;
}

.promo-code code {
  flex: 1;
  padding: 8px 16px;
  background: var(--color-accent-light);
  border-radius: var(--radius-sm);
  font-size: 1rem;
  font-weight: 700;
  color: #c2410c;
  letter-spacing: 2px;
}

.promo-expire {
  font-size: 0.8rem;
  color: var(--color-text-muted);
}

.campaigns-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}

.campaign-image {
  position: relative;
  height: 180px;
  overflow: hidden;
}

.campaign-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.campaign-image .badge {
  position: absolute;
  top: 12px;
  right: 12px;
}

.campaign-body {
  padding: 20px;
}

.campaign-body h3 {
  font-size: 1.1rem;
  font-weight: 700;
  margin-bottom: 8px;
}

.campaign-body p {
  font-size: 0.9rem;
  color: var(--color-text-secondary);
  margin-bottom: 16px;
  line-height: 1.5;
}

.campaign-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.participants {
  font-size: 0.85rem;
  color: var(--color-text-muted);
}

@media (max-width: 1024px) {
  .stats-row,
  .promotions-grid,
  .campaigns-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 640px) {
  .stats-row,
  .promotions-grid,
  .campaigns-grid {
    grid-template-columns: 1fr;
  }
}
</style>
