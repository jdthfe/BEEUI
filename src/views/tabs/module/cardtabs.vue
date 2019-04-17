<template>
  <ga-panel :moduleName="moduleName">
    <Tabs type="card">
      <Tab-pane label="标签一">标签一的内容</Tab-pane>
      <Tab-pane label="标签二">标签二的内容</Tab-pane>
      <Tab-pane label="标签三">标签三的内容</Tab-pane>
    </Tabs>
    <v-code language="html">
      {{Code.card}}
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
      moduleName: 'card样式切换',
      Code:Code
    }
  }
}

</script>
