<template>
  <ga-panel :moduleName="moduleName">
    {{button5}}
    <Radio-group v-model="button5">
      <Radio label="整体"></Radio>
      <Radio label="POP"></Radio>
      <Radio label="自营"></Radio>
    </Radio-group>
    <Radio-group v-model="button6" size="small" vertical>
      <Radio label="整体"></Radio>
      <Radio label="POP" disabled></Radio>
      <Radio label="自营"></Radio>
    </Radio-group>
    {{button6}}
    <v-code language="html">
      {{Code.sample}}
    </v-code>
  </ga-panel>
</template>
<script>

import Radio from '@/package/components/radio/radio.vue';
import RadioGroup from '@/package/components/radio/radio-group.vue';
import Code from '@/public/code/radio.js';
export default {
  components: {
    Radio,
    RadioGroup
  },

  data() {
    return {
      moduleName: '单选',
      button4: '',
      button5: 'POP',
      button6: '自营',
      radioData: [],
      Code:Code
    }
  },

  methods: {
    wq() {
      this.$nextTick(() => {
        this.button4 = '整体'

      })


      this.radioData = [{
        name: '整体',
        type: 'ALL'
      }, {
        name: '自营',
        type: 'SELF'
      }, {
        name: 'pop',
        type: 'POP'
      }]
    }
  }
}

</script>
