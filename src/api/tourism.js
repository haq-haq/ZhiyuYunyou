import { request } from '@/utils/request'
import { scenicSpots, routes } from '@/data/tourism'

export function getScenicSpots() {
  return request(scenicSpots)
}

export function getScenicSpotById(id) {
  const spot = scenicSpots.find((s) => s.id === Number(id))
  return request(spot || null)
}

export function getRoutes() {
  return request(routes)
}
