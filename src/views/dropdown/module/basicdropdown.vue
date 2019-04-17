<template>
  <ga-panel :moduleName="moduleName">
    <v-dropdown @on-click="handClick" trigger="click" style="margin-left: 20px">
      <v-button type="ghost">
        {{selected.name}}click触发
        <v-icon type="ios-arrow-down"></v-icon>
      </v-button>
      <v-dropdown-menu slot="list">
        <v-dropdown-item :selected="selected.type === v.type" :name="v" v-for="(v,index) in typeList" :key="index">{{v.name}}</v-dropdown-item>
      </v-dropdown-menu>
    </v-dropdown>
    <v-dropdown @on-click="handClick" trigger="hover" style="margin-left: 20px">
      <v-button type="ghost">
        {{selected.name}}hover触发
        <v-icon type="ios-arrow-down"></v-icon>
      </v-button>
      <v-dropdown-menu slot="list">
        <v-dropdown-item :selected="selected.type === v.type" :name="v" v-for="(v,index) in typeList" :key="index">{{v.name}}</v-dropdown-item>
      </v-dropdown-menu>
    </v-dropdown>
    <v-dropdown :visible="visible" trigger="custom" style="margin-left: 20px">
      <v-button type="ghost" @on-click="handleOpen">
        {{selected.name}}自定义触发
        <v-icon type="ios-arrow-down"></v-icon>
      </v-button>
      <v-dropdown-menu slot="list">
        <p>自定义内容</p>
        <div style="text-align: right;margin:10px;">
          <v-button type="primary" @on-click="handleClose">关闭</v-button>
        </div>
      </v-dropdown-menu>
    </v-dropdown>
    <v-code language="html">
      {{Code.base}}
    </v-code>
  </ga-panel>
</template>
<script>
import vDropdown from '@/package/components/dropdown/dropdown.vue';
import vDropdownMenu from '@/package/components/dropdown/dropdown-menu.vue';
import vDropdownItem from '@/package/components/dropdown/dropdown-item.vue';
import vButton from '@/package/components/button/button.vue';
import vIcon from '@/package/components/icon/icon.vue'

import Code from '@/public/code/dropdown.js'

export default {
  components: {
    vDropdown,
    vDropdownMenu,
    vDropdownItem,
    vButton,
    vIcon
  },

  data() {
    return {
      moduleName: '基本使用',
      Code: Code,
      visible: false,
      selected: {
        name: '整体',
        type: 'ALL'
      },
      typeList: [{
        id: 0,
        name: '整体',
        type: 'ALL',
      }, {
        id: 1,
        name: '自营',
        type: 'SELF',
      }, {
        id: 2,
        name: 'POP',
        type: 'POP',
      }]
    }
  },
  methods: {
    handClick(val) {
      this.selected = val;
    },
    handleClose() {
      this.visible = false;
    },
    handleOpen() {
      this.visible = true;
    },
  }
}

</script>
