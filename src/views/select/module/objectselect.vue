<template>
  <ga-panel :moduleName="moduleName">
    <ga-select 
      v-model="model3" 
      clearable 
      filterable 
      width="200"
      value-object
      @on-change="onChange">
      <ga-option 
        v-for="(item,index) in cityList" 
        :value="item.value"
        :value-object="item"
        :key="index">{{item.label}}</ga-option>
    </ga-select>
    {{obj}}
    <v-code language="html">
      {{Code.obj}}
    </v-code>
  </ga-panel>
</template>
<script>

import gaSelect from '@/package/components/select/select.vue';
import gaOption from '@/package/components/select/option.vue';
import Code from '@/public/code/select.js';

export default {
  components: {
    gaSelect,
    gaOption
  },

  data() {
    return {
      Code:Code,
      moduleName: 'value-object配置使用',
      cityList: [{
        value: 'beijing',
        label: '北京市',
        children: [
          {
            value: 'beijing',
            label: '北京市',
          }
        ]
      }, {
        value: 'shanghai',
        label: '上海市',
        children: [
          {
            value: 'beijing',
            label: '北京市',
          }
        ]
      }, {
        value: 'shenzhen',
        label: '深圳市',
        children: [
          {
            value: 'beijing',
            label: '北京市',
          }
        ]
      }, {
        value: 'hangzhou',
        label: '杭州市',
        children: [
          {
            value: 'beijing',
            label: '北京市',
          }
        ]
      }, {
        value: 'nanjing',
        label: '南京市',
        children: [
          {
            value: 'beijing',
            label: '北京市',
          }
        ]
      }, {
        value: 'chongqing',
        label: '重庆市',
        children: [
          {
            value: 'beijing',
            label: '北京市',
          }
        ]
      }],
      model3: 'beijing',
      obj: {}
    }
  },

  methods: {
    onChange(val) {
      this.obj = val
    }
  }
}

</script>
