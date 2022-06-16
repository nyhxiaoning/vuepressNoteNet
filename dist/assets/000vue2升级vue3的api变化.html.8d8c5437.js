import{_ as l,r as t,o as a,c as r,a as e,b as i,w as d,e as v,d as s}from"./app.f4a46bbc.js";const c={},u={class:"table-of-contents"},o=s("\u4E00.Composition API"),m=s("\u4E8C reactive \u7C7B\u5DE5\u5177 API"),b=s("\u4E09 ref \u7C7B\u5DE5\u5177 API"),p=s("\u56DB. \u5E94\u7528\u914D\u7F6E\uFF08\u539F\u5168\u5C40\u914D\u7F6E\u548C\u5168\u5C40 API\uFF09"),g=s("\u4E94. \u5168\u5C40 API\uFF08\u65B0\u589E\uFF09"),h=s("\u516D. \u9009\u9879 / \u6570\u636E"),x=s("\u4E03. \u9009\u9879 / DOM(\u4E0D\u53D8)"),f=s("\u516B. \u9009\u9879 / \u751F\u547D\u5468\u671F\u94A9\u5B50"),_=s("\u4E5D. \u9009\u9879 / \u8D44\u6E90"),y=s("\u5341\u4E00. \u9009\u9879 / \u5176\u5B83"),R=s("\u5341\u4E8C. \u5B9E\u4F8B property"),q=s("\u5341\u4E09. \u5B9E\u4F8B\u65B9\u6CD5 / \u6570\u636E"),w=s("\u5341\u56DB. \u5B9E\u4F8B\u65B9\u6CD5 / \u4E8B\u4EF6"),A=s("\u5341\u4E94. \u5B9E\u4F8B\u65B9\u6CD5 / \u751F\u547D\u5468\u671F"),C=s("\u5341\u516D. \u6307\u4EE4"),V=s("\u5341\u4E03. \u7279\u6B8A attribute"),k=s("\u5341\u516B. \u5185\u7F6E\u7684\u7EC4\u4EF6"),P=s("\u5341\u4E5D. \u603B\u7ED3"),I=v(`<p>vue3 \u65B0\u5185\u5BB9</p><h2 id="\u4E00-composition-api" tabindex="-1"><a class="header-anchor" href="#\u4E00-composition-api" aria-hidden="true">#</a> \u4E00.Composition API</h2><p>\u5C06\u6570\u636E\u3001\u65B9\u6CD5\u3001computed\u3001\u751F\u547D\u5468\u671F\u51FD\u6570, \u96C6\u4E2D\u5199\u5728\u4E00\u4E2A\u5730\u65B9\u3002<br> 1.1 setup()<br><code>setup()</code>\u4F5C\u4E3A\u5728\u7EC4\u4EF6\u5185\u4F7F\u7528<code>Composition API</code>\u7684\u5165\u53E3\u70B9\u3002\u6267\u884C\u65F6\u673A\u662F\u5728<code>beforeCreate</code>\u548C<code>created</code>\u4E4B\u95F4, \u4E0D\u80FD\u4F7F\u7528 this \u83B7\u53D6\u7EC4\u4EF6\u7684\u5176\u4ED6\u53D8\u91CF\uFF0C\u800C\u4E14\u4E0D\u80FD\u662F\u5F02\u6B65\u3002<code>setup</code>\u8FD4\u56DE\u7684\u5BF9\u8C61\u548C\u65B9\u6CD5\uFF0C\u90FD\u53EF\u4EE5\u5728\u6A21\u7248\u4E2D\u4F7F\u7528\u3002<br> setup \u6709\u4E24\u4E2A\u53C2\u6570,<code>props</code>,<code>context</code>\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>&lt;script lang=&quot;js&quot;&gt;
import {toRefs} from &#39;vue&#39;
export default {
    name: &#39;demo&#39;,
    props:{
      name: String,
    },
    setup(props, context){
      // \u8FD9\u91CC\u9700\u8981\u4F7F\u7528toRefs\u6765\u8FDB\u884C\u89E3\u6784
      // \u8FD9\u91CC\u7684props\u4E0Evue2\u57FA\u672C\u4E00\u81F4,\u5F53\u7136\u8FD9\u91CC\u7684name\u4E5F\u53EF\u4EE5\u76F4\u63A5\u5728template\u4E2D\u4F7F\u7528
      const { name }=toRefs(props);
      console.log(name.value);
      // \u53EA\u80FD\u83B7\u53D6\u5230\u8FD9\u4E09\u4E2A\u5C5E\u6027,\u4E5F\u662F\u4E0D\u80FD\u4F7F\u7528ES6\u7684\u89E3\u6784
      // \u5C5E\u6027\uFF0C\u540Cvue2\u7684$attrs
      console.log(context.attrs);
      // \u63D2\u69FD
      console.log(context.slots);
      // \u4E8B\u4EF6\uFF0C\u540Cvue2\u7684$emit
      console.log(context.emit);
  }
}
&lt;/script&gt;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>1.2 reactive<br><code>vue3</code>\u5C06\u54CD\u5E94\u5F0F\u7684\u529F\u80FD\u548C vue \u4EE3\u7801\u89E3\u8026\uFF0C\u5355\u72EC\u4F5C\u4E3A\u4E00\u4E2A js \u5E93\u6765\u8C03\u7528\u3002\uFF08\u5728\u5176\u4ED6\u4EFB\u4F55 js \u8FD0\u884C\u7684\u6846\u67B6\u5F53\u4E2D\uFF0C\u90FD\u53EF\u4EE5\u5F15\u5165\u548C\u4F7F\u7528<code>vue3</code>\u7684\u8FD9\u4E2A\u54CD\u5E94\u5F0F\u529F\u80FD\uFF09\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>&lt;template&gt;
  &lt;div&gt;{{ state.text }}&lt;/div&gt;
  &lt;button @click=&quot;test&quot;&gt;\u6D4B\u8BD5\u4E00\u4E0B\uFF1F&lt;/button&gt;
&lt;/template&gt;
&lt;script&gt;
import { reactive } from &#39;vue&#39;;
export default {
  setup() {
    // \u901A\u8FC7reactive\u58F0\u660E\u4E00\u4E2A\u53EF\u54CD\u5E94\u5F0F\u7684\u5BF9\u8C61
    const state = reactive({ text: &quot;\u6211\u5E05\u5417&quot; });
    // \u901A\u8FC7reactive\u58F0\u660E\u4E00\u4E2A\u53EF\u54CD\u5E94\u5F0F\u7684\u6570\u7EC4
    const state1 = reactive([ text: &quot;\u6211\u5E05\u5417&quot; ]);
    // \u58F0\u660E\u4E00\u4E2A\u4FEE\u6539\u65B9\u6CD5
    const test = () =&gt; state.text = &#39;\u4F60\u5F88\u4E11&#39;;
    // \u8FD4\u56DEstate\u548C\u65B9\u6CD5
    return { state,test };
  }
};
&lt;/script&gt;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8FD9\u662F\u4E00\u4E2A\u8DDF<code>vue2</code>\u6BD4\u8F83\u5927\u7684\u533A\u522B\uFF0C\u4F7F\u7528\u4E0A\u9762\u7684\u65B9\u6CD5\uFF0C\u624D\u80FD\u5B9E\u73B0\u6570\u636E\u7684\u54CD\u5E94\u5F0F\u3002\u7136\u540E\u8FD9\u91CC\u7684\u5BF9\u8C61\u53EF\u4EE5\u968F\u610F\u8D4B\u503C\uFF0C\u4E0D\u4F1A\u51FA\u73B0<code>vue2</code>\u4E2D\u6DF1\u5C42\u672A\u5B9A\u4E49\u7684\u5BF9\u8C61\u503C\u8D4B\u503C\u4E0D\u80FD\u54CD\u5E94\u5F0F\u7684\u95EE\u9898\u3002\u56E0\u4E3A\u73B0\u5728 vue \u7684\u5E95\u5C42\u662F\u7528<code>proxy</code>\u5B9E\u73B0\u7684\u6570\u636E\u76D1\u542C\u3002<br><strong>\u6CE8\u610F\uFF1A\u8FD9\u91CC\u7684\u5143\u7D20\u53EA\u80FD\u662F\u5BF9\u8C61\u6216\u8005\u6570\u7EC4\uFF0C\u57FA\u672C\u6570\u636E\u7C7B\u578B\u9700\u8981\u4F7F\u7528 ref</strong><br> 1.3 ref<br> \u58F0\u660E\u54CD\u5E94\u5F0F\u7684\u57FA\u672C\u6570\u636E\u7C7B\u578B</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>import { ref } from &#39;vue&#39;;
export default {
  setup(){
    const a = ref(1);
    const b = ref(&#39;1&#39;);
    const c = ref(true);
    // \u58F0\u660E\u4E00\u4E2A\u4FEE\u6539\u65B9\u6CD5
    const test = () =&gt; {
      // \u6CE8\u610F\uFF1A\u5728setup\u91CC\u9762\u4FEE\u6539ref\u7684\u503C\u662F\u9700\u8981\u901A\u8FC7.value\u7684\uFF0Ctemplate\u505A\u4E86\u89E3\u5957\uFF0C\u6240\u4EE5\u4E0D\u9700\u8981\u3002
      // ref \u4F5C\u4E3A reactive\u7684\u5BF9\u8C61\u7684\u503C\u65F6\u4E0D\u9700\u8981.value
      // ref \u4F5C\u4E3A reactive\u7684\u6570\u7EC4\u7684\u503C\u65F6\u9700\u8981.value
      a.value = 2;
      b.value = &#39;1&#39;;
      c.value = false;
    };
    return { a, b, c, test };
  }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u83B7\u53D6 DOM \u5143\u7D20</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>&lt;template&gt;
  &lt;div ref=&quot;testDom&quot;&gt;&lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
import { ref, onMounted } from &#39;vue&#39;;
export default {
  setup(){
    const testDom = ref(null);
    //\u4F7F\u7528onMounted\u94A9\u5B50,\u7C7B\u4F3C\u5728vue2\u7684mounted\u751F\u547D\u5468\u671F\u4E2D\u64CD\u4F5C\u5143\u7D20
    onMounted(() =&gt; {
      // \u8BB0\u5F97\u8981\u52A0.value
      console.log(testDom.value);
    })
    return { testDom };
  }
}
&lt;/script&gt;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>1.4 readonly</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>const state = reactive({ name: 0 })
const readOnlyState = readonly(state)
// \u53EF\u4EE5\u4FEE\u6539
state.name = &#39;\u5E05&#39;;
// \u65E0\u6CD5\u4FEE\u6539\u5E76\u8B66\u544A
readOnlyState.name = &#39;\u5E05&#39;;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u4E8C-reactive-\u7C7B\u5DE5\u5177-api" tabindex="-1"><a class="header-anchor" href="#\u4E8C-reactive-\u7C7B\u5DE5\u5177-api" aria-hidden="true">#</a> \u4E8C reactive \u7C7B\u5DE5\u5177 API</h2><p>2.1 isProxy\uFF0C isReactive\uFF0CisReadonly<br> isProxy \u662F\u68C0\u67E5\u4E00\u4E2A\u5BF9\u8C61\u662F\u5426\u662F\u7531 reactive \u6216\u8005 readonly \u65B9\u6CD5\u521B\u5EFA\u7684\u4EE3\u7406\u3002\u540E\u9762\u4E24\u4E2A\u662F\u5355\u72EC\u7684\u68C0\u6D4B\u3002 \u6CE8\u610F\uFF1A\u53EA\u8981\u68C0\u6D4B\u7684\u5BF9\u8C61\u91CC\u6709 reactive\uFF0C\u5C31\u7B97\u88AB readonly \u5904\u7406\u8FC7\u4E86\uFF0CisReactive \u4E5F\u4E3A true\u3002<br> 2.2 toRaw<br> \u628A\u88AB\u4EE3\u7406\u6216\u8005\u54CD\u5E94\u5F0F\u7684\u5BF9\u8C61\u8F6C\u6362\u6210\u666E\u901A\u5BF9\u8C61</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code> const state = {} 
const stateReactive = reactive(state) 
console.log(toRaw(stateReactive) === state) // true 

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>2.3 markRaw<br> \u7981\u6B62\u8FD9\u4E2A\u5BF9\u8C61\u6210\u4E3A\u54CD\u5E94\u5F0F</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code> const state = markRaw({ name: &#39;\u5E05&#39; }) console.log(isReactive(reactive(state))) // false

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>\u6CE8\u610F\uFF0CmarkRaw \u53EA\u4F5C\u7528\u4E8E\u6839\u5143\u7D20\uFF0C\u5982\u679C\u4F7F\u7528\u5B50\u5143\u7D20\u53BB\u8D4B\u503C\uFF0C\u8FD8\u662F\u53EF\u4EE5\u8F6C\u6210\u54CD\u5E94\u5F0F\u4EE3\u7406</strong></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code> const state = markRaw({   data: { id: 123 }, }) 
const newState = reactive({   data: state.data, }) 
console.log(isReactive(newState.data)) // true 

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>2.4 shallowReactive, shallowReadonly<br> \u8DDF\u4E0A\u9762<code>reactive</code>,<code>readonly</code>\u7684\u4F5C\u7528\u4E00\u6837\uFF0C\u533A\u522B\u662F\u8FD9\u4E24\u4E2A\u65B9\u6CD5\u662F\u6D45\u5C42\u7684\u76D1\u542C\u3002 \u53EA\u4F1A\u5BF9\u7B2C\u4E00\u5C42\u54CD\u5E94\u5F0F\uFF0C\u6DF1\u5C42\u6B21\u7684\u6570\u636E\u4E0D\u4F1A\u54CD\u5E94</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code> const state = shallowReactive({ name: &#39;123&#39;, test: { id: 1 } }) 
const test = () =&gt; {   // \u6DF1\u5C42\u6B21\u6570\u636E\u7684\u53D8\u5316\u4E0D\u4F1A\u89E6\u53D1\u54CD\u5E94\u5F0F   state.test.id = 2; };

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u4E09-ref-\u7C7B\u5DE5\u5177-api" tabindex="-1"><a class="header-anchor" href="#\u4E09-ref-\u7C7B\u5DE5\u5177-api" aria-hidden="true">#</a> \u4E09 ref \u7C7B\u5DE5\u5177 API</h2><p>3.1 isRef<br> \u68C0\u67E5\u4E00\u4E2A\u503C\u662F\u5426\u4E3A\u4E00\u4E2A<code>ref</code>\u5BF9\u8C61<br> 3.2 toRef<br> \u7528\u6765\u4F5C\u4E3A\u4E00\u4E2A<code>reactive</code>\u5BF9\u8C61\u7684\u5C5E\u6027, \u4FDD\u6301\u54CD\u5E94\u5F0F</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code> const state = reactive({   a: 0 }) // \u4F5C\u4E3A\u4E00\u4E2Areactive\u5BF9\u8C61\u7684\u5C5E\u6027 
const aRef = toRef(state, &#39;a&#39;) // \u5728\u8FD9\u91CC\u4FEE\u6539\u8BFB\u53D6Ref\u8981\u4F7F\u7528.
value aRef.value++ console.log(state.a) // 1 
 state.a++ console.log(aRef.value) // 2 


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>3.3 toRefs<br> \u5C06\u54CD\u5E94\u5F0F\u5BF9\u8C61\u8F6C\u6362\u4E3A\u666E\u901A\u5BF9\u8C61 (\u7C7B\u4F3C\u89E3\u6784)\uFF0C\u4F46\u662F\u8FD8\u53EF\u4EE5\u4FDD\u7559\u54CD\u5E94\u5F0F\u3002\u53EF\u4EE5\u7528\u6765\u5BF9\u4E00\u4E9B\u54CD\u5E94\u5F0F\u53D8\u91CF\u591A\u6B21\u590D\u7528\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code> function useFeatureX() { const state = reactive({     foo: 1,     bar: 2   })  
 return toRefs(state) } export default { 
  setup() {    
 // \u53EF\u4EE5\u5728\u4E0D\u5931\u53BB\u54CD\u5E94\u5F0F\u7684\u60C5\u51B5\u4E0B\u590D\u7528
 const { foo, bar } = useFeatureX()    
 return {       foo,       bar     } 
  }
 } 
 

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>3.4 unref<br> \u83B7\u53D6 ref \u503C\u7684\u8BED\u6CD5\u7CD6</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code> val = isRef(val) ? val.value : val 

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>3.5 customRef</p><p>\u521B\u5EFA\u4E00\u4E2A\u81EA\u5B9A\u4E49\u7684<code>ref</code>, \u5BF9\u5B83\u7684\u8BFB\u5199\u8FDB\u884C\u624B\u52A8\u63A7\u5236\u3002\u8FD9\u662F\u6587\u6863\u4E0A\u7684\u4E00\u4E2A\u9632\u6296\u7684\u4F8B\u5B50</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code> &lt;input v-model=&quot;text&quot; /&gt; 

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>function useDebouncedRef(value, delay = 200) {
  let timeout
  return customRef((track, trigger) =&gt; {
    return {
      get() {
        // \u8BFB\u503C\u7684\u65F6\u5019,\u89E6\u53D1\u4F9D\u8D56
        track()
        return value
      },
      set(newValue) {
        clearTimeout(timeout)
        timeout = setTimeout(() =&gt; {
          value = newValue
          // \u5199\u503C\u7684\u65F6\u5019\uFF0C\u8FDB\u884C\u9632\u6296\uFF0C\u89E6\u53D1\u4F9D\u8D56
          trigger()
        }, delay)
      }
    }
  })
}

export default {
  setup() {
    return {
      text: useDebouncedRef(&#39;hello&#39;)
    }
  }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>3.6 shallowRef, triggerRef<br> shallowRef \u6570\u636E\u662F\u6CA1\u6709\u54CD\u5E94\u5F0F\u7684\uFF0C\u4F46\u662F\u53EF\u4EE5\u4F7F\u7528 triggerRef \u6765\u624B\u52A8\u89E6\u53D1</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code> const shallow = shallowRef({   greet: &#39;Hello, world&#39; }) 
shallow.value.greet = &#39;Hello, universe&#39; triggerRef(shallow) //\u624B\u52A8\u89E6\u53D1\u54CD\u5E94\u5F0F 

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="4"><li>computed and watch<br> 4.1 computed</li></ol><ul><li>\u4F20\u5165\u4E00\u4E2A getter \u51FD\u6570\uFF0C\u8FD4\u56DE\u4E00\u4E2A\u9ED8\u8BA4\u4E0D\u53EF\u624B\u52A8\u4FEE\u6539\u7684 ref \u5BF9\u8C61</li><li>\u5177\u6709 get \u548C set \u51FD\u6570\u7684\u5BF9\u8C61\u6765\u521B\u5EFA\u53EF\u5199\u7684 ref \u5BF9\u8C61</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code> const count = ref(1)
// \u53EA\u8BFB\u7684
const plusOne = computed(() =&gt; count.value + 1)
// \u53EF\u66F4\u6539\u7684
const plusOne = computed({
  get: () =&gt; count.value + 1,
  set: (val) =&gt; {
    count.value = val - 1
  },
})

plusOne.value = 1
console.log(count.value) // 0

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>4.2 watchEffect<br> \u7ACB\u5373\u6267\u884C\u4F20\u5165\u7684\u4E00\u4E2A\u51FD\u6570\uFF0C\u5E76\u54CD\u5E94\u5F0F\u8FFD\u8E2A\u5176\u4F9D\u8D56\uFF0C\u5E76\u5728\u5176\u4F9D\u8D56\u53D8\u66F4\u65F6\u91CD\u65B0\u8FD0\u884C\u8BE5\u51FD\u6570\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code> const count = ref(0) 
watchEffect(() =&gt; console.log(count.value)) // \u6253\u5370\u51FA 0,\u521D\u59CB\u5316\u7684\u65F6\u5019\u5C31\u4F1A\u6253\u5370 
setTimeout(() =&gt; {   count.value++   // -&gt; \u6253\u5370\u51FA 1 }, 100) 

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>\u505C\u6B62\u89C2\u5BDF</strong><br> \u5378\u8F7D\u7EC4\u4EF6\u7684\u65F6\u5019\u4F1A\u81EA\u52A8\u505C\u6B62\uFF0C\u4E5F\u53EF\u4EE5\u624B\u52A8\u505C\u6B62\u76D1\u542C</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code> const stop = watchEffect(() =&gt; {   /* ... */ }) // \u505C\u6B62\u76D1\u542C\u7A0B\u5E8F stop() 

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>\u526F\u4F5C\u7528</strong><br> \u5982\u679C\u4E00\u4E2A\u51FD\u6570\u5185\u5916\u6709\u4F9D\u8D56\u4E8E\u5916\u90E8\u53D8\u91CF\u6216\u8005\u73AF\u5883\u65F6\uFF0C\u5E38\u5E38\u6211\u4EEC\u79F0\u4E4B\u4E3A\u5176\u6709\u526F\u4F5C\u7528\uFF0C\u5982\u679C\u6211\u4EEC\u4EC5\u901A\u8FC7\u51FD\u6570\u7B7E\u540D\u4E0D\u6253\u5F00\u5185\u90E8\u4EE3\u7801\u68C0\u67E5\u5E76\u4E0D\u80FD\u77E5\u9053\u8BE5\u51FD\u6570\u5728\u5E72\u4EC0\u4E48\uFF0C\u4F5C\u4E3A\u4E00\u4E2A\u72EC\u7ACB\u51FD\u6570\u6211\u4EEC\u671F\u671B\u6709\u660E\u786E\u7684\u8F93\u5165\u548C\u8F93\u51FA\uFF0C\u526F\u4F5C\u7528\u662F bug \u7684\u53D1\u6E90\u5730\uFF0C\u4F5C\u4E3A\u7A0B\u5E8F\u5458\u5F00\u53D1\u8005\u5E94\u5C3D\u91CF\u5C11\u7684\u5F00\u53D1\u6709\u526F\u4F5C\u7528\u7684\u51FD\u6570\u6216\u65B9\u6CD5\uFF0C\u526F\u4F5C\u7528\u4E5F\u4F7F\u5F97\u65B9\u6CD5\u901A\u7528\u6027\u4E0B\u964D\u4E0D\u9002\u5408\u6269\u5C55\u548C\u53EF\u91CD\u7528\u6027</p><p><strong>\u8FD0\u884C\u65F6\u673A</strong></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code> // \u521D\u59CB\u5316\u8FD0\u884C\u9700\u8981\u8BFB\u53D6dom
onMounted(() =&gt; {
  watchEffect(() =&gt; {
  })
})
//\u8BBE\u7F6E\u8FD0\u884C\u65F6\u673A
watchEffect(
  () =&gt; {/* ... */},
  {flush: &#39;pre&#39;}
)
// pre\u662F\u9ED8\u8BA4\uFF0C\u7EC4\u4EF6\u66F4\u65B0\u524D\u6267\u884C
// post, \u7EC4\u4EF6\u66F4\u65B0\u540E\u6267\u884C
// sync, \u540C\u6B65\u8FD0\u884C

 

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>4.3 watch<br> \u8DDF vue2 \u7684 watch \u4E00\u81F4</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code> // \u4FA6\u542C\u4E00\u4E2A getter const state = reactive({ count: 0 }) 
watch(   () =&gt; state.count,   (count, prevCount) =&gt; {     /* ... */   } )  // \u76F4\u63A5\u4FA6\u542C\u4E00\u4E2A ref 
const count = ref(0) watch(count, (count, prevCount) =&gt; {   /* ... */ }) 

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>\u76D1\u542C\u591A\u4E2A\u6570\u636E\u6E90</strong></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code> watch([fooRef, barRef], ([foo, bar], [prevFoo, prevBar]) =&gt; {   /* ... */ }) 

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>\u4E0E watchEffect \u5171\u4EAB\u7684\u884C\u4E3A</strong><br> \u505C\u6B62\u76D1\u542C\uFF0C\u6E05\u9664\u526F\u4F5C\u7528\uFF0C\u526F\u4F5C\u7528\u5237\u65B0\u65F6\u673A\uFF0C\u4FA6\u542C\u5668\u8C03\u8BD5\u65B9\u9762\u8DDF watchEffect \u53C2\u6570\u662F\u4E00\u6837\u7684\u3002</p><h2 id="\u56DB-\u5E94\u7528\u914D\u7F6E-\u539F\u5168\u5C40\u914D\u7F6E\u548C\u5168\u5C40-api" tabindex="-1"><a class="header-anchor" href="#\u56DB-\u5E94\u7528\u914D\u7F6E-\u539F\u5168\u5C40\u914D\u7F6E\u548C\u5168\u5C40-api" aria-hidden="true">#</a> \u56DB. \u5E94\u7528\u914D\u7F6E\uFF08\u539F\u5168\u5C40\u914D\u7F6E\u548C\u5168\u5C40 API\uFF09</h2><p><strong>\u6CE8\u610F\uFF1A\u5168\u5C40\u914D\u7F6E\u7684 Vue \u90FD\u7528\u73B0\u5728\u7684 createApp \u751F\u6210\u7684\u5B9E\u4F8B\u6765\u66FF\u4EE3</strong><br> createApp(\u65B0\u589E)</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>// vue2\u6302\u8F7Ddom\u65B9\u6CD5
new Vue({
  render: (h) =&gt; h(App)
}).$mount(&quot;#app&quot;);
// vue3
createApp(App).mount(&#39;#app&#39;)


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6CE8\u610F\uFF0C\u4E4B\u524D\u7528\u5230\u7684\u5168\u5C40\u914D\u7F6E\u7684 Vue \u90FD\u7528\u73B0\u5728\u7684 createApp \u751F\u6210\u7684\u5B9E\u4F8B\u6765\u66FF\u4EE3</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>import { createApp } from &#39;vue&#39;
const app = createApp({})

// \u6BD4\u5982\u6CE8\u518C\u5168\u5C40\u7EC4\u4EF6
app.component(&#39;my-component&#39;, {
  /* ... */
})
// \u662F\u5426\u5141\u8BB8devtools\u68C0\u67E5\u4EE3\u7801
app.config.devtools = true  


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>globalProperties(\u65B0\u589E)</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>app.config.globalProperties.foo = &#39;bar&#39;
app.component(&#39;child-component&#39;, {
  mounted() {
    console.log(this.foo) // &#39;bar&#39;
  }
})

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>\u6DFB\u52A0\u53EF\u5728\u7A0B\u5E8F\u5185\u7684\u4EFB\u4F55\u7EC4\u4EF6\u5B9E\u4F8B\u4E2D\u8BBF\u95EE\u7684\u5168\u5C40\u5C5E\u6027\u3002\u5F53\u5B58\u5728\u952E\u51B2\u7A81\u65F6\uFF0C\u7EC4\u4EF6\u5C5E\u6027\u5C06\u4F18\u5148</li><li>\u66FF\u4EE3\u6389 Vue2.x \u7684 Vue.prototype \u5C5E\u6027\u653E\u5230\u539F\u578B\u4E0A\u7684\u5199\u6CD5</li></ul><p>unmount(\u65B0\u589E)<br> \u5378\u8F7D DOM \u5143\u7D20\u4E0A\u5E94\u7528\u7A0B\u5E8F\u5B9E\u4F8B\u7684\u6839\u7EC4\u4EF6</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code> const app = createApp(App) app.mount(&#39;#app&#39;) // 5\u79D2\u4E4B\u540E\uFF0C\u5378\u8F7DAPP\u7EC4\u4EF6
 setTimeout(() =&gt; app.unmount(&#39;#app&#39;), 5000) 

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u4E94-\u5168\u5C40-api-\u65B0\u589E" tabindex="-1"><a class="header-anchor" href="#\u4E94-\u5168\u5C40-api-\u65B0\u589E" aria-hidden="true">#</a> \u4E94. \u5168\u5C40 API\uFF08\u65B0\u589E\uFF09</h2><p>createApp<br> \u7C7B\u4F3C\u4E4B\u524D\u5168\u5C40\u7684 Vue \u53D8\u91CF\uFF0C\u6574\u4E2A\u7EC4\u4EF6\u6811\u5171\u4EAB\u7684\u4E0A\u4E0B\u6587\uFF0C\u7B2C\u4E8C\u4E2A\u53C2\u6570\u4F5C\u4E3A props \u503C\u4F20\u5165<br> h<br> \u5C31\u662F\u4E4B\u524D\u7684 createElement\u3002<br> jsx \u5076\u5C14\u5728\u7528\uFF0C\u4F46\u662F\u8FD9\u4E2A\u5E95\u5C42\u7684\u76F8\u5BF9\u7528\u7684\u6BD4\u8F83\u5C11\uFF0C\u5C31\u4E0D\u7EC6\u8BB2\u4E86</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code> render() {   return Vue.h(&#39;h1&#39;, {}, &#39;Some title&#39;) } 

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>defineComponent\uFF08\u7EC4\u4EF6\uFF09<br> \u521B\u5EFA\u4E00\u4E2A\u7EC4\u4EF6</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>import { defineComponent } from &#39;vue&#39;
const MyComponent = defineComponent({
  data() {
    return { count: 1 }
  },
  methods: {
    increment() {
      this.count++
    }
  }
})

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>defineAsyncComponent(\u5F02\u6B65\u7EC4\u4EF6)<br> \u521B\u5EFA\u4E00\u4E2A\u5F02\u6B65\u7EC4\u4EF6</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code> import { defineAsyncComponent } from &#39;vue&#39;

const AsyncComp = defineAsyncComponent(() =&gt;
   /*\u6216\u8005*/
  import(&#39;./components/AsyncComponent.vue&#39;)
   /*\u6216\u8005*/
  new Promise((resolve, reject) =&gt; {
  /*\u53EF\u4EE5reject*/
      resolve({
        template: &#39;&lt;div&gt;I am async!&lt;/div&gt;&#39;
      })
    })
)

app.component(&#39;async-component&#39;, AsyncComp)

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>resolveComponent<br> \u53EA\u80FD\u5728<code>render</code>\u548C<code>setup</code>\u4E2D\u4F7F\u7528\uFF0C\u901A\u8FC7\u540D\u79F0\u6765\u5BFB\u627E\u7EC4\u4EF6</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>app.component(&#39;MyComponent&#39;, {
  /* ... */
})
const MyComponent = resolveComponent(&#39;MyComponent&#39;)


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>resolveDynamicComponent<br> \u53EA\u80FD\u5728<code>render</code>\u548C<code>setup</code>\u4E2D\u4F7F\u7528\uFF0C\u89E3\u6790\u6D3B\u52A8\u7684\u7EC4\u4EF6 active<br> resolveDirective<br> \u53EA\u80FD\u5728<code>render</code>\u548C<code>setup</code>\u4E2D\u4F7F\u7528\uFF0C\u5141\u8BB8\u901A\u8FC7\u540D\u79F0\u89E3\u6790\u6307\u4EE4<br> withDirectives<br> \u53EA\u80FD\u5728<code>render</code>\u548C<code>setup</code>\u4E2D\u4F7F\u7528\uFF0C\u5141\u8BB8\u5E94\u7528\u6307\u4EE4\u5230<code>VNode</code>\u3002\u8FD4\u56DE\u4E00\u4E2A\u5E26\u6709\u5E94\u7528\u6307\u4EE4\u7684<code>VNode</code></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>const bar = resolveDirective(&#39;bar&#39;)

return withDirectives(h(&#39;div&#39;), [
  [bar, this.y]
])

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>createRenderer<br> \u63A5\u53D7\u4E24\u4E2A\u6CDB\u578B\u53C2\u6570\uFF1A<code>HostNode</code>\u548C<code>HostElement</code>\uFF0C\u5BF9\u5E94\u4E8E\u5BBF\u4E3B\u73AF\u5883\u4E2D\u7684<code>Node</code>\u548C <code>Element</code>\u7C7B\u578B\u3002<br> \u8FD9\u4E2A\u4E1C\u897F\u4E0D\u592A\u6E05\u695A\u5177\u4F53\u7684\u4F7F\u7528\u573A\u666F</p><h2 id="\u516D-\u9009\u9879-\u6570\u636E" tabindex="-1"><a class="header-anchor" href="#\u516D-\u9009\u9879-\u6570\u636E" aria-hidden="true">#</a> \u516D. \u9009\u9879 / \u6570\u636E</h2><p>emits(\u65B0\u589E)<br> \u5728 $emit \u89E6\u53D1\u4E8B\u4EF6\u4E4B\u524D\u9A8C\u8BC1\u53C2\u6570</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>const app = Vue.createApp({})

// \u5BF9\u8C61\u8BED\u6CD5
app.component(&#39;reply-form&#39;, {
  created() {
    this.$emit(&#39;check&#39;)
  },
  emits: {
    // \u6CA1\u6709\u9A8C\u8BC1\u51FD\u6570
    click: null,

    // \u5E26\u6709\u9A8C\u8BC1\u51FD\u6570
    submit: payload =&gt; {
      if (payload.email &amp;&amp; payload.password) {
        return true
      } else {
        console.warn(\`Invalid submit event payload!\`)
        return false
      }
    }
  }
})


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u4E03-\u9009\u9879-dom-\u4E0D\u53D8" tabindex="-1"><a class="header-anchor" href="#\u4E03-\u9009\u9879-dom-\u4E0D\u53D8" aria-hidden="true">#</a> \u4E03. \u9009\u9879 / DOM(\u4E0D\u53D8)</h2><h2 id="\u516B-\u9009\u9879-\u751F\u547D\u5468\u671F\u94A9\u5B50" tabindex="-1"><a class="header-anchor" href="#\u516B-\u9009\u9879-\u751F\u547D\u5468\u671F\u94A9\u5B50" aria-hidden="true">#</a> \u516B. \u9009\u9879 / \u751F\u547D\u5468\u671F\u94A9\u5B50</h2><ul><li>beforeDestroy -&gt; <code>beforeUnmount</code></li><li>destroyed -&gt; <code>unmounted</code></li><li>renderTracked\uFF08\u65B0\u589E\uFF09</li></ul><p>\u544A\u8BC9\u4F60\u54EA\u4E2A\u64CD\u4F5C\u8DDF\u8E2A\u4E86\u7EC4\u4EF6\u4EE5\u53CA\u8BE5\u64CD\u4F5C\u7684\u76EE\u6807\u5BF9\u8C61\u548C\u952E</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>renderTracked({ key, target, type }) {
  // \u8FD9\u91CC\u7684target\u4E3A\u66F4\u65B0\u4E4B\u524D\u7684\u503C,type\u662Fget
  console.log({ key, target, type })
} 

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>renderTriggered\uFF08\u65B0\u589E\uFF09</li></ul><p>\u544A\u8BC9\u4F60\u662F\u4EC0\u4E48\u64CD\u4F5C\u89E6\u53D1\u4E86\u91CD\u65B0\u6E32\u67D3\uFF0C\u4EE5\u53CA\u8BE5\u64CD\u4F5C\u7684\u76EE\u6807\u5BF9\u8C61\u548C\u952E\u3002 target \u4E3A\u66F4\u65B0\u4E4B\u540E\u7684\u503C, type \u662F set<br> \u8FD9\u4E9B\u751F\u547D\u5468\u671F\u8FD8\u53EF\u4EE5\u901A\u8FC7 API \u5728 setup() \u91CC\u4F7F\u7528</p><ul><li>beforeMount -&gt; <code>onBeforeMount</code></li><li>mounted -&gt; <code>onMounted</code></li><li>beforeUpdate -&gt; <code>onBeforeUpdate</code></li><li>updated -&gt; <code>onUpdated</code></li><li>beforeDestroy -&gt; <code>onBeforeUnmount</code></li><li>destroyed -&gt; <code>onUnmounted</code></li><li>errorCaptured -&gt; <code>onErrorCaptured</code></li></ul><h2 id="\u4E5D-\u9009\u9879-\u8D44\u6E90" tabindex="-1"><a class="header-anchor" href="#\u4E5D-\u9009\u9879-\u8D44\u6E90" aria-hidden="true">#</a> \u4E5D. \u9009\u9879 / \u8D44\u6E90</h2><p>filters(\u5E9F\u5F03)<br> \u8FC7\u6EE4\u5668\u8FD8\u662F\u6709\u65F6\u5019\u5728\u7528\u7684<br> \u5341. \u9009\u9879 / \u7EC4\u5408<br> parent\uFF08\u5E9F\u5F03\uFF09<br> \u8FD9\u4E2A\u5C5E\u6027\u5E73\u65F6\u5F00\u53D1\u57FA\u672C\u4E0D\u4F1A\u7528\u5230<br> setup(\u8BE6\u60C5\u89C1\u4E0A\u9762)</p><h2 id="\u5341\u4E00-\u9009\u9879-\u5176\u5B83" tabindex="-1"><a class="header-anchor" href="#\u5341\u4E00-\u9009\u9879-\u5176\u5B83" aria-hidden="true">#</a> \u5341\u4E00. \u9009\u9879 / \u5176\u5B83</h2><p>delimiters\uFF08\u5E9F\u5F03\uFF09<br> functional\uFF08\u5E9F\u5F03\uFF09<br> \u4F7F\u7528\u4E86\u65B0\u7684\u5F02\u6B65\u7EC4\u4EF6\u7684\u751F\u6210\u65B9\u6CD5<br> model\uFF08\u5E9F\u5F03\uFF09<br> v-model \u4FEE\u6539\u4E86\uFF0C\u4E0D\u9700\u8981\u56FA\u5B9A\u7684\u5C5E\u6027\u540D\u548C\u4E8B\u4EF6\u540D\u4E86\uFF0C\u624B\u52A8\u53BB\u5904\u7406<br> comments\uFF08\u5E9F\u5F03\uFF09</p><h2 id="\u5341\u4E8C-\u5B9E\u4F8B-property" tabindex="-1"><a class="header-anchor" href="#\u5341\u4E8C-\u5B9E\u4F8B-property" aria-hidden="true">#</a> \u5341\u4E8C. \u5B9E\u4F8B property</h2><p>vm.$attrs\uFF08\u4FEE\u6539\uFF09<br> \u73B0\u5728<code>$attrs</code>\u4E0D\u4F46\u4F1A\u83B7\u53D6\u7236\u4F5C\u7528\u57DF\u4E2D\u4E0D\u4F5C\u4E3A\u7EC4\u4EF6<code>props</code>\u7684\u503C\uFF0C\u4E5F\u53EF\u4EE5\u83B7\u53D6\u5230\u81EA\u5B9A\u4E49\u4E8B\u4EF6\uFF08\u5305\u542B\u4E86 $listeners \u7684\u529F\u80FD\uFF09\u3002<br> vm.$children\uFF08\u5E9F\u5F03\uFF09<br> vm.$scopedSlots\uFF08\u5E9F\u5F03\uFF09<br> vm.$isServer\uFF08\u5E9F\u5F03\uFF09<br> vm.$listeners\uFF08\u5E9F\u5F03\uFF09</p><h2 id="\u5341\u4E09-\u5B9E\u4F8B\u65B9\u6CD5-\u6570\u636E" tabindex="-1"><a class="header-anchor" href="#\u5341\u4E09-\u5B9E\u4F8B\u65B9\u6CD5-\u6570\u636E" aria-hidden="true">#</a> \u5341\u4E09. \u5B9E\u4F8B\u65B9\u6CD5 / \u6570\u636E</h2><p><code>vue3</code>\u5E95\u5C42\u4F7F\u7528\u4E86 proxy \u8FDB\u884C\u6570\u636E\u76D1\u542C\uFF0C\u6240\u4EE5\u4E0D\u9700\u8981\u8FD9\u4E24\u4E2A\u65B9\u6CD5\u4E86\u3002<br> vm.$set\uFF08\u5E9F\u5F03\uFF09<br> vm.$delete\uFF08\u5E9F\u5F03\uFF09</p><h2 id="\u5341\u56DB-\u5B9E\u4F8B\u65B9\u6CD5-\u4E8B\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u5341\u56DB-\u5B9E\u4F8B\u65B9\u6CD5-\u4E8B\u4EF6" aria-hidden="true">#</a> \u5341\u56DB. \u5B9E\u4F8B\u65B9\u6CD5 / \u4E8B\u4EF6</h2><p>\u56E0\u4E3A\u73B0\u5728\u53EF\u4EE5\u76F4\u63A5\u5728 setup \u8C03\u7528\u751F\u547D\u5468\u671F api\uFF0C\u800C\u4E14\u53EF\u4EE5\u5F15\u5165\u522B\u7684 js \u91CC\u7684\u65B9\u6CD5\u6765\u4F7F\u7528\uFF0C\u6240\u4EE5\u8FD9\u4E9B\u65B9\u6CD5\u4E5F\u53EF\u4EE5\u4E0D\u9700\u8981\u4E86\u3002<br> vm.$on\uFF08\u5E9F\u5F03\uFF09<br> vm.$once\uFF08\u5E9F\u5F03\uFF09<br> vm.$off\uFF08\u5E9F\u5F03\uFF09</p><h2 id="\u5341\u4E94-\u5B9E\u4F8B\u65B9\u6CD5-\u751F\u547D\u5468\u671F" tabindex="-1"><a class="header-anchor" href="#\u5341\u4E94-\u5B9E\u4F8B\u65B9\u6CD5-\u751F\u547D\u5468\u671F" aria-hidden="true">#</a> \u5341\u4E94. \u5B9E\u4F8B\u65B9\u6CD5 / \u751F\u547D\u5468\u671F</h2><p>vm.$mount\uFF08\u5E9F\u5F03\uFF09<br> \u7EDF\u4E00\u4F7F\u7528 createApp \u7684 mount \u65B9\u6CD5\u6765\u6302\u8F7D<br> vm.$destroy\uFF08\u5E9F\u5F03\uFF09<br> \u7EDF\u4E00\u4F7F\u7528 createApp \u7684 unmount \u65B9\u6CD5\u6765\u5378\u8F7D</p><h2 id="\u5341\u516D-\u6307\u4EE4" tabindex="-1"><a class="header-anchor" href="#\u5341\u516D-\u6307\u4EE4" aria-hidden="true">#</a> \u5341\u516D. \u6307\u4EE4</h2><p>v-bind\uFF08\u4FEE\u6539\uFF09</p><ul><li>.prop \u53BB\u9664</li><li>.sync \u53BB\u9664 (\u73B0\u5728\u9700\u8981\u624B\u52A8\u53BB\u540C\u6B65)</li><li>.camel \u5C06 kebab-case attribute \u540D\u8F6C\u6362\u4E3A camelCase</li></ul><p>v-model\uFF08\u4FEE\u6539\uFF09<br> \u5BF9\u4E8E\u7EC4\u4EF6\u53EF\u4EE5\u7ED1\u5B9A\u591A\u4E2A\u5C5E\u6027\u503C</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>&lt;template&gt;
  &lt;!--\u5728vue3.0\u4E2D\uFF0Cv-model\u540E\u9762\u9700\u8981\u8DDF\u4E00\u4E2AmodelValue\uFF0C\u5373\u8981\u53CC\u5411\u7ED1\u5B9A\u7684\u5C5E\u6027\u540D--&gt;
  &lt;!-- \u5728Vue3.0\u4E2D\u4E5F\u53EF\u4EE5\u7EE7\u7EED\u4F7F\u7528\`Vue2.0\`\u7684\u5199\u6CD5 --&gt;
  &lt;a-input v-model:value=&quot;value&quot; placeholder=&quot;Basic usage&quot; /&gt;
&lt;/template&gt;


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u81EA\u5B9A\u4E49\u4E00\u4E2A\u7EC4\u4EF6</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>&lt;template&gt;
  &lt;div&gt;
    &lt;input :value=&quot;value&quot; @input=&quot;_handleChangeValue&quot; /&gt;
  &lt;/div&gt;
&lt;/template&gt;
&lt;script&gt;
export default {
  props: {
    value: {
      type: String,
      default: &quot;&quot;
    }
  },
  name: &quot;CustomInput&quot;,
  setup(props, { emit }) {
    function _handleChangeValue(e) {
      // vue3.0 \u662F\u901A\u8FC7emit\u4E8B\u4EF6\u540D\u4E3A update:modelValue\u6765\u66F4\u65B0v-model\u7684
      emit(&quot;update:value&quot;, e.target.value);
    }
    return {
      _handleChangeValue
    };
  }
};
&lt;/script&gt;


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>v-on\uFF08\u4FEE\u6539\uFF09<br> .{keyAlias} - \u4EC5\u5F53\u4E8B\u4EF6\u662F\u4ECE\u7279\u5B9A\u952E\u89E6\u53D1\u65F6\u624D\u89E6\u53D1\u56DE\u8C03\u3002\u4E0D\u518D\u901A\u8FC7\u952E\u7801\u7684\u4FEE\u9970\u7B26\u6765\u89E6\u53D1\u3002<br> v-is\uFF08\u65B0\u589E\uFF09<br> \u7C7B\u4F3C vue2 \u4E2D\u7684: is \u7ED1\u5B9A\uFF0C\u53EF\u4EE5\u8BA9\u7EC4\u4EF6\u5728\u67D0\u4E9B\u7279\u5B9A\u7684 html \u6807\u7B7E\u4E2D\u6E32\u67D3\uFF0C\u6BD4\u5982 table,ul\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code> &lt;!-- \u4E0D\u6B63\u786E\uFF0C\u4E0D\u4F1A\u6E32\u67D3\u4EFB\u4F55\u5185\u5BB9 --&gt; &lt;tr v-is=&quot;blog-post-row&quot;&gt;&lt;/tr&gt;
 &lt;!-- \u6B63\u786E --&gt; &lt;tr v-is=&quot;&#39;blog-post-row&#39;&quot;&gt;&lt;/tr&gt;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u5341\u4E03-\u7279\u6B8A-attribute" tabindex="-1"><a class="header-anchor" href="#\u5341\u4E03-\u7279\u6B8A-attribute" aria-hidden="true">#</a> \u5341\u4E03. \u7279\u6B8A attribute</h2><p>key(\u4FEE\u6539)<br> \u5FAA\u73AF\u7684\u65F6\u5019\uFF0C<code>key</code>\u8981\u8BBE\u7F6E\u5728<code>template</code>\u4E0A\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code> &lt;template v-for=&quot;item in list&quot; :key=&quot;item.id&quot;&gt; &lt;div&gt;...&lt;/div&gt; &lt;span&gt;...&lt;/span&gt; &lt;/template&gt;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>ref(\u4FEE\u6539)<br><code>v-for</code>\u91CC\u4F7F\u7528\u7684<code>ref</code>\u5C06\u4E0D\u4F1A\u518D\u81EA\u52A8\u521B\u5EFA\u6570\u7EC4<br> \u89E3\u51B3\u65B9\u5F0F:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code> &lt;div v-for=&quot;item in list&quot; :ref=&quot;setItemRef&quot;&gt;&lt;/div&gt; 

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>export default {
  data() {
    return {
      itemRefs: []
    }
  },
  methods: {
    setItemRef(el) {
      this.itemRefs.push(el)
    }
  },
  beforeUpdate() {
    this.itemRefs = []
  },
  updated() {
    console.log(this.itemRefs)
  }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u5341\u516B-\u5185\u7F6E\u7684\u7EC4\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u5341\u516B-\u5185\u7F6E\u7684\u7EC4\u4EF6" aria-hidden="true">#</a> \u5341\u516B. \u5185\u7F6E\u7684\u7EC4\u4EF6</h2><p>transition\uFF08\u4FEE\u6539\uFF09</p><ul><li>Props \u65B0\u589E\uFF1A</li></ul><p>persisted - boolean \u5982\u679C\u4E3A true\uFF0C\u5219\u8868\u793A\u8FD9\u662F\u4E00\u4E2A\u8F6C\u6362\uFF0C\u5B9E\u9645\u4E0A\u4E0D\u4F1A\u63D2\u5165 / \u5220\u9664\u5143\u7D20\uFF0C\u800C\u662F\u5207\u6362\u663E\u793A / \u9690\u85CF\u72B6\u6001\u3002 transition \u8FC7\u6E21\u6302\u94A9\u88AB\u6CE8\u5165\uFF0C\u4F46\u4F1A\u88AB\u6E32\u67D3\u5668\u8DF3\u8FC7\u3002 \u76F8\u53CD\uFF0C\u81EA\u5B9A\u4E49\u6307\u4EE4\u53EF\u4EE5\u901A\u8FC7\u8C03\u7528\u6CE8\u5165\u7684\u94A9\u5B50\uFF08\u4F8B\u5982 v-show\uFF09\u6765\u63A7\u5236\u8FC7\u6E21<br> enter-class -&gt;<code>enter-from-class</code><br> leave-class -&gt;<code>leave-from-class</code></p><ul><li>\u4E8B\u4EF6</li></ul><p>before appear<br> teleport(\u65B0\u589E)<br> \u5C06\u5185\u5BB9\u63D2\u5165\u5230\u76EE\u6807\u5143\u7D20\u4E2D</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code> &lt;teleport to=&quot;#popup&quot; :disabled=&quot;displayVideoInline&quot;&gt; &lt;h1&gt;999999&lt;/h1&gt; &lt;/teleport&gt; 

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><code>to</code>\u5FC5\u586B\u5C5E\u6027\uFF0C\u5FC5\u987B\u662F\u4E00\u4E2A\u6709\u6548\u7684 query \u9009\u62E9\u5668\uFF0C\u6216\u8005\u662F\u5143\u7D20 (\u5982\u679C\u5728\u6D4F\u89C8\u5668\u73AF\u5883\u4E2D\u4F7F\u7528\uFF09\u3002\u4E2D\u7684\u5185\u5BB9\u5C06\u4F1A\u88AB\u653E\u7F6E\u5230\u6307\u5B9A\u7684\u76EE\u6807\u5143\u7D20\u4E2D<br><code>disabled</code>\u8FD9\u662F\u4E00\u4E2A\u53EF\u9009\u9879 \uFF0C\u505A\u4E00\u4E2A\u662F\u53EF\u4EE5\u7528\u6765\u7981\u7528\u7684\u529F\u80FD\uFF0C\u8FD9\u610F\u5473\u7740\u5B83\u7684\u63D2\u69FD\u5185\u5BB9\u4E0D\u4F1A\u79FB\u52A8\u5230\u4EFB\u4F55\u5730\u65B9\uFF0C\u800C\u662F\u6309\u6CA1\u6709 teleport \u7EC4\u4EF6\u4E00\u822C\u6765\u5448\u73B0\u3010\u9ED8\u8BA4\u4E3A false\u3011<br> \u9002\u5408\u573A\u666F\uFF0C\u5168\u5C40\u7684 loading\uFF0C\u591A\u4E2A\u5185\u5BB9\u5408\u5E76\u7B49\u7B49\u7B49\u3002</p><h2 id="\u5341\u4E5D-\u603B\u7ED3" tabindex="-1"><a class="header-anchor" href="#\u5341\u4E5D-\u603B\u7ED3" aria-hidden="true">#</a> \u5341\u4E5D. \u603B\u7ED3</h2><p>\u603B\u4F53\u6765\u8BF4\uFF0C<code>vue3</code>\u5728\u5C3D\u53EF\u80FD\u7684\u517C\u5BB9<code>vue2</code>\u7684\u540C\u65F6\uFF0C\u53C8\u5F15\u5165\u4E86\u5168\u65B0\u7684\u7EC4\u5408\u5F0F API \u7684\u7F16\u7A0B\u65B9\u5F0F\uFF0C\u8FD9\u79CD\u65B0\u7684\u6A21\u5F0F\u6709\u70B9\u7C7B\u4F3C react \u7684\u601D\u60F3\uFF0C\u89E3\u51B3\u4E86\u4E4B\u524D\u7248\u672C\u5BF9\u4E8E\u4E1A\u52A1\u4EE3\u7801\u96BE\u590D\u7528\u7684\u95EE\u9898\uFF0C\u800C\u4E14\u5BF9\u4E00\u4E2A\u9875\u9762\u6765\u8BF4\uFF0C\u4E0D\u540C\u7684\u529F\u80FD\u4EE3\u7801\u53EF\u4EE5\u66F4\u597D\u7684\u53BB\u533A\u5206\uFF0C\u4E0D\u4F1A\u6709\u4EE5\u524D\u5404\u79CD\u53D8\u91CF\u548C\u65B9\u6CD5\u6324\u5728\u4E00\u5806\uFF0C\u540E\u671F\u96BE\u4E8E\u7EF4\u62A4\u7684\u95EE\u9898\u3002\u52A0\u4E0A\u826F\u597D\u7684<code>ts</code>\u652F\u6301\uFF0C\u5F88\u597D\u5F88\u5F3A\u5927\u3002<br> \u5468\u8FB9\u7684\u4E00\u4E9B\u7EC4\u4EF6<code>vue Router4.0</code>, <code>vuex4.0</code>\u4E5F\u90FD\u63D0\u4F9B\u4E86<code>vue3</code>\u652F\u6301\u3002\u7EC4\u4EF6\u5E93\u8FD9\u5757\uFF0C<code>ant design vue</code>\u548C<code>vant</code>\u5DF2\u7ECF\u652F\u6301\u4E86<code>vue3</code>\u3002<br> \u4E0D\u8FC7\u6B63\u5982\u5B98\u65B9\u6587\u6863\u4E2D\u5EFA\u8BAE\u7684\uFF0C\u76EE\u524D\u8FD8\u4E0D\u5EFA\u8BAE\u628A\u4E00\u4E9B\u91CD\u8981\u7684\u9879\u76EE\u8FC1\u79FB\u5230 vue3 \u5F53\u4E2D\uFF0C\u56E0\u4E3A vue3 \u8FD8\u6709\u5F88\u591A\u9700\u8981\u5B8C\u5584\u7684\u5730\u65B9\uFF0C\u800C\u4E14\u76EE\u524D\u8FD8\u4E0D\u652F\u6301 ie\uFF0C\u7B49\u517C\u5BB9\u7684\u5DE5\u4F5C\u5B8C\u6210\uFF0C\u8FD8\u662F\u53EA\u80FD\u517C\u5BB9\u5230 ie11\u3002</p>`,119);function $(D,M){const n=t("RouterLink");return a(),r("div",null,[e("nav",u,[e("ul",null,[e("li",null,[i(n,{to:"#\u4E00-composition-api"},{default:d(()=>[o]),_:1})]),e("li",null,[i(n,{to:"#\u4E8C-reactive-\u7C7B\u5DE5\u5177-api"},{default:d(()=>[m]),_:1})]),e("li",null,[i(n,{to:"#\u4E09-ref-\u7C7B\u5DE5\u5177-api"},{default:d(()=>[b]),_:1})]),e("li",null,[i(n,{to:"#\u56DB-\u5E94\u7528\u914D\u7F6E-\u539F\u5168\u5C40\u914D\u7F6E\u548C\u5168\u5C40-api"},{default:d(()=>[p]),_:1})]),e("li",null,[i(n,{to:"#\u4E94-\u5168\u5C40-api-\u65B0\u589E"},{default:d(()=>[g]),_:1})]),e("li",null,[i(n,{to:"#\u516D-\u9009\u9879-\u6570\u636E"},{default:d(()=>[h]),_:1})]),e("li",null,[i(n,{to:"#\u4E03-\u9009\u9879-dom-\u4E0D\u53D8"},{default:d(()=>[x]),_:1})]),e("li",null,[i(n,{to:"#\u516B-\u9009\u9879-\u751F\u547D\u5468\u671F\u94A9\u5B50"},{default:d(()=>[f]),_:1})]),e("li",null,[i(n,{to:"#\u4E5D-\u9009\u9879-\u8D44\u6E90"},{default:d(()=>[_]),_:1})]),e("li",null,[i(n,{to:"#\u5341\u4E00-\u9009\u9879-\u5176\u5B83"},{default:d(()=>[y]),_:1})]),e("li",null,[i(n,{to:"#\u5341\u4E8C-\u5B9E\u4F8B-property"},{default:d(()=>[R]),_:1})]),e("li",null,[i(n,{to:"#\u5341\u4E09-\u5B9E\u4F8B\u65B9\u6CD5-\u6570\u636E"},{default:d(()=>[q]),_:1})]),e("li",null,[i(n,{to:"#\u5341\u56DB-\u5B9E\u4F8B\u65B9\u6CD5-\u4E8B\u4EF6"},{default:d(()=>[w]),_:1})]),e("li",null,[i(n,{to:"#\u5341\u4E94-\u5B9E\u4F8B\u65B9\u6CD5-\u751F\u547D\u5468\u671F"},{default:d(()=>[A]),_:1})]),e("li",null,[i(n,{to:"#\u5341\u516D-\u6307\u4EE4"},{default:d(()=>[C]),_:1})]),e("li",null,[i(n,{to:"#\u5341\u4E03-\u7279\u6B8A-attribute"},{default:d(()=>[V]),_:1})]),e("li",null,[i(n,{to:"#\u5341\u516B-\u5185\u7F6E\u7684\u7EC4\u4EF6"},{default:d(()=>[k]),_:1})]),e("li",null,[i(n,{to:"#\u5341\u4E5D-\u603B\u7ED3"},{default:d(()=>[P]),_:1})])])]),I])}var S=l(c,[["render",$],["__file","000vue2\u5347\u7EA7vue3\u7684api\u53D8\u5316.html.vue"]]);export{S as default};
