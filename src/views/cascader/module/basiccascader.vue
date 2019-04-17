<template>
  <ga-panel :moduleName="moduleName">
    <ga-cascader 
      :data="data" 
      v-model="value1"
      change-on-select 
      clearable 
      width="300"
      @on-change="onChange"/>
    {{value1}}
    <ga-button type="primary" @on-click="clear">清空</ga-button>
    <v-code language="html">
      {{Code.base}}
    </v-code>
  </ga-panel>
</template>
<script>
import gaCascader from '@/package/components/cascader/cascader.vue';
import gaButton from '@/package/components/button/button.vue';

import Code from '@/public/code/cascader.js';

export default {
  components: {
    gaCascader,
    gaButton
  },

  data() {
    return {
      moduleName: '基本形式',
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
    clear() {
      this.value1 = [];
    }
  }
}

</script>
