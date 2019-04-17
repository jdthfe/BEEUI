<template>
  <ga-panel :moduleName="moduleName">
    <div style="position:relative">
      <div style="float:left;margin-left:30px;margin-top:50px;">
        <Tooltip content="企鹅全文企鹅企鹅企鹅企鹅企鹅企鹅企鹅企鹅请问请问企鹅企鹅企鹅企鹅全文请问请问请问请问请问">
          <v-button>123123</v-button>
        </Tooltip>
      </div>
    </div>
    <div>
      <div class="top">
        <Tooltip :content="showTip">
          <v-button>上左</v-button>
        </Tooltip>
        <Tooltip content="Top Center 文字提示" placement="top">
          <v-button>上边</v-button>
        </Tooltip>
        <Tooltip content="Top Right 文字提示" placement="top-end">
          <v-button>上右</v-button>
        </Tooltip>
      </div>
      <div class="center">
        <div class="center-left">
          <Tooltip content="Left Top 文字提示" placement="left-start">
            <v-button>左上</v-button>
          </Tooltip>
          <br>
          <br>
          <Tooltip content="Left Center 文字提示" placement="left">
            <v-button>左边</v-button>
          </Tooltip>
          <br>
          <br>
          <Tooltip content="Left Bottom 文字提示" placement="left-end">
            <v-button>左下</v-button>
          </Tooltip>
        </div>
        <div class="center-right">
          <Tooltip content="Right Top 文字提示" placement="right-start">
            <v-button>右上</v-button>
          </Tooltip>
          <br>
          <br>
          <Tooltip content="Right Center 文字提示" placement="right">
            <v-button>右边</v-button>
          </Tooltip>
          <br>
          <br>
          <Tooltip content="Right Bottom 文字提示" placement="right-end">
            <v-button>右下</v-button>
          </Tooltip>
        </div>
      </div>
      <div class="bottom">
        <Tooltip content="Bottom Left 文字提示" placement="bottom-start">
          <v-button>下左</v-button>
        </Tooltip>
        <Tooltip content="Bottom Center 文字提示" placement="bottom">
          <v-button>下边</v-button>
        </Tooltip>
        <Tooltip content="Bottom Right 文字提示" placement="bottom-end">
          <v-button>下右</v-button>
        </Tooltip>
      </div>
    </div>
    <v-code language="html">
      {{Code.base}}
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
      moduleName: '基础显示',
      showTip: '口角是非森岛宽晃富士康地方',
      Code:Code

    }
  }
}

</script>
<style>
.ga-tooltip-inner {
  white-space: initial !important;
}

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
