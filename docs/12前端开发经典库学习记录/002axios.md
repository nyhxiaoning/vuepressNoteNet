[[toc]] 

## 1.axios拦截器封装
## 2.axios取消，防止重复点击。

https://gitee.com/nyhxiaoning/pc-person-base-vuecli3-scaffold-0608.git

文件是fetch

config.cancelToken利用这个取消

通过map中的唯一值，键值是
~~~
实现思路
第一，
// TODO:增加请求携带cancelToken的请求，默认是true,如果不想要可以取消这个请求，传参
if (!config.cancelTokenFlag) {
config.cancelTokenFlag = true;
}
第二
// 对axios参数进行一些操作
config.cancelTokenFlag && removePending(config);

~~~

备注：
其中，Map是一个唯一值的数据存储，使用当前的请求地址作为键名，值为一个取消请求方法，如果有了这个键名，再次有，那么触发cacel方法