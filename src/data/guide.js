import { IMG } from '@/constants/images'

export const guideRoutes = [
  {
    id: 1,
    name: '渔赏 · 水库观景路线',
    duration: '约2小时',
    distance: '3.2公里',
    points: 5,
    image: IMG.guide.shang
  },
  {
    id: 2,
    name: '渔享 · 渔耕体验路线',
    duration: '约2.5小时',
    distance: '2.8公里',
    points: 4,
    image: IMG.guide.xiang
  },
  {
    id: 3,
    name: '渔居 · 古村文化路线',
    duration: '约1.5小时',
    distance: '1.8公里',
    points: 4,
    image: IMG.guide.ju
  }
]

export const guidePoints = [
  {
    id: 1,
    routeId: 1,
    name: '走马庄村入口',
    x: 12,
    y: 68,
    audio: '欢迎来到北京市密云区溪翁庄镇走马庄村，这里紧邻华北最大水库密云水库，世代渔耕，渔韵悠长……',
    description: '村庄主入口，可在此领取导览地图，了解「渔食、渔居、渔赏、渔享」四大体验板块。'
  },
  {
    id: 2,
    routeId: 1,
    name: '水库观景平台',
    x: 35,
    y: 42,
    audio: '密云水库水面面积广阔，是北京重要的饮用水源地，也是走马庄村渔文化的根脉所在……',
    description: '远眺水库全景的最佳位置，设有生态科普解说牌。'
  },
  {
    id: 3,
    routeId: 1,
    name: '生态绿道驿站',
    x: 55,
    y: 55,
    audio: '生态绿道沿水库而建，将生态资源转化为可漫步、可骑行的体验场景……',
    description: '绿道中途休息驿站，提供饮水与路线指引。'
  },
  {
    id: 4,
    routeId: 1,
    name: '观鸟平台',
    x: 72,
    y: 38,
    audio: '水库周边是多种水鸟的栖息地，每年春秋两季观鸟最佳……',
    description: '配备望远镜，可观赏水库生态与候鸟。'
  },
  {
    id: 5,
    routeId: 1,
    name: '日落摄影点',
    x: 88,
    y: 28,
    audio: '傍晚时分，夕阳映照水面，是摄影爱好者钟爱的打卡地点……',
    description: '水库西岸日落观景最佳位置。'
  },
  {
    id: 6,
    routeId: 2,
    name: '渔耕体验园入口',
    x: 18,
    y: 62,
    audio: '渔耕体验园将农业资源转化为体验资源，您可以在这里参与垂钓、识鱼等活动……',
    description: '体验园主入口，可预约垂钓与农事体验。'
  },
  {
    id: 7,
    routeId: 2,
    name: '垂钓体验区',
    x: 42,
    y: 48,
    audio: '这里是亲子垂钓体验区，水库常见鱼种有鲫鱼、鲤鱼、鲢鱼等……',
    description: '提供渔具租赁与向导服务。'
  },
  {
    id: 8,
    routeId: 2,
    name: '鱼种科普站',
    x: 68,
    y: 58,
    audio: '密云水库共记录鱼类多种，是北方淡水渔业的重要区域……',
    description: '展示水库鱼种标本与生态知识。'
  },
  {
    id: 9,
    routeId: 3,
    name: '渔文化展示馆',
    x: 25,
    y: 55,
    audio: '展示馆收藏了走马庄村百年渔耕历史，从渔具、渔歌到渔俗，系统呈现渔文化传承……',
    description: '了解走马庄村渔文化历史的核心场馆。'
  },
  {
    id: 10,
    routeId: 3,
    name: '渔家民宿区',
    x: 55,
    y: 45,
    audio: '民宿聚落保留了北方渔村院落风貌，推窗即可见水库，是体验渔居生活的理想之选……',
    description: '可参观样板民宿，了解入住与预订信息。'
  },
  {
    id: 11,
    routeId: 3,
    name: '渔味坊美食街',
    x: 78,
    y: 62,
    audio: '渔味坊以密云水库鲜鱼为主材，灶台鱼、水库鱼头是招牌菜品，将渔文化转化为舌尖上的体验……',
    description: '品味渔食、购买渔家特产的美食街区。'
  }
]
