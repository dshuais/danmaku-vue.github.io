import { DefaultTheme } from "vitepress";

export const sidebar: DefaultTheme.Sidebar = {
  "/docs/": [
    // 第一部分
    {
      text: "开始",
      items: [
        {
          text: "简介",
          link: "/docs/001_intro",
        },
        {
          text: "快速上手",
          link: "/docs/002_quickstart",
        },
      ],
    },
    // 第二部分
    {
      text: "深入组件",
      items: [
        {
          text: "注册",
          link: "/docs/003_register",
        },
        {
          text: "Attributes",
          link: "/docs/004_attributes",
        },
        {
          text: "Solts",
          link: "/docs/005_solts",
        },
      ],
    },
  ],
};
