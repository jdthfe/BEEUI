<template>
  <ga-panel moduleName="精简使用">
    <g-panel simple>
      文字内容介绍
    </g-panel>
    <v-code language="html" style="width:100%;clear:both">
      {{Code.simple}}
    </v-code>
  </ga-panel>
</template>
<script>
import gPanel from '@/package/components/panel/panel.vue';
import Code from '@/public/code/panel.js';

export default {
  components: {
    gPanel,
  },
  data() {
    return {
      Code: Code,
      moduleName: '主标题',
      smallName: '副标题'
    }
  }
}

</script>
