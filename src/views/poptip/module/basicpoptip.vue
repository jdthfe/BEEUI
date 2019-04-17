<template>
  <ga-panel moduleName="基本使用">
    <ga-poptip trigger="hover" title="提示标题" content="提示内容">
        <ga-button>hover 激活</ga-button>
    </ga-poptip>
    <ga-poptip title="提示标题" content="提示内容">
        <ga-button>click 激活</ga-button>
    </ga-poptip>
    <ga-poptip trigger="focus" title="提示标题" content="提示内容">
        <ga-input placeholder="输入框的 focus"></ga-input>
    </ga-poptip>
    <v-code language="html" style="width:100%;clear:both">
      {{Code.base}}
    </v-code>
  </ga-panel>
</template>
<script>
import gaPoptip from '@/package/components/poptip/poptip.vue';
import gaButton from '@/package/components/button/button.vue';
import gaInput from '@/package/components/input/input.vue';

import Code from '@/public/code/poptip.js';

export default {
  components: {
    gaPoptip,
    gaButton,
    gaInput
  },
  data() {
    return {
      Code: Code,
    }
  }
}

</script>
