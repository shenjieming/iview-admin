<template>
  <div>
    <Poptip placement="bottom-end">
      <Button type="primary">筛选</Button>
      <div slot="content">
        <Checkbox-group v-model="selectList" @on-change="listedCheck">
          <draggable v-model="dragList" @update="dragUpdate">
            <Checkbox class="drag-list"
                      v-for="item in dragList"
                      :label="item.key"
                      :key="item.key">
              {{item.title}}
            </Checkbox>
          </draggable>
        </Checkbox-group>
      </div>
    </Poptip>
    <slot name="button"></slot>
    <Table
      style="margin-top: 5px"
      border
      ellipsis
      stripe
      show-summary
      sum-text="合计"
      @on-select-all-cancel="handSelect"
      @on-select-all="handSelect"
      @on-select-cancel="handSelect"
      @on-select="handSelect"
      @span-method="handleSpan"
      :columns="relColumns"
      :data="dataList">
      <slot name="append"></slot>
    </Table>
  </div>

</template>

<script>
import draggable from 'vuedraggable'
export default {
  name: 'dynamicTable',
  components: {
    draggable
  },
  props: {
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
      default: () => {
        return []
      }
    },
    // 表格数据内容
    dataList: {
      type: Array,
      default: () => {
        return []
      }
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
          key: 'action',
          // fixed: 'right',
          resizable: true,
          width: 180
        }]
      }
    }
  },
  data () {
    return {
      excludeList: ['selection', 'action'],
      // 页面渲染真实表头
      relColumns: [],
      // 拖拽列list
      dragList: [],
      // 选中list
      selection: [],
      // 选中列list
      selectList: []
    }
  },
  created () {
    this.columns.forEach(item => {
      this.selectList.push(item.key)
    })
    this.dragList = JSON.parse(JSON.stringify(this.columns))
    this.appendColumns()
  },
  methods: {
    // 选中事件
    handSelect (row) {
      this.$emit('selectChange', row)
    },
    // 合并事件
    handleSpan ({ row, column, rowIndex, columnIndex }) {
      if (this.isMarge) {
        this.$emit('handleSpan')
      } else {
        return {
          rowspan: 1,
          colspan: 1
        }
      }
    },
    // 前后追加列事件（主要是后续追加操作列 以及前置索引列）
    appendColumns (type, columns = this.columns, appendList = this.appendList) {
      let indexType = [{
        width: '60px',
        align: 'center',
        type: this.indexType
      }]
      this.relColumns = [...indexType, ...columns, ...appendList]
    },
    // 是否显示列头
    listedCheck (item) {
      this.relColumns.forEach(ctem => {
        if (!item.includes(ctem.key) && ctem.key) {
          this.$set(ctem, 'className', 'td-visible')
        } else {
          this.$set(ctem, 'className', '')
        }
      })
    },
    // 拖拽更新完成事件
    dragUpdate () {
      // 获取勾选显示的表头列表
      let arr = this.dragList.filter(item => this.selectList.includes(item.key))
      this.appendColumns(this.indexType, arr, this.appendList)
    }
  }
}
</script>

<style scoped>

</style>
