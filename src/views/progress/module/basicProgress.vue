<template>
  <ga-panel :moduleName="moduleName">
    <v-progress percent='20%' :stroke-width="10" status="active"></v-progress>
    <v-progress percent="65%" status="wrong"></v-progress>
    <v-progress percent="25%" hide-info></v-progress>
    <v-progress percent="100%"></v-progress>
    <v-progress percent="25%" :stroke-width="5"></v-progress>
    <v-progress percent="100%">
      <Icon type="checkmark-circled"></Icon>
      <span>成功</span>
    </v-progress>
    <v-code language="html">
      {{Code.base}}
    </v-code>
  </ga-panel>
</template>
<script>

import vProgress from '@/package/components/progress/progress.vue';
import Icon from '@/package/components/icon/icon.vue';
import Code from '@/public/code/progress.js';

export default {
  components: {
    vProgress,
    Icon
  },

  data() {
    return {
      moduleName: '进度条',
      compare: '20%',
      Code:Code
    }
  }
}

</script>
