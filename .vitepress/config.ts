import { defineConfig } from 'vitepress'

export default defineConfig({
  title: '鈴木大輝',
  description: 'フルスタックエンジニア・ポートフォリオ & 職務経歴書',
  lang: 'ja',
  head: [
    ['meta', { property: 'og:title', content: '鈴木大輝 | フルスタックエンジニア' }],
    ['meta', { property: 'og:description', content: '企画からリリースまで、1人でプロダクトを作れるエンジニアのポートフォリオ' }],
    ['meta', { property: 'og:type', content: 'website' }],
  ],
  themeConfig: {
    nav: [
      { text: 'ホーム', link: '/' },
      { text: '経歴', link: '/about' },
      {
        text: 'プロジェクト',
        items: [
          { text: 'TenStar 業務システム', link: '/projects/tenstar' },
          { text: 'QOHS Home', link: '/projects/qohs-home' },
          { text: 'Webサイト制作', link: '/projects/web-sites' },
          { text: '個人開発', link: '/projects/side-projects' },
        ],
      },
      { text: 'スキル', link: '/skills' },
      { text: 'お問い合わせ', link: '/contact' },
    ],
    sidebar: {
      '/projects/': [
        {
          text: 'プロジェクト',
          items: [
            { text: 'TenStar 業務システム', link: '/projects/tenstar' },
            { text: 'QOHS Home', link: '/projects/qohs-home' },
            { text: 'Webサイト制作', link: '/projects/web-sites' },
            { text: '個人開発', link: '/projects/side-projects' },
          ],
        },
      ],
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/' },
    ],
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
