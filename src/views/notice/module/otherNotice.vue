<template>
  <ga-panel :moduleName="moduleName" :moduleIcon="moduleIcon">
    <v-button @on-click="open()">open方法</v-button>
    <v-button @on-click="close()">close方法</v-button>
    <v-code language="html">
      {{Code.other}}
    </v-code>
  </ga-panel>
</template>
<script>
  import Notice from '@/package/components/notice/index';
  import vButton from '@/package/components/button/button.vue';
  import Code from '@/public/code/notice.js';
  export default {
    components: {
      vButton
    },
    data() {
      return {
        moduleName: '其他使用',
        moduleIcon: '',
        Code: Code
      }
    },
    methods: {
      open() {
        Notice.open({
          top: 50,
          duration: 3,
          name: 'aa',
          desc: '内容',
          title: '我是标题'
        })
      },
      close() {
        Notice.close('aa')
      }
    }
  }

</script>
