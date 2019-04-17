<template>
  <div :class="[prefixCls + '-layout-content']">
    <div :class="[prefixCls + '-layout-content-main']">
      <div :class="[prefixCls + '-title']" v-if="!simple">
        <h2>
          <i class="ga-icon" :class="['ga-icon-' + icon, prefixCls + '-icon']" v-if="icon"></i>
          {{moduleName}}
          <span>{{smallName}}</span>
        </h2>
      </div>
      <div :class="[prefixCls + '-content']">
        <slot></slot>
      </div>
    </div>
  </div>
</template>
<script>
  const prefixCls = 'ga-panel';
  export default {
    name: 'Panel',
    data() {
      return {
        prefixCls: prefixCls
      }
    },
    props: {
      moduleName: {
        type: String,
        default: ""
      },
      moduleIcon: {
        type: String,
        default: ""
      },
      smallName: {
        type: String,
        default: ""
      },
      icon: String,
      simple: {
        type: Boolean,
        default: false
      }
    }
  }
</script>
<style lang="less" scoped>
  // .layout-content {
  //   min-height: 200px;
  //   margin: 10px 10px 0 10px;
  //   overflow: hidden;
  //   background: #fff;
  //   border-radius: 0;
  //   box-shadow: 0 0 10px #e9e9e9;
  // }
  // .ga-title {
  //   margin-bottom: 0!important;
  //   padding: 15px 20px;
  //   border-bottom: 1px solid #f1f1f1;
  // }
  // .ga-content {
  //   position: initial;
  //   padding: 0 19px 0 20px;
  //   margin: 12px 0;
  //   width: 100%;
  //   float: left;
  //   clear: both;
  // }
</style>
