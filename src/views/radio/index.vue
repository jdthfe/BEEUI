<template>
  <v-page>
    <ga-row>
      <basic-radio></basic-radio>
      <sampleradio/>
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
                <td>value</td>
                <td>只在单独使用时有效。可以使用 <code>v-model</code> 双向绑定数据</td>
                <td>Boolean</td>
                <td>false</td>
              </tr>
              <tr>
                <td>label </td>
                <td>只在组合使用时有效。指定当前选项的 value 值，组合会自动判断当前选择的项目</td>
                <td>String | Number</td>
                <td>-</td>
              </tr>
              <tr>
                <td>type </td>
                <td>只在组合使用时有效。指定当前选项的 value 值对应的type值，方面与后端交互传参使用，具体看使用示例</td>
                <td>String | Number</td>
                <td>-</td>
              </tr>
              <tr>
                <td>disabled</td>
                <td>是否禁用当前项</td>
                <td>Boolean</td>
                <td>false</td>
              </tr>
            </tbody>
          </table>
          <h4>group api</h4>
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
                <td>value</td>
                <td>指定当前选中的项目数据。可以使用 <code>v-model</code> 双向绑定数据</td>
                <td>String | Number</td>
                <td>-</td>
              </tr>
              <tr>
                <td>type</td>
                <td>可选值为 button 或不填，为 button 时使用按钮样式</td>
                <td>String</td>
                <td>-</td>
              </tr>
              <tr>
                <td>size</td>
                <td>尺寸，只对按钮样式生效，可选值为<code>large</code>和<code>small</code>或者不设置</td>
                <td>String</td>
                <td>-</td>
              </tr>
              <tr>
                <td>vertical</td>
                <td>是否垂直排列，按钮样式下无效</td>
                <td>Boolean</td>
                <td>false</td>
              </tr>
            </tbody>
          </table>
          <h4>group 事件</h4>
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
                <td>在选项状态发生改变时触发，返回当前状态。通过修改外部的数据改变时不会触发</td>
                <td>val,obj:当前选中的及当前对象</td>
              </tr>
            </tbody>
          </table>
        </div>
      </ga-row>
    </ga-panel>
  </v-page>
</template>
<script>
import basicRadio from './module/basicRadio.vue';
import sampleradio from './module/sampleradio.vue';

export default {
  components: {
    basicRadio,
    sampleradio
  },
}

</script>
