<template>
  <div id="tableDrop" style="margin: 0 auto;">
    <Table  border ref="currentRowTable" :columns="columns" :data="dataList" :draggable="true" @on-drag-drop="onDragDrop"></Table>
    <div id="info"></div>
    <div id="triangle">
      <div class="arrow arrow-down"></div>
      <div class="arrow arrow-up"></div>
    </div>
  </div>
</template>

<script>
import { dataList, columns } from './dataList'
export default {
  name: 'drag-table',
  data () {
    return {
      columns: JSON.parse(JSON.stringify(columns)),
      dataList: JSON.parse(JSON.stringify(dataList))
    }
  },
  methods: {
    swapArr (arr, index1, index2) {
      // 改变数组下面两个元素的位置
      arr[index1] = arr.splice(index2, 1, arr[index1])[0]
      return arr
    },
    onDragDrop (a, b) {
      // 拖动表格里面的每一行
      console.log(a, b)
      this.data = this.swapArr(this.dataList, a, b)
    }
  }
}
</script>

<style scoped>

</style>
