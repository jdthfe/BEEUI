<template>
  <ga-panel :moduleName="moduleName">
    <ga-upload
      ref="upload"
      :before-upload="handleUpload"
      action=""
      :http-request="httpRequest"
      :http-percent="httpPercent"
      >
      <ga-button type="primary">选择文件</ga-button>
    </ga-upload>
    <div v-if="file !== null">上传文件: {{ file.name }} <ga-button type="text" @on-click="upload" :loading="loadingStatus">{{ loadingStatus ? '上传中...' : '点击上传' }}</ga-button></div>
    <v-code language="html">
      {{Code.http}}
    </v-code>
  </ga-panel>
</template>
<script>
import axios from 'axios';
import Vue from 'vue';
import GaUpload from '@/package/components/upload/upload';
import GaButton from '@/package/components/button/button.vue';
import Code from '@/public/code/upload.js';
import Message from '@/package/components/message/index';
Vue.prototype.$Message = Message;
export default {
  components: {
    GaUpload,
    GaButton
  },

  data() {
    return {
      moduleName: '自定义上传方法',
      Code:Code,
      file: null,
      httpPercent: 0,
      loadingStatus: false
    }
  },
  methods: {
    handleUpload(file) {
      this.file = file;
      return false;
    },
    upload() {
      this.$refs.upload.submit(this.file)
    },
    httpRequest() {
      this.loadingStatus = true;
      let formData = new FormData()
      formData.append('file', this.file) // 将文件转成二进制形式
      const options = {
        onUploadProgress: (e) => {
          this.httpPercent = (e.loaded / e.total) * 100
          console.log(this.httpPercent)
        }
      }
      axios.post('http://jsonplaceholder.typicode.com/posts/', formData, options).then(()=>{
        this.$Message.success('上传成功')
      })
    }
  }
}

</script>
