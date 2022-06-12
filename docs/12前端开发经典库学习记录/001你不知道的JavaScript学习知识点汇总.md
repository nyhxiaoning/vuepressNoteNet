[[toc]]

[toc]


<a href="#end" id="begin">跳到底部</a>

## JavaScript中检测对象的方法 
 ### 1.typeof操作符 
 
 ~~~
 
这种方法对于一些常用的类型来说那算是毫无压力，
比如Function、String、Number、Undefined等，
但是要是检测Array的对象就不起作用了。 利用typeof除了array和null判断为object外，其他的都可以正常判断

alert(typeof null); // "object"
alert(typeof function () {
return 1;
}); // "function"
alert(typeof '梦龙小站'); // "string"
alert(typeof 1); // "number"
alert(typeof a); // "undefined"
alert(typeof undefined); // "undefined"
alert(typeof []); // "object" 

~~~

 ### 2.instanceof操作符 
 
 ~~~
 
这个操作符和JavaScript中面向对象有点关系，了解这个就先得了解JavaScript中的面向对象。因为这个操作符是检测对象的原型链是否指向构造函数的prototype对象的。

var arr = [1,2,3,1];
alert(arr instanceof Array); // true 
3.对象的constructor属性 
除了instanceof，每个对象还有constructor的属性，利用它似乎也能进行Array的判断。

var arr = [1,2,3,1];
alert(arr.constructor === Array); // true 
第2种和第3种方法貌似无懈可击，但是实际上还是有些漏洞的，当你在多个frame中来回穿梭的时候，这两种方法就亚历山大了。由于每个iframe都有一套自己的执行环境，跨frame实例化的对象彼此是不共享原型链的，因此导致上述检测代码失效

var iframe = document.createElement('iframe'); //创建iframe
document.body.appendChild(iframe); //添加到body中
xArray = window.frames[window.frames.length-1].Array;
var arr = new xArray(1,2,3); // 声明数组[1,2,3]
alert(arr instanceof Array); // false
alert(arr.constructor === Array); // false 
检测数组类型方法 
以上那些方法看上去无懈可击，但是终究会有些问题，接下来向大家提供一些比较不错的方法，可以说是无懈可击了。 
~~~

 ### 1.Object.prototype.toString 
 
 ~~~
 
Object.prototype.toString的行为：
首先，取得对象的一个内部属性[[Class]]，然后依据这个属性，
返回一个类似于"[object Array]"的字符串作为结果
(看过ECMA标准的应该都知道，
[[]]用来表示语言内部用到的、外部不可直接访问的属性，称为“内部属性”)。
利用这 个方法，再配合call，我们可以取得任何对象的内部属性[[Class]]，
然后把类型检测转化为字符串比较，以达到我们的目的。

function isArrayFn (o) {
return Object.prototype.toString.call(o) === '[object Array]';
}
var arr = [1,2,3,1];
alert(isArrayFn(arr));// true 
call改变toString的this引用为待检测的对象，返回此对象的字符串表示，
然后对比此字符串是否是'[object Array]'，
以判断其是否是Array的实例。为什么不直接o.toString()?
嗯，虽然Array继承自Object，也会有 toString方法，
但是这个方法有可能会被改写而达不到我们的要求，
而Object.prototype则是老虎的屁股，很少有人敢去碰它的
，所以能一定程度保证其“纯洁性”：) 

JavaScript 标准文档中定义: [[Class]] 的值只可能是下面字符串中的一个： Arguments, Array, Boolean, Date, Error, Function, JSON, Math, Number, Object, RegExp, String. 
这种方法在识别内置对象时往往十分有用，但对于自定义对象请不要使用

~~~

 ### 2.Array.isArray() 
 
~~~
ECMAScript5将Array.isArray()正式引入JavaScript
，目的就是准确地检测一个值是否为数组。
IE9+、 Firefox 4+、Safari 5+、Opera 10.5+和Chrome都实现了这个方法。但是在IE8之前的版本是不支持的。

~~~


## 4.JavaScript中async/await的使用和执行

