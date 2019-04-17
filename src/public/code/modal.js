let code = {};

code.base = `
<template>
  <ga-panel :moduleName="moduleName">
    <ga-row>
      <ga-modal 
        v-model="modal1" 
        title="普通的Modal对话框标题" 
        scrollable
        @on-ok="onClick"
        @on-cancel="onCancel">
        <div class="modal-body">
          这是内容
        </div>
      </ga-modal>
      <ga-button @on-click="modal1 = true">点击我</ga-button>
    </ga-row>
  </ga-panel>
</template>
<script>

export default {
  data() {
    return {
      modal1: false,
    }
  },
  methods: {
    onClick() {
      // 确定后回掉事件
    },
    onCancel() {
      // 取消后回掉事件
    }
  }
}
</script>

`;

code.zdy = `
  <template>
    <ga-button @on-click="modal2 = true">自定义页头和页脚</ga-button>
    <ga-modal v-model="modal2" width="360">
        <p slot="header" style="color:#f60;text-align:center">
            <ga-icon type="information-circled"></ga-icon>
            <span>删除确认</span>
        </p>
        <div style="text-align:center">
            <p>此任务删除后，下游 10 个任务将无法执行。</p>
            <p>是否继续删除？</p>
        </div>
        <div slot="footer">
            <ga-button type="error" size="large" long :loading="modal_loading" @on-click="del">删除</ga-button>
        </div>
    </ga-modal>
    <ga-button @on-click="modal3 = true">不带标题栏</ga-button>
    <ga-modal v-model="modal3">
        <p>对话框内容</p>
        <p>对话框内容</p>
        <p>对话框内容</p>
    </ga-modal>
    <ga-button @on-click="modal5 = true">设置宽度</ga-button>
    <ga-modal
        v-model="modal5"
        title="自定义宽度"
        width="300">
        <p>自定义宽度，单位 px，默认 520px。</p>
        <p>对话框的宽度是响应式的，当屏幕尺寸小于 768px 时，宽度会变为自动<code>auto</code>。</p>
    </ga-modal>
  </template>
  <script>
      export default {
          data() {
              return {
                  modal2: false,
                  modal_loading: false,
                  modal3: false,
                  modal4: false,
                  modal5: false
              }
          },
          methods: {
                }
      }
  </script>
`;

code.stop = `
<template>
    <ga-button @click="modal7 = true">Disable upper right corner (including Esc key)</ga-button>
    <ga-modal
        title="Title"
        v-model="modal7"
        :closable="false">
        <p>Content of dialog</p>
        <p>Content of dialog</p>
        <p>Content of dialog</p>
    </ga-modal>
    <ga-button @click="modal8 = true">Disable mask layer closure</ga-button>
    <ga-modal
        title="Title"
        v-model="modal8"
        :mask-closable="false">
        <p>Content of dialog</p>
        <p>Content of dialog</p>
        <p>Content of dialog</p>
    </ga-modal>
</template>
<script>
    export default {
        data () {
            return {
                modal7: false,
                modal8: false,
            }
        }
    }
</script>`

export default code;
