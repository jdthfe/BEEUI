<template>
  <v-page>
    <ga-row>
      <basicspin/>
      <zdyspin/>
    </ga-row>
    <ga-panel moduleName="API说明/事件说明">
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
                <td>size</td>
                <td>Spin尺寸，可选值为<code>large</code>和<code>small</code>或者不设置</td>
                <td>String</td>
                <td>-</td>
              </tr>
              <tr>
                <td>fix</td>
                <td>是否固定，需要父级有<code>relative</code>或<code>absolute</code></td>
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
import basicspin from './module/basicspin.vue';
import zdyspin from './module/zdyspin.vue';
export default {
  components: {
    basicspin,
    zdyspin,
  },
}

</script>
