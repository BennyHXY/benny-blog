import { sidebar } from "vuepress-theme-hope";

export const zhSidebar = sidebar({
  "/zh/": [
    "",
    {
      text: "如何使用",
      icon: "laptop-code",
      prefix: "demo/",
      link: "demo/",
      children: "structure",
    },
    {
      text: "算法竞赛",
      prefix: "posts/algorithm/",
      children: "structure",
    },
    {
      text: "python",
      prefix: "posts/learn-python/",
      children: "structure",
    },
    {
      text: "计算机科学",
      prefix: "posts/computer-science/",
      children: "structure",
      // children: [

      //   {
      //     text: "计算机组成原理",
      //     prefix: "computer-organization/",
      //     children: "structure",
      //   },
      // ],
    },
    {
      text: "playground",
      // icon: "",
      prefix: "posts/playground/",
      children: "structure",
    },
    {
      text: "文章",
      icon: "book",
      prefix: "posts/article/",
      children: "structure",
    },
    "intro",
    {
      text: "幻灯片",
      icon: "person-chalkboard",
      link: "https://ecosystem.vuejs.press/zh/plugins/markdown/revealjs/demo.html",
    },
  ],
});
