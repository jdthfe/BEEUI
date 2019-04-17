<template>
  <v-page>
    <ga-row>
      <basicdropdown/>
    </ga-row>
    <ga-panel moduleName="API说明/事件说明">
      <ga-row>
        <div class="api">
          <h4>API说明</h4>
          <table class="table table-bordered table-hover">
            <thead>
              <tr style="background-color: rgb(0, 136, 204); color: rgb(255, 255, 255);">
                <th style="text-align: left; min-width: 77px;">属性</th>
                <th style="text-align: left; min-width: 77px;">说明</th>
                <th style="text-align: left; min-width: 77px;">类型</th>
                <th style="min-width: 77px;">默认值</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>trigger</td>
                <td>触发方式，可选值为 <code>hover</code>（悬停）<code>click</code>（点击）<code>custom</code>（自定义），使用 custom 时，需配合 visible 一起使用</td>
                <td>String</td>
                <td>hover</td>
              </tr>
              <tr>
                <td>visible</td>
                <td>手动控制下拉框的显示，在 trigger = 'custom' 时使用</td>
                <td>Boolean</td>
                <td>false</td>
              </tr>
            </tbody>
          </table>
          <h4>事件说明</h4>
          <table class="table table-bordered table-hover">
            <thead>
              <tr style="background-color: rgb(0, 136, 204); color: rgb(255, 255, 255);">
                <th style="text-align: left; min-width: 77px;">事件名</th>
                <th style="text-align: left; min-width: 77px;">说明</th>
                <th style="text-align: left; min-width: 77px;">返回值</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>on-click</td>
                <td>点击菜单项时触发</td>
                <td>Dropdown-item 的 name 值</td>
              </tr>
              <tr>
                <td>on-visible-change</td>
                <td>菜单显示状态改变时调用</td>
                <td>visible</td>
              </tr>
            </tbody>
          </table>
          <h4>dropmenu</h4>
          <table>
            <thead>
              <tr>
                <th>名称</th>
                <th>说明</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>list</td>
                <td>列表内容，一般由 <code>Dropdown-menu</code> 承担</td>
              </tr>
            </tbody>
          </table>
          <h4>dropdown-item</h4>
          <table>
            <thead>
              <tr>
                <th>名称</th>
                <th>说明</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>selected</td>
                <td>设置选中项，默认为true</td>
              </tr>
            </tbody>
          </table>
        </div>
      </ga-row>
    </ga-panel>
  </v-page>
</template>
<script>
import basicdropdown from './module/basicdropdown.vue';
export default {
  components: {
    basicdropdown,
  }
}

</script>
