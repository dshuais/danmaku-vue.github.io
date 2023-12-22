/*
 * @Author: dushuai
 * @Date: 2023-12-22 14:41:05
 * @LastEditors: dushuai
 * @LastEditTime: 2023-12-22 14:49:20
 * @description: navbar配置
 */
import { DefaultTheme } from 'vitepress'

export const nav: DefaultTheme.NavItem[] = [
  { text: 'Home', link: '/' },
  { text: '文档', link: '/docs' },
  { text: 'API', link: '/api' },
  { text: '更多推荐', link: '/more' },
  {
    text: '关于我', items: [
      { text: 'Github', link: 'https://github.com/dshuais' },
      { text: '掘金', link: 'https://juejin.cn/user/3158230569584056/posts' },
      { text: 'CSDN', link: 'https://blog.csdn.net/m0_59206508' },
    ]
  },
  // { text: 'Examples', link: '/markdown-examples' }
]
