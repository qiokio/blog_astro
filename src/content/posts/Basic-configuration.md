---
title: '基本配置'
description: 'Litos主题的基本设置说明'
pubDate: 2025-05-03
tags: ['配置']
recommend: true
heroImage: 'Basic-configuration.webp'
ogImage: 'Basic-configuration.webp'
---

欢迎阅读Litos主题配置指南。您网站的所有基本设置都通过`src/config.ts`文件进行管理。本综合指南将带您了解每个配置部分，帮助您有效地自定义您的网站。

## 核心网站配置

`SITE`对象包含定义您网站身份和元数据的基本设置：

```ts title="src/config.ts"
export const SITE: Site = {
  title: 'Litos',        // 您的网站标题
  description: 'Litos is a blog theme built with Astro.js and Dnzzk2.',  // 网站描述
  website: 'https://litos.vercel.app/',  // 您的网站URL
  base: '/',             // 基础URL路径（如果不部署在根目录则需更改）
  author: 'Dnzzk2',      // 作者名称
  ogImage: '/og-image.jpg'  // 用于社交分享的默认Open Graph图片
}
```

以下是每个配置属性的详细解释：

| 属性 | 描述 | 详情 |
|---|---|---|
| **title** | 网站标题 | 显示在浏览器标签和搜索结果中，对SEO和品牌标识至关重要 |
| **description** | 网站概述 | 显示在搜索结果和社交媒体分享中，应包含关键词以优化SEO |
| **website** | 生产环境URL | 用于生成规范链接并确保正确的URL解析 |
| **base** | 基础路径 | 部署在根目录时保持为'/'，或设置子目录（例如'/blog/'） |
| **author** | 作者名称 | 用于元标签和归属信息 |
| **ogImage** | 默认社交媒体预览图片 | 在社交平台上分享时显示的图片（推荐尺寸：1200×630px） |

## 导航结构

Litos提供双导航系统，以提升用户体验和网站可访问性。导航分为两个主要组件：用于主要路由的头部导航（`HEADER_LINKS`）和用于全面网站映射的页脚导航（`FOOTER_LINKS`）。

### 头部导航

头部导航包含您最重要和最频繁访问的页面：

```ts title="src/config.ts"
export const HEADER_LINKS: Link[] = [
  {
    name: '文章',    // 导航中显示的文本
    url: '/posts',    // 路由路径
  },
  {
    name: '项目',
    url: '/projects',
  },
]
```

### 页脚导航

页脚导航提供完整的网站地图和额外的重要链接：

```ts title="src/config.ts"
export const FOOTER_LINKS: Link[] = [
  {
    name: '首页',
    url: '/',
  },
  {
    name: '文章',
    url: '/posts',
  },
  {
    name: '项目',
    url: '/projects',
  },
  {
    name: '标签',
    url: '/tags',
  },
]
```

### 导航配置指南

导航链接配置详情：

| 属性 | 描述 | 用途 |
|------|------|------|
| **name** | 显示文本 | 导航菜单中显示的文本 |
| **url** | 目标路径 | 目标页面路径必须以'/'开头 |

>[!tip]
>
> 1. 头部导航：专注于主要内容部分
> 2. 页脚导航：包含次要页面和网站资源
> 3. 路径设置：所有路径都相对于网站根目录
> 4. 链接一致性：确保头部和页脚导航链接之间的一致性

## 社交媒体集成

Litos包含内置的社交媒体集成功能，允许您展示您的社交媒体存在。社交链接出现在您网站的指定区域：

:::image-figure[Social-links]
![](~/assets/images/base-configuration/social-link-dark.jpg)(class:img-light)

![](~/assets/images/base-configuration/social-link-light.jpg)(class:img-dark)
:::

在`src/config.ts`文件中配置您的社交媒体链接：

```ts title="src/config.ts"
export const SOCIAL_LINKS: SocialLink[] = [
  {
    name: 'github',    // 平台标识符
    url: 'https://github.com/qiokio',    // 您的个人资料URL
    icon: 'icon-[ri--github-fill]',    // Iconify图标类
    count: 2    // 可选：关注者数量
  },
  {
    name: 'twitter',
    url: 'https://x.com/',
    icon: 'icon-[ri--twitter-x-fill]',
  },
  {
    name: 'bilibili',
    url: 'https://space.bilibili.com/',
    icon: 'icon-[ri--bilibili-fill]',
  },
]
```

每个社交链接对象支持以下属性：

