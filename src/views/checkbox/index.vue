<template>
  <v-page>
    <ga-row>
      <basiccheckbox/>
      <allcheckbox/>
      <valueobject/>
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
                <td>只在单独使用时有效。可以使用 v-model 双向绑定数据</td>
                <td>Boolean</td>
                <td>false</td>
              </tr>
              <tr>
                <td>label</td>
                <td>只在组合使用时有效。指定当前选项的 value 值，组合会自动判断是否选中</td>
                <td>String | Number | Boolean | Object</td>
                <td>-</td>
              </tr>
              <tr>
                <td>disabled</td>
                <td>是否禁用当前项</td>
                <td>Boolean</td>
                <td>false</td>
              </tr>
              <tr>
                <td>indeterminate</td>
                <td>设置 indeterminate 状态，只负责样式控制</td>
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
                <td>只在单独使用时有效。在选项状态发生改变时触发，通过修改外部的数据改变时不会触发</td>
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
import basiccheckbox from './module/basiccheckbox.vue';
import allcheckbox from './module/allcheckbox.vue';
import valueobject from './module/valueobject.vue';
export default {
  components: {
    basiccheckbox,
    allcheckbox,
    valueobject
  }
}

</script>
