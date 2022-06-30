import{_ as s}from"./home.38846c8f.js";import{_ as a,r,o as v,c as t,a as i,b as n,w as d,d as u,e as l}from"./app.b9c54f90.js";const c={},o=i("p",null,[i("img",{src:s,alt:"\u6210\u957F"})],-1),m={class:"table-of-contents"},b=l("aggrid"),g=l("000\u5B98\u65B9API\u6587\u6863\uFF1A\u4F7F\u7528\u8BF4\u660E"),h=l("001\u9879\u76EE\u4E2D\u5F15\u5165aggrid"),p=l("002\u4F7F\u7528\u81EA\u5B9A\u4E49\u6E32\u67D3\u5668\u4F20\u53C2\u7684\u95EE\u9898"),_=l("003\u6E32\u67D3\u5668\u4F7F\u7528\u540E\uFF0C\u4E0D\u53EF\u4EE5\u5BF9\u4E8E\u5728\u6E32\u67D3\u5668\u5185\u90E8\u8FDB\u884C\u6761\u4EF6\u6E32\u67D3"),q=l("004\u5BF9\u4E8E\u5F53\u524D\u7684aggrid\u5217\u8868\u5934\u7684\u914D\u7F6E"),f=l("005\u6E32\u67D3aggrid\u9700\u8981id\u5BF9\u5E94\u6570\u636E\u552F\u4E00\u6027"),x=l("006\u6EDA\u52A8\u6761\u76F8\u5173\u63A5\u53E3"),y=l("006\u63A7\u5236aggrid\u8868\u683C\u6EDA\u52A8\u6761\u7684\u76D1\u542C"),w=u(`<h2 id="aggrid" tabindex="-1"><a class="header-anchor" href="#aggrid" aria-hidden="true">#</a> aggrid</h2><h3 id="_000\u5B98\u65B9api\u6587\u6863-\u4F7F\u7528\u8BF4\u660E" tabindex="-1"><a class="header-anchor" href="#_000\u5B98\u65B9api\u6587\u6863-\u4F7F\u7528\u8BF4\u660E" aria-hidden="true">#</a> 000\u5B98\u65B9API\u6587\u6863\uFF1A\u4F7F\u7528\u8BF4\u660E</h3><ul><li><p>\u4E00\u822C\u8FD9\u91CC\u7684\u63A5\u53E3\uFF08interface\uFF09\u662F\u6240\u6709\u7684\u5185\u5BB9\u5168\u5C40\u51FD\u6570\u548C\u5168\u5C40\u5C5E\u6027\u90FD\u5728\u54EA\u91CC\u3002 \u627E\u4E00\u4E9B\u5168\u5C40\u7684\u65B9\u6CD5\u5C31\u5728\u63A5\u53E3\u91CC\u9762\u627E\u3002</p></li><li><p>\u5BF9\u4E8E\u6BCF\u4E00\u4E2A\u884C\u5217\u7684\u5B9E\u4F8B\u4F7F\u7528\uFF0C\u5728\u63A5\u53E3\u4E0B\u9762\u627E\u3002</p></li></ul><h3 id="_001\u9879\u76EE\u4E2D\u5F15\u5165aggrid" tabindex="-1"><a class="header-anchor" href="#_001\u9879\u76EE\u4E2D\u5F15\u5165aggrid" aria-hidden="true">#</a> 001\u9879\u76EE\u4E2D\u5F15\u5165aggrid</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u5F15\u5165aggrid\u4F7F\u7528\u65B9\u5F0F
----------------------------------\u5BFC\u5165\u5FC5\u5907\u6587\u4EF6
//\u5F15\u5165\u6837\u5F0F\u6587\u4EF6
// import &#39;ag-grid-enterprise&#39;;
import &quot;ag-grid-community/dist/styles/ag-grid.css&quot;;
import &quot;ag-grid-community/dist/styles/ag-theme-alpine.css&quot;;
import &quot;ag-grid-community/dist/styles/ag-theme-balham.css&quot;
// //\u5F15\u5165ag-grid-vue
import { AgGridVue } from &quot;ag-grid-vue3&quot;;
\u3000components: {
    AgGridVue
  },
 &lt;ag-grid-vue 
      style=&quot;width: 100%; height: 200px;&quot; 
      class=&quot;table ag-theme-balham&quot;
      :columnDefs=&quot;columnDefs&quot; 
      :rowData=&quot;rowData&quot; 
      :enableColResize=&quot;false&quot;
      @gridReady=&quot;onGridReady&quot; 
      rowSelection=&quot;multiple&quot;
      rowHeight=&#39;50&#39;
      :enableSorting=&quot;true&quot;
      :sideBar=&quot;sideBar&quot;
      :pagination=&quot;true&quot;
      :paginationPageSize=&quot;10&quot;
      &gt;&lt;/ag-grid-vue&gt;
 
--------------------------------------HTML\u90E8\u5206:

    &lt;div style=&quot;padding: 10px; height: 100%&quot;&gt;
      &lt;ag-grid-vue
        id=&quot;myGrid&quot;
        style=&quot;width: 100%; height: 100%&quot;
        class=&quot;ag-theme-alpine my-style table_box&quot;
        :grid-options=&quot;gridOptions&quot;
        @row-drag-move=&quot;actions.onRowDragMove&quot;
        @row-drag-leave=&quot;actions.onRowDragLeave&quot;
        @row-drag-end=&quot;actions.onRowDragEnd&quot;
      /&gt;
    &lt;/div&gt;
    \u53E6\u4E00\u79CD\u65B9\u5F0F
     &lt;ag-grid-vue 
      style=&quot;width: 100%; height: 200px;&quot; 
      class=&quot;table ag-theme-balham&quot;
      :columnDefs=&quot;columnDefs&quot; 
      :rowData=&quot;rowData&quot; 
      :enableColResize=&quot;false&quot;
      @gridReady=&quot;onGridReady&quot; 
      rowSelection=&quot;multiple&quot;
      rowHeight=&#39;50&#39;
      :enableSorting=&quot;true&quot;
      :sideBar=&quot;sideBar&quot;
      :pagination=&quot;true&quot;
      :paginationPageSize=&quot;10&quot;
      &gt;&lt;/ag-grid-vue&gt;








</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_002\u4F7F\u7528\u81EA\u5B9A\u4E49\u6E32\u67D3\u5668\u4F20\u53C2\u7684\u95EE\u9898" tabindex="-1"><a class="header-anchor" href="#_002\u4F7F\u7528\u81EA\u5B9A\u4E49\u6E32\u67D3\u5668\u4F20\u53C2\u7684\u95EE\u9898" aria-hidden="true">#</a> 002\u4F7F\u7528\u81EA\u5B9A\u4E49\u6E32\u67D3\u5668\u4F20\u53C2\u7684\u95EE\u9898</h3><p>\u6E32\u67D3\u5668\u9ED8\u8BA4\u6709\u4E00\u4E2Aparams\u53C2\u6570\u5728props\u4E0B\u9762\u6302\u8F7D\uFF0C\u5982\u679C\u81EA\u5B9A\u4E49\u60F3\u8981\u518D\u4F20\u5165\u4E00\u4E9B\u503C\uFF0C\u4F1A\u9ED8\u8BA4\u6302\u5728params\u5BF9\u8C61\u4E0B\u9762\u3002\u4F8B\u5982\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>  column.cellRendererParams = { properties: colInfo.properties };
  column.cellRendererFramework = &#39;FindreferenceRender&#39;;

\u8FD9\u6837\u7EC4\u4EF6\u4E2Dprops.params.properties\u8FD9\u4E2A\u5C5E\u6027\u5C31\u589E\u52A0\u4E86\u3002

\u6BCF\u4E00\u4E2A\u81EA\u5B9A\u4E49\u6E32\u67D3\u5668\u5185\u90E8\u4F7F\u7528
props\uFF1A[&quot;params&quot;]\uFF1B//\u5373\u53EF

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_003\u6E32\u67D3\u5668\u4F7F\u7528\u540E-\u4E0D\u53EF\u4EE5\u5BF9\u4E8E\u5728\u6E32\u67D3\u5668\u5185\u90E8\u8FDB\u884C\u6761\u4EF6\u6E32\u67D3" tabindex="-1"><a class="header-anchor" href="#_003\u6E32\u67D3\u5668\u4F7F\u7528\u540E-\u4E0D\u53EF\u4EE5\u5BF9\u4E8E\u5728\u6E32\u67D3\u5668\u5185\u90E8\u8FDB\u884C\u6761\u4EF6\u6E32\u67D3" aria-hidden="true">#</a> 003\u6E32\u67D3\u5668\u4F7F\u7528\u540E\uFF0C\u4E0D\u53EF\u4EE5\u5BF9\u4E8E\u5728\u6E32\u67D3\u5668\u5185\u90E8\u8FDB\u884C\u6761\u4EF6\u6E32\u67D3</h3><p>\u56E0\u4E3A\u8FDB\u5165\u6E32\u67D3\u5668\u540E\uFF0C\u6E32\u67D3\u5668\u4E00\u6B21\u6E32\u67D3\u540E\uFF0C\u5DF2\u7ECF\u5B9E\u4F8B\u5316\uFF0C\u5176\u4ED6\u5730\u65B9\u518D\u6B21\u4F7F\u7528\u4E86\u8BE5\u6E32\u67D3\u5668\uFF0C\u4E5F\u662F\u4F7F\u7528\u540C\u6837\u7684\u6E32\u67D3\u673A\u5236\uFF0C\u4E0D\u53EF\u80FD\u4F1A\u518D\u6B21\u6E32\u67D3\uFF0C\u53EA\u53EF\u4EE5\u901A\u8FC7\u9009\u62E9\u6E32\u67D3\u5668\u524D\u8FDB\u884C\u4E0D\u540C\u7684\u6E32\u67D3\u5668\u5224\u65AD\u8FDB\u884C\u6761\u4EF6\u6E32\u67D3\u3002</p><h3 id="_004\u5BF9\u4E8E\u5F53\u524D\u7684aggrid\u5217\u8868\u5934\u7684\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#_004\u5BF9\u4E8E\u5F53\u524D\u7684aggrid\u5217\u8868\u5934\u7684\u914D\u7F6E" aria-hidden="true">#</a> 004\u5BF9\u4E8E\u5F53\u524D\u7684aggrid\u5217\u8868\u5934\u7684\u914D\u7F6E</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>
// \u8FD9\u91CC\u662F\u521D\u59CB\u5316\u914D\u7F6E\u8868\u5934header\u7684\u4EFB\u52A1\u540D\u79F0\u65B0\u5EFA
gridOptions.api?.setAutoGroupColumnDef({
  rowDrag: true,
  field: &#39;title&#39;,
  headerName: &#39;\u4EFB\u52A1\u540D\u79F0&#39;,
  lockPosition: true,
  headerComponent: &#39;TableHead&#39;,
  // editable: false,
  sortable: false,
  resizable: true, //\u662F\u5426\u53EF\u4EE5\u8C03\u6574\u5217\u5927\u5C0F\uFF0C\u5C31\u662F\u62D6\u52A8\u6539\u53D8\u5217\u5927\u5C0F
  minWidth: 100,
  width: viewCols.find(x =&gt; x.fieldId === &#39;title&#39;)?.width,
  cellRendererParams: {
    suppressDoubleClickExpand: true,
    suppressCount: true,
    checkbox: false,
    checkboxSelection: false,
    innerRenderer: &#39;taskCellRenderer&#39;
  },
  cellEditor: &#39;AutoGroupEditer&#39;,
  cellEditorParams: {
    newTaskBlur: function (record_id: string) {
      gridOptions.api?.applyTransaction({
        remove: [{ record_id }]
      });
    }
  },
  headerComponentParams: {
    sourceColumn: viewCols.find(x =&gt; x.fieldId === &#39;title&#39;),
    setWidth: async function (col: ColumnEvent) {
      if (col.column) {
        let def = col.column.getColDef();
        setFieldWidth(
          state.viewId,
          def!.field!,
          col.column.getActualWidth()
        );
      }
    }
  }
});
---\u5982\u679C\u9759\u6001\u914D\u7F6E
      autoGroupColumnDef: {
        rowDrag: true,
        field: &#39;title&#39;,
        colId: &#39;title&#39;,
        headerName: &#39;\u4EFB\u52A1\u540D\u79F0&#39;,
        lockPosition: true,
        headerComponent: &#39;TableHead&#39;,
        // editable: false,
        sortable: false,
        resizable: true, //\u662F\u5426\u53EF\u4EE5\u8C03\u6574\u5217\u5927\u5C0F\uFF0C\u5C31\u662F\u62D6\u52A8\u6539\u53D8\u5217\u5927\u5C0F
        minWidth: 100,
        cellRendererParams: {
          suppressDoubleClickExpand: false,
          suppressCount: true,
          checkbox: true,
          checkboxSelection: true,
          innerRenderer: &#39;taskCellRenderer&#39;
        },
        cellEditor: &#39;AutoGroupEditer&#39;,
        headerComponentParams: {
          setWidth: async function (col: ColumnEvent) {
            if (col.column) {
              setFieldWidth(state.viewId, &#39;title&#39;, col.column.getActualWidth());
            }
          }
        }
      },
      
      


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6BD4\u8F83js\u539F\u751F\u5B9E\u73B0\u7684\u65B9\u6CD5 \u9996\u5148\u7C7B\uFF0C\u5B9E\u4F8B\u5316</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>
//\u83B7\u53D6\u914D\u7F6E
const gridOptions = { ... };
//\u5B9E\u4F8B\u5316\u5F53\u524D\u7684\u5185\u5BB9
new agGrid.Grid(eGridDiv, gridOptions);
//\u8BBE\u7F6E\u5F53\u524D\u7684\u6570\u636E
gridOptions.api.setRowData(data);


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_005\u6E32\u67D3aggrid\u9700\u8981id\u5BF9\u5E94\u6570\u636E\u552F\u4E00\u6027" tabindex="-1"><a class="header-anchor" href="#_005\u6E32\u67D3aggrid\u9700\u8981id\u5BF9\u5E94\u6570\u636E\u552F\u4E00\u6027" aria-hidden="true">#</a> 005\u6E32\u67D3aggrid\u9700\u8981id\u5BF9\u5E94\u6570\u636E\u552F\u4E00\u6027</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>      getRowNodeId: (data: any) =&gt; {
        return data.record_id;
      },
      


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_006\u6EDA\u52A8\u6761\u76F8\u5173\u63A5\u53E3" tabindex="-1"><a class="header-anchor" href="#_006\u6EDA\u52A8\u6761\u76F8\u5173\u63A5\u53E3" aria-hidden="true">#</a> 006\u6EDA\u52A8\u6761\u76F8\u5173\u63A5\u53E3</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u5F53 \u63D0\u4F9B\u65B0\u7684\u884C\u6570\u636E\u65F6\uFF0C\u7F51\u683C\u5C06\u4E0D\u4F1A\u6EDA\u52A8\u5230\u9876\u90E8\u3002
\u4F7F\u7528\u5C5E\u6027\uFF1AsuppressScrollOnNewData,\u4F46\u662F\u5B9E\u9645\u6CA1\u6709\u770B\u5230\u6548\u679C


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_006\u63A7\u5236aggrid\u8868\u683C\u6EDA\u52A8\u6761\u7684\u76D1\u542C" tabindex="-1"><a class="header-anchor" href="#_006\u63A7\u5236aggrid\u8868\u683C\u6EDA\u52A8\u6761\u7684\u76D1\u542C" aria-hidden="true">#</a> 006\u63A7\u5236aggrid\u8868\u683C\u6EDA\u52A8\u6761\u7684\u76D1\u542C</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u6848\u4F8B\u4E2D\u4E8B\u4EF6\u65B9\u6CD5\uFF1AbodyScroll
\u90A3\u4E48\u6B64\u65F6\u81EA\u5B9A\u4E49\u6807\u7B7E\u4E2D\uFF1A@body-scroll=&quot;myScrollGridFn&quot;
    function myScrollGridFn(scrollObj:any) {
        console.log(scrollObj, &#39;---------------x&#39;, &#39;yyyyyyyyyyy&#39;, scrollObj);
        // \u5982\u4F55\u8BA1\u7B97\u5F53\u524D\u7684\u6EDA\u52A8\u6761\u7684\u4F4D\u7F6E\uFF1A
        // \u666E\u901Ajs\u505A\u6CD5
        // aggrid\u505A\u6CD5
       let FarRight =   scrollObj.columnApi.columnModel.bodyWidth - scrollObj.columnApi.columnModel.scrollWidth;
       if(scrollObj.left ==0){
        alert(&#39;\u6EDA\u52A8\u6761\u5230\u4E86\u6700\u5DE6\u4FA7&#39;);

       }

       if(scrollObj.left == FarRight){
        alert(&quot;\u6EDA\u52A8\u6761\u5230\u4E86\u6700\u53F3\u4FA7&quot;);
       }
    }

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,20);function R(C,D){const e=r("RouterLink");return v(),t("div",null,[o,i("nav",m,[i("ul",null,[i("li",null,[n(e,{to:"#aggrid"},{default:d(()=>[b]),_:1}),i("ul",null,[i("li",null,[n(e,{to:"#_000\u5B98\u65B9api\u6587\u6863-\u4F7F\u7528\u8BF4\u660E"},{default:d(()=>[g]),_:1})]),i("li",null,[n(e,{to:"#_001\u9879\u76EE\u4E2D\u5F15\u5165aggrid"},{default:d(()=>[h]),_:1})]),i("li",null,[n(e,{to:"#_002\u4F7F\u7528\u81EA\u5B9A\u4E49\u6E32\u67D3\u5668\u4F20\u53C2\u7684\u95EE\u9898"},{default:d(()=>[p]),_:1})]),i("li",null,[n(e,{to:"#_003\u6E32\u67D3\u5668\u4F7F\u7528\u540E-\u4E0D\u53EF\u4EE5\u5BF9\u4E8E\u5728\u6E32\u67D3\u5668\u5185\u90E8\u8FDB\u884C\u6761\u4EF6\u6E32\u67D3"},{default:d(()=>[_]),_:1})]),i("li",null,[n(e,{to:"#_004\u5BF9\u4E8E\u5F53\u524D\u7684aggrid\u5217\u8868\u5934\u7684\u914D\u7F6E"},{default:d(()=>[q]),_:1})]),i("li",null,[n(e,{to:"#_005\u6E32\u67D3aggrid\u9700\u8981id\u5BF9\u5E94\u6570\u636E\u552F\u4E00\u6027"},{default:d(()=>[f]),_:1})]),i("li",null,[n(e,{to:"#_006\u6EDA\u52A8\u6761\u76F8\u5173\u63A5\u53E3"},{default:d(()=>[x]),_:1})]),i("li",null,[n(e,{to:"#_006\u63A7\u5236aggrid\u8868\u683C\u6EDA\u52A8\u6761\u7684\u76D1\u542C"},{default:d(()=>[y]),_:1})])])])])]),w])}var O=a(c,[["render",R],["__file","001aggrid\u5B9E\u6218\u62D3\u5C55\u8BB0\u5F55.html.vue"]]);export{O as default};
