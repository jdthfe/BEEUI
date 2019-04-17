<template>
  <ga-panel :moduleName="moduleName">
    <contrasttime 
      :value="value1" 
      @out-date-all="outDateAll" 
      :radioList="radiolist" 
      placeholder="选择时间段"/>
    <contrasttime 
      :value="value1" 
      @out-date-all="outDateAll" 
      simple 
      placeholder="选择时间段"/>
    <v-code language="html">
      {{Code.base}}
    </v-code>
  </ga-panel>
</template>
<script>
import moment from 'moment'
import contrasttime from '@/package/components/contrasttime/contrasttime.vue';
import vButton from '@/package/components/button/button.vue';
import Radio from '@/package/components/radio/radio.vue';
import RadioGroup from '@/package/components/radio/radio-group.vue';
import Code from '@/public/code/contrasttime.js';

export default {
  components: {
    contrasttime,
    vButton,
    Radio,
    RadioGroup
  },

  data() {
    return {
      Code:Code,
      moduleName: '对比日期',
      value1: {
        label: '',
        value: ''
      },
      disabledselect: [],
      radiolist: [{
        value: '常规对比',
        label: 1
      }, {
        value: '大促对比',
        label: 2
      }]
    }
  },
  mounted() {
    this.value1 = {
      label: 1,
      value: moment().format('YYYY-MM-DD')
    }
  },
  methods: {
    outDateAll(val, type) {
      console.log(val, type)
    }
  }
}
</script>
