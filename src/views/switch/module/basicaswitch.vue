<template>
  <ga-panel :moduleName="moduleName">
    <ga-switch v-model="switch1" @on-change="change" />
    <ga-switch>
        <span slot="open">开</span>
        <span slot="close">关</span>
    </ga-switch>
    <ga-switch>
        <ga-icon type="android-done" slot="open"></ga-icon>
        <ga-icon type="android-close" slot="close"></ga-icon>
    </ga-switch>
    <br><br>
    <ga-switch size="large">
        <span slot="open">开启</span>
        <span slot="close">关闭</span>
    </ga-switch>
    <ga-switch size="large">
        <span slot="open">ON</span>
        <span slot="close">OFF</span>
    </ga-switch>
    <v-code language="html">
      {{Code.base}}
    </v-code>
  </ga-panel>
</template>
<script>
import gaSwitch from "@/package/components/switch/switch.vue";
import gaIcon from "@/package/components/icon/icon.vue";
import Message from "@/package/components/message/index.js";

import Code from "@/public/code/switch.js";

export default {
  components: {
    gaSwitch,
    gaIcon
  },

  data() {
    return {
      moduleName: "基本使用",
      Code: Code,
      switch1: false
    };
  },
  methods: {
    change(status) {
      Message.info("开关状态：" + status);
    }
  }
};
</script>
