<template>
  <ga-panel :moduleName="moduleName">
    <ga-affix>
      <span class="demo-affix">固定在最顶部</span>
    </ga-affix>
    <ga-affix :offset-top="50">
      <span class="demo-affix">固定在距离顶部 50px 的位置</span>
    </ga-affix>
    <ga-affix :offset-top="100" @on-change="change">
      <span class="demo-affix">固定在距离顶部 100px 的位置</span>
    </ga-affix>
    <v-code language="html">
      {{Code.base}}
    </v-code>
  </ga-panel>
</template>

<script>
import gaAffix from '@/package/components/affix/affix.vue';
import Message from '@/package/components/message/index.js';
import Code from '@/public/code/affix.js';
export default {
  components: {
    gaAffix
  },

  data() {
    return {
      moduleName: '基本使用',
      Code:Code
    }
  },
  methods: {
    change(status) {
      Message.info(`当前状态：${status}`);
    }
  }
}

</script>
<style scoped>
body {
  height: 3000px;
}

.demo-affix {
  display: inline-block;
  color: rgb(255, 255, 255);
  text-align: center;
  padding: 10px 30px;
  background: rgba(0, 153, 229, 0.901961);
}
</style>
