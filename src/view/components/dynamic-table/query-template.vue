<template>
  <Form ref="formInline"  inline :label-width="90" class="list-query">
    <div v-show="queryFlag === 'simple'" class="simple-query">
      <Input v-model="dataForm.size" placeholder="请输入样衣款号" class="item" clearable>
        <template  slot="prefix" >样衣款号：</template>
      </Input>
      <DatePicker type="daterange" ref="DatePicker" v-model="dataForm.dateTimePicker" placeholder="请选择日期" class="item"></DatePicker>
      <Select v-model="dataForm.printStateList"   placeholder="请选择打印状态" class="item" clearable>
        <template slot="prefix">打印状态：</template>
        <Option :value="0">未打印</Option>
        <Option :value="1">已打印</Option>
      </Select>
    </div>
    <transition name="list-query-transform">
      <div v-show="queryFlag === 'advance'" class="advance-query">
        <FormItem label="样衣款号" class="item">
          <Input v-model="dataForm.size" placeholder="请输入样衣款号" clearable></Input>
        </FormItem>
        <FormItem label="样衣款号" class="item">
          <Input v-model="dataForm.size" placeholder="请输入样衣款号" clearable></Input>
        </FormItem>
        <FormItem label="样衣款号" class="item">
          <Input v-model="dataForm.size" placeholder="请输入样衣款号" clearable></Input>
        </FormItem>
        <FormItem label="样衣款号" class="item">
          <Input v-model="dataForm.size" placeholder="请输入样衣款号" clearable></Input>
        </FormItem>
        <FormItem label="打印状态" class="item">
          <Select v-model="dataForm.printStateList"  placeholder="请选择打印状态" clearable>
            <Option :value="0">未打印</Option>
            <Option :value="1">已打印</Option>
          </Select>
        </FormItem>
        <FormItem label="登记时间" class="item">
          <DatePicker type="daterange" ref="DatePicker" v-model="dataForm.dateTimePicker" placeholder="请选择"></DatePicker>
        </FormItem>
      </div>
    </transition>

  </Form>
</template>

<script>
export default {
  name: 'query-template',
  props: {
    queryFlag: {
      type: String,
      default: 'simple'
    },
    dataForm: {
      type: Object,
      default: () => {}
    }
  }
}
</script>
<style lang="less">
  .list-query {
    .simple-query {
      .ivu-select-single .ivu-select-prefix, .ivu-input-prefix, .ivu-input-suffix {
        width: 80px;
        line-height: 32px;
      }
      .ivu-input-with-prefix {
        padding-left: 80px;
      }
      .item {
        width: 250px;
      }
    }
    .advance-query {
      .item{
        width: 320px;
      }
      .ivu-date-picker {
        width: 100%;
      }
    }
    .item {
      margin-right: 10px;
    }
  }
  .list-query-transform-enter-active {
    transition: all .13s ease;
  }
  .list-query-transform-leave-active {
    transition: all .15s;
    transform: translateY(10px);
  }
  .list-query-transform-enter, .list-query-transform-leave-to {
    transform: translateY(-10px);
    opacity: 0;
  }
</style>
