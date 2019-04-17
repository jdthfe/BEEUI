<template>
  <ga-panel moduleName="model使用">
    <ga-poptip v-model="visible">
        <a>click 激活</a>
        <div slot="title"><i>自定义标题</i></div>
        <div slot="content">
            <a @click="close">关闭提示框</a>
        </div>
    </ga-poptip>
    <v-code language="html" style="width:100%;clear:both">
      {{Code.base}}
    </v-code>
  </ga-panel>
</template>
<script>
import gaPoptip from "@/package/components/poptip/poptip.vue";

import Code from "@/public/code/poptip.js";

export default {
  components: {
    gaPoptip
  },
  data() {
    return {
      Code: Code,
      visible: false
    };
  },
  methods: {
    close() {
      this.visible = false;
    }
  }
};
</script>
