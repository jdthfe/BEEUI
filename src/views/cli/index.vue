<template>
  <v-page>
    <ga-row>
      <ga-panel moduleName="多页面应用脚手架" :moduleIcon="moduleIcon">
        <v-button @on-click="duocli">点击查看</v-button>
        <div class="anchor">
          <h3>项目支持:</h3>
        </div>
        <ul>
            <li><a href="https://jd.co.th" target="_blank">泰国版PC</a></li>
        </ul>
      </ga-panel>
      <ga-panel moduleName="单页面应用脚手架" :moduleIcon="moduleIcon">
        <v-button @on-click="dancli">点击查看</v-button>
        <div class="anchor">
          <h3>项目支持:</h3>
        </div>
        <ul>
          <li><a href="http://jdc.jd.co.th/#/realtimescreen" target="_blank">可视化大屏</a></li>
        </ul>
      </ga-panel>
      <ga-panel moduleName="单页面应用ssr后端渲染脚手架" :moduleIcon="moduleIcon">
        <v-button @on-click="houcli">点击查看</v-button>
        <div class="anchor">
          <h3>项目支持:</h3>
        </div>
        <ul>
          <li><a href="http://jdpm.jd.com/app/subscribe" target="_blank">PC端活动页</a></li>
        </ul>
      </ga-panel>
    </ga-row>
  </v-page>
</template>
<script>

import vButton from '@/package/components/button/button.vue';

export default {
  components: {
    vButton
  },

  methods: {
    duocli() {
      window.open('http://source.jd.com/app/bds-cli')
    },
    dancli() {
      window.open('http://source.jd.com/app/vue-gamma')
    },
    houcli() {
      window.open('http://source.jd.com/app/jdp-mobile/tree/dev-node/end-delimiter')
    }
  }
}

</script>
