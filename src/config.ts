import type { GithubConfig, Link, PostConfig, Project, ProjectConfig, Site, SkillsShowcaseConfig, SocialLink, TagsConfig } from '~/types'

export const SITE: Site = {
  title: 'Litos',
  description: 'Litos是一个使用Astro.js和Dnzzk2构建的博客主题。',
  website: 'https://litos.vercel.app/',
  base: '/',
  author: 'Dnzzk2',
  ogImage: '/og-image.jpg',
}

export const HEADER_LINKS: Link[] = [
  {
    name: '文章',
    url: '/posts',
  },
  {
    name: '项目',
    url: '/projects',
  },
]

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
  {
    name: '网站地图',
    url: '/sitemap',
  },
]

// 获取图标 https://icon-sets.iconify.design/
export const SOCIAL_LINKS: SocialLink[] = [
  {
    name: 'github',
    url: 'https://github.com/qiokio',
    icon: 'icon-[ri--github-fill]',
  },
  {
    name: 'twitter',
    url: 'https://x.com/qiokio',
    icon: 'icon-[ri--twitter-x-fill]',
  },
  {
    name: 'bilibili',
    url: 'https://space.bilibili.com/yourSpaceId',
    icon: 'icon-[ri--bilibili-fill]',
  },
]

/**
 * SkillsShowcase 配置接口 / SkillsShowcase configuration type
 * @property {boolean} SKILLS_ENABLED  - 是否启用SkillsShowcase功能 / Whether to enable SkillsShowcase features
 * @property {Object} SKILLS_DATA - 技能展示数据 / Skills showcase data
 * @property {string} SKILLS_DATA.direction - 技能展示方向 / Skills showcase direction
 * @property {Object} SKILLS_DATA.skills - 技能展示数据 / Skills showcase data
 * @property {string} SKILLS_DATA.skills.icon - 技能图标 / Skills icon
 * @property {string} SKILLS_DATA.skills.name - 技能名称 / Skills name
 * get icon https://icon-sets.iconify.design/
 */
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
    {
      direction: 'left',
      skills: [
        {
          name: 'Ubuntu',
          icon: 'icon-[mdi--ubuntu]',
        },
        {
          name: 'Git',
          icon: 'icon-[mdi--git]',
        },
        {
          name: 'MongoDB',
          icon: 'icon-[lineicons--mongodb]',
        },
        {
          name: 'Vercel',
          icon: 'icon-[lineicons--vercel]',
        },
      ],
    },
  ],
}

/**
 * GitHub配置 / GitHub configuration
 *
 * @property {boolean} ENABLED - 是否启用GitHub功能 / Whether to enable GitHub features
 * @property {number} CACHE_DURATION - 缓存持续时间(秒) / Cache duration in seconds
 * @property {boolean} USE_MOCK_DATA_FOR_DEVELOPMENT - 开发时使用模拟数据 / Use mock data in development
 */

export const GITHUB_CONFIG: GithubConfig = {
  ENABLED: true,
  CACHE_DURATION: 60 * 60 * 1.5 + 60 * 5,
  USE_MOCK_DATA_FOR_DEVELOPMENT: true,
}

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
  defaultHeroImageAspectRatio: '16/9',
  imageDarkenInDark: true,
  readMoreText: '阅读更多',
  prevPageText: '上一页',
  nextPageText: '下一页',
  tocText: '目录',
  backToPostsText: '返回文章列表',
  nextPostText: '下一篇',
  prevPostText: '上一篇',
}

export const TAGS_CONFIG: TagsConfig = {
  title: '标签',
  description: '所有文章标签',
  introduce: '这里是所有文章的标签，您可以点击进行筛选。',
}

export const PROJECTS_CONFIG: ProjectConfig = {
  title: '项目',
  description: '我的项目示例。',
  introduce: '我的项目示例。',
}

// 获取图标 https://icon-sets.iconify.design/
export const ProjectList: Project[] = [
  {
    name: 'Litos',
    description: '一个简约现代的Astro博客主题。',
    githubUrl: 'https://github.com/Dnzzk2/Litos',
    website: 'https://litos.vercel.app/',
    type: 'image',
    icon: '/projects/logo.png',
    star: 11,
    fork: 4,
  },
]
