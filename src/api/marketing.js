import { request } from '@/utils/request'
import { promotions, campaigns, stats } from '@/data/marketing'
import { banners } from '@/data/banners'

export function getBanners() {
  return request(banners)
}

export function getPromotions() {
  return request(promotions)
}

export function getCampaigns() {
  return request(campaigns)
}

export function getMarketingStats() {
  return request(stats)
}
