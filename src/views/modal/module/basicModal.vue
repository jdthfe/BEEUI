<template>
  <ga-panel :moduleName="moduleName">
    <ga-row>
      <ga-modal 
        v-model="modal1" 
        title="普通的Modal对话框标题" 
        scrollable
        @on-ok="onClick"
        @on-cancel="onCancel"
        @on-mask="onMask">
        <div class="modal-body">
          这是内容
        </div>
      </ga-modal>
      <ga-button @on-click="modal1 = true">点击我</ga-button>
    </ga-row>
    <v-code language="html">
      {{Code.base}}
    </v-code>
  </ga-panel>
</template>
<script>
import gaModal from "@/package/components/modal/Modal.vue";
import gaButton from "@/package/components/button/button.vue";
import Code from "@/public/code/modal.js";
export default {
  components: {
    gaModal,
    gaButton
  },

  data() {
    return {
      moduleName: "基本使用",
      modal1: false,
      Code: Code
    };
  },
  methods: {
    onClick() {
      // 确定后回掉事件
    },
    onCancel() {
      // 取消后回掉事件
    },
    onMask() {
      // 点击浮层回掉事件
    }
  }
};
</script>
