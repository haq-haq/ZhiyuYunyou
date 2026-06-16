import { IMG } from '@/constants/images'

export const scenicSpots = [
  {
    id: 1,
    name: '密云水库观景带',
    location: '溪翁庄镇 · 走马庄村北',
    rating: 4.9,
    price: 0,
    tags: ['渔赏', '生态观景'],
    image: IMG.scenic.reservoir,
    description: '站在观景带远眺华北最大水库密云水库，碧波万顷、山峦叠翠。这里是走马庄村渔文化的天然背景，也是「渔赏」体验的核心场景，可感受水库生态与渔耕文明交相辉映的独特魅力。',
    openTime: '08:00 - 18:00',
    highlights: ['水库全景', '生态步道', '观鸟平台', '日落摄影']
  },
  {
    id: 2,
    name: '走马庄村渔文化展示馆',
    location: '走马庄村中心',
    rating: 4.8,
    price: 30,
    tags: ['渔享', '文化体验'],
    image: IMG.scenic.culture,
    description: '集中展示走马庄村依水而居、以渔为生的百年历史，馆藏渔具、渔歌、渔俗实物与图文资料，是了解密云水库渔文化传承的必访之地。',
    openTime: '09:00 - 17:00',
    highlights: ['渔具陈列', '渔歌试听', '老照片墙', '互动体验区']
  },
  {
    id: 3,
    name: '溪翁庄渔耕体验园',
    location: '溪翁庄镇 · 走马庄村东',
    rating: 4.7,
    price: 68,
    tags: ['渔享', '亲子研学'],
    image: IMG.scenic.farm,
    description: '将农业资源转化为体验资源，可参与垂钓、喂鱼、识鱼种、体验传统撒网等渔耕活动，适合家庭亲子与研学团队，感受「渔享」沉浸式乐趣。',
    openTime: '08:30 - 17:30',
    highlights: ['亲子垂钓', '渔具体验', '鱼种科普', '农事体验']
  },
  {
    id: 4,
    name: '渔家民宿聚落',
    location: '走马庄村',
    rating: 4.8,
    price: 198,
    tags: ['渔居', '民宿推荐'],
    image: IMG.scenic.homestay,
    description: '沿村而建的渔家风格民宿，保留北方渔村院落特色，推窗见水库、临水听渔歌。提供渔家早餐与管家式服务，是深度体验「渔居」生活的理想选择。',
    openTime: '全天接待',
    highlights: ['渔家院落', '水库景观', '农家早餐', '篝火晚会']
  },
  {
    id: 5,
    name: '走马庄渔味坊',
    location: '走马庄村 · 美食街',
    rating: 4.9,
    price: 88,
    tags: ['渔食', '特色餐饮'],
    image: IMG.scenic.food,
    description: '以密云水库鲜鱼为核心，传承渔家烹饪技艺，招牌水库鱼头、灶台鱼、手工鱼丸等将文化资源转化为消费资源，是品味「渔食」的标志性场景。',
    openTime: '10:00 - 21:00',
    highlights: ['水库鱼头', '灶台鱼', '渔家小炒', '时令湖鲜']
  },
  {
    id: 6,
    name: '水库生态绿道',
    location: '走马庄村 · 水库南岸',
    rating: 4.6,
    price: 0,
    tags: ['免费', '渔赏'],
    image: IMG.scenic.greenway,
    description: '沿水库而建的生态绿道，将生态资源转化为可体验、可消费的文旅产品。骑行、徒步、摄影皆可，春季赏花、秋季观叶，四季皆宜。',
    openTime: '06:00 - 20:00',
    highlights: ['环湖绿道', '骑行驿站', '生态科普牌', '休闲驿站']
  }
]

export const routes = [
  {
    id: 1,
    name: '渔食渔赏一日游',
    duration: '1天',
    price: 168,
    spots: ['密云水库观景带', '走马庄渔味坊', '水库生态绿道'],
    image: IMG.route.day1
  },
  {
    id: 2,
    name: '渔居渔享深度两日游',
    duration: '2天1夜',
    price: 398,
    spots: ['渔家民宿聚落', '溪翁庄渔耕体验园', '渔文化展示馆'],
    image: IMG.route.day2
  },
  {
    id: 3,
    name: '农文旅融合三日游',
    duration: '3天2夜',
    price: 588,
    spots: ['走马庄村全域', '密云水库观景带', '渔耕体验', '渔品采购'],
    image: IMG.route.day3
  }
]
