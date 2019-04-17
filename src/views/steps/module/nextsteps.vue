<template>
  <ga-panel :moduleName="moduleName">
    <p>当前正在进行第 {{ current + 1 }} 步</p>
    <v-steps :current="current">
      <v-step title="步骤1"></v-step>
      <v-step title="步骤2"></v-step>
      <v-step title="步骤3"></v-step>
      <v-step title="步骤4"></v-step>
    </v-steps>
    <v-button type="primary" @on-click="next">Next step</v-button>
    <v-code language="html">
      {{Code.next}}
    </v-code>
  </ga-panel>
</template>
<script>
import vStep from '@/package/components/steps/step.vue';
import vSteps from '@/package/components/steps/steps.vue';
import vButton from '@/package/components/button/button.vue';

import Code from '@/public/code/steps.js';

export default {
  components: {
    vStep,
    vSteps,
    vButton
  },

  data() {
    return {
      moduleName: '下一步样例',
      Code: Code,
      current: 0
    }
  },
  methods: {
    next() {
      if (this.current == 3) {
        this.current = 0;
      } else {
        this.current += 1;
      }
    }
  }
}

</script>
