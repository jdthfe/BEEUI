<template>
  <ga-panel :moduleName="moduleName" :moduleIcon="moduleIcon">
    <ga-row>
      <p>带描述信息</p>
      <v-button @on-click="info(false)">消息</v-button>
      <v-button @on-click="success(false)">成功</v-button>
      <v-button @on-click="warning(false)">警告</v-button>
      <v-button @on-click="error(false)">错误</v-button>
      <p>仅标题</p>
      <v-button @on-click="info(true)">消息</v-button>
      <v-button @on-click="success(true)">成功</v-button>
      <v-button @on-click="warning(true)">警告</v-button>
      <v-button @on-click="error(true)">错误</v-button>

      <v-code language="html">
        {{Code.basic}}
      </v-code>
    </ga-row>
  </ga-panel>
</template>
<script>

  import Notice from '@/package/components/notice/index';
  import vButton from '@/package/components/button/button.vue';
  import Code from '@/public/code/notice.js';

  export default {
    components: {
      vButton
    },

    data() {
      return {
        moduleName: '基本使用',
        moduleIcon: '',
        Code: Code

      }
    },
    methods: {
      info(nodesc) {
        Notice.info({
          title: 'Notification title',
          desc: nodesc ? '' : 'Here is the notification description. Here is the notification description. '
        });
      },
      success(nodesc) {
        Notice.success({
          title: 'Notification title',
          desc: nodesc ? '' : 'Here is the notification description. Here is the notification description. '
        });
      },
      warning(nodesc) {
        Notice.warning({
          title: 'Notification title',
          desc: nodesc ? '' : 'Here is the notification description. Here is the notification description. '
        });
      },
      error(nodesc) {
        Notice.error({
          title: 'Notification title',
          desc: nodesc ? '' : 'Here is the notification description. Here is the notification description. '
        });
      }
    }
  }

</script>
