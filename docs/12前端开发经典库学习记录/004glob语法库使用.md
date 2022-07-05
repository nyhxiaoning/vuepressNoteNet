

[[toc]]

文章链接地址：
[glob全局库的使用匹配：](https://app.yinxiang.com/shard/s37/nl/24388549/42f1929c-28e0-4834-a73a-204cb2048acc)
~~~
*
匹配任意长度任意字符
**
代表0或多个层级的目录
?
匹配任意单个字符，注意是单个字符。比如?.js，可以命中a.js但是ab.js无法命中。


---案例1：？ 
比如?.js，可以命中a.js但是ab.js无法命中。但是a?.js可以命中a.js和ab.js 

---案例2：[][ab].js可以匹配到a.js，b.js,但是不能匹配ab.js。*[ab].js可以匹配a.js,b.js,ab.js,aba.js 

---案例3：[!...] 和 [^...]，这两种语法完全等价。 

[!a].js，可以匹配除了a.js以外的所有文件 ---案例4b{u,i}g.js ，可匹配到bug.js，big.js文件
~~~