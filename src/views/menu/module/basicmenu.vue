<template>
  <ga-panel :moduleName="moduleName">
    <v-menu mode="horizontal" active-name="1" @on-select="onSelect">
      <v-menu-item name="1">
        <v-icon type="ios-paper"></v-icon>
        内容管理
      </v-menu-item>
      <v-menu-item name="2">
        <v-icon type="ios-people"></v-icon>
        用户管理
      </v-menu-item>
      <v-submenu name="3">
        <template slot="title">
          <v-icon type="stats-bars"></v-icon>
          统计分析
        </template>
        <v-menu-group title="使用">
          <v-menu-item name="3-1">新增和启动</v-menu-item>
          <v-menu-item name="3-2">活跃分析</v-menu-item>
          <v-menu-item name="3-3">时段分析</v-menu-item>
        </v-menu-group>
        <v-menu-group title="留存">
          <v-menu-item name="3-4">用户留存</v-menu-item>
          <v-menu-item name="3-5">流失用户</v-menu-item>
        </v-menu-group>
      </v-submenu>
      <v-menu-item name="4">
        <v-icon type="settings"></v-icon>
        综合设置
      </v-menu-item>
    </v-menu>
    <v-code language="html">
      {{Code.base}}
    </v-code>
  </ga-panel>
</template>
<script>

import vMenu from '@/package/components/menu/menu.vue';
import vMenuItem from '@/package/components/menu/menu-item.vue';
import vSubmenu from '@/package/components/menu/submenu.vue';
import vMenuGroup from '@/package/components/menu/menu-group.vue';
import vIcon from '@/package/components/icon/icon.vue';
import Code from '@/public/code/menu.js';

export default {
  components: {
    vMenu,
    vMenuItem,
    vSubmenu,
    vMenuGroup,
    vIcon
  },

  data() {
    return {
      moduleName: '基本形式',
      Code:Code
    }
  },
  methods: {
    onSelect(name) {
      console.log(name)
    }
  }
}

</script>
