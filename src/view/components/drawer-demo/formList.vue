<template>
  <Form ref="dataForm" :label-width="120">
    <Row class="tx-rt mg-btm-10">
      <Button @click="submit" type="primary">提交</Button>
    </Row>
    <Row>
      <Col span="8">
        <FormItem label="样衣款号">
          <Input type="text" v-model="dataForm.sampleDressFileCode" v-if="disableList.includes('sampleDressFileCode')" />
          <span v-else>{{dataForm.sampleDressFileCode}}</span>
        </FormItem>
      </Col>
      <Col span="8">
        <FormItem label="样衣名称">
          <Input type="text" v-model="dataForm.sampleDressFileName" v-if="disableList.includes('sampleDressFileName')"/>
          <span v-else>{{dataForm.sampleDressFileName}}</span>
        </FormItem>
      </Col>
      <Col span="8">
        <FormItem label="品牌">
          <Select v-model="dataForm.brandName" v-if="disableList.includes('brandName')">
            <Option value="Chinstudio">Chinstudio</Option>
            <Option value="sunny33小超人">sunny33小超人</Option>
          </Select>
          <span v-else>{{dataForm.brandName}}</span>
        </FormItem>
      </Col>
    </Row>
    <Row >
      <Col span="8">
        <FormItem label="颜色">
          <Input type="text" v-model="dataForm.color" v-if="disableList.includes('color')"/>
          <span v-else>{{dataForm.color}}</span>
        </FormItem>
      </Col>
      <Col span="8">
        <FormItem label="来源">
          <Input type="text" v-model="dataForm.source" v-if="disableList.includes('source')"/>
          <span v-else>{{dataForm.source}}</span>
        </FormItem>
      </Col>
      <Col span="8">
        <FormItem label="制单时间">
          <DatePicker type="date" style="width: 100%"  v-model="dataForm.dateTimePicker" placeholder="请选择" v-if="disableList.includes('dateTimePicker')"></DatePicker>
          <span v-else>{{dataForm.dateTimePicker | parseTime}}</span>
        </FormItem>
      </Col>
    </Row>
    <Row style="margin-top: -15px;">
      <FormItem label="备注">
        <Input v-model="dataForm.remark" type="textarea" v-if="disableList.includes('remark')"/>
        <span v-else>{{dataForm.remark}}</span>
      </FormItem>
    </Row>
  </Form>
</template>

<script>
  import {parseTime} from '@/libs/index'
  export default {
    name: "formList",
    props: {
      isView: {
        type: Boolean,
        default: false
      }
    },
    filters: {
      parseTime (time) {
        return parseTime(time, '{y}-{m}-{d} {h}:{s}')
      }
    },
    data () {
      return {
        dataForm: {
          sampleDressFileCode: 'xxl',
          sampleDressFileName: '超大号土拨鼠',
          brandName: '纪梵希',
          createName: '小明',
          color: '黄色',
          source: '秘密来源',
          dateTimePicker: new Date(),
          remark: '测试备注测试备注测试备注'
        }
      }
    },
    computed: {
      disableList () {
        if (this.isView) {
          return []
        } else {
          return Object.keys(this.dataForm)
        }
      }
    },
    methods: {
      submit () {
        this.$emit('update:isView', true)
      }
    }
  }
</script>

<style scoped>
.tx-rt {
  text-align: right;
}
</style>
