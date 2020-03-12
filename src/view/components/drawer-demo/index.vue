<template>
  <div>
    <Card>
      <Row>
        <query-template :dataForm="dataForm"></query-template>
        <advanced-query-template ref="advance" @query="queryFnc" :dataForm="dataForm" @reset="reset"></advanced-query-template>
        <ButtonGroup style="float: right">
          <Button type="primary" @click="queryFnc">查询</Button>
          <Button type="primary" @click="reset">重置</Button>
          <Button type="primary" @click="advanceSearch">高级搜索</Button>
        </ButtonGroup>
      </Row>
      <dynamic-table :columns="columns" :dataList="dataList" @selectChange="selectChange" :appendList="appendList" :indexType="indexType" ref="dTable">
        <template slot="button">
          <Button type="primary" @click="importExcel">导入</Button>
          <Button type="info" @click="exportExcel">导出</Button>
        </template>
      </dynamic-table>
      <pagination :pageSize.sync="pageSize" :total="total" :pageNum.sync="pageNum" @queryFnc="queryFnc"></pagination>
    </Card>
    <drawer-template ref="drawer" :formData="formData"></drawer-template>
  </div>
</template>

<script>
  import { dataList, columns } from '../dynamic-table/dataList'
  import AdvancedQueryTemplate from './advanced-query-template'
  import DynamicTable from '../dynamic-table/dynamic-table'
  import Pagination from '../dynamic-table/pagination'
  import QueryTemplate from '../dynamic-table/query-template'
  import DrawerTemplate from './drawer-template'
  export default {
    name: 'dev-test',
    components: {
      Pagination,
      DynamicTable,
      QueryTemplate,
      AdvancedQueryTemplate,
      DrawerTemplate
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
        // 选中list
        selection: [],
        // 选中编辑行
        formData: {},
        // 选中列list
        selectList: [],
        // 追加表格操作列
        appendList: [{
          title: '操作',
          align: 'center',
          // key: 'action',
          fixed: 'right',
          resizable: true,
          width: 180,
          render: (h, params) => {
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
                    this.edit(params,params.index)
                  }
                }
              }, '编辑'),
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
                    this.show(params,params.index)
                  }
                }
              }, '详情'),
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
              }, '删除') ])
          }
        }],
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
          item.render = this.appendList
        }
      })
    },
    methods: {
      // 高级查询
      advanceSearch () {
        this.$refs.advance.init()
      },
      // 选中事件
      selectChange (row) {
        this.selection = row
      },
      // 删除列
      remove (index) {
        this.dataList.splice(index, 1)
      },
      // 编辑列
      edit ({row}, index) {
        this.formData = row
        this.$refs.drawer.init(row, index, false)
      },
      // 查看列
      show ({row}, index) {
        this.formData = row
        this.$refs.drawer.init(row, index, true)
      },
      reset () {
        console.log('重置')
        this.dataForm = {}
      },
      // 列表查询
      queryFnc () {
        alert(JSON.stringify(this.dataForm))
      },
      // 导入
      importExcel () {
      },
      // 导出
      exportExcel () {
        this.$Message.success('导出成功！')
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
