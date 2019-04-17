<template>
  <v-page>
    <ga-row>
      <basicslider/>
    </ga-row>
    <ga-panel moduleName="API说明/事件说明">
      <ga-row>
        <div class="api">
    <div class="anchor">
        <h3 id="Slider_props">Slider props</h3>
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
                <td>value</td>
                <td>滑块选定的值，可以使用 v-model 双向绑定数据。普通模式下，数据格式为数字，在双滑块模式下，数据格式为长度是2的数组，且每项都为数字</td>
                <td>Number | Array</td>
                <td>0</td>
            </tr>
            <tr>
                <td>min</td>
                <td>最小值</td>
                <td>Number</td>
                <td>0</td>
            </tr>
            <tr>
                <td>max</td>
                <td>最大值</td>
                <td>Number</td>
                <td>100</td>
            </tr>
            <tr>
                <td>step</td>
                <td>步长，取值建议能被（max - min）整除</td>
                <td>Number</td>
                <td>1</td>
            </tr>
            <tr>
                <td>disabled</td>
                <td>是否禁用滑块</td>
                <td>Boolean</td>
                <td>false</td>
            </tr>
            <tr>
                <td>range</td>
                <td>是否开启双滑块模式</td>
                <td>Boolean</td>
                <td>false</td>
            </tr>
            <tr>
                <td>show-input</td>
                <td>是否显示数字输入框，仅在单滑块模式下有效</td>
                <td>Boolean</td>
                <td>false</td>
            </tr>
            <tr>
                <td>show-stops</td>
                <td>是否显示间断点，建议在 step 不密集时使用</td>
                <td>Boolean</td>
                <td>false</td>
            </tr>
            <tr>
                <td>show-tip</td>
                <td>提示的显示控制，可选值为 <code>hover</code>（悬停，默认）、<code>always</code>（总是可见）、<code>never</code>（不可见）</td>
                <td>String</td>
                <td>hover</td>
            </tr>
            <tr>
                <td>tip-format</td>
                <td>Slider 会把当前值传给 <code>tip-format</code>，并在 Tooltip 中显示 tip-format 的返回值，若为 null，则隐藏 Tooltip</td>
                <td>Function</td>
                <td>value</td>
            </tr>
            <tr>
                <td>input-size</td>
                <td>数字输入框的尺寸，可选值为<code>large</code>、<code>small</code>、<code>default</code>或者不填，仅在开启 show-input 时有效</td>
                <td>String</td>
                <td>default</td>
            </tr>
        </tbody>
    </table>
    <div class="anchor">
        <h3 id="Slider_events">Slider events</h3>
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
                <td>on-change</td>
                <td>在松开滑动时触发，返回当前的选值，在滑动过程中不会触发</td>
                <td>value</td>
            </tr>
            <tr>
                <td>on-input</td>
                <td>滑动条数据变化时触发，返回当前的选值，在滑动过程中实时触发</td>
                <td>value</td>
            </tr>
        </tbody>
    </table>
</div>
      </ga-row>
    </ga-panel>
  </v-page>
</template>
<script>
import basicslider from "./module/basicslider.vue";
export default {
  components: {
    basicslider
  }
};
</script>
