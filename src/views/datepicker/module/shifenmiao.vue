<template>
  <ga-panel :moduleName="moduleName">
    <v-date-picker type="datetime" format="yyyy-MM-dd HH:mm:ss" placeholder="选择日期和时间" v-model="value"
                    @on-change="timeChange"></v-date-picker>
    {{value}}

    <v-code language="html">
      {{Code.shifenmiao}}
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
        moduleName: '时分秒',
        value: '',
        Code: Code
      }
    },
    methods: {
      timeChange(time) {
        console.log(time);
      }
    }
  }

</script>
