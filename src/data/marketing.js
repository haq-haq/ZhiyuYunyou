import { IMG } from '@/constants/images'

export const promotions = [
  {
    id: 1,
    title: '新客专享',
    description: '首单立减20元',
    code: 'ZMY20',
    discount: 20,
    type: 'fixed',
    expire: '2026-12-31',
    image: IMG.marketing.coupon
  },
  {
    id: 2,
    title: '开渔季特惠',
    description: '鲜鱼类满150减40',
    code: 'KAIYU40',
    discount: 40,
    type: 'threshold',
    threshold: 150,
    expire: '2026-10-31',
    image: IMG.marketing.promo
  },
  {
    id: 3,
    title: '助农优惠券',
    description: '农产类全场85折',
    code: 'NONG85',
    discount: 0.85,
    type: 'percent',
    expire: '2026-12-31',
    image: IMG.marketing.farm
  }
]

export const campaigns = [
  {
    id: 1,
    title: '走马庄打卡赢好礼',
    description: '在「渔食、渔居、渔赏、渔享」4个场景打卡分享，领取渔文化文创纪念品',
    status: 'active',
    participants: 1280,
    image: IMG.marketing.checkin
  },
  {
    id: 2,
    title: '渔家灶台鱼直播',
    description: '每周六晚8点，走马庄渔味坊大厨现场教学密云水库灶台鱼',
    status: 'active',
    participants: 3560,
    image: IMG.marketing.live
  },
  {
    id: 3,
    title: '推荐助农有礼',
    description: '邀请好友注册，双方各得15元助农优惠券，助力农民增收',
    status: 'active',
    participants: 890,
    image: IMG.marketing.referral
  }
]

export const stats = [
  { label: '累计访客', value: '8.6万', icon: '👥' },
  { label: '体验参与', value: '2.1万', icon: '🎯' },
  { label: '助农成交', value: '¥186万', icon: '💰' },
  { label: '带动就业', value: '126人', icon: '🌾' }
]
