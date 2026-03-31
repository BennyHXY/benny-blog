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

#### 3. 修改项目 - 网站的部分

在你本地运行这个项目的时候，你会在导航栏里面看到这两个栏目，都是可以点进去的，你可以在里面看到很详细的对这个项目的说明。
![project-doc](/assets/images/article/how-to-dev-and-deploy-a-static-site/project-doc.png)

我这里给一个修改 `主页` / `个人信息` / `顶部导航栏` / `侧边栏` 这几个部位的流程作参考。

- 主页
  修改的位置在`.vuepress/src/`下的`README.md`里面。它的 `frontmatter` 部分里有一句 `home:true` 说明它是主页。

  :::note frontmatter
  vuepress项目里的markdown文件比我们平常用的markdown文件多了一个`frontmatter`的部分，就是每个markdown文件的头部有一个由`---`包裹起来的`yaml`代码块，我们称这个代码块为`frontmatter`。

  ![](/assets/images/article/how-to-dev-and-deploy-a-static-site/markdown-structure.png)

  :::

  我完全没有了解过 `yaml` , 但是他看起来就是一堆 `<属性>:<值>`这样的东东组成的。
  然后我们通过修改这个 `README.md` 里的`heroText` 和 `tagline` 修改显示在主页的两个文字段。
  ![alt text](/assets/images/article/how-to-dev-and-deploy-a-static-site/change-project-home-01.png)
  效果:
  ![alt text](/assets/images/article/how-to-dev-and-deploy-a-static-site/change-project-home-02.png)
  接下来，我们在frontmatter中修改`heroImage`的值和添加`bgImage`这个属性来修改主页显示的背景图片和图标：
  ![change-project-home-03](/assets/images/article/how-to-dev-and-deploy-a-static-site/change-project-home-03.png)

  效果：
  ![change-project-home-04](/assets/images/article/how-to-dev-and-deploy-a-static-site/change-project-home-04.png)

:::note 对图片路径的说明

- 本地图片：把你要插入的图片放在 `.vuepress/public/assets/images/`下面。然后你后面引用的时候，在vscode的侧边栏里选中这张图片，按`Ctrl`+`C`，在你要用这个图片的地方`Ctrl`+`V`,它就会出现这个图片的路径。然后，你需要把`public`及以前的路径给删掉，因为`vuepress`默认就是在`public`文件夹下面找图片资源的。例如我这里复制出来是`src/.vuepress/public/assets/images/background/luoke-02.webp` ，我需要把他删成 `/assets/images/background/luoke-02.webp`。
- 网络图片：把你在网上搜到图片的地址直接粘贴过来就可以了，不过很多时候不建议这么做。因为有可能这个地址里的东西会换成别的内容,或者出现其他问题。

:::

:::info 参考:

