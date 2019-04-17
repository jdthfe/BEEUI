<template>
  <v-page>
    <ga-row>
      <basicaswitch/>
      <tabswitch/>
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
                <td>指定当前是否选中，可以使用 v-model 双向绑定数据</td>
                <td>Boolean</td>
                <td>false</td>
            </tr>
            <tr>
                <td>size</td>
                <td>开关的尺寸，可选值为<code>large</code>、<code>small</code>、<code>default</code>或者不写。建议开关如果使用了2个汉字的文字，使用 large。</td>
                <td>String</td>
                <td>-</td>
            </tr>
            <tr>
                <td>disabled</td>
                <td>禁用开关</td>
                <td>Boolean</td>
                <td>false</td>
            </tr>
            <tr>
                <td>true-value</td>
                <td>选中时的值，当使用类似 1 和 0 来判断是否选中时会很有用</td>
                <td>String, Number, Boolean</td>
                <td>true</td>
            </tr>
            <tr>
                <td>false-value</td>
                <td>没有选中时的值，当使用类似 1 和 0 来判断是否选中时会很有用</td>
                <td>String, Number, Boolean</td>
                <td>false</td>
            </tr>
            <tr>
                <td>tab</td>
                <td>开启tab样式配置功能</td>
                <td>Boolean</td>
                <td>false</td>
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
                <td>开关变化时触发，返回当前的状态</td>
                <td>true | false</td>
            </tr>
        </tbody>
    </table>
    <h4>slot</h4>
    <table>
        <thead>
            <tr>
                <th>名称</th>
                <th>说明</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>open</td>
                <td>自定义显示打开时的内容</td>
            </tr>
            <tr>
                <td>close</td>
                <td>自定义显示关闭时的内容</td>
            </tr>
        </tbody>
    </table>
</div>
      </ga-row>
    </ga-panel>
  </v-page>
</template>
<script>
import basicaswitch from "./module/basicaswitch.vue";
import tabswitch from "./module/tabswitch.vue";
export default {
  components: {
    basicaswitch,
    tabswitch
  }
};
</script>
