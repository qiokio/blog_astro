---
title: '文章配置'
description: 'Litos主题的文章配置综合指南'
pubDate: 2025-05-01
tags: ['配置','图片','文章']
recommend: true
heroImage: 'MD-Configuration.webp'
ogImage: 'MD-Configuration.webp'
---

本文档提供了Litos主题中文章配置的综合指南，包括前置元数据设置和图片显示选项。

## 创建新文章

要创建新的Markdown文件，请按照以下步骤操作：

1. 导航到`src/content/posts`目录。
2. 创建一个带有`.md`扩展名的新Markdown文件。

## 前置元数据配置

Markdown文件中的前置元数据通过Astro Content Collections管理，它在所有文章中强制执行一致的结构。以下是可用前置元数据属性的详细说明：

```md
---
title: '您的文章标题'
description: '您文章的简短描述'
pubDate: 2025-05-01
updatedDate: 2025-05-01
author: 'Dnzzk2' 
recommend: false 
heroImage: 'image-filename.png'
ogImage: 'og-image-filename.png'
heroImageLayout: 'left'
heroImageAspectRatio: '16/9'
tags: ['tag1', 'tag2']
---
```

### 属性规范

| 属性 | 类型 | 必填 | 默认值 | 描述 |
|----------|------|----------|---------|-------------|
| title | string | 是 | - | 文章的主标题，在文章页面和文章列表中突出显示 |
| description | string | 是 | - | 文章的简洁摘要，用于SEO优化和社交媒体预览卡片 |
| pubDate | Date | 是 | - | YYYY-MM-DD格式的发布日期 |
| updatedDate | Date | 否 | - | YYYY-MM-DD格式的最后修改日期 |
| author | string | 否 | - | 内容创作者的名称；如果未指定，则使用网站的默认作者 |
| recommend | boolean | 否 | false | 为文章启用特色状态，添加特殊推荐指示器 |
| heroImage | string | 否 | - | 特色图片文件名（存储在`public/hero-images/`中）或外部URL |
| ogImage | string | 否 | - | 社交媒体预览图片（存储在`public/og-images/`中）或外部URL |
| heroImageLayout | string | 否 | - | 文章列表中的图片位置（'left'或'right'）；当文章列表类型为'image'时优先考虑 |
| heroImageAspectRatio | string | 否 | '16/9' | 图片宽高比，支持'16/9'或'3/4' |
| tags | string[] | 否 | [] | 用于内容分类和导航的关键词数组 |

## 图片显示配置

当文章列表类型设置为`image`时，主题提供灵活的图片处理：

- 如果未指定`heroImage`，系统将使用`config.ts`中`POSTS_CONFIG`的`defaultHeroImage`
- 如果省略了`ogImage`，则应用网站的默认`ogimage`

### 显示变化

根据`heroImage`配置，主题支持三种不同的图片显示样式：

1. 无英雄图片：
:::image-figure[noImage]
![](~/assets/images/md-configuration/noImage-dark.webp)(class:img-light)

![](~/assets/images/md-configuration/noImage-light.webp)(class:img-dark)
:::

2. 带英雄图片（默认16/9比例）：
:::image-figure[16/9]
![](~/assets/images/md-configuration/image-16-9-dark.webp)(class:img-light)

![](~/assets/images/md-configuration/image-16-9-light.webp)(class:img-dark)
:::

3. 带英雄图片（3/4比例）：
:::image-figure[3/4]
![](~/assets/images/md-configuration/image-3-4-dark.webp)(class:img-light)

![](~/assets/images/md-configuration/image-3-4-light.webp)(class:img-dark)
:::

> [!note]
> 宽高比'3/4'和'16/9'作为垂直或水平方向的指标，而不是严格的尺寸要求。但是，使用接近这些比例的图片将防止失真。
>
> 为了在文章列表中保持一致性，无论原始图片尺寸如何，主题强制使用固定的3/4或16/9比例。

## 图片处理工具

Litos包含内置的图片优化工具，有助于减少网站加载时间并提高性能。该项目提供了两种主要的图片处理脚本：

### 优化图片脚本

`optimize`脚本是一个强大的批量处理图片工具，提供各种优化选项：

```bash
pnpm run optimize -- [options]
```

#### 可用选项

| 选项 | 别名 | 描述 | 默认值 |
|--------|-------|-------------|----------|
| --input, | -i | 输入文件或目录路径（必需） | - |
| --quality | -q | 压缩质量（0-100） | 80 |
| --width | -w | 调整大小的最大宽度（0 = 不调整大小） | 0 |
| --format | -f | 输出格式（jpg, jpeg, png, webp, avif） | 原始格式 |
| --keepOriginal | -k | 保留原始文件 | false |
| --recursive | -r | 处理子目录 | true |
| --outputDir | -o | 自定义输出目录 | 与输入相同 |

#### 示例

1. 使用默认设置进行基本优化：
```bash
pnpm run optimize -- -i public/images
```

