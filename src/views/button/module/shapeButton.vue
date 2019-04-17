<template>
    <ga-panel :moduleName="moduleName">
        <ga-row>
            <p>通过设置shape属性为circle，可将按钮置为圆的形状</p>
            <ga-button shape="circle" icon="ios-search">Default</ga-button>
            <ga-button type="primary" shape="circle">基础按钮</ga-button>
            <ga-button type="success" shape="circle">成功按钮</ga-button>
            <ga-button type="warning" shape="circle">警告按钮</ga-button>
            <ga-button type="error" shape="circle">错误按钮</ga-button>
            <ga-button disabled shape="circle">Default</ga-button>
            <ga-button type="primary" disabled shape="circle">基础按钮</ga-button>
        </ga-row>
        <v-code language="html">
          {{Code.shape}}
        </v-code>
    </ga-panel>
</template>
<script>
import gaButton from "@/package/components/button/button.vue";

import Code from "@/public/code/button.js";

export default {
  components: {
    gaButton
  },
  data() {
    return {
      moduleName: "圆角按钮",
      Code: Code
    };
  }
};
</script>
