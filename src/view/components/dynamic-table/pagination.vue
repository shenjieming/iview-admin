<!-- 分页插件-->
<template>
  <Page
        :current="relPageNum"
        :page-size="relPageSize"
        :page-size-opts="pageSizeOpts"
        :total="total"
        show-elevator
        show-total
        show-sizer
        @on-change="pageNumChange"
        @on-page-size-change="pageSizeChang" />
</template>

<script>
export default {
  name: 'pagination',
  props: {
    // 当前页大小
    pageSize: {
      type: Number,
      default: 10
    },
    // 当前页
    pageNum: {
      type: Number,
      default: 1
    },
    // 总计
    total: {
      type: Number,
      default: 0
    },
    pageSizeOpts: {
      type: Array,
      default: () => {
        return [10, 15, 30, 60, 90]
      }
    }
  },
  data () {
    return {
      relPageSize: this.pageSize,
      relPageNum: this.pageNum
    }
  },
  methods: {
    pageNumChange (num) {
      this.relPageNum = num
      this.$emit('update:pageNum', this.relPageNum)
      this.$emit('queryFun')
    },
    pageSizeChang (size) {
      this.relPageSize = size
      this.relPageNum = 1
      this.$emit('update:pageSize', this.relPageSize)
      this.$emit('update:pageNum', this.relPageNum)
      this.$emit('queryFun')
    }
  }
}
</script>
