<template>
  <v-page>
    <ga-row>
      <basic-input></basic-input>
      <size-input></size-input>
      <textareainput/>
      <icon-input/>
      <composite-input/>
      <clearableinput/>
    </ga-row>
    <ga-panel moduleName="API说明／事件说明">
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
                <td>type</td>
                <td>输入框类型，可选值为 <code>text</code>、<code>password</code> 或 <code>textarea</code></td>
                <td>String</td>
                <td>text</td>
              </tr>
              <tr>
                <td>value</td>
                <td>绑定的值，可使用 v-model 双向绑定</td>
                <td>String | Number</td>
                <td>空</td>
              </tr>
              <tr>
                <td>size</td>
                <td>输入框尺寸，可选值为<code>large</code>和<code>small</code>或者不设置</td>
                <td>String</td>
                <td>-</td>
              </tr>
              <tr>
                <td>placeholder</td>
                <td>占位文本</td>
                <td>String</td>
                <td>-</td>
              </tr>
              <tr>
                <td>disabled</td>
                <td>设置输入框为禁用状态</td>
                <td>Boolean</td>
                <td>false</td>
              </tr>
              <tr>
                <td>readonly</td>
                <td>设置输入框为只读</td>
                <td>Boolean</td>
                <td>false</td>
              </tr>
              <tr>
                <td>maxlength</td>
                <td>最大输入长度</td>
                <td>Number</td>
                <td>-</td>
              </tr>
              <!-- <tr>
                <td>icon</td>
                <td>输入框尾部图标，仅在 text 类型下有效</td>
                <td>String</td>
                <td>-</td>
              </tr> -->
              <tr>
                <td>rows</td>
                <td>文本域默认行数，仅在 textarea 类型下有效</td>
                <td>Number</td>
                <td>2</td>
              </tr>
              <tr>
                <td>autosize</td>
                <td>自适应内容高度，仅在 textarea 类型下有效，可传入对象，如 { minRows: 2, maxRows: 6 }</td>
                <td>Boolean | Object</td>
                <td>false</td>
              </tr>
              <tr>
                <td>number</td>
                <td>将用户的输入转换为 Number 类型</td>
                <td>Boolean</td>
                <td>false</td>
              </tr>
              <tr>
                <td>width</td>
                <td>设置input宽度(200或者10%)</td>
                <td>String,Number</td>
                <td>200</td>
              </tr>
              <tr>
                <td>prefix-icon</td>
                <td>输入框头部图标</td>
                <td>String</td>
                <td>-</td>
              </tr>
              <tr>
                <td>suffix-icon</td>
                <td>输入框尾部图标</td>
                <td>String</td>
                <td>-</td>
              </tr>
              <tr>
                <td>clearable</td>
                <td>设置输入框是否有清空按钮</td>
                <td>Boolean</td>
                <td>false</td>
              </tr>
            </tbody>
          </table>
          <h4>事件说明</h4>
          <table class="table table-bordered table-hover">
            <thead>
              <tr style="background-color: rgb(0, 136, 204); color: rgb(255, 255, 255);">
                <th style="text-align: left; min-width: 77px;">事件名称</th>
                <th style="text-align: left; min-width: 77px;">说明</th>
                <th style="min-width: 77px;">返回值</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>on-enter</td>
                <td>按下回车键时触发</td>
                <td>无</td>
              </tr>
              <tr>
                <td>on-click</td>
                <td>设置 icon 属性后，点击图标时触发</td>
                <td>无</td>
              </tr>
              <tr>
                <td>on-change</td>
                <td>数据改变时触发</td>
                <td>event</td>
              </tr>
              <tr>
                <td>on-focus</td>
                <td>输入框聚焦时触发</td>
                <td>无</td>
              </tr>
              <tr>
                <td>on-blur</td>
                <td>输入框失去焦点时触发</td>
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

import basicInput from './module/basicInput.vue';
import sizeInput from './module/sizeInput.vue';
import textareainput from './module/textareainput.vue';
import iconInput from './module/iconInput.vue';
import compositeInput from './module/compositeInput.vue';
import clearableinput from './module/clearableinput.vue';

export default {
  components: {
    basicInput,
    sizeInput,
    textareainput,
    iconInput,
    compositeInput,
    clearableinput
  }
}

</script>
