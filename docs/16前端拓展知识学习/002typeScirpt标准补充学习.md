![成长](/images/home.png)

[[toc]]


## 回到博客主页
[博客首页](./../README.md)  


## 网上前端typeSciript入门学习基础---复习基础常用

~~~
// 1. 自己定义变量可以设置基本类型
let courseName:string = '玩转Vue3全家桶'
let price:number = 129
let isOnline:boolean = true
let courseSales:undefined
let me:[string,number] = ["大圣",18];//定义元祖类型
//元组就是类型个数固定和类型都不固定的数组
// 2. 对象类型---声明对象
interface course {
    name:string,
    price:number[],
    avatar?:string|boolean,
    readonly address:string
}
//3 函数类型---声明函数类型
type addType = (a:number,b:number)=>number
interface addType1{
    (a:number,b:number):number
}
let add2:addType  = function(x: number, y: number): number {
    return x + y;
}
// 4. 宿主环境的类型TS提供了
let w:Window = window
let ele:HTMLElement = document.createElement('div')
ele.addEventListener('click',function(e:MouseEvent){
    w.alert(1)
},false)

// 5 泛型 （难点）
// <T>就是<某种类型>的意思，就是定义了一个类型变量，通过extends控制类型

function test<某种类型>(args:某种类型):某种类型{
    return args
}
// 别名使用
type ExtendsType<T> = T extends boolean ? "重学前端" : "玩转Vue3"
function getProperty<T, K extends keyof T>(o: T, name: K): T[K] {
    return o[name]
}
//解释这里的infer类型含义,infer是推导出泛型类型
type ReturnType1<T> = T extends ()=>infer P ?P:never 

// 6. 用到框架中的源码
import {ref, Ref} from 'vue'
const props = defineProps<{ title: string value?: number}>()

interface Todo{
  title:string,
  done:boolean
}
let todos:Ref<Todo[]> = ref([{title:'学习Vue',done:false}])

const App: React.FC<IProps> = (props) => {
  const [count, setCount] = useState<number>(1)
  return (
    <div className="App">
      <h1>hello world</h1>
      <h2>{count}</h2>
    </div>
  );
}
// 7.网络接口的类型
// 限制前后端接口的Typescript类型，限制参数传递，前后端联调爽歪歪
import axios from 'axios'
function request<T extends keyof API>(url:T,obj:Api[T]){
    return axios.post(url,obj)
}
interface Api{
    '/course/buy':{
        id:number
    },
    '/course/comment':{
        id:number,
        message:string
    }
}
request('/course/buy',{id:1})
request('/course/comment',{id:1,message:'嘎嘎好看'})
request('/course/comment',{id:1}) //如果message必传 类型提醒缺少参数
request('/course/404',{id:1}) //接口不存在 类型报错




~~~


## 2.常用关键字的高级使用


### keyof关键字

~~~

--------
keyof---------
keyof  interface或是对象是将对象key值拿出来
keyof any  则是：string | number |symbol
例如
interface iUserInfo{
  name:string,
  age:number
}

type keys = keyof iUserInfo;
keyof提取interface中的所有类型，生成一个联合类型
---------

~~~


### typeof
给类型起别名

~~~
优秀案例



~~~

### in 用于取联合类型的值，主要用于数组和对象的构造
~~~
in用于取联合类型的值。主要用于数组和对象的构造。
案例1常见
type Person = "name" | "school" | "major"

type Obj =  {
  [p in Person]: string
}
表示拿出这三个类型名称值，然后作为key,类型都是string
~~~


### 四种特殊类型
void 代表空，可以是 null 或者 undefined，一般是用于函数返回值。
any是任意类型，任何类型都可以赋值给它，它也可以赋值给任何类型。
unknown是未知类型，任何类型都可以赋值给它，但是它不可以赋值给别的类型。
never代表不可达，比如函数抛异常的时候，返回值就是never。


## 3.实用案例补充
### 定义泛型相关

~~~
定义一个数组，使用泛型定义。
let arr:Array<number> = [11,22,44]
不使用泛型定义一个数组
let  arr2:number[] = [1,3,5]


~~~

### 声明比较复杂的对象数组
~~~
//拿出需要声明的类型属性
type Person = "name" | "school" | "major"

export type  Obj =  {
  [p in Person]: string
}
导入后，直接使用
//进行定义声明
let myarr:Obj[]=[{"name":'3',"major":'3',school:'3'}]



~~~

### infer 的作用一言蔽之：推导泛型参数
推导出泛型参数
~~~
type  numberPromise = Promise<number>;
type n = numberPromise extend Promise<infer P>?P:never;
//此时推导出n的类型是number,实质就是type n = number;

~~~


## 4.接口和class一起使用定义的方式
使用interface定义基类，然后可以使用class 来implements实现这个接口。

虽然简单方式interface和class都可以定义一个类型。
~~~
/**
 * 选择组件项接口
 */
export interface IGrouping {
    /**
    * 正序
   */
    positiveeOrder: boolean,

    /**
     * 项id
    */
    property: string
}

/**
 * 选择组件项实体
 */
export class SelectItemEntity implements IGrouping {
    constructor() {
        this.positiveeOrder = true
        this.property = ''

    }
    positiveeOrder: boolean
    property: string
}

~~~




## interface和type的区别




### 每日ts汇总基础---基础复习版本
[基础入门学习](https://juejin.cn/post/7018805943710253086#heading-11)
### js的八种内置类型的表示
~~~

let str: string = "jimmy";
let num: number = 24;
let bool: boolean = false;
let u: undefined = undefined;
let n: null = null;
let obj: object = {x: 1};
let big: bigint = 100n;
let sym: symbol = Symbol("me"); 


~~~


### null和undefined是所有类型的子类型。
可以将null和undefined赋值给其他类型


### 数组两种定义
~~~
let arr:string[] = ["1","2"];
let arr2:Array<string> = ["1","2"]；


~~~


### 定义对象数组成员的接口
~~~

// interface是接口,后面会讲到
interface Arrobj{
    name:string,
    age:number
}
let arr3:Arrobj[]=[{name:'jimmy',age:22}]


~~~


### 可选参数
~~~
function buildName(firstName: string, lastName?: string) {
    if (lastName) {
        return firstName + ' ' + lastName;
    } else {
        return firstName;
    }
}
let tomcat = buildName('Tom', 'Cat');
let tom = buildName('Tom');

~~~

### 参数默认值

~~~
function buildName(firstName: string, lastName: string = 'Cat') {
    return firstName + ' ' + lastName;
}
let tomcat = buildName('Tom', 'Cat');
let tom = buildName('Tom');


~~~

