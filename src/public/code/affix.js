let code = {};

code.base = `
<template>
    <ga-affix>
      <span class="demo-affix">固定在最顶部</span>
    </ga-Affix>
    <ga-affix :offset-top="50">
      <span class="demo-affix">固定在距离顶部 50px 的位置</span>
    </ga-affix>
    <ga-affix 
      :offset-top="100" 
      @on-change="change">
      <span class="demo-affix">固定在距离顶部 100px 的位置</span>
    </ga-affix>
</template>
<script>
    export default {
      methods: {
        change(status) {
          Message.info('当前状态：status');
        }
      }
    }
</script>
`;

export default code;
