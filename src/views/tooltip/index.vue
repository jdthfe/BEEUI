<template>
  <v-page>
    <ga-row>
      <basictooltip/>
      <zdytooltip/>
      <!-- <gailan/> -->
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
                <td>content</td>
                <td>显示的内容</td>
                <td>String | Number</td>
                <td>空</td>
              </tr>
              <tr>
                <td>placement</td>
                <td>提示框出现的位置，可选值为<code>top</code><code>top-start</code><code>top-end</code><code>bottom</code><code>bottom-start</code><code>bottom-end</code><code>left</code><code>left-start</code><code>left-end</code><code>right</code><code>right-start</code><code>right-end</code></td>
                <td>String</td>
                <td>bottom</td>
              </tr>
              <tr>
                <td>disabled</td>
                <td>是否禁用提示框</td>
                <td>Boolean</td>
                <td>false</td>
              </tr>
              <tr>
                <td>delay</td>
                <td>延迟显示，单位毫秒</td>
                <td>Number</td>
                <td>0</td>
              </tr>
              <tr>
                <td>always</td>
                <td>是否总是可见</td>
                <td>Boolean</td>
                <td>false</td>
              </tr>
            </tbody>
          </table>
          <h4>事件说明</h4>
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
                <td>on-popper-hide</td>
                <td>在提示框消失时触发</td>
                <td>无</td>
              </tr>
            </tbody>
          </table>
          <h4>solt</h4>
          <table>
            <thead>
              <tr>
                <th>名称</th>
                <th>说明</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>content</td>
                <td>提示框的内容，定义此 slot 时，会覆盖 props <code>content</code>。</td>
              </tr>
            </tbody>
          </table>
        </div>
      </ga-row>
    </ga-panel>
  </v-page>
</template>
<script>
import basictooltip from './module/basictooltip.vue';
import zdytooltip from './module/zdytooltip.vue';
// import gailan from './module/gailan.vue';
export default {
  components: {
    basictooltip,
    zdytooltip,
    // gailan
  },
  data() {
    return {}
  },


  methods: {

  }
}

</script>
