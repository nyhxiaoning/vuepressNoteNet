![成长](/images/home.png)

[[toc]]




## aggrid



### 000官方API文档：使用说明
- 一般这里的接口（interface）是所有的内容全局函数和全局属性都在哪里。
找一些全局的方法就在接口里面找。

- 对于每一个行列的实例使用，在接口下面找。

### 001项目中引入aggrid

~~~
引入aggrid使用方式
----------------------------------导入必备文件
//引入样式文件
// import 'ag-grid-enterprise';
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";
import "ag-grid-community/dist/styles/ag-theme-balham.css"
// //引入ag-grid-vue
import { AgGridVue } from "ag-grid-vue3";
　components: {
    AgGridVue
  },
 <ag-grid-vue 
      style="width: 100%; height: 200px;" 
      class="table ag-theme-balham"
      :columnDefs="columnDefs" 
      :rowData="rowData" 
      :enableColResize="false"
      @gridReady="onGridReady" 
      rowSelection="multiple"
      rowHeight='50'
      :enableSorting="true"
      :sideBar="sideBar"
      :pagination="true"
      :paginationPageSize="10"
      ></ag-grid-vue>
 
--------------------------------------HTML部分:

    <div style="padding: 10px; height: 100%">
      <ag-grid-vue
        id="myGrid"
        style="width: 100%; height: 100%"
        class="ag-theme-alpine my-style table_box"
        :grid-options="gridOptions"
        @row-drag-move="actions.onRowDragMove"
        @row-drag-leave="actions.onRowDragLeave"
        @row-drag-end="actions.onRowDragEnd"
      />
    </div>
    另一种方式
     <ag-grid-vue 
      style="width: 100%; height: 200px;" 
      class="table ag-theme-balham"
      :columnDefs="columnDefs" 
      :rowData="rowData" 
      :enableColResize="false"
      @gridReady="onGridReady" 
      rowSelection="multiple"
      rowHeight='50'
      :enableSorting="true"
      :sideBar="sideBar"
      :pagination="true"
      :paginationPageSize="10"
      ></ag-grid-vue>








~~~

### 002使用自定义渲染器传参的问题
渲染器默认有一个params参数在props下面挂载，如果自定义想要再传入一些值，会默认挂在params对象下面。例如：
~~~
  column.cellRendererParams = { properties: colInfo.properties };
  column.cellRendererFramework = 'FindreferenceRender';

这样组件中props.params.properties这个属性就增加了。

每一个自定义渲染器内部使用
props：["params"]；//即可

~~~

### 003渲染器使用后，不可以对于在渲染器内部进行条件渲染
因为进入渲染器后，渲染器一次渲染后，已经实例化，其他地方再次使用了该渲染器，也是使用同样的渲染机制，不可能会再次渲染，只可以通过选择渲染器前进行不同的渲染器判断进行条件渲染。



### 004对于当前的aggrid列表头的配置
~~~

// 这里是初始化配置表头header的任务名称新建
gridOptions.api?.setAutoGroupColumnDef({
  rowDrag: true,
  field: 'title',
  headerName: '任务名称',
  lockPosition: true,
  headerComponent: 'TableHead',
  // editable: false,
  sortable: false,
  resizable: true, //是否可以调整列大小，就是拖动改变列大小
  minWidth: 100,
  width: viewCols.find(x => x.fieldId === 'title')?.width,
  cellRendererParams: {
    suppressDoubleClickExpand: true,
    suppressCount: true,
    checkbox: false,
    checkboxSelection: false,
    innerRenderer: 'taskCellRenderer'
  },
  cellEditor: 'AutoGroupEditer',
  cellEditorParams: {
    newTaskBlur: function (record_id: string) {
      gridOptions.api?.applyTransaction({
        remove: [{ record_id }]
      });
    }
  },
  headerComponentParams: {
    sourceColumn: viewCols.find(x => x.fieldId === 'title'),
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
---如果静态配置
      autoGroupColumnDef: {
        rowDrag: true,
        field: 'title',
        colId: 'title',
        headerName: '任务名称',
        lockPosition: true,
        headerComponent: 'TableHead',
        // editable: false,
        sortable: false,
        resizable: true, //是否可以调整列大小，就是拖动改变列大小
        minWidth: 100,
        cellRendererParams: {
          suppressDoubleClickExpand: false,
          suppressCount: true,
          checkbox: true,
          checkboxSelection: true,
          innerRenderer: 'taskCellRenderer'
        },
        cellEditor: 'AutoGroupEditer',
        headerComponentParams: {
          setWidth: async function (col: ColumnEvent) {
            if (col.column) {
              setFieldWidth(state.viewId, 'title', col.column.getActualWidth());
            }
          }
        }
      },
      
      


~~~


比较js原生实现的方法
首先类，实例化
~~~

//获取配置
const gridOptions = { ... };
//实例化当前的内容
new agGrid.Grid(eGridDiv, gridOptions);
//设置当前的数据
gridOptions.api.setRowData(data);


~~~

### 005渲染aggrid需要id对应数据唯一性
~~~
      getRowNodeId: (data: any) => {
        return data.record_id;
      },
      


~~~


### 006滚动条相关接口
~~~
当 提供新的行数据时，网格将不会滚动到顶部。
使用属性：suppressScrollOnNewData,但是实际没有看到效果


~~~


### 006控制aggrid表格滚动条的监听

~~~
案例中事件方法：bodyScroll
那么此时自定义标签中：@body-scroll="myScrollGridFn"
    function myScrollGridFn(scrollObj:any) {
        console.log(scrollObj, '---------------x', 'yyyyyyyyyyy', scrollObj);
        // 如何计算当前的滚动条的位置：
        // 普通js做法
        // aggrid做法
       let FarRight =   scrollObj.columnApi.columnModel.bodyWidth - scrollObj.columnApi.columnModel.scrollWidth;
       if(scrollObj.left ==0){
        alert('滚动条到了最左侧');

       }

       if(scrollObj.left == FarRight){
        alert("滚动条到了最右侧");
       }
    }

~~~