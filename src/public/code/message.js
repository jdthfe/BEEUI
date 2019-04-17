let code = {};

code.base = `
  <template>
      <ga-button type="primary" @on-click="info">显示普通提醒</ga-button>
      <ga-button @on-click="success">显示成功提示</ga-button>
      <ga-button @on-click="warning">显示警告提示</ga-button>
      <ga-button @on-click="error">显示错误提示</ga-button>
      <ga-button @on-click="loading">显示加载中...</ga-button>
      <ga-button @on-click="time">显示一个10秒的提示</ga-button>
  </template>
  <script>
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
  </script>
`;


export default code;