~~~



~~~


## 5.new到底做了什么？
    详见本章节中的2.JS 的 new 到底是干什么的？


## 6.关于JS中的setPrototypeOf用法
    解释：
    Object.setPrototypeOf()，为现有对象设置原型，返回一个新对象
    接收两个参数：第一个是现有对象，第二是原型对象。
    
    new 命令通过构造函数新建对象实例的过程，其本质是将实例的原型，指
    向了构造函数的prototype属性，然后在实例上执行构造函数
    
    //构造函数
    function Person(name) {
        this.name = name;
    }
    // var p = new Person("zhenglijing");
    //等同于将构造函数的原型对象赋给实例对象p的属性__proto__
    p.__proto__ = Object.setPrototypeOf({},Person.prototype);
    Person.call(p,"zhenglijing");//将Person上面的方法作用在
    这样实例的属性__proto__就指向了构造函数的原型，这样就形成了原型
    链，当在实例中找不到属性或方法时，就通过原型链进行查找
    
    
    在实例中执行构造函数，构造函数就是一个普通函数，如果一个普通函数
    在一个对象中被执行了，那么this就是该实例。
    
    var o = {};
    function Person(name) {
        this.name = name;
    }
    //把构造函数放在对象o中执行，那么这个this就是o对象了，执行完后，
    该o对象就有了实例属性name了。
    Person.call(o,"zhenglijing");
    
原文链接：https://blog.csdn.net/zljhdu/article/details/78765241

### 补充关于getPrototypeOf
    Object.setPrototypeOf 方法配套，用于读取一个对象的原型对象。
    Object.getPrototypeOf(obj);
    obj参数默认未对象，如果不是对象，会将obj转成对象
    


## 7.关于真实数组定义和js中数组的区别

~~~
    数组的定义：
    数组中的数据必须是相同类型的，数组中的数据必须是
    连续存储的。只有这样，数组才能实现根据下标快速地
    （时间复杂度是O(1)）定位一个元素
    
    *但是*
    Javascript这种语言中，数组中的数据不一定是连续存
    储的，也不一定非得是相同类型，甚至数组可以是变长
    的,本质上，JavaScript一切都是对象，数组其实是特殊的对象
    
    那引出另一个问题
    难道数据结构和算法书籍里的讲解脱离实践？难道编程
    语言中的数组没有完全按照数组的定义来设计？
    
    两个都没错。编程语言中的”数组“并不完全等同于，我
    们在讲数据结构和算法的时候，提到的”数组“。编程语
    言在实现自己的”数组“类型的时候，并不是完全遵循数
    据结构”数组“的定义，而是针对编程语言自身的特点，
    做了调整。
    
    
    


~~~
    
### 关于js中的数组和数据结构数组中的使用
~~~

    JavaScript中数组的实现方式

如果我们说，Java中的数组，只是根据语言自己的特点，在
数据结构数组基础之上，做的改造的话，那JavaScript这种
动态脚本语言中的数组，完全就被改的“面目全非”了。


在开头的时候，我们已经提到过，JavaScript中的数组，可
以存储不同类型的数据，数组中的数据也不一定是连续存储
的（按照下标随机访问的效率不高），并且还能支持变长数
组。这完全就是跟数据结构中数组的定义反着的。如果你是
一名Web前端工程师，你应该会对此很困惑吧？

实际上，JavaScript中数组的底层实现原理，已经不是
依赖数据结构中的数组了。也就是说，JavaScript中的数组
只不过是名字叫数组而已，跟数据结构中数组没啥太大关
系。

接下来，我们就来看下，JavaScript中的数组，底层是如何
实现的呢？实际上，JavaScript中的数组，会根据你存储数
据的不同，选择不从的实现方式。

如果数组中存储的是相同类型的数据，那JavaScript就真的
用数据结构中数组来实现。也就是说，会分配一块连续的内
存空间来存储数据。


如果数组中存储的是非相同类型的数据，那JavaScript就用
类似散列表的结构来存储数据。也就是说，数据并不是连续
存储在内存中的。这也是JavaScript数组支持存储不同类型
数据的原因。

