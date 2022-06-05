

[[toc]]


### （000）出现问题：TypeError: Invalid value used as weak map key

一般是md文件中有没有识别的闭合标签。比如强行将elementplus组件用在md中没有特殊处理。
###  (001)vuepress功能引入插件功能说明

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


### （002）vuepress中全局钩子和UI组件

- client.ts增加全局钩子和全局UI组件
rootComponents 是一个组件数组，它们将会直接被放置在客户端 Vue 应用的根节点下。

[全局钩子和UI](https://v2.vuepress.vuejs.org/zh/advanced/cookbook)

- vuepress中引入绝对路径和相关路径
<!-- 绝对路径 -->

### （003）vuepress中引入相对和绝对地址图片
~~~

[指南](/zh/guide/README.md)  
<!-- 相对路径 -->
![成长](/images/home.png)

~~~

### (004)静态资源部署到某一个文件夹下，如何保证相对地址没有问题
部署资源放在某一个文件夹下面如何vuepress配置

 Base Helper

如果你的网站部署在非根路径下，即 [base](https://v2.vuepress.vuejs.org/zh/reference/config.html#base) 不是 `"/"` ，你需要把 `base` 添加到 Public 文件的绝对路径前。

举例来说，如果你想要把网站部署到 `https://foo.github.io/bar/` ，那么应该把 `base` 设置为 `"/bar/"` ，此时你必须在 Markdown 文件中这样引用 Public 文件：




### （005）使用GitHub Pages建立博客

与GitHub建立好链接之后，就可以方便的使用它提供的Pages服务，

GitHub Pages分两种，

#### 一种是你的GitHub用户名建立的`username.github.io`这样的用户&组织页（站）

~~~
创建好username.github.io项目之后，提交一个index.html文件，然后push到GitHub的master分支（也就是普通意义上的主干）。第一次页面生效需要一些时间，大概10分钟左右。

生效之后，访问username.github.io就可以看到你上传的页面了，beiyuu.github.io就是一个例子。

https://nyhxiaoning.github.io/
https://nyhxiaoning.github.io/dist/
支持多级地址查询
但是，其实很简单，打包之后，将文件夹设置dist放入根目录，然后设置vuepress2中的base地址，这样所有的文件相对位置都可以设置正常。
访问：https://nyhxiaoning.github.io/dist/   注意设置base:/dist/
~~~



#### 一种是依附项目的pages。

CNAME设置成功后，DNS生效需要一天左右。

将独立域名与GitHub Pages的空间绑定
GitHub Pages的设置
去到你的blog.io仓库，点击CNAME,再点击右下角的铅笔编辑，将cnfeat.com改成你的域名。

~~~
补充学习：
A (Address) 记录是用来指定[主机](https://baike.baidu.com/item/主机)名（或[域名](https://baike.baidu.com/item/域名/86062)）对应的[IP地址](https://baike.baidu.com/item/IP地址)记录。
用户可以将该域名下的[网站服务器](https://baike.baidu.com/item/网站服务器/8156379)指向到自己的网页服务器(web server)上。同时也可以设置域名的[子域名](https://baike.baidu.com/item/子域名/10937658)。



腾讯云如何设置A记录
[设置 A 记录 - DNSPod 服务与支持](https://docs.dnspod.cn/dns/help-a/)
@对应的A记录是IP地址：34.102.136.180
[www.nyhdadaning.xyz](http://www.nyhdadaning.xyz/)
eighth.dnspod.net
angelo.dnspod.net
~~~

