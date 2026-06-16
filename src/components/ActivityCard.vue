<template>
  <div class="activity-card card">
    <div class="activity-image">
      <AppImage :src="activity.image" :alt="activity.title" />
      <span class="status-badge" :class="activity.status">
        {{ activity.status === 'open' ? '报名中' : '已满员' }}
      </span>
    </div>
    <div class="activity-body">
      <h3>{{ activity.title }}</h3>
      <div class="activity-info">
        <p>📅 {{ activity.date }} {{ activity.time }}</p>
        <p>📍 {{ activity.location }}</p>
      </div>
      <p class="activity-desc">{{ activity.description }}</p>
      <div class="activity-footer">
        <div class="quota">
          <span>{{ activity.enrolled }}/{{ activity.quota }} 人</span>
          <div class="progress-bar">
            <div
              class="progress-fill"
              :style="{ width: `${(activity.enrolled / activity.quota) * 100}%` }"
            />
          </div>
        </div>
        <div class="activity-action">
          <span class="price" v-if="activity.price > 0">¥{{ activity.price }}</span>
          <span class="price free" v-else>免费</span>
          <button
            class="btn btn-sm"
            :class="activity.status === 'open' ? 'btn-primary' : 'btn-outline'"
            :disabled="activity.status !== 'open'"
            @click="$emit('book', activity)"
          >
            {{ activity.status === 'open' ? '立即预约' : '已满员' }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import AppImage from '@/components/AppImage.vue'

defineProps({
  activity: { type: Object, required: true }
})

defineEmits(['book'])
</script>

<style scoped>
.activity-image {
  position: relative;
  height: 180px;
  overflow: hidden;
}

.activity-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.status-badge {
  position: absolute;
  top: 12px;
  right: 12px;
  padding: 4px 12px;
  border-radius: var(--radius-full);
  font-size: 0.75rem;
  font-weight: 600;
  color: #fff;
}

.status-badge.open {
  background: var(--color-success);
}

.status-badge.full {
  background: var(--color-text-muted);
}

.activity-body {
  padding: 20px;
}

.activity-body h3 {
  font-size: 1.1rem;
  font-weight: 700;
  margin-bottom: 10px;
}

.activity-info p {
  font-size: 0.85rem;
  color: var(--color-text-secondary);
  margin-bottom: 4px;
}

.activity-desc {
  font-size: 0.875rem;
  color: var(--color-text-secondary);
  margin: 12px 0;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.activity-footer {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  gap: 16px;
  margin-top: 16px;
}

.quota {
  flex: 1;
  font-size: 0.8rem;
  color: var(--color-text-muted);
}

.progress-bar {
  height: 4px;
  background: var(--color-border);
  border-radius: 2px;
  margin-top: 6px;
  overflow: hidden;
}

.progress-fill {
  height: 100%;
  background: linear-gradient(90deg, var(--color-primary), var(--color-accent));
  border-radius: 2px;
  transition: width 0.3s ease;
}

.activity-action {
  display: flex;
  align-items: center;
  gap: 12px;
}

.activity-action .price {
  font-size: 1.1rem;
  font-weight: 700;
  color: var(--color-accent);
}

.activity-action .price.free {
  color: var(--color-success);
}

.activity-action .btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}
</style>
