<template>
  <ga-panel :moduleName="moduleName">
    <Tooltip placement="top" @on-popper-hide="popperHide">
      <v-button>多行</v-button>
      <div slot="content">
        <p>显示多行信息</p>
        <p><i>可以自定义样式</i></p>
      </div>
    </Tooltip>
    <Tooltip placement="top" content="Tooltip 文字提示" :delay="1000" >
      <v-button @on-click="disabled = true">延时1秒显示</v-button>
    </Tooltip>
    <v-code language="html">
      {{Code.zdy}}
    </v-code>
  </ga-panel>
</template>
<script>

import Tooltip from '@/package/components/tooltip/tooltip.vue';
import vButton from '@/package/components/button/button.vue';
import Icon from '@/package/components/icon/icon.vue'

import Code from '@/public/code/tooltip.js';

export default {
  components: {
    Tooltip,
    vButton,
    Icon
  },

  data() {
    return {
      moduleName: '自定义显示',
      showTip: '口角是非森岛宽晃富士康地方',
      Code:Code

    }
  },
  methods: {
    popperHide() {
      /**
       * do something
       */
    },
  }
}

</script>
<style scoped>
.top,
.bottom {
  text-align: center;
}

.center {
  width: 300px;
  margin: 10px auto;
  overflow: hidden;
}

.center-left {
  float: left;
}

.center-right {
  float: right;
}

</style>
