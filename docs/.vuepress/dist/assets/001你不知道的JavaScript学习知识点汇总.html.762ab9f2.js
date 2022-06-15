import{_ as d,r as l,o as r,c as v,a as e,b as i,w as a,e as t,d as s}from"./app.b65db6a5.js";const c={},u={class:"table-of-contents"},o=s("JavaScript\u4E2D\u68C0\u6D4B\u5BF9\u8C61\u7684\u65B9\u6CD5"),b=s("1.typeof\u64CD\u4F5C\u7B26"),m=s("2.instanceof\u64CD\u4F5C\u7B26"),p=s("1.Object.prototype.toString"),h=s("2.Array.isArray()"),_=s("4.JavaScript\u4E2Dasync/await\u7684\u4F7F\u7528\u548C\u6267\u884C"),f=s("5.new\u5230\u5E95\u505A\u4E86\u4EC0\u4E48\uFF1F"),g=s("6.\u5173\u4E8EJS\u4E2D\u7684setPrototypeOf\u7528\u6CD5"),y=s("\u8865\u5145\u5173\u4E8EgetPrototypeOf"),x=s("7.\u5173\u4E8E\u771F\u5B9E\u6570\u7EC4\u5B9A\u4E49\u548Cjs\u4E2D\u6570\u7EC4\u7684\u533A\u522B"),j=s("\u5173\u4E8Ejs\u4E2D\u7684\u6570\u7EC4\u548C\u6570\u636E\u7ED3\u6784\u6570\u7EC4\u4E2D\u7684\u4F7F\u7528"),S=s("9.\u6570\u7EC4\u5728\u7F16\u7A0B\u8BED\u8A00\u4E2D\u5E94\u7528"),O=s("\u5173\u8054\u6570\u7EC4\u7684\u4F7F\u7528\u548C\u7B80\u4ECB"),A=s("10.Object\u5BF9\u8C61\u4E2D\u7684assign\u53EF\u4EE5\u5408\u5E76\u4E24\u4E2A\u5BF9\u8C61"),J=t(`<p>[toc]</p><p><a href="#end" id="begin">\u8DF3\u5230\u5E95\u90E8</a></p><h2 id="javascript\u4E2D\u68C0\u6D4B\u5BF9\u8C61\u7684\u65B9\u6CD5" tabindex="-1"><a class="header-anchor" href="#javascript\u4E2D\u68C0\u6D4B\u5BF9\u8C61\u7684\u65B9\u6CD5" aria-hidden="true">#</a> JavaScript\u4E2D\u68C0\u6D4B\u5BF9\u8C61\u7684\u65B9\u6CD5</h2><h3 id="_1-typeof\u64CD\u4F5C\u7B26" tabindex="-1"><a class="header-anchor" href="#_1-typeof\u64CD\u4F5C\u7B26" aria-hidden="true">#</a> 1.typeof\u64CD\u4F5C\u7B26</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>
\u8FD9\u79CD\u65B9\u6CD5\u5BF9\u4E8E\u4E00\u4E9B\u5E38\u7528\u7684\u7C7B\u578B\u6765\u8BF4\u90A3\u7B97\u662F\u6BEB\u65E0\u538B\u529B\uFF0C
\u6BD4\u5982Function\u3001String\u3001Number\u3001Undefined\u7B49\uFF0C
\u4F46\u662F\u8981\u662F\u68C0\u6D4BArray\u7684\u5BF9\u8C61\u5C31\u4E0D\u8D77\u4F5C\u7528\u4E86\u3002 \u5229\u7528typeof\u9664\u4E86array\u548Cnull\u5224\u65AD\u4E3Aobject\u5916\uFF0C\u5176\u4ED6\u7684\u90FD\u53EF\u4EE5\u6B63\u5E38\u5224\u65AD

alert(typeof null); // &quot;object&quot;
alert(typeof function () {
return 1;
}); // &quot;function&quot;
alert(typeof &#39;\u68A6\u9F99\u5C0F\u7AD9&#39;); // &quot;string&quot;
alert(typeof 1); // &quot;number&quot;
alert(typeof a); // &quot;undefined&quot;
alert(typeof undefined); // &quot;undefined&quot;
alert(typeof []); // &quot;object&quot; 

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-instanceof\u64CD\u4F5C\u7B26" tabindex="-1"><a class="header-anchor" href="#_2-instanceof\u64CD\u4F5C\u7B26" aria-hidden="true">#</a> 2.instanceof\u64CD\u4F5C\u7B26</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>
\u8FD9\u4E2A\u64CD\u4F5C\u7B26\u548CJavaScript\u4E2D\u9762\u5411\u5BF9\u8C61\u6709\u70B9\u5173\u7CFB\uFF0C\u4E86\u89E3\u8FD9\u4E2A\u5C31\u5148\u5F97\u4E86\u89E3JavaScript\u4E2D\u7684\u9762\u5411\u5BF9\u8C61\u3002\u56E0\u4E3A\u8FD9\u4E2A\u64CD\u4F5C\u7B26\u662F\u68C0\u6D4B\u5BF9\u8C61\u7684\u539F\u578B\u94FE\u662F\u5426\u6307\u5411\u6784\u9020\u51FD\u6570\u7684prototype\u5BF9\u8C61\u7684\u3002

var arr = [1,2,3,1];
alert(arr instanceof Array); // true 
3.\u5BF9\u8C61\u7684constructor\u5C5E\u6027 
\u9664\u4E86instanceof\uFF0C\u6BCF\u4E2A\u5BF9\u8C61\u8FD8\u6709constructor\u7684\u5C5E\u6027\uFF0C\u5229\u7528\u5B83\u4F3C\u4E4E\u4E5F\u80FD\u8FDB\u884CArray\u7684\u5224\u65AD\u3002

var arr = [1,2,3,1];
alert(arr.constructor === Array); // true 
\u7B2C2\u79CD\u548C\u7B2C3\u79CD\u65B9\u6CD5\u8C8C\u4F3C\u65E0\u61C8\u53EF\u51FB\uFF0C\u4F46\u662F\u5B9E\u9645\u4E0A\u8FD8\u662F\u6709\u4E9B\u6F0F\u6D1E\u7684\uFF0C\u5F53\u4F60\u5728\u591A\u4E2Aframe\u4E2D\u6765\u56DE\u7A7F\u68AD\u7684\u65F6\u5019\uFF0C\u8FD9\u4E24\u79CD\u65B9\u6CD5\u5C31\u4E9A\u5386\u5C71\u5927\u4E86\u3002\u7531\u4E8E\u6BCF\u4E2Aiframe\u90FD\u6709\u4E00\u5957\u81EA\u5DF1\u7684\u6267\u884C\u73AF\u5883\uFF0C\u8DE8frame\u5B9E\u4F8B\u5316\u7684\u5BF9\u8C61\u5F7C\u6B64\u662F\u4E0D\u5171\u4EAB\u539F\u578B\u94FE\u7684\uFF0C\u56E0\u6B64\u5BFC\u81F4\u4E0A\u8FF0\u68C0\u6D4B\u4EE3\u7801\u5931\u6548

var iframe = document.createElement(&#39;iframe&#39;); //\u521B\u5EFAiframe
document.body.appendChild(iframe); //\u6DFB\u52A0\u5230body\u4E2D
xArray = window.frames[window.frames.length-1].Array;
var arr = new xArray(1,2,3); // \u58F0\u660E\u6570\u7EC4[1,2,3]
alert(arr instanceof Array); // false
alert(arr.constructor === Array); // false 
\u68C0\u6D4B\u6570\u7EC4\u7C7B\u578B\u65B9\u6CD5 
\u4EE5\u4E0A\u90A3\u4E9B\u65B9\u6CD5\u770B\u4E0A\u53BB\u65E0\u61C8\u53EF\u51FB\uFF0C\u4F46\u662F\u7EC8\u7A76\u4F1A\u6709\u4E9B\u95EE\u9898\uFF0C\u63A5\u4E0B\u6765\u5411\u5927\u5BB6\u63D0\u4F9B\u4E00\u4E9B\u6BD4\u8F83\u4E0D\u9519\u7684\u65B9\u6CD5\uFF0C\u53EF\u4EE5\u8BF4\u662F\u65E0\u61C8\u53EF\u51FB\u4E86\u3002 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-object-prototype-tostring" tabindex="-1"><a class="header-anchor" href="#_1-object-prototype-tostring" aria-hidden="true">#</a> 1.Object.prototype.toString</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>
Object.prototype.toString\u7684\u884C\u4E3A\uFF1A
\u9996\u5148\uFF0C\u53D6\u5F97\u5BF9\u8C61\u7684\u4E00\u4E2A\u5185\u90E8\u5C5E\u6027[[Class]]\uFF0C\u7136\u540E\u4F9D\u636E\u8FD9\u4E2A\u5C5E\u6027\uFF0C
\u8FD4\u56DE\u4E00\u4E2A\u7C7B\u4F3C\u4E8E&quot;[object Array]&quot;\u7684\u5B57\u7B26\u4E32\u4F5C\u4E3A\u7ED3\u679C
(\u770B\u8FC7ECMA\u6807\u51C6\u7684\u5E94\u8BE5\u90FD\u77E5\u9053\uFF0C
[[]]\u7528\u6765\u8868\u793A\u8BED\u8A00\u5185\u90E8\u7528\u5230\u7684\u3001\u5916\u90E8\u4E0D\u53EF\u76F4\u63A5\u8BBF\u95EE\u7684\u5C5E\u6027\uFF0C\u79F0\u4E3A\u201C\u5185\u90E8\u5C5E\u6027\u201D)\u3002
\u5229\u7528\u8FD9 \u4E2A\u65B9\u6CD5\uFF0C\u518D\u914D\u5408call\uFF0C\u6211\u4EEC\u53EF\u4EE5\u53D6\u5F97\u4EFB\u4F55\u5BF9\u8C61\u7684\u5185\u90E8\u5C5E\u6027[[Class]]\uFF0C
\u7136\u540E\u628A\u7C7B\u578B\u68C0\u6D4B\u8F6C\u5316\u4E3A\u5B57\u7B26\u4E32\u6BD4\u8F83\uFF0C\u4EE5\u8FBE\u5230\u6211\u4EEC\u7684\u76EE\u7684\u3002

function isArrayFn (o) {
return Object.prototype.toString.call(o) === &#39;[object Array]&#39;;
}
var arr = [1,2,3,1];
alert(isArrayFn(arr));// true 
call\u6539\u53D8toString\u7684this\u5F15\u7528\u4E3A\u5F85\u68C0\u6D4B\u7684\u5BF9\u8C61\uFF0C\u8FD4\u56DE\u6B64\u5BF9\u8C61\u7684\u5B57\u7B26\u4E32\u8868\u793A\uFF0C
\u7136\u540E\u5BF9\u6BD4\u6B64\u5B57\u7B26\u4E32\u662F\u5426\u662F&#39;[object Array]&#39;\uFF0C
\u4EE5\u5224\u65AD\u5176\u662F\u5426\u662FArray\u7684\u5B9E\u4F8B\u3002\u4E3A\u4EC0\u4E48\u4E0D\u76F4\u63A5o.toString()?
\u55EF\uFF0C\u867D\u7136Array\u7EE7\u627F\u81EAObject\uFF0C\u4E5F\u4F1A\u6709 toString\u65B9\u6CD5\uFF0C
\u4F46\u662F\u8FD9\u4E2A\u65B9\u6CD5\u6709\u53EF\u80FD\u4F1A\u88AB\u6539\u5199\u800C\u8FBE\u4E0D\u5230\u6211\u4EEC\u7684\u8981\u6C42\uFF0C
\u800CObject.prototype\u5219\u662F\u8001\u864E\u7684\u5C41\u80A1\uFF0C\u5F88\u5C11\u6709\u4EBA\u6562\u53BB\u78B0\u5B83\u7684
\uFF0C\u6240\u4EE5\u80FD\u4E00\u5B9A\u7A0B\u5EA6\u4FDD\u8BC1\u5176\u201C\u7EAF\u6D01\u6027\u201D\uFF1A) 

JavaScript \u6807\u51C6\u6587\u6863\u4E2D\u5B9A\u4E49: [[Class]] \u7684\u503C\u53EA\u53EF\u80FD\u662F\u4E0B\u9762\u5B57\u7B26\u4E32\u4E2D\u7684\u4E00\u4E2A\uFF1A Arguments, Array, Boolean, Date, Error, Function, JSON, Math, Number, Object, RegExp, String. 
\u8FD9\u79CD\u65B9\u6CD5\u5728\u8BC6\u522B\u5185\u7F6E\u5BF9\u8C61\u65F6\u5F80\u5F80\u5341\u5206\u6709\u7528\uFF0C\u4F46\u5BF9\u4E8E\u81EA\u5B9A\u4E49\u5BF9\u8C61\u8BF7\u4E0D\u8981\u4F7F\u7528

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-array-isarray" tabindex="-1"><a class="header-anchor" href="#_2-array-isarray" aria-hidden="true">#</a> 2.Array.isArray()</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>ECMAScript5\u5C06Array.isArray()\u6B63\u5F0F\u5F15\u5165JavaScript
\uFF0C\u76EE\u7684\u5C31\u662F\u51C6\u786E\u5730\u68C0\u6D4B\u4E00\u4E2A\u503C\u662F\u5426\u4E3A\u6570\u7EC4\u3002
IE9+\u3001 Firefox 4+\u3001Safari 5+\u3001Opera 10.5+\u548CChrome\u90FD\u5B9E\u73B0\u4E86\u8FD9\u4E2A\u65B9\u6CD5\u3002\u4F46\u662F\u5728IE8\u4E4B\u524D\u7684\u7248\u672C\u662F\u4E0D\u652F\u6301\u7684\u3002

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4-javascript\u4E2Dasync-await\u7684\u4F7F\u7528\u548C\u6267\u884C" tabindex="-1"><a class="header-anchor" href="#_4-javascript\u4E2Dasync-await\u7684\u4F7F\u7528\u548C\u6267\u884C" aria-hidden="true">#</a> 4.JavaScript\u4E2Dasync/await\u7684\u4F7F\u7528\u548C\u6267\u884C</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_5-new\u5230\u5E95\u505A\u4E86\u4EC0\u4E48" tabindex="-1"><a class="header-anchor" href="#_5-new\u5230\u5E95\u505A\u4E86\u4EC0\u4E48" aria-hidden="true">#</a> 5.new\u5230\u5E95\u505A\u4E86\u4EC0\u4E48\uFF1F</h2><pre><code>\u8BE6\u89C1\u672C\u7AE0\u8282\u4E2D\u76842.JS \u7684 new \u5230\u5E95\u662F\u5E72\u4EC0\u4E48\u7684\uFF1F
</code></pre><h2 id="_6-\u5173\u4E8Ejs\u4E2D\u7684setprototypeof\u7528\u6CD5" tabindex="-1"><a class="header-anchor" href="#_6-\u5173\u4E8Ejs\u4E2D\u7684setprototypeof\u7528\u6CD5" aria-hidden="true">#</a> 6.\u5173\u4E8EJS\u4E2D\u7684setPrototypeOf\u7528\u6CD5</h2><pre><code>\u89E3\u91CA\uFF1A
Object.setPrototypeOf()\uFF0C\u4E3A\u73B0\u6709\u5BF9\u8C61\u8BBE\u7F6E\u539F\u578B\uFF0C\u8FD4\u56DE\u4E00\u4E2A\u65B0\u5BF9\u8C61
\u63A5\u6536\u4E24\u4E2A\u53C2\u6570\uFF1A\u7B2C\u4E00\u4E2A\u662F\u73B0\u6709\u5BF9\u8C61\uFF0C\u7B2C\u4E8C\u662F\u539F\u578B\u5BF9\u8C61\u3002

new \u547D\u4EE4\u901A\u8FC7\u6784\u9020\u51FD\u6570\u65B0\u5EFA\u5BF9\u8C61\u5B9E\u4F8B\u7684\u8FC7\u7A0B\uFF0C\u5176\u672C\u8D28\u662F\u5C06\u5B9E\u4F8B\u7684\u539F\u578B\uFF0C\u6307
\u5411\u4E86\u6784\u9020\u51FD\u6570\u7684prototype\u5C5E\u6027\uFF0C\u7136\u540E\u5728\u5B9E\u4F8B\u4E0A\u6267\u884C\u6784\u9020\u51FD\u6570

//\u6784\u9020\u51FD\u6570
function Person(name) {
    this.name = name;
}
// var p = new Person(&quot;zhenglijing&quot;);
//\u7B49\u540C\u4E8E\u5C06\u6784\u9020\u51FD\u6570\u7684\u539F\u578B\u5BF9\u8C61\u8D4B\u7ED9\u5B9E\u4F8B\u5BF9\u8C61p\u7684\u5C5E\u6027__proto__
p.__proto__ = Object.setPrototypeOf({},Person.prototype);
Person.call(p,&quot;zhenglijing&quot;);//\u5C06Person\u4E0A\u9762\u7684\u65B9\u6CD5\u4F5C\u7528\u5728
\u8FD9\u6837\u5B9E\u4F8B\u7684\u5C5E\u6027__proto__\u5C31\u6307\u5411\u4E86\u6784\u9020\u51FD\u6570\u7684\u539F\u578B\uFF0C\u8FD9\u6837\u5C31\u5F62\u6210\u4E86\u539F\u578B
\u94FE\uFF0C\u5F53\u5728\u5B9E\u4F8B\u4E2D\u627E\u4E0D\u5230\u5C5E\u6027\u6216\u65B9\u6CD5\u65F6\uFF0C\u5C31\u901A\u8FC7\u539F\u578B\u94FE\u8FDB\u884C\u67E5\u627E


\u5728\u5B9E\u4F8B\u4E2D\u6267\u884C\u6784\u9020\u51FD\u6570\uFF0C\u6784\u9020\u51FD\u6570\u5C31\u662F\u4E00\u4E2A\u666E\u901A\u51FD\u6570\uFF0C\u5982\u679C\u4E00\u4E2A\u666E\u901A\u51FD\u6570
\u5728\u4E00\u4E2A\u5BF9\u8C61\u4E2D\u88AB\u6267\u884C\u4E86\uFF0C\u90A3\u4E48this\u5C31\u662F\u8BE5\u5B9E\u4F8B\u3002

var o = {};
function Person(name) {
    this.name = name;
}
//\u628A\u6784\u9020\u51FD\u6570\u653E\u5728\u5BF9\u8C61o\u4E2D\u6267\u884C\uFF0C\u90A3\u4E48\u8FD9\u4E2Athis\u5C31\u662Fo\u5BF9\u8C61\u4E86\uFF0C\u6267\u884C\u5B8C\u540E\uFF0C
\u8BE5o\u5BF9\u8C61\u5C31\u6709\u4E86\u5B9E\u4F8B\u5C5E\u6027name\u4E86\u3002
Person.call(o,&quot;zhenglijing&quot;);
</code></pre><p>\u539F\u6587\u94FE\u63A5\uFF1Ahttps://blog.csdn.net/zljhdu/article/details/78765241</p><h3 id="\u8865\u5145\u5173\u4E8Egetprototypeof" tabindex="-1"><a class="header-anchor" href="#\u8865\u5145\u5173\u4E8Egetprototypeof" aria-hidden="true">#</a> \u8865\u5145\u5173\u4E8EgetPrototypeOf</h3><pre><code>Object.setPrototypeOf \u65B9\u6CD5\u914D\u5957\uFF0C\u7528\u4E8E\u8BFB\u53D6\u4E00\u4E2A\u5BF9\u8C61\u7684\u539F\u578B\u5BF9\u8C61\u3002
Object.getPrototypeOf(obj);
obj\u53C2\u6570\u9ED8\u8BA4\u672A\u5BF9\u8C61\uFF0C\u5982\u679C\u4E0D\u662F\u5BF9\u8C61\uFF0C\u4F1A\u5C06obj\u8F6C\u6210\u5BF9\u8C61
</code></pre><h2 id="_7-\u5173\u4E8E\u771F\u5B9E\u6570\u7EC4\u5B9A\u4E49\u548Cjs\u4E2D\u6570\u7EC4\u7684\u533A\u522B" tabindex="-1"><a class="header-anchor" href="#_7-\u5173\u4E8E\u771F\u5B9E\u6570\u7EC4\u5B9A\u4E49\u548Cjs\u4E2D\u6570\u7EC4\u7684\u533A\u522B" aria-hidden="true">#</a> 7.\u5173\u4E8E\u771F\u5B9E\u6570\u7EC4\u5B9A\u4E49\u548Cjs\u4E2D\u6570\u7EC4\u7684\u533A\u522B</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>    \u6570\u7EC4\u7684\u5B9A\u4E49\uFF1A
    \u6570\u7EC4\u4E2D\u7684\u6570\u636E\u5FC5\u987B\u662F\u76F8\u540C\u7C7B\u578B\u7684\uFF0C\u6570\u7EC4\u4E2D\u7684\u6570\u636E\u5FC5\u987B\u662F
    \u8FDE\u7EED\u5B58\u50A8\u7684\u3002\u53EA\u6709\u8FD9\u6837\uFF0C\u6570\u7EC4\u624D\u80FD\u5B9E\u73B0\u6839\u636E\u4E0B\u6807\u5FEB\u901F\u5730
    \uFF08\u65F6\u95F4\u590D\u6742\u5EA6\u662FO(1)\uFF09\u5B9A\u4F4D\u4E00\u4E2A\u5143\u7D20
    
    *\u4F46\u662F*
    Javascript\u8FD9\u79CD\u8BED\u8A00\u4E2D\uFF0C\u6570\u7EC4\u4E2D\u7684\u6570\u636E\u4E0D\u4E00\u5B9A\u662F\u8FDE\u7EED\u5B58
    \u50A8\u7684\uFF0C\u4E5F\u4E0D\u4E00\u5B9A\u975E\u5F97\u662F\u76F8\u540C\u7C7B\u578B\uFF0C\u751A\u81F3\u6570\u7EC4\u53EF\u4EE5\u662F\u53D8\u957F
    \u7684,\u672C\u8D28\u4E0A\uFF0CJavaScript\u4E00\u5207\u90FD\u662F\u5BF9\u8C61\uFF0C\u6570\u7EC4\u5176\u5B9E\u662F\u7279\u6B8A\u7684\u5BF9\u8C61
    
    \u90A3\u5F15\u51FA\u53E6\u4E00\u4E2A\u95EE\u9898
    \u96BE\u9053\u6570\u636E\u7ED3\u6784\u548C\u7B97\u6CD5\u4E66\u7C4D\u91CC\u7684\u8BB2\u89E3\u8131\u79BB\u5B9E\u8DF5\uFF1F\u96BE\u9053\u7F16\u7A0B
    \u8BED\u8A00\u4E2D\u7684\u6570\u7EC4\u6CA1\u6709\u5B8C\u5168\u6309\u7167\u6570\u7EC4\u7684\u5B9A\u4E49\u6765\u8BBE\u8BA1\uFF1F
    
    \u4E24\u4E2A\u90FD\u6CA1\u9519\u3002\u7F16\u7A0B\u8BED\u8A00\u4E2D\u7684\u201D\u6570\u7EC4\u201C\u5E76\u4E0D\u5B8C\u5168\u7B49\u540C\u4E8E\uFF0C\u6211
    \u4EEC\u5728\u8BB2\u6570\u636E\u7ED3\u6784\u548C\u7B97\u6CD5\u7684\u65F6\u5019\uFF0C\u63D0\u5230\u7684\u201D\u6570\u7EC4\u201C\u3002\u7F16\u7A0B\u8BED
    \u8A00\u5728\u5B9E\u73B0\u81EA\u5DF1\u7684\u201D\u6570\u7EC4\u201C\u7C7B\u578B\u7684\u65F6\u5019\uFF0C\u5E76\u4E0D\u662F\u5B8C\u5168\u9075\u5FAA\u6570
    \u636E\u7ED3\u6784\u201D\u6570\u7EC4\u201C\u7684\u5B9A\u4E49\uFF0C\u800C\u662F\u9488\u5BF9\u7F16\u7A0B\u8BED\u8A00\u81EA\u8EAB\u7684\u7279\u70B9\uFF0C
    \u505A\u4E86\u8C03\u6574\u3002
    
    
    


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u5173\u4E8Ejs\u4E2D\u7684\u6570\u7EC4\u548C\u6570\u636E\u7ED3\u6784\u6570\u7EC4\u4E2D\u7684\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#\u5173\u4E8Ejs\u4E2D\u7684\u6570\u7EC4\u548C\u6570\u636E\u7ED3\u6784\u6570\u7EC4\u4E2D\u7684\u4F7F\u7528" aria-hidden="true">#</a> \u5173\u4E8Ejs\u4E2D\u7684\u6570\u7EC4\u548C\u6570\u636E\u7ED3\u6784\u6570\u7EC4\u4E2D\u7684\u4F7F\u7528</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>
    JavaScript\u4E2D\u6570\u7EC4\u7684\u5B9E\u73B0\u65B9\u5F0F

\u5982\u679C\u6211\u4EEC\u8BF4\uFF0CJava\u4E2D\u7684\u6570\u7EC4\uFF0C\u53EA\u662F\u6839\u636E\u8BED\u8A00\u81EA\u5DF1\u7684\u7279\u70B9\uFF0C\u5728
\u6570\u636E\u7ED3\u6784\u6570\u7EC4\u57FA\u7840\u4E4B\u4E0A\uFF0C\u505A\u7684\u6539\u9020\u7684\u8BDD\uFF0C\u90A3JavaScript\u8FD9\u79CD
\u52A8\u6001\u811A\u672C\u8BED\u8A00\u4E2D\u7684\u6570\u7EC4\uFF0C\u5B8C\u5168\u5C31\u88AB\u6539\u7684\u201C\u9762\u76EE\u5168\u975E\u201D\u4E86\u3002


\u5728\u5F00\u5934\u7684\u65F6\u5019\uFF0C\u6211\u4EEC\u5DF2\u7ECF\u63D0\u5230\u8FC7\uFF0CJavaScript\u4E2D\u7684\u6570\u7EC4\uFF0C\u53EF
\u4EE5\u5B58\u50A8\u4E0D\u540C\u7C7B\u578B\u7684\u6570\u636E\uFF0C\u6570\u7EC4\u4E2D\u7684\u6570\u636E\u4E5F\u4E0D\u4E00\u5B9A\u662F\u8FDE\u7EED\u5B58\u50A8
\u7684\uFF08\u6309\u7167\u4E0B\u6807\u968F\u673A\u8BBF\u95EE\u7684\u6548\u7387\u4E0D\u9AD8\uFF09\uFF0C\u5E76\u4E14\u8FD8\u80FD\u652F\u6301\u53D8\u957F\u6570
\u7EC4\u3002\u8FD9\u5B8C\u5168\u5C31\u662F\u8DDF\u6570\u636E\u7ED3\u6784\u4E2D\u6570\u7EC4\u7684\u5B9A\u4E49\u53CD\u7740\u7684\u3002\u5982\u679C\u4F60\u662F
\u4E00\u540DWeb\u524D\u7AEF\u5DE5\u7A0B\u5E08\uFF0C\u4F60\u5E94\u8BE5\u4F1A\u5BF9\u6B64\u5F88\u56F0\u60D1\u5427\uFF1F

\u5B9E\u9645\u4E0A\uFF0CJavaScript\u4E2D\u6570\u7EC4\u7684\u5E95\u5C42\u5B9E\u73B0\u539F\u7406\uFF0C\u5DF2\u7ECF\u4E0D\u662F
\u4F9D\u8D56\u6570\u636E\u7ED3\u6784\u4E2D\u7684\u6570\u7EC4\u4E86\u3002\u4E5F\u5C31\u662F\u8BF4\uFF0CJavaScript\u4E2D\u7684\u6570\u7EC4
\u53EA\u4E0D\u8FC7\u662F\u540D\u5B57\u53EB\u6570\u7EC4\u800C\u5DF2\uFF0C\u8DDF\u6570\u636E\u7ED3\u6784\u4E2D\u6570\u7EC4\u6CA1\u5565\u592A\u5927\u5173
\u7CFB\u3002

\u63A5\u4E0B\u6765\uFF0C\u6211\u4EEC\u5C31\u6765\u770B\u4E0B\uFF0CJavaScript\u4E2D\u7684\u6570\u7EC4\uFF0C\u5E95\u5C42\u662F\u5982\u4F55
\u5B9E\u73B0\u7684\u5462\uFF1F\u5B9E\u9645\u4E0A\uFF0CJavaScript\u4E2D\u7684\u6570\u7EC4\uFF0C\u4F1A\u6839\u636E\u4F60\u5B58\u50A8\u6570
\u636E\u7684\u4E0D\u540C\uFF0C\u9009\u62E9\u4E0D\u4ECE\u7684\u5B9E\u73B0\u65B9\u5F0F\u3002

\u5982\u679C\u6570\u7EC4\u4E2D\u5B58\u50A8\u7684\u662F\u76F8\u540C\u7C7B\u578B\u7684\u6570\u636E\uFF0C\u90A3JavaScript\u5C31\u771F\u7684
\u7528\u6570\u636E\u7ED3\u6784\u4E2D\u6570\u7EC4\u6765\u5B9E\u73B0\u3002\u4E5F\u5C31\u662F\u8BF4\uFF0C\u4F1A\u5206\u914D\u4E00\u5757\u8FDE\u7EED\u7684\u5185
\u5B58\u7A7A\u95F4\u6765\u5B58\u50A8\u6570\u636E\u3002


\u5982\u679C\u6570\u7EC4\u4E2D\u5B58\u50A8\u7684\u662F\u975E\u76F8\u540C\u7C7B\u578B\u7684\u6570\u636E\uFF0C\u90A3JavaScript\u5C31\u7528
\u7C7B\u4F3C\u6563\u5217\u8868\u7684\u7ED3\u6784\u6765\u5B58\u50A8\u6570\u636E\u3002\u4E5F\u5C31\u662F\u8BF4\uFF0C\u6570\u636E\u5E76\u4E0D\u662F\u8FDE\u7EED
\u5B58\u50A8\u5728\u5185\u5B58\u4E2D\u7684\u3002\u8FD9\u4E5F\u662FJavaScript\u6570\u7EC4\u652F\u6301\u5B58\u50A8\u4E0D\u540C\u7C7B\u578B
\u6570\u636E\u7684\u539F\u56E0\u3002

\u5982\u679C\u4F60\u5F80\u4E00\u4E2A\u5B58\u50A8\u4E86\u76F8\u540C\u7C7B\u578B\u6570\u636E\u7684\u6570\u7EC4\u4E2D\uFF0C\u63D2\u5165\u4E00\u4E2A\u4E0D\u540C
\u7C7B\u578B\u7684\u6570\u636E\uFF0C\u90A3JavaScript\u4F1A\u5C06\u5E95\u5C42\u7684\u5B58\u50A8\u7ED3\u6784\uFF0C\u4ECE\u6570\u7EC4\u53D8
\u6210\u6563\u5217\u8868\u3002

\u5982\u679C\u4F60\u719F\u6089JavaScript\uFF0C\u4F60\u5E94\u8BE5\u77E5\u9053\uFF0CJavaScript\u4E3A\u4E86\u7167\u987E
\u4E00\u4E9B\u5E95\u5C42\u5E94\u7528\u7684\u5F00\u53D1\u8005\uFF0C\u8FD8\u63D0\u4F9B\u4E86\u53E6\u5916\u4E00\u79CD\u6570\u636E\u7C7B\u578B\uFF0C\u53EB\u505A
ArrayBuffer\u3002\u800CArrayBuffer\u624D\u7B26\u5408\u6807\u51C6\u7684\u6570\u636E\u7ED3\u6784\u4E2D\u6570\u7EC4
\u7684\u5B9A\u4E49\u3002\u5B83\u5206\u914D\u4E00\u7247\u8FDE\u7EED\u7684\u5185\u5B58\u7A7A\u95F4\uFF0C\u4EC5\u4EC5\u7528\u6765\u5B58\u50A8\u76F8\u540C\u7C7B
\u578B\u7684\u6570\u636E\u3002


\u6700\u540E\uFF0C\u603B\u7ED3

\u6570\u636E\u7ED3\u6784\u548C\u7B97\u6CD5\u5148\u4E8E\u7F16\u7A0B\u8BED\u8A00\u51FA\u73B0\u3002\u7F16\u7A0B\u8BED\u8A00\u4E2D\u662F\u4E00\u4E9B\u6570\u636E
\u7C7B\u578B\uFF0C\u5E76\u4E0D\u80FD\u8DDF\u6570\u636E\u7ED3\u6784\u548C\u7B97\u6CD5\u4E66\u7C4D\u4E2D\u8BB2\u5230\u7684\u7ECF\u5178\u6570\u636E\u7ED3\u6784
\uFF0C\u5B8C\u5168\u4E00\u4E00\u5BF9\u5E94\u3002\u6BD4\u5982\u6211\u4EEC\u4ECA\u5929\u8BB2\u5230\u7684\u6570\u7EC4\uFF0C\u5F88\u591A\u7F16\u7A0B\u8BED\u8A00
\u4E2D\uFF0C\u90FD\u4F1A\u6709\u6570\u7EC4\u8FD9\u79CD\u6570\u636E\u7C7B\u578B\uFF0C\u800C\u5B83\u4EEC\u5F80\u5F80\u4F1A\u6839\u636E\u81EA\u5DF1\u8BED\u8A00
\u7684\u7279\u70B9\uFF0C\u5728\u5B9E\u73B0\u4E0A\u505A\u4E86\u8C03\u6574\u3002


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_9-\u6570\u7EC4\u5728\u7F16\u7A0B\u8BED\u8A00\u4E2D\u5E94\u7528" tabindex="-1"><a class="header-anchor" href="#_9-\u6570\u7EC4\u5728\u7F16\u7A0B\u8BED\u8A00\u4E2D\u5E94\u7528" aria-hidden="true">#</a> 9.\u6570\u7EC4\u5728\u7F16\u7A0B\u8BED\u8A00\u4E2D\u5E94\u7528</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>
    \u6570\u7EC4\u5206\u7C7B\uFF0C\u5982\u679C\u4F7F\u7528\u6570\u7EC4\u4E0B\u6807\u5206\u7C7B\u7684\u8BDD\uFF0C\u6570\u7EC4\u5206\u4E3A\u7D22\u5F15
    \u6570\u7EC4\u548C\u5173\u8054\u6570\u7EC4\uFF0C\u7D22\u5F15\u6570\u7EC4\u5C31\u662F\u7528\u4E0B\u6807\u662F\u6709\u5E8F\u6574\u6570\u6765\u5199
    \uFF0C\u5173\u8054\u6570\u7EC4\u662F\u4E0B\u6807\u4F7F\u7528\u5B57\u7B26\u4E32\uFF0C\u5728python\u662F\u5B57\u5178
    
    
    \u4F7F\u7528\u6570\u7EC4\u5B58\u50A8\u7684\u5206\u7C7B\u65B9\u5F0F\uFF0C\u6570\u7EC4\u5206\u4E3A\u9759\u6001\u548C\u52A8\u6001
    java\u4E2D\u6570\u7EC4\u662F\u9759\u6001\u7684\uFF0C\u4E5F\u5C31\u662F\u6570\u7EC4\u7684\u5B58\u50A8\u662F\u8FDE\u7EED\u7684\u7A7A\u95F4
    \uFF0C\u5B9A\u4E49\u540E\u6570\u7EC4\u7684\u957F\u5EA6\u56FA\u5B9A\u4E86\u4E0D\u80FD\u6539\u53D8\uFF0C\u6309\u7D22\u5F15\u53D6\u6570\u7EC4\u5143\u7D20
    \u4F46\u662Fjs\u4E2D\u6570\u7EC4\u662F\u52A8\u6001\u7684\uFF0C\u5206\u914D\u7684\u5185\u5B58\u662F\u4E0D\u8FDE\u7EED\u7684\uFF0C\u4E3B\u8981
    \u662F\u56E0\u4E3Ajs\u4E2D\u6570\u7EC4\u5176\u5B9E\u662F\u5BF9\u8C61
    
    js\u7684\u6570\u7EC4\u540C\u65F6\u5C5E\u4E8E\u7D22\u5F15\u6570\u7EC4\u548C\u52A8\u6001\u6570\u7EC4\uFF0C\u56E0\u4E3A\u672C\u8D28\u4E0A\u5B83
    \u5C31\u662F\u4E00\u4E2Ajs\u5BF9\u8C61\uFF0C\u4F53\u73B0\u7740js\u52A8\u6001\u8BED\u8A00\u7279\u6027\u3002\u4F46js\u7684\u7D22\u5F15
    \u6570\u7EC4\u5E76\u975E\u201C\u8FDE\u7EED\u5206\u914D\u201D\u5185\u5B58\u7684\uFF0C\u56E0\u6B64\u7D22\u5F15\u65B9\u5F0F\u5E76\u4E0D\u4F1A\u5E26\u6765
    \u5F88\u9AD8\u7684\u6548\u7387\u3002\u800Cjava\u4E2D\u7684\u6570\u7EC4\u5219\u662F\u8FDE\u7EED\u5206\u914D\u5185\u5B58\u7684\u3002




</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u5173\u8054\u6570\u7EC4\u7684\u4F7F\u7528\u548C\u7B80\u4ECB" tabindex="-1"><a class="header-anchor" href="#\u5173\u8054\u6570\u7EC4\u7684\u4F7F\u7528\u548C\u7B80\u4ECB" aria-hidden="true">#</a> \u5173\u8054\u6570\u7EC4\u7684\u4F7F\u7528\u548C\u7B80\u4ECB</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>
\u7528\u6570\u5B57\u4F5C\u4E3A\u952E\u540D\u7684\u6570\u7EC4\u4E00\u822C\u53EB\u505A\u7D22\u5F15\u6570\u7EC4\u3002\u7528\u5B57\u7B26\u4E32\u8868\u793A\u952E\u7684\u6570\u7EC4\u5C31\u662F\u4E0B\u9762\u8981\u4ECB\u7ECD\u7684\u5173\u8054\u6570\u7EC4\u3002


javascript \u6570\u7EC4\u7528[]\u4E0D\u53EF\u4EE5\u58F0\u660E\u5173\u8054\u6570\u7EC4\uFF0C\u4F46\u662F\u53EF\u4EE5\u5B58\u653E\u5173\u8054\u6570\u7EC4

\u5173\u8054\u6570\u7EC4\u548C\u5E38\u89C4\u8BF4\u7684\u6570\u7EC4\u7C7B\u4F3C\uFF0C\u5B83\u5305\u542B\u6807\u91CF\u6570\u636E\uFF0C\u53EF\u7528\u7D22\u5F15\u503C\u6765\u5355\u72EC\u9009\u62E9\u8FD9\u4E9B\u6570\u636E\uFF0C\u548C\u5E38\u89C4\u6570\u7EC4\u4E0D\u540C\u7684\u662F\uFF0C \u5173\u8054\u6570\u7EC4\u7684\u7D22\u5F15\u503C\u4E0D\u662F\u975E\u8D1F\u7684\u6574\u6570\u800C\u662F\u4EFB\u610F\u7684\u6807\u91CF\u3002\u8FD9\u4E9B\u6807\u91CF\u79F0\u4E3AKeys\uFF0C\u53EF\u4EE5\u5728\u4EE5\u540E\u7528\u4E8E\u68C0\u7D22\u6570\u7EC4\u4E2D\u7684\u6570\u503C\u3002

\u5173\u8054\u6570\u7EC4\u7684\u5143\u7D20\u6CA1\u6709\u7279\u5B9A\u7684\u987A\u5E8F\uFF0C\u4F60\u53EF\u4EE5\u628A\u5B83\u4EEC\u60F3\u8C61\u4E3A\u4E00\u7EC4\u5361\u7247\u3002\u6BCF\u5F20\u5361\u7247\u4E0A\u534A\u90E8\u5206\u662F\u7D22\u5F15\u800C\u4E0B\u534A\u90E8\u5206\u662F\u6570\u503C\u3002

\u5173\u8054\u6570\u7EC4\u662FPerl\u8BED\u8A00\u4E2D\u7279\u6709\u7684\uFF0C\u5173\u8054\u6570\u7EC4\u662F\u4E00\u4E2A\u529F\u80FD\u5F3A\u5927\u7684\u6570\u7EC4\u3002\u4F7F\u7528\u5173\u8054\u6570\u7EC4\u65F6\u8981\u5728\u524D\u9762\u52A0\u4E0A%\u53F7\uFF0C\u5173\u8054\u6570\u7EC4\u7684\u683C\u5F0F\u5982:

%ARRAY=(key1,value1,key2,value2,key3,value3);

\u6BCF\u4E00\u4E2Akey\u90FD\u6709\u4E00\u4E2A\u76F8\u5BF9\u5E94\u7684\u503C(value)\u3002\u6211\u5728\u7F51\u4E0A\u627E\u5230\u7684\u3002


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_10-object\u5BF9\u8C61\u4E2D\u7684assign\u53EF\u4EE5\u5408\u5E76\u4E24\u4E2A\u5BF9\u8C61" tabindex="-1"><a class="header-anchor" href="#_10-object\u5BF9\u8C61\u4E2D\u7684assign\u53EF\u4EE5\u5408\u5E76\u4E24\u4E2A\u5BF9\u8C61" aria-hidden="true">#</a> 10.Object\u5BF9\u8C61\u4E2D\u7684assign\u53EF\u4EE5\u5408\u5E76\u4E24\u4E2A\u5BF9\u8C61</h2><p>\u5C06\u4E24\u4E2A\u5BF9\u8C61\u5408\u5E76\uFF0C\u5408\u5E76\u5BF9\u8C61\u5408\u5E76\u5230\u7B2C\u4E00\u4E2A\u5BF9\u8C61</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>    var a={name:&#39;jack&#39;};
    var b={age:10};
    Object.assign(a,b);
    console.log(a) // &#39;Object {name: &quot;jack&quot;, age: 10}&#39;



</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E3A\u4E86\u907F\u514D\u7B2C\u4E00\u4E2A\u5BF9\u8C61\u4F20\u5165\u540E\u88AB\u66F4\u6539\uFF0C\u53EF\u4EE5\u7528\u5982\u4E0B\u7684\u65B9\u6CD5</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>    
    \u4F60\u53EF\u4EE5\u4F20\u4E00\u4E2A{}\uFF0C\u4F5C\u4E3A\u51FD\u6570\u7684\u7B2C\u4E00\u4E2A\u5B9E\u53C2\uFF0C\u8FD9\u6837\u5269\u4E0B\u5BF9\u8C61\u7684\u81EA\u6709\u4E14\u53EF\u679A\u4E3E
    \u7684\u5C5E\u6027\uFF0C\u4F1A\u88AB\u62F7\u8D1D\u5230\u8FD9\u4E2A\u7A7A\u5BF9\u8C61\u4E2D\u5E76\u8FD4\u56DE\u8FD9\u4E2A\u5BF9\u8C61\uFF0C\u8FD9\u6837\u53EF\u4EE5\u907F\u514D\u4E0D\u9700\u8981
    \u7684\u4FEE\u6539\u3002
    var a={name:&#39;jack&#39;};
    var b={age:10};
    var c=Object.assign({},a,b);
    console.log(c) //  &#39;Object {name: &quot;jack&quot;, age: 10}&#39;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6CE8\u610F\uFF1A\u91CD\u590D\u51FA\u73B0\u7684\u5C5E\u6027\uFF0C\u4F1A\u88AB\u76F8\u5BF9\u4E8E\u53F3\u8FB9\u7684\u503C\u8986\u76D6\uFF0C\u56E0\u4E3A\u8BE5\u51FD\u6570\u662F\u4ECE\u5DE6\u5230\u53F3\u64CD \u4F5C\u53C2\u6570\u7684</p><p>\u5B9E\u53C2\u7684\u987A\u5E8F\u4F1A\u5F71\u54CD\u5230\u6700\u7EC8\u7684\u7ED3\u679C\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>    var a={name:&#39;jack&#39;};
    var b={name:10};
    Object.assign(a,b);
    console.log(a); // &#39;Object {name: 10}&#39;
    
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6CE8\u610F\u8BBE\u7F6E\u4E86\u53EA\u8BFB\u5C5E\u6027\u7684\u5185\u5BB9\u5C31\u4F1A\u62A5\u9519</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>    \u5F53\u7B2C\u4E00\u4E2A\u5BF9\u8C61\u4E2D\uFF0C\u5B58\u5728\u4E00\u4E2A\u53EA\u8BFB\u5C5E\u6027\uFF0C\u800C\u63A5\u4E0B\u6765\u7684\u5BF9\u8C61\u91CC\uFF0C\u4E5F\u5B58\u5728\u4E00\u4E2A\u540C
    \u540D\u7684\u5C5E\u6027\u65F6\uFF0C\u5C31\u4F1A\u4EA7\u751F\u4E00\u4E2ATypeError

    var a={name:&#39;jack&#39;};
    Object.defineProperty(a,&#39;name&#39;,{writable:false});//\u8BBE\u7F6E\u4E3A\u53EA\u8BFB
    var b={name:10};
    Object.assign(a,b);//\u62A5\u9519
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a href="#begin" id="end">\u56DE\u5230\u9876\u90E8</a></p>`,39);function q(w,P){const n=l("RouterLink");return r(),v("div",null,[e("nav",u,[e("ul",null,[e("li",null,[i(n,{to:"#javascript\u4E2D\u68C0\u6D4B\u5BF9\u8C61\u7684\u65B9\u6CD5"},{default:a(()=>[o]),_:1}),e("ul",null,[e("li",null,[i(n,{to:"#_1-typeof\u64CD\u4F5C\u7B26"},{default:a(()=>[b]),_:1})]),e("li",null,[i(n,{to:"#_2-instanceof\u64CD\u4F5C\u7B26"},{default:a(()=>[m]),_:1})]),e("li",null,[i(n,{to:"#_1-object-prototype-tostring"},{default:a(()=>[p]),_:1})]),e("li",null,[i(n,{to:"#_2-array-isarray"},{default:a(()=>[h]),_:1})])])]),e("li",null,[i(n,{to:"#_4-javascript\u4E2Dasync-await\u7684\u4F7F\u7528\u548C\u6267\u884C"},{default:a(()=>[_]),_:1})]),e("li",null,[i(n,{to:"#_5-new\u5230\u5E95\u505A\u4E86\u4EC0\u4E48"},{default:a(()=>[f]),_:1})]),e("li",null,[i(n,{to:"#_6-\u5173\u4E8Ejs\u4E2D\u7684setprototypeof\u7528\u6CD5"},{default:a(()=>[g]),_:1}),e("ul",null,[e("li",null,[i(n,{to:"#\u8865\u5145\u5173\u4E8Egetprototypeof"},{default:a(()=>[y]),_:1})])])]),e("li",null,[i(n,{to:"#_7-\u5173\u4E8E\u771F\u5B9E\u6570\u7EC4\u5B9A\u4E49\u548Cjs\u4E2D\u6570\u7EC4\u7684\u533A\u522B"},{default:a(()=>[x]),_:1}),e("ul",null,[e("li",null,[i(n,{to:"#\u5173\u4E8Ejs\u4E2D\u7684\u6570\u7EC4\u548C\u6570\u636E\u7ED3\u6784\u6570\u7EC4\u4E2D\u7684\u4F7F\u7528"},{default:a(()=>[j]),_:1})])])]),e("li",null,[i(n,{to:"#_9-\u6570\u7EC4\u5728\u7F16\u7A0B\u8BED\u8A00\u4E2D\u5E94\u7528"},{default:a(()=>[S]),_:1}),e("ul",null,[e("li",null,[i(n,{to:"#\u5173\u8054\u6570\u7EC4\u7684\u4F7F\u7528\u548C\u7B80\u4ECB"},{default:a(()=>[O]),_:1})])])]),e("li",null,[i(n,{to:"#_10-object\u5BF9\u8C61\u4E2D\u7684assign\u53EF\u4EE5\u5408\u5E76\u4E24\u4E2A\u5BF9\u8C61"},{default:a(()=>[A]),_:1})])])]),J])}var C=d(c,[["render",q],["__file","001\u4F60\u4E0D\u77E5\u9053\u7684JavaScript\u5B66\u4E60\u77E5\u8BC6\u70B9\u6C47\u603B.html.vue"]]);export{C as default};
