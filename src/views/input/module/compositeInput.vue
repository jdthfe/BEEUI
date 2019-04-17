<template>
  <ga-panel :moduleName="moduleName">
    <ga-input v-model="value4" width="300">
      <ga-select v-model="select1" slot="prepend" style="width: 80px">
        <ga-option value="http">http://</ga-option>
        <ga-option value="https">https://</ga-option>
      </ga-select>
      <ga-select v-model="select2" slot="append" style="width: 70px">
        <ga-option value="com">.com</ga-option>
        <ga-option value="org">.org</ga-option>
        <ga-option value="io">.io</ga-option>
      </ga-select>
    </ga-input>
    <v-code language="html">
      {{Code.icon2}}
    </v-code>
  </ga-panel>
</template>
<script>
import gaInput from '@/package/components/input/input.vue';
import gaSelect from '@/package/components/select/select.vue';
import gaOption from '@/package/components/select/option.vue';

import Code from '@/public/code/input.js';

export default {
  components: {
    gaInput,
    gaSelect,
    gaOption
  },

  data() {
    return {
      moduleName: '组合',
      value4: '',
      select1: 'http',
      select2: 'com',
      Code: Code
    }
  },
  methods: {
    onChangeFn(val) {
      this.changeValue = val
    }
  }
}

</script>
