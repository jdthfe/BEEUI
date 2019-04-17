<template>
  <v-page>
    <ga-row>
      <basictimerange/>
    </ga-row>
    <ga-panel moduleName="API说明">
      <ga-row>
        <div class="api">
          <h4>48个时刻组件</h4>
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
                  只能填写0至48任意数字或者字符串
                </td>
                <td>-</td>
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
                <td>selected</td>
                <td>接受组件内部暴露出来的数据，有两个数据，分别是时间段完整数据和时间段label数组集合</td>
                <td>Function</td>
                <td>-</td>
              </tr>
              <tr>
                <td>disabledselect</td>
                <td>时间段label数组集合，1到48数字集合，禁止选择</td>
                <td>Array</td>
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

import basictimerange from './module/basictimerange.vue';

export default {
  components: {
    basictimerange,
  },
}

</script>
