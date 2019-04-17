<template>
  <v-page>
    <ga-panel :moduleName='$t("introduction.title")'>
      <j-row>
        <j-col span="20">
          <div class="wrapper-content jbd-article">
            <article>
              <div class="anchor">
                <h2>下载安装</h2>
              </div>
              <v-code show>
                {{Code.down}}
              </v-code>
              <h1>{{$t("introduction.h1")}}</h1>
              <div class="anchor"></div>
              <p>{{$t("introduction.desc")}}</p>
              <div>
                <v-code show>
                  {{Code.base}}
                </v-code>
              </div>
              <div class="anchor">
                <h2>{{$t("introduction.h21")}}</h2>
              </div>
              <v-code show>
                {{Code.anxu}}
              </v-code>
              <div class="anchor">
                <h2>完整组件列表和引入方式</h2>
              </div>
              <v-code show>
                {{Code.wz}}
              </v-code>
              <div class="anchor">
                <h2>{{$t("introduction.h22")}}</h2>
              </div>
              <v-code language="html" show>
                {{Code.bower}}
              </v-code>
              <div class="anchor">
                <h2>{{$t("introduction.h23.title")}}</h2>
              </div>
              <ul>
                <li>{{$t("introduction.h23.li")}}</li>
                <a class="job-title" href="//192.168.200.127:8080/dist/dist2.2.6.zip">{{$t("introduction.h23.a1")}}</a>
                <a class="job-title" href="//192.168.200.127:8080/dist/master.zip">{{$t("introduction.h23.a2")}}</a>
              </ul>
              <div class="anchor">
                <h2>{{$t("introduction.h24.title")}}</h2>
              </div>
              <ul>
                <li><a href="http://123.jd.com/views/index.html" target="_blank">demo</a></li>
                
              </ul>
              <div class="anchor">
                <h2>{{$t("introduction.h25.title")}}</h2>
                <ul>
                  <li></li>
                </ul>
              </div>
            </article>
          </div>
        </j-col>
      </j-row>
    </ga-panel>
  </v-page>
</template>
<script>
import '@/assets/style/views/introduction.less';

import jRow from '@/package/components/grid/row.vue';
import jCol from '@/package/components/grid/col.vue';
import Code from './code.js';

export default {
  name: 'Introduction',
  components: {
    jRow,
    jCol,
  },
  data() {
    return {
      Code: Code
    }
  }
}

</script>
