let code = {};

code.base = `
<template>
  <div>
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
  </div>
</template>
<script>

export default {
  data() {
    return {
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
`;

code.tab = `
<template>
    <ga-switch size="large" tab>
        <span slot="open">热力</span>
        <span slot="close">地图</span>
    </ga-switch>
</template>
<script>
export default {
};
</script>

`

export default code;
