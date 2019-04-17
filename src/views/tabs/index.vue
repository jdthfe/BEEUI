<template>
  <v-page>
    <ga-row>
      <basictabs/>
      <cardtabs/>
      <closetabs/>
      <addtabs/>
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
                <td>value</td>
                <td>当前激活 tab 面板的 name，可以使用 v-model 双向绑定数据</td>
                <td>String</td>
                <td>默认为第一项的 name</td>
              </tr>
              <tr>
                <td>type</td>
                <td>页签的基本样式，可选值为 <code>line</code> 和 <code>card</code></td>
                <td>String</td>
                <td>line</td>
              </tr>
              <tr>
                <td>size</td>
                <td>尺寸，可选值为 <code>default</code> 和 <code>small</code>，仅在 <code>type="line"</code> 时有效</td>
                <td>String</td>
                <td>default</td>
              </tr>
              <tr>
                <td>closable</td>
                <td>是否可以关闭页签，仅在 <code>type="card"</code> 时有效</td>
                <td>Boolean</td>
                <td>false</td>
              </tr>
              <tr>
                <td>animated</td>
                <td>是否使用 CSS3 动画</td>
                <td>Boolean</td>
                <td>true</td>
              </tr>
            </tbody>
          </table>
          <h4>tabs events</h4>
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
                <td>on-click</td>
                <td>tab 被点击时触发</td>
                <td>name</td>
              </tr>
              <tr>
                <td>on-tab-remove</td>
                <td>tab 被关闭时触发</td>
                <td>name</td>
              </tr>
            </tbody>
          </table>
          <h4>tabpane props</h4>
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
                <td>name</td>
                <td>用于标识当前面板，对应 value，默认为其索引值</td>
                <td>String | Number</td>
                <td>-</td>
              </tr>
              <tr>
                <td>label</td>
                <td>选项卡头显示文字</td>
                <td>String</td>
                <td>空</td>
              </tr>
              <tr>
                <td>icon</td>
                <td>选项卡图标</td>
                <td>String</td>
                <td>-</td>
              </tr>
              <tr>
                <td>disabled</td>
                <td>是否禁用该选项卡</td>
                <td>Boolean</td>
                <td>false</td>
              </tr>
              <tr>
                <td>closable</td>
                <td>是否可以关闭页签，仅在 <code>type="card"</code> 时有效</td>
                <td>Boolean</td>
                <td>null</td>
              </tr>
            </tbody>
          </table>
        </div>
      </ga-row>
    </ga-panel>
  </v-page>
</template>
<script>

import basictabs from './module/basictabs.vue';
import cardtabs from './module/cardtabs.vue';
import closetabs from './module/closetabs.vue';
import addtabs from './module/addtabs.vue';

export default {
  components: {
    basictabs,
    cardtabs,
    closetabs,
    addtabs
  }
}

</script>
