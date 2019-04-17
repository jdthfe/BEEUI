<template>
  <ga-panel :moduleName="moduleName">
    <ga-cascader 
      :data="data" 
      v-model="value1" 
      change-on-select
      clearable
      trigger="click"
      last-value
      width="300"
      remote
      :remote-method="remoteMethod"
      @on-change="onChange"/>
    {{value1}}
    <v-code language="html">
      {{Code.remote}}
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
      moduleName: 'remote-method 远程获取',
      value1: [],
      Code: Code,
      data: [],
      flag: true
    }
  },
  created() {
    setTimeout(() => {
      this.data = [{
        value: 'beijing',
        label: '北京',
        children: [],
        level: 1
      }, {
        value: 'jiangsu',
        label: '江苏',
        children: [],
        level: 1        
      }]
    }, 2000)
  },
  methods: {
    onChange(value, selectedData) {
      // console.log(value, selectedData)
    },
    remoteMethod(val, cb) {
      val.loading = true;
      setTimeout(() => {
        if(this.flag) {
          val.children = [
            {
              value: 'gugong',
              label: '故宫',
              children: [],
              level: 2
            }, {
              value: 'tiantan',
              label: '天坛',
              children: [],
              level: 2
            }, {
              value: 'wangfujing',
              label: '王府井',
              children: [],
              level: 2
            }
          ]
          this.flag = false
        } else {
          val.children = [
            {
              value: 'gugon1',
              label: '故宫1',
              children: [],
              level: 3
            }, {
              value: 'tianta1',
              label: '天坛1',
              children: [],
              level: 3
            }, {
              value: 'wangfujin1',
              label: '王府井1',
              children: [],
              level: 3
            }
          ]
        }
        
        val.loading = false;
        cb()
      }, 1000)
    }
  }
}

</script>
