<template>
  <v-page>
    <ga-row>
      <basicpage/>
      <alignpage/>
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
                <td>current</td>
                <td>当前页码</td>
                <td>Number</td>
                <td>1</td>
              </tr>
              <tr>
                <td>total</td>
                <td>数据总数</td>
                <td>Number</td>
                <td>0</td>
              </tr>
              <tr>
                <td>page-size</td>
                <td>每页条数</td>
                <td>Number</td>
                <td>10</td>
              </tr>
              <tr>
                <td>page-size-opts</td>
                <td>每页条数切换的配置</td>
                <td>Array</td>
                <td>[10, 20, 30, 40]</td>
              </tr>
              <tr>
                <td>placement</td>
                <td>条数切换弹窗的展开方向，可选值为 <code>bottom</code> 和 <code>top</code></td>
                <td>String</td>
                <td>bottom</td>
              </tr>
              <tr>
                <td>size</td>
                <td>可选值为<code>small</code>（迷你版）或不填（默认）</td>
                <td>String</td>
                <td>-</td>
              </tr>
              <tr>
                <td>simple</td>
                <td>简洁版</td>
                <td>Boolean</td>
                <td>false</td>
              </tr>
              <tr>
                <td>show-total</td>
                <td>显示总数</td>
                <td>Boolean</td>
                <td>false</td>
              </tr>
              <tr>
                <td>show-elevator</td>
                <td>显示电梯，可以快速切换到某一页</td>
                <td>Boolean</td>
                <td>false</td>
              </tr>
              <tr>
                <td>show-sizer</td>
                <td>显示分页，用来改变<code>page-size</code></td>
                <td>Boolean</td>
                <td>false</td>
              </tr>
              <tr>
                <td>class-name</td>
                <td>自定义 class 名称</td>
                <td>String</td>
                <td>-</td>
              </tr>
              <tr>
                <td>align</td>
                <td>定义分页位置，left和right配置</td>
                <td>String</td>
                <td>空</td>
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
                <td>页码改变的回调，返回改变后的页码</td>
                <td>页码</td>
              </tr>
              <tr>
                <td>on-page-size-change</td>
                <td>切换每页条数时的回调，返回切换后的每页条数</td>
                <td>page-size</td>
              </tr>
            </tbody>
          </table>
        </div>
      </ga-row>
    </ga-panel>
  </v-page>
</template>
<script>
import basicpage from './module/basicpage.vue';
import alignpage from './module/alignpage.vue';

export default {
  components: {
    basicpage,
    alignpage
  },
}

</script>
