import{_ as v,r as a,o as r,c as t,a as n,b as i,w as l,d as e,e as c}from"./app.b65db6a5.js";const u={},m={class:"table-of-contents"},o=e("\u63A5\u53E3\u662F\u4EC0\u4E48\uFF0C\u63A5\u53E3\u548C\u51FD\u6570\u533A\u522B"),b=e("1.\u5355\u4F8B\u6A21\u5F0F"),p=e("\uFF081\uFF09\u5355\u4F8B\u6A21\u5F0F\u4E24\u4E2A\u6761\u4EF6"),g=e("\uFF082\uFF09\u9002\u7528"),h=e("\u539F\u578B\u6A21\u5F0F"),_=e("4.\u9002\u914D\u5668\u6A21\u5F0F"),x=e("5.\u88C5\u9970\u6A21\u5F0F"),f=e("6.\u4EE3\u7406\u6A21\u5F0F"),y=e("7.\u53D1\u5E03-\u8BA2\u9605\u6A21\u5F0F"),k=e("7.JavaScript\u53D1\u5E03\u8BA2\u9605\u8005\u6A21\u5F0F\uFF08\u53E6\u4E00\u4E2A\u4F8B\u5B50\uFF09"),w=n("p",null,"[toc]",-1),I=e("\u53C2\u8003\u6587\u7AE0 1."),q={href:"https://blog.csdn.net/villainy13579/article/details/81220824",target:"_blank",rel:"noopener noreferrer"},C=e("JavaScript\u5E38\u7528\u8BBE\u8BA1\u6A21\u5F0F"),T=e("2."),E={href:"https://github.com/nyhxiaoning/blog-4",target:"_blank",rel:"noopener noreferrer"},B=e("github\u5173\u4E8E\u4E0D\u540C\u8BBE\u8BA1\u6A21\u5F0F"),V=e("3."),N={href:"https://www.runoob.com/design-pattern/factory-pattern.html",target:"_blank",rel:"noopener noreferrer"},S=e("\u8BBE\u8BA1\u6A21\u5F0F"),A=e("4."),j={href:"https://segmentfault.com/a/1190000014919700",target:"_blank",rel:"noopener noreferrer"},D=e("JavaScript \u4E2D\u5E38\u89C1\u8BBE\u8BA1\u6A21\u5F0F\u6574\u7406"),L=e("5."),M={href:"https://github.com/sunzhaoye/blog/issues/16",target:"_blank",rel:"noopener noreferrer"},O=e("github\u4E2D\u7684\u5E38\u89C1\u7684\u8BBE\u8BA1\u6A21\u5F0F\u6574\u7406"),P=c(`<h2 id="\u63A5\u53E3\u662F\u4EC0\u4E48-\u63A5\u53E3\u548C\u51FD\u6570\u533A\u522B" tabindex="-1"><a class="header-anchor" href="#\u63A5\u53E3\u662F\u4EC0\u4E48-\u63A5\u53E3\u548C\u51FD\u6570\u533A\u522B" aria-hidden="true">#</a> \u63A5\u53E3\u662F\u4EC0\u4E48\uFF0C\u63A5\u53E3\u548C\u51FD\u6570\u533A\u522B</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>
\u6211\u4EEC\u53EF\u4EE5\u5B9A\u4E49\u4E00\u4E2A\u516C\u5171\u7684\u63A5\u53E3\u7C7B: Interface\uFF0C\u63A5\u7740\u6211\u4EEC\u8003\u8651\u4E0B\u63A5\u53E3\u7C7B\u9700\u8981\u6709\u54EA\u4E9B\u6210\u5458\u548C\u65B9\u6CD5

\uFF081\uFF09\u63A5\u53E3\u662F\u4E00\u7EC4\u65B9\u6CD5\u7B7E\u540D\u7684\u96C6\u5408
\u5176\u4ED6\u5185\u7F6E\u63A5\u53E3\u7684\u8BED\u8A00\u53EF\u4EE5\u5728\u63A5\u53E3\u4E2D\u8FDB\u884C\u51FD\u6570\u58F0\u660E\uFF0C\u4ECE\u800C\u5B9A\u4E49\u4E00\u4E2A\u63A5\u53E3\uFF1B\u800C\u5728javasc
ript\u4E2D\uFF0C\u6211\u4EEC\u9700\u8981\u901A\u8FC7\u7ED9Interface\u7C7B\u589E\u52A0\u4E00\u4E2A\u6570\u7EC4\u6210\u5458\uFF0C\u4FDD\u5B58\u65B9\u6CD5\u540D\u79F0\uFF0C\u6211\u547D\u540D
\u4E3A:methods\uFF0C\u53E6\u5916\u8FD8\u6709\u4E2A\u6210\u5458:name\uFF0C\u8FD9\u4E2A\u6210\u5458\u662F\u63A5\u53E3\u540D\uFF0C\u65B9\u4FBF\u6211\u4EEC\u5FEB\u901F\u5B9A\u4F4D\u9519\u8BEF\u2014
\u6BD4\u5982\u6211\u4EEC\u7684\u5BF9\u8C61\u5230\u5E95\u662F\u6CA1\u5B9E\u73B0\u54EA\u4E2A\u63A5\u53E3\u7684\u54EA\u4E2A\u65B9\u6CD5\u3002

\uFF082\uFF09

\u4EE3\u7801\u5982\u4E0B\uFF1A
     /**
     * \u521B\u5EFA\u63A5\u53E3\u5BF9\u8C61
     * @param name \u63A5\u53E3\u540D 
     * @param methods \u63A5\u53E3\u65B9\u6CD5
     */
    var Interface = function(name,methods){
        if(arguments.length != 2){
            throw new Error(&#39;\u5FC5\u987B\u8F93\u5165\u4E24\u4E2A\u53C2\u6570,\u5F53\u524D\u4E2A\u6570&#39;+arguments.length);
        }
 
        this.name=name;
        this.methods=[];
        for(var i=0, len=methods.length; i&lt;len; i++){
            if(typeof methods[i] !== &#39;string&#39;){
                throw new Error(&#39;\u65B9\u6CD5\u540D\u53C2\u6570\u5FC5\u987B\u4E3Astring&#39;);
            }
            this.methods.push(methods[i]);
        }
    };
    /**
     * \u63A5\u53E3\u5B9E\u73B0
     * @param  object1 \u5B9E\u73B0\u63A5\u53E3\u5BF9\u8C61
     * @param  object2 \u5BF9\u5E94\u63A5\u53E3
     * @return \u5B9E\u73B0\u9519\u8BEF\u629B\u51FA\u5F02\u5E38
     */
    Interface.ensureImplements = function(object){
        if(arguments.length &lt; 2){
            throw new Error(&#39;\u5FC5\u987B\u8F93\u5165\u4E24\u4E2A\u53C2\u6570,\u5F53\u524D\u4E2A\u6570&#39; + arguments.length);
        }
        for(var i=1, len=arguments.length; i &lt; len; i++){
            var interface = arguments[i];
            if(interface.constructor != Interface){
                throw new Error(&quot;\u8BF7\u5B9E\u73B0\u63A5\u53E3&quot;);
            }
 
            for (var j = 0, methodsLen = interface.methods.length; j &lt; methodsLen; j++){
                var method = interface.methods[j];
                if(!object[method] || typeof object[method] !== &#39;function&#39;){
                    throw new Error(&quot;\u63A5\u53E3\u540D:&quot;+interface.name+&quot;\u65B9\u6CD5\u540D\uFF1A&quot;+method+&quot;\u6CA1\u627E\u5230&quot;);
                }
            };
        }
    }
 
 
    var DynamicMap = new Interface(&#39;DynamicMap&#39;,[&#39;centerOnPoint&#39;,&#39;zoom&#39;,&#39;draw&#39;]);
 
    /**
     * \u6267\u884C\u65B9\u6CD5
     * @param  \u51FD\u6570\u65B9\u6CD5
     * @return \u6267\u884C\u7ED3\u679C
     */
    function displayRoute(mapInstance){
        Interface.ensureImplements(mapInstance,DynamicMap);//\u5B9E\u73B0\u63A5\u53E3
 
        /**
         * \u8C03\u7528
         */
        mapInstance.centerOnPoint(12,34);
        mapInstance.zoom(5);
        mapInstance.draw();
    }
    /**
     * \u51FD\u6570\u65B9\u6CD5
     * @type \u5B9E\u73B0\u63A5\u53E3\u65B9\u6CD5
     */
    var a={
        centerOnPoint:function(x,y){
            console.log(x*y);
        },
        zoom:function(x){
            console.log(x);
        },
        draw:function(){
            console.log(&quot;x*y&quot;);
        }
    }
    displayRoute(a);

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_1-\u5355\u4F8B\u6A21\u5F0F" tabindex="-1"><a class="header-anchor" href="#_1-\u5355\u4F8B\u6A21\u5F0F" aria-hidden="true">#</a> 1.\u5355\u4F8B\u6A21\u5F0F</h2><h3 id="_1-\u5355\u4F8B\u6A21\u5F0F\u4E24\u4E2A\u6761\u4EF6" tabindex="-1"><a class="header-anchor" href="#_1-\u5355\u4F8B\u6A21\u5F0F\u4E24\u4E2A\u6761\u4EF6" aria-hidden="true">#</a> \uFF081\uFF09\u5355\u4F8B\u6A21\u5F0F\u4E24\u4E2A\u6761\u4EF6</h3><ul><li>\u786E\u4FDD\u53EA\u6709\u4E00\u4E2A\u5B9E\u4F8B</li><li>\u53EF\u4EE5\u5168\u5C40\u8BBF\u95EE</li></ul><h3 id="_2-\u9002\u7528" tabindex="-1"><a class="header-anchor" href="#_2-\u9002\u7528" aria-hidden="true">#</a> \uFF082\uFF09\u9002\u7528</h3><ul><li>\u9002\u7528\u4E8E\u5F39\u6846\u7684\u5B9E\u73B0, \u5168\u5C40\u7F13\u5B58</li><li>\u6570\u636E\u5E93\u5BF9\u8C61\u7684\u521B\u5EFA</li><li></li></ul><h2 id="\u539F\u578B\u6A21\u5F0F" tabindex="-1"><a class="header-anchor" href="#\u539F\u578B\u6A21\u5F0F" aria-hidden="true">#</a> \u539F\u578B\u6A21\u5F0F</h2><p>\u8865\u5145</p><h1 id="prototype\u548C-proto-\u533A\u522B" tabindex="-1"><a class="header-anchor" href="#prototype\u548C-proto-\u533A\u522B" aria-hidden="true">#</a> prototype\u548C__proto__\u533A\u522B</h1><p>\u524D\u8005\u662F\u51FD\u6570\u624D\u6709\u7684\u5C5E\u6027\uFF0C\u51C6\u786E\u7684\u8BF4\u662F\u6784\u9020\u51FD\u6570\u624D\u6709\u7684\u5C5E\u6027\u3002\u540E\u8005\u662F\u6240\u6709JavaScript\u5BF9\u8C61\uFF08\u5305\u62EC\u51FD\u6570\uFF09\u90FD\u6709\u7684\u5C5E\u6027</p><p>\u6BCF\u4E00\u4E2A\u6784\u9020\u5668\uFF08\u5373\u662F\u51FD\u6570\uFF09\u90FD\u6709\u4E00\u4E2A\u9ED8\u8BA4\u7684prototype\u5C5E\u6027\uFF0C\u6307\u5411\u81EA\u5DF1\u7684\u539F\u578B\uFF0C\u5BF9\u4E8E \u67D0\u4E9B\u5185\u5BB9\u4E2D\u8FD9\u79CD\u5C5E\u6027\u53EB\u505A__proto__\uFF0C\u8FD9\u79CD\u5C5E\u6027\u5728\u7B80\u5355\u5BF9\u8C61\u4E2D\u6BD4\u5982\u76F4\u63A5{}\u6216\u662F[] \u8FD9\u79CD\u4E2D\u4F7F\u7528</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>

\u5728\u5BF9\u8C61\u521B\u5EFA\u65F6\uFF0C\u5C31\u4F1A\u6709\u4E00\u4E9B\u9884\u5B9A\u4E49\u7684\u5C5E\u6027\uFF0C\u5176\u4E2D\u5B9A\u4E49\u51FD\u6570\u7684\u65F6\u5019\uFF0C
\u8FD9\u4E2A\u9884\u5B9A\u4E49\u5C5E\u6027\u5C31\u662Fprototype,\u8FD9\u4E2Aprototype\u662F\u4E00\u4E2A\u666E\u901A\u7684\u5BF9\u8C61\u3002

\u800C\u5B9A\u4E49\u5BF9\u8C61\u7684\u65F6\u5019\uFF0C\u5C31\u4F1A\u751F\u6210\u4E00\u4E2A__proto__\uFF0C\u8FD9\u4E2A__proto__
\u6307\u5411\u7684\u662F\u8FD9\u4E2A\u5BF9\u8C61\u7684\u6784\u9020\u51FD\u6570\u7684prototype.

\u51E1\u662F\u5BF9\u8C61\u90FD\u6709\u4E00\u4E2A__proto__\u5C5E\u6027\uFF0C\u8FD9\u4E2A\u662F\u6C38\u8FDC\u90FD\u6709\u7684
\u8FD9\u4E2A__proto__\u6307\u5411\u7684\u5C31\u662F\u4ED6\u7684\u6784\u9020\u51FD\u6570\u7684prototype 
\u800C\u8FD9\u4E2A\u51FD\u6570a\u7684prototype\u5BF9\u8C61\u7684\u6784\u9020\u51FD\u6570\u662F\u8C01\u5462\uFF1F 
\u6CA1\u9519\u5C31\u662F\u5F00\u5934\u8BF4\u5230\u7684Object.prototype\u3002
\u5BF9\u4E8E\u6240\u6709\u5BF9\u8C61\u90FD\u6709\u5173\u4E8E__proto__\u5C5E\u6027\uFF0C\u800C\u5173\u4E8E\u8FD9\u4E2A\u5C5E\u6027\uFF0C\u6C38\u8FDC\u6307\u5411\u96BE\u8FC7\u7684\u662F\u4ED6\u7684
\u6784\u9020\u51FD\u6570\uFF0C\u8FD9\u4E2A\u6784\u9020\u51FD\u6570\u5BF9\u4E8E\u6BCF\u4E00\u4E2A\u6BD4\u5982

function A(a){
		this.a = a;
}
var a = new A()

a.__proto__ = A  //\u6267\u884C\u6784\u9020\u7C7B\uFF0C
\u6309\u7167\u9053\u7406\uFF0CA\u5E94\u8BE5\u4E5F\u6709__proto__

\u90A3A.__proto__ = Function.prototype//(\u6CE8\u610FFunction\u7684\u6784\u9020\u7C7B)


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>
 function per(){
    this.getAge = function(age){
       console.log(age)
    }

 }
//\u62D3\u5C55Per\u7C7B\u7684\u65B9\u6CD5
 per.prototype.getName =function(name){
     console.log(name)
 }
//\u5229\u7528\u539F\u578B\u6A21\u5F0F\u5B9E\u73B0\u7EE7\u627F
 var a = {};//
 a.__proto__= per.prototype;
 //\u8BB0\u4F4F\u8FD9\u91CC\u7EE7\u627F\u7684\u662Fper\u7684\u4E0A\u4E00\u7EA7\u7684\u94FE\u5F0F\uFF0C\u4E5F\u5C31\u662F\u53EA\u80FD\u4F7F\u7528\u62D3\u5C55\u7684\u4E0A\u4E00\u5C42\u7684\u65B9\u6CD5\uFF0C\u56E0\u4E3A\u8FD9\u91CC\u76F8\u5F53\u4E0E\u662F\u5C06\u4E0A\u4E00\u5C42\u7684\u5F17\u96F7\u76F8\u7B49
alert(a.getAge(&quot;333&quot;));//333
alert(a.getName(&#39;3333&#39;));//undefined


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>
//TODO:\u5F88\u5947\u602A\uFF0C\u4E0D\u662F\u7EE7\u627F\u4E86\u5417\uFF1F\u600E\u4E48\u53EA\u6709getAge\u53EF\u4EE5\u7528\uFF0C\u800CgetName\u4E0D\u53EF\u4EE5\u7528\uFF0C
    \u5F53\u7136\u5728\u7B2C\u4E00\u4E2A\u6CE8\u91CA\u91CC\u9762\u5199\u6E05\u695A\u4E86\uFF0C\u6211\u4EEC\u5C06\u8FD9\u4E2A\u539F\u578B\u94FE\u5B9E\u73B0\u7EE7\u627F\u7684\u65F6\u5019\uFF0C\u6211\u4EEC\u5C06\u539F\u6765\u7684\u6784\u9020\u51FD\u6570\u4E5F\u7EE7\u627F\u4E86\u539F\u6765\u7684per\u7684\u6784\u9020\u51FD\u6570\uFF0C\u800C\u4E0D\u662F\u62D3\u5C55\u4E4B\u540E\u7684\u589E\u52A0\u7684
    
    \u6211\u4EEC\u5E94\u8BE5\u600E\u4E48\u5C06\u7EE7\u627F\u8FD9\u4E2Aper\u7684\u6240\u6709\u7684\u65B9\u6CD5\u548C\u6784\u9020\u51FD\u6570
    
    \u7C7B\u7684\u7EE7\u627F
     function per(){
        this.getAge = function(age){
           console.log(age)
        }

    }
    //\u62D3\u5C55Per\u7C7B\u7684\u65B9\u6CD5
     per.prototype.getName =function(name){
         console.log(name)
     }
    //\u5229\u7528\u539F\u578B\u6A21\u5F0F\u5B9E\u73B0\u7EE7\u627F
     var a = {};//
     //TODO:\u524D\u9762\u7684\u90FD\u6CA1\u6709\u95EE\u9898\uFF0C\u4F46\u662F\u8FD9\u91CC\u4E3A\u4EC0\u4E48\u4E0D\u80FD\u4F7F\u7528\uFF0C\u662F\u4E0D\u662F\u7EE7\u627F\u5199\u7684\u4E0D\u5BF9
     //TODO:\u786E\u5B9E\u4E0D\u5BF9\uFF0C\u9996\u5148\u4E0B\u9762\u7684\u7EE7\u627F
     
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u56E0\u4E3A\u8FD9\u4E2A\u7EE7\u627F\u53CA\u5176\u91CD\u8981\uFF0C\u6211\u4EEC\u8FD9\u91CC\u5C06\u5355\u72EC\u62FF\u51FA\u6765 \u505A\u4E00\u4E2A\u56FE</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>
graph LR
    A[per\u539F\u578B] --&gt; B[per] 
    A1[a\u539F\u578B] --- B1[a\u7A7A\u5BF9\u8C61] 
    A4[per\u539F\u578B] -- \u4F7F\u7528 a.__proto__ = per.prototype --&gt; B4[per] 
    A4[per\u539F\u578B] -- \u4F7F\u7528 a.__proto__ = per.prototype --&gt; C[a]


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5982\u679Cper\u662F\u7A7A\u5BF9\u8C61\uFF0C\u90A3\u4E48a\u5B8C\u5168\u7EE7\u627F\u4E86per\uFF1B\u4F46\u662Fper\u4E0D\u662F\u7A7A\u5BF9\u8C61\uFF0C\u76F8\u5F53\u4E8Ea\u548Cper\u90FD\u662Fper\u539F\u578B\u7684\u5B50\u7C7B\uFF0C\u800C\u8FD9\u4E2Aper\u548Ca\u4E4B\u95F4\u662F\u6CA1\u6709\u5173\u7CFB\u7684</p><p>\u6240\u4EE5\u4E0A\u9762\u53EA\u80FD\u8BA9a\u5BF9\u8C61\u627E\u5230per\u539F\u578B\u4E0A\u9762\u7684\u65B9\u6CD5\uFF0C\u4E5F\u5C31\u662F\u5C06a\u7684\u539F\u578B\u94FE\u7684\u6700\u4E0A\u6E38\u8BBE\u7F6E\u6210\u4E86per.prototype;\u4E0D\u80FD\u518D\u627E\u4E0A\u9762\u4E00\u5C42\u3002\u76F8\u5F53\u4E8Ea=per\u4E86\uFF0C</p><p><strong>\u6211\u4EEC\u5176\u5B9E\u9700\u8981\u7684\u662F\u4E0B\u9762\u8FD9\u79CD\u5173\u7CFB</strong></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>graph LR
    A[per\u539F\u578B] --&gt; B[per] 
    B3[a\u539F\u578B] --- B1[a\u7A7A\u5BF9\u8C61] 
    B[per] --&gt; B1[a\u7A7A\u5BF9\u8C61] 

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6211\u4EEC\u9700\u8981per\u548Ca\u53D1\u751F\u5173\u7CFB\uFF0C\u800C\u4E0D\u662F\u6CA1\u6709\u5173\u7CFB</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>a.prototype\u662F\u4E00\u4E2A\u7C7B\uFF0C\u539F\u578B\u6A21\u5F0F\u5C31\u662F\u4E00\u4E2A\u7C7B\uFF0C
\u90A3\u4E48\u8FD9\u4E2A a.__proto__= per.prototype;\u5C31\u4E0D\u662F\u4E0A\u9762\u7684\u5173\u7CFB\uFF0C
    \u9700\u8981a.prototype = new per();//{}\u548Ca\u7684\u5B9E\u4F8B\u5316\u51FA\u6765\u7684\u5185\u5BB9\u8FDB\u884C\u8D4B\u503C\uFF0C\u4F46\u662F
    \u8FD9\u6837\u8D4B\u503C\u4E0D\u80FD\u4FDD\u8BC1\u6240\u6709\u7684\u90FD\u662F\u4E00\u6837\uFF0C\u8FD9\u4E2A\u53EA\u662F\u9ED8\u8BA4\u521B\u5EFA\u4E86\u4E00\u4E2Aper\u7684\u5185\u5BB9\uFF0C\u4F46\u662F\u91CC\u9762\u7684\u6784\u9020\u51FD\u6570\u548C\u521B\u5EFAa\u7684\u6784\u9020\u51FD\u6570\u4E0D\u4E00\u6837\uFF0C\u6240\u4EE5\u4E0D\u80FD\u7528per\u7684\u6784\u9020\u51FD\u6570\uFF0C
    a.__proto__.constuuctor =a;
    
    


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E32\u8054\u7EE7\u627F\uFF0C\uFF08\u4E0D\u652F\u6301\u591A\u7EE7\u627F\uFF09</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>graph LR

    C[m] --&gt; D[n]
    D[n] --&gt; K[k]


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>


	/**
	 * \u4E32\u8FDE\u96C6\u6210
	 */
	function m(){
		this.showM = function(){
			alert(&quot;IM IS M&quot;)
		}
	}
	function n(){
		this.showN = function(){
			alert(&quot;IM IS n&quot;)
		}
	}	
	function k(){};
	n.prototype = new m();
	n.prototype.constructor = n;
	
	k.prototype = new n();
	k.prototype.constructor = k;
	
	var boo = new k();
	boo.showM();
	boo.showN();


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>

## \u7EE7\u627F\u548C\u805A\u5408


\u5148\u770B\u4E00\u6BB5\u7EE7\u627F\u4EE3\u7801


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>function Person(name){ this.name = name; }</p><p>function Teacher(name , book){ //\u7EE7\u627F\u7236\u7C7Bperson\u7684\u5C5E\u6027\u548C\u65B9\u6CD5 Person.call(this,name); //\u4F7F\u7528\u81EA\u5DF1\u7684\u5C5E\u6027 this.book = book; //\u5BF9\u6BD4\u4E00\u4E0B\uFF0C\u4E3A\u4EC0\u4E48\u5728\u8FD9\u91CC\u5199teacher\u7684\u65B9\u6CD5\uFF0C\u53EF\u4EE5 /* this.getBook = function(book){ return this.book = book; } */</p><p>}</p><p>//\u5F00\u59CB\u5B9E\u73B0teacher\u7EE7\u627Fperson //1.\u8F6C\u79FB\u7EE7\u627F\u539F\u578B Teacher.prototype = new Person();</p><p>//2.\u6784\u9020\u51FD\u6570\u7684\u8D4B\u503C Teacher.prototype.constructor = Teacher;</p><p>//3.\u5B9E\u9A8C\u7ED9teacher\u589E\u52A0\u4E00\u4E2A\u65B9\u6CD5,\u8FD9\u4E2A\u65F6\u5019book\u8FD9\u4E2A\u5C5E\u6027\u5DF2\u7ECF\u5728teacher\u4E0A\u9762\uFF0C\u6240\u4EE5\u76F4\u63A5\u7528 Teacher.prototype.getBook = function(){ return this.book; }</p><p>var Confucious = new Teacher(&#39;cat&#39;,&#39;rat&#39;); alert(Confucious.getBook());</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>


\u4E0A\u9762\u7684\u4EE3\u7801\u76F8\u5F53\u4E8E\u6BCF\u4E00\u6B21\u7EE7\u627F\uFF0C\u6211\u4EEC\u9700\u8981\u5199\u4E24\u884C\u7ECF\u5178\u4EE3\u7801\uFF0C\u7EE7\u627F\u539F\u578B\u548C\u6784\u9020\u51FD\u6570\u8D4B\u503C
\u6211\u4EEC\u53EF\u4EE5\u5B9E\u73B0\u4E00\u4E2A\u51FD\u6570

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><pre><code>//subClass\u5B50\u7C7B\uFF0CsuperClass\u7236\u7C7B
function  extend(subClass,superClass){
    
    //\u5B50\u7C7B\u7684\u539F\u578B\u7C7B\u7B49\u4E8E\u7236\u7C7B\u7684\u539F\u578B\u5C5E\u6027
    //1.\u521D\u59CB\u5316\u4E2D\u95F4\u7A7A\u5BF9\u8C61\uFF0C\u7528\u6765\u8F6C\u6362\u7236\u7C7B\u5173\u7CFB
    var F = funtion(){};
    F.prototype = superClass.prototype;
    //\u4E3A\u4EC0\u4E48\u8FD9\u4E48\u5199\uFF0C\u4E3A\u4E86\u7701\u53BBcall\u5728\u7EE7\u627F\u7684\u65F6\u5019\uFF0C\u5C06this\u7684\u6307\u5411\u521B\u5EFA\u7ED9
    \u4E34\u65F6\u7684\u5BF9\u8C61this
    
    
    //\u8BA9\u5B50\u7C7B\u7EE7\u627FF
    subclass.prototype = new F();
    sunClass.prototype.constructor = subClass;
    
    //\u4E3A\u5B50\u7C7B\u589E\u52A0\u7236\u7C7B\u7684\u5C5E\u6027superClass,\u5176\u5B9E\u662F\u6A21\u62DFcall
    subCalss.superClass = superClass.prototype;
    
    //4.\u589E\u52A0\u4E00\u4E2A\u4FDD\u9669\uFF0C\u5C31\u7B97\u539F\u578B\u7C7B\u662F\u8D85\u7C7B\uFF0Cobject\uFF0C\u4E5F\u4F1A\u628A\u6784\u9020\u51FD\u6570\u7684
    \u7EA7\u522B\u5C06\u4E0B\u6765
    
    
    
    
}
</code></pre><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>






## 2.\u5DE5\u5382\u6A21\u5F0F

\u5DE5\u5382\u6A21\u5F0F\u5206\u4E3A\u597D\u51E0\u79CD\uFF0C\u8FD9\u91CC\u5C31\u4E0D\u4E00\u4E00\u8BB2\u89E3\u4E86\uFF0C\u4EE5\u4E0B\u662F\u4E00\u4E2A\u7B80\u5355\u5DE5\u5382\u6A21\u5F0F\u7684\u4F8B\u5B50

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>class Man { constructor(name) { this.name = name } alertName() { alert(this.name) } }</p><p>class Factory { static create(name) { return new Man(name) } }</p><p>Factory.create(&#39;yck&#39;).alertName()</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>
\u5F53\u7136\u5DE5\u5382\u6A21\u5F0F\u5E76\u4E0D\u4EC5\u4EC5\u662F\u7528\u6765 new \u51FA\u5B9E\u4F8B\u3002

\u53EF\u4EE5\u60F3\u8C61\u4E00\u4E2A\u573A\u666F\u3002\u5047\u8BBE\u6709\u4E00\u4EFD\u5F88\u590D\u6742\u7684\u4EE3\u7801\u9700\u8981\u7528\u6237\u53BB\u8C03\u7528\uFF0C\u4F46\u662F\u7528\u6237\u5E76\u4E0D\u5173\u5FC3\u8FD9\u4E9B\u590D\u6742\u7684\u4EE3\u7801\uFF0C\u53EA\u9700\u8981\u4F60\u63D0\u4F9B\u7ED9\u6211\u4E00\u4E2A\u63A5\u53E3\u53BB\u8C03\u7528\uFF0C\u7528\u6237\u53EA\u8D1F\u8D23\u4F20\u9012\u9700\u8981\u7684\u53C2\u6570\uFF0C\u81F3\u4E8E\u8FD9\u4E9B\u53C2\u6570\u600E\u4E48\u4F7F\u7528\uFF0C\u5185\u90E8\u6709\u4EC0\u4E48\u903B\u8F91\u662F\u4E0D\u5173\u5FC3\u7684\uFF0C\u53EA\u9700\u8981\u4F60\u6700\u540E\u8FD4\u56DE\u6211\u4E00\u4E2A\u5B9E\u4F8B\u3002\u8FD9\u4E2A\u6784\u9020\u8FC7\u7A0B\u5C31\u662F\u5DE5\u5382\u3002

\u5DE5\u5382\u8D77\u5230\u7684\u4F5C\u7528\u5C31\u662F\u9690\u85CF\u4E86\u521B\u5EFA\u5B9E\u4F8B\u7684\u590D\u6742\u5EA6\uFF0C\u53EA\u9700\u8981\u63D0\u4F9B\u4E00\u4E2A\u63A5\u53E3\uFF0C\u7B80\u5355\u6E05\u6670\u3002

\u5728 Vue \u6E90\u7801\u4E2D\uFF0C\u4F60\u4E5F\u53EF\u4EE5\u770B\u5230\u5DE5\u5382\u6A21\u5F0F\u7684\u4F7F\u7528\uFF0C\u6BD4\u5982\u521B\u5EFA\u5F02\u6B65\u7EC4\u4EF6


export function createComponent (
  Ctor: Class&lt;Component&gt; | Function | Object | void,
  data: ?VNodeData,
  context: Component,
  children: ?Array&lt;VNode&gt;,
  tag?: string
): VNode | Array&lt;VNode&gt; | void {
    
    // \u903B\u8F91\u5904\u7406...
  
  const vnode = new VNode(
    \`vue-component-\${Ctor.cid}\${name ? \`-\${name}\` : &#39;&#39;}\`,
    data, undefined, undefined, undefined, context,
    { Ctor, propsData, listeners, tag, children },
    asyncFactory
  )

  return vnode
}
\u5728\u4E0A\u8FF0\u4EE3\u7801\u4E2D\uFF0C\u6211\u4EEC\u53EF\u4EE5\u770B\u5230\u6211\u4EEC\u53EA\u9700\u8981\u8C03\u7528 createComponent \u4F20\u5165\u53C2\u6570\u5C31\u80FD\u521B\u5EFA\u4E00\u4E2A\u7EC4\u4EF6\u5B9E\u4F8B\uFF0C\u4F46\u662F\u521B\u5EFA\u8FD9\u4E2A\u5B9E\u4F8B\u662F\u5F88\u590D\u6742\u7684\u4E00\u4E2A\u8FC7\u7A0B\uFF0C\u5DE5\u5382\u5E2E\u52A9\u6211\u4EEC\u9690\u85CF\u4E86\u8FD9\u4E2A\u590D\u6742\u7684\u8FC7\u7A0B\uFF0C\u53EA\u9700\u8981\u4E00\u53E5\u4EE3\u7801\u8C03\u7528\u5C31\u80FD\u5B9E\u73B0\u529F\u80FD\u3002

## 3.\u5355\u4F8B\u6A21\u5F0F

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5355\u4F8B\u6A21\u5F0F\u5F88\u5E38\u7528\uFF0C\u6BD4\u5982\u5168\u5C40\u7F13\u5B58\u3001\u5168\u5C40\u72B6\u6001\u7BA1\u7406\u7B49\u7B49\u8FD9\u4E9B\u53EA\u9700\u8981\u4E00\u4E2A\u5BF9\u8C61\uFF0C\u5C31\u53EF\u4EE5\u4F7F\u7528\u5355\u4F8B\u6A21\u5F0F\u3002</p><p>\u5355\u4F8B\u6A21\u5F0F\u7684\u6838\u5FC3\u5C31\u662F\u4FDD\u8BC1\u5168\u5C40\u53EA\u6709\u4E00\u4E2A\u5BF9\u8C61\u53EF\u4EE5\u8BBF\u95EE\u3002\u56E0\u4E3A JS \u662F\u95E8\u65E0\u7C7B\u7684\u8BED\u8A00\uFF0C\u6240\u4EE5\u522B\u7684\u8BED\u8A00\u5B9E\u73B0\u5355\u4F8B\u7684\u65B9\u5F0F\u5E76\u4E0D\u80FD\u5957\u5165 JS \u4E2D\uFF0C\u6211\u4EEC\u53EA\u9700\u8981\u7528\u4E00\u4E2A\u53D8\u91CF\u786E\u4FDD\u5B9E\u4F8B\u53EA\u521B\u5EFA\u4E00\u6B21\u5C31\u884C\uFF0C\u4EE5\u4E0B\u662F\u5982\u4F55\u5B9E\u73B0\u5355\u4F8B\u6A21\u5F0F\u7684\u4F8B\u5B50</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>


class Singleton {
  constructor() {}
}

Singleton.getInstance = (function() {
  let instance
  return function() {
    if (!instance) {
      instance = new Singleton()
    }
    return instance
  }
})()

let s1 = Singleton.getInstance()
let s2 = Singleton.getInstance()
console.log(s1 === s2) // true
\u5728 Vuex \u6E90\u7801\u4E2D\uFF0C\u4F60\u4E5F\u53EF\u4EE5\u770B\u5230\u5355\u4F8B\u6A21\u5F0F\u7684\u4F7F\u7528\uFF0C\u867D\u7136\u5B83\u7684\u5B9E\u73B0\u65B9\u5F0F\u4E0D\u5927\u4E00\u6837\uFF0C\u901A\u8FC7\u4E00\u4E2A\u5916\u90E8\u53D8\u91CF\u6765\u63A7\u5236\u53EA\u5B89\u88C5\u4E00\u6B21 Vuex

let Vue // bind on install

export function install (_Vue) {
  if (Vue &amp;&amp; _Vue === Vue) {
    // \u5982\u679C\u53D1\u73B0 Vue \u6709\u503C\uFF0C\u5C31\u4E0D\u91CD\u65B0\u521B\u5EFA\u5B9E\u4F8B\u4E86
    return
  }
  Vue = _Vue
  applyMixin(Vue)
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4-\u9002\u914D\u5668\u6A21\u5F0F" tabindex="-1"><a class="header-anchor" href="#_4-\u9002\u914D\u5668\u6A21\u5F0F" aria-hidden="true">#</a> 4.\u9002\u914D\u5668\u6A21\u5F0F</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>
\u9002\u914D\u5668\u7528\u6765\u89E3\u51B3\u4E24\u4E2A\u63A5\u53E3\u4E0D\u517C\u5BB9\u7684\u60C5\u51B5\uFF0C\u4E0D\u9700\u8981\u6539\u53D8\u5DF2\u6709\u7684\u63A5\u53E3\uFF0C\u901A\u8FC7\u5305\u88C5\u4E00\u5C42\u7684\u65B9\u5F0F\u5B9E\u73B0\u4E24\u4E2A\u63A5\u53E3\u7684\u6B63\u5E38\u534F\u4F5C\u3002

\u4EE5\u4E0B\u662F\u5982\u4F55\u5B9E\u73B0\u9002\u914D\u5668\u6A21\u5F0F\u7684\u4F8B\u5B50

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>
class Plug {
  getName() {
    return &#39;\u6E2F\u7248\u63D2\u5934&#39;
  }
}

class Target {
  constructor() {
    this.plug = new Plug()
  }
  getName() {
    return this.plug.getName() + &#39; \u9002\u914D\u5668\u8F6C\u4E8C\u811A\u63D2\u5934&#39;
  }
}

let target = new Target()
target.getName() // \u6E2F\u7248\u63D2\u5934 \u9002\u914D\u5668\u8F6C\u4E8C\u811A\u63D2\u5934

\u5728 Vue \u4E2D\uFF0C\u6211\u4EEC\u5176\u5B9E\u7ECF\u5E38\u4F7F\u7528\u5230\u9002\u914D\u5668\u6A21\u5F0F\u3002\u6BD4\u5982\u7236\u7EC4\u4EF6\u4F20\u9012\u7ED9\u5B50\u7EC4\u4EF6\u4E00\u4E2A\u65F6\u95F4\u6233\u5C5E\u6027\uFF0C\u7EC4\u4EF6\u5185\u90E8\u9700\u8981\u5C06\u65F6\u95F4\u6233\u8F6C\u4E3A\u6B63\u5E38\u7684\u65E5\u671F\u663E\u793A\uFF0C\u4E00\u822C\u4F1A\u4F7F\u7528 computed \u6765\u505A\u8F6C\u6362\u8FD9\u4EF6\u4E8B\u60C5\uFF0C\u8FD9\u4E2A\u8FC7\u7A0B\u5C31\u4F7F\u7528\u5230\u4E86\u9002\u914D\u5668\u6A21\u5F0F\u3002

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_5-\u88C5\u9970\u6A21\u5F0F" tabindex="-1"><a class="header-anchor" href="#_5-\u88C5\u9970\u6A21\u5F0F" aria-hidden="true">#</a> 5.\u88C5\u9970\u6A21\u5F0F</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>
\u88C5\u9970\u6A21\u5F0F\u4E0D\u9700\u8981\u6539\u53D8\u5DF2\u6709\u7684\u63A5\u53E3\uFF0C\u4F5C\u7528\u662F\u7ED9\u5BF9\u8C61\u6DFB\u52A0\u529F\u80FD\u3002\u5C31\u50CF\u6211\u4EEC\u7ECF\u5E38\u9700\u8981\u7ED9\u624B\u673A\u6234\u4E2A\u4FDD\u62A4\u5957\u9632\u6454\u4E00\u6837\uFF0C\u4E0D\u6539\u53D8\u624B\u673A\u81EA\u8EAB\uFF0C\u7ED9\u624B\u673A\u6DFB\u52A0\u4E86\u4FDD\u62A4\u5957\u63D0\u4F9B\u9632\u6454\u529F\u80FD\u3002


### \u7528\u6237\u9700\u6C42\u4F8B\u5B50
\u88C5\u9970\u8005\u6A21\u5F0F\u6982\u8FF0

\u3000\u3000\u5728\u4E0D\u6539\u53D8\u539F\u5BF9\u8C61\u7684\u57FA\u7840\u4E0A\uFF0C\u901A\u8FC7\u5BF9\u5176\u8FDB\u884C\u5305\u88C5\u62D3\u5C55\uFF08\u6DFB\u52A0\u5C5E\u6027\u6216\u8005\u65B9\u6CD5\uFF09\u4F7F\u539F\u6709\u5BF9\u8C61\u53EF\u4EE5\u6EE1\u8DB3\u7528\u6237\u66F4\u590D\u6742\u7684\u9700\u6C42

**\u5B9E\u9645\u9700\u6C42**

\u3000\u3000\u5728\u5DF2\u6709\u7684\u4EE3\u7801\u57FA\u7840\u4E0A\uFF0C\u4E3A\u6BCF\u4E2A\u8868\u5355\u4E2D\u7684input\u9ED8\u8BA4\u8F93\u5165\u6846\u4E0A\u8FB9\u663E\u793A\u4E00\u884C\u63D0\u793A\u6587\u6848\uFF0C\u5F53\u7528\u6237\u70B9\u51FB\u8F93\u5165\u6846\u65F6\u6587\u6848\u6D88\u5931
\u3000\u3000

**\u57FA\u7840**\u3000
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>
\u539F\u6709\u4EE3\u7801\uFF1A

var telInput = document.getElementById(&#39;tel_input&#39;);
var telWarnText = document.getElementById(&#39;tel_warn_text&#39;);
input.onclick = function(){
  telWarnText.style.display = &#39;inline-block&#39;;  
}

\u7B2C\u4E00\u6B21\u6539\u8FDB\u540E\u7684\u4EE3\u7801\uFF1A


var telInput = document.getElementById(&#39;tel_input&#39;);
var telWarnText = document.getElementById(&#39;tel_warn_text&#39;);
var telDemoText = document.getElementById(&#39;tel_demo_text&#39;);
input.onclick = function(){
  telWarnText.style.display = &#39;inline-block&#39;;  
  telDemoText.style.display = &#39;none&#39;;  
}


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>\u4F18\u5316\u7248</strong></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>
var decorator = function(input, fn) {
    // \u83B7\u53D6\u4E8B\u4EF6\u6E90
    var input = document.getElementById(input);
    // \u82E5\u4E8B\u4EF6\u6E90\u5DF2\u7ED1\u5B9A\u4E8B\u4EF6
    if(typeof input.onclick === &#39;function&#39;) {
        // \u7F13\u5B58\u4E8B\u4EF6\u6E90\u539F\u6709\u56DE\u8C03\u51FD\u6570
        var oldClickFn = input.onclick;
        // \u4E3A\u4E8B\u4EF6\u6E90\u5B9A\u4E49\u65B0\u7684\u4E8B\u4EF6
        input.onclick = function() {
            // \u4E8B\u4EF6\u6E90\u539F\u6709\u56DE\u8C03\u51FD\u6570
            oldClcikFn();
            // \u6267\u884C\u4E8B\u4EF6\u6E90\u65B0\u589E\u56DE\u8C03\u51FD\u6570
            fn();
        }
    }else{
        // \u4E8B\u4EF6\u6E90\u672A\u7ED1\u5B9A\u4E8B\u4EF6\uFF0C\u76F4\u63A5\u4E3A\u4E8B\u4EF6\u6E90\u6DFB\u52A0\u65B0\u589E\u56DE\u8C03\u51FD\u6570
        input.onclick = fn;
    }
}


\u6DFB\u52A0\u65B0\u529F\u80FD

// \u7535\u8BDD\u8F93\u5165\u6846\u529F\u80FD\u88C5\u9970
decorator(&#39;tel_input&#39;, function(){
    document.getElementById(&#39;tel_demo_text&#39;).style.display = &#39;none&#39;;
})

// \u59D3\u540D\u8F93\u5165\u6846\u529F\u80FD\u88C5\u9970
decorator(&#39;name_input&#39;, function(){
    document.getElementById(&#39;tel_demo_text&#39;).style.display = &#39;none&#39;;
})


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4EE5\u4E0B\u662F\u5982\u4F55\u5B9E\u73B0\u88C5\u9970\u6A21\u5F0F\u7684\u4F8B\u5B50\uFF0C\u4F7F\u7528\u4E86 ES7 \u4E2D\u7684\u88C5\u9970\u5668\u8BED\u6CD5</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>
function readonly(target, key, descriptor) {
  descriptor.writable = false
  return descriptor
}

class Test {
  @readonly
  name = &#39;yck&#39;
}

let t = new Test()

t.yck = &#39;111&#39; // \u4E0D\u53EF\u4FEE\u6539
\u5728 React \u4E2D\uFF0C\u88C5\u9970\u6A21\u5F0F\u5176\u5B9E\u968F\u5904\u53EF\u89C1

import { connect } from &#39;react-redux&#39;
class MyComponent extends React.Component {
    // ...
}
export default connect(mapStateToProps)(MyComponent)

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_6-\u4EE3\u7406\u6A21\u5F0F" tabindex="-1"><a class="header-anchor" href="#_6-\u4EE3\u7406\u6A21\u5F0F" aria-hidden="true">#</a> 6.\u4EE3\u7406\u6A21\u5F0F</h2><p>\u4EE3\u7406\u662F\u4E3A\u4E86\u63A7\u5236\u5BF9\u5BF9\u8C61\u7684\u8BBF\u95EE\uFF0C\u4E0D\u8BA9\u5916\u90E8\u76F4\u63A5\u8BBF\u95EE\u5230\u5BF9\u8C61\u3002 \u5728\u73B0\u5B9E\u751F\u6D3B\u4E2D\uFF0C\u4E5F\u6709\u5F88\u591A\u4EE3\u7406\u7684\u573A\u666F\u3002\u6BD4\u5982\u4F60\u9700\u8981\u4E70\u4E00\u4EF6\u56FD\u5916\u7684\u4EA7\u54C1\uFF0C\u8FD9\u65F6\u5019\u4F60\u53EF\u4EE5\u901A\u8FC7\u4EE3\u8D2D\u6765\u8D2D\u4E70\u4EA7\u54C1\u3002</p><p>\u5728\u5B9E\u9645\u4EE3\u7801\u4E2D\u5176\u5B9E\u4EE3\u7406\u7684\u573A\u666F\u5F88\u591A\uFF0C\u4E5F\u5C31\u4E0D\u4E3E\u6846\u67B6\u4E2D\u7684\u4F8B\u5B50\u4E86\uFF0C\u6BD4\u5982\u4E8B\u4EF6\u4EE3\u7406\u5C31\u7528\u5230\u4E86\u4EE3\u7406\u6A21\u5F0F\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>
&lt;ul id=&quot;ul&quot;&gt;
    &lt;li&gt;1&lt;/li&gt;
    &lt;li&gt;2&lt;/li&gt;
    &lt;li&gt;3&lt;/li&gt;
    &lt;li&gt;4&lt;/li&gt;
    &lt;li&gt;5&lt;/li&gt;
&lt;/ul&gt;
&lt;script&gt;
    let ul = document.querySelector(&#39;#ul&#39;)
    ul.addEventListener(&#39;click&#39;, (event) =&gt; {
        console.log(event.target);
    })
&lt;/script&gt;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u56E0\u4E3A\u5B58\u5728\u592A\u591A\u7684 li\uFF0C\u4E0D\u53EF\u80FD\u6BCF\u4E2A\u90FD\u53BB\u7ED1\u5B9A\u4E8B\u4EF6\u3002\u8FD9\u65F6\u5019\u53EF\u4EE5\u901A\u8FC7\u7ED9\u7236\u8282\u70B9\u7ED1\u5B9A\u4E00\u4E2A\u4E8B\u4EF6\uFF0C\u8BA9\u7236\u8282\u70B9\u4F5C\u4E3A\u4EE3\u7406\u53BB\u62FF\u5230\u771F\u5B9E\u70B9\u51FB\u7684\u8282\u70B9\u3002</p><h2 id="_7-\u53D1\u5E03-\u8BA2\u9605\u6A21\u5F0F" tabindex="-1"><a class="header-anchor" href="#_7-\u53D1\u5E03-\u8BA2\u9605\u6A21\u5F0F" aria-hidden="true">#</a> 7.\u53D1\u5E03-\u8BA2\u9605\u6A21\u5F0F</h2><p>\u53D1\u5E03-\u8BA2\u9605\u6A21\u5F0F\u4E5F\u53EB\u505A\u89C2\u5BDF\u8005\u6A21\u5F0F\u3002\u901A\u8FC7\u4E00\u5BF9\u4E00\u6216\u8005\u4E00\u5BF9\u591A\u7684\u4F9D\u8D56\u5173\u7CFB\uFF0C\u5F53\u5BF9\u8C61\u53D1\u751F\u6539\u53D8\u65F6\uFF0C\u8BA2\u9605\u65B9\u90FD\u4F1A\u6536\u5230\u901A\u77E5\u3002\u5728\u73B0\u5B9E\u751F\u6D3B\u4E2D\uFF0C\u4E5F\u6709\u5F88\u591A\u7C7B\u4F3C\u573A\u666F\uFF0C\u6BD4\u5982\u6211\u9700\u8981\u5728\u8D2D\u7269\u7F51\u7AD9\u4E0A\u8D2D\u4E70\u4E00\u4E2A\u4EA7\u54C1\uFF0C\u4F46\u662F\u53D1\u73B0\u8BE5\u4EA7\u54C1\u76EE\u524D\u5904\u4E8E\u7F3A\u8D27\u72B6\u6001\uFF0C\u8FD9\u65F6\u5019\u6211\u53EF\u4EE5\u70B9\u51FB\u6709\u8D27\u901A\u77E5\u7684\u6309\u94AE\uFF0C\u8BA9\u7F51\u7AD9\u5728\u4EA7\u54C1\u6709\u8D27\u7684\u65F6\u5019\u901A\u8FC7\u77ED\u4FE1\u901A\u77E5\u6211\u3002</p><p>\u5728\u5B9E\u9645\u4EE3\u7801\u4E2D\u5176\u5B9E\u53D1\u5E03-\u8BA2\u9605\u6A21\u5F0F\u4E5F\u5F88\u5E38\u89C1\uFF0C\u6BD4\u5982\u6211\u4EEC\u70B9\u51FB\u4E00\u4E2A\u6309\u94AE\u89E6\u53D1\u4E86\u70B9\u51FB\u4E8B\u4EF6\u5C31\u662F\u4F7F\u7528\u4E86\u8BE5\u6A21\u5F0F</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>
&lt;ul id=&quot;ul&quot;&gt;&lt;/ul&gt;
&lt;script&gt;
    let ul = document.querySelector(&#39;#ul&#39;)
    ul.addEventListener(&#39;click&#39;, (event) =&gt; {
        console.log(event.target);
    })
&lt;/script&gt;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5728 Vue \u4E2D\uFF0C\u5982\u4F55\u5B9E\u73B0\u54CD\u5E94\u5F0F\u4E5F\u662F\u4F7F\u7528\u4E86\u8BE5\u6A21\u5F0F\u3002\u5BF9\u4E8E\u9700\u8981\u5B9E\u73B0\u54CD\u5E94\u5F0F\u7684\u5BF9\u8C61\u6765\u8BF4\uFF0C\u5728 get \u7684\u65F6\u5019\u4F1A\u8FDB\u884C\u4F9D\u8D56\u6536\u96C6\uFF0C\u5F53\u6539\u53D8\u4E86\u5BF9\u8C61\u7684\u5C5E\u6027\u65F6\uFF0C\u5C31\u4F1A\u89E6\u53D1\u6D3E\u53D1\u66F4\u65B0\u3002</p><p>\u5916\u89C2\u6A21\u5F0F \u5916\u89C2\u6A21\u5F0F\u63D0\u4F9B\u4E86\u4E00\u4E2A\u63A5\u53E3\uFF0C\u9690\u85CF\u4E86\u5185\u90E8\u7684\u903B\u8F91\uFF0C\u66F4\u52A0\u65B9\u4FBF\u5916\u90E8\u8C03\u7528\u3002</p><p>\u4E3E\u4E2A\u4F8B\u5B50\u6765\u8BF4\uFF0C\u6211\u4EEC\u73B0\u5728\u9700\u8981\u5B9E\u73B0\u4E00\u4E2A\u517C\u5BB9\u591A\u79CD\u6D4F\u89C8\u5668\u7684\u6DFB\u52A0\u4E8B\u4EF6\u65B9\u6CD5</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>
function addEvent(elm, evType, fn, useCapture) {
  if (elm.addEventListener) {
    elm.addEventListener(evType, fn, useCapture)
    return true
  } else if (elm.attachEvent) {
    var r = elm.attachEvent(&quot;on&quot; + evType, fn)
    return r
  } else {
    elm[&quot;on&quot; + evType] = fn
  }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5BF9\u4E8E\u4E0D\u540C\u7684\u6D4F\u89C8\u5668\uFF0C\u6DFB\u52A0\u4E8B\u4EF6\u7684\u65B9\u5F0F\u53EF\u80FD\u4F1A\u5B58\u5728\u517C\u5BB9\u95EE\u9898\u3002\u5982\u679C\u6BCF\u6B21\u90FD\u9700\u8981\u53BB\u8FD9\u6837\u5199\u4E00\u904D\u7684\u8BDD\u80AF\u5B9A\u662F\u4E0D\u80FD\u63A5\u53D7\u7684\uFF0C\u6240\u4EE5\u6211\u4EEC\u5C06\u8FD9\u4E9B\u5224\u65AD\u903B\u8F91\u7EDF\u4E00\u5C01\u88C5\u5728\u4E00\u4E2A\u63A5\u53E3\u4E2D\uFF0C\u5916\u90E8\u9700\u8981\u6DFB\u52A0\u4E8B\u4EF6\u53EA\u9700\u8981\u8C03\u7528 addEvent \u5373\u53EF\u3002</p><h2 id="_7-javascript\u53D1\u5E03\u8BA2\u9605\u8005\u6A21\u5F0F-\u53E6\u4E00\u4E2A\u4F8B\u5B50" tabindex="-1"><a class="header-anchor" href="#_7-javascript\u53D1\u5E03\u8BA2\u9605\u8005\u6A21\u5F0F-\u53E6\u4E00\u4E2A\u4F8B\u5B50" aria-hidden="true">#</a> 7.JavaScript\u53D1\u5E03\u8BA2\u9605\u8005\u6A21\u5F0F\uFF08\u53E6\u4E00\u4E2A\u4F8B\u5B50\uFF09</h2><p>\u5047\u5982\u4F60\u8981\u5EFA\u7ACB\u4E00\u4E2A\u7F51\u7AD9\uFF0C\u901A\u5E38\u6765\u8BF4\u4F1A\u6709\u8BB8\u591A\u7528\u6237\u3002\u4F60\u4F5C\u4E3A\u4E00\u540D\u7BA1\u7406\u8005\uFF0C\u6709\u65F6\u5019\u9700\u8981\u5C06\u91CD\u8981\u7684\u6D88\u606F\u53D1\u5E03\u7ED9\u4F60\u7684\u7528\u6237\u3002\u5728\u8F6F\u4EF6\u5F00\u53D1\u9886\u57DF\uFF0C\u5F00\u53D1\u6B64\u529F\u80FD\u5F80\u5F80\u7528\u5230\u53D1\u5E03\u8BA2\u9605\u8005\u6A21\u5F0F\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>    1.\u5B9A\u4E49\u53D1\u5E03\u8005\u7C7B\uFF1A
    \u53D1\u5E03\u8005\u7684\u6700\u57FA\u672C\u7684\u4E24\u4E2A\u5C5E\u6027\uFF1A\u53D1\u9001\u7684\u6D88\u606F\u548C\u53D1\u9001\u8005
    function Publisher() {
        this.observers =[]; // \u5B58\u50A8\u9700\u8981\u53D1\u5E03\u6D88\u606F\u7684\u4EBA
        this.state=&quot;hello&quot;  // \u53D1\u9001\u7684\u6D88\u606F
    }
    
    //TODO:
    //\u4E00\u4E2APublisher\u8FD8\u9700\u8981\u6709\u80FD\u591F\u63A5\u7EB3\u65B0\u7684\u8BA2\u9605\u6D88\u606F\u7684\u4EBA\u7684\u529F\u80FD\uFF0C\u6216\u8005\u5220\u9664\u67D0\u4E2A\u8BA2\u9605\u8005\u7684\u529F\u80FD\uFF0C\u540C\u65F6\u9700\u8981\u80FD\u591F\u5C06\u6D88\u606F\u53D1\u9001\u51FA\u53BB\u7684\u529F\u80FD
    var pubsub =(()=&gt;
    var topics = {};
    function subscribe(topic){
    if(!topics[topic]){
        topics[topic]= [];
    }
    topics[topic] = function (a){
        console. log(a)
    }
    function publish(topic,...args
    if(let topics[topic])
    
        return;
    for (let params of args){
        topics [topic](params)
        }
    }
    return {
        subscribe,
        publish
    })()
    pubsub.subscribe(&quot;test&quot;);//\u8BA2\u9605\u8005A\u8BA2\u9605\u4E86test\u4E8B\u4EF6
    pubsub.pub1ish(test&#39;,123&#39;,&quot;HH&quot;);//123H(\u53D1\u5E03\u8005B\u53D1\u5E03\u4E86test\u4E8B\u4EF6)

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,71);function F(R,J){const s=a("RouterLink"),d=a("ExternalLinkIcon");return r(),t("div",null,[n("nav",m,[n("ul",null,[n("li",null,[i(s,{to:"#\u63A5\u53E3\u662F\u4EC0\u4E48-\u63A5\u53E3\u548C\u51FD\u6570\u533A\u522B"},{default:l(()=>[o]),_:1})]),n("li",null,[i(s,{to:"#_1-\u5355\u4F8B\u6A21\u5F0F"},{default:l(()=>[b]),_:1}),n("ul",null,[n("li",null,[i(s,{to:"#_1-\u5355\u4F8B\u6A21\u5F0F\u4E24\u4E2A\u6761\u4EF6"},{default:l(()=>[p]),_:1})]),n("li",null,[i(s,{to:"#_2-\u9002\u7528"},{default:l(()=>[g]),_:1})])])]),n("li",null,[i(s,{to:"#\u539F\u578B\u6A21\u5F0F"},{default:l(()=>[h]),_:1})]),n("li",null,[i(s,{to:"#_4-\u9002\u914D\u5668\u6A21\u5F0F"},{default:l(()=>[_]),_:1})]),n("li",null,[i(s,{to:"#_5-\u88C5\u9970\u6A21\u5F0F"},{default:l(()=>[x]),_:1})]),n("li",null,[i(s,{to:"#_6-\u4EE3\u7406\u6A21\u5F0F"},{default:l(()=>[f]),_:1})]),n("li",null,[i(s,{to:"#_7-\u53D1\u5E03-\u8BA2\u9605\u6A21\u5F0F"},{default:l(()=>[y]),_:1})]),n("li",null,[i(s,{to:"#_7-javascript\u53D1\u5E03\u8BA2\u9605\u8005\u6A21\u5F0F-\u53E6\u4E00\u4E2A\u4F8B\u5B50"},{default:l(()=>[k]),_:1})])])]),w,n("p",null,[I,n("a",q,[C,i(d)])]),n("p",null,[T,n("a",E,[B,i(d)])]),n("p",null,[V,n("a",N,[S,i(d)])]),n("p",null,[A,n("a",j,[D,i(d)])]),n("p",null,[L,n("a",M,[O,i(d)])]),P])}var W=v(u,[["render",F],["__file","001\u8BBE\u8BA1\u6A21\u5F0F\u5B66\u4E60\u8BB0\u5F55\u5927\u5168\u57FA\u7840\u5165\u95E8\u7248\u672C.html.vue"]]);export{W as default};
