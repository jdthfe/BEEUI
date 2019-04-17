<template>
  <v-page>
    <ga-panel :moduleName='$t("introduction.title")'>
      <ga-row>
        <ga-col span="20">
          <div class="wrapper-content jbd-article">
            <article>
              <h1>使用步骤</h1>
              <div class="anchor"></div>
              <p>第一步 修改package/styles/theme文件夹下的less文件</p>
              <p>第二步 添加自定义的颜色值</p>
              <v-code show>
                {{Code.base}}
              </v-code>
              <p>第三步 运行主题打包命令</p>
              <v-code show>
                {{Code.theme}}
              </v-code>
            </article>
          </div>
        </ga-col>
      </ga-row>
    </ga-panel>
    <ga-panel moduleName='主题种类'>
      <ga-row>
        <ga-col span="20">
          <div class="wrapper-content jbd-article">
            <h2>权限系统主题</h2>
            <p>色调基础：#3276b1</p>
            <img src="../../assets/images/theme/permission.jpeg" /> 
          </div>
        </ga-col>
        <ga-col span="20">
          <div class="wrapper-content jbd-article">
            <h2>商搜系统主题</h2>
            <p>色调基础：#f10215</p>
            <img src="../../assets/images/theme/ss.jpeg" /> 
          </div>
        </ga-col>
      </ga-row>
    </ga-panel>
  </v-page>
</template>
<script>
import '@/assets/style/views/introduction.less';

import gaRow from '@/package/components/grid/row.vue';
import gaCol from '@/package/components/grid/col.vue';
import Code from './code.js';

export default {
  name: 'Introduction',
  components: {
    gaRow,
    gaCol,
  },
  data() {
    return {
      Code: Code
    }
  }
}

</script>
