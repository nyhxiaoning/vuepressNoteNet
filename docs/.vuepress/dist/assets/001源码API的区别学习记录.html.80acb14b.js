import{_ as r,r as s,o as d,c as t,a as e,b as i,w as a,e as v,d as l}from"./app.9be20fcb.js";const c={},u={class:"table-of-contents"},o=l("1.ref\u548Creactive\u5728vue3\u4E2D\u533A\u522B"),_=l("\uFF081\uFF09ref\u5B9E\u73B0\u6E90\u7801"),f=l("2.reactive\u4E0D\u80FD\u505A\u7684\uFF0Cref\u4E5F\u53EF\u4EE5\u505A\u3002"),m=v(`<h2 id="_1-ref\u548Creactive\u5728vue3\u4E2D\u533A\u522B" tabindex="-1"><a class="header-anchor" href="#_1-ref\u548Creactive\u5728vue3\u4E2D\u533A\u522B" aria-hidden="true">#</a> 1.ref\u548Creactive\u5728vue3\u4E2D\u533A\u522B</h2><h3 id="_1-ref\u5B9E\u73B0\u6E90\u7801" tabindex="-1"><a class="header-anchor" href="#_1-ref\u5B9E\u73B0\u6E90\u7801" aria-hidden="true">#</a> \uFF081\uFF09ref\u5B9E\u73B0\u6E90\u7801</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>
function  ref(value){
    return  createRef(value)
}

function  createRef(rawValue,shallow= false){

    return  new RefImpl(rawValue,shallow)
}
//\u6700\u7EC8\u7684\u8FD4\u56DE\u901A\u8FC7RefImpl\u6784\u9020\u51FD\u6570new\u51FA\u6765\u4E00\u4E2A\u5BF9\u8C61\uFF0C\u4E5F\u5C31\u662F\u8BF4ref\u8FD4\u56DE\u7684\u5176\u5B9E\u662F\u4E00\u4E2ARefImpl\u5BF9\u8C61\u3002


class RefImpl {
    constructor(_rawValue, _shallow = false) {
        ...
        this._value = _shallow ? _rawValue : convert(_rawValue);
    }
    get value() {
        track(toRaw(this), &quot;get&quot; /* GET */, &#39;value&#39;);
        return this._value;
    }
    ...
}
ref\u4E2D\u5982\u679C\u4F20\u5165\u4E00\u4E2A\u5BF9\u8C61\uFF0C\u6700\u540E\u4E5F\u662F\u4F7F\u7528reactive\u8C03\u7528\uFF0C\u800Creactive\u901A\u8FC7Proxy\u5B9E\u73B0\u3002

\u6240\u4EE5\u5C06\u5BF9\u8C61\u505A\u6210\u54CD\u5E94\u5F0F\uFF0Creactive\u80FD\u505A\u7684\uFF0Cref\u4E5F\u53EF\u4EE5\u505A

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-reactive\u4E0D\u80FD\u505A\u7684-ref\u4E5F\u53EF\u4EE5\u505A\u3002" tabindex="-1"><a class="header-anchor" href="#_2-reactive\u4E0D\u80FD\u505A\u7684-ref\u4E5F\u53EF\u4EE5\u505A\u3002" aria-hidden="true">#</a> 2.reactive\u4E0D\u80FD\u505A\u7684\uFF0Cref\u4E5F\u53EF\u4EE5\u505A\u3002</h2><p>reactive\u4E0D\u652F\u6301\u57FA\u672C\u7C7B\u578B\u76F4\u63A5\u4F20\u5165\uFF0C\u5FC5\u987B\u5305\u88F9\u4E00\u5C42\u5BF9\u8C61\u3002</p>`,5);function h(b,p){const n=s("RouterLink");return d(),t("div",null,[e("nav",u,[e("ul",null,[e("li",null,[i(n,{to:"#_1-ref\u548Creactive\u5728vue3\u4E2D\u533A\u522B"},{default:a(()=>[o]),_:1}),e("ul",null,[e("li",null,[i(n,{to:"#_1-ref\u5B9E\u73B0\u6E90\u7801"},{default:a(()=>[_]),_:1})])])]),e("li",null,[i(n,{to:"#_2-reactive\u4E0D\u80FD\u505A\u7684-ref\u4E5F\u53EF\u4EE5\u505A\u3002"},{default:a(()=>[f]),_:1})])])]),m])}var x=r(c,[["render",h],["__file","001\u6E90\u7801API\u7684\u533A\u522B\u5B66\u4E60\u8BB0\u5F55.html.vue"]]);export{x as default};
