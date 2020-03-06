<template>
  <div>
    <Form  :label-width="80">
      <FormItem label="单位货币">
        <InputNumber
          :max="10000"
          v-model="value1"
          :formatter="value => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')"
          :parser="value => value.replace(/\$\s?|(,*)/g, '')">
        </InputNumber>
        {{value1}}
      </FormItem>
      <FormItem label="单位货币">
        <InputNumber
          :max="10000"
          v-model="value2"
          :formatter="value => `￥ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')"
          :parser="value => value.replace(/\$\s?|(,*)/g, '')">
        </InputNumber>
        {{value2}}
      </FormItem>
      <FormItem label="百分比">
        <InputNumber
          :max="100"
          v-model="value3"
          :precision="2"
          :formatter="value => `${value}%`"
          :parser="value => value.replace('%', '')">
        </InputNumber>
        {{value3}}
      </FormItem>
      <FormItem label="尺寸">
        <InputNumber v-model="value4" size="small"></InputNumber>
        <InputNumber v-model="value5"></InputNumber>
        <InputNumber v-model="value6" size="large"></InputNumber>
      </FormItem>
      <FormItem label="小数位">
        <InputNumber v-model="value7" size="small" :precision="precision"></InputNumber>
        位数：<InputNumber v-model.number="precision" size="small"></InputNumber>
      </FormItem>
    </Form>
  </div>
</template>
<script>
export default {
  data () {
    return {
      value2: 1000,
      value1: 1000,
      value3: 100,
      value4: 4,
      value5: 5,
      value6: 6,
      value7: 7,
      precision: 3
    }
  }
}
</script>
