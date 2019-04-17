<template>
  <ga-panel :moduleName="moduleName">
    <v-date-picker type="date" v-model="value1" :options='options1' placeholder="选择日期"
                   />
    <v-date-picker type="month" v-model="value2" :options='options2' placeholder="选择月"
                   />
    <v-code language="html">
      {{Code.disabled}}
    </v-code>
  </ga-panel>
</template>
<script>
  import vDatePicker from '@/package/components/date-picker/index';
  import Code from '@/public/code/datepicker.js';

  export default {
    components: {
      vDatePicker
    },

    data() {
      return {
        moduleName: '不可选日期',
        value1: '',
        value2: '',
        Code: Code,
        options1: {
          disabledDate(date) {
            return date && date.valueOf() < Date.now() - 86400000 || date.valueOf() > Date.now() + 1889119625;
          }
        },
        options2: {
          disabledDate(date) {
            return date && date.valueOf() < Date.now() - 86400000 || date.valueOf() > Date.now() + 2889119625;
          }
        }
      }
    }
  }
</script>
