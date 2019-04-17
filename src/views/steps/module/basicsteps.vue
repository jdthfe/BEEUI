<template>
  <ga-panel :moduleName="moduleName">
    <v-steps :current="1">
      <v-step title="已完成" content="这里是该步骤的描述信息"></v-step>
      <v-step title="进行中" content="这里是该步骤的描述信息"></v-step>
      <v-step title="待进行" content="这里是该步骤的描述信息"></v-step>
      <v-step title="待进行" content="这里是该步骤的描述信息"></v-step>
    </v-steps>
    <v-code language="html">
      {{Code.base}}
    </v-code>
  </ga-panel>
</template>
<script>
import vStep from '@/package/components/steps/step.vue';
import vSteps from '@/package/components/steps/steps.vue';

import Code from '@/public/code/steps.js';

export default {
  components: {
    vStep,
    vSteps
  },

  data() {
    return {
      moduleName: '基本使用',
      Code:Code
    }
  }
}

</script>
