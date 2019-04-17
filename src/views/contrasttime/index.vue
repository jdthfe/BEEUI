<template>
  <v-page>
    <ga-row>
      <basecontrasttime/>
    </ga-row>
    <ga-panel moduleName="API说明">
      <ga-row>
        <div class="api">
          <h4>对比日期组件</h4>
          <table>
            <colgroup>
              <col>
              <col>
              <col>
              <col width="200">
            </colgroup>
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
                <td>
                  包含value（对应的是设置的初始值字符串），label（后期会用到）
                </td>
                <td>Object</td>
                <td>-</td>
              </tr>
              <tr>
                <td>placement</td>
                <td>日期选择器出现的位置，可选值为<code>top</code><code>top-start</code><code>top-end</code><code>bottom</code><code>bottom-start</code><code>bottom-end</code><code>left</code><code>left-start</code><code>left-end</code><code>right</code><code>right-start</code><code>right-end</code></td>
                <td>String</td>
                <td>bottom-start</td>
              </tr>
              <tr>
                <td>placeholder</td>
                <td>占位文本</td>
                <td>String</td>
                <td>空</td>
              </tr>
              <tr>
                <td>open</td>
                <td>手动控制日期选择器的显示状态，true 为显示，false 为收起。使用该属性后，选择器不会主动关闭。建议配合 slot 及 confirm 和相关事件一起使用</td>
                <td>Boolean</td>
                <td>null</td>
              </tr>
              <tr>
                <td>disabled</td>
                <td>是否禁用选择器</td>
                <td>Boolean</td>
                <td>false</td>
              </tr>
              <tr>
                <td>clearable</td>
                <td>是否显示清除按钮</td>
                <td>Boolean</td>
                <td>true</td>
              </tr>
              <tr>
                <td>radioList</td>
                <td>对比日期类型初始化定义，具体看实例使用</td>
                <td>Array</td>
                <td>-</td>
              </tr>
              <tr>
                <td>simple</td>
                <td>对比日期简单模式，只保留前七天和去年同比一天模式</td>
                <td>Boolean</td>
                <td>true</td>
              </tr>
              <tr>
                <td>out-date-all</td>
                <td>组件内部暴露出来的方法，返回日期和选择类型两个参数</td>
                <td>Function</td>
                <td>-</td>
              </tr>
            </tbody>
          </table>
        </div>
      </ga-row>
    </ga-panel>
  </v-page>
</template>
<script>
import basecontrasttime from './module/basecontrasttime.vue';

export default {
  components: {
    basecontrasttime
  },
}

</script>
