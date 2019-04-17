<template>
  <ga-panel :moduleName="moduleName">
    <v-button type="primary" @on-click="info">显示普通提醒</v-button>
    <v-button @on-click="success">显示成功提示</v-button>
    <v-button @on-click="warning">显示警告提示</v-button>
    <v-button @on-click="error">显示错误提示</v-button>
    <v-button @on-click="loading">显示加载中...</v-button>
    <v-button @on-click="time">显示一个10秒的提示</v-button>
    <v-code language="html">
      {{Code.base}}
    </v-code>
  </ga-panel>
</template>
<script>
import vButton from '@/package/components/button/button.vue';
import Icon from '@/package/components/icon/icon.vue';
import Message from '@/package/components/message/index.js';
import Code from '@/public/code/message.js';

export default {
  components: {
    vButton,
    Icon
  },

  data() {
    return {
      moduleName: '普通提示',
      Code:Code
    }
  },

  methods: {
    info() {
      Message.info('这是一条普通的提醒');
    },
    success() {
      Message.success('这是一条成功的提示');
    },
    warning() {
      Message.warning('这是一条警告的提示');
    },
    error() {
      Message.error('对方不想说话，并且向你抛出了一个异常');
    },
    loading() {
      const msg = Message.loading({
        content: '正在加载中...',
        duration: 0
      });
      setTimeout(msg, 3000);
    },
    time() {
      Message.info({
        content: '我将在10秒后消失',
        duration: 10
      });
    },
  }
}

</script>
