<template>
  <Modal v-model="isActive">
    <p slot="header"> 高级查询</p>
    <Form  ref="formInline"  inline :label-width="90">
      <FormItem label="样衣款号" >
        <Input v-model="dataForm.size1" placeholder="请输入样衣款号" clearable></Input>
      </FormItem>
      <FormItem label="样衣款号" >
        <Input v-model="dataForm.size2" placeholder="请输入样衣款号" clearable></Input>
      </FormItem>
      <FormItem label="样衣款号" >
        <Input v-model="dataForm.size3" placeholder="请输入样衣款号" clearable></Input>
      </FormItem>
      <FormItem label="样衣款号" >
        <Input v-model="dataForm.size4" placeholder="请输入样衣款号" clearable></Input>
      </FormItem>
      <FormItem label="打印状态">
        <Select v-model="dataForm.printStateList"  placeholder="请选择打印状态" style="width: 100%" clearable>
          <Option :value="0">未打印</Option>
          <Option :value="1">已打印</Option>
        </Select>
      </FormItem>
      <FormItem label="登记时间">
        <DatePicker type="daterange" ref="DatePicker" v-model="dataForm.dateTimePicker" placeholder="请选择"></DatePicker>
      </FormItem>
    </Form>
    <p slot="footer">
      <Button  size="large" type="primary" @click="query">查询</Button>
      <Button  size="large"  @click="reset">重置</Button>
    </p>
  </Modal>
</template>

<script>
  import ModelType from '@/view/components/modal-box/modal-type.vue'
  export default {
    name: "high-search-template",
    components: {
      ModelType
    },
    props: {
      dataForm: {
        type: Object,
        default: ()=> {
          return {}
        }
      }
    },
    data () {
      return{
        isActive: false,
      }
    },
    methods: {
      init () {
        this.isActive = true
      },
      reset () {
        this.$emit('reset')
        // this.isActive = false
      },
      query () {
        this.$emit('query')
        this.isActive = false
      }
      // visibleChange (visible) {
      //   this.isActive = visible
      // }
    }
  }
</script>

<style scoped>

</style>
