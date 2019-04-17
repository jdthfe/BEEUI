let code = {};

code.base = `
<template>
    <ga-table highlight-row border :theader="theader" :columns="columns1" :data="data1" size="small" ref="table" @filterDataLength="getPageSize" height="200"  :highlightRowIndex="highlightRowIndex">
    </ga-table>
    <div style="margin: 10px">
      <div style="float: right;">
        <ga-page :total="total" :current="currentPage" :page-size="pageSize" @on-change="changePage" @on-page-size-change="pageSizeChange" show-sizer></ga-page>
      </div>
    </div>
  </template>
  <style>
.ga-icon-android-arrow-up {
  color: red;
}

.ga-icon-android-arrow-down {
  color: green;
}

</style>
  <script>
  export default {
    data() {
        return {
          theader: [{
            "title": "下属部门",
            "key": "erpId",
            "rowspan": 2,
            "colspan": 1,
            "hidden": false,
            "fixed": "left",
            "width": 150,
          }, {
            "title": "模式",
            "key": "moshi",
            "rowspan": 2,
            "colspan": 1,
            "hidden": false,
            "width": 150,
            "fixed": "left",
          }, {
            "title": "GMV",
            "key": "leibie",
            "rowspan": 1,
            "hidden": false,
            "colspan": 4,
            "width": 150,
            "fixed": ""
          }, {
            "title": "综合毛利率",
            "key": "leibie",
            "rowspan": 1,
            "hidden": false,
            "width": 150,
            "colspan": 4,
          }, {
            "title": "广告费",
            "key": "leibie",
            "rowspan": 1,
            "hidden": false,
            "width": 150,
            "colspan": 4,
          }, {
            "title": "净收入",
            "key": "leibie",
            "hidden": false,
            "rowspan": 1,
            "width": 150,
            "colspan": 4,
          }],
          columns1: [{
            "title": "下属部门",
            "key": "erpId",
            "width": 150,
            "hidden": true,
            "fixed": "left",
          }, {
            "title": "模式",
            "key": "moshi",
            "hidden": true,
            "width": 150,
            "fixed": "left"
          }, {
            "title": "本月目标值",
            "key": "GMVmubiao",
            "hidden": false,
            "width": 150,
            "rules": 'qianfenwei',
            "render": function(row, column, index) {
              let klass = row[column['key']]['status'] === 'up' ? 'ga-icon ga-icon-android-arrow-up' : 'ga-icon ga-icon-android-arrow-down'
              return '<ga-icon type="person"></ga-icon><strong>row[column['key']]['value']</strong><i class="klass" aria-hidden="true"></i>'
            }
          }, {
            "title": "实际完成值",
            "hidden": false,
            "key": "GMVwancheng",
            "width": 150,
            "rules": 'baifenshu',
            "render": function(row, column, index) {
              return row[column['key']]
            }
          }, {
            "hidden": false,
            "title": "完成进度",
            "key": "GMVjindu",
            "width": 150,
          }, {
            "title": "差值",
            "hidden": false,
            "key": "GMVchazhi",
            "width": 150,
          }, {
            "title": "本月目标值",
            "hidden": false,
            "key": "jsrmubiao",
            "width": 150,
            "rules": 'qianfenwei',
            "render": function(row, column, index) {
              return row[column['key']]
            }
          }, {
            "title": "实际完成值",
            "hidden": false,
            "key": "jsrwancheng",
            "width": 150,
          }, {
            "title": "完成进度",
            "hidden": false,
            "key": "jsrjindu",
            "width": 150,
          }, {
            "title": "差值",
            "hidden": false,
            "key": "jsrchazhi",
            "width": 150,
          }, {
            "hidden": false,
            "title": "本月目标值",
            "key": "zhmlmubiao",
            "width": 150,
          }, {
            "title": "实际完成值",
            "hidden": false,
            "key": "zhmlwancheng",
            "width": 150,
          }, {
            "title": "完成进度",
            "hidden": false,
            "key": "zhmljindu",
            "width": 150,
          }, {
            "title": "差值",
            "hidden": false,
            "key": "zhmlchazhi",
            "width": 150,
          }, {
            "hidden": false,
            "title": "本月目标值",
            "key": "ggfmubiao",
            "width": 150,
          }, {
            "title": "实际完成值",
            "key": "ggfwancheng",
            "hidden": false,
            "width": 150,
          }, {
            "title": "完成进度",
            "key": "ggfjindu",
            "hidden": false,
            "width": 150,
          }, {
            "title": "差值",
            "hidden": false,
            "key": "ggfchazhi",
            "width": 150,
          }],
          data1: [{
            "erpId": '运动部',
            "GMVmubiao": {
              "value": '123123123',
              "status": 'up'
            },
            "GMVwancheng": "0.234",
            "GMVjindu": "30%",
            "GMVchazhi": 0,
            "jsrmubiao": "111111",
            "jsrwancheng": "50%",
            "jsrjindu": "60%",
            "jsrchazhi": "70%",
            "zhmlwancheng": "80%",
            "zhmlmubiao": "100%",
            "zhmljindu": "100%",
            "zhmlchazhi": "100%",
            "ggfjindu": "100%",
            "ggfwancheng": "100%",
            "ggfmubiao": "100%",
            "ggfchazhi": "100%",
            "moshi": "整体",
            "beizhu": '备注信息'
          }, {
            "erpId": '运动部',
            "GMVmubiao": {
              "value": '53345345345',
              "status": 'down'
            },
            "GMVwancheng": "1.234",
            "GMVjindu": "200%",
            "GMVchazhi": "200%",
            "jsrmubiao": "22222222",
            "jsrwancheng": "200%",
            "jsrjindu": "200%",
            "jsrchazhi": "200%",
            "zhmlwancheng": "200%",
            "zhmlmubiao": "200%",
            "zhmljindu": "200%",
            "zhmlchazhi": "200%",
            "ggfjindu": "200%",
            "ggfwancheng": "200%",
            "ggfmubiao": "200%",
            "ggfchazhi": "200%",
            "beizhu": '备注信息',
            "moshi": "POP"
          }, {
            "erpId": '运动部',
            "GMVmubiao": {
              "value": '898798798',
              "status": 'up'
            },
            "GMVwancheng": "2.345",
            "GMVjindu": "@integer(20, 99)%",
            "GMVchazhi": "@integer(20, 99)%",
            "jsrmubiao": "333333333",
            "jsrwancheng": "@integer(20, 99)%",
            "jsrjindu": "@integer(20, 99)%",
            "jsrchazhi": "@integer(20, 99)%",
            "zhmlwancheng": "@integer(20, 99)%",
            "zhmlmubiao": "@integer(20, 99)%",
            "zhmljindu": "@integer(20, 99)%",
            "zhmlchazhi": "@integer(20, 99)%",
            "ggfjindu": "@integer(20, 99)%",
            "ggfwancheng": "@integer(20, 99)%",
            "ggfmubiao": "@integer(20, 99)%",
            "ggfchazhi": "@integer(20, 99)%",
            "beizhu": '备注信息',
            "moshi": "自营"
          }],
          total: this.data1.length，
          highlightRowIndex:'1'
        }
      },
      mounted() {

        this.newData = Object.assign([], this.data1)

        this.data1 = this.newData.slice((this.currentPage - 1) * this.pageSize, this.pageSize * this.currentPage)
      },

      methods: {
        changePage(page) {
          this.currentPage = page;
          this.data1 = this.newData.slice((page - 1) * this.pageSize, this.pageSize * page)
        },
        pageSizeChange(pageSize) {
          this.pageSize = pageSize;
          this.data1 = this.newData.slice((this.currentPage - 1) * pageSize, pageSize * this.currentPage)
        }
      }
  }
  </script>
`;

