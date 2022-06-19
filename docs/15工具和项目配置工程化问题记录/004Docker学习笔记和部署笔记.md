[[toc]]

## docker学习

参考
[开发者必备的 Docker 实践指南](https://juejin.cn/book/6844733746462064654/section/6844733746562727950]

## 1.Docker简历

使用背景

常见的虚拟机实现中，我们要搭建一套 LAMP 结构的服务，我们通常会建立一个虚拟机，在虚拟机中安装上 Linux 系统，之后分别安装 Apache、MySQL 和 PHP。而在 Docker 里，最佳的实践是分别基于 Apache、MySQL 和 PHP 的镜像建立三个容器，分别运行 Apache、MySQL 和 PHP ，而它们所在的虚拟操作系统也直接共享于宿主机的操作系统。



| 属性           | Docker   | 虚拟机 |
| -------------- | :------- | ------ |
| 启动速度       | 秒级     | 分钟级 |
| 硬盘使用       | MB 级    | GB 级  |
| 性能           | 接近原生 | 较低   |
| 普通机器支撑量 | 数百个   | 几个   |



### 为什么docker这么快

- 容器技术支持，应用就是容器的方案。容器技术剔除了hypervisior层，又干掉了虚拟操作系统的概念。
- 基于联合文件系统的底层文件系统支持，容器可以容易和真实系统共享存储资源，带来了存储空间的低消耗。
- docker自身就是跨平台的，docker支持在容器中同时运行多种程序，但是这样会降低docker效率。
- 综上： CI持续集成( Continuous Integration ) 和持续交付 ( Continuous Delivery )。

## 2.Docker核心组成

### 四大组成对象。

- 镜像image
- 容器Container
- 网络Network
- 数据卷Volume

### 镜像

镜像可以理解为一个只读文件包，包含了虚拟环境运行最原始文件系统的内容。

Dokcer的创新，利用了AUFS作为底层文件系统实现，通过这种方式，Docker实现增量式镜像结构。

每一次对于镜像的修改，Docker都会铸造一个镜像层，一个镜像其实就是其下层所有的镜像层组成。

所以基于这种结构，Dokcer镜像实质无法修改，只能产生新的镜像，不是更新原有的镜像。



### 容器（核心namepace和group）

容器就是用来隔离虚拟环境基础设施。

镜像可以理解为编程中的类，那么容器可以理解为类的实例。

镜像内存放不可以变化的东西，当用它为基础的容器启动后，容器成为一个活的空间。

一个Dokcer容器必须有三部分：一个Dokcer镜像，一个程序运行环境，一个指令集合



### 网络(cgroup)

网络通讯是最常用的程序之间数据交换方式。

Dokcer中不仅可以对于每一个容器进行网络配置，还可以在容器之间建立虚拟网络，将数个容器包裹其中，同其他的网络环境隔离。

Dokcer能够利用技术，在容器中营造独立域名解析环境，让我们不修改代码和配置的前提下直接迁移容器，Dokcer会为我们完成新的环境网络适配。



### 数据卷

文件是进行数据交换的资源。一般在虚拟机中，挂载文件是繁琐的，因为序号搞定不同文件系统的兼容性。

但是Dokcer可以不用关心文件系统的挂载，可以通过Dokcer底层的Union file system技术，实现不同目录的数据存放和容器文件共享。



### Docker Engine

#### 容器化的实现

实现容器化的工作通过Docker官方维护，DOkcer命名为Dokcer Engine.

其中其实通过各种独立软件包组成，其中最核心的两个部分：docker daemon和dockerCli

### docker daemon和docker CLI

docker daemon功能：容器管理，应用编排，镜像分发等功能

docker CLI功能：镜像模块，容器模块，数据卷模块，网络模块等

docker daemon通常通过服务的形式，进行静默运行，我们称之为Dokcer服务。

docker daemon管理容器的同时，向外暴露了一套RestAPi，我们可以通过这套接口进行docker daemon操作。（输入命令进行docker daemon管理）

docker daemon和docker CLI组成的正式一个标准C/S(client-Server)结构应用。



## 3.Dokcer运行环境搭建



安装前的准备。

基本概念：

- 社区版 ( CE, Community Edition )：容器基础管理
- 企业版 ( EE, Enterprise Edition )：增加了容器管理，镜像管理，插件，安全

Docker Engine迭代分为稳定版（Stable release）和预览版（Edge Release）

Docker Engine稳定版每三个月更新一次。

### Dokcer环境依赖版本要求



| 操作系统 | 支持的系统版本                                               |
| -------- | ------------------------------------------------------------ |
| CentOS   | CentOS 7                                                     |
| Debian   | Debian Wheezy 7.7 (LTS) Debian Jessie 8 (LTS) Debian Stretch 9 Debian Buster 10 |
| Fedora   | Fedora 26 Fedora 27                                          |
| Ubuntu   | Ubuntu Trusty 14.04 (LTS) Ubuntu Xenial 16.04 (LTS) Ubuntu Artful 17.10 |

### linux系统中安装Docker

#### 必须是： * Docker is running才能表明docker

注意如果使用windows下的unbutu使用20.4版本。docker正常，unbutu22有docker的running问题。慎用，解决了一天，各种官方方法解决不了unbutu22的报错，个人放弃了最新版本。





Docker本身基于linux核心能力。目前主流的linux系统拥有软件包管理功能，那么细节我们不去关心。

### Ubuntu

```
$ sudo apt-get install apt-transport-https ca-certificates curl software-properties-common
$
$ curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -
$ sudo add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable"
$ sudo apt-get update  //替换成 sudo  apt  update
$ sudo apt-get install docker-ce //sudo apt install docker-ce
$两种启动docker命令
第一种
$ sudo systemctl enable docker//注意这个命令了，docker version
$ sudo systemctl start docker
或是使用下面
启动服务docker
sudo service docker restart
 sudo service docker status   
 
 注意 sudo service docker status   后必须：Docker is running
```

但是docker version可以正确打印。但是启动systemctl enable docker不能够使用。

如果不能使用，使用

```
sudo service docker start

注意： sudo chmod -R 777 /var/run/docker.sock

启动服务docker
sudo service docker restart
sudo service docker status   
必须是： * Docker is running才能表明docker
```

#### 解决docker is not runing

### docker正确安装和可用的标记



~~~
方式1：
docker: Cannot connect to the Docker daemon at unix:///var/run/docker.sock. Is the docker daemon running?

开启docker Desktop下进入setting,选择TLS
~~~

打开windows桌面端的TLS端口
方法2：



### 将子系统作为docker client端连接远程docker damaen服务

~~~
我们知道docker是cs架构的，即分为client端和server端，本地都是通过socket协议通讯的，如果本地client要连接远程的docker服务，则需要在client上导出以下环境变量
export DOCKER_HOST=tcp://<your docker server ip>:2375
2375是默认的连接端口，当然你可以在服务器端指定其他端口。

（前提：远程docker server开启了tcp连接，即在 /lib/systemd/system/docker.service 中的ExecStart=/usr/bin/dockerd 一句后面追加tcp访问协议，如下：

   ExecStart=/usr/bin/dockerd -H unix:///var/run/docker.sock -H tcp://0.0.0.0:2375
~~~





#### 修改镜像docker源头，加快镜像拉取

vi /etc/docker/daemon.json

~~~
{
    "registry-mirrors": [
        "https://registry.docker-cn.com"
    ]
}
~~~



要验证我们配置的镜像源是否生效，我们可以通过 `docker info` 来查阅当前注册的镜像源列表。

~~~
sudo docker info
测试拉取
jdk安装
docker pull jenkins/jenkins
Using default tag: latest出现报错
增加sudo
~~~



#### 注意如果拉去jenkins注意，安装jdk，jre

~~~
2.1 wsl上安装Jenkins及简单配置
在Windows下比较推荐使用wsl的方式安装Jenkins，这样切换到Linux时也会比较熟悉，如果资源等可以的话，更推荐使用docker方式。这里以wsl+Ubuntu简单说明下wsl安装Jenkins，后续的go程序编译也是在wsl上的。

#安装jdk、jre
sudo apt install default-jdk default-jre

#docker安装安装Jenkins
sudo apt update
使用下面的命令进行安装
docker pull jenkins/jenkins

docker启动jenkins/jenkins

- 新建一个菜单：home下面，jenkins_home
mkdir -p /home/jenkins_home
- 权限菜单放开

chown -R 1000:1000 /home/jenkins_home

- 根据新建的菜单内容，进行的相关的启动命令和说明

docker run -p 8080:8080 -p 50000:50000 -v /home/jenkins_home   jenkins/jenkins 

此时的jenkins的密码
429815fca1c24890841a4f2f62021dc9

- 默认访问localhost:8080
这里稍后进行配置修改

~~~











## windows中使用Docker原理

其实 Docker Desktop 的实现逻辑很简单：既然 Windows 和 macOS 中没有 Docker 能够利用的 Linux 环境，那么我们生造一个 Linux 环境就行啦！Docker for Windows 和 Docker for Mac 正是这么实现的

实现这个功能得益于 docker daemon 对外提供的操作过程并不是复杂且领域性强的 IPC 等方式，而是通用的 RESTful Api 的形式。也就是说，Docker Desktop 只要实现 Windows 和 macOS 中的客户端，就能够直接利用 Hypervisor 的网络支持与虚拟 Linux 系统中的 docker daemon 进行通讯，并对它进行控制。



## 6.镜像与容器

### Docker镜像

镜像包含应用程序和相关依赖的一个基础文件系统。镜像是对于容器运行环境的持久化存储结果。

容器启动的过程中，通过只读的方式用于创建容器的运行方式。





### 查看镜像

查看docker daemon中存放和管理了那些镜像，可以看docker images命令。



### 镜像命令

docker images命令打印的内容中，两个有关镜像的数据：REPOSITORY和TAG，这两者就是docker对于镜像的命名规范。

- **username**： 主要用于识别上传镜像的不同用户，与 GitHub 中的用户空间类似。
- **repository**：主要用于识别进行的内容，形成对镜像的表意描述。
- **tag**：主要用户表示镜像的版本，方便区分进行内容的不同细节:`redis:3.2` 和 `redis:4.0`。因为前面说过导出镜像重新修改后，会重新生成一个。

### 容器的生命周期

我们只需要关系几个核心的容器状态。

**Created**、**Running**、**Paused**、**Stopped**、**Deleted**。

在这几种状态中，Running 是最为关键的状态，在这种状态中的容器，就是真正正在运行的容器了。



### 主进程

当容器中的主进程主动关闭时 ( 正常结束或出错停止 )，也会让容器随之停止

主进程作为容器的主进程。

虽然在 Docker 中我们也能够实现在同一个容器中运行多个不同类型的程序，但这么做的话，Docker 就无法跟踪不同应用的生命周期，有可能造成应用的非正常关闭，进而影响系统、数据的稳定性。



### 写时复制机制

采用写时复制机制来设计的 Docker，既保证了镜像在生成为容器时，以及容器在运行过程中，不会对自身造成修改。又借助剔除常见虚拟化在初始化时需要从镜像中拷贝整个文件系统的过程，大幅提高了容器的创建和启动速度。可以说，Docker 容器能够实现秒级启动速度，写时复制机制在其中发挥了举足轻重的作用。









## 7.从镜像仓库获得镜像

### 镜像仓库

如果说我们把镜像的结构用 Git 项目的结构做类比，那么镜像仓库就可以看似 GitLab、GitHub 等的托管平台，只不过 Docker 的镜像仓库托管的不是代码项目，而是镜像。



存储镜像并不是镜像仓库最值得炫耀的功能，其最大的作用是实现了 Docker 镜像的分发。



### 获取镜像

docker pull或是sudo docker pull

注意docker如果发现本地已经存在相同的镜像，略过拉取，直接使用本地。

`docker images` 命令看到它们

### Dokcer Hub镜像仓库

Docker Hub是Docker是官方中央镜像仓库，除了基础镜像功能，还支持权限管理，构建钩子和自动构建机制。

Docker Hub 的地址是：[hub.docker.com/](https://link.juejin.cn/?target=https%3A%2F%2Fhub.docker.com%2F)

类似于github可以上传和共享镜像。



### Docker Hub搜索镜像

在 Docker Hub 的搜索结果中，有几项关键的信息有助于我们选择合适的镜像：

- **OFFICIAL** 代表镜像为 Docker 官方提供和维护，相对来说稳定性和安全性较高
- **STARS** 代表镜像的关注人数，这类似 GitHub 的 Stars，可以理解为热度
- **PULLS** 代表镜像被拉取的次数，基本上能够表示镜像被使用的频度

使用命令，搜索本地查看某一个镜像

sudo docker search ubuntu

### 管理镜像

docker images可以看到镜像基本信息。但是如果看到更加完整信息，

命令：sudo docker inspect  redis1.1页支持通过容器ID查看

### Docker的参数识别

镜像ID是64个字符，但是docker images后，只有12个字符。

其实docker本身做了匹配，根据当前的镜像tag中的内容或是id进行查找。

### 删除镜像

 sudo docker rmi ubuntu:latest

使用镜像名称或是镜像id



## 8.运行和管理容器

### 容器的创建和启动。

#### 创建容器

~~~
$ sudo docker create nginx:1.12
34f277e22be252b51d204acbb32ce21181df86520de0c337a835de6932ca06c3

使用容器需要给容器起名字
 sudo docker create --name nginx nginx:1.12
 
~~~

#### 启动容器

sudo docker start nginx

根据起的名字进行运行。



#### 创建和启动进行合并的docker命令

sudo docker run --name nginx -d nginx:1.12

docker  run等于创建容器和启动容器。

#### 管理容器

docker  ps

罗列当前的容器。

如果看容器状态：docker ps -a 



#### 停止和删除容器

sudo  docker stop  nginx

sudo  docker rm nginx ;//默认情况不可以删除，-f或是--force



#### 进入容器内部

高级阶段学习

只需要了解命令

 sudo docker exec nginx more /etc/hostname



## 9.为容器配置网络

### 容器网络

Dokcer的网络，存在三个核心的概念，

- 沙盒sandbox:提供容器虚拟网络栈，提供ip路由表，防火墙 等
- 网络network：docker内部虚拟网络，实现容器内部通讯
- 端点endponit：行程封闭环境的出入口管理，进行数据传输的管理

### 容器Docker的网络实现

容器网络模型为容器引擎提供了一套标准的网络对接范式，而在 Docker 中，实现这套范式的是 Docker 所封装的 libnetwork 模块

目前 Docker 官方为我们提供了五种 Docker 网络驱动，分别是：**Bridge Driver**、**Host Driver**、**Overlay Driver**、**MacLan Driver**、**None Driver**。

其中，Bridge 网络是 Docker 容器的默认网络驱动，简而言之其就是通过网桥来实现网络通讯 ( 网桥网络的实现可以基于硬件，也可以基于软件 )。而 Overlay 网络是借助 Docker 集群模块 Docker Swarm 来搭建的跨 Docker Daemon 网络，我们可以通过它搭建跨物理主机的虚拟网络，进而让不同物理机中运行的容器感知不到多个物理机的存在。



### ！！！容器互联（重点：打通nigixH和web应用通信）

**docker已经不推荐用link了，用自定义网络来实现容器互联**

为什么我配置了docker/nginx 连接docker/flask-app 也进行端口映射 外面还是访问不到里面的docker 服务？

运行容器时添加 --net host 参数，docker run --net host

##### 还有一个根本好办法：点到后面看了下，可以用Docker Compose

如果要设置5个容器之间网络互通，有什么好的方式呢？



要让一个容器连接到另外一个容器，我们可以在容器通过 `docker create` 或 `docker run` 创建时通过 `--link` 选项进行配置。



~~~
$ sudo docker run -d --name mysql -e MYSQL_RANDOM_ROOT_PASSWORD=yes mysql
$ sudo docker run -d --name webapp --link mysql webapp:latest


~~~

如何在 Web 应用中连接到 MySQL 数据库呢？Docker 为容器间连接提供了一种非常友好的方式，我们只需要将容器的网络命名填入到连接地址中，就可以访问需要连接的容器了。



### ！！！暴露端口

docker ps查看port部分内容

~~~
$ sudo docker ps
其中PORTS
 3306/tcp, 33060/tcp
表示可以通过这两个端口连接。

~~~



需要注意的是，虽然容器间的网络打通了，但并不意味着我们可以任意访问被连接容器中的任何服务。Docker 为容器网络增加了一套安全机制，只有容器自身允许的端口，才能被其他容器所访问。

这个容器自我标记端口可被访问的过程，我们通常称为暴露端口。我们在 `docker ps` 的结果中可以看到容器暴露给其他容器访问的端口。

端口的暴露可以通过 Docker 镜像进行定义，也可以在容器创建时进行定义。在容器创建时进行定义的方法是借助 `--expose` 这个选项。

~~~
$ sudo docker run -d --name mysql -e MYSQL_RANDOM_ROOT_PASSWORD=yes --expose 13306 --expose 23306 mysql:5.7


~~~



#### 通过别名连接

```
sudo docker run -d --name webapp --link mysql:database webapp:latest
```

在这里，我们使用 `--link <name>:<alias>` 的形式



#### 管理网络

我们刚才之所以能够把 webapp 容器连接到 mysql 容器上，其原因是两者都处于 bridge 这个网络上。

#### ！！！创建网络和指定网络加入容器

在 Docker 里，我们也能够创建网络，形成自己定义虚拟子网的目的。

docker CLI 里与网络相关的命令都以 `docker network` 开头，其中创建网络的命令是 `docker network create`。

- 查看已经存在的网络：docker  network ls

通过 `docker network ls` 或是 `docker network list` 可以查看 Docker 中已经存在的网络

我们创建新的容器时候，可以通过增加参数--network bridge加入

~~~
$ sudo docker run -d --name mysql -e MYSQL_RANDOM_ROOT_PASSWORD=yes --network bridge mysql:5.7

将mysql加入--network bridge网络中


~~~



#### ！！！端口映射

我们需要容器外可以通过网络访问容器中的应用。

~~~
为什么我配置了docker/nginx 连接docker/flask-app 也进行端口映射 外面还是访问不到里面的docker 服务？

运行容器时添加 --net host 参数，docker run --net host


~~~



比如：我们提高了web服务，那么我们需要一种方式可以访问运行在容器中的web应用。

要映射端口，我们可以在创建容器时使用 `-p` 或者是 `--publish` 选项。

##### 还有一个根本好办法：点到后面看了下，可以用Docker Compose

如果要设置5个容器之间网络互通，有什么好的方式呢？



~~~
容器的 80 端口映射到宿主操作系统的 8080 端口，传入 -p 8080:80 即可。
使用端口映射选项的格式是 -p <ip>:<host-port>:<container-port>，其中 ip 是宿主操作系统的监听 ip，可以用来控制监听的网卡，默认为 0.0.0.0，也就是监听所有网卡

$ sudo docker run -d --name nginx -p 80:80 -p 443:443 nginx:1.12

~~~

如果我们使用 Docker for Windows 或 Docker for Mac，这个端口映射的操作程序会自动帮助我们完成，所以我们不需要做任何额外的事情，就能够直接使用 Windows 或 macOS 的端口访问容器端口了。







## 10.管理和存储数据

### 数据管理方式的实现。

容器运行文件处于沙盒环境，和外界隔离了，如何与外界进行交换。

- 沙盒文件系统是跟随容器生命周期所创建和移除的，数据无法直接被持久化存储。
- 由于容器隔离，我们很难从容器外部获得或操作容器内部文件中的数据。

Docker 很好的解决了这些问题，这主要还是归功于 Docker 容器文件系统是基于 UnionFS。由于 UnionFS 支持挂载不同类型的文件系统到统一的目录结构中，所以我们只需要将宿主操作系统中，文件系统里的文件或目录挂载到容器中，便能够让容器内外共享这个文件。



### 挂载方式：

Docker三种挂载方式：**Bind Mount**、**Volume** 和 **Tmpfs Mount**。

- **Bind Mount** 能够直接将宿主操作系统中的目录和文件挂载到容器内的文件系统中，通过指定容器外的路径和容器内的路径，就可以形成挂载映射关系，在容器内外对文件的读写，都是相互可见的。
- **Volume** 数据卷的本质其实依然是宿主操作系统上的一个目录，只不过这个目录存放在 Docker 内部，接受 Docker 的管理。
- **Tmpfs Mount** 它主要利用内存来存储数据

### 挂载文件到容器

--volume或是-v两个参数，可以挂载。

```
$ sudo docker run -d --name nginx -v /webapp/html:/usr/share/nginx/html nginx:1.12
```





#### 注意挂载数据卷

~~~
由于 -v 选项既承载了 Bind Mount 的定义，又参与了 Volume 的定义，所以其传参方式需要特别留意。前面提到了，-v 在定义绑定挂载时必须使用绝对路径，其目的主要是为了避免与数据卷挂载中命名这种形式的冲突。

$ sudo docker run -d --name webapp -v appdata:/webapp/storage webapp:latest

~~~

我们使用 `-v` 选项挂载数据卷时，如果数据卷不存在，Docker 会为我们自动创建和分配宿主操作系统的目录，而如果同名数据卷已经存在，则会直接引用





`docker volume create` 我们可以不依赖于容器独立创建数据卷。



列出当前已创建的数据卷。

$ sudo docker volume create appdata

直接通过 `docker volume rm` 来删除指定的数据卷









## 11.保存和共享镜像

 sudo docker commit -m "Upgrade" webapp webapp：2.0



### 提交容器更新

镜像的结构很像代码仓库里的修改记录，而记录容器修改的过程又像是在提交代码，

$ sudo docker commit webapp 



### 为镜像命名

注意每一个镜像名称：当前的repository仓库和tag合集

~~~
docker tag  jenkins/jenkins:latest jenkins
将一个jenkins/jenkins的image和tag为latest的镜像命名为jenkins，这样开启方便。


~~~



导入和迁移镜像

暂时不太实用命令。





## 12.Dockerfile创建镜像？？

通过docker特有的镜像定义文件，Dockerfile可以体验秒级迁移的乐趣。



### Dockerfile

Dockerfile 中，包含了构建镜像过程中需要执行的命令和其他操作.

Dockerfile 的内容很简单，主要以两种形式呈现，一种是注释行，另一种是指令行。

~~~
# Comment
INSTRUCTION arguments
~~~



### 环境搭建与镜像构建

 Dockerfile 就很像这样一个环境搭建手册，因为其中包含的就是一个构建容器的过程。

- Dockerfile 的体积远小于镜像包，更容易进行快速迁移和部署。
- 环境构建流程记录了 Dockerfile 中，能够直观的看到镜像构建的顺序和逻辑。
- 使用 Dockerfile 来构建镜像能够更轻松的实现自动部署等自动化流程。
- 在修改环境搭建细节时，修改 Dockerfile 文件要比从新提交镜像来的轻松、简单



在实际使用中，我们也很少会选择容器提交这种方法来构建镜像，而是几乎都采用 Dockerfile 来制作镜像。

Docker实用的开发者的必备是Dockerfile文件能力。



### 常见 Dockerfile 指令



#### FROM

通常来说，我们不会从零开始搭建一个镜像，而是会选择一个已经存在的镜像作为我们新镜像的基础，这种方式能够大幅减少我们的时间

#### RUN

RUN 指令就是用于向控制台发送命令的指令

#### ENTRYPOINT 和 CMD

基于镜像启动的容器，在容器启动时会根据镜像所定义的一条命令来启动容器中进程号为 1 的进程。

#### COPY 和 ADD

在制作新的镜像的时候，我们可能需要将一些软件配置、程序代码、执行脚本等直接导入到镜像内的文件系统里，使用 COPY 或 ADD 指令能够帮助我们直接从宿主机的文件系统里拷贝内容到镜像里的文件系统中。

[【docker】CMD ENTRYPOINT 区别 终极解读！_强大的石头的博客-CSDN博客](https://blog.csdn.net/u013258415/article/details/80022224)



一个构建案例成功

[docker之Dockerfile实践 - wadeson - 博客园 (cnblogs.com)](https://www.cnblogs.com/jsonhc/p/7767669.html)







### 构建镜像

[使用 Dockerfile 定制镜像 - Docker — 从入门到实践 (gitbook.io)](https://yeasy.gitbook.io/docker_practice/image/build)

编写好Dockerfile后，构建

sudo docker build ./webapp

docker build ./webapp 将路径文件夹 ./webapp 作为构建镜像的环境目录

指定Dockerfile目录

~~~
`-f` 选项单独给出 Dockerfile 文件的路径
$ sudo docker build -t webapp:latest -f ./webapp/a.Dockerfile ./webapp

~~~









## 13.Dockerfile的使用技巧

### 构建中使用变量

我们希望通过参数变量控制 Dockerfile 中某个程序的版本，在构建时安装我们指定版本的软件，我们可以通过 ARG 定义的参数作为占位符，替换版本定义的部分。

~~~
FROM debian:stretch-slim

## ......

ARG TOMCAT_MAJOR
ARG TOMCAT_VERSION

如果我们需要通过这个 Dockerfile 文件构建 Tomcat 镜像，我们可以在构建时通过 docker build 的 --build-arg 选项来设置参数变量

$ sudo docker build --build-arg TOMCAT_MAJOR=8 --build-arg TOMCAT_VERSION=8.0.53 -t tomcat:8.0 ./tomcat

~~~

### 环境变量

环境变量不是通过docker构建指令传入，而是通过Dockerfile编写的。

我们需要修改环境变量，在Dockerfile中编写

~~~
FROM debian:stretch-slim

## ......

ENV TOMCAT_MAJOR 8
ENV TOMCAT_VERSION 8.0.53

~~~





如何查找镜像的dockerfile文件。

[开发者必备的 Docker 实践指南 - 有明 - 掘金课程 (juejin.cn)](https://juejin.cn/book/6844733746462064654/section/6844733746554355720)

#### 临摹案例

进入中央仓库docker hub或是













## 14.常见的docker hub的镜像

### 选择镜像和程序版本



在 Docker 里，Alpine 系统的镜像到底有多小，我们不妨来与其他系统镜像做一个比较。

| 镜像标签          | 占用空间 |
| ----------------- | -------- |
| python:3.6-alpine | 74.2 MB  |
| python:3.6-jessie | 697 MB   |

由于基于 Alpine 系统建立的软件镜像远远小于基于其他系统的软件镜像，它在网络传输上的优势尤为明显。如果我们选择这类的镜像，不但可以节约网络传输的时间，也能减少镜像对硬盘空间的占用。

当然，有优点也会有缺点，Alpine 镜像的缺点就在于它实在过于精简，以至于麻雀虽小，也无法做到五脏俱全了







## 15.使用Docker Compose管理容器

### 解决容器管理的问题

如果简单的内容

~~~
就拿最简单的例子来说吧，如果我们要为我们的应用容器准备一个 MySQL 容器和一个 Redis 容器，那么在每次启动时，我们先要将 MySQL 容器和 Redis 容器启动起来，再将应用容器运行起来。这其中还不要忘了在创建应用容器时将容器网络连接到 MySQL 容器和 Redis 容器上，以便应用连接上它们并进行数据交换。


~~~



### Docker Compose

针对这种情况，我们就不得不引出在我们开发中最常使用的多容器定义和运行软件，也就是 Docker Compose 了。

如果说 Dockerfile 是将容器内运行环境的搭建固化下来，

那么 Docker Compose 我们就可以理解为将多个容器运行的方式和配置固化下来。



### 安装 Docker Compose

Docker Compose 是一个由 Python 编写的软件，在拥有 Python 运行环境的机器上，我们可以直接运行它，不需要其它的操作。

如果下载过慢，可以到网上下载 ，然后上传到/usr/local/bin/目录

但是文件下载哪一种格式，需要注意以下，不然罗马



还有一种，告诉下载compose

~~~
-高速安装命令
curl -L https://get.daocloud.io/docker/compose/releases/download/v2.4.1/docker-compose-`uname -s`-`uname -m` > /usr/local/bin/docker-compose

-将可执行权限应用于二进制文件：

sudo chmod +x /usr/local/bin/docker-compose

-创建软链接
sudo ln -s /usr/local/bin/docker-compose /usr/bin/docker-compose
-测试是否成功
docker-compose --version
cker-compose version 1.24.1, build 4667896b


~~~



修改读写文件权限

```text
 chmod +x /usr/local/bin/docker-compose
```



### 在 Windows 和 macOS 中的 Docker Compose

在我们更常用于开发的 Windows 和 macOS 中，使用 Docker Compose 会来得更加方便。不论你是使用 Docker for Win 还是 Docker for Mac，亦或是 Docker Toolbox 来搭建 Docker 运行环境，你都可以直接使用 `docker-compose` 这个命令。这三款软件都已经将 Docker Compose 内置在其中，供我们使用。





### Docker Compose 的基本使用逻辑

如果将使用 Docker Compose 的步骤简化来说，可以分成三步。

1. 如果需要的话，编写容器所需镜像的 Dockerfile；( 也可以使用现有的镜像 )
2. 编写用于配置容器的 docker-compose.yml；
3. 使用 docker-compose 命令启动应用。

~~~
简单docker-compose配置文件
version: '3'

services:

  webapp:
    build: ./image/webapp
    ports:
      - "5000:5000"
    volumes:
      - ./code:/code
      - logvolume:/var/log
    links:
      - mysql
      - redis

  redis:
    image: redis:3.2
  
  mysql:
    image: mysql:5.7
    environment:
      - MYSQL_ROOT_PASSWORD=my-secret-pw

volumes:
  logvolume: {}
  
  
说明文件学习
首先是 version 这个配置，这代表我们定义的 docker-compose.yml 文件内容所采用的版本
 services 这块，这是整个 docker-compose.yml 的核心部分，其定义了容器的各项细节。
 
~~~









#### 启动和停止

对于开发来说，最常使用的 Docker Compose 命令就是 `docker-compose up` 和 `docker-compose down` 了。

`docker-compose up` 和 `docker-compose down` 了。

```
docker-compose up` 命令类似于 Docker Engine 中的 `docker run
```

后台运行命令

~~~
$ sudo docker-compose up -d


$ sudo docker-compose -f ./compose/docker-compose.yml -p myapp up -d

但是，这里需要有yml文件。

~~~



#### 容器命令

**docker-compose前提是有yml文件**

除了启动和停止命令外，Docker Compose 还为我们提供了很多直接操作服务的命令。

如果我们直接使用 `docker logs` 就需要先找到容器的名字，这显然有些麻烦了。我们可以直接使用 `docker-compose logs` 命令来完成这项工作。

~~~
sudo docker-compose logs nginx

~~~



简单独立命令：操作前提是有yml文件

~~~
$ sudo docker-compose create webapp
$ sudo docker-compose start webapp
$ sudo docker-compose stop webapp
~~~



### 注意开机启动WSL配置



docker run -p 8080:8080 -p 50000:50000 -v /home/jenkins_home   jenkins



## 16.！！！常用的 Docker Compose 配置项

dockerfile和dockercompose一样，都是配置docker的学习必须。

### 首先

1. 创建一个项目目录：

```
mkdir my_app
cd my_app
```

1. 打开你的文本编辑器，创建一个名为`docker-compose.yml`的文件，放在项目目录下：

```
vim docker-compose.yml
```

1. 粘贴下面的内容：



但是项目里面有真是的文件内容











## 17.编写 Docker Compose 项目

### 设置项目的目录结构。

我们要准备四个容器分别来运行它们。而为了更好地管理这四个容器所组成的环境，我们这里还会使用到 Docker Compose。



\\wsl.localhost\Ubuntu\root

这个下面个人创建不同的文件夹进行设置



- 第一类是 Docker 定义目录，也就是 compose 这个目录。在这个目录里，包含了 docker-compose.yml 这个用于定义 Docker Compose 项目的配置文件。此外，还包含了我们用于构建自定义镜像的内容。
- 第二类是程序文件目录，在这个项目里是 mysql、nginx、phpfpm、redis 这四个目录。这些目录分别对应着 Docker Compose 中定义的服务，在其中主要存放对应程序的配置，产生的数据或日志等内容。
- 第三类是代码目录，在这个项目中就是存放 Web 程序的 website 目录。我们将代码统一放在这个目录中，方便在容器中挂载。
- 第四类是工具命令目录，这里指 bin 这个目录。我们在这里存放一些自己编写的命令脚本，我们通过这些脚本可以更简洁地操作整个项目。

如下

~~~
├── bin ---存放工具命令
├── compose --存放定义dockercompose的项目配置文件
├── nginx ---定义一些nginx服务
│   ├── confi.d
│   │   └── www.conf
│   └── nginx.conf
└── website---存放web的项目代码
~~~



这里用个人之前的项目代码

https://gitee.com/nyhxiaoning/docker-common.git

这个文件里面没有自动启动compose的命令，这里增加bin文件sh文件

~~~
启动运行简单：./start-compose.sh
但是注意需要给一个权限：chmod u+x start-compose.sh

~~~





也有作者的相关练习代码链接记录：
https://github.com/nyhxiaoning/docker-book-for-developer-samples.git





注意引入的镜像尽量是 **image**: nginx:alpine乐死alpine这样精简。

直接复制一个项目例如：docker-nginx后，

然后，利用：sudo docker-compose up -d    后台启动这个。