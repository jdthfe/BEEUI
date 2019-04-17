<template>
  <ga-panel :moduleName="moduleName">
    <p></p>
    <Tabs value="name1" :animated="false">
      <Tab-pane label="标签一" name="name1">标签一的内容</Tab-pane>
      <Tab-pane label="标签二" name="name2">标签二的内容</Tab-pane>
      <Tab-pane label="标签三" name="name3">标签三的内容</Tab-pane>
    </Tabs>
    <v-code language="html">
      {{Code.base}}
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
      Code:Code,
      moduleName: '普通tab切换',
    }
  }
}

</script>