code.cpx = `
<template>
    <ga-table highlight-row border :theader="theader" :columns="columns1" :data="data1" size="small" ref="table">
    </ga-table>
  </template>
  <style>
.ga-icon-android-arrow-up {
  color: red;
}

.ga-icon-android-arrow-down {
  color: green;
}

</style>
  <script>
  export default {
    data() {
        return {
          theader: [{
            "title": "下属部门",
            "key": "erpId",
            "rowspan": 2,
            "colspan": 1,
            "fixed": "left",
            "hidden": false,
            "width": 150,
          }, {
            "title": "模式",
            "key": "moshi",
            "rowspan": 2,
            "colspan": 1,
            "width": 150,
            "hidden": false,
            "fixed": "left",
          }, {
            "title": "GMV",
            "key": "leibie",
            "rowspan": 1,
            "colspan": 4,
            "width": 150,
            "hidden": false,
            "fixed": ""
          }, {
            "title": "综合毛利率",
            "key": "leibie",
            "rowspan": 1,
            "hidden": false,
            "width": 150,
            "colspan": 4,
          }, {
            "title": "广告费",
            "key": "leibie",
            "rowspan": 1,
            "width": 150,
            "hidden": false,
            "colspan": 4,
          }, {
            "title": "净收入",
            "key": "leibie",
            "rowspan": 1,
            "width": 150,
            "hidden": false,
            "colspan": 4,
          }],
          columns1: [{
            "title": "下属部门",
            "key": "erpId",
            "width": 150,
            "hidden": true,
            "fixed": "left",
            "cellrowspan": 3,
            "cellcolspan": 1
          }, {
            "title": "模式",
            "key": "moshi",
            "hidden": true,
            "width": 150,
            "fixed": "left",
          }, {
            "title": "本月目标值",
            "hidden": false,
            "key": "GMVmubiao",
            "width": 150,
            "rules": 'qianfenwei',
            "render": function(row, column, index) {
              let klass = row[column['key']]['status'] === 'up' ? 'ga-icon ga-icon-android-arrow-up' : 'ga-icon ga-icon-android-arrow-down'
              return '<ga-icon type="person"></ga-icon><strong>row[column['key']]['value']</strong><i class="klass" aria-hidden="true"></i>'
            }
          }, {
            "title": "实际完成值",
            "hidden": false,
            "key": "GMVwancheng",
            "width": 150,
            "rules": 'baifenshu',
            "render": function(row, column, index) {
              return row[column['key']
            }
          }, {
            "title": "完成进度",
            "hidden": false,
            "key": "GMVjindu",
            "width": 150,
          }, {
            "title": "差值",
            "hidden": false,
            "key": "GMVchazhi",
            "width": 150,
          }, {
            "title": "本月目标值",
            "hidden": false,
            "key": "jsrmubiao",
            "width": 150,
            "rules": 'qianfenwei',
            "render": function(row, column, index) {
              return row[column['key']
            }
          }, {
            "title": "实际完成值",
            "hidden": false,
            "key": "jsrwancheng",
            "width": 150,
          }, {
            "title": "完成进度",
            "hidden": false,
            "key": "jsrjindu",
            "width": 150,
          }, {
            "title": "差值",
            "hidden": false,
            "key": "jsrchazhi",
            "width": 150,
          }, {
            "title": "本月目标值",
            "hidden": false,
            "key": "zhmlmubiao",
            "width": 150,
          }, {
            "title": "实际完成值",
            "hidden": false,
            "key": "zhmlwancheng",
            "width": 150,
          }, {
            "title": "完成进度",
            "hidden": false,
            "key": "zhmljindu",
            "width": 150,
          }, {
            "title": "差值",
            "hidden": false,
            "key": "zhmlchazhi",
            "width": 150,
          }, {
            "title": "本月目标值",
            "hidden": false,
            "key": "ggfmubiao",
            "width": 150,
          }, {
            "title": "实际完成值",
            "hidden": false,
            "key": "ggfwancheng",
            "width": 150,
          }, {
            "title": "完成进度",
            "hidden": false,
            "key": "ggfjindu",
            "width": 150,
          }, {
            "title": "差值",
            "hidden": false,
            "key": "ggfchazhi",
            "width": 150,
          }],
          data1: [{
            "erpId": '运动部',
            "cellrowspan": 3,
            "cellcolspan": 1,
            "GMVmubiao": {
              "value": '123123123',
              "status": 'up'
            },
            "GMVwancheng": "0.234",
            "GMVjindu": "30%",
            "GMVchazhi": 0,
            "jsrmubiao": "111111",
            "jsrwancheng": "50%",
            "jsrjindu": "60%",
            "jsrchazhi": "70%",
            "zhmlwancheng": "80%",
            "zhmlmubiao": "100%",
            "zhmljindu": "100%",
            "zhmlchazhi": "100%",
            "ggfjindu": "100%",
            "ggfwancheng": "100%",
            "ggfmubiao": "100%",
            "ggfchazhi": "100%",
            "moshi": "整体",
            "beizhu": '备注信息'
          }, {
            "erpId": '运动部',
            "cellrowspan": 3,
            "cellcolspan": 1,
            "GMVmubiao": {
              "value": '53345345345',
              "status": 'down'
            },
            "GMVwancheng": "1.234",
            "GMVjindu": "200%",
            "GMVchazhi": "200%",
            "jsrmubiao": "22222222",
            "jsrwancheng": "200%",
            "jsrjindu": "200%",
            "jsrchazhi": "200%",
            "zhmlwancheng": "200%",
            "zhmlmubiao": "200%",
            "zhmljindu": "200%",
            "zhmlchazhi": "200%",
            "ggfjindu": "200%",
            "ggfwancheng": "200%",
            "ggfmubiao": "200%",
            "ggfchazhi": "200%",
            "beizhu": '备注信息',
            "moshi": "POP"
          }, {
            "erpId": '运动部',
            "cellrowspan": 3,
            "cellcolspan": 1,
            "GMVmubiao": {
              "value": '898798798',
              "status": 'up'
            },
            "GMVwancheng": "2.345",
            "GMVjindu": "@integer(20, 99)%",
            "GMVchazhi": "@integer(20, 99)%",
            "jsrmubiao": "333333333",
            "jsrwancheng": "@integer(20, 99)%",
            "jsrjindu": "@integer(20, 99)%",
            "jsrchazhi": "@integer(20, 99)%",
            "zhmlwancheng": "@integer(20, 99)%",
            "zhmlmubiao": "@integer(20, 99)%",
            "zhmljindu": "@integer(20, 99)%",
            "zhmlchazhi": "@integer(20, 99)%",
            "ggfjindu": "@integer(20, 99)%",
            "ggfwancheng": "@integer(20, 99)%",
            "ggfmubiao": "@integer(20, 99)%",
            "ggfchazhi": "@integer(20, 99)%",
            "beizhu": '备注信息',
            "moshi": "自营"
          }, {
            "erpId": '阿斯顿',
            "cellrowspan": 3,
            "cellcolspan": 1,
            "GMVmubiao": {
              "value": '898798798',
              "status": 'up'
            },
            "GMVwancheng": "2.345",
            "GMVjindu": "@integer(20, 99)%",
            "GMVchazhi": "@integer(20, 99)%",
            "jsrmubiao": "333333333",
            "jsrwancheng": "@integer(20, 99)%",
            "jsrjindu": "@integer(20, 99)%",
            "jsrchazhi": "@integer(20, 99)%",
            "zhmlwancheng": "@integer(20, 99)%",
            "zhmlmubiao": "@integer(20, 99)%",
            "zhmljindu": "@integer(20, 99)%",
            "zhmlchazhi": "@integer(20, 99)%",
            "ggfjindu": "@integer(20, 99)%",
            "ggfwancheng": "@integer(20, 99)%",
            "ggfmubiao": "@integer(20, 99)%",
            "ggfchazhi": "@integer(20, 99)%",
            "beizhu": '备注信息',
            "moshi": "自营"
          }, {
            "erpId": '阿斯顿333',
            "cellrowspan": 3,
            "cellcolspan": 1,
            "GMVmubiao": {
              "value": '898798798',
              "status": 'up'
            },
            "GMVwancheng": "2.345",
            "GMVjindu": "@integer(20, 99)%",
            "GMVchazhi": "@integer(20, 99)%",
            "jsrmubiao": "333333333",
            "jsrwancheng": "@integer(20, 99)%",
            "jsrjindu": "@integer(20, 99)%",
            "jsrchazhi": "@integer(20, 99)%",
            "zhmlwancheng": "@integer(20, 99)%",
            "zhmlmubiao": "@integer(20, 99)%",
            "zhmljindu": "@integer(20, 99)%",
            "zhmlchazhi": "@integer(20, 99)%",
            "ggfjindu": "@integer(20, 99)%",
            "ggfwancheng": "@integer(20, 99)%",
            "ggfmubiao": "@integer(20, 99)%",
            "ggfchazhi": "@integer(20, 99)%",
            "beizhu": '备注信息',
            "moshi": "自营"
          }, {
            "erpId": '阿斯顿222',
            "cellrowspan": 3,
            "cellcolspan": 1,
            "GMVmubiao": {
              "value": '898798798',
              "status": 'up'
            },
            "GMVwancheng": "2.345",
            "GMVjindu": "@integer(20, 99)%",
            "GMVchazhi": "@integer(20, 99)%",
            "jsrmubiao": "333333333",
            "jsrwancheng": "@integer(20, 99)%",
            "jsrjindu": "@integer(20, 99)%",
            "jsrchazhi": "@integer(20, 99)%",
            "zhmlwancheng": "@integer(20, 99)%",
            "zhmlmubiao": "@integer(20, 99)%",
            "zhmljindu": "@integer(20, 99)%",
            "zhmlchazhi": "@integer(20, 99)%",
            "ggfjindu": "@integer(20, 99)%",
            "ggfwancheng": "@integer(20, 99)%",
            "ggfmubiao": "@integer(20, 99)%",
            "ggfchazhi": "@integer(20, 99)%",
            "beizhu": '备注信息',
            "moshi": "自营"
          }, {
            "erpId": '阿斯顿211',
            "cellrowspan": 1,
            "cellcolspan": 1,
            "GMVmubiao": {
              "value": '898798798',
              "status": 'up'
            },
            "GMVwancheng": "2.345",
            "GMVjindu": "@integer(20, 99)%",
            "GMVchazhi": "@integer(20, 99)%",
            "jsrmubiao": "333333333",
            "jsrwancheng": "@integer(20, 99)%",
            "jsrjindu": "@integer(20, 99)%",
            "jsrchazhi": "@integer(20, 99)%",
            "zhmlwancheng": "@integer(20, 99)%",
            "zhmlmubiao": "@integer(20, 99)%",
            "zhmljindu": "@integer(20, 99)%",
            "zhmlchazhi": "@integer(20, 99)%",
            "ggfjindu": "@integer(20, 99)%",
            "ggfwancheng": "@integer(20, 99)%",
            "ggfmubiao": "@integer(20, 99)%",
            "ggfchazhi": "@integer(20, 99)%",
            "beizhu": '备注信息',
            "moshi": "自营"
          }],
        }
      },
      mounted() {

        this.newData = Object.assign([], this.data1)

        this.data1 = this.newData.slice((this.currentPage - 1) * this.pageSize, this.pageSize * this.currentPage)
      },

      methods: {

      }
  }
  </script>
`

