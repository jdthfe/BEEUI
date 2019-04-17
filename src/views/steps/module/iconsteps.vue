<template>
  <ga-panel :moduleName="moduleName">
    <v-steps :current="1">
      <v-step title="注册" icon="person-add"></v-step>
      <v-step title="上传头像" icon="camera"></v-step>
      <v-step title="验证邮箱" icon="email"></v-step>
    </v-steps>
    <v-code language="html">
      {{Code.icon}}
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
      moduleName: 'icon样例',
      Code: Code
    }
  }
}

</script>
