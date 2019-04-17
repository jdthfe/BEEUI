<template>
  <ga-panel :moduleName="moduleName">
    <ga-cascader :data="data" v-model="value2" :render-format="formatFn"></ga-cascader>
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
      moduleName: '自定义显示形式',
      value2: ['beijing', 'gugong'],
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
    },
    formatFn(labels, selectedData) {
      return labels.join(',')
    }
  }
}

</script>