code.fix = `
<template>
    <ga-table width="550" height="200" border :columns="columns2" :data="data4"></ga-table>
    <ga-model v-model="modal1" title="普通的Modal对话框标题" scrollable>
      <div class="modal-body">
        这是内容
      </div>
    </ga-model>
  </template>
  <script>
  let ctx = null
  export default {
    data() {
        return {
          modal1: false,
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
            tip: '啊哒哒哒哒啊哒哒哒哒啊哒哒哒哒啊哒哒哒哒啊哒哒哒哒啊哒哒哒哒啊哒哒哒哒',
          }, {
            title: '年龄',
            key: 'age',
            width: 100,
            tip: '啊哒哒哒哒啊哒哒哒哒啊哒哒哒哒啊哒哒哒哒啊哒哒哒哒啊哒哒哒哒啊哒哒哒哒',
            sortable: true
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
              return <ga-button type="text" @on-click="btnFn" size="small">查看</ga-button><ga-button type="text" @on-click="btnFn" size="small">编辑</ga-button>
            },
            function: {
              btnFn: () => {
                // 如果是在其他js（service.js）中使用直接使用ctx.modal1即可
                ctx.$parent.modal1 = !ctx.$parent.modal1
              }
            }
          }],
          data4: [{
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
          }]
        }
      },
      mounted() {
        this.defaultsort = {
          column: 1,
          sort: 'desc'
        }
      },
  }
  </script>
`;

