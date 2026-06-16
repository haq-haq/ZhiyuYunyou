import { IMG } from '@/constants/images'

export const products = [
  {
    id: 1,
    name: '密云水库鱼头',
    price: 68,
    originalPrice: 88,
    unit: '份',
    sales: 1856,
    category: '鲜鱼',
    image: IMG.product.fishHead,
    description: '密云水库鲜捕鱼头，肉质细嫩，走马庄渔味坊同款，冷链配送。'
  },
  {
    id: 2,
    name: '水库野生鲫鱼',
    price: 38,
    originalPrice: 48,
    unit: '500g',
    sales: 1292,
    category: '鲜鱼',
    image: IMG.product.fish,
    description: '密云水库野生鲫鱼，现捕现发，适合清蒸、红烧。'
  },
  {
    id: 3,
    name: '渔家自制鱼干',
    price: 42,
    originalPrice: 55,
    unit: '250g',
    sales: 2341,
    category: '干货',
    image: IMG.product.dried,
    description: '走马庄老渔民传统晾晒，无添加，佐餐零食两相宜。'
  },
  {
    id: 4,
    name: '走马庄土鸡蛋',
    price: 36,
    originalPrice: 45,
    unit: '30枚',
    sales: 1567,
    category: '农产',
    image: IMG.product.eggs,
    description: '村集体散养土鸡蛋，农文旅融合助农直供，新鲜营养。'
  },
  {
    id: 5,
    name: '渔家手工酱油',
    price: 28,
    originalPrice: 38,
    unit: '瓶',
    sales: 1890,
    category: '调味品',
    image: IMG.product.sauce,
    description: '古法酿造，灶台鱼、水库鱼料理必备，鲜香醇厚。'
  },
  {
    id: 6,
    name: '渔文化文创礼盒',
    price: 88,
    originalPrice: 118,
    unit: '盒',
    sales: 523,
    category: '文创',
    image: IMG.product.gift,
    description: '渔网工艺摆件、渔歌 CD、走马庄明信片，文化资源消费化。'
  },
  {
    id: 7,
    name: '水库风干鱼',
    price: 55,
    originalPrice: 68,
    unit: '500g',
    sales: 876,
    category: '干货',
    image: IMG.product.dried,
    description: '密云水库鲜鱼自然风干，渔家传统手艺，风味独特。'
  },
  {
    id: 8,
    name: '密云渔家特产礼盒',
    price: 168,
    originalPrice: 218,
    unit: '套',
    sales: 678,
    category: '特产',
    image: IMG.product.giftBox,
    description: '鲜鱼、鱼干、土鸡蛋、手工酱油组合，送礼佳品，助农增收。'
  }
]

export const categories = ['全部', '鲜鱼', '干货', '农产', '特产', '调味品', '文创']
