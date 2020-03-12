<!--抽屉模板-->
<template>
  <Drawer
    v-model="isActive"
    :width="width"
    :before-close="beforeClose"
    draggable
    scrollable
    :transfer="false"
    @on-resize-width="resize"
    :mask-closable="maskClosable">
    <slot name="header">
<!--       开放出来 允许自定义头部-->
      <div slot="header">
        <h3 style="padding-bottom: 8px">样衣档案</h3>
        <Row>
          <Col span="2">
            <img class="title-img" src="@/assets/images/archives-icon.png" alt="">
          </Col>
          <Col span="15" offset="1">
            <h3 class="top10">样衣款号：YY201902280001</h3>
            <p class="top10"><b>登记人：</b>张晓方</p>
            <p class="top10"><b>登记时间：</b>2019-02-28 11:45:57</p>
          </Col>
          <Col span="5" align="right">
            <Button type="primary" >编辑</Button>
            <Row class="top10">
              <Col span="12">状态</Col>
              <Col span="12">成本价</Col>
            </Row>
            <Row class="top10">
              <Col span="12">
                <h3>&nbsp;</h3>
              </Col>
              <Col span="12">
                <h3>¥ 50</h3>
              </Col>
            </Row>
          </Col>
        </Row>
        <div class="tool-bar">
          <div class="item"  v-for="(item, index) in tabs" :key="index" @click="selectTab(item)" :class="[item === active ? 'is_active' : '']">
            测试按钮
          </div>
        </div>
      </div>
    </slot>
    <slot>
      <transition name="fade"  >
        <div v-if="active === 'a'">
          <drawer-demo></drawer-demo>
          <drawer-demo></drawer-demo>
        </div>
      </transition>
<!--   可以使用animated动画函数列如：   enter-active-class="animated fadeInRight"-->
      <transition name="fade" >
        <div v-if="active === 'b'">
          <form-list :isView.sync="isView"></form-list>
        </div>
      </transition>
    </slot>
      <div class="drawer-footer" :style="{width: width + 'px'}" >
        <slot name="footer" >
          <Button style="margin-right: 8px" @click="close">关闭</Button>
          <Button type="primary" @click="isActive = false">刷新</Button>
        </slot>
      </div>
  </Drawer>
</template>

<script>
  import {ElTabs, ElTabPane} from '_c/chenfan/tabs'
  import DrawerDemo from '../dynamic-table'
  import FormList from "./formList"
  // import {}
  export default {
    name: "drawer-template",
    components: {
      DrawerDemo,
      FormList,
      ElTabs,
      ElTabPane
    },
    props: {
      formData: {
        type: Object,
        default: () => {
          return {}
        }
      },
      // 宽度
      width: {
        type: [Number, String],
        default: 1200
      },
      value: {
        type: Boolean,
        default: true
      },
      // 是否允许点击遮罩层关闭
      maskClosable: {
        type: Boolean,
        default: false
      },
      // 是否允许关闭
      isClose: {
        type: Boolean,
        default: false
      }
    },
    data () {
      return {
        isActive: false,
        // 是否为详情入口
        isView: false,
        // tab列表
        tabs: ['a', 'b', 'c', 'd', 'e', 'f', 'g'],
        // 选中tabs页签
        active: 'a'
      }
    },
    methods: {
      init (row, index, isView) {
        this.isActive = true
        this.isView = isView
      },
      resize (width) {
        this.width = width
      },
      // 关闭drawer事件
      beforeClose () {
        return new Promise((resolve, reject) => {
          if (this.isClose) {
            resolve()
          } else {
            this.close()
            reject()
          }
        })
      },
      close () {
        this.$Modal.confirm({
          title: '特殊提醒',
          content: '<p>数据未提交，确认关闭吗</p>',
          onOk: () => {
            this.isActive = false
          },
          onCancel: () => {
            this.isActive = true
          }
        });
      },
      selectTab (item) {
        this.active = item
      }
    },
    watch: {
      value (val) {
        this.isActive = val
      }
    }
  }
</script>

<style scoped  lang="less">
  .tool-bar {
    position: absolute;left: -30px; height: 100%;background: #eee;top: 0;border-right: 1px solid #eee;
    .item {
      width: 30px;background: #fff;
      padding: 8px;
      cursor: pointer;
      word-break: break-all;
    }
    .item + .item {
      border-top: 1px solid #ccc ;
    }
    .is_active {
      border-right: 1px solid #2d8cf0;
      color: #2d8cf0;
    }
  }
  .drawer-footer{
    position: fixed;
    bottom: 0;
    right: 0;
    border-top: 1px solid #e8e8e8;
    padding: 10px 16px;
    text-align: center;
    background: #fff;
    z-index: 999;
  }
  .top10 {
    margin-top: 10px;
  }
  .title-img {
    max-width: 100px;
    max-height: 100px;
  }
  /*.animated {*/
  /*  animation-duration: 0.5s;*/
  /*  animation-fill-mode: both;*/
  /*}*/
</style>
