import{_ as t,r,o as u,c as v,a as e,b as n,w as a,e as d,d as s}from"./app.09e97e41.js";const o={},c={class:"table-of-contents"},p=s("\uFF081\uFF09\u51FA\u73B0\u95EE\u9898\uFF1ATypeError: Invalid value used as weak map key"),m=s("vuepress\u529F\u80FD\u5F15\u5165\u63D2\u4EF6\u529F\u80FD\u8BF4\u660E"),_=s("\uFF082\uFF09vuepress\u4E2D\u5168\u5C40\u94A9\u5B50\u548CUI\u7EC4\u4EF6"),h=s("\uFF083\uFF09vuepress\u4E2D\u5F15\u5165\u76F8\u5BF9\u548C\u7EDD\u5BF9\u5730\u5740\u56FE\u7247"),b=d(`<h3 id="_1-\u51FA\u73B0\u95EE\u9898-typeerror-invalid-value-used-as-weak-map-key" tabindex="-1"><a class="header-anchor" href="#_1-\u51FA\u73B0\u95EE\u9898-typeerror-invalid-value-used-as-weak-map-key" aria-hidden="true">#</a> \uFF081\uFF09\u51FA\u73B0\u95EE\u9898\uFF1ATypeError: Invalid value used as weak map key</h3><p>\u4E00\u822C\u662Fmd\u6587\u4EF6\u4E2D\u6709\u6CA1\u6709\u8BC6\u522B\u7684\u95ED\u5408\u6807\u7B7E\u3002\u6BD4\u5982\u5F3A\u884C\u5C06elementplus\u7EC4\u4EF6\u7528\u5728md\u4E2D\u6CA1\u6709\u7279\u6B8A\u5904\u7406\u3002</p><h3 id="vuepress\u529F\u80FD\u5F15\u5165\u63D2\u4EF6\u529F\u80FD\u8BF4\u660E" tabindex="-1"><a class="header-anchor" href="#vuepress\u529F\u80FD\u5F15\u5165\u63D2\u4EF6\u529F\u80FD\u8BF4\u660E" aria-hidden="true">#</a> vuepress\u529F\u80FD\u5F15\u5165\u63D2\u4EF6\u529F\u80FD\u8BF4\u660E</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>- \u5F15\u5165\u56DE\u5230\u9876\u90E8
yarn add -D @vuepress/plugin-back-to-top@next

- \u7ED9markdown\u589E\u52A0\u56FE\u6807
yarn add -D @vuepress/plugin-external-link-icon@next

- \u589E\u52A0\u8FDB\u5EA6\u6761
yarn add  -D @vuepress/plugin-nprogress@next

- \u63D0\u4F9Btoc\u529F\u80FD
yarn add -D @vuepress/plugin-toc@next

- \u70B9\u51FB\u56FE\u7247\u63D0\u4F9B\u4F38\u7F29\u529F\u80FD
yarn add -D @vuepress/plugin-medium-zoom@next

- \u5F15\u5165elementplus
clientAppEnhance.ts

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-vuepress\u4E2D\u5168\u5C40\u94A9\u5B50\u548Cui\u7EC4\u4EF6" tabindex="-1"><a class="header-anchor" href="#_2-vuepress\u4E2D\u5168\u5C40\u94A9\u5B50\u548Cui\u7EC4\u4EF6" aria-hidden="true">#</a> \uFF082\uFF09vuepress\u4E2D\u5168\u5C40\u94A9\u5B50\u548CUI\u7EC4\u4EF6</h3><ul><li>client.ts\u589E\u52A0\u5168\u5C40\u94A9\u5B50\u548C\u5168\u5C40UI\u7EC4\u4EF6 rootComponents \u662F\u4E00\u4E2A\u7EC4\u4EF6\u6570\u7EC4\uFF0C\u5B83\u4EEC\u5C06\u4F1A\u76F4\u63A5\u88AB\u653E\u7F6E\u5728\u5BA2\u6237\u7AEF Vue \u5E94\u7528\u7684\u6839\u8282\u70B9\u4E0B\u3002</li></ul>`,6),x={href:"https://v2.vuepress.vuejs.org/zh/advanced/cookbook",target:"_blank",rel:"noopener noreferrer"},k=s("\u5168\u5C40\u94A9\u5B50\u548CUI"),g=d(`<ul><li>vuepress\u4E2D\u5F15\u5165\u7EDD\u5BF9\u8DEF\u5F84\u548C\u76F8\u5173\u8DEF\u5F84</li></ul><h3 id="_3-vuepress\u4E2D\u5F15\u5165\u76F8\u5BF9\u548C\u7EDD\u5BF9\u5730\u5740\u56FE\u7247" tabindex="-1"><a class="header-anchor" href="#_3-vuepress\u4E2D\u5F15\u5165\u76F8\u5BF9\u548C\u7EDD\u5BF9\u5730\u5740\u56FE\u7247" aria-hidden="true">#</a> \uFF083\uFF09vuepress\u4E2D\u5F15\u5165\u76F8\u5BF9\u548C\u7EDD\u5BF9\u5730\u5740\u56FE\u7247</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>
[\u6307\u5357](/zh/guide/README.md)  
&lt;!-- \u76F8\u5BF9\u8DEF\u5F84 --&gt;
![\u6210\u957F](/images/home.png)

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3);function f(y,w){const i=r("RouterLink"),l=r("ExternalLinkIcon");return u(),v("div",null,[e("nav",c,[e("ul",null,[e("li",null,[n(i,{to:"#_1-\u51FA\u73B0\u95EE\u9898-typeerror-invalid-value-used-as-weak-map-key"},{default:a(()=>[p]),_:1})]),e("li",null,[n(i,{to:"#vuepress\u529F\u80FD\u5F15\u5165\u63D2\u4EF6\u529F\u80FD\u8BF4\u660E"},{default:a(()=>[m]),_:1})]),e("li",null,[n(i,{to:"#_2-vuepress\u4E2D\u5168\u5C40\u94A9\u5B50\u548Cui\u7EC4\u4EF6"},{default:a(()=>[_]),_:1})]),e("li",null,[n(i,{to:"#_3-vuepress\u4E2D\u5F15\u5165\u76F8\u5BF9\u548C\u7EDD\u5BF9\u5730\u5740\u56FE\u7247"},{default:a(()=>[h]),_:1})])])]),b,e("p",null,[e("a",x,[k,n(l)])]),g])}var I=t(o,[["render",f],["__file","001vuepress\u95EE\u9898\u6C47\u603B.html.vue"]]);export{I as default};
