import{_ as u,r,o,c as m,a as e,b as n,w as s,e as d,d as i}from"./app.9be20fcb.js";const h={},p={class:"table-of-contents"},b=i("\u770B\u4E0D\u61C2\u7684ts\u9879\u76EE\uFF0Ctsc\u7F16\u8BD1\u6587\u4EF6\u591A\u6B21\u770B"),x=i("\u597D\u7528\u7684\u5C0F\u529F\u80FD\uFF0Cvue3\u597D\u7528\u7684\u5730\u65B9"),f=i("1.script\u589E\u52A0setup\u540E\uFF0C\u5BFC\u5165\u6A21\u5757\u540E\uFF0C\u4E0D\u9700\u8981\u518D\u6CE8\u518C"),g=i("2.process\u5728vite\u4E2D\u79FB\u9664"),_=i("3.components\u914D\u7F6E\u662F\u5BF9\u8C61"),w=i("4.\u5B50\u7EC4\u4EF6\u4FEE\u6539\u7236\u7EC4\u4EF6"),q=i("5.provide\u548Cinject"),y=i("6.Vue3\u65F6\u4EE3\uFF0C\u4F60\u5E94\u8BE5\u5168\u9762\u62E5\u62B1\u4F9D\u8D56\u6CE8\u5165"),k=i("vue3\u7684\u5168\u5C40\u72B6\u6001\u7BA1\u7406\uFF0C\u629B\u5F03vuex\uFF0C\u4F7F\u7528\u81EA\u5DF1\u5B9A\u4E49\u7684\u55EF\u8F6C\u5B9E\u73B0"),j=i("\u7236\u5B50\u4EF6\u901A\u4FE1"),V=i("vue3\u642D\u5EFA\u4E8B\u4EF6\u603B\u7EBF\u673A\u5236"),E=i("\u4F7F\u7528\u65B9\u6CD5"),I=i("\u603B\u7ED3\u901A\u4FE1\u8BF4\u660E"),C=i("8.\u5BF9\u4E8Eaixos\u8BF7\u6C42\u5C01\u88C5\u540E\u7684\u4F7F\u7528"),F=i("vue2\u548Cvue3\u7684api\u7684\u533A\u522B"),M=i("vue3\u4E2D\u6CA1\u6709this\u600E\u4E48\u529E"),$=i("\u600E\u6837\u81EA\u5B9A\u4E49\u6D3E\u53D1\u4E8B\u4EF6"),D=i("\u5982\u4F55\u9009\u62E9\u6211\u8BE5\u5982\u4F55\u5728reactive\u548Cref\u4E4B\u95F4\u505A\u9009\u62E9\uFF1F"),A=i("9.\u5982\u4F55\u5FEB\u901F\u5C06\u63A5\u53E3\u6539\u9020\u6210async\u548Cawait"),O=i("10\u4E3A\u4EC0\u4E48\u6709\u4EBA\u5410\u69FDvue3.0\u6CA1\u6709vue2.0\u597D\u7528"),P=i("\u4E00\u3001\u5B8C\u5168\u629B\u5F03options api\u7684\u4F5C\u98CE\uFF0C\u6539\u7528composition api\u7684\u5199\u6CD5"),L=d(`<h2 id="\u770B\u4E0D\u61C2\u7684ts\u9879\u76EE-tsc\u7F16\u8BD1\u6587\u4EF6\u591A\u6B21\u770B" tabindex="-1"><a class="header-anchor" href="#\u770B\u4E0D\u61C2\u7684ts\u9879\u76EE-tsc\u7F16\u8BD1\u6587\u4EF6\u591A\u6B21\u770B" aria-hidden="true">#</a> \u770B\u4E0D\u61C2\u7684ts\u9879\u76EE\uFF0Ctsc\u7F16\u8BD1\u6587\u4EF6\u591A\u6B21\u770B</h2><h2 id="\u597D\u7528\u7684\u5C0F\u529F\u80FD-vue3\u597D\u7528\u7684\u5730\u65B9" tabindex="-1"><a class="header-anchor" href="#\u597D\u7528\u7684\u5C0F\u529F\u80FD-vue3\u597D\u7528\u7684\u5730\u65B9" aria-hidden="true">#</a> \u597D\u7528\u7684\u5C0F\u529F\u80FD\uFF0Cvue3\u597D\u7528\u7684\u5730\u65B9</h2><h2 id="_1-script\u589E\u52A0setup\u540E-\u5BFC\u5165\u6A21\u5757\u540E-\u4E0D\u9700\u8981\u518D\u6CE8\u518C" tabindex="-1"><a class="header-anchor" href="#_1-script\u589E\u52A0setup\u540E-\u5BFC\u5165\u6A21\u5757\u540E-\u4E0D\u9700\u8981\u518D\u6CE8\u518C" aria-hidden="true">#</a> 1.script\u589E\u52A0setup\u540E\uFF0C\u5BFC\u5165\u6A21\u5757\u540E\uFF0C\u4E0D\u9700\u8981\u518D\u6CE8\u518C</h2><p>setup</p><h2 id="_2-process\u5728vite\u4E2D\u79FB\u9664" tabindex="-1"><a class="header-anchor" href="#_2-process\u5728vite\u4E2D\u79FB\u9664" aria-hidden="true">#</a> 2.process\u5728vite\u4E2D\u79FB\u9664</h2><p>\u9700\u8981\u589E\u52A0\u5B9A\u4E49</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>vite.config.js\u4E2D\u589E\u52A0
define:{
    &quot;p<wbr>rocess.env&quot;:{}
  },


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-components\u914D\u7F6E\u662F\u5BF9\u8C61" tabindex="-1"><a class="header-anchor" href="#_3-components\u914D\u7F6E\u662F\u5BF9\u8C61" aria-hidden="true">#</a> 3.components\u914D\u7F6E\u662F\u5BF9\u8C61</h2><p>components:{ homecom }, \u6CE8\u610F\u8FD9\u91CC\u7684\u7EC4\u4EF6\u914D\u7F6E\u662F\u4E00\u4E2A\u5BF9\u8C61\u3002</p><p>\u81EA\u5DF1\u50BB\u50BB\u7684\u548Cvuex\u7684\u5BFC\u5165\u6DF7\u5728\u4E00\u8D77\u4E86\u3002</p><h2 id="_4-\u5B50\u7EC4\u4EF6\u4FEE\u6539\u7236\u7EC4\u4EF6" tabindex="-1"><a class="header-anchor" href="#_4-\u5B50\u7EC4\u4EF6\u4FEE\u6539\u7236\u7EC4\u4EF6" aria-hidden="true">#</a> 4.\u5B50\u7EC4\u4EF6\u4FEE\u6539\u7236\u7EC4\u4EF6</h2><p>\u5B50\u7EC4\u4EF6\u5B9A\u4E49\u4E8B\u4EF6eventfn\uFF0C\u5B9A\u4E49\u5728emits\u4E2D\uFF0C\u5BFC\u51FA\u3002 \u7236\u7EC4\u4EF6\u4E2D\u5F15\u5165\u5B50\u7EC4\u4EF6\uFF0C\u7ED9\u5B50\u7EC4\u4EF6\u6807\u7B7E\u4E2D\u52A0\u5165\u8FD9\u4E2A@eventfn=&quot;fatherfn&quot;\uFF0C\u7136\u540E\u7236\u7EC4\u4EF6\u5185\u5BB9\u8FDB\u884C\u5BF9\u5E94\u5C5E\u6027\u8D4B\u503C\u3002</p><h2 id="_5-provide\u548Cinject" tabindex="-1"><a class="header-anchor" href="#_5-provide\u548Cinject" aria-hidden="true">#</a> 5.provide\u548Cinject</h2><p>\u7236\u7EC4\u4EF6\u6709\u4E00\u4E2A provide \u9009\u9879\u6765\u63D0\u4F9B\u6570\u636E\uFF0C\u5B50\u7EC4\u4EF6\u6709\u4E00\u4E2A inject \u9009\u9879\u6765\u5F00\u59CB\u4F7F\u7528\u8FD9\u4E9B\u6570\u636E\u3002</p><p>\u5927\u5BB6\u80AF\u5B9A\u7B2C\u4E00\u60F3\u5230\u7684\u5C31Vue2\u4E2D\u7684provide / inject\u9009\u9879\u3002 \u5982\u679C\u8981\u628Adata\u91CC\u7684\u6570\u636Eprovide\uFF0C\u8BF4\u767D\u4E86\u5C31\u662F\u6253\u7B97\u7528this\uFF0Cprovide\u8981\u5199\u6210\u51FD\u6570\uFF1A \u6CE8\u610F\u4F20\u7EDF\u4F7F\u7528provide\u548Cinject\u65B9\u6CD5\uFF0C\u8FD9\u91CC\u4E24\u79CD\u6A21\u5F0F\uFF0C\u4F7F\u7528\u7684\u533A\u522B\u597D\u5904\u5728\u4E8E\uFF0C\u4E00\u79CD\u76F4\u63A5\u5BF9\u8C61\u6570\u7EC4\uFF0C\u4E00\u79CD\u662F\u8FD4\u56DE\u51FD\u6570\u5BF9\u8C61\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>//\u8FD9\u79CD\u5199\u6CD5\u7528\u4E8E\u4F7F\u7528this.
provide() {
    return {
      abcabc: computed(() =&gt; this.abc),
      updateAbc: this.updateAbc
    }
  },

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><p>\u6CA1\u9519\uFF0C\u8FD9\u5957\u903B\u8F91\u5728vue3\u4E2D\u540C\u6837\u9002\u7528\uFF0C\u540C\u65F6\u8FD9\u4E24\u4E2A\u9009\u9879\u53D8\u6210\u4E86\u4E24\u4E2A\u65B9\u6CD5\u3002</p><h2 id="_6-vue3\u65F6\u4EE3-\u4F60\u5E94\u8BE5\u5168\u9762\u62E5\u62B1\u4F9D\u8D56\u6CE8\u5165" tabindex="-1"><a class="header-anchor" href="#_6-vue3\u65F6\u4EE3-\u4F60\u5E94\u8BE5\u5168\u9762\u62E5\u62B1\u4F9D\u8D56\u6CE8\u5165" aria-hidden="true">#</a> 6.Vue3\u65F6\u4EE3\uFF0C\u4F60\u5E94\u8BE5\u5168\u9762\u62E5\u62B1\u4F9D\u8D56\u6CE8\u5165</h2><p>vue3\u4E2D\u7684\u54CD\u5E94\u5F0F\u53D8\u91CFref/reactive\u5929\u751F\u4E0E\u7EC4\u4EF6\u89E3\u8026\uFF0C\u4E5F\u5C31\u662F\u8BF4\uFF0C\u53EF\u4EE5\u5728\u7EC4\u4EF6\u5916\u5355\u72EC\u58F0\u660Eref/reactive\uFF0C\u7136\u540E\u518D\u5728\u7EC4\u4EF6\u5185\u5F15\u7528\u3002</p><p>\u8FD9\u6837\u4E00\u6765\uFF0C\u8DE8\u7EC4\u4EF6\u5171\u4EAB\u72B6\u6001\u7684\u9700\u6C42\u5728\u6846\u67B6\u5185\u90E8\u5C31\u5F97\u5230\u89E3\u51B3\uFF0CVue3\u7684\u8BDE\u751F\u65E9\u5DF2\u6CE8\u5B9A\u4E86vuex\u8FD9\u7C7B\u65B9\u6848\u7684\u6B7B\u4EA1\u3002</p><h3 id="vue3\u7684\u5168\u5C40\u72B6\u6001\u7BA1\u7406-\u629B\u5F03vuex-\u4F7F\u7528\u81EA\u5DF1\u5B9A\u4E49\u7684\u55EF\u8F6C\u5B9E\u73B0" tabindex="-1"><a class="header-anchor" href="#vue3\u7684\u5168\u5C40\u72B6\u6001\u7BA1\u7406-\u629B\u5F03vuex-\u4F7F\u7528\u81EA\u5DF1\u5B9A\u4E49\u7684\u55EF\u8F6C\u5B9E\u73B0" aria-hidden="true">#</a> vue3\u7684\u5168\u5C40\u72B6\u6001\u7BA1\u7406\uFF0C\u629B\u5F03vuex\uFF0C\u4F7F\u7528\u81EA\u5DF1\u5B9A\u4E49\u7684\u55EF\u8F6C\u5B9E\u73B0</h3><p>api Vue3\u4E2D\u6709\u4E00\u5BF9\u65B0\u589E\u7684api\uFF0Cprovide\u548Cinject\uFF0C\u719F\u6089Vue2\u7684\u670B\u53CB\u5E94\u8BE5\u660E\u767D\uFF0C</p><p>\u5728\u4E0A\u5C42\u7EC4\u4EF6\u901A\u8FC7provide\u63D0\u4F9B\u4E00\u4E9B\u53D8\u91CF\uFF0C\u5728\u5B50\u7EC4\u4EF6\u4E2D\u53EF\u4EE5\u901A\u8FC7inject\u6765\u62FF\u5230\uFF0C\u4F46\u662F\u5FC5\u987B\u5728\u7EC4\u4EF6\u7684\u5BF9\u8C61\u91CC\u9762\u58F0\u660E\uFF0C\u4F7F\u7528\u573A\u666F\u7684\u4E5F\u5F88\u5C11\uFF0C\u6240\u4EE5\u4E4B\u524D\u6211\u4E5F\u5E76\u6CA1\u6709\u5F80\u72B6\u6001\u7BA1\u7406\u7684\u65B9\u5411\u53BB\u60F3\u3002</p><p>\u4F46\u662FVue3\u4E2D\u65B0\u589E\u4E86Hook\uFF0C\u800CHook\u7684\u7279\u5F81\u4E4B\u4E00\u5C31\u662F\u53EF\u4EE5\u5728\u7EC4\u4EF6\u5916\u53BB\u5199\u4E00\u4E9B\u81EA\u5B9A\u4E49Hook\uFF0C\u6240\u4EE5\u6211\u4EEC\u4E0D\u5149\u53EF\u4EE5\u5728.vue\u7EC4\u4EF6\u5185\u90E8\u4F7F\u7528Vue\u7684\u80FD\u529B\uFF0C \u5728\u4EFB\u610F\u7684\u6587\u4EF6\u4E0B\uFF08\u5982context.ts\uFF09\u4E0B\u4E5F\u53EF\u4EE5\uFF0C</p><p>\u5982\u679C\u6211\u4EEC\u5728context.ts\u4E2D</p><p>\u81EA\u5B9A\u4E49\u5E76export\u4E00\u4E2Ahook\u53EBuseProvide\uFF0C\u5E76\u4E14\u5728\u8FD9\u4E2Ahook\u4E2D\u4F7F\u7528provide\u5E76\u4E14\u6CE8\u518C\u4E00\u4E9B\u5168\u5C40\u72B6\u6001\uFF0C</p><p>\u518D\u81EA\u5B9A\u4E49\u5E76export\u4E00\u4E2Ahook\u53EBuseInject\uFF0C\u5E76\u4E14\u5728\u8FD9\u4E2Ahook\u4E2D\u4F7F\u7528inject\u8FD4\u56DE\u521A\u521Aprovide\u7684\u5168\u5C40\u72B6\u6001\uFF0C</p><p>\u7136\u540E\u5728\u6839\u7EC4\u4EF6\u7684setup\u51FD\u6570\u4E2D\u8C03\u7528useProvide\u3002</p><p>\u5C31\u53EF\u4EE5\u5728\u4EFB\u610F\u7684\u5B50\u7EC4\u4EF6\u53BB\u5171\u4EAB\u8FD9\u4E9B\u5168\u5C40\u72B6\u6001\u4E86\u3002</p><h2 id="\u7236\u5B50\u4EF6\u901A\u4FE1" tabindex="-1"><a class="header-anchor" href="#\u7236\u5B50\u4EF6\u901A\u4FE1" aria-hidden="true">#</a> \u7236\u5B50\u4EF6\u901A\u4FE1</h2><p>Vue3.x \u63A8\u8350\u4F7F\u7528 mitt.js Vue2.x \u4F7F\u7528 EventBus \u8FDB\u884C\u7EC4\u4EF6\u901A\u4FE1\uFF0C\u800C Vue3.x \u63A8\u8350\u4F7F\u7528 mitt.js\u3002</p><p>\u6BD4\u8D77 Vue \u5B9E\u4F8B\u4E0A\u7684 EventBus\uFF0Cmitt.js \u597D\u5728\u54EA\u91CC\u5462\uFF1F\u9996\u5148\u5B83\u8DB3\u591F\u5C0F\uFF0C\u4EC5\u6709200bytes\uFF0C\u5176\u6B21\u652F\u6301\u5168\u90E8\u4E8B\u4EF6\u7684\u76D1\u542C\u548C\u6279\u91CF\u79FB\u9664\uFF0C\u5B83\u8FD8\u4E0D\u4F9D\u8D56 Vue \u5B9E\u4F8B\uFF0C\u6240\u4EE5\u53EF\u4EE5\u8DE8\u6846\u67B6\u4F7F\u7528\uFF0CReact \u6216\u8005 Vue\uFF0C\u751A\u81F3 jQuery \u9879\u76EE\u90FD\u80FD\u4F7F\u7528\u540C\u4E00\u5957\u5E93\u3002</p><h3 id="vue3\u642D\u5EFA\u4E8B\u4EF6\u603B\u7EBF\u673A\u5236" tabindex="-1"><a class="header-anchor" href="#vue3\u642D\u5EFA\u4E8B\u4EF6\u603B\u7EBF\u673A\u5236" aria-hidden="true">#</a> vue3\u642D\u5EFA\u4E8B\u4EF6\u603B\u7EBF\u673A\u5236</h3><p>\u5C01\u88C5\u81EA\u5B9A\u4E49\u4E8B\u52A1\u603B\u7EBF\u6587\u4EF6 mybus.js\uFF0C\u521B\u5EFA\u65B0\u7684 js \u6587\u4EF6\u3002 npm install -S mitt.</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>
import mitt from &#39;mitt&#39;;
export default mitt();

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5176\u4F59\u4E24\u79CD\u65B9\u5F0F \u7B2C\u4E8C\u79CD\uFF0C\u5168\u5C40main.js\u6302\u8F7D\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>import  {createApp} from &quot;vue&quot;;
import App from &quot;./App.vue&quot;
import mitt  from &quot;mitt&quot;;

const app = createApp(App);
app.config.globalProperties.$mittbus = mitt();



</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u7B2C\u4E09\u79CD\uFF0C\u5728\u7EC4\u4EF6\u5185\u5F15\u5165</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>setup (props) {
    const formItemMitt = mitt()
    return {
      formItemMitt
    }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u4F7F\u7528\u65B9\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528\u65B9\u6CD5" aria-hidden="true">#</a> \u4F7F\u7528\u65B9\u6CD5</h3><p>!!! \u63A5\u6536\u65B9on\uFF1A\u8BB0\u4F4F\u4E00\u5B9A\u8981\u5199\u5728mounted\uFF0C\u8FD9\u91CC\u4E00\u5B9A\u8981\u683C\u5916\u6CE8\u610F\uFF0C\u5343\u4E07\u4E0D\u8981\u5199\u5728method\u4E2D\uFF0C\u5982\u679C\u4F60\u7528WebStorm\u662F\u4E0D\u4F1A\u62A5\u9519\u8BEF\u7684\uFF0C\u8FD9\u4E2Abug\u975E\u5E38\u4E0D\u597D\u6392\u67E5\uFF0C\u6211\u662F\u6DF1\u53D7\u5176\u5BB3\uFF0C\u8D39\u4E86\u5F88\u5927\u52B2\u624D\u627E\u5230\u9519\u8BEF\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>import mitt from &#39;mitt&#39;

const emitter = mitt()

// listen to an event
emitter.on(&#39;foo&#39;, e =&gt; console.log(&#39;foo&#39;, e) )

// listen to all events
emitter.on(&#39;*&#39;, (type, e) =&gt; console.log(type, e) )

// fire an event
emitter.emit(&#39;foo&#39;, { a: &#39;b&#39; })

// clearing all events
emitter.all.clear()

// working with handler references:
function onFoo() {}
emitter.on(&#39;foo&#39;, onFoo)   // listen
emitter.off(&#39;foo&#39;, onFoo)  // unlisten





#### \u8BB0\u5F55\u81EA\u5DF1\u8111\u5B50\u88AB\u95E8\u6324\u4E86\u7684mitt\u8C03\u7528\u9519\u8BEF\u3002

\u81EA\u5B9A\u4E49\u5C01\u88C5\u597Dmitt\u540E\u3002

childmittFn\u662F\u5B50\u7EC4\u4EF6\u6D3E\u53D1\u7684\u4E8B\u4EF6\u3002

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u63A5\u6536\u65B9\u7EC4\u4EF6\uFF1AOnmounted\u5199\u597D onMounted(() =&gt; { // console.log(&#39;\u9875\u9762\u6302\u8F7D\u5B8C\u6210\uFF0C\u89E6\u53D1\u4E86onMounted\u94A9\u5B50\u51FD\u6570&#39;); // TODO:\u4F7F\u7528mitt\u4E8B\u4EF6\u603B\u7EBF\u5168\u5C40\u76D1\u542C: emitter.on(&quot;childmittFn&quot;, e =&gt; { console.log(&#39;foohaha&#39;, e) }) })</p>`,44),N=i("\u4F20\u5165\u65B9\uFF1A\u6D3E\u53D1\u65B9 "),T=d(`<pre><code>\u4E8B\u4EF6\u5B9A\u4E49
  const childmittFnName = () =&gt; {/*  */
        emitter.emit(&quot;childmittFn&quot;, &#39;\u6211\u662F\u6765\u81EAchild\u7684\u4E8B\u4EF6&#39;)
        // fire an event
    }

    \u5BFC\u51FA\u4E8B\u4EF6

    return {
        childmittFnName
    }
</code></pre><p>//\u6392\u67E5\u8FC7\u7A0B\uFF0C\u4E00\u76F4\u5728\u6D4B\u8BD5\uFF0C\u6CA1\u6709\u62A5\u9519\uFF0C\u4F46\u662F\u5C31\u662F\u4E0D\u4F1A\u6253\u5370\u63A5\u6536\u65B9\uFF0C\u4E3A\u4EC0\u4E48\u3002</p><p>\uFF01\uFF01\uFF01\uFF01\uFF01\uFF01\uFF01\uFF01\uFF01\uFF01\uFF01\uFF01\uFF01\uFF01\uFF01\uFF01\uFF01\uFF01\uFF01\uFF01\uFF01 \u6700\u540E\u53D1\u73B0\u81EA\u5DF1\u8111\u5B50\u88AB\u95E8\u6324\u4E86\uFF0Chtml\u5B9A\u4E49\u51FD\u6570\u7684\u65F6\u5019\uFF0C\u5B9A\u4E49\u7684\u662F\u4E00\u4E2A\u63A5\u6536\u65B9\u7684\u51FD\u6570\u540D\u79F0\u89E6\u53D1\u3002\u8FD9\u4E2A\u4E0D\u662F\u6CA1\u627E\u8111\u5B50\u5199\u4EE3\u7801\u5417\uFF01\uFF01\uFF01\uFF01</p><p>\u4FEE\u6539\u65B9\u6CD5\u5F88\u7B80\u5355\uFF0C\u4F46\u662F\u8D39\u4E861\u4E2A\u591A\u5C0F\u65F6\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>



</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u603B\u7ED3\u901A\u4FE1\u8BF4\u660E" tabindex="-1"><a class="header-anchor" href="#\u603B\u7ED3\u901A\u4FE1\u8BF4\u660E" aria-hidden="true">#</a> \u603B\u7ED3\u901A\u4FE1\u8BF4\u660E</h3><p>provide/inject\u5C40\u9650\u4E8E\u7236\u5B50/\u7237\u5B59\u7EC4\u4EF6\u901A\u4FE1\uFF1B \u800Cmitt\u57FA\u4E8E\u4E8B\u4EF6\u603B\u7EBF\u7684\u8BA2\u9605\u53D1\u5E03\u6A21\u5F0F\uFF0C\u4EFB\u610F\u7EC4\u4EF6\u4E4B\u95F4\u90FD\u53EF\u4EE5\u901A\u4FE1\u3002</p><p>\u5F53\u7136\u901A\u4FE1\u4E5F\u53EF\u4EE5\u4F7F\u7528\u4F20\u7EDF\u7684emit</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u4ECEsetup\u4E2D\u4F20\u5165\u5F53\u524D\u7684\u4E0A\u4E0B\u6587
    setup(props, context) {
        console.log(props,&#39;\u8FD9\u4E2A\u5B50\u7EC4\u4EF6\u548C\u7236\u7EC4\u4EF6\u7684\u4F20\u53C2&#39;)
        //setup\u662F\u5728beforeCreate\u548Ccreated\u4E4B\u524D\u6267\u884C\uFF0C\u521B\u5EFA\u7684\u662Fdata\u548Cmethod
        /**
         * @description: \u5B50\u7EC4\u4EF6\u5B9E\u73B0\u4E8B\u4EF6
         * @param {*} val
         * @return {*}
         */
         const submitForm = () =&gt; {
            context.emit(&#39;mychildevent&#39;, 222) // \u540E\u5B9A\u4E49\u4E8B\u4EF6\u4EE5\u53CA\u4F20\u503C,TODO:\u6D3E\u53D1\u51FA\u53BB\u5B50\u7EC4\u4EF6\u4E0A\u9762\u7684\u81EA\u5B9A\u4E49\u4E8B\u4EF6
        }

}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_8-\u5BF9\u4E8Eaixos\u8BF7\u6C42\u5C01\u88C5\u540E\u7684\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#_8-\u5BF9\u4E8Eaixos\u8BF7\u6C42\u5C01\u88C5\u540E\u7684\u4F7F\u7528" aria-hidden="true">#</a> 8.\u5BF9\u4E8Eaixos\u8BF7\u6C42\u5C01\u88C5\u540E\u7684\u4F7F\u7528</h2><p>async\u548Cawait await\u53EF\u4EE5\u8BB2\u8FC7\u51FD\u6570\u8FD4\u56DE\u503C\u53D6\u51FA\u6765\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u4F8B\u5B50
    // \u83B7\u53D6\u6E14\u8239\u6570\u636E
    const getshipData = async () =&gt; {
      state.listData = (await getVideoList()).data;
      console.log(&quot;listData...&quot;, state.listData);

      // \u9875\u9762\u52A0\u8F7D\u5B8C\u6210\uFF0C\u7ED9\u5144\u5F1F\u7EC4\u4EF6video\u4F20\u503C
      VueEvent.emit(&quot;passInfo&quot;, state.listData);
      let name = state.listData[0].fisherName;
      handClickShip(0, name);
    };

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="vue2\u548Cvue3\u7684api\u7684\u533A\u522B" tabindex="-1"><a class="header-anchor" href="#vue2\u548Cvue3\u7684api\u7684\u533A\u522B" aria-hidden="true">#</a> vue2\u548Cvue3\u7684api\u7684\u533A\u522B</h2>`,13),R={href:"https://zhuanlan.zhihu.com/p/337871096",target:"_blank",rel:"noopener noreferrer"},B=i("\u6BD4\u8F83vue2\u548Cvue3"),S=d(`<h3 id="vue3\u4E2D\u6CA1\u6709this\u600E\u4E48\u529E" tabindex="-1"><a class="header-anchor" href="#vue3\u4E2D\u6CA1\u6709this\u600E\u4E48\u529E" aria-hidden="true">#</a> vue3\u4E2D\u6CA1\u6709this\u600E\u4E48\u529E</h3><p>vue3\u4E2D\u7EC4\u4EF6\u5B9E\u4F8B\u7ED3\u6784\u5982\u4E0B\uFF0C\u5404\u4E2A\u9009\u9879\u4E2D\u7684this\u5B9E\u9645\u4E0A\u662Fctx\u6216proxy const {ctx,proxy} = getCurrentInstance()</p><p>\u5F53\u7136\u5751\u8FD8\u662F\u6709\u7684\uFF0C\u4F60\u4ED4\u7EC6\u89C2\u5BDF\u8FD9\u4E2Actx\uFF0C\u53D1\u73B0\u5B83\u4E0D\u662F\u4E00\u4E2AProxy\u5BF9\u8C61\uFF0C\u4E5F\u5C31\u662F\u8FD9\u4F4D\u5144\u53F0\u53EA\u6709\u503C\u5374\u6CA1\u6709\u54CD\u5E94\u6027\uFF0C \u6240\u4EE5\u5982\u679C\u8981\u5229\u7528\u54CD\u5E94\u7279\u6027\uFF0C\u8FD8\u5F97\u7528proxy\u8FD9\u4E2A\u5C5E\u6027\u8FD4\u56DE\u4E0A\u4E0B\u6587\u5BF9\u8C61\uFF0C\u5982\u679C\u53EA\u662F\u60F3\u8981\u6570\u636E\uFF0C\u4E0A\u56FE\u4E2D\u4E0D\u662F\u6709\u4E2Adata\u4E5F\u662FProxy\u7C7B\u578B\u7684\u561B\u3002</p><h3 id="\u600E\u6837\u81EA\u5B9A\u4E49\u6D3E\u53D1\u4E8B\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u600E\u6837\u81EA\u5B9A\u4E49\u6D3E\u53D1\u4E8B\u4EF6" aria-hidden="true">#</a> \u600E\u6837\u81EA\u5B9A\u4E49\u6D3E\u53D1\u4E8B\u4EF6</h3><p>\u65B9\u6CD51</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>setup(props, { emit }) {
    emit(&#39;ooxx&#39;)
}
\u6216\u662F
setup(props, ctx) {
    ctx.emit(&#39;ooxx&#39;)
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u65B9\u6CD52</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>setup() {
  getCurrentInstance().emit(&#39;ooxx&#39;) 
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u5982\u4F55\u9009\u62E9\u6211\u8BE5\u5982\u4F55\u5728reactive\u548Cref\u4E4B\u95F4\u505A\u9009\u62E9" tabindex="-1"><a class="header-anchor" href="#\u5982\u4F55\u9009\u62E9\u6211\u8BE5\u5982\u4F55\u5728reactive\u548Cref\u4E4B\u95F4\u505A\u9009\u62E9" aria-hidden="true">#</a> \u5982\u4F55\u9009\u62E9\u6211\u8BE5\u5982\u4F55\u5728reactive\u548Cref\u4E4B\u95F4\u505A\u9009\u62E9\uFF1F</h3><p>composition-api\u5F15\u5165\u4E86\u72EC\u7ACB\u7684\u6570\u636E\u54CD\u5E94\u5F0F\u65B9\u6CD5reactive\uFF0C\u5B83\u53EF\u4EE5\u5C06\u4F20\u5165\u7684\u5BF9\u8C61\u505A\u54CD\u5E94\u5F0F\u5904\u7406 const state = reactive({ foo: &#39;foo&#39;, }) watchEffect(() =&gt; { console.log(state.foo) }) state.foo = &#39;foooooo&#39; // \u8F93\u51FA &#39;foooooo&#39;</p><h4 id="\u5355\u4E2A\u503C\u65F6\u7528reactive-\u663E\u5F97\u6BD4\u8F83\u591A\u4F59-\u4F7F\u7528ref-\u4F46\u662F\u8BB0\u4F4F\u4FEE\u6539\u503C-\u52A0\u4E0Avalue" tabindex="-1"><a class="header-anchor" href="#\u5355\u4E2A\u503C\u65F6\u7528reactive-\u663E\u5F97\u6BD4\u8F83\u591A\u4F59-\u4F7F\u7528ref-\u4F46\u662F\u8BB0\u4F4F\u4FEE\u6539\u503C-\u52A0\u4E0Avalue" aria-hidden="true">#</a> \u5355\u4E2A\u503C\u65F6\u7528reactive()\u663E\u5F97\u6BD4\u8F83\u591A\u4F59,\u4F7F\u7528ref,\u4F46\u662F\u8BB0\u4F4F\u4FEE\u6539\u503C\uFF0C\u52A0\u4E0Avalue</h4><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>setup() {
    const foo = ref(&#39;foo&#39;)
    return { foo } 
}
//\u5F53\u7136\u8FD9\u91CC\u6709\u4E00\u4E2A\u526F\u4F5C\u7528
\u4F46\u662FRef\u5BF9\u8C61\u4E5F\u6709\u526F\u4F5C\u7528\uFF1A\u4FEE\u6539\u503C\uFF0C\u5FC5\u987B\u52A0\u4E0Avalue

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="\u591A\u4E2A\u503C-\u4F7F\u7528reacive-\u8FD4\u56DE\u503C\u589E\u52A0torefs\u589E\u52A0\u54CD\u5E94\u5F0F" tabindex="-1"><a class="header-anchor" href="#\u591A\u4E2A\u503C-\u4F7F\u7528reacive-\u8FD4\u56DE\u503C\u589E\u52A0torefs\u589E\u52A0\u54CD\u5E94\u5F0F" aria-hidden="true">#</a> \u591A\u4E2A\u503C\uFF0C\u4F7F\u7528reacive,\u8FD4\u56DE\u503C\u589E\u52A0toRefs\u589E\u52A0\u54CD\u5E94\u5F0F</h4><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>const mouse = reactive({
    x: 0,
    y: 0
})
return {
    ...toRef(mouse)
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="watcheffect\u548Cwatch\u6709\u5565\u4E0D\u540C" tabindex="-1"><a class="header-anchor" href="#watcheffect\u548Cwatch\u6709\u5565\u4E0D\u540C" aria-hidden="true">#</a> watchEffect\u548Cwatch\u6709\u5565\u4E0D\u540C\uFF1F</h4><p>watch\u76D1\u542C\u76EE\u6807\uFF0C\u6307\u5B9A\u5C5E\u6027\u540D\u79F0 watch(() =&gt; state.counter, (val, prevVal) =&gt; {})</p><p>watchEffect\u4E0D\u9700\u8981\u6307\u5B9A\u540D\u79F0</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>watchEffect(() =&gt; {
    console.log(state.counter)
})

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>watch\u53EF\u4EE5\u83B7\u53D6\u53D8\u5316\u524D\u540E\u7684\u503C</p><p>watch\u662F\u61D2\u6267\u884C\u7684\uFF0C\u5B83\u7B49\u6548\u4E8Evue2\u4E2D\u7684this.$watch()\uFF0CwatchEffect\u4E3A\u4E86\u6536\u96C6\u4F9D\u8D56\uFF0C\u8981\u7ACB\u5373\u6267\u884C\u4E00\u6B21</p><h4 id="\u5173\u4E8E\u591A\u4E2A\u751F\u547D\u5468\u671F\u94A9\u5B50" tabindex="-1"><a class="header-anchor" href="#\u5173\u4E8E\u591A\u4E2A\u751F\u547D\u5468\u671F\u94A9\u5B50" aria-hidden="true">#</a> \u5173\u4E8E\u591A\u4E2A\u751F\u547D\u5468\u671F\u94A9\u5B50</h4><p>\u53EF\u4EE5\u5199\u591A\u4E2A\u76F8\u540C\u94A9\u5B50\uFF0C\u4F1A\u6309\u7167\u987A\u5E8F\u6267\u884C</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>setup() {
    onMounted(() =&gt; {})
  onMounted(() =&gt; {})
  onMounted(() =&gt; {})
}


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="\u53EF\u4EE5\u62C6\u5206\u5230\u72EC\u7ACB\u51FD\u6570\u4E2D-\u53BB\u6267\u884C\u4E0D\u540C\u7684\u94A9\u5B50" tabindex="-1"><a class="header-anchor" href="#\u53EF\u4EE5\u62C6\u5206\u5230\u72EC\u7ACB\u51FD\u6570\u4E2D-\u53BB\u6267\u884C\u4E0D\u540C\u7684\u94A9\u5B50" aria-hidden="true">#</a> \u53EF\u4EE5\u62C6\u5206\u5230\u72EC\u7ACB\u51FD\u6570\u4E2D\uFF0C\u53BB\u6267\u884C\u4E0D\u540C\u7684\u94A9\u5B50</h4><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>function fun1() {
  // \u8FD9\u91CC\u53EF\u4EE5\u7528onMounted\u6267\u884C\u4EE3\u7801
    onMounted(() =&gt; {})
}
function fun2() {
  // \u8FD9\u91CC\u8FD8\u53EF\u4EE5\u7528onMounted\u6267\u884C\u4EE3\u7801
    onMounted(() =&gt; {})
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="watch\u7684\u4F7F\u7528-\u8FD9\u91CC\u6CE8\u610F-\u9700\u8981\u76D1\u542C\u7684ref\u54CD\u5E94\u5F0F\u7684\u503C" tabindex="-1"><a class="header-anchor" href="#watch\u7684\u4F7F\u7528-\u8FD9\u91CC\u6CE8\u610F-\u9700\u8981\u76D1\u542C\u7684ref\u54CD\u5E94\u5F0F\u7684\u503C" aria-hidden="true">#</a> watch\u7684\u4F7F\u7528\uFF1A\u8FD9\u91CC\u6CE8\u610F\uFF0C\u9700\u8981\u76D1\u542C\u7684ref\u54CD\u5E94\u5F0F\u7684\u503C</h4><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>
  // watch \u6709\u4E09\u4E2A\u53C2\u6570\uFF1A\u7B2C\u4E00\u4E2A\u662F\u4E2Agetter\uFF08\u6240\u8C13getter\u5199\u6CD5\u5C31\u662F\u4F60\u8981\u5199\u4E2Agetter\u51FD\u6570\uFF09,\u7B2C\u4E8C\u4E2A\u662F\u4E2A\u56DE\u8C03\u51FD\u6570\uFF0C\u7B2C\u4E09\u4E2A\u662F\u4E2Aoptions(\u8FD9\u4E2A\u53C2\u6570\u662F\u653Evue2.0\u7684deep\u6216\u8005immediate\u7B49\u53EF\u9009\u9879)
    // \u7B2C\u4E00\u79CD\uFF1A\u76F4\u63A5\u653Eref
    watch(baby, () =&gt; {
      return \`I&#39;m sure,I&#39;m a 300 month baby, \${baby.value}\`
    })
   // \u7B2C\u4E8C\u79CD\uFF1A\u653Eref\u7684value\u503C\uFF0C\u4E0D\u77E5\u9053\u4E3A\u4EC0\u4E48\u4E0D\u53EF\u4EE5\u751F\u6548\uFF0C\uFF01\uFF01\uFF01\uFF01
   watch(() =&gt; baby.value, () =&gt; {
      return \`I&#39;m sure,I&#39;m a 300 month baby, \${baby.value}\`
    })







</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="watcheffect\u76D1\u542C\u7684\u7ECF\u5178\u4F7F\u7528-oninvalidate\u505A\u4E00\u4E9B\u4E8B\u4EF6\u9500\u6BC1\u79FB\u9664" tabindex="-1"><a class="header-anchor" href="#watcheffect\u76D1\u542C\u7684\u7ECF\u5178\u4F7F\u7528-oninvalidate\u505A\u4E00\u4E9B\u4E8B\u4EF6\u9500\u6BC1\u79FB\u9664" aria-hidden="true">#</a> watchEffect\u76D1\u542C\u7684\u7ECF\u5178\u4F7F\u7528\uFF0ConInvalidate\u505A\u4E00\u4E9B\u4E8B\u4EF6\u9500\u6BC1\u79FB\u9664</h4><pre><code>// TODO:\u8FD8\u6709\u4E00\u79CD,\u6211\u4EEC\u76D1\u542C\u5B8C\u6210\u4E00\u4E2A\u4E8B\u4EF6\uFF0C\u7136\u540E\u5C06\u8FD9\u4E2A\u4E8B\u4EF6\u79FB\u9664\uFF0C\u907F\u514D\u5185\u5B58\u6CC4\u9732
watchEffect((onInvalidate) =&gt; {
  // \u8FD9\u91CC\u7684\u53D8\u5316\u5C31\u76F8\u5F53\u4E8E\u4F9D\u8D56\u4E86age.value\uFF0C\u5982\u679Cage\u53D8\u5316\u4E86\u5C31\u4F1A\u89E6\u53D1\u8FD9\u4E2A\u76D1\u542C
  // \u521A\u521A\u521B\u5EFA\u7EC4\u4EF6\u7684\u65F6\u5019\u4F1A\u7ACB\u5373\u6267\u884C\u8FD9\u4E2A
  const _age = \`her age is \${baby.value}\`;
  console.log(_age);
  debugger;
  //\u6709\u65F6\u5019\u4F60\u9700\u8981\u5728\u8FD9\u91CC\u6302\u8F7D\u4E00\u4E9B\u76D1\u542C\u4E8B\u4EF6
  const handerClick = () =&gt; {};
  document.addEventListener(&quot;click&quot;, handerClick);
  // \u5728vue2.0\u6211\u4EEC\u9700\u8981\u5728destroy\u7684\u65F6\u5019remove\u5B83\uFF0C\u8FD9\u91CC\u63D0\u4F9B\u4E86\u4E00\u4E2A\u65B9\u6CD5onInvalidate\u56DE\u8C03\u89E3\u51B3remove\u7684\u95EE\u9898
  onInvalidate(() =&gt; {
    /*
    \u6267\u884C\u65F6\u673A:  \u5728\u526F\u4F5C\u7528\u5373\u5C06\u91CD\u65B0\u6267\u884C\u65F6\uFF0C\u5C31\u662F\u5728\u6BCF\u6B21\u6267\u884C\u8FD9\u4E2AwatchEffect\u56DE\u8C03\u7684\u65F6\u5019\u4F1A\u5148\u6267\u884C\u8FD9\u4E2A,\u5982\u679C\u5728setup()\u6216\u751F\u547D\u5468\u671F\u94A9\u5B50\u51FD\u6570\u4E2D\u4F7F\u7528watchEffect, \u5219\u5728\u5378\u8F7D\u7EC4\u4EF6\u65F6\u6267\u884C\u6B64\u51FD\u6570\u3002
   */
    document.removeEventListener(&quot;click&quot;, handerClick);
  });
});
</code></pre><h4 id="vue3\u5982\u4F55\u5168\u5C40\u7ED1\u5B9A\u65B9\u6CD5\u6216\u662F\u5C5E\u6027" tabindex="-1"><a class="header-anchor" href="#vue3\u5982\u4F55\u5168\u5C40\u7ED1\u5B9A\u65B9\u6CD5\u6216\u662F\u5C5E\u6027" aria-hidden="true">#</a> vue3\u5982\u4F55\u5168\u5C40\u7ED1\u5B9A\u65B9\u6CD5\u6216\u662F\u5C5E\u6027</h4><p>CreateApp(App).config.globalProperties.$emm = xxx</p><p>\u7136\u540E\uFF0C\u76EE\u524D\u4E2A\u4EBA\u53EA\u80FD\u66F2\u7EBF\u627E\u5230\u65B9\u6848\uFF0C\u901A\u8FC7\u4F7F\u7528method\u65B9\u6CD5\uFF0Cvue2\u4E2D\u7684\uFF0C\u7136\u540Ethis\uFF0C\u81EA\u7136\u627E\u5230\uFF0C\u8FD9\u4E2A\u65F6\u5019\uFF0Cthis.$emm\u53EF\u4EE5</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>    methods: {
        // TODO:\u5B9A\u4E49\u5728method\u4E2D\uFF0C\u4E0D\u7528return\uFF0C\u5C31\u53EF\u4EE5\u4F7F\u7528
        handleClick() {
            //   this.$bus.$emit(&#39;click&#39;)
            this.$bus.$emit(&quot;childmittFn&quot;, &#39;\u6211\u662F\u6765\u81EAchild\u7684\u4E8B\u4EF6&#39;)
        }
    }


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>--------------------\u4F46\u662Fvue3\u4E2D\uFF0C\u8BF4\u662Fproxy\u6216\u662Fctx,\u53EF\u4EE5\uFF0C\u4F46\u662F\u5B9E\u9645\u4F7F\u7528\uFF0C\u5168\u662F\u627E\u4E0D\u5230\u8FD9\u4E2A\u5168\u5C40\u5C5E\u6027\uFF01\uFF01\uFF01\uFF01\uFF01\uFF01\uFF01\u4E0D\u77E5\u9053\u4E3A\u4EC0\u4E48</p><h2 id="_9-\u5982\u4F55\u5FEB\u901F\u5C06\u63A5\u53E3\u6539\u9020\u6210async\u548Cawait" tabindex="-1"><a class="header-anchor" href="#_9-\u5982\u4F55\u5FEB\u901F\u5C06\u63A5\u53E3\u6539\u9020\u6210async\u548Cawait" aria-hidden="true">#</a> 9.\u5982\u4F55\u5FEB\u901F\u5C06\u63A5\u53E3\u6539\u9020\u6210async\u548Cawait</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>
export function  exampleapi (params) {
    return  request({
            url: \`admin\`,
            method: &quot;GET&quot;,
            params
    })
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6539\u9020\uFF0C\u56E0\u4E3Aasync\u9ED8\u8BA4\u8FD4\u56DE\u4E00\u4E2Apromise\uFF0C\u7528new Promise\u5305\u88F9\u4E00\u4E0B\u5373\u53EF</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>export function  exampleapi (params) {
    return  new Promise(()=&gt;{
        request({
            url: \`admin\`,
            method: &quot;GET&quot;,
            params
        });
    })
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_10\u4E3A\u4EC0\u4E48\u6709\u4EBA\u5410\u69FDvue3-0\u6CA1\u6709vue2-0\u597D\u7528" tabindex="-1"><a class="header-anchor" href="#_10\u4E3A\u4EC0\u4E48\u6709\u4EBA\u5410\u69FDvue3-0\u6CA1\u6709vue2-0\u597D\u7528" aria-hidden="true">#</a> 10\u4E3A\u4EC0\u4E48\u6709\u4EBA\u5410\u69FDvue3.0\u6CA1\u6709vue2.0\u597D\u7528</h2><h3 id="\u4E00\u3001\u5B8C\u5168\u629B\u5F03options-api\u7684\u4F5C\u98CE-\u6539\u7528composition-api\u7684\u5199\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u4E00\u3001\u5B8C\u5168\u629B\u5F03options-api\u7684\u4F5C\u98CE-\u6539\u7528composition-api\u7684\u5199\u6CD5" aria-hidden="true">#</a> \u4E00\u3001\u5B8C\u5168\u629B\u5F03options api\u7684\u4F5C\u98CE\uFF0C\u6539\u7528composition api\u7684\u5199\u6CD5</h3><p>\u4E86\u89E3vue2.0\u7684\u90FD\u77E5\u9053vue2.0\u662F\u57FA\u4E8E\u914D\u7F6E\u53C2\u6570\u7684\u98CE\u683C\u53BB\u5F00\u53D1\u7684\uFF0C\u6240\u6709\u7684\u4EE3\u7801\u90FD\u4F1A\u5DF2\u914D\u7F6E\u4E3A\u5165\u53E3\uFF0C\u5982data, method, computed, filter,watch\u8FD9\u6837\u7684\u64CD\u4F5C\u90FD\u662F\u9700\u8981\u914D\u7F6E\u5165\u53E3\u7684</p><p>\u4F46\u662Fvue3.0\u5B8C\u5168\u629B\u5F03\u8FD9\u6837\u7684\u505A\u6CD5\u3002\u91C7\u7528\u4E86\u7C7B\u4F3Creact\u7684hooks\u7684\u4F5C\u98CE\uFF0C\u5982reactive, coumputed\u8FD9\u4E2A\u7684hooks.</p><p>\u4E3A\u4EC0\u4E48\u4F7F\u7528\u4E86hook\uFF0C\u5728vue3\u4E2D \u53D1\u73B0options api\u5728\u4E00\u4E9B\u60C5\u51B5\u4E0B\u4F1A\u9020\u6210\u95EE\u9898\uFF0C\u5F53\u9879\u76EE\u5E9E\u5927\u65F6\uFF0C\u65E0\u6CD5\u505A\u4EE3\u7801\u7684\u62BD\u79BB\u548C\u8C03\u5EA6\uFF0C\u867D\u7136\u5728vue2.0\u4E2D\u63D0\u4F9B\u4E86mixins\u8FD9\u6837\u7684options \u4F46\u662F\u5927\u91CF\u7684mixins\u7684\u4F7F\u7528\u4F1A\u9020\u6210\u4EE3\u7801\u7684\u6DF7\u4E71\u548C\u96BE\u4EE5\u7EF4\u62A4\u6027\uFF0C</p><p>\u56E0\u6B64\u5C24\u96E8\u6EAA\u8FD8\u662F\u624D\u505A\u7528\u4E86\u7C7B\u4F3Creact\u7684composition api\u7684\u4F5C\u98CE</p>`,44);function H(t,l){const a=r("RouterLink"),v=r("ExternalLinkIcon");return o(),m("div",null,[e("nav",p,[e("ul",null,[e("li",null,[n(a,{to:"#\u770B\u4E0D\u61C2\u7684ts\u9879\u76EE-tsc\u7F16\u8BD1\u6587\u4EF6\u591A\u6B21\u770B"},{default:s(()=>[b]),_:1})]),e("li",null,[n(a,{to:"#\u597D\u7528\u7684\u5C0F\u529F\u80FD-vue3\u597D\u7528\u7684\u5730\u65B9"},{default:s(()=>[x]),_:1})]),e("li",null,[n(a,{to:"#_1-script\u589E\u52A0setup\u540E-\u5BFC\u5165\u6A21\u5757\u540E-\u4E0D\u9700\u8981\u518D\u6CE8\u518C"},{default:s(()=>[f]),_:1})]),e("li",null,[n(a,{to:"#_2-process\u5728vite\u4E2D\u79FB\u9664"},{default:s(()=>[g]),_:1})]),e("li",null,[n(a,{to:"#_3-components\u914D\u7F6E\u662F\u5BF9\u8C61"},{default:s(()=>[_]),_:1})]),e("li",null,[n(a,{to:"#_4-\u5B50\u7EC4\u4EF6\u4FEE\u6539\u7236\u7EC4\u4EF6"},{default:s(()=>[w]),_:1})]),e("li",null,[n(a,{to:"#_5-provide\u548Cinject"},{default:s(()=>[q]),_:1})]),e("li",null,[n(a,{to:"#_6-vue3\u65F6\u4EE3-\u4F60\u5E94\u8BE5\u5168\u9762\u62E5\u62B1\u4F9D\u8D56\u6CE8\u5165"},{default:s(()=>[y]),_:1}),e("ul",null,[e("li",null,[n(a,{to:"#vue3\u7684\u5168\u5C40\u72B6\u6001\u7BA1\u7406-\u629B\u5F03vuex-\u4F7F\u7528\u81EA\u5DF1\u5B9A\u4E49\u7684\u55EF\u8F6C\u5B9E\u73B0"},{default:s(()=>[k]),_:1})])])]),e("li",null,[n(a,{to:"#\u7236\u5B50\u4EF6\u901A\u4FE1"},{default:s(()=>[j]),_:1}),e("ul",null,[e("li",null,[n(a,{to:"#vue3\u642D\u5EFA\u4E8B\u4EF6\u603B\u7EBF\u673A\u5236"},{default:s(()=>[V]),_:1})]),e("li",null,[n(a,{to:"#\u4F7F\u7528\u65B9\u6CD5"},{default:s(()=>[E]),_:1})]),e("li",null,[n(a,{to:"#\u603B\u7ED3\u901A\u4FE1\u8BF4\u660E"},{default:s(()=>[I]),_:1})])])]),e("li",null,[n(a,{to:"#_8-\u5BF9\u4E8Eaixos\u8BF7\u6C42\u5C01\u88C5\u540E\u7684\u4F7F\u7528"},{default:s(()=>[C]),_:1})]),e("li",null,[n(a,{to:"#vue2\u548Cvue3\u7684api\u7684\u533A\u522B"},{default:s(()=>[F]),_:1}),e("ul",null,[e("li",null,[n(a,{to:"#vue3\u4E2D\u6CA1\u6709this\u600E\u4E48\u529E"},{default:s(()=>[M]),_:1})]),e("li",null,[n(a,{to:"#\u600E\u6837\u81EA\u5B9A\u4E49\u6D3E\u53D1\u4E8B\u4EF6"},{default:s(()=>[$]),_:1})]),e("li",null,[n(a,{to:"#\u5982\u4F55\u9009\u62E9\u6211\u8BE5\u5982\u4F55\u5728reactive\u548Cref\u4E4B\u95F4\u505A\u9009\u62E9"},{default:s(()=>[D]),_:1})])])]),e("li",null,[n(a,{to:"#_9-\u5982\u4F55\u5FEB\u901F\u5C06\u63A5\u53E3\u6539\u9020\u6210async\u548Cawait"},{default:s(()=>[A]),_:1})]),e("li",null,[n(a,{to:"#_10\u4E3A\u4EC0\u4E48\u6709\u4EBA\u5410\u69FDvue3-0\u6CA1\u6709vue2-0\u597D\u7528"},{default:s(()=>[O]),_:1}),e("ul",null,[e("li",null,[n(a,{to:"#\u4E00\u3001\u5B8C\u5168\u629B\u5F03options-api\u7684\u4F5C\u98CE-\u6539\u7528composition-api\u7684\u5199\u6CD5"},{default:s(()=>[P]),_:1})])])])])]),L,e("p",null,[N,e("button",{onClick:l[0]||(l[0]=(...c)=>t.childmittFn&&t.childmittFn(...c))},"mitt\u70B9\u51FB\u4E8B\u4EF6\u5B50\u7EC4\u4EF6\u53D1\u52A8\u4E00\u4E2A\u4E8B\u4EF6")]),T,e("p",null,[e("a",R,[B,n(v)])]),S])}var G=u(h,[["render",H],["__file","002vue3\u4F7F\u7528\u6C47\u603B\u95EE\u9898\u8BB0\u5F55\u548C\u89E3\u51B3\u65B9\u6848(2).html.vue"]]);export{G as default};
