<template>
  <ga-panel :moduleName="moduleName">
    <v-steps :current="2" size="small">
      <v-step title="已完成"></v-step>
      <v-step title="进行中"></v-step>
      <v-step title="待进行"></v-step>
      <v-step title="待进行"></v-step>
    </v-steps>
    <v-code language="html">
      {{Code.simple}}
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
      moduleName: '简单样例',
      Code: Code
    }
  }
}

</script>
