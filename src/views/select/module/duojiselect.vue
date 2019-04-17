<template>
  <ga-panel :moduleName="moduleName">
    <ga-select 
      v-model="model1" 
      clearable
      filterable 
      width="200"
      label-in-value
      @on-change="getCascader">
      <ga-option 
        v-for="(item,index) in cityList" 
        :value="item.value" 
        :key="index">{{item.label}}</ga-option>
    </ga-select>
    <ga-select 
      v-model="model2"
      clearable 
      filterable 
      :disabled="!model1" 
      width="200"
      label-in-value
      @on-change="getCascader2">
      <ga-option 
        v-for="(item,index) in cityList2" 
        :value="item.value" 
        :key="item.value">{{item.label}}</ga-option>
    </ga-select>
    <ga-select 
      v-model="model3"
      clearable 
      filterable
      label-in-value
      :disabled="!model2" 
      width="200">
      <ga-option 
        v-for="(item,index) in cityList3" 
        :value="item.value" 
        :key="item.value">{{item.label}}</ga-option>
    </ga-select>
    <v-code language="html">
      {{Code.duoji}}
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
      moduleName: '多级联动',
      cityList: [],
      cityList2: [],
      cityList3: [],
      model1: '',
      model2: '',
      model3: '',
    }
  },
  mounted() {
      this.cityList = [{
        value: 'beijing',
        label: '北京市'
      }, {
        value: 'shanghai',
        label: '上海市'
      }, {
        value: 'shenzhen',
        label: '深圳市'
      }, {
        value: 'hangzhou',
        label: '杭州市'
      }, {
        value: 'nanjing',
        label: '南京市'
      }, {
        value: 'chongqing',
        label: '重庆市'
      }]
  },
  methods: {
    getCascader(val) {
      this.model2 = ''
      if(this.cityList2.length) {
        this.cityList2 = [{
          value: 'nanjing',
          label: '南京市'
        }, {
          value: 'chongqing',
          label: '重庆市'
        }]
      } else {
        this.cityList2 = [{
          value: 'shanghai',
          label: '上海市'
        }, {
          value: 'shenzhen',
          label: '深圳市'
        }, {
          value: 'hangzhou',
          label: '杭州市'
        }]
      }
      
    },
    getCascader2(val) {
      this.model3 = ''
      if(this.cityList3.length) {
        this.cityList3 = [{
          value: 'nanjing',
          label: '南京市'
        }, {
          value: 'chongqing',
          label: '重庆市'
        }]
      } else {
        this.cityList3 = [{
          value: 'shanghai',
          label: '上海市'
        }, {
          value: 'shenzhen',
          label: '深圳市'
        }, {
          value: 'hangzhou',
          label: '杭州市'
        }]
      }
    }
  }
}

</script>
