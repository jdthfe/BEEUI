let code = {};

code.base = `
<template>
  <ga-upload action="//jsonplaceholder.typicode.com/posts/">
    <ga-button type="primary">点击上传</ga-button>
  </ga-upload>
</template>
`;

code.multiple = `
<template>
  <ga-upload multiple action="//jsonplaceholder.typicode.com/posts/">
    <ga-button type="primary">点击上传</ga-button>
  </ga-upload>
</template>
`;

code.drag = `
<template>
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
</template>
<script>
export default {
  methods: {
    successUpload(response, file, fileList) {
      console.log(response, file, fileList)
    }
  }
}
</script>
`;

code.zdy = `
<template>
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
</template>
<script>
export default {
  data() {
    return {
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

`;

code.http = `
<template>
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
</template>
<script>
export default {
  data() {
    return {
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
        }
      }
      axios.post('http://jsonplaceholder.typicode.com/posts/', formData, options).then(()=>{
        this.$Message.success('上传成功')
      })
    }
  }
}

</script>
`;

export default code;
