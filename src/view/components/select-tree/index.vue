<template>
  <div>
    <p>简单示例：</p>
    <tree-select v-model="value1" :multiple="true" :options="options1"  style="width: 300px"/>
    <p>复杂示例:</p>
    <div>
      <div :dir="rtl ? 'rtl' : 'ltr'">
        <tree-select
          name="demo"
          :multiple="multiple"
          :clearable="clearable"
          :searchable="searchable"
          :disabled="disabled"
          :open-on-click="openOnClick"
          :open-on-focus="openOnFocus"
          :clear-on-select="clearOnSelect"
          :close-on-select="closeOnSelect"
          :always-open="alwaysOpen"
          :append-to-body="appendToBody"
          :options="options"
          :limit="3"
          :max-height="200"
          v-model="value"
        />
      </div>
<!--      <treeselect-value :value="value" />-->
      <p>
        <label><input type="checkbox" v-model="multiple">Multi-select</label>
        <label><input type="checkbox" v-model="clearable">Clearable</label>
        <label><input type="checkbox" v-model="searchable">Searchable</label>
        <label><input type="checkbox" v-model="disabled">Disabled</label>
      </p>
      <p>
        <label><input type="checkbox" v-model="openOnClick">Open on click</label>
        <label><input type="checkbox" v-model="openOnFocus">Open on focus</label>
      </p>
      <p>
        <label><input type="checkbox" v-model="clearOnSelect">Clear on select</label>
        <label><input type="checkbox" v-model="closeOnSelect">Close on select</label>
      </p>
      <p>
        <label><input type="checkbox" v-model="alwaysOpen">Always open</label>
        <label><input type="checkbox" v-model="appendToBody">Append to body</label>
        <label><input type="checkbox" v-model="rtl">RTL mode</label>
      </p>
    </div>
    <p>点击加载更多实例:</p>
    <select-more></select-more>
  </div>
</template>

<script>

import SelectMore from './select-more'
import TreeSelect from '@riophae/vue-treeselect'
import '@riophae/vue-treeselect/dist/vue-treeselect.css'
export default {
  name: 'index',
  components: {
    TreeSelect,
    SelectMore
  },
  data () {
    return {
      // define the default value
      value1: null,
      // define options
      options1: [ {
        id: 'a',
        label: 'a',
        children: [ {
          id: 'aa',
          label: 'aa'
        }, {
          id: 'ab',
          label: 'ab'
        } ]
      }, {
        id: 'b',
        label: 'b'
      }, {
        id: 'c',
        label: 'c'
      } ],
      multiple: true,
      clearable: true,
      searchable: true,
      disabled: false,
      openOnClick: true,
      openOnFocus: false,
      clearOnSelect: true,
      closeOnSelect: false,
      alwaysOpen: false,
      appendToBody: false,
      rtl: false,
      value: [ 'a' ],
      options: [ {
        id: 'a',
        label: 'a',
        children: [ {
          id: 'aa',
          label: 'aa'
        }, {
          id: 'ab',
          label: 'ab'
        } ]
      }, {
        id: 'b',
        label: 'b'
      }, {
        id: 'c',
        label: 'c'
      } ]
    }
  },
  watch: {
    multiple (newValue) {
      if (newValue) {
        this.value = this.value ? [ this.value ] : []
      } else {
        this.value = this.value[0]
      }
    }
  }
}
</script>

<style scoped>

</style>
