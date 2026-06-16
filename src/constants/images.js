// 本地图片路径，不依赖外网图床，国内网络可直接访问
const BASE = import.meta.env.BASE_URL

function img(path) {
  return `${BASE}images/${path}`
}

export const IMG = {
  banner: {
    reservoir: img('banners/reservoir.jpg'),
    village: img('banners/village.jpg'),
    fish: img('banners/fish.jpg')
  },
  scenic: {
    reservoir: img('scenic/reservoir.jpg'),
    culture: img('scenic/culture.jpg'),
    farm: img('scenic/farm.jpg'),
    homestay: img('scenic/homestay.jpg'),
    food: img('scenic/food.jpg'),
    greenway: img('scenic/greenway.jpg')
  },
  route: {
    day1: img('routes/day1.jpg'),
    day2: img('routes/day2.jpg'),
    day3: img('routes/day3.jpg')
  },
  activity: {
    festival: img('activities/festival.jpg'),
    fishing: img('activities/fishing.jpg'),
    craft: img('activities/craft.jpg'),
    eco: img('activities/eco.jpg'),
    cooking: img('activities/cooking.jpg'),
    campfire: img('activities/campfire.jpg')
  },
  guide: {
    shang: img('guide/shang.jpg'),
    xiang: img('guide/xiang.jpg'),
    ju: img('guide/ju.jpg')
  },
  product: {
    fishHead: img('products/fish-head.jpg'),
    fish: img('products/fish.jpg'),
    dried: img('products/dried.jpg'),
    eggs: img('products/eggs.jpg'),
    sauce: img('products/sauce.jpg'),
    gift: img('products/gift.jpg'),
    giftBox: img('products/gift-box.jpg')
  },
  marketing: {
    coupon: img('marketing/coupon.jpg'),
    promo: img('marketing/promo.jpg'),
    farm: img('marketing/farm.jpg'),
    checkin: img('marketing/checkin.jpg'),
    live: img('marketing/live.jpg'),
    referral: img('marketing/referral.jpg')
  }
}
