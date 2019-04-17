<template>
  <ga-panel :moduleName="moduleName">
    <ga-upload
      :data="params"
      name="wangqi"
      :headers="headers"
      show-upload-list
      accept="image"
      :default-file-list="defaultList"
      :format="['jpg','jpeg','png']"
      :max-size="maxSize"
      :before-upload="beforeUpload"
      :on-progress="onProgress"
      :on-success="onSucess"
      :on-preview="onPreview"
      :on-remove="onRemove"
      :on-format-error="onFormatError"
      :on-exceeded-size="onExceededSize"
      action="//jsonplaceholder.typicode.com/posts/">
      <ga-button type="primary">点击上传</ga-button>
    </ga-upload>
    <v-code language="html">
      {{Code.zdy}}
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
      moduleName: '上传检测',
      Code:Code,
      params: {
        key: '11111'
      },
      headers: {
      },
      maxSize:1024,
      defaultList: [
          {
              'name': '决策仪表盘',
              'url': 'http://img11.360buyimg.com/pop/jfs/t13687/71/1498586036/28647/ab2601c3/5a211456Ndcccda0e.png'
          },
          {
              'name': '数据管家',
              'url': 'http://img11.360buyimg.com/pop/jfs/t12565/32/1210123531/41416/66007ec4/5a1bde89Nbe81cf39.png'
          }
      ],
    }
  },
  methods: {
    beforeUpload(file) {
      console.log('before---------', file)
    },
    onProgress(event, file, fileList) {
      console.log('progress---------', event, file, fileList)
    },
    onSucess(response, file, fileList) {
      console.log('success--------', response, file, fileList)
    },
    onPreview(file) {
      console.log('preview--------', file)
    },
    onRemove(file, fileList) {
      console.log('remove--------', file, fileList)
    },
    onFormatError(file, fileList) {
      console.log('formaterror--------', file, fileList)
    },
    onExceededSize(file, fileList) {
      console.log('exceededsize----------', file, fileList)
    }
  }
}

</script>
