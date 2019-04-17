<template>
  <ga-panel moduleName="固定左右列和顶部">
    <v-table width="550" highlight-row height="200" border :initsort="serviceSort" @on-sort-change="onSortChange" :columns="columns2" :data="data4"></v-table>
    <v-model v-model="modal1" title="普通的Modal对话框标题" scrollable>
      <div class="modal-body">
        这是内容
      </div>
    </v-model>
    <v-code language="html" style="clear:both">
      {{Code.fix}}
    </v-code>
  </ga-panel>
</template>
<style>
.ga-icon-help-circled {
  color: #ccc;
}
</style>
<script>
import Vue from 'vue';
import vTable from '@/package/components/table/table.vue';
import vButton from '@/package/components/button/button.vue';
import vModel from '@/package/components/modal/Modal.vue';
import Code from '@/public/code/table.js';

Vue.component('vButton', vButton)

let ctx = null
export default {
  name: 'fixedTable',
  components: {
    vTable,
    vModel,
  },

  data() {
    return {
      Code: Code,
      modal1: false,
      serviceSort: {
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
        render: (row, column, index) => {
          return `${row[column['key']]}`
        },
      }, {
        title: '年龄',
        key: 'age',
        width: 100,
        tip: '啊哒哒哒哒啊哒哒哒哒啊哒哒哒哒啊哒哒哒哒啊哒哒哒哒啊哒哒哒哒啊哒哒哒哒',
        sortable: 'server'
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
      }, {
        title: '操作',
        key: 'action',
        fixed: 'right',
        tip: '啊哒哒哒哒',
        width: 120,
        render: (row, column, index, context) => {
          ctx = context;
          return `<v-button type="text" @on-click="btnFn()" size="small">查看</v-button><v-button @on-click="btnFn" type="text" size="small">编辑</v-button>`
        },
        function: {
          btnFn:()=> {
            ctx.$parent.modal1 = !ctx.$parent.modal1
          }
        }
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

  props: {

  },
  mounted() {
    this.serviceSort = {
      column: 1,
      sort: 'desc'
    }
    //    this.$refs.cstable.$on('btnFn', (flag) => {
    //      this.modal1 = flag;
    //    });
  },

  watch: {

  },
  methods: {
    onSortChange(opts) {
      // console.log(opts)
      this.data4 = [{
        name: '王小王小明王小明明111111',
        age: 18,
        address: '北京市朝阳区芍药居',
        province: '北京市',
        city: '朝阳区',
        zip: 100000
      }, {
        name: '张小刚1111111',
        age: 25,
        address: '北京市海淀区西二旗',
        province: '北京市',
        city: '海淀区',
        zip: 100000
      }, {
        name: '李小红11111111',
        age: 30,
        address: '上海市浦东新区世纪大道',
        province: '上海市',
        city: '浦东新区',
        zip: 100000
      }, {
        name: '周小伟111111',
        age: 26,
        address: '深圳市南山区深南大道',
        province: '广东',
        city: '南山区',
        zip: 100000
      }, {
        name: '王小明111111',
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
  }
}

</script>
