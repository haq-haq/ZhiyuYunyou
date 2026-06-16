import { request } from '@/utils/request'
import { guideRoutes, guidePoints } from '@/data/guide'

export function getGuideRoutes() {
  return request(guideRoutes)
}

export function getGuidePoints(routeId) {
  const points = guidePoints.filter((p) => p.routeId === Number(routeId))
  return request(points)
}
