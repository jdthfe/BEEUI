<template>
  <ga-panel :moduleName="moduleName">
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
    <v-code language="html">
      {{Code.base}}
    </v-code>
  </ga-panel>
</template>
<script>
import gaSlider from '@/package/components/slider/slider.vue';
import Code from '@/public/code/slider.js';
export default {
  components: {
    gaSlider,
  },
  data() {
    return {
      moduleName: '基本用法',
      Code: Code,
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
