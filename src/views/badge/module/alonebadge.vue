<template>
  <ga-panel :moduleName="moduleName">
    <v-badge count="10"></v-badge>
    <v-badge count="20" class-name="demo-badge-alone"></v-badge>
    <v-code language="html">
      {{Code.alone}}
    </v-code>
  </ga-panel>
</template>
<style>
.demo-badge-alone {
  background: #5cb85c !important;
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
