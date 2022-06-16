import{_ as r,r as d,o as u,c as v,a as e,b as i,w as l,e as t,d as n}from"./app.9be20fcb.js";const c={},o={class:"table-of-contents"},m=n("1.setup name\u589E\u5F3A"),b=n("vite\u6846\u67B6\u589E\u52A0\u4E00\u4E2A\u63D2\u4EF6\uFF0C\u89E3\u51B3setup\u7684\u540D\u79F0\u95EE\u9898"),p=n("2.\u914D\u7F6Eapi\u81EA\u52A8\u5BFC\u5165\u65B9\u5F0F"),h=n("3.\u544A\u522B\u4F7F\u7528ref\u540E\u7684.value\u7684\u4F7F\u7528\u3002"),_=n("4 \u81EA\u52A8\u5BFC\u5165\u56FE\u7247"),f=n("5.vue\u4E2D\u5982\u4F55\u652F\u6301jsx\u548Ctsx\u3002"),g=n("\u89E3\u51B3\u6C99\u7BB1\u62A5\u9519iframe\u4E2Dcesium\u65E0\u6CD5\u6267\u884C\u7684\u7206\u7C97"),x=n("\u6253\u901Ats\u548Cjs\u6700\u540E\u4E00\u9053"),q=n("vite\u4E2D\u5982\u4F55\u914D\u7F6E"),k=n("webpack\u4E2D\u5982\u4F55\u914D\u7F6E"),w=n("5.1\u6A21\u5757\u5B89\u88C5\u53D8\u5316"),j=n("6.vue4rouer\u7684\u5B89\u88C5"),C=n("7.vue3\u7684hook\u673A\u5236\uFF0C"),V=n("8.vue3\u4E2Dthis\u7684\u4F7F\u7528"),E=n("// setup\u4E2D\u6CA1\u6709this\uFF0C\u9700\u8981\u901A\u8FC7getCurrentInstance\u6765\u83B7\u53D6Vue\u5B9E\u4F8B"),L=t(`<h2 id="_1-setup-name\u589E\u5F3A" tabindex="-1"><a class="header-anchor" href="#_1-setup-name\u589E\u5F3A" aria-hidden="true">#</a> 1.setup name\u589E\u5F3A</h2><p>\u6211\u4EECsetup\u52A0\u4E0A\u8BED\u6CD5\u7CD6\u540E\uFF0C\u7EC4\u4EF6\u65E0\u6CD5\u4F7F\u7528name,\u6709\u65F6\u5019\uFF0C\u914D\u7F6Ekeep-alive\u6216\u662F\u81EA\u52A8\u5BFC\u5165\u7EC4\u4EF6\u6CA1\u6709name,\u4E00\u822C\u89E3\u51B3\u65B9\u6848\uFF0C\u5199\u4E24\u4E2Ascript\u6807\u7B7E\u3002 \u4E00\u4E2A\u542B\u6709setup,\u4E00\u4E2A\u4E0D\u542B\u6709setup</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>&lt;script lang=&quot;ts&quot;&gt;
import { defineComponent, onMounted } from &#39;vue&#39;

export default defineComponent({
  name: &#39;OrderList&#39;
})
&lt;/script&gt;

&lt;script lang=&quot;ts&quot; setup&gt;
onMounted(() =&gt; {
  console.log(&#39;mounted===&#39;)
})
&lt;/script&gt;


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="vite\u6846\u67B6\u589E\u52A0\u4E00\u4E2A\u63D2\u4EF6-\u89E3\u51B3setup\u7684\u540D\u79F0\u95EE\u9898" tabindex="-1"><a class="header-anchor" href="#vite\u6846\u67B6\u589E\u52A0\u4E00\u4E2A\u63D2\u4EF6-\u89E3\u51B3setup\u7684\u540D\u79F0\u95EE\u9898" aria-hidden="true">#</a> vite\u6846\u67B6\u589E\u52A0\u4E00\u4E2A\u63D2\u4EF6\uFF0C\u89E3\u51B3setup\u7684\u540D\u79F0\u95EE\u9898</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u7B2C\u4E00\u6B65
npm i vite-plugin-vue-setup-extend -D
\u7B2C\u4E8C\u6B65
// vite.config.ts
import { defineConfig } from &#39;vite&#39;
import VueSetupExtend from &#39;vite-plugin-vue-setup-extend&#39;

export default defineConfig({
  plugins: [
    VueSetupExtend()
  ]
})
\u7B2C\u4E09\u6B65
&lt;script lang=&quot;ts&quot; setup name=&quot;OrderList&quot;&gt;
import { onMounted } from &#39;vue&#39;

onMounted(() =&gt; {
  console.log(&#39;mounted===&#39;)
})
&lt;/script&gt;
\u5199\u5230script\u6807\u7B7E\u4E0A\u9762


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-\u914D\u7F6Eapi\u81EA\u52A8\u5BFC\u5165\u65B9\u5F0F" tabindex="-1"><a class="header-anchor" href="#_2-\u914D\u7F6Eapi\u81EA\u52A8\u5BFC\u5165\u65B9\u5F0F" aria-hidden="true">#</a> 2.\u914D\u7F6Eapi\u81EA\u52A8\u5BFC\u5165\u65B9\u5F0F</h2><p>vue,vue-router,vueUse\u8FD9\u4E9Bapi\u81EA\u52A8\u5BFC\u5165</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u7B2C\u4E00\u6B65
npm i unplugin-auto-import -D
\u7B2C\u4E8C\u6B65
// vite.config.ts
import { defineConfig } from &#39;vite&#39;
import AutoImport from &#39;unplugin-auto-import/vite&#39;

export default defineConfig({
  plugins: [
    AutoImport({
      // dts: &#39;src/auto-imports.d.ts&#39;, // \u53EF\u4EE5\u81EA\u5B9A\u4E49\u6587\u4EF6\u751F\u6210\u7684\u4F4D\u7F6E\uFF0C\u9ED8\u8BA4\u662F\u6839\u76EE\u5F55\u4E0B
      imports: [&#39;vue&#39;]
    })
  ]
})
\u7B2C\u4E09\u6B65
\u5982\u679C\u6709ts\uFF0C\u914D\u7F6E\u5B8C\u6210\uFF0C\u81EA\u52A8\u751F\u6210ts\u7684\u5BFC\u5165\u6587\u4EF6
\u5B89\u88C5\u914D\u7F6E\u5B8C\u4F1A\u81EA\u52A8\u751F\u6210
auto-imports.d.ts\u6587\u4EF6\u3002
\u7B2C\u56DB\u6B65
&lt;script lang=&quot;ts&quot; setup name=&quot;OrderList&quot;&gt;
// \u4E0D\u7528import\uFF0C\u76F4\u63A5\u4F7F\u7528ref
const count = ref(0)

onMounted(() =&gt; {
  console.log(&#39;mounted===&#39;)
})
&lt;/script&gt;


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5F15\u5165\u540E\uFF0Ceslint\u62A5\u9519\u95EE\u9898\uFF0C\u6CA1\u54DFimport\u7684\u60C5\u51B5\u4E0B\uFF0Ceslint\u62A5\u9519\u95EE\u9898 \u5B89\u88C5\u63D2\u4EF6\u89E3\u51B3</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>// \u5B89\u88C5\u4F9D\u8D56
npm i vue-global-api -D

// eslintrc.js
module.exports = {
  extends: [
    &#39;vue-global-api&#39;
  ]
}


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-\u544A\u522B\u4F7F\u7528ref\u540E\u7684-value\u7684\u4F7F\u7528\u3002" tabindex="-1"><a class="header-anchor" href="#_3-\u544A\u522B\u4F7F\u7528ref\u540E\u7684-value\u7684\u4F7F\u7528\u3002" aria-hidden="true">#</a> 3.\u544A\u522B\u4F7F\u7528ref\u540E\u7684.value\u7684\u4F7F\u7528\u3002</h2><p>\u5B98\u65B9\u7684\u4E00\u79CD\u914D\u7F6E\uFF0C\u589E\u52A0vite\u6846\u67B6\u4E2Dref\u7684\u8F6C\u6362\u914D\u7F6E</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u8FD9\u91CC\u6211\u4ECB\u7ECD\u7684\u662F\u53E6\u5916\u4E00\u79CD\u5199\u6CD5\uFF0C\u4E5F\u662F\u5B98\u65B9\u540E\u6765\u51FA\u7684\u4E00\u79CD\u65B9\u6848\uFF0C\u5728
ref\u524D\u52A0\u4E0A
$\uFF0C\u8BE5\u529F\u80FD\u9ED8\u8BA4\u5173\u95ED\uFF0C\u9700\u8981\u624B\u52A8\u5F00\u542F\u3002
// vite.config.ts
import { defineConfig } from &#39;vite&#39;
import vue from &#39;@vitejs/plugin-vue&#39;

export default defineConfig({
  plugins: [
    vue({
      refTransform: true // \u5F00\u542Fref\u8F6C\u6362
    })
  ]
})
\u7136\u540E\u4F7F\u7528
let count = $ref(1)

const addCount = () =&gt; {
  count++
}
\u6CE8\u610F\uFF0C\u8FD9\u91CC\u7684\u8BED\u6CD5\u9700\u8981\u914D\u7F6E\u7684\u76F8\u5173\u63D2\u4EF6\u548C\u7248\u672C\u9700\u8981\u4E00\u81F4\u6216\u662F\u66F4\u9AD8
&quot;vue&quot;: &quot;^3.2.2&quot;,
&quot;@vitejs/plugin-vue&quot;: &quot;^1.9.0&quot;,
&quot;@vue/compiler-sfc&quot;: &quot;^3.2.5&quot;,
&quot;vite&quot;: &quot;^2.6.13&quot;


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4-\u81EA\u52A8\u5BFC\u5165\u56FE\u7247" tabindex="-1"><a class="header-anchor" href="#_4-\u81EA\u52A8\u5BFC\u5165\u56FE\u7247" aria-hidden="true">#</a> 4 \u81EA\u52A8\u5BFC\u5165\u56FE\u7247</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>vue2\u7684\u65F6\u5019\uFF0C\u5BFC\u5165\u56FE\u7247\uFF0C\u4F1A\u4F7F\u7528src\u4E2D\uFF0Crequre\u65B9\u5F0F
\u4F46\u662Fvite\u811A\u624B\u67B6\u4E2D\u9ED8\u8BA4\u4E0D\u652F\u6301requre,\u90A3\u4E48\u4F7F\u7528import
\u6211\u8981\u5BFC\u5165\u56FE\u7247\uFF0C\u90FD\u9700\u8981\u4E0B\u9762import\u4E00\u4E0B

&lt;template&gt;
  &lt;img :src=&quot;Logo&quot; /&gt;
&lt;/template&gt;

&lt;script lang=&quot;ts&quot; setup&gt;
import Logo from &#39;@/assets/image/logo.png&#39;
&lt;/script&gt;


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_5-vue\u4E2D\u5982\u4F55\u652F\u6301jsx\u548Ctsx\u3002" tabindex="-1"><a class="header-anchor" href="#_5-vue\u4E2D\u5982\u4F55\u652F\u6301jsx\u548Ctsx\u3002" aria-hidden="true">#</a> 5.vue\u4E2D\u5982\u4F55\u652F\u6301jsx\u548Ctsx\u3002</h2><h3 id="\u89E3\u51B3\u6C99\u7BB1\u62A5\u9519iframe\u4E2Dcesium\u65E0\u6CD5\u6267\u884C\u7684\u7206\u7C97" tabindex="-1"><a class="header-anchor" href="#\u89E3\u51B3\u6C99\u7BB1\u62A5\u9519iframe\u4E2Dcesium\u65E0\u6CD5\u6267\u884C\u7684\u7206\u7C97" aria-hidden="true">#</a> \u89E3\u51B3\u6C99\u7BB1\u62A5\u9519iframe\u4E2Dcesium\u65E0\u6CD5\u6267\u884C\u7684\u7206\u7C97</h3><p>var iframe = document.getElementsByClassName(&#39;cesium-infoBox-iframe&#39;)[0];</p><p>iframe.setAttribute(&#39;sandbox&#39;, &#39;allow-same-origin allow-scripts allow-popups allow-forms&#39;);</p><p>iframe.setAttribute(&#39;src&#39;, &quot;&quot;); //\u5FC5\u987B\u8BBE\u7F6Esrc\u4E3A\u7A7A \u5426\u5219\u4E0D\u4F1A\u751F\u6548</p><h3 id="\u6253\u901Ats\u548Cjs\u6700\u540E\u4E00\u9053" tabindex="-1"><a class="header-anchor" href="#\u6253\u901Ats\u548Cjs\u6700\u540E\u4E00\u9053" aria-hidden="true">#</a> \u6253\u901Ats\u548Cjs\u6700\u540E\u4E00\u9053</h3><p>\u62A5\u9519 Uncaught ReferenceError: exports is not defined exports \u627E\u4E0D\u5230\uFF0C\u672A\u5B9A\u4E49\uFF0C\u662F\u7684\u6CA1\u9519\uFF0C\u76EE\u524D\u7684\u6D4F\u89C8\u5668\u8FD8\u4E0D\u652F\u6301exports \u8FD9\u4E2A\u5C5E\u6027\uFF0C\u600E\u4E48\u529E\u3002</p><p>\u65B9\u6CD5 \u65B9\u6CD5\u5C31\u662F\u8F6C\u8BD1\uFF0C\u8BA9\u6240\u6709\u6D4F\u89C8\u5668\u90FD\u652F\u6301\u3002\u8F6C\u8BD1\u4E3Aes5\u7684\u8BED\u6CD5\uFF0C\u53EF\u4EE5\u7528\u5F88\u591A\u6253\u5305\u5DE5\u5177\u53BB\u5B9E\u73B0\uFF0C\u63A8\u8350\u4F7F\u7528\u6D41\u884C\u7684webpack\uFF0C\u5982\u679C\u4F60\u4F1A\u4E86\u5C31\u4E4B\u9645\u6253\u5305\u5373\u53EF\u89E3\u51B3\u5982\u679C\u4E0D\u4F1A\u770B\u4E0B\u9762\uFF1B \u4E09\u5206\u949F\u5C31\u5B66\u4F1A\u7684\u6253\u5305\u65B9\u6CD5\uFF0C\u4E13\u95E8\u4E3A\u5B66\u4E60typescript \u800C\u4F7F\u7528\u7684\u4E34\u65F6\u6253\u5305</p><p>\u5168\u5C40\u5B89\u88C5npm install -g typescript</p><p>\u5B89\u88C5webpack webpack-cli</p><p>\u5B89\u88C5ts-loader</p><p>\u8D44\u6E90\u9AD8\u7EA7\u5206\u4EAB\u5B66\u4E60</p><h3 id="vite\u4E2D\u5982\u4F55\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#vite\u4E2D\u5982\u4F55\u914D\u7F6E" aria-hidden="true">#</a> vite\u4E2D\u5982\u4F55\u914D\u7F6E</h3><h3 id="webpack\u4E2D\u5982\u4F55\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#webpack\u4E2D\u5982\u4F55\u914D\u7F6E" aria-hidden="true">#</a> webpack\u4E2D\u5982\u4F55\u914D\u7F6E</h3>`,29),R={href:"https://www.zhihu.com/question/64147199",target:"_blank",rel:"noopener noreferrer"},I=n("\u4EE3\u529Ejsx\u7684\u652F\u6301vue"),B=t(`<h3 id="_5-1\u6A21\u5757\u5B89\u88C5\u53D8\u5316" tabindex="-1"><a class="header-anchor" href="#_5-1\u6A21\u5757\u5B89\u88C5\u53D8\u5316" aria-hidden="true">#</a> 5.1\u6A21\u5757\u5B89\u88C5\u53D8\u5316</h3><p>vue3\u4E0D\u7528vue-template-compiler\u4E86\uFF0C\u7528\u7684@vue/compiler-sfc\uFF0C\u6CE8\u610F\u76EE\u524D\u5B89\u88C5vue-loader\u8981\u6307\u5B9A16\u4EE5\u4E0A\u7684\u7248\u672C\uFF0C\u9ED8\u8BA4\u5B89\u88C5\u7684\u6700\u65B0\u7248\u672C\u4E0D\u884C\u7684</p><p>@vue/compiler-sfc</p><h2 id="_6-vue4rouer\u7684\u5B89\u88C5" tabindex="-1"><a class="header-anchor" href="#_6-vue4rouer\u7684\u5B89\u88C5" aria-hidden="true">#</a> 6.vue4rouer\u7684\u5B89\u88C5</h2><p>npm install vue-router@4 -S</p><h2 id="_7-vue3\u7684hook\u673A\u5236" tabindex="-1"><a class="header-anchor" href="#_7-vue3\u7684hook\u673A\u5236" aria-hidden="true">#</a> 7.vue3\u7684hook\u673A\u5236\uFF0C</h2><p>Vue3\u7684hooks\u8BA9\u6211\u4EEC\u53EF\u4EE5\u5728\u7EC4\u4EF6\u5916\u90E8\u8C03\u7528Vue\u7684\u6240\u6709\u80FD\u529B\uFF0C \u5305\u62EConMounted,ref, reactive\uFF0Cinject,provide,\u8BA9\u8FD9\u4E9B\u529F\u80FD\u53EF\u4EE5\u5355\u72EC\u63D0\u53D6\u51FA\u6765\uFF0C\u7B49\u7B49 \u6BD4\u5982provide\u548Cinject\u6A21\u62DFvuex\u529F\u80FD\u3002</p><p>\u8FD9\u4F7F\u5F97\u81EA\u5B9A\u4E49hook\u53EF\u4EE5\u505A\u975E\u5E38\u591A\u7684\u4E8B\u60C5\uFF0C\u5E76\u4E14\u5728\u7EC4\u4EF6\u7684setup\u51FD\u6570\u628A\u591A\u4E2A\u81EA\u5B9A\u4E49hook\u7EC4\u5408\u8D77\u6765\u5B8C\u6210\u903B\u8F91\uFF0C</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>1.\u57FA\u672C\u7684\u8DEF\u7531
\u5168\u5C40\u524D\u7F6E\u5B88\u536B
beforeEach\uFF1Ato,from,next
afterEach\u4E24\u4E2A\u53C2\u6570

2.5\u4E2A\u7EC4\u5408\u5F0FAPI
onBeforeRouteLeave
onBeofreRouteUpdate
useLink
useRoute---\u8FD4\u56DE\u5F53\u524D\u8DEF\u7531\u5730\u5740\u3002\u76F8\u5F53\u4E8E\u5728\u6A21\u677F\u4E2D\u4F7F\u7528 $route\u3002\u5FC5\u987B\u5728setup\u4E2D\u4F7F\u7528
useRouter--- \u8FD4\u56DE router \u5B9E\u4F8B\u3002\u76F8\u5F53\u4E8E\u5728\u6A21\u677F\u4E2D\u4F7F\u7528 $router.\u5FC5\u987B\u5728setup\u4E2D\u4F7F\u7528

\u56E0\u4E3A\u6211\u4EEC\u5728 setup \u91CC\u9762\u6CA1\u6709\u8BBF\u95EE this\uFF0C\u6240\u4EE5\u6211\u4EEC\u4E0D\u80FD\u518D\u76F4\u63A5\u8BBF\u95EE this.$router \u6216 this.$route\u3002
\u4F5C\u4E3A\u66FF\u4EE3\uFF0C\u6211\u4EEC\u4F7F\u7528 useRouter \u51FD\u6570\uFF1A

3.router\u7684\u5C5E\u6027\u548C\u65B9\u6CD5
router\u5C5E\u6027
currentRoute\u53EA\u8BFB
options\u5F53\u671F\u8DEF\u7531\u914D\u7F6E
router\u7684\u65B9\u6CD5
addRoute
afterEach\u4E24\u4E2A\u53C2\u6570beforeEach








</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_8-vue3\u4E2Dthis\u7684\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#_8-vue3\u4E2Dthis\u7684\u4F7F\u7528" aria-hidden="true">#</a> 8.vue3\u4E2Dthis\u7684\u4F7F\u7528</h2><h3 id="setup\u4E2D\u6CA1\u6709this-\u9700\u8981\u901A\u8FC7getcurrentinstance\u6765\u83B7\u53D6vue\u5B9E\u4F8B" tabindex="-1"><a class="header-anchor" href="#setup\u4E2D\u6CA1\u6709this-\u9700\u8981\u901A\u8FC7getcurrentinstance\u6765\u83B7\u53D6vue\u5B9E\u4F8B" aria-hidden="true">#</a> // setup\u4E2D\u6CA1\u6709this\uFF0C\u9700\u8981\u901A\u8FC7getCurrentInstance\u6765\u83B7\u53D6Vue\u5B9E\u4F8B</h3><p>import { getCurrentInstance } from &#39;vue&#39; // proxy\u7B49\u540C\u4E8EVue2.x\u7684this\uFF0C\u4E0D\u53EF\u4EE5\u4F7F\u7528ctx\uFF0C\u751F\u4EA7\u73AF\u5883\u4F1A\u62A5\u9519 const { proxy } = getCurrentInstance()</p>`,12);function M($,y){const s=d("RouterLink"),a=d("ExternalLinkIcon");return u(),v("div",null,[e("nav",o,[e("ul",null,[e("li",null,[i(s,{to:"#_1-setup-name\u589E\u5F3A"},{default:l(()=>[m]),_:1}),e("ul",null,[e("li",null,[i(s,{to:"#vite\u6846\u67B6\u589E\u52A0\u4E00\u4E2A\u63D2\u4EF6-\u89E3\u51B3setup\u7684\u540D\u79F0\u95EE\u9898"},{default:l(()=>[b]),_:1})])])]),e("li",null,[i(s,{to:"#_2-\u914D\u7F6Eapi\u81EA\u52A8\u5BFC\u5165\u65B9\u5F0F"},{default:l(()=>[p]),_:1})]),e("li",null,[i(s,{to:"#_3-\u544A\u522B\u4F7F\u7528ref\u540E\u7684-value\u7684\u4F7F\u7528\u3002"},{default:l(()=>[h]),_:1})]),e("li",null,[i(s,{to:"#_4-\u81EA\u52A8\u5BFC\u5165\u56FE\u7247"},{default:l(()=>[_]),_:1})]),e("li",null,[i(s,{to:"#_5-vue\u4E2D\u5982\u4F55\u652F\u6301jsx\u548Ctsx\u3002"},{default:l(()=>[f]),_:1}),e("ul",null,[e("li",null,[i(s,{to:"#\u89E3\u51B3\u6C99\u7BB1\u62A5\u9519iframe\u4E2Dcesium\u65E0\u6CD5\u6267\u884C\u7684\u7206\u7C97"},{default:l(()=>[g]),_:1})]),e("li",null,[i(s,{to:"#\u6253\u901Ats\u548Cjs\u6700\u540E\u4E00\u9053"},{default:l(()=>[x]),_:1})]),e("li",null,[i(s,{to:"#vite\u4E2D\u5982\u4F55\u914D\u7F6E"},{default:l(()=>[q]),_:1})]),e("li",null,[i(s,{to:"#webpack\u4E2D\u5982\u4F55\u914D\u7F6E"},{default:l(()=>[k]),_:1})]),e("li",null,[i(s,{to:"#_5-1\u6A21\u5757\u5B89\u88C5\u53D8\u5316"},{default:l(()=>[w]),_:1})])])]),e("li",null,[i(s,{to:"#_6-vue4rouer\u7684\u5B89\u88C5"},{default:l(()=>[j]),_:1})]),e("li",null,[i(s,{to:"#_7-vue3\u7684hook\u673A\u5236"},{default:l(()=>[C]),_:1})]),e("li",null,[i(s,{to:"#_8-vue3\u4E2Dthis\u7684\u4F7F\u7528"},{default:l(()=>[V]),_:1}),e("ul",null,[e("li",null,[i(s,{to:"#setup\u4E2D\u6CA1\u6709this-\u9700\u8981\u901A\u8FC7getcurrentinstance\u6765\u83B7\u53D6vue\u5B9E\u4F8B"},{default:l(()=>[E]),_:1})])])])])]),L,e("p",null,[e("a",R,[I,i(a)])]),B])}var N=r(c,[["render",M],["__file","001Vue3\u5347\u7EA7\u540E\u4E2A\u4EBA\u4F7F\u7528\u6C47\u603B\u6848\u4F8B.html.vue"]]);export{N as default};
