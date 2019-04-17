let code = {}

code.base = `
<template>
  <div>
    <ga-poptip trigger="hover" title="提示标题" content="提示内容">
        <ga-button>hover 激活</ga-button>
    </ga-poptip>
    <ga-poptip title="提示标题" content="提示内容">
        <ga-button>click 激活</ga-button>
    </ga-poptip>
    <ga-poptip trigger="focus" title="提示标题" content="提示内容">
        <ga-input placeholder="输入框的 focus"></ga-input>
    </ga-poptip>
  </div>
</template>
<script>
export default {
}

</script>
`

code.model = `
<template>
    <ga-poptip v-model="visible">
        <a>click 激活</a>
        <div slot="title"><i>自定义标题</i></div>
        <div slot="content">
            <a @click="close">关闭提示框</a>
        </div>
    </ga-poptip>
</template>
<script>

export default {
  data() {
    return {
      visible: false
    };
  },
  methods: {
    close() {
      this.visible = false;
    }
  }
};
</script>

`

code.slot = `
<template>
    <ga-poptip placement="right" width="400">
        <ga-button type="ghost">click 激活</ga-button>
        <div class="api" slot="content">
            <table>
                <thead>
                    <tr>
                        <th>版本号</th>
                        <th>更新时间</th>
                        <th>说明</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>0.9.5</td>
                        <td>2016-10-26</td>
                        <td>新增信息提示组件 <code>Tooltip</code>和<code>Poptip</code></td>
                    </tr>
                    <tr>
                        <td>0.9.4</td>
                        <td>2016-10-25</td>
                        <td>新增对话框组件 <code>Modal</code></td>
                    </tr>
                    <tr>
                        <td>0.9.2</td>
                        <td>2016-09-28</td>
                        <td>新增选择器组件 <code>Select</code></td>
                    </tr>
                </tbody>
            </table>
        </div>
    </ga-poptip>
</template>
<script>
export default {
};
</script>

`

code.confirm = `
<template>
    <ga-poptip
        confirm
        title="您确认删除这条内容吗？"
        @on-ok="ok"
        @on-cancel="cancel">
        <ga-button>删除</ga-button>
    </ga-poptip>
</template>
<script>
export default {
  methods: {
    ok() {
      Message.info("点击了确定");
    },
    cancel() {
      Message.info("点击了取消");
    }
  }
};
</script>

`
export default code;