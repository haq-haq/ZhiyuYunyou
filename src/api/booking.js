import { request } from '@/utils/request'
import { activities } from '@/data/activities'

export function getActivities() {
  return request(activities)
}

export function getActivityById(id) {
  const activity = activities.find((a) => a.id === Number(id))
  return request(activity || null)
}

export function submitBooking(data) {
  return request({ success: true, message: '预约成功！我们会尽快与您确认。', data })
}
