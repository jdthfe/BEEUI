<template>
  <ga-panel moduleName="后端排序">
    <v-table width="550" highlight-row height="200" border :initsort="defaultsort" :columns="columns2" :data="data4" @on-sort-change="sortChange"></v-table>
    <v-code language="html" style="clear:both">
      {{Code.server}}
    </v-code>
  </ga-panel>
</template>
<script>
import vTable from '@/package/components/table/table.vue';
import Code from '@/public/code/table.js';

export default {
  name:'servertable',
  components: {
    vTable,
  },
  data() {
    return {
      Code:Code,
      defaultsort: {
        column: '',
        sort: ''
      },
      columns2: [{
        title: '姓名',
        key: 'name',
        width: 100,
        align: 'left',
        ellipsis: true,
        fixed: 'left',
        tip: '',
      }, {
        title: '年龄',
        key: 'age',
        width: 100,
        tip: '啊哒哒哒哒啊哒哒哒哒啊哒哒哒哒啊哒哒哒哒啊哒哒哒哒啊哒哒哒哒啊哒哒哒哒',
        sortable: 'custom'
      }, {
        title: '省份',
        key: 'province',
        tip: '啊哒哒哒哒',
        width: 100
      }, {
        title: '市区',
        tip: '啊哒哒哒哒',
        key: 'city',
        width: 100
      }, {
        title: '地址',
        key: 'address',
        tip: '啊哒哒哒哒',
        width: 200
      }, {
        title: '邮编',
        key: 'zip',
        tip: '啊哒哒哒哒',
        width: 100
      }],
      data4: [{
        name: '王小王小明王小明明',
        age: 18,
        address: '北京市朝阳区芍药居',
        province: '北京市',
        city: '朝阳区',
        zip: 100000
      }, {
        name: '张小刚',
        age: 25,
        address: '北京市海淀区西二旗',
        province: '北京市',
        city: '海淀区',
        zip: 100000
      }, {
        name: '李小红',
        age: 30,
        address: '上海市浦东新区世纪大道',
        province: '上海市',
        city: '浦东新区',
        zip: 100000
      }, {
        name: '周小伟',
        age: 26,
        address: '深圳市南山区深南大道',
        province: '广东',
        city: '南山区',
        zip: 100000
      }, {
        name: '王小明',
        age: 18,
        address: '北京市朝阳区芍药居',
        province: '北京市',
        city: '朝阳区',
        zip: 100000
      }, {
        name: '张小刚',
        age: 25,
        address: '北京市海淀区西二旗',
        province: '北京市',
        city: '海淀区',
        zip: 100000
      }, {
        name: '李小红',
        age: 30,
        address: '上海市浦东新区世纪大道',
        province: '上海市',
        city: '浦东新区',
        zip: 100000
      }, {
        name: '周小伟',
        age: 26,
        address: '深圳市南山区深南大道',
        province: '广东',
        city: '南山区',
        zip: 100000
      }, {
        name: '周小伟',
        age: 26,
        address: '深圳市南山区深南大道',
        province: '广东',
        city: '南山区',
        zip: 100000
      }, {
        name: '周小伟',
        age: 26,
        address: '深圳市南山区深南大道',
        province: '广东',
        city: '南山区',
        zip: 100000
      }, {
        name: '周小伟',
        age: 26,
        address: '深圳市南山区深南大道',
        province: '广东',
        city: '南山区',
        zip: 100000
      }, {
        name: '周小伟',
        age: 26,
        address: '深圳市南山区深南大道',
        province: '广东',
        city: '南山区',
        zip: 100000
      }, {
        name: '周小伟',
        age: 26,
        address: '深圳市南山区深南大道',
        province: '广东',
        city: '南山区',
        zip: 100000
      }, {
        name: '周小伟',
        age: 26,
        address: '深圳市南山区深南大道',
        province: '广东',
        city: '南山区',
        zip: 100000
      }, {
        name: '周小伟',
        age: 26,
        address: '深圳市南山区深南大道',
        province: '广东',
        city: '南山区',
        zip: 100000
      }, {
        name: '周小伟',
        age: 26,
        address: '深圳市南山区深南大道',
        province: '广东',
        city: '南山区',
        zip: 100000
      }, {
        name: '周小伟',
        age: 26,
        address: '深圳市南山区深南大道',
        province: '广东',
        city: '南山区',
        zip: 100000
      }, {
        name: '周小伟',
        age: 26,
        address: '深圳市南山区深南大道',
        province: '广东',
        city: '南山区',
        zip: 100000
      }, {
        name: '周小伟',
        age: 26,
        address: '深圳市南山区深南大道',
        province: '广东',
        city: '南山区',
        zip: 100000
      }, {
        name: '周小伟',
        age: 26,
        address: '深圳市南山区深南大道',
        province: '广东',
        city: '南山区',
        zip: 100000
      }, {
        name: '周小伟',
        age: 26,
        address: '深圳市南山区深南大道',
        province: '广东',
        city: '南山区',
        zip: 100000
      }, {
        name: '周小伟',
        age: 26,
        address: '深圳市南山区深南大道',
        province: '广东',
        city: '南山区',
        zip: 100000
      }]
    }
  },
  mounted() {
    this.defaultsort = {
      column: 1,
      sort: 'desc'
    }
  },
  methods:{
    sortChange(column,key,order){
      console.log(column,key,order)
    }
  }
}
</script>
