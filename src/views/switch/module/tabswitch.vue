<template>
  <ga-panel :moduleName="moduleName">
    <ga-switch size="large" tab>
        <span slot="open">热力</span>
        <span slot="close">地图</span>
    </ga-switch>
    <v-code language="html">
      {{Code.tab}}
    </v-code>
  </ga-panel>
</template>
<script>
import gaSwitch from "@/package/components/switch/switch.vue";
import Code from "@/public/code/switch.js";

export default {
  components: {
    gaSwitch,
  },

  data() {
    return {
      moduleName: "tab配置项使用",
      Code: Code,
    };
  }
};
</script>
