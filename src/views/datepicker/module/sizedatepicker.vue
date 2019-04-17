<template>
  <ga-panel :moduleName="moduleName">
    <v-date-picker type="date" size="small" placeholder="选择日期" ></v-date-picker>
    <v-date-picker type="date" placeholder="选择日期" ></v-date-picker>
    <v-date-picker type="date" size="large" placeholder="选择日期" ></v-date-picker>

    <v-code language="html">
      {{Code.size}}
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
        moduleName: '控件尺寸',
        Code: Code
      }
    }
  }
</script>
