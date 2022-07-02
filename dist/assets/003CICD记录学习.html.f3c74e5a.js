import{_ as t,r,o as c,c as u,a as e,b as n,w as d,d as l,e as i}from"./app.039bde91.js";const o={},v={class:"table-of-contents"},m=i("\u7B2C\u4E00\u90E8\u5206\uFF1Acentos\u7CFB\u7EDF"),h=i("centos\u73AF\u5883\u4E0B\u5B66\u4E60docker\u5B89\u88C5\u548C\u90E8\u7F72jenkins\u7684\u76F8\u5173\u95EE\u9898"),b=i("centos\u7684\u5B89\u88C5\u542F\u52A8\u547D\u4EE4"),p=i("\u5B89\u88C5jenkins\u524D\uFF0C\u5173\u95ED\u9632\u706B\u5899"),k=i("docker pull jenkins/jenkins\u955C\u50CF\u592A\u6162\u89E3\u51B3\u65B9\u6848"),x=i("\u542F\u52A8jenkins/jenkins"),_=i("\u5B89\u88C5\u5B89\u88C5docker-compose"),f=i("\u5B89\u88C5\u597D\u4E4B\u540E\uFF0C\u7136\u540E\u542F\u52A8docker\u4E0B\u7684"),j=i("\u7B2C\u4E8C\u90E8\u5206\uFF1Aubuntu\u90E8\u5206"),g=i("ubuntu\u73AF\u5883\u5B66\u4E60docker\u548C\u90E8\u7F72"),y=i("\u9632\u706B\u5899\u76F8\u5173"),w=i("\u542F\u52A8jenkins\u62A5\u9519\uFF0C"),z=i("\u542F\u52A8docker"),q=i("\u5B89\u88C5\u5B89\u88C5docker-compose"),S=i("zx\u811A\u672C\u5DE5\u5177\u7684\u5B66\u4E60"),C=i("zx\u811A\u672C\u4F7F\u7528\u65B9\u6CD5"),L=i("linux\u7CFB\u7EDF\u4F7F\u7528"),A=i("\u5E38\u7528\u7684\u51FD\u6570"),N=i("zx\u652F\u6301ts\u6267\u884C\u5E93"),T=i("1.\u7B2C\u4E00\u6B65\u5C06package.json\u4E2D\u5F15\u5165\u6A21\u5757"),E=i("ts\u6A21\u5757\u5316"),O=i("ts\u4E2D\u5F15\u5165\u540E\uFF0C\u6CA1\u6709\u8FD9\u4E2A\u6A21\u5757"),I=l(`<h2 id="\u7B2C\u4E00\u90E8\u5206-centos\u7CFB\u7EDF" tabindex="-1"><a class="header-anchor" href="#\u7B2C\u4E00\u90E8\u5206-centos\u7CFB\u7EDF" aria-hidden="true">#</a> \u7B2C\u4E00\u90E8\u5206\uFF1Acentos\u7CFB\u7EDF</h2><p>\u8BB0\u5F55docker,\u548Cjenkins\u4E0B\u5B89\u88C5docker\u7684\u8FC7\u7A0B\u3002</p><h2 id="centos\u73AF\u5883\u4E0B\u5B66\u4E60docker\u5B89\u88C5\u548C\u90E8\u7F72jenkins\u7684\u76F8\u5173\u95EE\u9898" tabindex="-1"><a class="header-anchor" href="#centos\u73AF\u5883\u4E0B\u5B66\u4E60docker\u5B89\u88C5\u548C\u90E8\u7F72jenkins\u7684\u76F8\u5173\u95EE\u9898" aria-hidden="true">#</a> centos\u73AF\u5883\u4E0B\u5B66\u4E60docker\u5B89\u88C5\u548C\u90E8\u7F72jenkins\u7684\u76F8\u5173\u95EE\u9898</h2><h3 id="centos\u7684\u5B89\u88C5\u542F\u52A8\u547D\u4EE4" tabindex="-1"><a class="header-anchor" href="#centos\u7684\u5B89\u88C5\u542F\u52A8\u547D\u4EE4" aria-hidden="true">#</a> centos\u7684\u5B89\u88C5\u542F\u52A8\u547D\u4EE4</h3><p>\u5927\u591A\u6570Linux\u53D1\u884C\u7248\u672C\u4F7F\u7528<code>systemctl</code>\u542F\u52A8\u670D\u52A1\uFF0C\u5982\u679C\u4E0D\u662F\u90A3\u5C31\u5C1D\u8BD5\u4F7F\u7528\u4E0B<code>service</code>\u6765\u542F\u52A8</p><h4 id="\u6B64\u65F6\u6211\u7684\u7535\u8111\u4F7F\u7528systemctl" tabindex="-1"><a class="header-anchor" href="#\u6B64\u65F6\u6211\u7684\u7535\u8111\u4F7F\u7528systemctl" aria-hidden="true">#</a> \u6B64\u65F6\u6211\u7684\u7535\u8111\u4F7F\u7528systemctl ,</h4><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>systemctl restart docker
\u542F\u52A8docker\uFF1Asystemctl start docker

\u505C\u6B62docker\uFF1Asystemctl stop docker

\u91CD\u542Fdocker\uFF1Asystemctl restart docker

\u67E5\u770B\u4E0Bps -ef | grep &quot;docker&quot; docker\u542F\u52A8\u4E86
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u5B89\u88C5jenkins\u524D-\u5173\u95ED\u9632\u706B\u5899" tabindex="-1"><a class="header-anchor" href="#\u5B89\u88C5jenkins\u524D-\u5173\u95ED\u9632\u706B\u5899" aria-hidden="true">#</a> \u5B89\u88C5jenkins\u524D\uFF0C\u5173\u95ED\u9632\u706B\u5899</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u67E5\u770B\u9632\u706B\u5899\u72B6\u6001\uFF1A systemctl status firewalld.service

\u7EFF\u7684running\u8868\u793A\u9632\u706B\u5899\u5F00\u542F

\u6267\u884C\u5173\u95ED\u547D\u4EE4\uFF1A systemctl stop firewalld.service

\u518D\u6B21\u6267\u884C\u67E5\u770B\u9632\u706B\u5899\u547D\u4EE4\uFF1Asystemctl status firewalld.service

\u6267\u884C\u5F00\u673A\u7981\u7528\u9632\u706B\u5899\u81EA\u542F\u547D\u4EE4 \uFF1A systemctl disable firewalld.service

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="docker-pull-jenkins-jenkins\u955C\u50CF\u592A\u6162\u89E3\u51B3\u65B9\u6848" tabindex="-1"><a class="header-anchor" href="#docker-pull-jenkins-jenkins\u955C\u50CF\u592A\u6162\u89E3\u51B3\u65B9\u6848" aria-hidden="true">#</a> docker pull jenkins/jenkins\u955C\u50CF\u592A\u6162\u89E3\u51B3\u65B9\u6848</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>
\u52A0\u901FDocker\u955C\u50CF\u6E90

vi /etc/docker/daemon.json

\u5728\u914D\u7F6E\u6587\u4EF6\u4E2D\u52A0\u5165

{
  &quot;registry-mirrors&quot;: [&quot;https://xxx.mirror.aliyuncs.com&quot;]
}

[root@km docker]# systemctl daemon-reload 
[root@km docker]# systemctl restart docker

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>docker\u5B89\u88C5\u597D\u540E\uFF0C\u7528docker\u5B89\u88C5jenkins\u76F8\u5173\u7684\u955C\u50CF</p>`,12),D={href:"https://blog.csdn.net/qq_39387856/article/details/115496100",target:"_blank",rel:"noopener noreferrer"},J=i("CentOS7 \u73AF\u5883\u4E0B\u4F7F\u7528docker\u5B89\u88C5jenkins_EricXiao666\u7684\u535A\u5BA2-CSDN\u535A\u5BA2_centos7 docker\u5B89\u88C5jenkins"),M=l(`<div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>--- \u67E5\u770B\u6240\u6709\u7684\u62C9\u53D6\u7684\u955C\u50CF
docker images 
\uFF08\u6CE8\u610F\u6CA1\u6709docker images ls\u4E0D\u662F\u8FD9\u4E2A\uFF09
--- \u542F\u52A8jenkins\u955C\u50CF\u5BB9\u5668\uFF0C\u5229\u7528images\u7684\u540D\u79F0

\u6839\u76EE\u5F55\u521B\u5EFA\u4E00\u4E2Avar
mkdir -p /var/jenkins_home

\u6388\u4E88\u6743\u9650
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u542F\u52A8jenkins-jenkins" tabindex="-1"><a class="header-anchor" href="#\u542F\u52A8jenkins-jenkins" aria-hidden="true">#</a> \u542F\u52A8jenkins/jenkins</h3><p>\u6700\u540E\u518D\u6B21\u6267\u884Cdocker pull jenkins/jenkins</p><ul><li>\u521B\u5EFA\u672A\u6765\u653E\u7F6Ejenkins\u914D\u7F6E\u7684\u6587\u4EF6\uFF0C</li></ul><p>\u65B0\u5EFA\u4E00\u4E2A\u83DC\u5355\uFF1Ahome\u4E0B\u9762\uFF0Cjenkins_home</p><ul><li>\u6743\u9650\u83DC\u5355\u653E\u5F00</li></ul><p>chown -R 1000:1000 /home/jenkins_home</p><ul><li>\u6839\u636E\u65B0\u5EFA\u7684\u83DC\u5355\u5185\u5BB9\uFF0C\u8FDB\u884C\u7684\u76F8\u5173\u7684\u542F\u52A8\u547D\u4EE4\u548C\u8BF4\u660E</li></ul><p>docker run -p 8080:8080 -p 50000:50000 -v /home/jenkins_home jenkins/jenkins</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>8080 \u7AEF\u53E3\u662F\u8BBF\u95EE jenkins \u7F51\u9875\u7684\u7AEF\u53E3\uFF0C\u5982\u679C\u4F60\u60F3\u5728 80 \u7AEF\u53E3\u8BBF\u95EE\uFF0C\u5C31\u6539\u6210 -p 80:8080
50000 \u7AEF\u53E3\u4E0E slave \u6709\u5173\uFF0C\u53C2\u8003 jnlp-slave \u8FD9\u4E2A\u955C\u50CF\uFF0C\u91CC\u9762\u4F7F\u7528\u7684 port\u3002
-v \u53C2\u6570\u6302\u8F7D\u4E86\u5BBF\u4E3B\u673A\u4E00\u4E2A\u6307\u5B9A\u76EE\u5F55\u5230 /home/jenkins_home \uFF0C\u76F8\u5F53\u4E8E\u8BBE\u7F6E\u4E86\u81EA\u5B9A\u4E49\u7684 JENKINS_HOME
\u6700\u540E\u4E00\u4E2A\u53C2\u6570\u662F\u955C\u50CF\u540D\u79F0\uFF0C\u8FD9\u91CC\u662Fjenkins/jenkins
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5BF9\u4E86docker\u4E0B\u542F\u52A8jenkins\u5728su\u540E\uFF0C\u7BA1\u7406\u5458\u6A21\u5F0F\u542F\u52A8</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>
docker run -p 8080:8080 -p 50000:50000 -v /home/jenkins_home   jenkins/jenkins 

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u5B89\u88C5\u5B89\u88C5docker-compose" tabindex="-1"><a class="header-anchor" href="#\u5B89\u88C5\u5B89\u88C5docker-compose" aria-hidden="true">#</a> \u5B89\u88C5\u5B89\u88C5docker-compose</h3><h4 id="centos\u5B89\u88C5\u540E-\u65E5\u671F\u65F6\u95F4\u663E\u793A\u9519\u8BEF" tabindex="-1"><a class="header-anchor" href="#centos\u5B89\u88C5\u540E-\u65E5\u671F\u65F6\u95F4\u663E\u793A\u9519\u8BEF" aria-hidden="true">#</a> centos\u5B89\u88C5\u540E\uFF0C\u65E5\u671F\u65F6\u95F4\u663E\u793A\u9519\u8BEF</h4><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>1.\u5B89\u88C5\u65F6\u95F4\u540C\u6B65\u63D2\u4EF6

yum install ntpdate

2.\u5F00\u542F\u65F6\u95F4\u540C\u6B65

service ntpdate restart

3.\u8BBE\u7F6E\u65F6\u533A\uFF1A

\u5220\u9664\u672C\u5730\u65F6\u95F4\uFF08\u7F8E\u56FD\u65F6\u95F4\uFF09

rm -rf /etc/localtime

\u8BBE\u7F6E\u65F6\u533A\u4E3A\u4E0A\u6D77

ln -s /usr/share/zoneinfo/Asia/Shanghai /etc/localtime

4.\u9A8C\u8BC1\uFF1A
[root@localhost cai]# date
Tue Feb 26 15:35:54 CST 2019


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u5B89\u88C5\u597D\u4E4B\u540E-\u7136\u540E\u542F\u52A8docker\u4E0B\u7684" tabindex="-1"><a class="header-anchor" href="#\u5B89\u88C5\u597D\u4E4B\u540E-\u7136\u540E\u542F\u52A8docker\u4E0B\u7684" aria-hidden="true">#</a> \u5B89\u88C5\u597D\u4E4B\u540E\uFF0C\u7136\u540E\u542F\u52A8docker\u4E0B\u7684</h3><p>localhost:8080</p><p>jenkins\u7684\u5B89\u88C5\u5BC6\u94A5</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>dda2569e0f164b7a975f7d1525119767
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u5B89\u88C5\u754C\u9762\u51FA\u73B0\u4E00\u4E9B\u63D2\u4EF6\u7684\u62A5\u9519\uFF0C\u53EF\u4EE5\u66FF\u6362\u6216\u662F\u7A0D\u540E\u518D\u6B21\u5B89\u88C5</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>
[image-20220618233107693]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u7B2C\u4E8C\u90E8\u5206-ubuntu\u90E8\u5206" tabindex="-1"><a class="header-anchor" href="#\u7B2C\u4E8C\u90E8\u5206-ubuntu\u90E8\u5206" aria-hidden="true">#</a> \u7B2C\u4E8C\u90E8\u5206\uFF1Aubuntu\u90E8\u5206</h2><h2 id="ubuntu\u73AF\u5883\u5B66\u4E60docker\u548C\u90E8\u7F72" tabindex="-1"><a class="header-anchor" href="#ubuntu\u73AF\u5883\u5B66\u4E60docker\u548C\u90E8\u7F72" aria-hidden="true">#</a> ubuntu\u73AF\u5883\u5B66\u4E60docker\u548C\u90E8\u7F72</h2><p>\u7B2C\u4E00\u6B65\u5B89\u88C5docker(ubuntu)</p><p>\u7B2C\u4E8C\u90E8\u5B89\u88C5jenkins</p>`,25),V={href:"https://blog.csdn.net/weixin_34375054/article/details/92056200",target:"_blank",rel:"noopener noreferrer"},W=i("ubuntu 16.04\u5B89\u88C5Jenkins\uFF08\u4F7F\u7528apt install\u5B89\u88C5\uFF09_weixin_34375054\u7684\u535A\u5BA2-CSDN\u535A\u5BA2"),B=l(`<p>\u6CE8\u610Fjenkins\u8FD0\u884C\u9700\u8981\u652F\u6301java\u73AF\u5883\uFF0C\u6240\u4EE5\u5B89\u88C5openjdk\u5305</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>sudo apt install openjdk-11-jdk
//\u6216\u662F\u901A\u8FC7\u547D\u4EE4

sudo apt-get install openjdk-11-jdk

\u6848\u4F8B\u4E2D\u4E0D\u9700\u8981\u8F93\u5165systemctl  status jenkins\u8FD9\u4E2A\u547D\u4EE4

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u7B2C\u4E09\u6B65\uFF1A\u8BBE\u7F6E\u8BBF\u95EE\u5141\u8BB8\u7684\u73AF\u5883</p><p>sudo ufw allow 8080</p><p>\u5982\u679C\u9700\u8981\u4EFB\u610F\u5730\u65B9\u90FD\u53EF\u4EE5i\u8BBF\u95EE\u5230jenkins\uFF0C\u90A3\u4E48\u4F7F\u7528\u8FD9\u4E2A\u547D\u4EE4</p><p>\u7B2C\u56DB\u6B65\uFF1A\u8BBE\u7F6Ejenkins\u73AF\u5883</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u8FD9\u91CC\u53EA\u662F\u4E2A\u4EBA\u901A\u8FC7wsl\u7684\u8FC7\u7A0B\u3002
\u6267\u884Cjenkins\u540E\uFF0C\u51FA\u73B0
Please use the following password to proceed to installation:

b2682866419442c78d854ac9e89c217d

This may also be found at: /root/.jenkins/secrets/initialAdminPassword
\u732A\u732A\u3002

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u542F\u52A8\u91CD\u542F</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">service</span> jenkins restart

<span class="token function">sudo</span> ufw allow <span class="token number">8088</span>



</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u9632\u706B\u5899\u76F8\u5173" tabindex="-1"><a class="header-anchor" href="#\u9632\u706B\u5899\u76F8\u5173" aria-hidden="true">#</a> \u9632\u706B\u5899\u76F8\u5173</h2><p>\u6700\u7B80\u5355\u7684\u4E00\u4E2A\u64CD\u4F5C\uFF1Asudo ufw status\u53EF\u68C0\u67E5\u9632\u706B\u5899\u7684\u72B6\u6001\uFF0C\u6211\u7684\u8FD4\u56DE\u7684\u662F\uFF1A\u4E0D\u6D3B\u52A8</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>

root@daning:/home/daning# sudo ufw status
Status: active

To                         Action      From
--                         ------      ----
8080                       ALLOW       Anywhere
8088                       ALLOW       Anywhere
8080 (v6)                  ALLOW       Anywhere (v6)
8088 (v6)                  ALLOW       Anywhere (v6)
\u5C55\u793A\u4E0A\u9762\u7684\u60C5\u51B5\uFF0C\u8868\u793A\u5F00\u542F\u4E86\u7AEF\u53E3\u95EE\u9898\u4EFB\u610F\u4F4D\u7F6E
\u5982\u679C\u6CA1\u6709\uFF0C\u8868\u793A\u6CA1\u6709\u5B89\u88C5ufw
ubuntu \u7CFB\u7EDF\u9ED8\u8BA4\u5DF2\u5B89\u88C5ufw.

1.\u5B89\u88C5

sudo apt-get install ufw

2.\u542F\u7528

sudo ufw enable

sudo ufw default deny




</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u786E\u5B9A\u9632\u706B\u5899\u7684\u6CA1\u6709\u95EE\u9898\u4E4B\u540E\uFF0C\u5F00\u542F\u542F\u52A8</p><p>service jenkins start</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>service jenkins start
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="\u542F\u52A8jenkins\u62A5\u9519" tabindex="-1"><a class="header-anchor" href="#\u542F\u52A8jenkins\u62A5\u9519" aria-hidden="true">#</a> \u542F\u52A8jenkins\u62A5\u9519\uFF0C</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Setting up max open files limit to 8192
\u6216\u662F
bash: ulimit: open files: cannot modify limit: Operation not permitted
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u90A3\u4E48\u9700\u8981\u5F00\u542F\u589E\u52A0\u542F\u52A8\u6587\u4EF6\u6570\u91CF\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u4FEE\u6539
/etc/security/limits.conf

\u6587\u4EF6\u6570\u9650\u5236
\u52A0\u4E0A
* soft nofile 204800
* hard nofile 204800
* soft nproc 204800
* hard nproc 204800
*          # \u4EE3\u8868\u9488\u5BF9\u6240\u6709\u7528\u6237
noproc     #\u662F\u4EE3\u8868\u6700\u5927\u8FDB\u7A0B\u6570
nofile     #\u662F\u4EE3\u8868\u6700\u5927\u6587\u4EF6\u6253\u5F00\u6570
\u4F46\u662F\u518D\u6B21\u6253\u5F00
ulimit -n\u770B\u5230\u8FD8\u662F\u539F\u503C1024\uFF0C\u600E\u4E48\u529E\uFF1F

\u53EA\u80FD\u6BCF\u4E00\u6B21\u4E34\u65F6\u8FDB\u5165root\u6A21\u5F0F\u540E\uFF0C\u4F7F\u7528
ulimit -n 65535
\u4FEE\u6539\u5F53\u524D\u7684\u503C




</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u542F\u52A8docker" tabindex="-1"><a class="header-anchor" href="#\u542F\u52A8docker" aria-hidden="true">#</a> \u542F\u52A8docker</h2><p>sudo service docker start</p><h3 id="\u5B89\u88C5\u5B89\u88C5docker-compose-1" tabindex="-1"><a class="header-anchor" href="#\u5B89\u88C5\u5B89\u88C5docker-compose-1" aria-hidden="true">#</a> \u5B89\u88C5\u5B89\u88C5docker-compose</h3><h2 id="zx\u811A\u672C\u5DE5\u5177\u7684\u5B66\u4E60" tabindex="-1"><a class="header-anchor" href="#zx\u811A\u672C\u5DE5\u5177\u7684\u5B66\u4E60" aria-hidden="true">#</a> zx\u811A\u672C\u5DE5\u5177\u7684\u5B66\u4E60</h2><p>Google \u7684 zx.js \u63D0\u4F9B\u4E86\u5C01\u88C5\u5B50\u8FDB\u7A0B\u7684\u521B\u5EFA\u4EE5\u53CA\u4ECE\u8FD9\u4E9B\u8FDB\u7A0B\u5904\u7406 stdout \u548C stderr \u7684\u51FD\u6570\u3002</p><p>\u4E0B\u9762\u5C06\u4F7F\u7528\u7684\u4E3B\u8981\u51FD\u6570\u662F $ \u51FD\u6570\uFF0C\u4F7F\u7528 zx.js \u89C4\u5B9A\u811A\u672C\u5199\u5165\u6269\u5C55\u540D\u4E3A .mjs \u7684\u6587\u4EF6\u4E2D\uFF0C\u4EE5\u4FBF\u80FD\u591F\u5728\u9876\u5C42\u4F7F\u7528 await\u3002 \u5982\u679C\u4E60\u60EF\u4E8E .js \u6269\u5C55\u540D\uFF0C\u8BF7\u5C06\u811A\u672C\u5305\u88C5\u5728\u7C7B\u4F3C void async function () {...}() \u4E2D\u3002</p><h2 id="zx\u811A\u672C\u4F7F\u7528\u65B9\u6CD5" tabindex="-1"><a class="header-anchor" href="#zx\u811A\u672C\u4F7F\u7528\u65B9\u6CD5" aria-hidden="true">#</a> zx\u811A\u672C\u4F7F\u7528\u65B9\u6CD5</h2><p>\u7136\u540E\u6211\u4EEC\u9700\u8981\u5728\u6211\u4EEC\u7684\u811A\u672C\u6587\u4EF6\u5F00\u5934\uFF08\u9876\u90E8\uFF09\u6DFB\u52A0\u7279\u6B8A\u6CE8\u91CA\u6807\u8BB0\u4E3A zx \u811A\u672C</p><p>#\uFF01/usr/bin/env zx</p><p>\u6267\u884C\uFF1A zx ./index.mjs</p><h3 id="linux\u7CFB\u7EDF\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#linux\u7CFB\u7EDF\u4F7F\u7528" aria-hidden="true">#</a> linux\u7CFB\u7EDF\u4F7F\u7528</h3><p>####\u7ED9\u6587\u4EF6\u52A0\u6743\u9650 chmod +x index.mjs</p><h4 id="\u6267\u884C\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u6267\u884C\u6587\u4EF6" aria-hidden="true">#</a> \u6267\u884C\u6587\u4EF6</h4><p>./index.mjs</p><h3 id="\u5E38\u7528\u7684\u51FD\u6570" tabindex="-1"><a class="header-anchor" href="#\u5E38\u7528\u7684\u51FD\u6570" aria-hidden="true">#</a> \u5E38\u7528\u7684\u51FD\u6570</h3><p>zx \u63D0\u4F9B\u4E86\u5176\u4ED6\u51E0\u4E2A\u5B9E\u7528\u51FD\u6570\u6765\u7B80\u5316 shell \u811A\u672C\u7F16\u5199\uFF0C\u4F8B\u5982\uFF1A</p><p>cd(). \u8FD9\u5141\u8BB8\u6211\u4EEC\u66F4\u6539\u5F53\u524D\u7684\u5DE5\u4F5C\u76EE\u5F55 question(). \u8FD9\u662F Node.js readline\u6A21\u5757\u7684\u5305\u88C5\u5668\uFF0C\u5B83\u53EF\u4EE5\u76F4\u63A5\u63D0\u793A\u7528\u6237\u8F93\u5165 sleep(). setTimeout \u5305\u88C5\u5668</p><p>chalk\uFF1A\u5141\u8BB8\u4E3A\u811A\u672C\u7684\u8F93\u51FA\u6DFB\u52A0\u989C\u8272\u3002fetch\uFF1A\u53EF\u4EE5\u4F7F\u7528\u5B83\u6765\u53D1\u51FA HTTP \u8BF7\u6C42\u3002fs-extra\uFF1A\u516C\u5F00\u4E86 Node.js \u6838\u5FC3 fs \u6A21\u5757\uFF0C\u4EE5\u53CA\u8BB8\u591A\u5176\u4ED6\u65B9\u6CD5\uFF0C\u53EF\u4EE5\u66F4\u8F7B\u677E\u5730\u4F7F\u7528\u6587\u4EF6\u7CFB\u7EDF\u3002</p><p>minimist\uFF1A\u89E3\u6790\u547D\u4EE4\u884C\u53C2\u6570\u7684\u5E93\uFF0C\u5C06\u5B83\u4EEC\u66B4\u9732\u5728 argv \u5BF9\u8C61\u4E0B\u3002</p><h2 id="zx\u652F\u6301ts\u6267\u884C\u5E93" tabindex="-1"><a class="header-anchor" href="#zx\u652F\u6301ts\u6267\u884C\u5E93" aria-hidden="true">#</a> zx\u652F\u6301ts\u6267\u884C\u5E93</h2><h3 id="_1-\u7B2C\u4E00\u6B65\u5C06package-json\u4E2D\u5F15\u5165\u6A21\u5757" tabindex="-1"><a class="header-anchor" href="#_1-\u7B2C\u4E00\u6B65\u5C06package-json\u4E2D\u5F15\u5165\u6A21\u5757" aria-hidden="true">#</a> 1.\u7B2C\u4E00\u6B65\u5C06package.json\u4E2D\u5F15\u5165\u6A21\u5757</h3><p>\u7B2C\u4E00\u6B65\u5F15\u5165typescript\u548Cts-node\u4E24\u4E2A\u6A21\u5757 \u7B2C\u4E8C\u6B65\u589E\u52A0type:&quot;module&quot;\u6A21\u5757\u5316.(js\u652F\u6301\u6A21\u5757\u5316) \u7B2C\u4E09\u6B65\u589E\u52A0build\u811A\u672C\u548C\u8FD0\u884C\u547D\u4EE4\uFF1Abuild\u548Cstart</p><h2 id="ts\u6A21\u5757\u5316" tabindex="-1"><a class="header-anchor" href="#ts\u6A21\u5757\u5316" aria-hidden="true">#</a> ts\u6A21\u5757\u5316</h2><p>mjs \u662F EcmaScript \u6A21\u5757\u7684\u6269\u5C55</p><p>Node.js \u4F1A\u5C06.cjs\u6587\u4EF6\u89C6\u4E3A CommonJS \u6A21\u5757\uFF0C\u5C06.mjs\u6587\u4EF6\u89C6\u4E3A ECMAScript \u6A21\u5757\u3002 \u5B83\u4F1A\u5C06.js\u6587\u4EF6\u89C6\u4E3A\u9879\u76EE\u7684\u9ED8\u8BA4\u6A21\u5757\u7CFB\u7EDF\uFF08\u8FD9\u662F CommonJS\uFF0C\u9664\u975Epackage.json\u8BF4&quot;type&quot;: &quot;module&quot;, \uFF09\u3002</p><h2 id="ts\u4E2D\u5F15\u5165\u540E-\u6CA1\u6709\u8FD9\u4E2A\u6A21\u5757" tabindex="-1"><a class="header-anchor" href="#ts\u4E2D\u5F15\u5165\u540E-\u6CA1\u6709\u8FD9\u4E2A\u6A21\u5757" aria-hidden="true">#</a> ts\u4E2D\u5F15\u5165\u540E\uFF0C\u6CA1\u6709\u8FD9\u4E2A\u6A21\u5757</h2><p>\u6709\u65F6\u5019import \u4E00\u4E2A\u6A21\u5757 error TS1192: Module \u2018\u201Cfs\u201C\u2018 has no default export.</p><p>\u4F7F\u7528 import * as fs from &#39;fs&#39;</p><p>{ &quot;compilerOptions&quot;: { &quot;esModuleInterop&quot;: true } }</p>`,48);function P(R,F){const s=r("RouterLink"),a=r("ExternalLinkIcon");return c(),u("div",null,[e("nav",v,[e("ul",null,[e("li",null,[n(s,{to:"#\u7B2C\u4E00\u90E8\u5206-centos\u7CFB\u7EDF"},{default:d(()=>[m]),_:1})]),e("li",null,[n(s,{to:"#centos\u73AF\u5883\u4E0B\u5B66\u4E60docker\u5B89\u88C5\u548C\u90E8\u7F72jenkins\u7684\u76F8\u5173\u95EE\u9898"},{default:d(()=>[h]),_:1}),e("ul",null,[e("li",null,[n(s,{to:"#centos\u7684\u5B89\u88C5\u542F\u52A8\u547D\u4EE4"},{default:d(()=>[b]),_:1})]),e("li",null,[n(s,{to:"#\u5B89\u88C5jenkins\u524D-\u5173\u95ED\u9632\u706B\u5899"},{default:d(()=>[p]),_:1})]),e("li",null,[n(s,{to:"#docker-pull-jenkins-jenkins\u955C\u50CF\u592A\u6162\u89E3\u51B3\u65B9\u6848"},{default:d(()=>[k]),_:1})]),e("li",null,[n(s,{to:"#\u542F\u52A8jenkins-jenkins"},{default:d(()=>[x]),_:1})]),e("li",null,[n(s,{to:"#\u5B89\u88C5\u5B89\u88C5docker-compose"},{default:d(()=>[_]),_:1})]),e("li",null,[n(s,{to:"#\u5B89\u88C5\u597D\u4E4B\u540E-\u7136\u540E\u542F\u52A8docker\u4E0B\u7684"},{default:d(()=>[f]),_:1})])])]),e("li",null,[n(s,{to:"#\u7B2C\u4E8C\u90E8\u5206-ubuntu\u90E8\u5206"},{default:d(()=>[j]),_:1})]),e("li",null,[n(s,{to:"#ubuntu\u73AF\u5883\u5B66\u4E60docker\u548C\u90E8\u7F72"},{default:d(()=>[g]),_:1})]),e("li",null,[n(s,{to:"#\u9632\u706B\u5899\u76F8\u5173"},{default:d(()=>[y]),_:1})]),e("li",null,[n(s,{to:"#\u542F\u52A8jenkins\u62A5\u9519"},{default:d(()=>[w]),_:1})]),e("li",null,[n(s,{to:"#\u542F\u52A8docker"},{default:d(()=>[z]),_:1}),e("ul",null,[e("li",null,[n(s,{to:"#\u5B89\u88C5\u5B89\u88C5docker-compose-1"},{default:d(()=>[q]),_:1})])])]),e("li",null,[n(s,{to:"#zx\u811A\u672C\u5DE5\u5177\u7684\u5B66\u4E60"},{default:d(()=>[S]),_:1})]),e("li",null,[n(s,{to:"#zx\u811A\u672C\u4F7F\u7528\u65B9\u6CD5"},{default:d(()=>[C]),_:1}),e("ul",null,[e("li",null,[n(s,{to:"#linux\u7CFB\u7EDF\u4F7F\u7528"},{default:d(()=>[L]),_:1})]),e("li",null,[n(s,{to:"#\u5E38\u7528\u7684\u51FD\u6570"},{default:d(()=>[A]),_:1})])])]),e("li",null,[n(s,{to:"#zx\u652F\u6301ts\u6267\u884C\u5E93"},{default:d(()=>[N]),_:1}),e("ul",null,[e("li",null,[n(s,{to:"#_1-\u7B2C\u4E00\u6B65\u5C06package-json\u4E2D\u5F15\u5165\u6A21\u5757"},{default:d(()=>[T]),_:1})])])]),e("li",null,[n(s,{to:"#ts\u6A21\u5757\u5316"},{default:d(()=>[E]),_:1})]),e("li",null,[n(s,{to:"#ts\u4E2D\u5F15\u5165\u540E-\u6CA1\u6709\u8FD9\u4E2A\u6A21\u5757"},{default:d(()=>[O]),_:1})])])]),I,e("p",null,[e("a",D,[J,n(a)])]),M,e("p",null,[e("a",V,[W,n(a)])]),B])}var G=t(o,[["render",P],["__file","003CICD\u8BB0\u5F55\u5B66\u4E60.html.vue"]]);export{G as default};
