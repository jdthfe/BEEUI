<template>
  <ga-panel :moduleName="moduleName">
    <p>设置属性 disabled 可以禁用组件。 给某项数据设置 disabled: true 可以禁用某一项</p>
    <ga-cascader :data="data" disabled></ga-cascader>
    <ga-cascader :data="data"></ga-cascader>
    <v-code language="html">
      {{Code.base}}
    </v-code>
  </ga-panel>
</template>
<script>

import gaCascader from '@/package/components/cascader/cascader.vue';

import Code from '@/public/code/cascader.js';

export default {
  components: {
    gaCascader
  },

  data() {
    return {
      moduleName: '禁止项',
      value1: ['beijing', 'gugong'],
      Code:Code,
      data: [{
        value: 'beijing',
        label: '北京',
        children: [{
            value: 'gugong',
            label: '故宫'
          },
          {
            value: 'tiantan',
            label: '天坛'
          },
          {
            value: 'wangfujing',
            label: '王府井'
          }
        ]
      }, {
        value: 'jiangsu',
        label: '江苏',
        disabled: true,
        children: [{
            value: 'nanjing',
            label: '南京',
            children: [{
              value: 'fuzimiao',
              label: '夫子庙',
            }]
          },
          {
            value: 'suzhou',
            label: '苏州',
            children: [{
                value: 'zhuozhengyuan',
                label: '拙政园',
              },
              {
                value: 'shizilin',
                label: '狮子林',
              }
            ]
          }
        ],
      }]
    }
  },
  methods: {
    onChangeFn(val) {
      this.changeValue = val
    }
  }
}

</script>
