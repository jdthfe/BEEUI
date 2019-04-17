<template>
  <ga-panel :moduleName="moduleName">
    <Breadcrumb>
      <Breadcrumb-item href="/" target="_blank">Home</Breadcrumb-item>
      <Breadcrumb-item href="/components/breadcrumb" target="_blank">Components</Breadcrumb-item>
      <Breadcrumb-item>Breadcrumb</Breadcrumb-item>
    </Breadcrumb>
    <Breadcrumb>
      <Breadcrumb-item href="/">
        <Icon type="ios-home-outline"></Icon> Home
      </Breadcrumb-item>
      <Breadcrumb-item href="/components/breadcrumb">
        <Icon type="social-buffer-outline"></Icon> Components
      </Breadcrumb-item>
      <Breadcrumb-item>
        <Icon type="pound"></Icon> Breadcrumb
      </Breadcrumb-item>
    </Breadcrumb>
    <Breadcrumb separator=">">
      <Breadcrumb-item href="/">Home</Breadcrumb-item>
      <Breadcrumb-item href="/components/breadcrumb">Components</Breadcrumb-item>
      <Breadcrumb-item>Breadcrumb</Breadcrumb-item>
    </Breadcrumb>
    <Breadcrumb separator="<b class='demo-breadcrumb-separator'>=></b>">
      <Breadcrumb-item href="/">Home</Breadcrumb-item>
      <Breadcrumb-item href="/components/breadcrumb">Components</Breadcrumb-item>
      <Breadcrumb-item>Breadcrumb</Breadcrumb-item>
    </Breadcrumb>
    <v-code language="html">
      {{Code.base}}
    </v-code>
  </ga-panel>
</template>
<style>
.demo-breadcrumb-separator {
  color: #ff5500;
  padding: 0 5px;
}

</style>
<script>

import Breadcrumb from '@/package/components/breadcrumb/breadcrumb.vue';
import BreadcrumbItem from '@/package/components/breadcrumb/breadcrumb-item.vue';
import Icon from '@/package/components/icon/icon.vue';
import Code from '@/public/code/breadcrumb.js';

export default {
  components: {
    Breadcrumb,
    BreadcrumbItem,
    Icon
  },

  data() {
    return {
      Code:Code,
      moduleName: '基本使用',

    }
  },
}

</script>
