<template>
  <v-page>
    <ga-row>
      <basebacktop/>
      <zdybacktop/>
    </ga-row>
    <ga-panel moduleName="API说明">
      <ga-row>
        <div class="api">
          <div class="anchor">
            <h3 id="BackTop_props">BackTop props</h3>
          </div>
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
                <td>height</td>
                <td>页面滚动高度达到该值时才显示<code>BackTop</code>组件</td>
                <td>Number</td>
                <td>400</td>
              </tr>
              <tr>
                <td>bottom</td>
                <td>组件距离底部的距离</td>
                <td>Number</td>
                <td>30</td>
              </tr>
              <tr>
                <td>right</td>
                <td>组件距离右部的距离</td>
                <td>Number</td>
                <td>30</td>
              </tr>
              <tr>
                <td>duration</td>
                <td>滚动动画持续时间，单位 毫秒</td>
                <td>Number</td>
                <td>1000</td>
              </tr>
            </tbody>
          </table>
          <div class="anchor">
            <h3 id="BackTop_events">BackTop events</h3>
          </div>
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
                <td>点击按钮时触发</td>
                <td>无</td>
              </tr>
            </tbody>
          </table>
        </div>
      </ga-row>
    </ga-panel>
  </v-page>
</template>
<script>
import basebacktop from './module/basebacktop.vue';
import zdybacktop from './module/zdybacktop.vue';
export default {
  components: {
    basebacktop,
    zdybacktop
  }
}

</script>
