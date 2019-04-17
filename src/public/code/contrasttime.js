let code = {};

code.base = `
<template>
    <ga-contrasttime :value="value1" @out-date-all="outDateAll" :radioList="radiolist" placeholder="选择时间段" style="width: 150px"/>
    <ga-contrasttime :value="value1" @out-date-all="outDateAll" simple placeholder="选择时间段" style="width: 150px"/>
  </template>
  <script>
  export default {
    data() {
      return {
        value1: {
          label: '',
          value: ''
        },
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
        label: '',
        value: '2017-07-24'
      }
    },

    methods: {
      outDateAll(val, type) {
        console.log(val, type)
      },
    }
  }
  </script>
`;

export default code;
