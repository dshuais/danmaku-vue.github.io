import { defineConfig } from 'vitepress'
import { nav } from './layoutConfig'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Danmaku-vue",
  description: "一款基于vue3的web弹幕交互插件",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/avatar.png',
    nav,

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/dshuais/danmaku-vue' }
    ]
  }
})
