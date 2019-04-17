<template>
  <ga-panel :moduleName="moduleName">
    <ga-row>
      <p>按钮类型有:通过设置type为primary、success、warning、error创建不同样式的按钮，不设置为默认样式。通过添加disabled属性可将按钮设置为不可用状态。</p>
      <ga-button icon="ios-search">Default</ga-button>
      <ga-button type="primary">基础按钮</ga-button>
      <ga-button type="success">成功按钮</ga-button>
      <ga-button type="warning">警告按钮</ga-button>
      <ga-button type="error">错误按钮</ga-button>
      <ga-button disabled>Default</ga-button>
      <ga-button type="primary" disabled>基础按钮</ga-button>
    </ga-row>
    <v-code language="html">
      {{Code.type}}
    </v-code>
  </ga-panel>
</template>
<script>
import gaButton from '@/package/components/button/button.vue';
import Code from '@/public/code/button.js';
export default {
  components: {
    gaButton
  },
  data() {
    return {
      moduleName: '基础按钮',
      Code:Code
    }
  }
}

</script>
