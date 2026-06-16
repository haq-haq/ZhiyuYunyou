<template>
  <router-link :to="to" class="feature-card card">
    <div class="feature-icon">{{ icon }}</div>
    <h3>{{ title }}</h3>
    <p>{{ description }}</p>
    <span class="feature-arrow">→</span>
  </router-link>
</template>

<script setup>
defineProps({
  icon: String,
  title: String,
  description: String,
  to: String
})
</script>

<style scoped>
.feature-card {
  display: block;
  padding: 32px 28px;
  position: relative;
  text-align: center;
}

.feature-icon {
  font-size: 2.5rem;
  margin-bottom: 16px;
}

.feature-card h3 {
  font-size: 1.15rem;
  font-weight: 700;
  margin-bottom: 8px;
  color: var(--color-text);
}

.feature-card p {
  font-size: 0.9rem;
  color: var(--color-text-secondary);
  line-height: 1.5;
}

.feature-arrow {
  position: absolute;
  bottom: 20px;
  right: 24px;
  color: var(--color-primary);
  font-size: 1.2rem;
  opacity: 0;
  transition: all var(--transition);
}

.feature-card:hover .feature-arrow {
  opacity: 1;
  transform: translateX(4px);
}
</style>
