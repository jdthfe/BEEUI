<template>
  <ga-panel :moduleName="moduleName">
    <ga-row>
      <v-button @on-click="modal2 = true">自定义页头和页脚</v-button>
      <v-modal v-model="modal2" width="360">
        <p slot="header" style="color:#f60;text-align:center">
          <v-icon type="information-circled"></v-icon>
          <span>删除确认</span>
        </p>
        <div style="text-align:center">
          <p>此任务删除后，下游 10 个任务将无法执行。</p>
          <p>是否继续删除？</p>
        </div>
        <div slot="footer">
          <v-button type="error" size="large" long :loading="modal_loading" @on-click="del">删除</v-button>
        </div>
      </v-modal>
      <v-button @on-click="modal3 = true">不带标题栏</v-button>
      <v-modal v-model="modal3">
        <p>对话框内容</p>
        <p>对话框内容</p>
        <p>对话框内容</p>
      </v-modal>
      <v-button @on-click="modal5 = true">设置宽度</v-button>
      <v-modal v-model="modal5" title="自定义宽度" width="300">
        <p>自定义宽度，单位 px，默认 520px。</p>
        <p>对话框的宽度是响应式的，当屏幕尺寸小于 768px 时，宽度会变为自动<code>auto</code>。</p>
      </v-modal>
    </ga-row>
    <v-code language="html">
      {{Code.zdy}}
    </v-code>
  </ga-panel>
</template>
<script>
import vModal from '@/package/components/modal/Modal.vue';

import vButton from '@/package/components/button/button.vue';
import vIcon from '@/package/components/icon/icon.vue';
import Code from '@/public/code/modal.js';


export default {
  components: {
    vModal,
    vButton,
    vIcon
  },

  data() {
    return {
      moduleName: '自定义模态框',
      modal2: false,
      modal_loading: false,
      modal3: false,
      modal4: false,
      modal5: false,
      Code:Code
    }
  },
  methods: {
    del() {
      this.modal_loading = true;
      setTimeout(() => {
        this.modal_loading = false;
        this.modal2 = false;
        this.$Message.success('删除成功');
      }, 2000);
    }
  }
}

</script>
