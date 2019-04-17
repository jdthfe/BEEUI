<template>
  <ga-panel moduleName="搜索表格">
    <div style="float: right;margin-bottom: 13px;">
      <span>搜索：</span>
      <v-input v-model="value" placeholder="请输入..." @on-change="onChange" style="width: 200px"></v-input>
    </div>
    <v-table highlight-row border :theader="theader" :columns="columns1" :data="data1" size="small" ref="table" height="200">
    </v-table>
    <div style="margin: 10px;overflow: hidden">
      <div style="float: right;">
        <v-page :total="total" :current="currentPage" :page-size="pageSize" @on-change="changePage" @on-page-size-change="pageSizeChange" show-sizer></v-page>
      </div>
    </div>
    <v-code language="html" style="clear:both">
      {{Code.search}}
    </v-code>
  </ga-panel>
</template>
<script>

import Vue from 'vue';
import vTable from '@/package/components/table/table.vue';
import vIcon from '@/package/components/icon/icon.vue';
import vPage from '@/package/components/page/page.vue';
import vInput from '@/package/components/input/input.vue';
import {
  trim
} from '@/public/utils/utils.js';
import Code from '@/public/code/table.js';

Vue.component('vIcon', vIcon)
export default {
  name: 'searchtable',
  components: {
    vTable,
    vPage,
    vInput
  },

  data() {
    return {
      Code:Code,
      pageSize: 10,
      currentPage: 1,
      theader: [],
      total: null,
      columns1: [

      ],
      data1: [

      ],
      saveData: [],
      filterData: [],
      value: '',
    }
  },
  props: {

  },
  created() {
    this.columns1 = [{
      title: '姓名',
      key: 'name',
      sortable: true

    }, {
      title: '年龄',
      key: 'age'
    }, {
      title: '地址',
      key: 'address'
    }, {
      title: '时间',
      key: 'time',
      sortable: true
    }]
    this.data1 = [{
      name: '王小明',
      age: 18,
      time: '2017-02-12',
      address: '北京市朝阳区芍药居'
    }, {
      name: '张小刚',
      age: 25,
      time: '2017-03-12',
      address: '北京市海淀区西二旗'
    }, {
      name: '李小红',
      age: 30,
      time: '2017-04-12',
      address: '上海市浦东新区世纪大道'
    }, {
      name: '周小伟',
      age: 26,
      time: '2017-05-12',
      address: '深圳市南山区深南大道'
    }]
    this.total = this.data1.length;

  },
  mounted() {

    this.saveData = Object.assign({}, {
      columns: this.columns1,
      data: this.data1
    })

    this.data1 = this.saveData.data.slice((this.currentPage - 1) * this.pageSize, this.pageSize * this.currentPage)
  },

  watch: {

  },
  methods: {
    changePage(page) {
      this.currentPage = page;

      if (trim(_vm.value)) {
        _vm.data1 = _vm.filterData.slice((page - 1) * _vm.pageSize, _vm.pageSize * page)
      } else {
        _vm.data1 = _vm.saveData.data.slice((page - 1) * _vm.pageSize, _vm.pageSize * page)
      }
      this.data1 = this.saveData.slice((page - 1) * this.pageSize, this.pageSize * page)
    },
    pageSizeChange(pageSize) {
      let _vm = this;
      _vm.pageSize = pageSize;
      _vm.data1 = _vm.saveData.data.slice((_vm.currentPage - 1) * pageSize, pageSize * _vm.currentPage)
    },
    onChange(e) {
      let _vm = this;
      let newData = []
      for (let v of _vm.saveData.data) {
        if (String(v.age).includes(e.target.value)) {
          newData.push(v)
        }
      }
      _vm.filterData = Object.assign([], newData);
      _vm.data1 = newData.slice((_vm.currentPage - 1) * _vm.pageSize, _vm.pageSize * _vm.currentPage);
      _vm.total = newData.length;
      _vm.currentPage = 1;
      _vm.pageSize = 10;

    }
  }
}

</script>
