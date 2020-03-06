<template>
  <div>
    <Card>
      <Row>
        <query-template :dataForm="dataForm" :queryFlag="queryFlag"></query-template>
        <ButtonGroup style="float: right">
          <Button type="primary" @click="reset">查询</Button>
          <Button type="primary" @click="reset">重置</Button>
          <Button type="primary" @click="queryFlag = 'advance'" v-if="queryFlag === 'simple'">高级搜索</Button>
          <Button type="primary" @click="queryFlag = 'simple'" v-if="queryFlag === 'advance'">模糊搜索</Button>
        </ButtonGroup>
      </Row>
    </Card>
    <Card>
      <Alert class="fabric-alert" show-icon>已选择<a href="#">{{selection.length}}</a>项</Alert>
      <dynamic-table :columns="columns" :dataList="dataList" @selectChange="selectChange" :appendList="appendList" :indexType="indexType" ref="dTable">
        <slot>
          <RadioGroup v-model="indexType" style="display: inline-block; margin-left: 20px" @on-change="radioChange">
            <Radio label="index">数字</Radio>
            <Radio label="selection">选择</Radio>
            <Radio label="expand">可展开</Radio>
          </RadioGroup>
        </slot>
      </dynamic-table>
      <pagination :pageSize.sync="pageSize" :total="total" :pageNum.sync="pageNum" @queryFnc="queryFnc"></pagination>
    </Card>
    <Card>
      <drag-table></drag-table>
    </Card>
  </div>
</template>

<script>
import { dataList, columns } from './dataList'
import DynamicTable from './dynamic-table'
import Pagination from './pagination'
import QueryTemplate from './query-template'
import DragTable from './drag-table'
export default {
  name: 'dev-test',
  components: {
    DragTable,
    Pagination,
    DynamicTable,
    QueryTemplate
  },
  computed: {
    total () {
      return this.dataList.length
    }
  },
  data () {
    return {
      dataList,
      columns,
      pageNum: 1,
      pageSize: 10,
      indexType: 'index',
      excludeList: ['selection', 'action'],
      // 选中list
      selection: [],
      // 选中列list
      selectList: [],
      appendList: [{
        title: '操作',
        align: 'center',
        // key: 'action',
        // fixed: 'right',
        resizable: true,
        width: 180,
        render: (h, params) => {
          return h('div', [
            h('Button', {
              props: {
                type: 'error',
                size: 'small'
              },
              on: {
                click: () => {
                  this.remove(params.index)
                }
              }
            }, 'Delete') ])
        }
      }],
      queryFlag: 'simple',
      // 查询条件
      dataForm: {
        dateTimePicker: [],
        printStateList: '',
        size: ''
      }
    }
  },
  created () {
    this.columns.forEach((item, index) => {
      if (item.key === 'sampleDressFileCode') {
        item.render = (h, params) => {
          return h('div', [
            h('Icon', {
              props: {
                type: 'sampleDressFileCode'
              }
            }),
            h('strong', params.row.sampleDressFileCode)
          ])
        }
      }
      if (index === this.columns.length) {
        item.render = (h, params) => {
          return h('div', [
            h('Button', {
              props: {
                type: 'primary',
                size: 'small'
              },
              style: {
                marginRight: '5px'
              },
              on: {
                click: () => {
                  this.show(params.index)
                }
              }
            }, 'View'),
            h('Button', {
              props: {
                type: 'error',
                size: 'small'
              },
              on: {
                click: () => {
                  this.remove(params.index)
                }
              }
            }, 'Delete')
          ])
        }
      }
    })
  },
  methods: {
    // 选中事件
    selectChange (row) {
      this.selection = row
    },
    // 删除列
    remove (index) {
      this.dataList.splice(index, 1)
    },
    reset () {
      this.dataForm = {}
    },
    // 列表查询
    queryFnc () {
      alert(this.dataForm)
    },
    // 按钮切换
    radioChange () {
      this.$nextTick(() => {
        this.$refs.dTable.appendColumns()
      })
    }
  }
}
</script>

<style lang="less">
  .drag-list {
    padding: 2px;
    display: block;
  }

  .drag-list + .drag-list {
    margin-bottom: 5px;
  }

  .td-visible {
    display: none;
  }
</style>
