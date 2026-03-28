---
title: 如何开发和部署一个静态网站
icon: pen-to-square
date: 2026-03-28
category:
  - frontend
tag:
  - 红
  - 小
  - 圆
---

# 如何开发和部署一个静态网站

这篇文章介绍如何开发和部署一个静态网站。文章分为两个部分，第一个部分介绍如何本地开发一个纯前端项目 (运行在你自己电脑的`localhost:8080` )，第二个部分介绍如何将你本地开发的这个项目部署到公网，让大家都能访问到。

### 插叙：概念

- 什么是静态网站？就是没有后台的网站。我这个博客就是一个静态网站。例如，你不能在这个网站注册和登录账号，并且在文章后面发表评论。因为我后台的服务器并没有设置相应的应用程序来为每个登录请求进行一个密码校验来验证你的身份，并为每个账号分配一定的存储空间来存下你发表的评论。
- 当然静态网站也具有广泛的用途，如果只需要进行一些信息展示并且不需要处理大量的用户交互，你就可以采用静态网站。（毕竟比较简单）。

## Part Ⅰ: 本地开发

### 前置

你需要先下载一些软件。

1. 代码编辑器
   用来编写代码。这里我推荐 VS Code . [https://code.visualstudio.com/]

   ![使用vscode开发前端项目(图中这个预览窗口还需要下载预览插件)](/assets/images/article/music-heaven-in-vscode.png)

:::left
备选(只是列出来我还知道什么编辑器):
dreamweaver[https://helpx.adobe.com/cn/dreamweaver/get-started.html] 、 sublime[https://www.sublimetext.com/] 、 notepad++[https://notepad-plus-plus.org/] 、 记事本
:::

2. Node.js
   javascript的编译环境，自带npm(包管理器)。(唉我也说不清楚因为我也没搞懂，反正你下吧 )
   链接: [https://nodejs.org/en]
   ![点这个绿按钮直接下载](/assets/images/article/download-nodejs.png)
   点这个绿按钮直接下载。验证是否安装成功：
   键盘按 `Win` + `R` 打开命令行(cmd或Powershell)，在命令行窗口输入

```shell
node -v
npm -v
```

如果有输出版本号，就说明安装成功。
例如:

```shell
PS C:\Users\14700> node -v
v20.19.6
PS C:\Users\14700> npm -v
10.8.2
PS C:\Users\14700>
```

3. markdown编辑器(写博客文章才需要用到)
   我挑的这个博客模板里面每篇文章由一个markdown文件渲染而成，所以你需要有一个markdown编辑器，并了解怎样用markdown写文章。
   我大一的时候看的这个视频: [https://www.bilibili.com/video/BV1si4y1472o/?spm_id_from=333.1387.favlist.content.click&vd_source=ef31e1f1a615950aff02d37e8594bac7]
   我印象里看前半段就够了，大概是在vscode里面下载扩展然后你就可以在vscode里编辑markdown文章。markdown语法了解到在标题前面加几个#号就是几级标题就够了我觉得。
   ![markdown in vscode](/assets/images/article/markdown-editor.png)

---

好接下来我们进入正式的网站开发部分

### 原生html+css+javascript (仅介绍)

浏览器能够直接解析的语言只有 html+css+javascript 这个组合(也称原生三件套)。其他的开发方式 比如什么vue、react , 都是用别的语法写了再通过工具把项目翻译成浏览器能够解析的 html+css+javascript 。
不过我们这里主要讲博客建站所以我们跳到下一节。

### vuepress搭建博客网站

参见 [https://theme-hope.vuejs.press/zh/get-started/]，
我将重新体验这个流程并附上更详细的图文过程。

1. 新建一个文件夹并用 vscode 打开
   在 vscode 的顶部菜单栏的 `File`(文件) 中，我有两个常用选项，一个是 `New Window` (打开一个新的vscode窗口) ， 一个是 `Open Folder..` (打开文件夹).
   我通常先打开一个新窗口再打开文件夹，因为如果直接打开文件夹的话原来这个窗口里的项目会被覆盖掉。

## Part Ⅱ: 部署
