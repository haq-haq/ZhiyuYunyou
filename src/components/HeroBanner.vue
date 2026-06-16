<template>
  <section class="hero">
    <div class="hero-slider">
      <div
        v-for="(banner, index) in banners"
        :key="banner.id"
        class="hero-slide"
        :class="{ active: currentIndex === index }"
        :style="{ backgroundImage: `url(${banner.image})` }"
      >
        <div class="hero-overlay"></div>
        <div class="container hero-content">
          <h1 class="hero-title fade-in-up">{{ banner.title }}</h1>
          <p class="hero-subtitle fade-in-up">{{ banner.subtitle }}</p>
          <router-link :to="banner.link" class="btn btn-primary fade-in-up">
            立即探索
          </router-link>
        </div>
      </div>
    </div>
    <div class="hero-dots">
      <button
        v-for="(_, index) in banners"
        :key="index"
        class="dot"
        :class="{ active: currentIndex === index }"
        @click="currentIndex = index"
      />
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const props = defineProps({
  banners: { type: Array, required: true }
})

const currentIndex = ref(0)
let timer = null

onMounted(() => {
  timer = setInterval(() => {
    if (props.banners.length) {
      currentIndex.value = (currentIndex.value + 1) % props.banners.length
    }
  }, 5000)
})

onUnmounted(() => {
  if (timer) clearInterval(timer)
})
</script>

<style scoped>
.hero {
  position: relative;
  height: 520px;
  overflow: hidden;
}

.hero-slider {
  height: 100%;
  position: relative;
}

.hero-slide {
  position: absolute;
  inset: 0;
  background-size: cover;
  background-position: center;
  opacity: 0;
  transition: opacity 0.8s ease;
}

.hero-slide.active {
  opacity: 1;
}

.hero-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    135deg,
    rgba(4, 120, 87, 0.75) 0%,
    rgba(15, 23, 42, 0.55) 100%
  );
}

.hero-content {
  position: relative;
  z-index: 1;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: #fff;
  padding-bottom: 40px;
}

.hero-title {
  font-size: 3rem;
  font-weight: 800;
  margin-bottom: 16px;
  text-shadow: 0 2px 20px rgba(0, 0, 0, 0.3);
  max-width: 600px;
}

.hero-subtitle {
  font-size: 1.2rem;
  opacity: 0.9;
  margin-bottom: 32px;
  max-width: 500px;
}

.hero-dots {
  position: absolute;
  bottom: 32px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 10px;
  z-index: 2;
}

.dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  border: 2px solid #fff;
  background: transparent;
  cursor: pointer;
  transition: all var(--transition);
  padding: 0;
}

.dot.active {
  background: #fff;
  transform: scale(1.2);
}

@media (max-width: 640px) {
  .hero {
    height: 400px;
  }

  .hero-title {
    font-size: 2rem;
  }

  .hero-subtitle {
    font-size: 1rem;
  }
}
</style>
