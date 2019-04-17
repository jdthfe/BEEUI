<template>
  <ga-panel :moduleName="moduleName">
    <ga-select 
      v-model="model3" 
      filterable 
      multiple 
      width="200"
      append-to-body>
      <ga-option 
        v-for="(item,index) in cityList" 
        :value="item.value" 
        :key="index">{{item.label}}</ga-option>
    </ga-select>
    {{model3}}
    <v-code language="html">
      {{Code.duoxuan}}
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
      moduleName: '多选select',
      cityList: [{
          value: 'beijing',
          label: '北京市'
        },
        {
          value: 'shanghai',
          label: '上海市'
        },
        {
          value: 'shenzhen',
          label: '深圳市'
        },
        {
          value: 'hangzhou',
          label: '杭州市'
        },
        {
          value: 'nanjing',
          label: '南京市'
        },
        {
          value: 'chongqing',
          label: '重庆市'
        }
      ],
      model3: []
    }
  },
  methods: {

  }
}

</script>
