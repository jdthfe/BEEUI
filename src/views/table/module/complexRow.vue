<template>
  <ga-panel moduleName="多行合并">
    <v-table highlight-row border :theader="theader" :columns="columns1" :data="data1" size="small" ref="table">
    </v-table>
    <v-code language="html" style="clear:both">
      {{Code.cpx}}
    </v-code>
  </ga-panel>
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

import Vue from 'vue';

import vTable from '@/package/components/table/table.vue';
import vIcon from '@/package/components/icon/icon.vue';

import * as types from '@/public/utils/utils';

import Code from '@/public/code/table.js';

Vue.component('vIcon', vIcon)
export default {
  name: 'complexTable',
  components: {
    vTable,
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
      newData: []
    }
  },
  props: {

  },
  created() {
    this.theader = [{
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
    }];
    this.columns1 = [{
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
        return `<v-icon type="person"></v-icon><strong>${types.formatMoney(row[column['key']]['value'])}</strong><i class="${klass}" aria-hidden="true"></i>`
      }
    }, {
      "title": "实际完成值",
      "hidden": false,
      "key": "GMVwancheng",
      "width": 150,
      "rules": 'baifenshu',
      "render": function(row, column, index) {
        return `${types.formatPercent(row[column['key']])}`
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
        return `${types.formatMoney(row[column['key']])}`
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
    }]
    this.data1 = [{
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
    }]
    this.total = this.data1.length;

  }
}

</script>
