<template>
  <v-page>
    <ga-row>
      <ga-panel moduleName="多页面应用脚手架" :moduleIcon="moduleIcon">
        <v-button @on-click="duocli">点击查看</v-button>
        <div class="anchor">
          <h3>项目支持:</h3>
        </div>
        <ul>
          <li><a href="http://123.jd.com/views/index.html" target="_blank">数据管家</a></li>
        </ul>
      </ga-panel>
      <ga-panel moduleName="单页面应用脚手架" :moduleIcon="moduleIcon">
        <v-button @on-click="dancli">点击查看</v-button>
        <div class="anchor">
          <h3>项目支持:</h3>
        </div>
        <ul>
          <li><a href="http://jdp.jd.com/systems/jdpweb/index.html#/subscription" target="_blank">京东动力新版pc端</a></li>
          <li><a href="http://b-ufo.jd.com/views/odm/#/" target="_blank">订单全流程</a></li>
          <li><a href="http://b-ufo.jd.com/views/uns/#/realtime-screen-index" target="_blank">统一大屏</a></li>
          <li><a href="http://b-ufo.jd.com/views/uns/#/realtime-statistical-classification" target="_blank">新分类统计</a></li>
          <li><a href="http://jdp-mobile.jd.com/app/subscribe" target="_blank">京东动力移动端</a></li>
        </ul>
      </ga-panel>
      <ga-panel moduleName="单页面应用ssr后端渲染脚手架" :moduleIcon="moduleIcon">
        <v-button @on-click="houcli">点击查看</v-button>
        <div class="anchor">
          <h3>项目支持:</h3>
        </div>
        <ul>
          <li><a href="http://jdpm.jd.com/app/subscribe" target="_blank">京东动力移动端node版</a></li>
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
