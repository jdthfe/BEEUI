<template>
  <ga-panel :moduleName="moduleName">
    <p>设置属性 autosize，文本域会自动适应高度的变化。autosize也可以设定为一个对象，指定最小行数和最大行数。</p>
    <ga-input v-model="value7" type="textarea" :autosize="true" placeholder="请输入..."></ga-input>
    <ga-input v-model="value8" type="textarea" disabled :autosize="{minRows: 2,maxRows: 5}" placeholder="请输入..."></ga-input>
    <v-code language="html">
      {{Code.autosize}}
    </v-code>
  </ga-panel>
</template>
<script>
import gaInput from '@/package/components/input/input.vue';

import Code from '@/public/code/input.js';

export default {
  components: {
    gaInput
  },

  data() {
    return {
      moduleName: 'autosize',
      value7: '',
      value8: '',
      Code:Code
    }
  }
}

</script>