code.duoxuan = `
<template>
    <ga-table width="550" height="200" border :columns="columns2" :data="data4" @on-select="selectFn" @on-select-all="selectAll" @on-selection-change="selectChange"></ga-table>
  </template>
  <script>
  export default {
    data() {
      return {
        columns4: [{
          type: 'selection',
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
          key: 'address'
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
        }]
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
`;

code.danxuan = `
<template>
    <ga-table width="550" height="200" border :columns="columns2" :data="data4" :highlightRowIndex="highlightRowIndex" highlight-row @on-current-change="currentChange"></ga-table>
  </template>
  <script>
  export default {
    data() {
      return {
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
          key: 'address'
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
        }]
      }
    },
    mounted(){
      this.highlightRowIndex = '0'
    },
    methods:{
      currentChange(currentRow,oldCurrentRow){
        console.log(currentRow,oldCurrentRow)
      }
    }
  }
  </script>
`;

code.search = `
<template>
    <div style="float: right;margin-bottom: 13px;">
        <span>搜索：</span>
        <ga-input v-model="value" placeholder="请输入..." @on-change="onChange" style="width: 200px"></ga-input>
    </div>
    <ga-table highlight-row border :theader="theader" :columns="columns1" :data="data1" size="small" ref="table" height="200">
    </ga-table>
    <div style="margin: 10px;">
        <div style="float: right;">
            <ga-page :total="total" :current="currentPage" :page-size="pageSize" @on-change="changePage" @on-page-size-change="pageSizeChange" show-sizer></ga-page>
        </div>
    </div>
</template>
<script>
export default {
    data() {
            return {
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
`;

