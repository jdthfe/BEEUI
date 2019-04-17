<template>
  <ga-panel :moduleName="moduleName">
    <Tabs type="card" closable @on-tab-remove="handleTabRemove">
      <Tab-pane label="标签一" v-if="tab0">标签一的内容</Tab-pane>
      <Tab-pane label="标签二" v-if="tab1">标签二的内容</Tab-pane>
      <Tab-pane label="标签三" v-if="tab2">标签三的内容</Tab-pane>
    </Tabs>
    <v-code language="html">
      {{Code.close}}
    </v-code>
  </ga-panel>
</template>
<script>

import Tabs from '@/package/components/tabs/tabs.vue';
import TabPane from '@/package/components/tabs/pane.vue';

import Code from '@/public/code/tabs.js';

export default {
  components: {
    Tabs,
    TabPane
  },

  data() {
    return {
      moduleName: '可关闭样式切换',
      tab0: true,
      tab1: true,
      tab2: true,
      Code:Code
    }
  },
  methods: {
    handleTabRemove(name) {
      this['tab' + name] = false;
    }
  }
}

</script>
