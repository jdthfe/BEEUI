<template>
  <ga-panel :moduleName="moduleName">
    <ga-row>
      <ga-col class="demo-spin-col">
        <ga-spin :fix='fix'>
          <ga-icon type="load-c" size=22 class="demo-spin-icon-load"></ga-icon>
          <div class="loading-text">loading</div>
        </ga-spin>
      </ga-col>
    </ga-row>
    <v-code language="html">
      {{Code.zdy}}
    </v-code>
  </ga-panel>
</template>
<style>
.demo-spin-icon-load {
  animation: ani-demo-spin 1s linear infinite;
}

@keyframes ani-demo-spin {
  from {
    transform: rotate(0deg);
  }
  50% {
    transform: rotate(180deg);
  }
  to {
    transform: rotate(360deg);
  }
}

.demo-spin-col {
  height: 100px;
  position: relative;
  border: 1px solid #eee;
}

</style>
<script>
import gaSpin from '@/package/components/spin/spin.vue';
import gaIcon from '@/package/components/icon/icon.vue';
import Code from '@/public/code/spin.js';

export default {
  components: {
    gaSpin,
    gaIcon
  },

  data() {
    return {
      moduleName: '自定义用法',
      fix: true,
      Code:Code
    }
  },
}

</script>
