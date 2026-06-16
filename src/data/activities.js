import { IMG } from '@/constants/images'

export const activities = [
  {
    id: 1,
    title: '密云水库开渔文化节',
    date: '2026-09-15',
    time: '09:00 - 17:00',
    location: '走马庄村文化广场',
    price: 0,
    quota: 500,
    enrolled: 328,
    status: 'open',
    image: IMG.activity.festival,
    description: '一年一度的开渔盛典，渔歌展演、祭水祈福、水库鲜鱼品鉴，感受走马庄村最隆重的渔文化节日。'
  },
  {
    id: 2,
    title: '亲子水库垂钓体验',
    date: '2026-06-20',
    time: '07:00 - 11:00',
    location: '溪翁庄渔耕体验园',
    price: 68,
    quota: 30,
    enrolled: 22,
    status: 'open',
    image: IMG.activity.fishing,
    description: '专业向导带领，认识水库常见鱼种，体验亲子垂钓乐趣，渔获可现场加工，适合5-12岁儿童家庭。'
  },
  {
    id: 3,
    title: '渔网编织非遗工坊',
    date: '2026-06-25',
    time: '14:00 - 16:30',
    location: '走马庄村渔文化展示馆',
    price: 48,
    quota: 20,
    enrolled: 20,
    status: 'full',
    image: IMG.activity.craft,
    description: '跟随老渔民学习传统渔网编织技艺，将渔文化资源转化为可参与、可带走的体验产品。'
  },
  {
    id: 4,
    title: '水库生态研学营',
    date: '2026-07-05',
    time: '08:30 - 16:00',
    location: '密云水库生态绿道',
    price: 98,
    quota: 40,
    enrolled: 26,
    status: 'open',
    image: IMG.activity.eco,
    description: '生态导览、水质科普、观鸟识鱼，了解密云水库生态保护与渔耕文明和谐共生的故事。'
  },
  {
    id: 5,
    title: '渔家灶台鱼美食课',
    date: '2026-07-12',
    time: '10:00 - 12:30',
    location: '走马庄渔味坊',
    price: 128,
    quota: 15,
    enrolled: 9,
    status: 'open',
    image: IMG.activity.cooking,
    description: '渔家大厨现场教学密云水库灶台鱼制作，学一道菜、品一份鲜、带走一份渔食文化。'
  },
  {
    id: 6,
    title: '走马庄村篝火渔歌会',
    date: '2026-07-20',
    time: '18:30 - 21:30',
    location: '渔家民宿聚落',
    price: 58,
    quota: 80,
    enrolled: 45,
    status: 'open',
    image: IMG.activity.campfire,
    description: '民宿庭院篝火晚会，渔歌联唱、民谣演出、星空夜话，沉浸式感受渔居生活之美。'
  }
]
