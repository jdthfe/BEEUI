<template>
  <ga-panel :moduleName="moduleName">
    <ga-upload multiple action="//jsonplaceholder.typicode.com/posts/">
      <ga-button type="primary">点击上传</ga-button>
    </ga-upload>
    <v-code language="html">
      {{Code.multiple}}
    </v-code>
  </ga-panel>
</template>
<script>
import GaUpload from '@/package/components/upload/upload';
import GaButton from '@/package/components/button/button.vue';
import Code from '@/public/code/upload.js';
export default {
  components: {
    GaUpload,
    GaButton
  },

  data() {
    return {
      moduleName: '上传多个',
      Code:Code
    }
  },
  methods: {

  }
}

</script>
