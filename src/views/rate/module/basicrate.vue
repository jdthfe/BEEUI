<template>
  <ga-panel :moduleName="moduleName">
    <g-rate v-model="value"></g-rate>
    <v-code language="html">
      {{Code.base}}
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
      moduleName: '基本使用',
      Code:Code,
      value: 0
    }
  },
  mounted() {
  },

  methods: {
  
  }
}

</script>
