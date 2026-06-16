<template>
  <div class="booking-page">
    <div class="page-header">
      <div class="container">
        <h1>活动预约</h1>
        <p>开渔节、垂钓营、非遗工坊……在线预约，沉浸式体验渔享生活</p>
      </div>
    </div>

    <section class="section">
      <div class="container">
        <div class="filter-bar">
          <button
            v-for="tab in tabs"
            :key="tab.value"
            class="filter-btn"
            :class="{ active: currentTab === tab.value }"
            @click="currentTab = tab.value"
          >
            {{ tab.label }}
          </button>
        </div>

        <div class="grid-2" v-if="filteredActivities.length">
          <ActivityCard
            v-for="activity in filteredActivities"
            :key="activity.id"
            :activity="activity"
            @book="openBooking"
          />
        </div>
        <div v-else-if="!loading" class="empty-state">暂无活动</div>
        <div v-else class="loading">加载中...</div>
      </div>
    </section>

    <BookingModal
      v-if="selectedActivity"
      :activity="selectedActivity"
      @close="selectedActivity = null"
      @success="selectedActivity = null"
    />
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import ActivityCard from '@/components/ActivityCard.vue'
import BookingModal from '@/components/BookingModal.vue'
import { getActivities } from '@/api/booking'

const activities = ref([])
const loading = ref(true)
const currentTab = ref('all')
const selectedActivity = ref(null)

const tabs = [
  { label: '全部活动', value: 'all' },
  { label: '报名中', value: 'open' },
  { label: '已满员', value: 'full' }
]

const filteredActivities = computed(() => {
  if (currentTab.value === 'all') return activities.value
  return activities.value.filter((a) => a.status === currentTab.value)
})

function openBooking(activity) {
  selectedActivity.value = activity
}

onMounted(async () => {
  activities.value = await getActivities()
  loading.value = false
})
</script>

<style scoped>
.filter-bar {
  display: flex;
  gap: 8px;
  margin-bottom: 32px;
  flex-wrap: wrap;
}

.filter-btn {
  padding: 8px 20px;
  border: 1px solid var(--color-border);
  border-radius: var(--radius-full);
  background: #fff;
  font-size: 0.9rem;
  cursor: pointer;
  transition: all var(--transition);
  color: var(--color-text-secondary);
}

.filter-btn.active {
  background: var(--color-primary);
  color: #fff;
  border-color: var(--color-primary);
}

.filter-btn:hover:not(.active) {
  border-color: var(--color-primary);
  color: var(--color-primary);
}
</style>
