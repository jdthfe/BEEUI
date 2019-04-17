<template>
    <ga-panel :moduleName="moduleName">
        <ga-row>
            <p>按钮有三种尺寸：大、默认（中）、小,通过设置size为large和small将按钮设置为大和小尺寸，不设置为默认（中）尺寸。</p>
            <p>通过设置属性 long 可将按钮宽度设置为 100%，常用于弹窗内操作按钮。使用者也可以直接通过给组件添加 style 来设置更细节的样式，比如定宽。</p>
            <ga-button type="primary" size="large">Large</ga-button>
            <ga-button type="primary">Default</ga-button>
            <ga-button type="primary" size="small">Small</ga-button>
            <br><br>
            <ga-button type="primary" shape="circle" size="large">Large</ga-button>
            <ga-button type="primary" shape="circle">Default</ga-button>
            <ga-button type="primary" shape="circle" size="small">Small</ga-button>
            <br><br>
            <ga-button type="success" long>确认提交</ga-button>
            <ga-button type="error" long>确认删除</ga-button>
        </ga-row>
        <v-code language="html">
          {{Code.size}}
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
      moduleName: '按钮尺寸',
      Code:Code
    }
  }
}
</script>
