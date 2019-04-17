<template>
  <v-page>
    <ga-row>
      <basicaffix/>
    </ga-row>
    <ga-panel moduleName="API说明">
      <ga-row>
        <div class="api">
          <h4>api</h4>
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
                <td>offset-top</td>
                <td>距离窗口顶部达到指定偏移量后触发</td>
                <td>Number</td>
                <td>0</td>
              </tr>
              <tr>
                <td>offset-bottom</td>
                <td>距离窗口底部达到指定偏移量后触发</td>
                <td>Number</td>
                <td>-</td>
              </tr>
            </tbody>
          </table>
          <h4>事件</h4>
          <table>
            <thead>
              <tr>
                <th>事件名</th>
                <th>说明</th>
                <th>返回值</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>on-change</td>
                <td>在固定状态发生改变时触发</td>
                <td>true | false</td>
              </tr>
            </tbody>
          </table>
        </div>
      </ga-row>
    </ga-panel>
  </v-page>
</template>
<script>
import basicaffix from './module/basicaffix.vue';
export default {
  components: {
    basicaffix,
  }
}

</script>
