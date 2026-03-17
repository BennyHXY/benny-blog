import { navbar } from "vuepress-theme-hope";

export const enNavbar = navbar([
  "/",
  {
    text: "Deep Learning",
    icon: "",
    prefix: "posts/deep-learning/",
    link: "",
    children: [{ text: "C/C++ template", icon: "", link: "template_benny" }],
  },
  {
    text: "Web projects",
    icon: "",
    prefix: "posts/web-projects/",
    link: "",
    children: [{ text: "C/C++ template", icon: "", link: "template_benny" }],
  },
  {
    text: "Fighting for 408",
    icon: "",
    prefix: "posts/fighting-for-408/",
    link: "",
    children: [{ text: "C/C++ template", icon: "", link: "template_benny" }],
  },
  {
    text: "Algorithm Competition",
    icon: "",
    prefix: "posts/algorithm/",
    link: "",
    children: [{ text: "C/C++ template", icon: "", link: "template_benny" }],
  },
  {
    text: "Posts",
    icon: "pen-to-square",
    prefix: "/posts/",
    children: [
      {
        text: "Apple",
        icon: "pen-to-square",
        prefix: "apple/",
        children: [
          { text: "Apple1", icon: "pen-to-square", link: "1" },
          { text: "Apple2", icon: "pen-to-square", link: "2" },
          "3",
          "4",
        ],
      },
      {
        text: "Banana",
        icon: "pen-to-square",
        prefix: "banana/",
        children: [
          {
            text: "Banana 1",
            icon: "pen-to-square",
            link: "1",
          },
          {
            text: "Banana 2",
            icon: "pen-to-square",
            link: "2",
          },
          "3",
          "4",
        ],
      },
      { text: "Cherry", icon: "pen-to-square", link: "cherry" },
      { text: "Dragon Fruit", icon: "pen-to-square", link: "dragonfruit" },
      "tomato",
      "strawberry",
    ],
  },
  {
    text: "V2 Docs",
    icon: "book",
    link: "https://theme-hope.vuejs.press/",
  },
  // {
  //   text: "python",
  //   icon: "",
  //   link: "5",

  //   children: [
  //     {
  //       text: "环境",
  //       icon: "",
  //       link: "",
  //       children: [
  //         { text: "虚拟环境", icon: "", link: "" },
  //         { text: "交互模式", icon: "", link: "" },
  //       ],
  //     },
  //     {
  //       text: "语言",
  //       icon: "",
  //       link: "",
  //       children: [
  //         { text: "数据格式", icon: "", link: "" },
  //         { text: "分支/循环/函数", icon: "", link: "" },
  //       ],
  //     },
  //   ],
  // },

  "/demo/",
]);
