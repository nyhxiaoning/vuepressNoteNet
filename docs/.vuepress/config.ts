import { defineUserConfig } from "vuepress";
const { path } = require('@vuepress/utils')

// const { docsearchPlugin } = require("@vuepress/plugin-docsearch");
// vue3配置默认 的主题配置
const { defaultTheme } = require("@vuepress/theme-default");
const { docsearchPlugin } = require('@vuepress/plugin-docsearch')

// 简单搜索版本
const { searchPlugin } = require('@vuepress/plugin-search')
// 回到顶部
const { backToTopPlugin } = require('@vuepress/plugin-back-to-top')
// 增加md的图标
const { externalLinkIconPlugin } = require('@vuepress/plugin-external-link-icon')
// 增加进度条
const { nprogressPlugin } = require('@vuepress/plugin-nprogress')
const { tocPlugin } = require('@vuepress/plugin-toc')
const { mediumZoomPlugin } = require('@vuepress/plugin-medium-zoom')

import { localTheme } from './theme'
export default defineUserConfig({
  // 继承默认主题

  // 覆盖 `404` 布局
  // 增加搜索功
  // vuepress2默认主题配置
  theme: defaultTheme({
    head: [["link", { rel: "icon", href: "/images/go.jpg" }]],
    // Public 文件路径
    logo: "/images/home.png",
    //  URL
    //  logo: 'https://vuejs.org/images/logo.png',
    // 代码仓库地址设置
    repo: "https://github.com/nyhxiaoning/vuepressNoteNet.git",
    darkMode: true,
    // 在这里进行配置
    home: "/",
    // 设置导航栏
    navbar: [
      // 嵌套 Group - 最大深度为 2
      {
        text: "前端学习架构",
        children: [
          {
            text: "SubGroup",
            children: ["/group/sub/foo.md", "/group/sub/bar.md"],
          },
        ],
      },
      // 控制元素何时被激活
      {
        text: "前端复习架构",
        children: [
          {
            text: "Always active",
            link: "/",
            // 该元素将一直处于激活状态
            activeMatch: "/",
          },
          {
            text: "前端复习纲要汇总",
            link: "https://www.processon.com/mindmap/626b4a7d7d9c08072830f4d8",
            // 该元素在当前路由路径是 /foo/ 开头时激活
            // 支持正则表达式
            activeMatch: "^/foo/",
          },
          {
            text:"ts一站式复习内容汇总",
            link:"https://www.processon.com/mindmap/620b775a0791297996128e09"
          },
          {
            text:"前端工程化一体化梳理汇总",
            link:"https://www.processon.com/mindmap/617781871efad44894fbe29d"
          }
        ],
      },
    ],
    // 侧边栏数组
    // 不用设置侧边栏，自己创建一个readme.md文件管理自己的文件夹
    // sidebar: [
    //   // SidebarItem
    //   {
    //     text: "Foo",
    //     link: "/foo/",
    //     children: [
    //       // SidebarItem
    //       {
    //         text: "github",
    //         link: "https://github.com",
    //         children: [],
    //       },
    //       // 字符串 - 页面文件路径
    //       "/foo/bar.md",
    //     ],
    //   },
    //   // 字符串 - 页面文件路径
    //   "/bar/README.md",
    // ],
  }),
  // theme:localTheme({}),
  lang: "zh-CN",
  title: "",
  description: "这是我的第一个 VuePress 站点",
  // 增加插件配置:
  plugins: [
    // 复杂窗口页面
    // docsearchPlugin({

    // }),
    // 简单搜索
    searchPlugin({

    }),
    backToTopPlugin(),
    externalLinkIconPlugin(),
    nprogressPlugin(),
    tocPlugin(),
    mediumZoomPlugin()
  ]
});