code.daochu = `
<template>
    <ga-table :columns="columns8" :data="data7" size="small" ref="table"></ga-table>
    <br>
    <ga-button type="primary" size="large" @click.native="exportData(1)">
        <ga-icon type="ios-download-outline"></ga-icon> 导出原始数据</ga-button>
    <ga-button type="primary" size="large" @click.native="exportData(2)">
        <ga-icon type="ios-download-outline"></ga-icon> 导出排序和过滤后的数据</ga-button>
    <ga-button type="primary" size="large" @click.native="exportData(3)">
        <ga-icon type="ios-download-outline"></ga-icon> 导出自定义数据</ga-button>
</template>
<script>
export default {
    data() {
            return {
                columns8: [{
                    "title": "名称",
                    "key": "name",
                    "fixed": "left",
                    "width": 200
                }, {
                    "title": "展示",
                    "key": "show",
                    "width": 150,
                    "sortable": true,
                    filters: [{
                        label: '大于4000',
                        value: 1,
                        columns:1
                    }, {
                        label: '小于4000',
                        value: 2,
                        columns:1
                    }],
                    filterMultiple: false,
                    filterMethod(value, row) {
                        if (value === 1) {
                            return row.show > 4000;
                        } else if (value === 2) {
                            return row.show < 4000;
                        }
                    }
                }, {
                    "title": "唤醒",
                    "key": "weak",
                    "width": 150,
                    "sortable": true
                }, {
                    "title": "登录",
                    "key": "signin",
                    "width": 150,
                    "sortable": true
                }, {
                    "title": "点击",
                    "key": "click",
                    "width": 150,
                    "sortable": true
                }, {
                    "title": "激活",
                    "key": "active",
                    "width": 150,
                    "sortable": true
                }, {
                    "title": "7日留存",
                    "key": "day7",
                    "width": 150,
                    "sortable": true
                }, {
                    "title": "30日留存",
                    "key": "day30",
                    "width": 150,
                    "sortable": true
                }, {
                    "title": "次日留存",
                    "key": "tomorrow",
                    "width": 150,
                    "sortable": true
                }, {
                    "title": "日活跃",
                    "key": "day",
                    "width": 150,
                    "sortable": true
                }, {
                    "title": "周活跃",
                    "key": "week",
                    "width": 150,
                    "sortable": true
                }, {
                    "title": "月活跃",
                    "key": "month",
                    "width": 150,
                    "sortable": true
                }],
                data7: [{
                    "name": "推广名称1",
                    "fav": 0,
                    "show": 7302,
                    "weak": 5627,
                    "signin": 1563,
                    "click": 4254,
                    "active": 1438,
                    "day7": 274,
                    "day30": 285,
                    "tomorrow": 1727,
                    "day": 558,
                    "week": 4440,
                    "month": 5610
                }, {
                    "name": "推广名称2",
                    "fav": 0,
                    "show": 4720,
                    "weak": 4086,
                    "signin": 3792,
                    "click": 8690,
                    "active": 8470,
                    "day7": 8172,
                    "day30": 5197,
                    "tomorrow": 1684,
                    "day": 2593,
                    "week": 2507,
                    "month": 1537
                }, {
                    "name": "推广名称3",
                    "fav": 0,
                    "show": 7181,
                    "weak": 8007,
                    "signin": 8477,
                    "click": 1879,
                    "active": 16,
                    "day7": 2249,
                    "day30": 3450,
                    "tomorrow": 377,
                    "day": 1561,
                    "week": 3219,
                    "month": 1588
                }, {
                    "name": "推广名称4",
                    "fav": 0,
                    "show": 9911,
                    "weak": 8976,
                    "signin": 8807,
                    "click": 8050,
                    "active": 7668,
                    "day7": 1547,
                    "day30": 2357,
                    "tomorrow": 7278,
                    "day": 5309,
                    "week": 1655,
                    "month": 9043
                }, {
                    "name": "推广名称5",
                    "fav": 0,
                    "show": 934,
                    "weak": 1394,
                    "signin": 6463,
                    "click": 5278,
                    "active": 9256,
                    "day7": 209,
                    "day30": 3563,
                    "tomorrow": 8285,
                    "day": 1230,
                    "week": 4840,
                    "month": 9908
                }, {
                    "name": "推广名称6",
                    "fav": 0,
                    "show": 6856,
                    "weak": 1608,
                    "signin": 457,
                    "click": 4949,
                    "active": 2909,
                    "day7": 4525,
                    "day30": 6171,
                    "tomorrow": 1920,
                    "day": 1966,
                    "week": 904,
                    "month": 6851
                }, {
                    "name": "推广名称7",
                    "fav": 0,
                    "show": 5107,
                    "weak": 6407,
                    "signin": 4166,
                    "click": 7970,
                    "active": 1002,
                    "day7": 8701,
                    "day30": 9040,
                    "tomorrow": 7632,
                    "day": 4061,
                    "week": 4359,
                    "month": 3676
                }, {
                    "name": "推广名称8",
                    "fav": 0,
                    "show": 862,
                    "weak": 6520,
                    "signin": 6696,
                    "click": 3209,
                    "active": 6801,
                    "day7": 6364,
                    "day30": 6850,
                    "tomorrow": 9408,
                    "day": 2481,
                    "week": 1479,
                    "month": 2346
                }, {
                    "name": "推广名称9",
                    "fav": 0,
                    "show": 567,
                    "weak": 5859,
                    "signin": 128,
                    "click": 6593,
                    "active": 1971,
                    "day7": 7596,
                    "day30": 3546,
                    "tomorrow": 6641,
                    "day": 1611,
                    "week": 5534,
                    "month": 3190
                }, {
                    "name": "推广名称10",
                    "fav": 0,
                    "show": 3651,
                    "weak": 1819,
                    "signin": 4595,
                    "click": 7499,
                    "active": 7405,
                    "day7": 8710,
                    "day30": 5518,
                    "tomorrow": 428,
                    "day": 9768,
                    "week": 2864,
                    "month": 5811
                }]
            }
        },
        methods: {
            exportData(type) {
                if (type === 1) {
                    this.$refs.table.exportCsv({
                        filename: '原始数据'
                    });
                } else if (type === 2) {
                    this.$refs.table.exportCsv({
                        filename: '排序和过滤后的数据',
                        original: false
                    });
                } else if (type === 3) {
                    this.$refs.table.exportCsv({
                        filename: '自定义数据',
                        columns: this.columns8.filter((col, index) => index < 4),
                        data: this.data7.filter((data, index) => index < 4)
                    });
                }
            }
        }
}
</script>
`;

