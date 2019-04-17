<template>
  <v-page>
    <ga-row>
      <ga-col span="12">
        <basiccascader/>
      </ga-col>
      <ga-col span="12">
        <hovercascader/>
      </ga-col>
      <ga-col span="12">
        <disabledcascader/>
      </ga-col>
      <ga-col span="12">
        <lastvalue/>
      </ga-col>
      <ga-col span="12">
        <remotemethod/>
      </ga-col>
    </ga-row>
    <ga-panel moduleName="API说明/事件说明">
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
                <td>data</td>
                <td>可选项的数据源，格式参照示例说明</td>
                <td>Array</td>
                <td>[]</td>
              </tr>
              <tr>
                <td>value</td>
                <td>当前已选项的数据，格式参照示例说明</td>
                <td>Array</td>
                <td>[]</td>
              </tr>
              <tr>
                <td>render-format</td>
                <td>选择后展示的函数，用于自定义显示格式</td>
                <td>Function</td>
                <td>label =&gt; label.join(' / ')</td>
              </tr>
              <tr>
                <td>disabled</td>
                <td>是否禁用选择器</td>
                <td>Boolean</td>
                <td>false</td>
              </tr>
              <tr>
                <td>clearable</td>
                <td>是否支持清除</td>
                <td>Boolean</td>
                <td>true</td>
              </tr>
              <tr>
                <td>placeholder</td>
                <td>输入框占位符</td>
                <td>String</td>
                <td>请选择</td>
              </tr>
              <tr>
                <td>trigger</td>
                <td>次级菜单展开方式，可选值为 <code>click</code> 或 <code><font color="red">hover(方法废弃)</font></code></td>
                <td>String</td>
                <td>click</td>
              </tr>
              <tr>
                <td>change-on-select</td>
                <td>当此项为 true 时，点选每级菜单选项值都会发生变化，具体见上面的示例</td>
                <td>Function</td>
                <td>value</td>
              </tr>
              <tr>
                <td>size</td>
                <td>输入框大小，可选值为<code>large</code>和<code>small</code>或者不填</td>
                <td>String</td>
                <td>-</td>
              </tr>
              <tr>
                <td>width</td>
                <td>设置宽度(200或者10%)</td>
                <td>String,Number</td>
                <td>200</td>
              </tr>
              <tr>
                <td>last-value</td>
                <td>选择最里层选项的时候弹窗自动关闭</td>
                <td>Boolean</td>
                <td>false</td>
              </tr>
              <tr>
                <td>remote</td>
                <td>是否开启远程获取数据，只有在trigger为click时生效</td>
                <td>Boolean</td>
                <td>false</td>
              </tr>
              <tr>
                <td>remote-method</td>
                <td>自定义获取远程数据方法，remote配合一起使用，只有在trigger为click时生效</td>
                <td>Funciton</td>
                <td>-</td>
              </tr>
              <tr>
                <td>remote-level</td>
                <td>设置可展开的等级，目前最大支持4级</td>
                <td>String, Number</td>
                <td>3</td>
              </tr>
              <!--               <tr>
                <td>load-data</td>
                <td>动态获取数据，数据源需标识 loading</td>
                <td>Function</td>
                <td>-</td>
              </tr> -->
              <!--  <tr>
                <td>filterable</td>
                <td>是否支持搜索</td>
                <td>Boolean</td>
                <td>false</td>
              </tr> -->
              <!-- <tr>
                <td>not-found-text</td>
                <td>当搜索列表为空时显示的内容</td>
                <td>String</td>
                <td>无匹配数据</td>
              </tr> -->
              <!-- <tr>
                <td>transfer</td>
                <td>是否将弹层放置于 body 内，在 Tabs、带有 fixed 的 Table 列内使用时，建议添加此属性，它将不受父级样式影响，从而达到更好的效果</td>
                <td>Boolean</td>
                <td>false</td>
              </tr>
 -->
            </tbody>
          </table>
          <h4>事件说明</h4>
          <table class="table table-bordered table-hover">
            <thead>
              <tr style="background-color: rgb(0, 136, 204); color: rgb(255, 255, 255);">
                <th style="text-align: left; min-width: 77px;">属性</th>
                <th style="text-align: left; min-width: 77px;">说明</th>
                <th style="text-align: left; min-width: 77px;">返回值</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style="text-align: left;">on-change</td>
                <td style="text-align: left;">选择完成后的回调，返回值 value 即已选值 value，selectedData 为已选项的具体数据 </td>
                <td style="text-align: left;">value, selectedData</td>
              </tr>
            </tbody>
          </table>
        </div>
      </ga-row>
    </ga-panel>
  </v-page>
</template>
<script>

import basiccascader from './module/basiccascader.vue'
import hovercascader from './module/hovercascader.vue'
import disabledcascader from './module/disabledcascader.vue'
import lastvalue from './module/lastvalue.vue'
import remotemethod from './module/remotemethod.vue'
export default {
  components: {
    basiccascader,
    hovercascader,
    disabledcascader,
    lastvalue,
    remotemethod
  }
}

</script>