如果你往一个存储了相同类型数据的数组中，插入一个不同
类型的数据，那JavaScript会将底层的存储结构，从数组变
成散列表。

如果你熟悉JavaScript，你应该知道，JavaScript为了照顾
一些底层应用的开发者，还提供了另外一种数据类型，叫做
ArrayBuffer。而ArrayBuffer才符合标准的数据结构中数组
的定义。它分配一片连续的内存空间，仅仅用来存储相同类
型的数据。


最后，总结

数据结构和算法先于编程语言出现。编程语言中是一些数据
类型，并不能跟数据结构和算法书籍中讲到的经典数据结构
，完全一一对应。比如我们今天讲到的数组，很多编程语言
中，都会有数组这种数据类型，而它们往往会根据自己语言
的特点，在实现上做了调整。


~~~



## 9.数组在编程语言中应用

~~~

    数组分类，如果使用数组下标分类的话，数组分为索引
    数组和关联数组，索引数组就是用下标是有序整数来写
    ，关联数组是下标使用字符串，在python是字典
    
    
    使用数组存储的分类方式，数组分为静态和动态
    java中数组是静态的，也就是数组的存储是连续的空间
    ，定义后数组的长度固定了不能改变，按索引取数组元素
    但是js中数组是动态的，分配的内存是不连续的，主要
    是因为js中数组其实是对象
    
    js的数组同时属于索引数组和动态数组，因为本质上它
    就是一个js对象，体现着js动态语言特性。但js的索引
    数组并非“连续分配”内存的，因此索引方式并不会带来
    很高的效率。而java中的数组则是连续分配内存的。




~~~
### 关联数组的使用和简介
~~~

用数字作为键名的数组一般叫做索引数组。用字符串表示键的数组就是下面要介绍的关联数组。


javascript 数组用[]不可以声明关联数组，但是可以存放关联数组

关联数组和常规说的数组类似，它包含标量数据，可用索引值来单独选择这些数据，和常规数组不同的是， 关联数组的索引值不是非负的整数而是任意的标量。这些标量称为Keys，可以在以后用于检索数组中的数值。

关联数组的元素没有特定的顺序，你可以把它们想象为一组卡片。每张卡片上半部分是索引而下半部分是数值。

关联数组是Perl语言中特有的，关联数组是一个功能强大的数组。使用关联数组时要在前面加上%号，关联数组的格式如:

%ARRAY=(key1,value1,key2,value2,key3,value3);

每一个key都有一个相对应的值(value)。我在网上找到的。


~~~

## 10.Object对象中的assign可以合并两个对象
将两个对象合并，合并对象合并到第一个对象
~~~
    var a={name:'jack'};
    var b={age:10};
    Object.assign(a,b);
    console.log(a) // 'Object {name: "jack", age: 10}'



~~~
为了避免第一个对象传入后被更改，可以用如下的方法
~~~
    
    你可以传一个{}，作为函数的第一个实参，这样剩下对象的自有且可枚举
    的属性，会被拷贝到这个空对象中并返回这个对象，这样可以避免不需要
    的修改。
    var a={name:'jack'};
    var b={age:10};
    var c=Object.assign({},a,b);
    console.log(c) //  'Object {name: "jack", age: 10}'

~~~

注意：重复出现的属性，会被相对于右边的值覆盖，因为该函数是从左到右操
作参数的

实参的顺序会影响到最终的结果。
~~~
    var a={name:'jack'};
    var b={name:10};
    Object.assign(a,b);
    console.log(a); // 'Object {name: 10}'
    
~~~

注意设置了只读属性的内容就会报错

~~~
    当第一个对象中，存在一个只读属性，而接下来的对象里，也存在一个同
    名的属性时，就会产生一个TypeError

    var a={name:'jack'};
    Object.defineProperty(a,'name',{writable:false});//设置为只读
    var b={name:10};
    Object.assign(a,b);//报错
~~~


<a href="#begin" id="end">回到顶部</a>