<template>
  <v-page>
    <div class="row">
      <basicmenu/>
      <menuleft/>
      <smallmenu/>
    </div>
    <ga-panel moduleName="API说明">
      <div class="row">
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
                <td>mode</td>
                <td>菜单类型，可选值为 <code>horizontal</code>（水平） 和 <code>vertical</code>（垂直）</td>
                <td>String</td>
                <td>vertical</td>
              </tr>
              <tr>
                <td>theme</td>
                <td>主题，可选值为 <code>light</code>、<code>dark</code>、<code>primary</code>，其中 primary 只适用于 <code>mode="horizontal"</code></td>
                <td>String</td>
                <td>light</td>
              </tr>
              <tr>
                <td>active-name</td>
                <td>激活菜单的 name 值</td>
                <td>String | Number</td>
                <td>-</td>
              </tr>
              <tr>
                <td>open-names</td>
                <td>展开的 Submenu 的 name 集合</td>
                <td>Array</td>
                <td>[]</td>
              </tr>
              <tr>
                <td>accordion</td>
                <td>是否开启手风琴模式，开启后每次至多展开一个子菜单</td>
                <td>Boolean</td>
                <td>false</td>
              </tr>
              <tr>
                <td>width</td>
                <td>导航菜单的宽度，只在 <code>mode="vertical"</code> 时有效，如果使用 <code>Col</code> 等布局，建议设置为 <code>auto</code></td>
                <td>String</td>
                <td>240px</td>
              </tr>
              <tr>
                <td>solt</td>
                <td>title,子菜单的唯一标识，必填</td>
                <td>String | Number</td>
                <td></td>
              </tr>
              <tr>
                <td>collapse</td>
                <td>是否展开菜单</td>
                <td>Boolean</td>
                <td>false</td>
              </tr>
            </tbody>
          </table>
          <h4>menu-事件</h4>
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
                <td>on-select</td>
                <td>选择菜单（Menu-item）时触发</td>
                <td>name</td>
              </tr>
              <tr>
                <td>on-open-change</td>
                <td>当 展开/收起 子菜单时触发</td>
                <td>当前展开的 Submenu 的 name 值数组</td>
              </tr>
            </tbody>
          </table>
          <h4>menuGroup</h4>
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
                <td>title</td>
                <td>分组标题</td>
                <td>String</td>
                <td>空</td>
              </tr>
            </tbody>
          </table>
          <h4>menu-item</h4>
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
                <td>slot</td>
                <td>标题</td>
                <td>String</td>
                <td>空</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </ga-panel>
  </v-page>
</template>
<script>
import basicmenu from "./module/basicmenu.vue";
import menuleft from "./module/menuLeftNew.vue";
import smallmenu from "./module/smallmenu.vue";
export default {
  components: {
    basicmenu,
    menuleft,
    smallmenu
  }
};
</script>
