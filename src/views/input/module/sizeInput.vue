<template>
  <ga-panel :moduleName="moduleName">
    <p>输入框有三种尺寸：大、默认（中）、小通过设置size为large和small设置为大和小尺寸，不设置为默认（中）尺寸。</p>
    <ga-input v-model="value1" size="large" placeholder="large size"></ga-input>
    <br>
    <ga-input v-model="value2" placeholder="default size"></ga-input>
    <br>
    <ga-input v-model="value3" size="small" placeholder="small size"></ga-input>
    <v-code language="html">
      {{Code.size}}
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
      moduleName: 'input尺寸',
      value1: '',
      value2: '',
      value3: '',
      Code:Code
    }
  },

  methods: {
    onChangeFn(val) {
      this.changeValue = val
    }
  }
}

</script>
