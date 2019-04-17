<template>
  <ga-panel :moduleName="moduleName">
    <v-date-picker type="date" confirm v-model="value1" placeholder="选择日期"/>
    <v-date-picker type="daterange" confirm v-model="value2" placeholder="选择日期区间"/>

    <v-code language="html">
      {{Code.confirm}}
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
        moduleName: '带确定按钮',
        value1: '',
        value2: '',
        Code: Code
      }
    }
  }
</script>

