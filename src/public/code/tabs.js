let code = {};

code.base = `
<template>
    <ga-tabs value="name1" :animated="false">
      <ga-tab-pane label="标签一" name="name1">标签一的内容</ga-tab-pane>
      <ga-tab-pane label="标签二" name="name2">标签二的内容</ga-tab-pane>
      <ga-tab-pane label="标签三" name="name3">标签三的内容</ga-tab-pane>
    </ga-tabs>
</template>
`;

code.card = `
<template>
  <ga-tabs type="card">
      <ga-tab-pane label="标签一">标签一的内容</ga-tab-pane>
      <ga-tab-pane label="标签二">标签二的内容</ga-tab-pane>
      <ga-tab-pane label="标签三">标签三的内容</ga-tab-pane>
  </ga-tabs>
</template>
`;

code.close = `
<template>
  <ga-tabs type="card" closable @on-tab-remove="handleTabRemove">
      <ga-tab-pane label="标签一" v-if="tab0">标签一的内容</ga-tab-pane>
      <ga-tab-pane label="标签二" v-if="tab1">标签二的内容</ga-tab-pane>
      <ga-tab-pane label="标签三" v-if="tab2">标签三的内容</ga-tab-pane>
  </ga-tabs>
</template>
<script>
  export default {
      data () {
          return {
              tab0: true,
              tab1: true,
              tab2: true
          }
      },
      methods: {
          handleTabRemove (name) {
              this['tab' + name] = false;
          }
      }
  }
</script>
`;

code.add = `
<template>
    <ga-tabs type="card">
        <ga-tab-pane v-for="tab in tabs" :key="tab" :label="'标签' + tab">标签</ga-tab-pane>
        <ga-button type="ghost" @on-click="handleTabsAdd" size="small" slot="extra" :disabled="tabs > 3">增加</ga-button>
    </ga-tabs>
</template>
<script>
export default {
    data () {
        return {
            tabs: 2
        }
    },
    methods: {
        handleTabsAdd () {
            this.tabs ++;
        }
    }
}
</script>
`;

export default code;
