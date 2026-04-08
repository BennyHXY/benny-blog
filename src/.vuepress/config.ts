import { defineUserConfig } from "vuepress";
import { markdownChartPlugin } from "@vuepress/plugin-markdown-chart";
import { photoSwipePlugin } from "@vuepress/plugin-photo-swipe";

import theme from "./theme.js";

export default defineUserConfig({
  base: "/benny-blog/",

  locales: {
    "/": {
      lang: "en-US",
      title: "Benny's Blog",
      description: "A site for learning, thinking and sharing.",
    },
    "/zh/": {
      lang: "zh-CN",
      title: "胡小言的博客",
      description: "丰富技术积累，以最快的速度上线产品。",
    },
  },

  theme,

  plugins: [
    markdownChartPlugin({
      // 开启 ECharts 支持
      echarts: true,
      // 开启脚本执行功能（“总开关”）
      DANGEROUS_ALLOW_SCRIPT_EXECUTION: true,
      // 指定哪些文件可以执行脚本（“白名单”）
      DANGEROUS_SCRIPT_EXECUTION_ALLOWLIST: [
        "/zh/posts/article/cherry.md", // 例如：'/posts/safe-chart.md'
        "/zh/posts/playground/echarts0.md",
        "/zh/posts/playground/echarts1.md",
        "/zh/posts/math/calculus/notes/functions/elementary-functions.md",
      ],
    }),
  ],

  // Enable it with pwa
  // shouldPrefetch: false,
});
