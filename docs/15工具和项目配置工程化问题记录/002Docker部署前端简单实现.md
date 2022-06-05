[[toc]]



## 1.使用 Docker 部署前端之简单版
在我们开发过程中需要安装很多环境，有些环境安装起来甚是麻烦，好不容易安装好了，有时候需要换电脑或者是给小伙伴也装一个环境的时候，重复性工作就很多了，又或者压根就不想在自己电脑上安装一大堆可能并不常用的环境，那么用docker无疑是最好的选择，***一键运行***

项目内容：- [docker-compose](https://gitee.com/wujr1532/docker-common)

### (1)本地版
使用serve在本地启动一个静态服务器（或是使用一个nodejs写一个脚本简单的静态服务）

~~~
npx serve .

~~~

### (2)docker cli构建运行容器
docker version验证当前的windows系统设置了docker安装成功。



### docker的vue的nigix部署

https://gitee.com/nyhxiaoning/docker-vue3-nginx.git


### docker一键部署学习地址
https://gitee.com/nyhxiaoning/docker-common.git






### docker-compose是什么。
简单说：Docker Compose配置文件是Docker Compose的核心，用于定义服务、网络和数据卷。格式为YAML，默认路径为./docker-compose.yml，

Docker-compose听起来像是一个由YAML语法定义的文本文件，通过docker-compose命令行解释执行。在docker-compose.yml文件中，你可以编辑你需要运行的Docker容器（称之为服务），以及这些服务之间的依赖关系。Docker-compose可以很好地帮你维护这些服务的生命周期。在Docker for Windows中，docker-compose是被默认安装的，你可以通过--version参数来查看安装的版本：




### 参考资料
- [docker-compose](https://gitee.com/wujr1532/docker-common)

- [简单docker的前端部署](https://github.com/shfshanyue/simple-deploy)

