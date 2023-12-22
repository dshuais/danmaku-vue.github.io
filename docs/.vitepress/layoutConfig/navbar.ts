/*
 * @Author: dushuai
 * @Date: 2023-12-22 14:41:05
 * @LastEditors: dushuai
 * @LastEditTime: 2023-12-22 21:20:54
 * @description: navbar配置
 */
import { DefaultTheme } from 'vitepress'

export const nav: DefaultTheme.NavItem[] = [
  { text: 'Home', link: '/' },
  { text: '文档', link: '/docs/001_intro' },
  { text: 'API', link: '/api/' },
  { text: '预览', link: 'https://dshuais.github.io/danmaku-vue/' },
  { text: '更多推荐', link: '/more/' },
  {
    text: '关于我', items: [
      { text: 'Github', link: 'https://github.com/dshuais' },
      { text: '掘金', link: 'https://juejin.cn/user/3158230569584056/posts' },
      { text: 'CSDN', link: 'https://blog.csdn.net/m0_59206508' },
    ]
  },
  // { text: 'Examples', link: '/markdown-examples' }
]
