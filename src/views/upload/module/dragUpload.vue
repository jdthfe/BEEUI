<template>
  <ga-panel :moduleName="moduleName">
    <ga-upload
      multiple
      type="drag"
      @on-success="successUpload"
      action="//jsonplaceholder.typicode.com/posts/">
      <div style="padding: 20px 0">
        <ga-icon type="ios-cloud-upload" size="52" style="color: #3399ff"></ga-icon>
        <p>点击或者拖动文件进行上传</p>
      </div>
    </ga-upload>
    <v-code language="html">
      {{Code.drag}}
    </v-code>
  </ga-panel>
</template>
<script>
import GaUpload from '@/package/components/upload/upload';
import GaIcon from '@/package/components/icon/icon.vue';
import Code from '@/public/code/upload.js';
export default {
  name: 'DragUpload',
  components: {
    GaUpload,
    GaIcon
  },
  data() {
    return {
      moduleName: '拖拽上传',
      Code:Code
    }
  },
  methods: {
    successUpload(response, file, fileList) {
      console.log(response, file, fileList)
    }
  }
}

</script>
