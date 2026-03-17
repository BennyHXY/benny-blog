import { defineUserConfig } from "vuepress";

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

  // Enable it with pwa
  // shouldPrefetch: false,
});
