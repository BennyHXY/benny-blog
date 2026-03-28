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

3. markdown编辑器(只有写博客文章的时候需要用到)
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

#### 1. 新建一个文件夹并用 vscode 打开

在 vscode 的顶部菜单栏的 `File`(文件)选项卡 中，我有两个常用选项，一个是 `New Window` (打开一个新的vscode窗口) ， 一个是 `Open Folder..` (打开文件夹).
![open folder in vscode](/assets/images/article/open-folder-in-vscode.png)
我通常先打开一个新窗口再打开文件夹，因为如果直接打开文件夹的话原来这个窗口里的项目会被覆盖掉。
![select folder in vs code](/assets/images/article/select-folder-in-vscode.png)
如图，我们在本地新建一个文件夹(我这里是 `E:\benny\njs\testServer\vuepress-workspace`),然后用vscode打开它。

#### 2. 使用脚手架初始化项目

2.1. 使用vscode打开命令行
![alt text](/assets/images/article/new-terminal-in-vscode.png)
点击 `New Terminal` 以后，你会看到在vscode的底部区域出现一个这个窗口
![alt text](/assets/images/article/terminal-area-in-vscode.png)
在这个窗口里输入命令跟直接在powershell里 `cd E:\benny\njs\testServer\vuepress-workspace` 然后输入命令的效果是一样的。
2.2. 使用脚手架创建项目
参见 [https://theme-hope.vuejs.press/zh/get-started/create.html#_2-%E5%88%9B%E5%BB%BA%E9%A1%B9%E7%9B%AE%E6%A8%A1%E6%9D%BF]
在我们刚刚打开的这个Terminal窗口输入命令:

```shell
 npm init vuepress-theme-hope@latest my-docs
```

然后在脚手架中选择选项：
![blog-init-options](/assets/images/article/blog-init-option.png)
脚手架里按上下键切换选项，按tab键自动补全(他的默认选项)，这里给出一个参考。（除了应用名称/应用描述/多语言你根据自己的需要填，其他建议你跟我选一样的）

```shell
 npm init vuepress-theme-hope@latest my-docs

 > npx
 > create-vuepress-theme-hope my-docs

 ✔ Select a language to display / 选择显示语言 简体中文
 ✔ 选择包管理器 npm
 ✔ 你想要使用哪个打包器？ vite
 生成 package.json...
 ✔ 设置应用名称 blog-demo
 ✔ 设置应用描述 a demo blog to demonstrate how to develop and deploy a static site (blog) project.
 ✔ 设置应用版本号 2.0.0
 ✔ 设置协议 MIT
 生成 tsconfig.json...
 ✔ 你想要创建什么类型的项目？ blog
 ✔ 项目需要用到多语言么? No
 生成模板...
 ✔ 是否初始化 Git 仓库? Yes
 ✔ 是否需要一个自动部署文档到 GitHub Pages 的工作流？ Yes
 ✔ 选择你想使用的源 国内镜像源
```

填完以后，他会问你是否本地运行demo，输入 `y` ，稍等片刻后 在本地浏览器输入 `localhost:8080` 即可访问到他给的一个初始项目：
![blog demo in 8080](/assets/images/article/blog-demo-in-8080.png)

好了，现在在Terminal窗口中按 `Ctrl` + `C` , 停止运行这个初始项目。我们开始讲解如何修改这个项目的各种部分让他看起来像一个我们自己的博客。

:::note

- 之后运行项目的方法:
  需要进入 `my-docs` 这个目录下面(就是以我这个路径`E:\benny\njs\testServer\vuepress-workspace`为例, 还需要再`cd my-docs`一次)，然后执行 `npm run docs:dev` 这个命令。你可以每次vscode打开文件夹的时候就打开`my-docs`这个文件夹，这样Teminal的路径就直接是`E:\benny\njs\testServer\vuepress-workspace\my-docs`这样的了。'
- 命令行技巧：
  在命令行里按键盘的`↑`键，可以切换到以前使用过的命令。因此一个很好的工作流是vscode打开`my-docs`文件夹，然后在Terminal选项卡中打开Terminal，然后按`↑`键切换到你之前使用过的命令然后回车执行。(根据什么的局部性，你现在要使用的指令大概率是你最近使用过的指令。)

:::

#### 3. 修改项目 / 写博文

## Part Ⅱ: 部署

---

## 小结
