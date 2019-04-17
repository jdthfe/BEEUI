<template>
  <ga-panel moduleName="自定义render函数">
    <ga-table 
      border 
      :columns="columns4" 
      height="30"
      :data="data1" 
      :highlightRowIndex="highlightRowIndex" 
      highlight-row 
      @on-current-change="currentChange" />
    <v-code language="html" style="clear:both">
      {{Code.createRender}}
    </v-code>
  </ga-panel>
</template>
<style>
  .table-radio .ga-table-cell{
    text-overflow: initial;
  }
</style>
<script>
import gaTable from '@/package/components/table/table.vue';
import Code from '@/public/code/table.js';

export default {
  name: 'CreateRenderTable',
  components: {
    gaTable,
  },

  data() {
    return {
      Code:Code,
      highlightRowIndex:'',
      columns4: [{
        type: 'createRender',
        width: 70,
        align: 'center',
        title: '操作',
        render: (h, ctx) => {
          console.log(h, ctx)
          return h('a', {
              props: {

              },
              style: {
                color: '#0099FF',
              },
              domProps: {
                innerHTML: '预览',
              },
            })
        }
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
    currentChange(currentRow,oldCurrentRow){
      // console.log(currentRow,oldCurrentRow)
    }
  }
}

</script>
