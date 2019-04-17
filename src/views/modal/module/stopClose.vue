<template>
  <ga-panel :moduleName="moduleName">
    <ga-row>
        <v-button @on-click="modal7 = true">禁止x号关闭</v-button>
        <v-modal title="Title" v-model="modal7" :closable="false">
          <p>Content of dialog</p>
          <p>Content of dialog</p>
          <p>Content of dialog</p>
        </v-modal>
        <v-button @on-click="modal8 = true">禁止遮罩关闭</v-button>
        <v-modal title="Title" v-model="modal8" :mask-closable="false">
          <p>Content of dialog</p>
          <p>Content of dialog</p>
          <p>Content of dialog</p>
        </v-modal>
    </ga-row>
    <v-code language="html">
      {{Code.stop}}
    </v-code>
  </ga-panel>
</template>
<script>
import vModal from '@/package/components/modal/Modal.vue';

import vButton from '@/package/components/button/button.vue';

import Code from '@/public/code/modal.js';

export default {
  components: {
    vModal,
    vButton,
  },

  data() {
    return {
      moduleName: '自定义关闭',
      modal7: false,
      modal8: false,
      Code: Code
    }
  }
}

</script>
