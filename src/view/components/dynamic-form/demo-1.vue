<template>
  <form-create :rule="rule" :option="option"/>
</template>

<script>
import { maker } from '@form-create/iview'
let unqiue = (() => {
  let unqiue = 1
  return () => `unqiue_${unqiue++}`
})()
export default {
  name: 'demo-1',
  data () {
    return {
      option: {
        form: {
          labelWidth: 80
        },
        // 表单提交事件
        onSubmit: (formData) => {
          this.submit(formData)
        }
      },
      rule: [
        {
          type: 'input',
          field: unqiue(),
          title: 'span8',
          validate: [
            { required: true, type: 'string', message: '必填' },
            { type: 'string', min: 3, message: '最少3个字' }
          ],
          col: {
            span: 8
          }
        },
        {
          type: 'radio',
          field: unqiue(),
          title: 'span8',
          options: [
            { value: '0', label: '是' },
            { value: '1', label: '否' }
          ],
          props: {
            size: 'small'
          },
          validate: [
            { required: true, type: 'string', message: '必填' }
          ],
          col: {
            span: 8
          }
        },
        {
          type: 'select',
          field: unqiue(),
          title: '下拉框',
          options: [
            { 'value': '104', 'label': '生态蔬菜', 'disabled': false },
            { 'value': '105', 'label': '新鲜水果', 'disabled': false }
          ],
          props: {
            'multiple': true,
            'placeholder': '请选择',
            'not-found-text': '无匹配数据',
            'placement': 'bottom'
          },
          validate: [
            { required: true, message: '必填' }
          ],
          col: {
            span: 8
          }
        },
        {
          type: 'input',
          field: unqiue(),
          title: 'span8',
          col: {
            span: 8
          }
        },
        {
          type: 'upload',
          field: 'pic',
          title: '附件上传',
          value: [],
          props: {
            'type': 'select',
            'uploadType': 'image',
            'action': '//jsonplaceholder.typicode.com/posts/',
            'name': 'pic',
            'multiple': true,
            'accept': 'image\/*',
            'format': ['jpg', 'jpeg', 'png', 'gif'],
            'maxSize': 2048,
            'maxLength': 5,
            'onSuccess': function (res) {
              this.$Message.info('上传成功...')
            }
          },
          col: {
            span: 8
          }
        },
        {
          type: 'input',
          field: unqiue(),
          title: 'span24',
          col: {
            span: 24
          }
        }
      ]
    }
  },
  methods: {
    submit (formData) {
      alert(JSON.stringify(formData))
      console.log(formData)
    }
  }
}
</script>

<style scoped>

</style>
