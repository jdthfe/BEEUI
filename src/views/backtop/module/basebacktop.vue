<template>
  <ga-panel :moduleName="moduleName">
    <ga-back-top></ga-back-top>
    <v-code language="html">
      {{Code.base}}
    </v-code>
  </ga-panel>
</template>
<script>

import gaBackTop from '@/package/components/back-top/back-top.vue';

import Code from '@/public/code/backtop.js';

export default {
  components: {
    gaBackTop
  },

  data() {
    return {
      moduleName: '基本使用',
      Code:Code
    }
  }
}

</script>
