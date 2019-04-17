<template>
  <ga-panel :moduleName="moduleName">
    <v-badge dot>
        <a href="#" class="demo-badge"></a>
    </v-badge>
    <v-badge dot>
        <v-icon type="ios-bell-outline" size="26"></v-icon>
    </v-badge>
    <v-badge dot>
        <a href="#">可以是一个链接</a>
    </v-badge>
    <v-code language="html">
      {{Code.dot}}
    </v-code>
  </ga-panel>
</template>
<style>
.demo-badge {
  width: 42px;
  height: 42px;
  background: #eee;
  border-radius: 6px;
  display: inline-block;
}

</style>
<script>
import vBadge from '@/package/components/badge/badge.vue';
import vIcon from '@/package/components/icon/icon.vue';

import Code from '@/public/code/badge.js';

export default {
  components: {
    vBadge,
    vIcon
  },

  data() {
    return {
      moduleName: '显示红点',
      Code: Code
    }
  }
}

</script>
