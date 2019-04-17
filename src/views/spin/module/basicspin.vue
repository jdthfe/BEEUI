<template>
  <ga-panel :moduleName="moduleName">
    <ga-row>
      <ga-col class="demo-spin-col">
        <ga-spin :fix='fix'>
        </ga-spin>
      </ga-col>
    </ga-row>
    <v-code language="html">
      {{Code.base}}
    </v-code>
  </ga-panel>
</template>
<style>
.demo-spin-col {
  height: 100px;
  position: relative;
  border: 1px solid #eee;
}

</style>
<script>
import gaSpin from '@/package/components/spin/spin.vue';
import Code from '@/public/code/spin.js';

export default {
  components: {
    gaSpin,
  },

  data() {
    return {
      moduleName: '基本用法',
      fix: true,
      Code: Code
    }
  },
}

</script>
