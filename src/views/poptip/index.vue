<template>
  <v-page>
    <ga-row>
      <basicpoptip/>
      <modelpoptip/>
      <complexpoptip/>
      <confirmpoptip/>
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
            <td>trigger</td>
            <td>触发方式，可选值为<code>hover</code>（悬停）<code>click</code>（点击）<code>focus</code>（聚焦）,在 confirm 模式下，只有 click 有效</td>
            <td>String</td>
            <td>click</td>
        </tr>
        <tr>
            <td>title</td>
            <td>显示的标题</td>
            <td>String | Number</td>
            <td>-</td>
        </tr>
        <tr>
            <td>content</td>
            <td>显示的正文内容，只在非 confirm 模式下有效</td>
            <td>String | Number</td>
            <td>空</td>
        </tr>
        <tr>
            <td>placement</td>
            <td>提示框出现的位置，可选值为<code>top</code><code>top-start</code><code>top-end</code><code>bottom</code><code>bottom-start</code><code>bottom-end</code><code>left</code><code>left-start</code><code>left-end</code><code>right</code><code>right-start</code><code>right-end</code></td>
            <td>String</td>
            <td>top</td>
        </tr>
        <tr>
            <td>width</td>
            <td>宽度，最小宽度为 150px，在 confirm 模式下，默认最大宽度为 300px</td>
            <td>String | Number</td>
            <td>-</td>
        </tr>
        <tr>
            <td>confirm</td>
            <td>是否开启对话框模式</td>
            <td>Boolean</td>
            <td>false</td>
        </tr>
        <tr>
            <td>ok-text</td>
            <td>确定按钮的文字，只在 confirm 模式下有效</td>
            <td>String</td>
            <td>确定</td>
        </tr>
        <tr>
            <td>cancel-text</td>
            <td>取消按钮的文字，只在 confirm 模式下有效</td>
            <td>String</td>
            <td>取消</td>
        </tr>
        <tr>
            <td>append-to-body</td>
            <td>下拉弹窗是否添加到body中</td>
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
            <td>on-popper-show</td>
            <td>在提示框显示时触发</td>
            <td>无</td>
        </tr>
        <tr>
            <td>on-popper-hide</td>
            <td>在提示框消失时触发</td>
            <td>无</td>
        </tr>
        <tr>
            <td>on-ok</td>
            <td>点击确定的回调，只在 confirm 模式下有效</td>
            <td>无</td>
        </tr>
        <tr>
            <td>on-cancel</td>
            <td>点击取消的回调，只在 confirm 模式下有效</td>
            <td>无</td>
        </tr>
    </tbody>
</table>
<h4>slot</h4>
<table>
    <thead>
        <tr>
            <th>名称</th>
            <th>说明</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>无</td>
            <td>主体内容</td>
        </tr>
        <tr>
            <td>title</td>
            <td>提示框标题，定义此 slot 时，会覆盖 props <code>title</code></td>
        </tr>
        <tr>
            <td>content</td>
            <td>提示框内容，定义此 slot 时，会覆盖 props <code>content</code>，只在非 confirm 模式下有效</td>
        </tr>
    </tbody>
</table>
        </div>
      </ga-row>
    </ga-panel>
  </v-page>
</template>
<script>
import basicpoptip from "./module/basicpoptip.vue";
import modelpoptip from "./module/modelpoptip.vue";
import complexpoptip from "./module/complexpoptip.vue";
import confirmpoptip from "./module/confirmpoptip.vue";
export default {
  components: {
    basicpoptip,
    modelpoptip,
    complexpoptip,
    confirmpoptip
  }
};
</script>
