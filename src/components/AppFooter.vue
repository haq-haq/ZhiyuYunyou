<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-top">
        <div class="footer-brand">
          <div class="brand-name">{{ site.name }}</div>
          <p class="brand-slogan">{{ site.slogan }}</p>
          <p class="brand-location">📍 {{ site.location }}</p>
        </div>
        <div class="footer-links">
          <div class="link-group">
            <h4>平台服务</h4>
            <router-link to="/tourism">旅游服务</router-link>
            <router-link to="/booking">活动预约</router-link>
            <router-link to="/guide">智能导览</router-link>
          </div>
          <div class="link-group">
            <h4>商业服务</h4>
            <router-link to="/shop">渔品商城</router-link>
            <router-link to="/marketing">数字营销</router-link>
          </div>
          <div class="link-group">
            <h4>联系我们</h4>
            <span>010-6904-6688</span>
            <span>北京市密云区溪翁庄镇走马庄村</span>
          </div>
        </div>
      </div>
      <div class="footer-bottom">
        <p>{{ footer.copyright }}</p>
        <p>{{ footer.contact }}</p>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { SITE, FOOTER } from '@/constants/site'

const site = SITE
const footer = FOOTER
</script>

<style scoped>
.footer {
  background: linear-gradient(180deg, #0f172a 0%, #1e293b 100%);
  color: #cbd5e1;
  padding: 48px 0 24px;
  margin-top: 64px;
}

.footer-top {
  display: flex;
  justify-content: space-between;
  gap: 48px;
  padding-bottom: 32px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.brand-name {
  font-size: 1.5rem;
  font-weight: 700;
  color: #fff;
  margin-bottom: 8px;
}

.brand-slogan {
  color: #94a3b8;
  font-size: 0.9rem;
  margin-bottom: 6px;
}

.brand-location {
  color: #64748b;
  font-size: 0.85rem;
}

.footer-links {
  display: flex;
  gap: 64px;
}

.link-group h4 {
  color: #fff;
  font-size: 0.9rem;
  margin-bottom: 16px;
}

.link-group a,
.link-group span {
  display: block;
  font-size: 0.85rem;
  color: #94a3b8;
  margin-bottom: 8px;
  transition: color var(--transition);
}

.link-group a:hover {
  color: var(--color-primary);
}

.footer-bottom {
  padding-top: 24px;
  text-align: center;
  font-size: 0.8rem;
  color: #64748b;
}

.footer-bottom p {
  margin-bottom: 4px;
}

@media (max-width: 768px) {
  .footer-top {
    flex-direction: column;
    gap: 32px;
  }

  .footer-links {
    flex-wrap: wrap;
    gap: 32px;
  }
}
</style>
