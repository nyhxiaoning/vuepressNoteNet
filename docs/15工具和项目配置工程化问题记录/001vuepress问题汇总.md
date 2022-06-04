

[[toc]]


### （1）出现问题：TypeError: Invalid value used as weak map key

一般是md文件中有没有识别的闭合标签。比如强行将elementplus组件用在md中没有特殊处理。
###  vuepress功能引入插件功能说明

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


### （2）vuepress中全局钩子和UI组件

- client.ts增加全局钩子和全局UI组件
rootComponents 是一个组件数组，它们将会直接被放置在客户端 Vue 应用的根节点下。

[全局钩子和UI](https://v2.vuepress.vuejs.org/zh/advanced/cookbook)

- vuepress中引入绝对路径和相关路径
<!-- 绝对路径 -->

### （3）vuepress中引入相对和绝对地址图片
~~~

[指南](/zh/guide/README.md)  
<!-- 相对路径 -->
![成长](/images/home.png)

~~~