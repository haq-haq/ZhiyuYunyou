import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/Home.vue'),
    meta: { title: '首页' }
  },
  {
    path: '/tourism',
    name: 'Tourism',
    component: () => import('@/views/Tourism.vue'),
    meta: { title: '旅游服务' }
  },
  {
    path: '/tourism/:id',
    name: 'TourismDetail',
    component: () => import('@/views/TourismDetail.vue'),
    meta: { title: '景点详情' }
  },
  {
    path: '/booking',
    name: 'Booking',
    component: () => import('@/views/Booking.vue'),
    meta: { title: '活动预约' }
  },
  {
    path: '/guide',
    name: 'Guide',
    component: () => import('@/views/Guide.vue'),
    meta: { title: '智能导览' }
  },
  {
    path: '/shop',
    name: 'Shop',
    component: () => import('@/views/Shop.vue'),
    meta: { title: '渔品商城' }
  },
  {
    path: '/marketing',
    name: 'Marketing',
    component: () => import('@/views/Marketing.vue'),
    meta: { title: '数字营销' }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 }
  }
})

router.beforeEach((to) => {
  document.title = to.meta.title
    ? `${to.meta.title} · 智渔云游`
    : '智渔云游 · 数字平台'
})

export default router
