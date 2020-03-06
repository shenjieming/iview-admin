<template>
  <Form  :label-width="80">
    <FormItem label="尺寸">
      <RadioGroup v-model="modelSize">
        <Radio label="small">小</Radio>
        <Radio label="middle">中</Radio>
        <Radio label="large">大</Radio>
        <Radio label="full">全屏</Radio>
      </RadioGroup>
    </FormItem>
    <FormItem label="">
      <Button @click="modalClick">点击</Button>
    </FormItem>
    <modal-type :isActive="isActive" :size="modelSize" :modelSize="modelSize" @cancel="cancel" @ok="ok" @visibleChange="visibleChange">
      <span>
        这个是尺寸：{{modelSize}}
      </span>

    </modal-type>
  </Form>
</template>
<script>
import ModalType from './modal-type'
export default {
  data () {
    return {
      modelSize: 'small',
      isActive: false
    }
  },
  components: {
    ModalType
  },
  methods: {
    modalClick () {
      this.isActive = true
    },
    cancel () {
      this.isActive = true
    },
    ok () {
      this.isActive = false
    },
    visibleChange (visible) {
      this.isActive = visible
    }
  }
}
</script>
