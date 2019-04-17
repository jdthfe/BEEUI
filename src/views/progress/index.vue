<template>
  <v-page>
    <ga-row>
      <basic-progress></basic-progress>
    </ga-row>
    <ga-panel moduleName="API说明">
      <ga-row>
        <div class="api">
          <h4>API说明</h4>
          <table>
            <thead>
              <tr>
                <th>属性</th>
                <th>说明</th>
                <th>类型</th>
                <th>默认值</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>percent</td>
                <td>百分比</td>
                <td>Number</td>
                <td>0</td>
              </tr>
              <tr>
                <td>status</td>
                <td>状态，可选值为<code>normal</code>、<code>active</code>、<code>wrong</code>、<code>success</code></td>
                <td>String</td>
                <td>normal</td>
              </tr>
              <tr>
                <td>stroke-width</td>
                <td>进度条的线宽，单位 px</td>
                <td>Number</td>
                <td>10</td>
              </tr>
              <tr>
                <td>hide-info</td>
                <td>隐藏数值或状态图标</td>
                <td>Boolean</td>
                <td>false</td>
              </tr>
            </tbody>
          </table>
        </div>
      </ga-row>
    </ga-panel>
  </v-page>
</template>
<script>
import basicProgress from './module/basicProgress.vue';

export default {
  components: {
    basicProgress,
  }
}

</script>
