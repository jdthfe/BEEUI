<template>
  <ga-panel :moduleName="moduleName">
    <v-badge count="3">
      <a href="#" class="demo-badge"></a>
    </v-badge>
    <v-code language="html">
      {{Code.base}}
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

import Code from '@/public/code/badge.js';

export default {
  components: {
    vBadge
  },

  data() {
    return {
      moduleName: '基本使用',
      Code: Code
    }
  }
}

</script>
