<template>
  <ga-panel :moduleName="moduleName">
    <ga-cascader 
      :data="data" 
      v-model="value1" 
      change-on-select 
      clearable 
      width="300"
      last-value
      @on-change="onChange"/>
    {{value1}}
    <v-code language="html">
      {{Code.lastvalue}}
    </v-code>
  </ga-panel>
</template>
<script>
import gaCascader from '@/package/components/cascader/cascader.vue';

import Code from '@/public/code/cascader.js';

export default {
  components: {
    gaCascader,
  },

  data() {
    return {
      moduleName: 'last-value 自动关闭弹窗',
      value1: [],
      Code: Code,
      data: [{
        value: 'beijing',
        label: '北京',
        children: [{
          value: 'gugong',
          label: '故宫'
        }, {
          value: 'tiantan',
          label: '天坛'
        }, {
          value: 'wangfujing',
          label: '王府井'
        }]
      }, {
        value: 'jiangsu',
        label: '江苏',
        children: [{
          value: 'nanjing',
          label: '南京',
          children: [{
            value: 'fuzimiao',
            label: '夫子庙',
          }]
        }, {
          value: 'suzhou',
          label: '苏州',
          children: [{
            value: 'zhuozhengyuan',
            label: '拙政园',
          }, {
            value: 'shizilin',
            label: '狮子林',
          }]
        }],
      }]
    }
  },
  methods: {
    onChange(value, selectedData) {
      console.log(value, selectedData)
    },
  }
}

</script>
