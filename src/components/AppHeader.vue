<template>
  <header class="header" :class="{ scrolled: isScrolled }">
    <div class="container header-inner">
      <router-link to="/" class="logo">
        <img :src="`${baseUrl}favicon.svg`" alt="智渔云游" class="logo-icon" />
        <span class="logo-text">{{ site.name }}</span>
      </router-link>

      <nav class="nav" :class="{ open: menuOpen }">
        <router-link
          v-for="item in navItems"
          :key="item.path"
          :to="item.path"
          class="nav-link"
          :class="{ active: isActive(item.path) }"
          @click="menuOpen = false"
        >
          {{ item.label }}
        </router-link>
      </nav>

      <button class="menu-toggle" @click="menuOpen = !menuOpen" aria-label="菜单">
        <span :class="{ open: menuOpen }"></span>
      </button>
    </div>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useRoute } from 'vue-router'
import { SITE, NAV } from '@/constants/site'

const route = useRoute()
const baseUrl = import.meta.env.BASE_URL
const site = SITE
const menuOpen = ref(false)
const isScrolled = ref(false)

const navItems = [
  { path: '/', label: NAV.home },
  { path: '/tourism', label: NAV.tourism },
  { path: '/booking', label: NAV.booking },
  { path: '/guide', label: NAV.guide },
  { path: '/shop', label: NAV.shop },
  { path: '/marketing', label: NAV.marketing }
]

function isActive(path) {
  if (path === '/') return route.path === '/'
  return route.path.startsWith(path)
}

function onScroll() {
  isScrolled.value = window.scrollY > 20
}

onMounted(() => window.addEventListener('scroll', onScroll))
onUnmounted(() => window.removeEventListener('scroll', onScroll))
</script>

<style scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: var(--header-height);
  background: rgba(255, 255, 255, 0.85);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid transparent;
  z-index: 1000;
  transition: all var(--transition);
}

.header.scrolled {
  background: rgba(255, 255, 255, 0.95);
  border-bottom-color: var(--color-border);
  box-shadow: var(--shadow-sm);
}

.header-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
}

.logo {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--color-primary-dark);
}

.logo-icon {
  width: 36px;
  height: 36px;
}

.nav {
  display: flex;
  align-items: center;
  gap: 8px;
}

.nav-link {
  padding: 8px 16px;
  border-radius: var(--radius-full);
  font-size: 0.9rem;
  font-weight: 500;
  color: var(--color-text-secondary);
  transition: all var(--transition);
}

.nav-link:hover,
.nav-link.active {
  color: var(--color-primary);
  background: var(--color-primary-light);
}

.menu-toggle {
  display: none;
  width: 40px;
  height: 40px;
  border: none;
  background: none;
  cursor: pointer;
  position: relative;
}

.menu-toggle span,
.menu-toggle span::before,
.menu-toggle span::after {
  display: block;
  width: 24px;
  height: 2px;
  background: var(--color-text);
  border-radius: 2px;
  transition: all var(--transition);
  position: absolute;
  left: 8px;
}

.menu-toggle span {
  top: 19px;
}

.menu-toggle span::before {
  content: '';
  top: -8px;
}

.menu-toggle span::after {
  content: '';
  top: 8px;
}

.menu-toggle span.open {
  background: transparent;
}

.menu-toggle span.open::before {
  top: 0;
  transform: rotate(45deg);
}

.menu-toggle span.open::after {
  top: 0;
  transform: rotate(-45deg);
}

@media (max-width: 768px) {
  .menu-toggle {
    display: block;
  }

  .nav {
    position: fixed;
    top: var(--header-height);
    left: 0;
    right: 0;
    background: #fff;
    flex-direction: column;
    padding: 16px;
    gap: 4px;
    border-bottom: 1px solid var(--color-border);
    box-shadow: var(--shadow-md);
    transform: translateY(-120%);
    opacity: 0;
    pointer-events: none;
    transition: all var(--transition);
  }

  .nav.open {
    transform: translateY(0);
    opacity: 1;
    pointer-events: auto;
  }

  .nav-link {
    width: 100%;
    text-align: center;
    padding: 12px;
  }
}
</style>