| 属性 | 描述 | 详情 |
|------|------|------|
| **name** | 平台标识符 | 用于内部引用和可访问性 |
| **url** | 个人资料URL | 直接链接到您在平台上的个人资料页面 |
| **icon** | 图标类名 | 来自[Iconify](https://icon-sets.iconify.design/)的图标类，可通过Tailwind CSS自定义 |
| **count** (可选) | 关注者数量 | 可选，显示关注者数量；启用GitHub集成时自动更新GitHub关注者 |

> [!TIP]
>
> 1. 从[Iconify](https://icon-sets.iconify.design/)浏览并选择您喜欢的社交媒体图标
> 2. 在所有社交链接中保持一致的图标风格
> 3. 启用GitHub集成以自动更新关注者数量
> 4. 在浅色和深色主题模式下测试社交链接的可见性

## GitHub配置

:::image-figure[spotlight]
![](~/assets/images/base-configuration/spotlight-dark.jpg)(class:img-light)

![](~/assets/images/base-configuration/spotlight-light.jpg)(class:img-dark)
:::

> [!caution]
> 由于本主题使用静态模式，显示功能目前无法实现自动每日更新。如果您认为这会影响此功能的使用，您可以关闭此显示。
>
> 如果您有好的解决方案，欢迎提交**PR**。

当您访问首页时，您会注意到如图所示的GitHub数据显示区域（焦点）。可以通过以下配置启用此功能。

### 获取GitHub令牌

1. 访问[Github令牌设置页面](https://github.com/settings/tokens)
2. 点击"Generate new token">"Generate new token (classic)"
3. 设置令牌名称（Note）
4. 选择以下所需权限：
   - `repo`：完整仓库访问权限
   - `user`：读取用户信息权限
5. 设置适当的过期时间（Token expiration）
6. 点击"Generate token"并保存生成的令牌

在项目根目录创建一个`.env`文件并添加以下内容：

```ts title=".env"
SECRET_GITHUB_TOKEN=YOUR_GITHUB_TOKEN
```

将`YOUR_GITHUB_TOKEN`替换为您刚刚生成的Github令牌。

### 配置详情

在`src/config.ts`文件中配置GitHub相关功能：

```ts title="src/config.ts"
export const GITHUB_CONFIG: GithubConfig = {
  ENABLED: true,
  CACHE_DURATION: 60 * 60 * 1.5 + 60 * 5,
  USE_MOCK_DATA_FOR_DEVELOPMENT: true,
}
```

配置选项说明：

| 属性 | 描述 | 详情 |
|---|---|---|
| **ENABLED** | 启用GitHub功能 | 类型：boolean，默认值：true。启用时，显示焦点并自动更新社交链接中的GitHub关注者数量 |

## 技能配置

:::image-figure[skills]
![](~/assets/images/base-configuration/skills-dark.png)(class:img-light)

![](~/assets/images/base-configuration/skills-light.png)(class:img-dark)
:::

技能模块通过`config.ts`中的`SKILLSSHOWCASE_CONFIG`进行配置。

```ts title="src/config.ts"

export const SKILLSSHOWCASE_CONFIG: SkillsShowcaseConfig = {
  SKILLS_ENABLED: true,
  SKILLS_DATA: [
    {
      direction: 'left',
      skills: [
        {
          name: 'JavaScript',
          icon: 'icon-[mdi--language-javascript]',
        },
        {
          name: 'CSS',
          icon: 'icon-[mdi--language-css3]',
        },
        {
          name: 'HTML',
          icon: 'icon-[mdi--language-html5]',
        },
        {
          name: 'TypeScript',
          icon: 'icon-[mdi--language-typescript]',
        },
      ],
    },
    {
      direction: 'right',
      skills: [
        {
          name: 'Astro',
          icon: 'icon-[lineicons--astro]',
        },
        {
          name: 'Node.js',
          icon: 'icon-[mdi--nodejs]',
        },
        {
          name: 'React',
          icon: 'icon-[mdi--react]',
        },
        {
          name: 'Next.js',
          icon: 'icon-[devicon--nextjs]',
        },
        {
          name: 'Tailwind CSS',
          icon: 'icon-[mdi--tailwind]',
        },
        {
          name: 'Iconify',
          icon: 'icon-[line-md--iconify2-static]',
        },
      ],
    },
  ],
}
```

以下是`SKILLSSHOWCASE_CONFIG`配置对象中各种属性的详细说明：

| 属性 | 描述 | 详情 |
|---|---|---|
| **SKILLS_ENABLED** | 是否启用技能显示功能 | 设置为`true`启用技能显示模块，设置为`false`禁用 |
| **SKILLS_DATA** | 技能显示数据数组 | 包含多个技能组，每个组可以有不同的方向和技能列表 |
| &nbsp;&nbsp;direction | 技能组显示方向 | 可选值：`left`或`right`，决定技能组在页面上的动画方向 |
| &nbsp;&nbsp;skills | 技能列表 | 该方向组下的所有技能项 |
| &nbsp;&nbsp;&nbsp;&nbsp;name | 技能名称 | 显示的技能名称文本 |
| &nbsp;&nbsp;&nbsp;&nbsp;icon | 技能图标 | Iconify格式的图标，可从[Iconify图标集](https://icon-sets.iconify.design/)获取 |

技能显示模块允许您在个人主页上展示您的技术栈和专业技能。通过`direction`属性，您可以创建具有交替方向的技能组，使页面更加动态和视觉上更具吸引力。每个技能项包含一个名称和一个图标。图标使用Iconify集成，提供数千个可选图标。

您可以添加任意数量的技能组，每个组可以包含任意数量的技能。例如，您可以按技术类别（前端、后端、工具等）或熟练程度组织技能。

## 文章配置

Litos通过`src/config.ts`中的`POSTS_CONFIG`对象提供了博客文章的全面配置选项。本节涵盖文章显示设置、分页和布局选项。

```ts title="src/config.ts"
export const POSTS_CONFIG: PostConfig = {
  title: '文章',
  description: 'Dnzzk2的文章',
  introduce: '在这里，我将分享这个主题的使用说明，帮助您快速使用它。',
  author: 'Dnzzk2',
  homePageConfig: {
    size: 5,
    type: 'compact',
  },
  postPageConfig: {
    size: 10,
    type: 'image',
  },
  tagsPageConfig: {
    size: 10,
    type: 'time-line',
  },
  defaultHeroImage: '/og-image.jpg',
  defaultHeroImageAspectRatio: '16/9', // '16/9' || '3/4'
  imageDarkenInDark: true,
  readMoreText: '阅读更多',
  prevPageText: '上一页',
  nextPageText: '下一页',
  tocText: '目录',
  backToPostsText: '返回文章列表',
  nextPostText: '下一篇',
  prevPostText: '上一篇',
}
```

以下是`POSTS_CONFIG`配置对象中各种属性的详细说明：

| 属性 | 描述 | 详情 |
|---|---|---|
| **title** | 文章页面标题 | 显示在浏览器标签和搜索结果中 |
| **description** | 文章页面描述 | 用于SEO |
| **introduce** | 文章页面介绍 | 页面标题下方的介绍文字 |
| **author** | 文章作者 | 用于元标签和归属信息 |
| **homePageConfig** | 主页文章显示设置 | 配置主页上文章的显示 |
| &nbsp;&nbsp;size | 每页文章数 | 显示文章的上限 |
| &nbsp;&nbsp;type | 文章显示类型 | 文章列表中显示的卡片类型：`compact`、`image`、`time-line` |
| &nbsp;&nbsp;heroImageLayout | 图片位置 | 卡片中图片的位置：`left`、`right`。当类型为图片时可以使用。默认是一左一右。此属性可用于强制更改，但其优先级不如MD内的**frontmatter** |
| **postPageConfig** | 单篇文章显示设置 | 配置单篇文章的显示 |
| &nbsp;&nbsp;size | 每页文章数 | 分页中的页数 |
| &nbsp;&nbsp;type | 文章显示类型 | 文章列表中显示的卡片类型：`compact`、`image`、`time-line` |
| &nbsp;&nbsp;heroImageLayout | 图片位置 | 卡片中图片的位置：`left`、`right`。当类型为图片时可以使用。默认是一左一右。此属性可用于强制更改，但其优先级不如MD内的**frontmatter** |
| **tagsPageConfig** | 标签页显示设置 | 配置按标签显示文章 |
| &nbsp;&nbsp;size | 每页文章数 | 分页中的页数 |
| &nbsp;&nbsp;type | 文章显示类型 | 文章列表中显示的卡片类型：`compact`、`image`、`time-line` |
| &nbsp;&nbsp;heroImageLayout | 图片位置 | 卡片中图片的位置：`left`、`right`。当类型为图片时可以使用。默认是一左一右。此属性可用于强制更改，但其优先级不如MD内的**frontmatter** |
| **defaultHeroImage** | 默认英雄图片 | 文章列表中图片模式下显示的默认封面图 |
| **defaultHeroImageAspectRatio** | 默认英雄图片宽高比 | 默认封面图的宽高比 |
| **imageDarkenInDark** | 暗黑模式下暗化英雄图片 | 是否在暗黑模式下暗化封面图 |
| **readMoreText** | 阅读更多文本 | 图片卡片下"阅读更多"的文本内容 |
| **prevPageText** | 上一页文本 | 上一页按钮上显示的文本 |
| **nextPageText** | 下一页文本 | 下一页按钮上显示的文本 |
| **tocText** | 目录文本 | 目录中显示的文本 |
| **backToPostsText** | 返回文章列表文本 | 返回文章列表按钮上显示的文本 |
| **nextPostText** | 下一篇文本 | 下一篇按钮上显示的文本 |
| **prevPostText** | 上一篇文本 | 上一篇按钮上显示的文本 |

这个主题中有三个地方显示文章列表，所以使用了三个属性来配置它们。它们是`homePageConfig`、`postPageConfig`和`tagsPageConfig`，分别对应主页、文章页和详细标签页。

为了保持页面样式的丰富性，我为这三个属性下的type属性设置了三个值，对应三种文章卡片，它们是：`compact`、`image`、`time-line`。

:::image-figure[compact]
![](~/assets/images/base-configuration/compact-dark.jpg)(class:img-light,style:width:80%)

![](~/assets/images/base-configuration/compact-light.jpg)(class:img-dark,style:width:80%)
:::

:::image-figure[image]
![](~/assets/images/base-configuration/image-dark.jpg)(class:img-light,style:width:80%)

![](~/assets/images/base-configuration/image-light.jpg)(class:img-dark,style:width:80%)
:::

:::image-figure[time-line]
![](~/assets/images/base-configuration/time-line-dark.jpg)(class:img-light,style:width:80%)

![](~/assets/images/base-configuration/time-line-light.jpg)(class:img-dark,style:width:80%)
:::

在三个页面上配置您认为合适的样式，当然，您也可以通过在`src/components/posts/card`中创建自己的卡片文件，并将其导入同一目录下的`List.astro`来创建自己的卡片样式。


## 标签配置

标签配置只提供了两个基本配置属性：

```ts title="src/config.ts"
export const TAGS_CONFIG: TagsConfig = {
  title: '标签',
  description: 'Dnzzk2的标签',
  introduce: '这里是所有文章的标签，您可以点击进行筛选。',
}
```

| 属性 | 描述 | 详情 |
|---|---|---|
| **title** | 标签页面标题 | 显示在浏览器标签和搜索结果中 |
| **description** | 标签页面描述 | 用于SEO |
| **introduce** | 标签页面介绍 | 页面标题下方的介绍文字 |

## 项目配置

项目配置只提供了两个基本配置：

```ts title="src/config.ts"
export const PROJECTS_CONFIG: ProjectsConfig = {
  title: '项目',
  description: 'Dnzzk2的项目',
  introduce: '我的项目示例。',
}
```

此外，它还为项目列表提供了配置。

```ts title="src/config.ts"
export const ProjectList: Project[] = [
  {
    name: 'Litos',
    description: '一个使用Astro.js和Dnzzk2构建的博客主题。',
    githubUrl: 'https://github.com/Dnzzk2/Litos',
    website: 'https://litos.vercel.app/',
    type: 'icon',
    icon: 'icon-[ri--github-fill]',
    star: 1,
  },
  {
    name: 'Litos',
    description: '一个使用Astro.js和Dnzzk2构建的博客主题。',
    githubUrl: 'https://github.com/Dnzzk2/Litos',
    website: 'https://litos.vercel.app/',
    type: 'image',
    icon: '/projects/logo.png',
    star: 1,
  },
]

```

| 属性 | 描述 | 详情 |
|---|---|---|
| **name** | 项目名称 | 项目名称 |
| **description** | 项目描述 | 项目描述 |
| **introduce** | 项目页面介绍 | 页面标题下方的介绍文字 |
| **githubUrl** (可选) | 项目GitHub URL | 项目github地址 |
| **website** (可选)| 项目网站URL | 项目URL |
| **type** | 项目类型 | 用于显示项目类型：`icon`、`image` |
| **icon** | 项目图标 | 当类型为icon时，使用iconify显示图标。当为image时，用于图片地址。将图片地址放在`public/projects`中 |
| **imageClass** (可选) | 项目图片类 | 当类型为image时，用于修改图片 |
| **star** (可选) | 项目星标数 | 星标数量 |
| **fork** (可选) | 项目分叉数 | 分叉数量 |
