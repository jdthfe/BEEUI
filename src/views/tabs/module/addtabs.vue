<template>
  <ga-panel :moduleName="moduleName">
    <Tabs type="card">
      <Tab-pane v-for="tab in tabs" :key="tab" :label="'标签' + tab">标签{{ tab }}</Tab-pane>
    </Tabs>
    <v-button type="ghost" @on-click="handleTabsAdd" size="small" :disabled="tabs > 3">增加</v-button>
    <v-code language="html">
      {{Code.add}}
    </v-code>
  </ga-panel>
</template>
<script>
import Tabs from '@/package/components/tabs/tabs.vue';
import TabPane from '@/package/components/tabs/pane.vue';
import vButton from '@/package/components/button/button.vue';

import Code from '@/public/code/tabs.js';

export default {
  components: {
    Tabs,
    TabPane,
    vButton
  },

  data() {
    return {
      moduleName: '附加内容',
      tabs: 2,
      Code: Code
    }
  },
  methods: {
    handleTabsAdd() {
      this.tabs++;
    }
  }
}

</script>
