<template>
  <ga-panel :moduleName="moduleName">
    <v-menu 
      :theme="theme" 
      active-name="3-1"
      :open-names="openNames"
      :collapse="isCollapse">
      <v-submenu name="3">
        <template slot="icon">
          <v-icon type="stats-bars"></v-icon>
        </template>
        <template slot="title">
          <span slot="title">统计分析</span>
        </template>
          <v-menu-item name="3-1">新增和启动</v-menu-item>
          <v-menu-item name="3-2">活跃分析</v-menu-item>
          <v-menu-item name="3-3">时段分析</v-menu-item>
        <v-menu-group title="留存">
          <v-menu-item name="3-4">用户留存</v-menu-item>
          <v-menu-item name="3-5">流失用户</v-menu-item>
        </v-menu-group>
      </v-submenu>
      <v-menu-item name="1">
        <v-icon type="ios-paper"></v-icon>
        <span slot="title">内容管理</span>
      </v-menu-item>
      <v-menu-item name="2">
        <v-icon type="ios-people"></v-icon>
        <span slot="title">用户管理</span>
      </v-menu-item>
      <v-menu-item name="4">
        <v-icon type="settings"></v-icon>
        <span slot="title">综合设置</span>
      </v-menu-item>
    </v-menu>
    <v-button @on-click="toggle">收起</v-button>
    <v-radio-group v-model="theme" size="small">
      <v-radio label="light"></v-radio>
      <v-radio label="dark"></v-radio>
    </v-radio-group>
    <v-code language="html">
      {{Code.small}}
    </v-code>
  </ga-panel>
</template>
<script>
import vMenu from "@/package/components/menu/menu.vue";
import vMenuItem from "@/package/components/menu/menu-item.vue";
import vSubmenu from "@/package/components/menu/submenu.vue";
import vMenuGroup from "@/package/components/menu/menu-group.vue";
import vIcon from "@/package/components/icon/icon.vue";
import vButton from "@/package/components/button/button.vue";
import vRadio from "@/package/components/radio/radio.vue";
import vRadioGroup from "@/package/components/radio/radio-group.vue";
import Code from "@/public/code/menu.js";

export default {
  name: "Smallmenu",
  components: {
    vMenu,
    vMenuItem,
    vSubmenu,
    vMenuGroup,
    vIcon,
    vButton,
    vRadio,
    vRadioGroup
  },

  data() {
    return {
      moduleName: "收起菜单",
      Code: Code,
      isCollapse: false,
      theme: "light",
      openNames: null
    };
  },
  created() {
    this.$nextTick(() => {
      this.openNames = ['3']
    })
  },
  methods: {
    toggle() {
      this.isCollapse = !this.isCollapse;
    }
  }
};
</script>
