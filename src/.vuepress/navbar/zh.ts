import { navbar } from "vuepress-theme-hope";

export const zhNavbar = navbar([
  "/zh/",

  {
    text: "深度学习",
    icon: "",
    link: "",
    children: [
      {
        text: "python基础",
        icon: "",

        prefix: "zh/posts/learn-python/",
        children: [
          {
            text: "虚拟环境",
            icon: "",
            link: "-",
          },
          {
            text: "交互模式",
            icon: "",
            link: "-",
          },
          { text: "数据类型", icon: "", link: "-" },
          { text: "分支/循环/函数", icon: "", link: "python-control-flow" },
          { text: "面向对象", icon: "", link: "python-class" },
        ],
      },
      {
        text: "神经网络(理论篇)",
        icon: "",

        prefix: "zh/posts/neural-theorem/",
        children: [
          {
            text: "多层感知机(MLP)",
            icon: "",
            link: "",
          },
          {
            text: "参数定义",
            icon: "",
            link: "",
          },
          { text: "梯度下降", icon: "", link: "" },
          { text: " - ", icon: "", link: "" },
        ],
      },
      {
        text: "神经网络(实践篇)",
        icon: "",

        prefix: "zh/posts/neural-practical/",
        children: [
          {
            text: "数据集",
            icon: "",
            link: "",
          },
          {
            text: "NumPy",
            icon: "",
            link: "",
          },
          { text: "pytorch", icon: "", link: "" },
          { text: "matplotlib", icon: "", link: "" },
          { text: "例子：手写数字识别", icon: "", link: "" },
        ],
      },
    ],
  },
  {
    text: "Web项目",
    icon: "",
    link: "",
    children: [
      {
        text: "音乐播放器",
        // icon: "music",
        link: "http://47.108.209.165/",
      },
      { text: "刷题网站(建设中)", link: "" },
    ],
  },
  {
    text: "408统考",
    icon: "",
    link: "",
    children: ["数据结构", "计算机网络", "计算机组成原理", "操作系统"],
  },
  {
    text: "算法竞赛",
    activeMatch: "^/zh/posts/algorithm",
    icon: "",
    prefix: "zh/posts/algorithm/",
    link: "",
    children: [{ text: "算法模板", icon: "", link: "template_benny" }],
  },
  {
    text: "博文",
    icon: "pen-to-square",
    prefix: "/zh/posts/article/",
    children: [
      {
        text: "苹果",
        icon: "pen-to-square",
        prefix: "apple/",
        children: [
          { text: "苹果1", icon: "pen-to-square", link: "1" },
          { text: "苹果2", icon: "pen-to-square", link: "2" },
          "3",
          "4",
        ],
      },
      {
        text: "香蕉",
        icon: "pen-to-square",
        prefix: "banana/",
        children: [
          {
            text: "香蕉 1",
            icon: "pen-to-square",
            link: "1",
          },
          {
            text: "香蕉 2",
            icon: "pen-to-square",
            link: "2",
          },
          "3",
          "4",
        ],
      },
      { text: "樱桃", icon: "pen-to-square", link: "cherry" },
      { text: "火龙果", icon: "pen-to-square", link: "dragonfruit" },
      "tomato",
      "strawberry",
    ],
  },
  {
    text: "V2 文档",
    icon: "book",
    link: "https://theme-hope.vuejs.press/zh/",
  },
  "/zh/demo/",
]);
