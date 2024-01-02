/*
 * @Author: dushuai
 * @Date: 2023-12-22 17:27:20
 * @LastEditors: dushuai
 * @LastEditTime: 2024-01-02 12:00:24
 * @description: 基础配置
 */
import { defineConfig } from "vitepress";
import { nav, sidebar } from "./layoutConfig";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Danmaku-vue",
  description: "一款基于vue3的web弹幕交互插件",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: "/avatar.png",
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
      { icon: "github", link: "https://github.com/dshuais/danmaku-vue" },
    ],

    footer: {
      message: "Copyright © 2023-present dshuais. All rights reserved.",
      copyright:
        'MIT Licensed | Copyright © 2023-present <a href="https://github.com/dshuais">dshuais</a>',
    },

    // 页面修改链接
    editLink: {
      pattern:
        "https://github.com/dshuais/danmaku-vue.github.io/edit/main/docs/:path",
      text: "Edit this page on GitHub",
    },

    // 配置目录结构
    outline: {
      level: [2, 6],
      label: "目录",
    },

    // 配置algolia
    algolia: {
      appId: "SEZUOVJ0WE",
      apiKey: "86302ba55696b811ec708fcf5dcb2d44",
      indexName: "danmaku-vue.dshuais",
    },

    // 本地搜索
    // search: {
    //   provider: "local",
    //   options: {}
    // }
  },

  // 开启最后更改时间
  lastUpdated: true,

  // 打包配置
  // base: '/danmaku-vue.github.io/',
});