2. 将图片转换为WebP格式，质量为85%：
```bash
pnpm run optimize -- -i public/images -f webp -q 85
```

3. 将图片调整为最大宽度1200px：
```bash
pnpm run optimize -- -i public/images -w 1200
```

4. 将优化后的图片保存到不同的目录：
```bash
pnpm run optimize -- -i public/images -o public/optimized
```

### 替代工具

虽然推荐使用内置工具以实现无缝集成，但您也可以使用外部服务进行图片优化：

- [TinyPNG](https://free.tinypng.site/) - 对PNG和JPEG文件进行出色压缩
- [Squoosh](https://squoosh.app/) - 基于浏览器的图片优化，支持各种格式
- [ImageOptim](https://imageoptim.com/) - 用于无损图片优化的桌面应用程序

> [!tip]
> 为获得最佳效果，请考虑为您的图片使用WebP格式，它提供出色的压缩效果，同时保持高质量。当指定WebP格式时，内置优化工具会自动处理转换。

### 英雄图片和OG图片

英雄图片和OG图片在增强内容的视觉吸引力和社交媒体存在感方面发挥着重要作用。以下是创建有效图片的一些推荐工具和指南：

#### 推荐工具

1. **OG图片生成器**：
   - [Free OG Image Generator](https://ogimage.click/) - 简单快速的OG图片创建

2. **OG预览工具**：
   - [Social Share Preview](https://socialsharepreview.com/) - 在各平台测试OG图片
   - [Metatags.io](https://metatags.io/) - 预览和调试社交媒体卡片

#### 尺寸建议

- **英雄图片**：
  - 横向（16/9）：1200×675px或1920×1080px
  - 纵向（3/4）：800×1067px或1200×1600px

- **OG图片**：
  - 最佳尺寸：1200×630px（Facebook、Twitter、LinkedIn）
  - 最小尺寸：600×315px
  - 宽高比：1.91\:1

> [!tip]
> 创建图片时，请考虑：
>
> - 使用一致的品牌元素
> - 保持可读的文字大小
> - 在不影响质量的情况下优化文件大小
> - 测试在不同平台上的显示效果

## 代码片段

`.vscode/litos.code-snippets`文件提供了三个用于快速生成Markdown前置元数据的代码片段。这些片段可帮助您高效创建不同类型的博客文章模板。

### 基本模板（无图片）

- **触发器**：`postfm`或`postnoimg`
- **用途**：创建无图片的基本博客文章模板
- **占位符**：
  - `${1:Your Post Title}`：文章标题
  - `${2:A brief description}`：文章描述
  - `${3-4:YYYY-MM-DD}`：发布和更新日期（自动填充当前日期）
  - `${5:Author}`：作者姓名（默认为文件名）
  - `${6|false,true|}`：特色文章切换
  - `${7-8:tag}`：文章标签

**输出示例**：
```md
---
title: '开始使用TypeScript'
description: 'TypeScript基础的综合指南'
pubDate: 2024-01-15
updatedDate: 2024-01-15
author: 'John Doe'
recommend: false
tags: ['TypeScript', 'Programming']
---
```

### 16/9图片模板

- **触发器**：`postfm16`或`post169`
- **用途**：创建带16/9横向图片支持的模板
- **附加字段**：
  - `heroImage`：封面图片文件名
  - `ogImage`：社交媒体预览图片
  - `heroImageAspectRatio`：固定为'16/9'

**输出示例**：
```md
---
title: '现代Web设计趋势'
description: '探索2024年最新的Web设计趋势'
pubDate: 2024-01-15
updatedDate: 2024-01-15
author: 'Jane Smith'
recommend: true
heroImage: 'web-design-trends.png'
ogImage: 'web-design-trends.png'
heroImageAspectRatio: '16/9'
tags: ['Design', 'Web Development']
---
```

### 3/4图片模板

- **触发器**：`postfm34`或`post34`
- **用途**：创建带3/4纵向图片支持的模板
- **附加字段**：
  - 与16/9模板相同，但`heroImageAspectRatio`固定为'3/4'

**输出示例**：
```md
---
title: '人像摄影技巧'
description: '捕捉精彩人像照片的必备技巧'
pubDate: 2024-01-15
updatedDate: 2024-01-15
author: 'Alex Johnson'
recommend: false
heroImage: 'portrait-tips.png'
ogImage: 'portrait-tips.png'
heroImageAspectRatio: '3/4'
tags: ['Photography', 'Tutorial']
---
```

### 使用说明

1. 在VS Code中创建一个新的`.md`文件
2. 输入触发前缀（例如，`postfm`）并按Tab键
3. 使用Tab键在占位符之间导航并填写内容
4. 完成所有占位符后，光标将定位在文章正文处

> [!tip]
> 选择合适的模板来简化您的写作过程。对于带图片的文章，请选择与您的图片宽高比匹配的模板，以获得最佳显示效果。