- [https://theme-hope.vuejs.press/zh/guide/blog/home.html] (v2文档/指南/博客首页)
- [https://theme-hope.vuejs.press/zh/config/frontmatter/blog-home.html](v2文档/配置Frontmatter/配置博客主页/Frontmatter 配置)

:::

- 个人信息
  从主页往下拉，这个部位显示的东西
  ![alt text](/assets/images/article/how-to-dev-and-deploy-a-static-site/change-project-auth-info-02.png)
  在 `.vuepress/theme.ts`里面改。我觉得这几个地方(作者名 / 博客描述 / logo)你点进去看就知道了。不知道再q我叭。

- 顶部导航栏
  在 `。vuepress/navbar.ts`这个文件里设置，点进去然后会看到 `export default navbar([])` 这样一句话。中括号表示数组，里面的项以`,`分隔，里面的项可以是由大括号`{}`包裹的`Object(对象)`,或者是由双引号`""`包裹的`String(字符串)`。我们通过在这个数组里面添加项来添加在导航栏里显示的东西。
  - 对象：
    对象和那个`yaml`差不多，就是由一堆`属性:值`这样的键值对组成的，键值对之间由`,`分隔。他这里必填的属性是 `text` 和 `link`，分别表示显示的文字和点击它以后跳转的路径。或者你有 `children` 的话你也可以不要`link`。
  - 字符串：
    字符串的效果跟`link`差不多，通过里面的路径跳转到相应的页面。如果找不到这个的话，他会给你转到一个404界面。

  例子：
  假设我设计一个这样的项及其下拉菜单

  ```text
  fighting for 408
      - 数据结构
      	- 线性表
      	- 树
      	- 图
      - 计算机网络
      	- 概述
      	- 应用层
      	- 传输层
      	- 网络层
      	- 链路层
      	- 物理层
      - 计算机组成原理
      	- 信息的表示和处理
      	- 处理器
      	- 存储器
      - 操作系统
        	- 概述
        	- 进程管理
        	- 内存管理
        	- 文件管理
        	- I/O 管理

  ```

  我就先编写一个这样的`Object`放到`navbar.ts`中的数组：

  ```typescript
    {
        text:"fighting for 408",
        children:[]
    }
  ```

  整个`navbar.ts`的结构：
  ![change-project-navbar-01](/assets/images/article/how-to-dev-and-deploy-a-static-site/change-project-navbar-01.png)

  然后我们再添加`children`数组中的内容完善整个下拉菜单:

  ```typescript
  {
    text: "fighting for 408",
    children: [
      {
        text: "数据结构",
        children: ["线性表", "树", "图"],
      },
      {
        text: "计算机网络",
        children: [
          "概述",
          "应用层",
          "传输层",
          "网络层",
          "数据链路层",
          "物理层",
        ],
      },
      {
        text: "计算机组成原理",
        children: ["信息的表示和处理", "处理器", "存储器"],
      },
      {
        text: "操作系统",
        children: ["概述", "进程管理", "内存管理", "文件管理", "I/O管理"],
      },
    ],
  },
  ```

  这样我们就在导航栏中渲染了一个完整的目录结构了:
  ![change-project-navbar-02.png](/assets/images/article/how-to-dev-and-deploy-a-static-site/change-project-navbar-02.png)
  :::warning
  导航栏里的菜单结构不要超过三层。(比我这个再深就不行了。)
  :::
  接下来我们修改 `link` 和 `prefix` 的值把下拉菜单里的项链接到具体的markdown页面。
  项目的markdown文件都放在 `src/posts/`目录下面，假设我们在`posts/`下新建一个名为`/computer-architecture/`的文件夹，用来存放`计算机组成原理`的东西。如下所示，

  ```
    COMPUTER-ARCHITECTURE
    ├─representation-and-processing-of-information
    │  ├─Integers.md
    │  └─Floats.md
    ├─processor
    │  ├─Instruction-Sets.md
    │  └─pipline.md
    └─memory-hierarchy.md

  ```

  然后我们修改`navbar.ts`中`计算机组成原理`的部分:

  ```typescript
  {
      text: "计算机组成原理",
      prefix: "/posts/computer-architecture/",
      children: [
        {
          text: "信息的表示和处理",
          link: "representation-and-processing-of-information/",
        },
        { text: "处理器", link: "processor/" },
        { text: "存储器", link: "memory-hierarchy" },
      ],
    },
  ```

  跳转机制：每个`link`的跳转路径是它所有的祖先节点的`prefix`再拼上它自己。以`/`结尾的表示一个目录，默认会跳到这个目录下的`README.md`文件。如果这个目录下没有`README.md`文件的话，它会生成一个这个目录的目录页代替`README.md`。

  例如，"存储器"的跳转路径是`"/posts/computer-architecture/"+"memory-hierarchy"`=`"posts/computer-architecture/memory-hierarchy"`;
  "处理器"的跳转路径是 `"/posts/computer-architecture/"+"processor/"`=`"/posts/computer-architecture/processor/"`.这是一个以`/`结尾的目录，并且下面没有`README.md`，所以它会跳转到一个自动生成的目录页。
  ![change-project-navbar-03](/assets/images/article/how-to-dev-and-deploy-a-static-site/change-project-navbar-03.png)

- 侧边栏
  在`.vuepress/sidebar.ts`里面，机制和`navbar.ts`差不多。除了`children`的值是一个`"structure"`，它会生成`prefix`指向的目录的目录结构。
  如果你没有特别的需求，这里就不用改啦。只要把markdown文章放进posts文件夹，侧边栏的`文章`栏目就会自动显示出你的文章了。

#### 4. 修改项目 - markdown文章的部分

- 编辑器和基本的markdown语法:
  - 我大一的时候看的这个视频: [https://www.bilibili.com/video/BV1si4y1472o/?spm_id_from=333.1387.favlist.content.click&vd_source=ef31e1f1a615950aff02d37e8594bac7]
    大概是在vscode里面下载扩展然后你就可以在vscode里编辑markdown文章。
  - 语法速查(其实是我现搜的): [https://markdown.com.cn/cheat-sheet.html#%E6%80%BB%E8%A7%88]

- 我们项目中的markdown:
  - markdown文件放在`posts/`这个目录下，或者是`src/`下的其他目录。
  - markdown文件的结构:
    :::note frontmatter
    vuepress项目里的markdown文件比我们平常用的markdown文件多了一个`frontmatter`的部分，就是每个markdown文件的头部有一个由`---`包裹起来的`yaml`代码块，我们称这个代码块为`frontmatter`。

    ![](/assets/images/article/how-to-dev-and-deploy-a-static-site/markdown-structure.png)
    :::

  - 一些扩展的东西可以在 [V2文档的指南](https://theme-hope.vuejs.press/zh/guide/)中查阅到，例如
    - [V2文档/指南/Markdown/图表/思维导图](https://theme-hope.vuejs.press/zh/guide/markdown/chart/markmap.html)
    - [V2文档/指南/组件/内置组件 ](https://theme-hope.vuejs.press/zh/guide/component/built-in.html) (里面包含不同种类的媒体播放器或者是pdf阅读器之类的东西)

    指南里面文章的结构大概就是让你先去 `.vuepress/theme.ts`里改一个什么属性的值，然后给一个用这个东西的例子。 （这个时候可能出现vscode里markdown预览和运行在`localhost:8080`的东西显示不一致的情况，因为可能vscode里扩展没下齐。我是直接不管以网页的为准的。因为它部署的版本肯定还是和`localhost`的一致的。）

---

## Part Ⅱ: 部署

其实我的部署水平很不怎么样，但是这里介绍我实施过的两种部署方式: 1. github pages, 2. 阿里云服务器 + nginx .

### Github Pages

#### 前置

你需要下载 [git](https://git-scm.com/) 和 注册 [github](https://github.com/) 账号。

- [廖雪峰的git教程 - 安装git](https://liaoxuefeng.com/books/git/install-git/index.html)
- [廖雪峰的git教程 - 远程仓库](https://liaoxuefeng.com/books/git/remote/index.html)

#### 流程

1.  在github上创建仓库并与本地项目关联。

    1.1. 在github上创建仓库
    ![create repo on github - 01](/assets/images/article/create-repo-on-github-01.png)
    在顶部栏这个 `+` 的下拉菜单里选择 `New Repository`
    ![create repo on github - 02](/assets/images/article/create-repo-on-github-02.png)
    填写项目名称和描述，其他东西选啥都不添加。
    1.2. 将远程库与本地项目关联
    完成上一步后，会来到这个页面：
    ![create repo on github - 03](/assets/images/article/create-repo-on-github-03.png)
    点击这个按钮复制这段内容到剪贴板，然后在本地项目的Terminal窗口中按`Ctrl`+`V`粘贴，回车执行。
    重新在github中进入项目页面，可以看到项目中出现了一个 `README.md` 文件，说明关联成功。
    ![git-add-remote-repo-01](/assets/images/article/git-add-remote-repo-01.png)

2.  修改github pages的`settings`, 并推送本地内容
    2.1 修改github pages的`settings`
    在github的项目页面，切换到`settings`选项卡，然后在左侧边栏中点`Pages`，然后把`branch`改成`gh-pages`，点`save`按钮保存。
    ![github-pages-settings-01](/assets/images/article/github-pages-settings-01.png)
    2.2 推送本地内容
    将这段命令复制到本地项目的Terminal，(之后如果更新了博客文章，要让网上部署的博客跟本地同步也是这个命令)，双引号里的内容可以重新填一下：

    ```shell
    # 提交远程库

    git add .
    git commit -m "(对本次提交的说明)"
    git push origin main
    ```

    重新进入github的项目页面，可以看到本地的东西都推送到了远程库，并且这里出现了一个棕色的点点(pending, 表示在排队)，等一会儿以后他会变成红色的叉或者绿色的勾。（如果运气好，是绿色的勾的话我们就已经部署成功了。）
    ![alt text](/assets/images/article/github-pages-action-pending.png)

    我这里是运气不好的情况，他变成了红色的叉。然后我们就点进这个页面把错误信息粘贴给ai问他怎么回事，然后根据ai的建议修改部署的配置文件(路径：`my-docs\.github\workflows\deploy-docs.yml`)。我这里是那个脚手架生成的两个地方的文件路径是window风格的`\`,我们需要把他改成linux风格的`/`。(例如得把`src\.vuepress\dist`改成`src/.vuepress/dist`)
    我改出来的 `deploy-docs.yml` 文件：

    ```yml
    name: 部署文档

    on:
      push:
        branches:
          - main
      workflow_dispatch:

    permissions:
      contents: write

    jobs:
      deploy-gh-pages:
        runs-on: ubuntu-latest
        steps:
          - name: Checkout
            uses: actions/checkout@v4
            with:
              fetch-depth: 0
              # 如果你文档需要 Git 子模块，取消注释下一行
              # submodules: true

          - name: 设置 Node.js
            uses: actions/setup-node@v4
            with:
              node-version: 20
              cache: npm

          - name: 安装依赖
            run: |
              corepack enable
              npm ci

          - name: 构建文档
            env:
              NODE_OPTIONS: --max_old_space_size=8192
            run: |-
              npm run docs:build
              > src/.vuepress/dist/.nojekyll

          - name: 部署文档
            uses: JamesIves/github-pages-deploy-action@v4
            with:
              # 部署文档
              branch: gh-pages
              folder: src/.vuepress/dist
    ```

    2.3. 还有一个地方要改，在项目目录的`/src/.vuepress/`下面找到`config.ts`，把这里的第一行里的`base` 改成项目名，我这里是 `demo-blog`.
    ![github pages deployments - vuepressbase - 03](/assets/images/article/github-pages-deployments-03-vuepress-base.png)

    修改完以后我们重新在Terminal中输入推送命令

    ```powershell
    # 提交远程库

    git add .
    git commit -m "修改了deploy-docs.yml中路径错误的问题"
    git push origin main
    ```

    回车执行后再进入项目页面应该就可以看到部署成功了，这里出现了一个 `Deployments`的块块，点进去。

    ![github-pages-deployments-02](/assets/images/article/github-pages-deployments-02.png)
    这里会出现部署好的地址
    ![github-pages-deployments-04-finished](/assets/images/article/github-pages-deployments-04-finished.png)
    再点进去，(他可能要过一会儿才能加载出页面，第一次比较慢一点，以后推送的时候就很快了)
    里面就是部署好的页面了：
    ![github-pages-deployments-05-finished](/assets/images/article/github-pages-deployments-05-finished.png)

3.  再次修改项目并推送
    至此我们基本就跑通全流程了(本地开发+远程同步)。之后我们的工作流全部是本地修改项目(写markdown文章)，然后远程推送了。
    再次把同步远程库的命令粘贴在这里:

    ```powershell
    # 提交远程库

    git add .
    git commit -m "(对本次提交的说明)"
    git push origin main
    ```

    每次本地改完，然后Terminal里粘贴这个命令，回车执行，本地项目就会同步到远程库并自动部署了。
    我这里改了一下主页的标题和口号：
    ![gh-pg-finished-06](/assets/images/article/github-pages-deployments-06-finished.png)

    以上就是 `vuepress` 项目部署到 `github pages` 的全部流程了。你可以在 [https://bennyhxy.github.io/demo-blog/] 访问到我们刚刚部署的这个网站呢。

### 阿里云 + nginx

#### 前置

1. 服务器:一台随时都开着的电脑。用户来请求访问我们的网站时，服务器就把页面给他发过去。
   我们在[阿里云官网](https://www.aliyun.com/)租一台服务器。网站部署是一种很古老的东西，所以需要的计算资源很少，你只需要租一个最便宜的cpu的就可以了。你要玩那种很新的东西才需要什么超大gpu。
   我租的这个(99r/年):
   ![deploy-by-nginx-01-aliyun-basic-info](/assets/images/article/how-to-dev-and-deploy-a-static-site/deploy-by-nginx-01-aliyun-basic-info.png)

1. 网页代理软件：使得一台电脑能被用作网络服务器。在云服务器上下载[nginx](https://nginx.org/)。

1. 文件传输软件: 把我们本地开发完的项目发到服务器。
   我用的是 [FileZilla](https://filezilla-project.org/).

- 推荐阅读: [如何设置一个本地测试服务器? | MDN Web Docs](https://developer.mozilla.org/zh-CN/docs/Learn_web_development/Howto/Tools_and_setup/set_up_a_local_testing_server)

#### 流程

我不太有空重新体验这个流程了，所以这里就没有很多的过程图片咯。只写一个大概的过程，如果你需要更详细的图文过程，就q我叭。

1. 租服务器，开安全组
2. 使用文件传输软件把项目文件传过去。(原生项目直接传，框架项目传`npm run build`以后的`dist`文件夹)
3. 改nginx配置文件，运行nginx
4. 浏览器输入网址，访问。

效果: [http://47.108.209.165/] (我的音乐播放器。。)

---

## 小结

在这篇文章中，我们介绍了如何开发和部署一个静态网站。我们较详细地讲解了使用vuepress-press搭建博客，并部署到 github pages 的流程，同时也简略的介绍了使用原生 html + css + javascript 开发网站和自己租服务器和配置代理的部署方式。希望这篇文章能帮你在多彩的网络世界里更进一步，如果过程中遇到问题，就q我叭。
