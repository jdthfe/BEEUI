<template>
  <ga-panel moduleName="单选">
    <v-table border :columns="columns4" :data="data1" :highlightRowIndex="highlightRowIndex" highlight-row @on-current-change="currentChange" class="table-radio"></v-table>
    <!-- <v-button @on-click="onClick">点击</v-button> -->
    <v-code language="html" style="clear:both">
      {{Code.danxuan}}
    </v-code>
  </ga-panel>
</template>
<style>
  .table-radio .ga-table-cell{
    text-overflow: initial;
  }
</style>
<script>
import Vue from 'vue';
import vTable from '@/package/components/table/table.vue';
import vButton from '@/package/components/button/button.vue';
import Code from '@/public/code/table.js';

Vue.component('vButton', vButton)
export default {
  name: 'DanxuanTable',
  components: {
    vTable,
    vButton
  },

  data() {
    return {
      Code:Code,
      highlightRowIndex:'',
      columns4: [{
        type: 'radiotion',
        width: 70,
        align: 'center',
        title: '操作'
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
        address: '北京市朝阳区芍药居'
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
  mounted(){
    this.highlightRowIndex = '0'
  },
  methods:{
    onClick() {
      this.data1 = [{
        name: '王小明11',
        age: 18,
        address: '北京市朝阳区芍药居'
      }, {
        name: '张小刚11',
        age: 25,
        address: '北京市海淀区西二旗'
      }, {
        name: '李小红11',
        age: 30,
        address: '上海市浦东新区世纪大道'
      }, {
        name: '周小伟11',
        age: 26,
        address: '深圳市南山区深南大道'
      }]
    },
    currentChange(currentRow,oldCurrentRow){
      console.log(currentRow,oldCurrentRow)
    }
  }
}

</script>
