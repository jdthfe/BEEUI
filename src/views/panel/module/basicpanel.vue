<template>
  <ga-panel moduleName="基本使用">
    <g-panel
      :module-name="moduleName"
      :small-name="smallName"
      icon="person-stalker">
      文字内容介绍
    </g-panel>
    <v-code language="html" style="width:100%;clear:both">
      {{Code.base}}
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
