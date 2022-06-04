import { defineUserConfig } from "vuepress";
const path = require("path");
// const { docsearchPlugin } = require("@vuepress/plugin-docsearch");
// vue3配置默认 的主题配置
const { defaultTheme } = require("@vuepress/theme-default");
const { docsearchPlugin } = require('@vuepress/plugin-docsearch')

// 简单搜索版本
const { searchPlugin } = require('@vuepress/plugin-search')

// module.exports = {
//   theme: path.resolve(__dirname, './docs/.vuepress/theme'),
//   lang: "zh-CN",
//   title: "你好， VuePress ！",
//   description: "这是我的第一个 VuePress 站点",
// }
export default defineUserConfig({
  // 增加搜索功
  // vuepress2默认主题配置
  theme: defaultTheme({
    head: [["link", { rel: "icon", href: "/images/home.jpg" }]],
    // Public 文件路径
    logo: "/images/home.jpg",
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
        text: "导航栏1",
        children: [
          {
            text: "SubGroup",
            children: ["/group/sub/foo.md", "/group/sub/bar.md"],
          },
        ],
      },
      // 控制元素何时被激活
      {
        text: "导航栏2",
        children: [
          {
            text: "Always active",
            link: "/",
            // 该元素将一直处于激活状态
            activeMatch: "/",
          },
          {
            text: "Active on /foo/",
            link: "/not-foo/",
            // 该元素在当前路由路径是 /foo/ 开头时激活
            // 支持正则表达式
            activeMatch: "^/foo/",
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
  lang: "zh-CN",
  title: "成长依旧，步履未停",
  description: "这是我的第一个 VuePress 站点",
  // 增加插件配置:
  plugins: [
    // 复杂窗口页面
    docsearchPlugin({

    }),
    // 简单搜索
    searchPlugin({

    })
  ]
});
