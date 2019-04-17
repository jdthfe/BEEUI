<template>
  <ga-panel :moduleName="moduleName">
    <ga-select 
      v-model="model3" 
      clearable 
      width="300" 
      label-in-value
      :prefix-icon="prefixIcon"
      @on-change="onChange"
      @on-focus="onClick">
      <ga-option 
        v-for="(item,index) in cityList" 
        :value="item.value" 
        :key="index">{{item.label}}</ga-option>
    </ga-select>
    {{model3}}
    <ga-select 
      v-model="model3" 
      disabled 
      width="200">
      <ga-option 
        v-for="(item,index) in cityList" 
        :value="item.value" 
        :key="index">{{item.label}}</ga-option>
    </ga-select>
    <v-code language="html">
      {{Code.base}}
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
  created() {
    setTimeout(() => {
      this.cityList = [{
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
      }]
      this.$nextTick(() => {
        this.model3 = 'beijing'
      })
    }, 3000)
  },
  data() {
    return {
      Code:Code,
      moduleName: '基本使用',
      cityList: [],
      model3: '',
      prefixIcon: 'ios-location'
    }
  },
  methods: {
    onChange(value) {
      console.log(value)
    },
    onClick() {
      this.cityList = [{
        value: 'nanjing',
        type: 'pop',
        label: '南京市'
      }, {
        value: 'chongqing',
        type: 'pop',
        label: '重庆市'
      }]
    }
  }
}

</script>
