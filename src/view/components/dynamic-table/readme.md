**dynamic-table**：

功能描述：主要负责表单的动态添加、配置

参数如下：

```
height: String,
      width: String,
      // 是否需要合并（合并 emit 事件handleSpan）
      isMarge: {
        type: Boolean,
        default: false
      },
      loading: {
        type: Boolean,
        default: false
      },
      // 填充列
      columns: {
        type: Array,
        default: []
      },
      // 表格数据内容
      dataList: {
        type: Array,
        default: []
      },
      // 索性类型
      // index、selection、expand、html
      indexType: {
        type: String,
        default: 'selection'
      },
      // 追截数组list（主体主要为操作按钮等）
      appendList: {
        type: Array,
        default: function () {
          return [{
            title: '操作',
            align: 'center',
            // fixed: 'right',
            resizable: true,
            width: 180
          }]
        }
      }
```
