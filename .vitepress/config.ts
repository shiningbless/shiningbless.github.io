import { defineConfig } from 'vitepress'

export default defineConfig({
  title: '鈴木大輝',
  description: 'フルスタックエンジニア・ポートフォリオ & 職務経歴書',
  lang: 'ja',
  head: [
    ['meta', { property: 'og:title', content: '鈴木大輝 | フルスタックエンジニア' }],
    ['meta', { property: 'og:description', content: 'TypeScript / Vue.js / Nuxt3 / React / AWS / GCP — Web開発歴10年のフルスタックエンジニア' }],
    ['meta', { property: 'og:type', content: 'website' }],
  ],
  themeConfig: {
    nav: [
      { text: 'ホーム', link: '/' },
      {
        text: 'プロジェクト',
        items: [
          { text: 'タビアン株式会社', link: '/projects/tabian' },
          { text: 'LIRIS株式会社', link: '/projects/liris' },
          { text: 'タッチスポット株式会社', link: '/projects/touchspot' },
          { text: 'SMILE CREATE GROUP', link: '/projects/smile-create' },
          { text: '個人開発', link: '/projects/side-projects' },
        ],
      },
    ],
    sidebar: {
      '/projects/': [
        {
          text: 'プロジェクト',
          items: [
            { text: 'タビアン株式会社（2022-現在）', link: '/projects/tabian' },
            { text: 'LIRIS株式会社（2023-現在）', link: '/projects/liris' },
            { text: 'タッチスポット（2022-2023）', link: '/projects/touchspot' },
            { text: 'SMILE CREATE（2018-2022）', link: '/projects/smile-create' },
            { text: '個人開発', link: '/projects/side-projects' },
          ],
        },
      ],
    },
    footer: {
      message: 'Built with VitePress',
      copyright: '© 2026 鈴木大輝',
    },
    outline: {
      label: '目次',
    },
    docFooter: {
      prev: '前のページ',
      next: '次のページ',
    },
  },
})
