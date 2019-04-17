<template>
  <v-page>
    <ga-row>
      <basicgrid/>
    </ga-row>
    <ga-panel moduleName="API说明/事件说明">
      <ga-row>
        <div class="api">
          <h4>row</h4>
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
                <td>gutter</td>
                <td>栅格间距，单位 px，左右平分</td>
                <td>Number</td>
                <td>0</td>
              </tr>
              <tr>
                <td>type</td>
                <td>布局模式，可选值为<code>flex</code>或不选，在现代浏览器下有效</td>
                <td>String</td>
                <td>-</td>
              </tr>
              <tr>
                <td>align</td>
                <td>flex 布局下的垂直对齐方式，可选值为<code>top</code>、<code>middle</code>、<code>bottom</code></td>
                <td>String</td>
                <td>-</td>
              </tr>
              <tr>
                <td>justify</td>
                <td>flex 布局下的水平排列方式，可选值为<code>start</code>、<code>end</code>、<code>center</code>、<code>space-around</code>、<code>space-between</code></td>
                <td>String</td>
                <td>-</td>
              </tr>
              <tr>
                <td>class-name</td>
                <td>自定义的class名称</td>
                <td>String</td>
                <td>-</td>
              </tr>
            </tbody>
          </table>
          <h4>col</h4>
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
                <td>span</td>
                <td>栅格的占位格数，可选值为0~24的整数，为 0 时，相当于<code>display:none</code></td>
                <td>Number | String</td>
                <td>-</td>
              </tr>
              <tr>
                <td>order</td>
                <td>栅格的顺序，在<code>flex</code>布局模式下有效</td>
                <td>Number | String</td>
                <td>-</td>
              </tr>
              <tr>
                <td>offset</td>
                <td>栅格左侧的间隔格数，间隔内不可以有栅格</td>
                <td>Number | String</td>
                <td>-</td>
              </tr>
              <tr>
                <td>push</td>
                <td>栅格向右移动格数</td>
                <td>Number | String</td>
                <td>-</td>
              </tr>
              <tr>
                <td>pull</td>
                <td>栅格向左移动格数</td>
                <td>Number | String</td>
                <td>-</td>
              </tr>
              <tr>
                <td>class-name</td>
                <td>自定义的class名称</td>
                <td>String</td>
                <td>-</td>
              </tr>
              <tr>
                <td>xs</td>
                <td><code>&lt;768px</code> 响应式栅格，可为栅格数或一个包含其他属性的对象</td>
                <td>Number | Object</td>
                <td>-</td>
              </tr>
              <tr>
                <td>sm</td>
                <td><code>≥768px</code> 响应式栅格，可为栅格数或一个包含其他属性的对象</td>
                <td>Number | Object</td>
                <td>-</td>
              </tr>
              <tr>
                <td>md</td>
                <td><code>≥992px</code> 响应式栅格，可为栅格数或一个包含其他属性的对象</td>
                <td>Number | Object</td>
                <td>-</td>
              </tr>
              <tr>
                <td>lg</td>
                <td><code>≥1200px</code> 响应式栅格，可为栅格数或一个包含其他属性的对象</td>
                <td>Number | Object</td>
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
import basicgrid from './module/basicgrid.vue';
export default {
  components: {
    basicgrid
  }
}

</script>
