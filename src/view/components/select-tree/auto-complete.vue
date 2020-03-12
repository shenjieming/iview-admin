<template>
  <div style="display: inline-block">
<!--    当前页： {{pageNum}}-->
<!--    {{data}}-->
    <AutoComplete
      clearable
      v-model="value"
      @on-change="change"
      @on-blur="blur"
      transfer
      placeholder="请输入...">
      <Scroll height="170" :on-reach-bottom="handleReachBottom" :distance-to-edge="10">
<!--        v-show="!item.sortIndex || item.sortIndex !== -1"-->
        <Option v-for="(item,index) in data" :value="item.color" :key="index"  >{{ item.color }}</Option>
<!--        <p class=" ivu-select-item demo-auto-complete-more" @click="getDataList"  v-if="loading">加载更多数据...</p>-->
      </Scroll>
    </AutoComplete>
  </div>

</template>
<script>
  import _ from "lodash";
  const defaultList = [{color:'灰红色'}, {color:'黑红色'}, {color:'红色'}, {color:'红黑色'}, {color:'红灰色'}]
  export default {
    data () {
      return {
        value: '',
        oldVal: '',
        pageNum: 1,
        // 原始数据记录
        odrList: JSON.parse(JSON.stringify(defaultList)),
        pageSize: 5,
        data: JSON.parse(JSON.stringify(defaultList)),
      }
    },
    methods: {
      // 失去焦点
      blur () {
        // if (!this.data.filter(item => item.color ===this.value).length) {
        //   this.value = ''
        // }
      },
      // 获取数据列表
      getDataList () {
        return new Promise(resolve => {
          this.pageNum ++
          let arr = []
          defaultList.forEach(item => {
            arr.push({color:`${item.color + 'a' + this.pageNum}`})
          })
          this.odrList = [...this.odrList, ...arr]
          this.loading = true
          resolve()
        })

      },
      change (val) {
        /*
        * 1： 先过滤输入数据（空格除外）
        * 2： 生成排序列字段sortIndex
        * 3： 根据字段进行排序
        * */
        if (_.isEmpty(_.trim(val))) {
          this.data = this.odrList
        } else {
          this.pageNum = 1
          this.$nextTick(() => {
            this.data = this.odrList.filter(item => item.color.indexOf(_.trim(val)) !== -1)
            this.data.forEach(item => {
              item.sortIndex = item.color.indexOf(_.trim(val))
            })
            this.data = _.sortBy(this.data, function(item) {
              return item.sortIndex;
            })
          })
        }
      },
      handleReachBottom () {
        return new Promise(resolve => {
          setTimeout(() => {
            this.pageNum ++
            this.getDataList().then(() => {
              this.change(this.value)
            })
            resolve()
          }, 500)
        })
      },
      mounted() {
        this.pageNum = 1
      }
    }
  }
</script>
<style lang="less">
  .demo-auto-complete-more {
    text-align: center;
    width: 100%;
    cursor: pointer;
    position: absolute;
    bottom: 0;
  }
  .ivu-select-dropdown-list {
    max-height: 300px;
    position: relative;
  }
</style>
