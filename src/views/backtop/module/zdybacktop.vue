<template>
  <ga-panel :moduleName="moduleName">
    <ga-back-top :height="100" :bottom="200">
      <div class="zdytop">返回顶端</div>
    </ga-back-top>
    <v-code language="html">
      {{Code.zdy}}
    </v-code>
  </ga-panel>
</template>
<style scoped>
.zdytop {
  padding: 10px;
  background: rgba(0, 153, 229, .7);
  color: #fff;
  text-align: center;
  border-radius: 2px;
}

</style>
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
      Code: Code
    }
  }
}

</script>
