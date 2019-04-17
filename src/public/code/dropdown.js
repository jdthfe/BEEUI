let code = {};

code.base = `
<template>
    <ga-dropdown @on-click="handClick" trigger="click" style="margin-left: 20px">
      <ga-button type="ghost">
        click触发
        <ga-icon type="ios-arrow-down"></ga-icon>
      </ga-button>
      <ga-dropdown-menu slot="list">
        <ga-dropdown-item :selected="selected.type === v.type" :name="v" v-for="(v,index) in typeList" :key="index">{{v.name}}</ga-dropdown-item>
      </ga-dropdown-menu>
    </ga-dropdown>
    <ga-dropdown @on-click="handClick" trigger="hover" style="margin-left: 20px">
      <ga-button type="ghost">
        hover触发
        <ga-icon type="ios-arrow-down"></ga-icon>
      </ga-button>
      <ga-dropdown-menu slot="list">
        <ga-dropdown-item :selected="selected.type === v.type" :name="v" v-for="(v,index) in typeList" :key="index">{{v.name}}</ga-dropdown-item>
      </ga-dropdown-menu>
    </ga-dropdown>
    <ga-dropdown :visible="visible" trigger="custom" style="margin-left: 20px">
      <ga-button type="ghost" @on-click="handleOpen">
        自定义触发
        <ga-icon type="ios-arrow-down"></ga-icon>
      </ga-button>
      <ga-dropdown-menu slot="list">
        <p>自定义内容</p>
        <div style="text-align: right;margin:10px;">
          <ga-button type="primary" @on-click="handleClose">关闭</ga-button>
        </div>
      </ga-dropdown-menu>
    </ga-dropdown>
  </template>
  <script>
  export default {
    data() {
        return {
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
`;

export default code;
