let code = {};

code.basic = `
<template>
    <ga-row>
      <p>带描述信息</p>
      <ga-button @on-click="info(false)">消息</ga-button>
      <ga-button @on-click="success(false)">成功</ga-button>
      <ga-button @on-click="warning(false)">警告</ga-button>
      <ga-button @on-click="error(false)">错误</ga-button>
      <p>仅标题</p>
      <ga-button @on-click="info(true)">消息</ga-button>
      <ga-button @on-click="success(true)">成功</ga-button>
      <ga-button @on-click="warning(true)">警告</ga-button>
      <ga-button @on-click="error(true)">错误</ga-button>
    </ga-row>
</template>
<script>
  export default {
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
`;

code.other = `
<template>
    <ga-button @on-click="open()">open方法</ga-button>
    <ga-button @on-click="close()">close方法</ga-button>
</template>
<script>
  export default {
    methods: {
      open() {
        Notice.open({
          top: 50,
          duration: 3,
          name: 'aa',
          desc: '内容',
          title: '我是标题'
        })
      },
      close() {
        Notice.close('aa')
      }
    }
  }

</script>
`;

export default code;
