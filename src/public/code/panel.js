let code = {};

code.base = `
<template>
  <ga-panel
    :moduleName="moduleName"
    :smallName="smallName"
    :icon="icon">
    文字内容介绍
  </ga-panel>
</template>
<script>
    export default {
      data() {
        return {
          moduleName: '主标题',
          smallName: '副标题',
          icon: 'person-stalker'
        }
      }
    }
</script>
`;

code.simple = `
<template>
  <ga-panel simple>
    文字内容介绍
  </ga-panel>
</template>
<script>
    export default {
      data() {
        return {
        }
      }
    }
</script>
`;

export default code;