code.server = `
  <template>
    <ga-table width="550" highlight-row height="200" border :initsort="defaultsort" :columns="columns2" :data="data4" @on-sort-change="sortChange"></ga-table>
  </template>
  <script>
    export default {
      data() {
        return {
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
`;

code.index = `
<template>
    <ga-table width="550" height="200" border :columns="columns2" :data="data4" :highlightRowIndex="highlightRowIndex" highlight-row @on-current-change="currentChange"></ga-table>
  </template>
  <script>
  export default {
    data() {
      return {
        columns4: [{
          type: 'index',
          width: 70,
          align: 'center',
          title: '序号'
        }, {
          title: '姓名',
          key: 'name'
        }, {
          title: '年龄',
          key: 'age'
        }, {
          title: '地址',
          key: 'address'
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
        }]
      }
    },
    mounted(){
      this.highlightRowIndex = '0'
    },
    methods:{
      currentChange(currentRow,oldCurrentRow){
        console.log(currentRow,oldCurrentRow)
      }
    }
  }
  </script>
`;

code.createRender = `
<template>
    <ga-table border :columns="columns4" :data="data1" :highlightRowIndex="highlightRowIndex" highlight-row @on-current-change="currentChange" class="table-radio"></ga-table>
</template>
<script>
export default {
  name: 'CreateRenderTable',
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
          console.log(ctx)
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
      console.log(currentRow,oldCurrentRow)
    }
  }
}
</script>

`

export default code;
