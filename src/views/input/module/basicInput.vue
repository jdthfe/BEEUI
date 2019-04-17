<template>
  <ga-panel :moduleName="moduleName">
    <ga-row>
      <p>输入框类型，可选值为 text、password 或 textarea，通过添加disabled属性可将按钮设置为不可用状态。</p>
      <ga-input 
        v-model="value" 
        :maxlength="20" 
        @on-change="changeValue" 
        placeholder="请输入..."
        width="300"/>
    </ga-row>
    <v-code language="html">
      {{Code.base}}
    </v-code>
  </ga-panel>
</template>
<script>
import gaInput from '@/package/components/input/input.vue';
import { formatMoney, unformatMoney } from '@/public/utils/utils';
import Code from '@/public/code/input.js';
export default {
  components: {
    gaInput,
  },
  data() {
    return {
      moduleName: '基础输入框',
      value: '',
      Code:Code
    }
  },
  methods: {
    changeValue(val) {
      this.value = formatMoney(unformatMoney(val.target.value));
    }
  }
}

</script>
