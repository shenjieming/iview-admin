<!--设定默认弹窗尺寸-->
<template>
  <Modal
    draggable
    v-model="isActive"
    :fullscreen="fullscreen"
    draggable
    @on-cancel="cancel"
    @on-ok="ok"
    @on-visible-change="visibleChange"
    :width="width"
    :style="{width: width, height: height}">
    <p slot="header"> 高级查询</p>
    <slot></slot>
    <slot name="footer"></slot>
  </Modal>
</template>

<script>
export default {
  name: 'model-type',
  props: {
    size: {
      type: String,
      default: 'middle'
    },
    isActive: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    fullscreen () {
      return this.size === 'full'
    },
    width () {
      switch (this.size) {
        case 'small':
          return 520
        case 'middle':
          return 1040
        case 'large':
          return 1600
        default:
          return 600
      }
    },
    height () {
      return '50%'
    }
  },
  data () {
    return {
      visible: false
    }
  },
  methods: {
    ok () {
      this.$emit('ok')
    },
    cancel () {
      this.$emit('cancel')
    },
    visibleChange (visible) {
      this.$emit('visibleChange', visible)
    }
  }
}
</script>

<style scoped>

</style>
