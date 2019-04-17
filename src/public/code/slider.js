let code = {};

code.base=`
<template>
    <ga-row>
      <ga-col>
        <ga-slider v-model="value1"></ga-slider>
        <ga-slider v-model="value2" range></ga-slider>
        <ga-slider v-model="value3" range disabled></ga-slider>
        <ga-slider v-model="value4" :step="10"></ga-slider>
        <ga-slider v-model="value5" :step="10" range></ga-slider>
        <ga-slider v-model="value6" :step="10" show-stops></ga-slider>
        <ga-slider v-model="value8" show-input></ga-slider>
        <ga-slider v-model="value9" :tip-format="format"></ga-slider>
        <ga-slider v-model="value10" :tip-format="hideFormat"></ga-slider>
      </ga-col>
    </ga-row>
</template>
<script>
export default {
  data() {
    return {
      value1: 25,
      value2: [20, 50],
      value3: [20, 50],
      value4: 30,
      value5: [20, 50],
      value6: 30,
      value8: 25,
      value9: 25,
      value10: 25
    }
  },
  methods: {
    format (val) {
      return 'Progress: ' + val + '%';
    },
    hideFormat () {
      return null;
    }
  }
}
</script>
`;
export default code;
