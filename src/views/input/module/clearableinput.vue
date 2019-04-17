<template>
  <ga-panel :moduleName="moduleName">
    <ga-row>
      <ga-input 
        v-model="value" 
        :maxlength="20" 
        @on-change="changeValue" 
        placeholder="请输入..."
        width="200"
        clearable/>
    </ga-row>
    <v-code language="html">
      {{Code.clear}}
    </v-code>
  </ga-panel>
</template>
<script>
import gaInput from '@/package/components/input/input.vue';

import Code from '@/public/code/input.js';

export default {
  components: {
    gaInput,
  },

  data() {
    return {
      moduleName: 'clear关闭',
      value: '',
      Code:Code
    }
  },

  methods: {
    changeValue(val) {

    }
  }
}

</script>
