/*
 * @Author: dushuai
 * @Date: 2023-12-22 17:27:20
 * @LastEditors: dushuai
 * @LastEditTime: 2023-12-22 18:26:36
 * @description: 心平气和
 */
import { defineConfig } from 'vitepress'
import { nav, sidebar } from './layoutConfig'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Danmaku-vue",
  description: "一款基于vue3的web弹幕交互插件",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/avatar.png',
    nav,
    sidebar,

    // sidebar: [
    //   {
    //     text: 'Examples',
    //     items: [
    //       { text: 'Markdown Examples', link: '/markdown-examples' },
    //       { text: 'Runtime API Examples', link: '/api-examples' }
    //     ]
    //   }
    // ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/dshuais/danmaku-vue' }
    ],

    footer: {
      message: 'Copyright © 2023-present dshuais. All rights reserved.',
      copyright: 'MIT Licensed | Copyright © 2023-present <a href="https://github.com/dshuais">dshuais</a>'
    }
  }
})
