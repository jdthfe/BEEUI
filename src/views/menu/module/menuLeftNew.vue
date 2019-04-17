<template>
  <ga-panel :moduleName="moduleName">
    <ga-menu active-name="1-2" :open-names="openNames" @on-select="onSelect">
      <ga-submenu name="1">
        <template slot="title">
          <ga-icon type="ios-paper"></ga-icon>
          内容管理
        </template>
        <ga-menu-item name="1-1">文章管理</ga-menu-item>
        <ga-menu-item name="1-2">评论管理</ga-menu-item>
        <ga-menu-item name="1-3">举报管理</ga-menu-item>
      </ga-submenu>
      <ga-submenu name="2">
        <template slot="title">
          <ga-icon type="ios-people"></ga-icon>
          用户管理
        </template>
        <ga-menu-item name="2-1">新增用户</ga-menu-item>
        <ga-menu-item name="2-2">活跃用户</ga-menu-item>
      </ga-submenu>
      <ga-submenu name="3">
        <template slot="title">
          <ga-icon type="stats-bars"></ga-icon>
          统计分析
        </template>
        <ga-menu-group title="使用">
          <ga-menu-item name="3-1">新增和启动</ga-menu-item>
          <ga-menu-item name="3-2">活跃分析</ga-menu-item>
          <ga-menu-item name="3-3">时段分析</ga-menu-item>
        </ga-menu-group>
        <ga-menu-group title="留存">
          <ga-menu-item name="3-4">用户留存</ga-menu-item>
          <ga-menu-item name="3-5">流失用户</ga-menu-item>
        </ga-menu-group>
      </ga-submenu>
    </ga-menu>
    <v-code language="html">
      {{Code.left}}
    </v-code>
  </ga-panel>
</template>
<script>

import gaMenu from '@/package/components/menu/menu.vue';
import gaMenuItem from '@/package/components/menu/menu-item.vue';
import gaSubmenu from '@/package/components/menu/submenu.vue';
import gaMenuGroup from '@/package/components/menu/menu-group.vue';
import gaIcon from '@/package/components/icon/icon.vue';
import Code from '@/public/code/menu.js';

export default {
  components: {
    gaMenu,
    gaMenuItem,
    gaSubmenu,
    gaMenuGroup,
    gaIcon
  },

  data() {
    return {
      moduleName: 'menu菜单',
      Code:Code,
      openNames: null
    }
  },
  created() {
    this.$nextTick(() => {
      this.openNames = ['1']
    })
  },
  methods: {
    onSelect(name) {
      console.log(name)
    }
  }
}

</script>
