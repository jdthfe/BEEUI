<template>
  <ga-panel :moduleName="moduleName">
    <ga-select 
      v-model="model1" 
      filterable 
      width="200">
      <ga-option v-for="item in cityList" :value="item.value" :key="item.value">{{item.label}}</ga-option>
    </ga-select>
    {{model1}}
    <ga-select 
      v-model="model2" 
      filterable 
      multiple 
      width="200">
      <ga-option v-for="item in cityList" :value="item.value" :key="item.value">{{item.label}}</ga-option>
    </ga-select>
    {{model2}}
    <v-code language="html">
      {{Code.filterable}}
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
      Code: Code,
      moduleName: '本地搜索',
      cityList: [{
        value: 'beijing',
        label: '北京市',
        type: 'pop',
      }, {
        value: 'shanghai',
        type: 'pop',
        label: '上海市'
      }, {
        value: 'shenzhen',
        type: 'pop',
        label: '深圳市'
      }, {
        value: 'hangzhou',
        type: 'pop',
        label: '杭州市'
      }, {
        value: 'nanjing',
        type: 'pop',
        label: '南京市'
      }, {
        value: 'chongqing',
        type: 'pop',
        label: '重庆市'
      }],
      model1: 'beijing',
      model2:['beijing','shanghai']
    }
  },
}

</script>
