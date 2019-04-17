<template>
  <ga-panel moduleName="多选">
    <ga-table 
      border 
      :columns="columns4" 
      :data="data1" 
      @on-select="selectFn" 
      @on-select-all="selectAll" 
      @on-selection-change="selectChange"/>
    <v-code language="html" style="clear:both">
      {{Code.duoxuan}}
    </v-code>
  </ga-panel>
</template>
<script>
import Vue from 'vue';
import gaTable from '@/package/components/table/table.vue';
import gaButton from '@/package/components/button/button.vue';
import Code from '@/public/code/table.js';

Vue.component('vButton', gaButton)
export default {
  name: 'duoxuanTable',
  components: {
    gaTable,
  },

  data() {
    return {
      Code:Code,
      columns4: [{
        type: 'selection',
        width: 100,
        align: 'center',
        title: '操作',
      }, {
        title: '姓名',
        key: 'name'
      }, {
        title: '年龄',
        key: 'age'
      }, {
        title: '地址',
        key: 'address',
      }],
      data1: [{
        name: '王小明',
        age: 18,
        address: '北京市朝阳区芍药居',
        _disabled: true
      }, {
        name: '张小刚',
        age: 25,
        address: '北京市海淀区西二旗'
      }, {
        name: '李小红',
        age: 30,
        address: '上海市浦东新区世纪大道'
      }, {
        name: '周小伟',
        age: 26,
        address: '深圳市南山区深南大道'
      }],
    }
  },

  methods:{
    selectFn(selection,row){
      console.log(111111,selection,row)
    },
    selectAll(selection){
      console.log(22222,selection)

    },
    selectChange(selection){
      console.log(33333,selection)

    }
  }
}

</script>
