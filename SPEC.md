# China Private Travel - 独立站规格说明书

## 1. Concept & Vision

**China Private Travel** — 面向美洲地区游客的中国私人订制游电商平台。

品牌调性：自然、探索、定制、温暖。像一只蜥蜴穿越热带雨林，专注小团队深度游，告别大团走马观花。

## 2. Design Language

### 色彩系统
```css
--color-forest: #2D5016;      /* 主色-森林绿 */
--color-sage: #7BA05B;         /* 辅助绿 */
--color-moss: #4A7C59;         /* 中性绿 */
--color-sunflower: #F4C430;    /* 强调黄-向日葵 */
--color-honey: #E5A835;         /* 次强调 */
--color-cream: #FDF8E8;         /* 背景米色 */
--color-bark: #5D4E37;         /* 文字棕色 */
--color-white: #FFFFFF;
```

### 字体
- 标题：Playfair Display（优雅感）
- 正文：Inter（现代可读）
- 中文：Noto Sans SC

### 视觉资产
- 风格：自然纪实摄影 + 手绘插画点缀
- 图标：Lucide React
- 装饰：植物叶片纹理、地图元素

## 3. Layout & Structure

### 页面结构
```
/                       # 落地页
  ├── Hero (全屏视频/图片 + CTA)
  ├── 目的地精选 (卡片网格)
  ├── 特色服务 (私人订制流程)
  ├── 活动体验 (徒步/攀岩/探洞)
  ├── 评价展示
  └── CTA + Footer

/destinations           # 目的地列表
  ├── [slug]           # 详情页
  ├── 预订流程
  └── 评论

/cart                   # 购物车/预订
/checkout              # 结账
/account               # 用户中心
/blog                  # 博客
/admin                 # 后台管理
  ├── /dashboard       # 数据看板
  ├── /orders         # 订单管理
  ├── /products       # 产品管理
  ├── /users          # 用户管理
  └── /settings       # 设置
```

## 4. Features & Interactions

### 核心功能
- **多语言切换**：EN/ES/PT/FR/DE/AR/RU（RTL支持阿拉伯语）
- **Facebook OAuth登录**
- **邮箱注册登录**
- **目的地挑选**（卡片式浏览）
- **日期/人數选择器**
- **私人订制表单**（特殊需求）
- **Stripe支付**
- **订单追踪**
- **邮件通知**（下单/确认/行程前提醒）
- **Admin后台**
  - 订单管理（状态更新）
  - 产品管理（CRUD）
  - 用户管理
  - 数据看板（访问量/订单/收入）

### 目的地产品
1. **北京** — 故宫/长城/胡同
2. **成都** — 熊猫/火锅/都江堰
3. **重庆** — 火锅/夜景/武隆
4. **广西** — 桂林山水/阳朔
5. **张家界** — 天门山/森林公园
6. **贵州** — 黄果树/苗寨

### 增值活动（可选加购）
- 户外徒步
- 野外攀岩
- 洞穴探险

## 5. Component Inventory

### 通用组件
- `Button` — Primary/Secondary/Ghost变体
- `Input` — 支持多语言标签
- `Card` — 产品卡片
- `Modal` — 弹窗
- `Dropdown` — 语言切换
- `DatePicker` — 日期选择
- `ImageGallery` — 图片画廊

### 页面组件
- `Hero` — 全屏落地区
- `DestinationCard` — 目的地卡片
- `BookingForm` — 预订表单
- `PriceDisplay` — 价格展示
- `ReviewCard` — 评价卡片
- `BlogCard` — 博客卡片
- `AdminTable` — 管理表格
- `DashboardChart` — 看板图表

## 6. Technical Approach

### 技术栈
- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS + shadcn/ui
- **Database**: PostgreSQL + Prisma ORM
- **Auth**: NextAuth.js v5 (Facebook + Email)
- **Payments**: Stripe Checkout
- **Email**: Resend / Nodemailer
- **i18n**: next-i18next
- **Icons**: Lucide React
- **Charts**: Recharts

### 数据模型
```prisma
User {
  id, email, name, image, role, locale
  orders[], reviews[]
}

Destination {
  id, slug, images[], price, featured
  translations[] (EN/ES/PT/FR/DE/AR/RU)
  activities[]
}

Order {
  id, userId, destinationId, date, guests
  status, totalAmount, stripePaymentId
  activities[], notes
}

Review {
  id, userId, destinationId, rating, comment
}
```

### API设计
```
POST /api/auth/*        # 认证
GET/POST /api/destinations
GET/POST /api/orders
POST /api/checkout      # Stripe
POST /api/webhooks/stripe
GET /api/admin/stats
```

## 7. Content (多语言)

### 目的地描述（示例-北京）
- EN: "Explore the ancient heart of China..."
- ES: "Explora el corazón antiguo de China..."
- 其他语言类似

### 落地页文案
- Hero: "Your Private China Adventure Awaits"
- CTA: "Start Your Journey"
- Price: "From $2,999 / person"
