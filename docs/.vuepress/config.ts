import { defineUserConfig } from "vuepress";

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
    // Public 文件路径
    logo: "/images/home.png",
    //  URL
    //  logo: 'https://vuejs.org/images/logo.png',
    // 代码仓库地址设置
    // repo: "https://github.com/nyhxiaoning/vuepressNoteNet.git",
    // 设置导航栏
    navbar: [
      // 嵌套 Group - 最大深度为 2
      {
        text: "前端常用工具网站参考",
        children: [
          {
            text:'前端站点学习汇总网站',
            link:'https://www.kwgg2020.com/'
          },
          {
            text: "在线实时练习vue2/3.React练习场",
            link: "http://lxqnsys.com/code-run/#/",
          },
          {
            text: "elementplus实时练习场学习",
            link: "http://lxqnsys.com/code-run/#/",
          },
          {
            text: "typeScript实时练习场学习",
            link: "https://www.typescriptlang.org/zh/play#code/PTAEHUFMBsGMHsC2lQBd5oBYoCoE8AHSAZVgCcBLA1UABWgEM8BzM+AVwDsATAGiwoBnUENANQAd0gAjQRVSQAUCEmYKsTKGYUAbpGF4OY0BoadYKdJMoL+gzAzIoz3UNEiPOofEVKVqAHSKymAAmkYI7NCuqGqcANag8ABmIjQUXrFOKBJMggBcISGgoAC0oACCoASMFmgY7p7ehCTkVOle4jUMdRLYTqCc8LEZzCZmoNJODPHFZZXVtZYYkAAeRJTInDQS8po+rf40gnjbDKv8LqD2jpbYoACqAEoAMsK7sUmxkGSCc+VVQQuaTwVb1UBrDYULY7PagbgUZLJH6QbYmJAECjuMigZEMVDsJzCFLNXxtajBBCcQQ0MwAUVWDEQNUgADVHBQGNJ3KAALygABEAAkYNAMOB4GRogLFFTBPB3AExcwABT0xnM9zsyhc9wASmCKhwDQ8ZC8iElzhB7Bo3zcZmY7AYzEg-Fg0HUiS58D0Ii8AoZTJZggFSRxAvADlQAHJhAA5SASAVBFQAeW+ZF2gldWkgx1QjgUrmkeFATgtOlGWH0KAQiBhwiudokkuiIgMHBx3RYbC43CCJSAA",
          },
        ],
      },
      // 控制元素何时被激活
      {
        text: "前端复习架构持续化学习",
        children: [
          {
            text: "个人快捷键汇总和更新记录",
            link: "https://www.processon.com/mindmap/60d6e4a3f346fb5e35b48b04",
          },
          {
            text: "个人全栈架构一体化的实现位置",
            link: "https://app.yinxiang.com/shard/s37/nl/24388549/717c6df8-60ec-4a80-b02e-c968f44016df",
          },
          {
            text: "前端复习纲要汇总",
            link: "https://www.processon.com/mindmap/626b4a7d7d9c08072830f4d8",
            // 该元素在当前路由路径是 /foo/ 开头时激活
            // 支持正则表达式
          },
          {
            text:"ts一站式复习内容汇总",
            link:"https://www.processon.com/mindmap/620b775a0791297996128e09"
          },
          {
            text:"前端工程化一体化梳理汇总",
            link:"https://www.processon.com/mindmap/617781871efad44894fbe29d"
          },
          {
            text:"个人git项目持续集成和优化提升",
            link:'https://www.processon.com/mindmap/61e232770e3e744157810e27'
          },
          {
            text: "个人git项目汇总和更新记录",
            link: "https://www.processon.com/mindmap/61e232770e3e744157810e27",
          },
        ],
      },
      {
        text: "技术架构更新学习网站汇总",
        children: [
          {
            text: "前端库变化的一些动态化",
            link: "https://2021.stateofjs.com/zh-Hans/libraries/",
          },
          {
            text: "大圣前端编程学习网站",
            link: "https://shengxinjing.cn/",
          },
          {
            text:"前端搜索库解决方案openbase",
            link:"https://openbase.com/search?q="
          },
          {
            text:"",
            link:"https://www.processon.com/mindmap/617781871efad44894fbe29d"
          },
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
  title: "Hello,World",
  description: "这是我的第一个 VuePress 站点",
  // TODO:设置站点部署的目录，这样打包的时候，资源可以找到
  base:"/dist/",
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
