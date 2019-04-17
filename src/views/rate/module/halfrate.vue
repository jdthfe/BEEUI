<template>
  <ga-panel :moduleName="moduleName">
    <g-rate 
      allow-half 
      v-model="value1"/>
    <v-code language="html">
      {{Code.half}}
    </v-code>
  </ga-panel>
</template>
<script>
import gRate from '@/package/components/rate/rate.vue';
import Code from '@/public/code/rate.js';
export default {
  components: {
    gRate
  },

  data() {
    return {
      moduleName: '半星',
      Code:Code,
      value1: 2.5
    }
  },
  mounted() {
  },

  methods: {
  
  }
}

</script>
