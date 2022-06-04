
![成长](/images/home.png)
[[toc]]
# 全栈学习之旅

# 一定要生活

# 00个人前端项目实战记录和链接


home: true
html

<el-button type="primary">我是Element-Plus</el-button>

<el-button type="primary">我是Element-Plus</el-button>


## 一级菜单列表

[首页](../README.md)  
[00个人前端项目实战记录和链接](./00个人前端项目实战记录和链接/000README.md)  
[test](./test/read.md)  


<!-- 绝对路径 -->
[指南](/zh/guide/README.md)  

## 二级菜单内容




## 每一个菜单




## 第一个下面的内容
~~~
dd


ddd


ddd


- ddd


- ddd




~~~


## vuepress功能引入和修改记录
### vuepress功能引入1
~~~
- 引入回到顶部
yarn add -D @vuepress/plugin-back-to-top@next

- 给markdown增加图标
yarn add -D @vuepress/plugin-external-link-icon@next

- 增加进度条
yarn add  -D @vuepress/plugin-nprogress@next

- 提供toc功能
yarn add -D @vuepress/plugin-toc@next

- 点击图片提供伸缩功能
yarn add -D @vuepress/plugin-medium-zoom@next

- 引入elementplus
clientAppEnhance.ts

~~~


### 重要vuepress功能引入2

- client.ts增加全局钩子和全局UI组件
rootComponents 是一个组件数组，它们将会直接被放置在客户端 Vue 应用的根节点下。

[全局钩子和UI](https://v2.vuepress.vuejs.org/zh/advanced/cookbook/usage-of-client-config.html#%E4%BD%BF%E7%94%A8%E4%B8%8D%E6%94%AF%E6%8C%81-ssr-%E7%9A%84%E5%8A%9F%E8%83%BD)
