import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "营养管理与健身知识库",
  description: "AI-Ready Nutrition & Fitness Knowledge Base",
  lang: 'zh-CN',
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '知识模块', link: '/modules/' },
      { text: '知识源', link: '/guide/sources' },
      { text: '拓扑图', link: '/guide/topology' },
      { text: 'GitHub', link: 'https://github.com/strongking666/AI_KnowledgeBases' }
    ],
    sidebar: {
      '/modules/': [
        {
          text: '知识模块',
          items: [
            { text: '概览', link: '/modules/' },
            { text: '01 - 饮食健康', link: '/modules/01-dietary-health' },
            { text: '02 - 生活习惯', link: '/modules/02-lifestyle' },
            { text: '03 - 疾病与饮食', link: '/modules/03-disease-diet' },
            { text: '04 - 减肥与减脂', link: '/modules/04-weight-loss' },
            { text: '05 - 锻炼基础', link: '/modules/05-exercise-basics' },
            { text: '06 - 健身饮食', link: '/modules/06-fitness-nutrition' },
            { text: '07 - 无氧运动', link: '/modules/07-anaerobic' },
            { text: '08 - 有氧运动', link: '/modules/08-aerobic' }
          ]
        }
      ],
      '/guide/': [
        {
          text: '指南',
          items: [
            { text: '知识源', link: '/guide/sources' },
            { text: '知识拓扑图', link: '/guide/topology' }
          ]
        }
      ]
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/strongking666/AI_KnowledgeBases' }
    ],
    footer: {
      message: '基于国际权威文献整理 | 持续更新',
      copyright: 'Copyright © 2026 AI Knowledge Base'
    }
  }
})
