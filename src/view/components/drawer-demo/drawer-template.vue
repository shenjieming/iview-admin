<!--抽屉模板-->
<template>
  <Drawer
    v-model="isActive"
    width="1200"
    draggable
    :transfer="false"
    @on-resize-width="resize"
    :mask-closable="false">
    <template slot="header">
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
      <div class="tools">
        <div class="item"  v-for="(item, index) in tabs" :key="index" @click="selectTab(item)" :class="[item === active ? 'is_active' : '']">
          测试按钮
        </div>
      </div>
    </template>
      <div v-if="active === 'a'">
        <drawer-demo></drawer-demo>
        <drawer-demo></drawer-demo>
      </div>
    <div v-if="active === 'b'">
      <form-list :isView.sync="isView"></form-list>
    </div>
<!--    <transition name="tabs">-->
<!--   -->
<!--    </transition>-->
    <div class="demo-drawer-footer" :style="{width: width + 'px'}" style="text-align: center">
      <Button style="margin-right: 8px" @click="close">关闭</Button>
      <Button type="primary" @click="isActive = false">刷新</Button>
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
    },
    data () {
      return {
        isActive: false,
        // 是否为详情入口
        isView: false,
        width: 1200,
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
      close () {
        this.$Modal.confirm({
          title: 'Title',
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
    }
  }
</script>

<style lang="less">
  .tools {
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
  .demo-drawer-footer{
    position: fixed;
    bottom: 0;
    right: 0;
    border-top: 1px solid #e8e8e8;
    padding: 10px 16px;
    text-align: right;
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
  .ivu-drawer-body {
    height: calc(100% - 25px);
  }
  /*.tabs-enter-active {*/
  /*  transition: all .13s ease;*/
  /*}*/
  /*.tabs-enter-active-leave-active {*/
  /*  transition: all .15s;*/
  /*  transform: translateY(100px);*/
  /*}*/
  /*.tabs-enter-active-enter, .tabs-enter-active-leave-to {*/
  /*  transform: translateY(-100px);*/
  /*  opacity: 0;*/
  /*}*/
</style>
