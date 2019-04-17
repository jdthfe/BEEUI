let code = {};

code.base = `
  <ga-menu mode="horizontal" active-name="1">
      <ga-menu-item name="1">
          <ga-icon type="ios-paper"></ga-icon>
          内容管理
      </ga-menu-item>
      <ga-menu-item name="2">
          <ga-icon type="ios-people"></ga-icon>
          用户管理
      </ga-menu-item>
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
      <ga-menu-item name="4">
          <ga-icon type="settings"></ga-icon>
          综合设置
      </ga-menu-item>
  </ga-menu>
`;

code.left = `
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
    </ga-panel>
</template>
<script>
    export default {
        data() {
        return {
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
`;

code.small = `
    <ga-menu 
      :theme="theme" 
      active-name="1"
      @open="handleOpen" 
      @close="handleClose"
      :collapse="isCollapse">
      <ga-submenu name="3">
        <template slot="icon">
          <ga-icon type="stats-bars"></ga-icon>
        </template>
        <template slot="title">
          <span slot="title">统计分析</span>
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
      <ga-menu-item name="1">
        <ga-icon type="ios-paper"></ga-icon>
        <span slot="title">内容管理</span>
      </ga-menu-item>
      <ga-menu-item name="2">
        <ga-icon type="ios-people"></ga-icon>
        <span slot="title">用户管理</span>
      </ga-menu-item>
      <ga-menu-item name="4">
        <ga-icon type="settings"></ga-icon>
        <span slot="title">综合设置</span>
      </ga-menu-item>
    </ga-menu>
`;


export default code;
