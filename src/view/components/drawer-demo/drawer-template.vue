<!--抽屉模板-->
<template>
  <Drawer
    v-model="isActive"
    width="1200"
    draggable
    @on-resize-width="resize"
    :mask-closable="false">
    <p slot="header">样例档案详情</p>
    <Tabs value="name1">
      <TabPane label="表单编辑" name="name1">
        <drawer-demo></drawer-demo>
        <drawer-demo></drawer-demo>
      </TabPane>
      <TabPane label="表单信息" name="name2">
        <form-list :isView.sync="isView"></form-list>
      </TabPane>
    </Tabs>
    <div class="demo-drawer-footer" :style="{width: width + 'px'}">
      <Button style="margin-right: 8px" @click="close">关闭</Button>
      <Button type="primary" @click="isActive = false">刷新</Button>
    </div>
  </Drawer>
</template>

<script>
  import DrawerDemo from '../dynamic-table'
  import FormList from "./formList";
  export default {
    name: "drawer-template",
    components: {
      DrawerDemo,
      FormList
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
      }
    }
  }
</script>

<style scoped lang="less">
  .demo-drawer-footer{

    position: fixed;
    bottom: 0;
    right: 0;
    border-top: 1px solid #e8e8e8;
    padding: 10px 16px;
    text-align: right;
    background: #fff;
  }
</style>
