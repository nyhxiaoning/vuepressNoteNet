import{_ as s}from"./home.38846c8f.js";import{_ as a,r as v,o as t,c as u,a as e,b as d,w as l,e as i,d as r}from"./app.b9c54f90.js";const c={},m=e("p",null,[e("img",{src:s,alt:"\u6210\u957F"})],-1),o={class:"table-of-contents"},b=i("\u56DE\u5230\u535A\u5BA2\u4E3B\u9875"),p=i("API\u7C7B\u7684\u4E0D\u719F\u6089\u95EE\u9898"),h=i("\u8BB0\u5F55\u7EC4\u5185\u5E38\u89C1vue\u95EE\u9898"),_=i("001vue\u4E2D\u81EA\u5B9A\u4E49v-model\u4F7F\u7528"),g=i("computed\u7684\u7ECF\u5178\u4F7F\u7528\u573A\u666F\u3002"),f=i("watch\u548Ccomputed\u4F7F\u7528\u573A\u666F\u533A\u5206"),x=i("\u7EC4\u5185computed\u6307\u5BFC\u8BB0\u5F55"),q=i("\u4F7F\u7528popover\u4F7F\u7528js\u63A7\u5236\u5F39\u51FA\u7F16\u7A0B"),w=i("006API\u7684vue\u5E38\u7528\u77E5\u8BC6\u590D\u4E60"),V=e("h2",{id:"\u56DE\u5230\u535A\u5BA2\u4E3B\u9875",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#\u56DE\u5230\u535A\u5BA2\u4E3B\u9875","aria-hidden":"true"},"#"),i(" \u56DE\u5230\u535A\u5BA2\u4E3B\u9875")],-1),N=i("\u535A\u5BA2\u9996\u9875"),y=r(`<ul><li><p>\u7B2C\u4E00\u7C7B\uFF1A\u57FA\u7840API\u7C7B\u7684\u4E0D\u719F\u6089\u95EE\u9898</p></li><li><p>\u7B2C\u4E8C\u7C7B\uFF1A\u6837\u5F0F\u7C7B</p></li><li><p>\u9AD8\u7EA7API\u4F7F\u7528\u4F7F\u7528</p></li><li><p>\u6846\u67B6\u4E4B\u95F4\u7ED3\u5408\u4F7F\u7528\u95EE\u9898</p></li></ul><h2 id="api\u7C7B\u7684\u4E0D\u719F\u6089\u95EE\u9898" tabindex="-1"><a class="header-anchor" href="#api\u7C7B\u7684\u4E0D\u719F\u6089\u95EE\u9898" aria-hidden="true">#</a> API\u7C7B\u7684\u4E0D\u719F\u6089\u95EE\u9898</h2><h2 id="\u8BB0\u5F55\u7EC4\u5185\u5E38\u89C1vue\u95EE\u9898" tabindex="-1"><a class="header-anchor" href="#\u8BB0\u5F55\u7EC4\u5185\u5E38\u89C1vue\u95EE\u9898" aria-hidden="true">#</a> \u8BB0\u5F55\u7EC4\u5185\u5E38\u89C1vue\u95EE\u9898</h2><h3 id="_001vue\u4E2D\u81EA\u5B9A\u4E49v-model\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#_001vue\u4E2D\u81EA\u5B9A\u4E49v-model\u4F7F\u7528" aria-hidden="true">#</a> 001vue\u4E2D\u81EA\u5B9A\u4E49v-model\u4F7F\u7528</h3><p>\u672C\u8D28\u4E0A\u8FD8\u662F\u901A\u8FC7 \u81EA\u5B9A\u4E49\u6807\u7B7E\u7684 attribute \u4F20\u9012\u548C\u63A5\u53D7\uFF1B</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u5728\u81EA\u5B9A\u4E49\u6807\u7B7E\u4E2D\u6CE8\u518C v-model:attriButeName=&quot;value&quot; , \u4F1A\u62C6\u5206\u4E3A\u4E24\u4E2A\u5C5E\u6027

:attributeName=&quot;value&quot; \u548C @update:attributeName=&quot;value=$event&quot; \uFF1B

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>
---\u7236\u7EC4\u4EF6\u7ED1\u5B9A
&lt;my-comp v-model:name=&quot;nameValue&quot; v-model:age=&quot;ageValue&quot; /&gt;
\u6CE8\u610F\u5982\u679Cv-model\u6CA1\u6709\u6307\u5B9A\uFF0C\u90A3\u4E48\u4F1A\u7528\u9ED8\u8BA4\u7684modelValue\u66FF\u4EE3\uFF0C\u7B49\u540C\u4E00\u4E0B


---\u5B50\u7EC4\u4EF6\u4E2D\u4F7F\u7528\uFF1A
export default {
    // props \u6CE8\u518C\u63A5\u53D7 \u81EA\u5B9A\u4E49\u6807\u7B7E\u7684 name\u548Cage 
    props:[&#39;name&#39;, &#39;age&#39;],
    // emits \u6CE8\u518C \u63A5\u53D7\u81EA\u5B9A\u4E49\u6807\u7B7E\u7684 update:name \u548C update:age \u5C5E\u6027\u7ED1\u5B9A\u7684\u4E8B\u4EF6
    emits: [&#39;update:name&#39;, &#39;update:age&#39;],
    setup(context){
        setTimeout(() =&gt; {
          // \u901A\u8FC7 $emit \u89E6\u53D1\u4E8B\u4EF6\u4F20\u9012\u6570\u636E
          context.emit(&#39;update:name&#39;, &#39;new-name&#39;);
          context.emit(&#39;update:age&#39;, 100)
        })
    }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="computed\u7684\u7ECF\u5178\u4F7F\u7528\u573A\u666F\u3002" tabindex="-1"><a class="header-anchor" href="#computed\u7684\u7ECF\u5178\u4F7F\u7528\u573A\u666F\u3002" aria-hidden="true">#</a> computed\u7684\u7ECF\u5178\u4F7F\u7528\u573A\u666F\u3002</h3><p>/-------------\u5F53\u8D4B\u503C\u7ED9\u8BA1\u7B97\u5C5E\u6027\u7684\u65F6\u5019\uFF0C\u5C06\u8C03\u7528setter\u51FD\u6570\u3002 \u591A\u7528\u4E8E\u5728\u6A21\u677F\u7EC4\u4EF6\u4E2D\u9700\u8981\u4FEE\u6539\u8BA1\u7B97\u5C5E\u6027\u81EA\u8EAB\u7684\u503C\u7684\u65F6\u5019\u3002-----------------/</p><p>computed\u7684\u5C5E\u6027\u53EF\u4EE5\u88AB\u89C6\u4E3A\u662Fdata\u4E00\u6837\uFF0C\u53EF\u4EE5\u8BFB\u53D6\u548C\u8BBE\u503C\u3002 \u4E00\u822C\u4F7F\u7528\uFF1A \u90FD\u662Freturn\u8FD4\u56DE\u503C\u3002</p><p>watch\u548Ccomputed\u5BF9\u6BD4\u4F7F\u7528\u573A\u666F\uFF1A\u4E00\u4E2A\u503C\u53D8\u5316\u4E86\uFF0C\u901A\u77E5\u76D1\u542C\u89E6\u53D1</p><p>\u5B50\u7EC4\u4EF6\u4E2Dv-model\u7684\u521B\u5EFA\u81EA\u5B9A\u4E49\u7684\u5C5E\u6027\u53D8\u5316\uFF0C\u53D8\u5316\u4E4B\u540E\uFF0C\u9700\u8981\u505A\u4E00\u4E2A\u76D1\u542C\u901A\u77E5\u3002</p><p>\u7B80\u5355\u4E0D\u7528watch\u7684\u529E\u6CD5\u662F\u901A\u8FC7computed\u65B9\u6CD5\uFF0C\u5C06set\u548Cget\u65B9\u6CD5\u653E\u5165\uFF0C\u7136\u540Eset\u4E2D\u8FDB\u884C\u901A\u77E5\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>computed: {
    updateMessage: {
      get: function() {
        console.log(&#39;\u8BA1\u7B97\u5C5E\u6027&#39;, this.message)
        return this.message
      },
      set: function(newVal) {
        this.message = newVal
        console.log(&#39;newVal&#39;, newVal)
      }
    }
  },
  mounted () {
    //\u8BA1\u7B97\u5C5E\u6027\u53D8\u5316\u4E86
    updateMessage = &#39;222&#39;
    console.log(&#39;\u6D4B\u8BD5\uFF1A&#39;, this)
   },
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="watch\u548Ccomputed\u4F7F\u7528\u573A\u666F\u533A\u5206" tabindex="-1"><a class="header-anchor" href="#watch\u548Ccomputed\u4F7F\u7528\u573A\u666F\u533A\u5206" aria-hidden="true">#</a> watch\u548Ccomputed\u4F7F\u7528\u573A\u666F\u533A\u5206</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>--- computed\u662F\u6839\u636E\u5F53\u524D\u503C\u6216\u662F\u591A\u4E2A\u503C\uFF0C\u8BA1\u7B97\u65B0\u7684\u503C\u7684\u65F6\u5019\uFF0C\u4F7F\u7528\uFF08\u5982\u679Cvue3\u4F7F\u7528\uFF0C\u9700\u8981\u5355\u72EC\u5BFC\u51FA\uFF0C\u6216\u662F\u5728reactive\u4E2D\u3002\uFF09
--- watch\u662F\u76D1\u542C\u4E00\u4E2A\u503C\u53D8\u5316\u7684\u65F6\u5019\uFF0C\u901A\u77E5\u6216\u662F\u5904\u7406\u5176\u4ED6\u4E8B\u60C5
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u7EC4\u5185computed\u6307\u5BFC\u8BB0\u5F55" tabindex="-1"><a class="header-anchor" href="#\u7EC4\u5185computed\u6307\u5BFC\u8BB0\u5F55" aria-hidden="true">#</a> \u7EC4\u5185computed\u6307\u5BFC\u8BB0\u5F55</h3><h4 id="vue3\u4E2D\u4E24\u79CDcomputed\u7684\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#vue3\u4E2D\u4E24\u79CDcomputed\u7684\u4F7F\u7528" aria-hidden="true">#</a> vue3\u4E2D\u4E24\u79CDcomputed\u7684\u4F7F\u7528</h4><ul><li>\u65B9\u5F0F1\uFF1Aset\u548Cget\u65B9\u5F0F</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>
\u5176\u5B9Eset\u529F\u80FD\u548Cwatch\u505A\u7C7B\u4F3C\u7684\u529F\u80FD\uFF0C\u901A\u77E5\u53D8\u5316\u4F7F\u7528\u3002\u6BD4\u51FD\u6570\u66F4\u597D\u7528\u4E00\u4E9B

\u8FD9\u79CD\u5728reactive\u4E2D\u5199\u8FD9\u79CD\uFF0C\u7528\u4E8E\u5B50\u7EC4\u4EF6\uFF0C
const state = reactive({
    dateFlag: computed({
        set(val)  {
            let temp = props.params.displayName.indexOf(&quot;/n&quot;);
            console.error(temp,&#39;temp&#39;,val,&#39;\u8BA1\u7B97\u5C5E\u6027\u4F20\u9012\u7684\u5B9E\u53C2&#39;);
        },
        get(){
            let temp = props.params.displayName.indexOf(&quot;/n&quot;);
            console.error(temp,&#39;temp&#39;);

            return temp&gt;0?true:false;
        }
    })
});

\u4E00\u822C\u662F:
  const  dateFlag = computed({
        set(val)  {
            let temp = props.params.displayName.indexOf(&quot;/n&quot;);
            console.error(temp,&#39;temp&#39;,val,&#39;\u8BA1\u7B97\u5C5E\u6027\u4F20\u9012\u7684\u5B9E\u53C2&#39;);
        },
        get(){
            let temp = props.params.displayName.indexOf(&quot;/n&quot;);
            console.error(temp,&#39;temp&#39;);
            return temp&gt;0?true:false;
        }
    })


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>\u65B9\u5F0F2\uFF1A\u5728computed\u4E2D\u8C03\u7528\u51FD\u6570</li></ul><p>vue\u5728computed\u4E2D\u8C03\u7528\u51FD\u6570</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>
---vue2\u7528\u6CD5

dataAmand () {
       return function (value) {
         return this.countNum(value, 4)
       }
}

---vue3\u7528\u6CD5:\u4F20\u5165\u51FD\u6570\u8BA1\u7B97\u503C
const state= reactive({
        displayDateValue: computed(()=&gt;{
        return function(value:string){
            return value;
        };
    })
})





- \u4F7F\u7528\u6848\u4F8B3\u591A\u4E2A\u53C2\u6570\u5B9E\u4F8B\uFF1A\u7ED9\u8BA1\u7B97\u5C5E\u6027\u4F20\u9012\u591A\u4E2A\u53C2\u6570\uFF0C
\u4F20\u5165\u4E00\u4E2A\u5F53\u524D\u503C\uFF0C\u5C06\u5F53\u524D\u7684\u503C\u6839\u636E\u4E0D\u540C\u7684\u60C5\u51B5\u8FDB\u884C\u6E32\u67D3\uFF0C\u4E0D\u9700\u8981\u8FDB\u884C\u51FD\u6570\u58F0\u660E\uFF0C\u907F\u514D\u51FD\u6570\u7684\u58F0\u660E\u6DF7\u4E71\u3002
---\u8BA1\u7B97\u5C5E\u6027\u53EF\u4EE5\u51CF\u5C11\u91CD\u65B0\u8BA1\u7B97\uFF0C
displayDateValue: computed(()=&gt;{
    return function(value:string,type:number){
        let temp = value.indexOf(&quot;datehead&quot;);
        if(temp &gt; 0){
            return value.split(&quot;datehead&quot;)[type];
        }else  {
            return value;
        }
    };
})


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u4F7F\u7528popover\u4F7F\u7528js\u63A7\u5236\u5F39\u51FA\u7F16\u7A0B" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528popover\u4F7F\u7528js\u63A7\u5236\u5F39\u51FA\u7F16\u7A0B" aria-hidden="true">#</a> \u4F7F\u7528popover\u4F7F\u7528js\u63A7\u5236\u5F39\u51FA\u7F16\u7A0B</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>
// \u5F53\u524D\u7684popover\u7684ref
const popoverRef = ref();
//\u4F7F\u7528unref\u539F\u56E0\uFF0C\u5982\u679C\u53C2\u6570\u662F\u4E00\u4E2A ref\uFF0C\u5219\u8FD4\u56DE\u5185\u90E8\u503C\uFF0C\u5426\u5219\u8FD4\u56DE\u53C2\u6570\u672C\u8EAB\u3002
/**
 * \u547D\u4EE4\u89E6\u53D1popover\u5F39\u51FA\u754C\u9762
 */
const onClickOutside = () =&gt; {
  // unref(popoverRef).popperRef?.delayHide?.();
  // casterSelectTableFn();
  unref(popoverRef).popperRef?.delayHide?.();
};


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_006api\u7684vue\u5E38\u7528\u77E5\u8BC6\u590D\u4E60" tabindex="-1"><a class="header-anchor" href="#_006api\u7684vue\u5E38\u7528\u77E5\u8BC6\u590D\u4E60" aria-hidden="true">#</a> 006API\u7684vue\u5E38\u7528\u77E5\u8BC6\u590D\u4E60</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>@click.capture:\u4E8B\u4EF6\u6355\u83B7\uFF0C\u5148\u6267\u884C\u7236\u7EA7\u7684\u51FD\u6570\uFF0C\u518D\u53BB\u6267\u884C\u5B50\u7EA7\u89E6\u53D1\uFF0C\u5C31\u662F

@click.self\uFF1A\u53EA\u4F1A\u89E6\u53D1\u672C\u8EAB\u7684\u51FD\u6570
\uFF08self\u53EA\u54CD\u5E94\u5F53\u524D\u5143\u7D20\u81EA\u8EAB\u89E6\u53D1\u7684\u4E8B\u4EF6\uFF0C\u4E0D\u4F1A\u54CD\u5E94\u7ECF\u8FC7\u5192\u6CE1\u89E6\u53D1\u7684\u4E8B\u4EF6\uFF0C\u5E76\u4E0D\u4F1A\u963B\u6B62\u5192\u6CE1\u7EE7\u7EED\u5411\u5916\u90E8\u89E6\u53D1\uFF09
@click.once\uFF1A\u53EA\u4F1A\u6267\u884C\u4E00\u6B21

@click.prevent:\u963B\u6B62\u6807\u7B7E\u4E0A\u539F\u751F\u7684\u9ED8\u8BA4\u884C\u4E3A\uFF0C\u6BD4\u5982a\u8D85\u94FE\u63A5\u7684\u8DF3\u8F6C\uFF0C\u8868\u5355\u7684\u63D0\u4EA4

@click.stop:\u963B\u6B62\u4E8B\u4EF6\u7684\u4F20\u9012\uFF0C\u53EA\u4F1A\u6267\u884C\u5F53\u524D\u7684\u5143\u7D20\u51FD\u6570
\uFF08stop\u662F\u4ECE\u81EA\u8EAB\u5F00\u59CB\u4E0D\u5411\u5916\u90E8\u53D1\u5C04\u5192\u6CE1\u4FE1\u53F7\uFF09

.passive \u6EDA\u52A8\u4E8B\u4EF6\u7684\u9ED8\u8BA4\u884C\u4E3A (\u5373\u6EDA\u52A8\u884C\u4E3A) \u5C06\u4F1A\u7ACB\u5373\u89E6\u53D1\uFF0C\u800C\u4E0D\u4F1A\u7B49\u5F85 onScroll \u5B8C\u6210\u3002\u8FD9\u4E2A .passive \u4FEE\u9970\u7B26\u5C24\u5176\u80FD\u591F\u63D0\u5347\u79FB\u52A8\u7AEF\u7684\u6027\u80FD\u3002


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,27);function k(A,R){const n=v("RouterLink");return t(),u("div",null,[m,e("nav",o,[e("ul",null,[e("li",null,[d(n,{to:"#\u56DE\u5230\u535A\u5BA2\u4E3B\u9875"},{default:l(()=>[b]),_:1})]),e("li",null,[d(n,{to:"#api\u7C7B\u7684\u4E0D\u719F\u6089\u95EE\u9898"},{default:l(()=>[p]),_:1})]),e("li",null,[d(n,{to:"#\u8BB0\u5F55\u7EC4\u5185\u5E38\u89C1vue\u95EE\u9898"},{default:l(()=>[h]),_:1}),e("ul",null,[e("li",null,[d(n,{to:"#_001vue\u4E2D\u81EA\u5B9A\u4E49v-model\u4F7F\u7528"},{default:l(()=>[_]),_:1})]),e("li",null,[d(n,{to:"#computed\u7684\u7ECF\u5178\u4F7F\u7528\u573A\u666F\u3002"},{default:l(()=>[g]),_:1})]),e("li",null,[d(n,{to:"#watch\u548Ccomputed\u4F7F\u7528\u573A\u666F\u533A\u5206"},{default:l(()=>[f]),_:1})]),e("li",null,[d(n,{to:"#\u7EC4\u5185computed\u6307\u5BFC\u8BB0\u5F55"},{default:l(()=>[x]),_:1})]),e("li",null,[d(n,{to:"#\u4F7F\u7528popover\u4F7F\u7528js\u63A7\u5236\u5F39\u51FA\u7F16\u7A0B"},{default:l(()=>[q]),_:1})]),e("li",null,[d(n,{to:"#_006api\u7684vue\u5E38\u7528\u77E5\u8BC6\u590D\u4E60"},{default:l(()=>[w]),_:1})])])])])]),V,e("p",null,[d(n,{to:"/"},{default:l(()=>[N]),_:1})]),y])}var P=a(c,[["render",k],["__file","004vue3\u6BCF\u5468\u4F7F\u7528\u603B\u7ED3\u6848\u4F8B\uFF0801\uFF09.html.vue"]]);export{P as default};
