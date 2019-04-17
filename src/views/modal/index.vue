<template>
  <v-page>
    <ga-row>
      <basic-modal></basic-modal>
      <zdy-modal></zdy-modal>
      <stop-close/>
    </ga-row>
    <ga-panel moduleName="API说明">
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
                <td>value</td>
                <td>对话框是否显示，可使用 v-model 双向绑定数据。</td>
                <td>Boolean</td>
                <td>false</td>
              </tr>
              <tr>
                <td>title</td>
                <td>对话框标题，如果使用 slot 自定义了页头，则 title 无效</td>
                <td>String</td>
                <td>-</td>
              </tr>
              <tr>
                <td>closable</td>
                <td>是否显示右上角的关闭按钮，关闭后 Esc 按键也将关闭</td>
                <td>Boolean</td>
                <td>true</td>
              </tr>
              <tr>
                <td>mask-closable</td>
                <td>是否允许点击遮罩层关闭</td>
                <td>Boolean</td>
                <td>true</td>
              </tr>
              <tr>
                <td>loading</td>
                <td>点击确定按钮时，确定按钮是否显示 loading 状态，开启则需手动设置<code>visible</code>来关闭对话框</td>
                <td>Boolean</td>
                <td>false</td>
              </tr>
              <tr>
                <td>scrollable</td>
                <td>页面是否可以滚动</td>
                <td>Boolean</td>
                <td>false</td>
              </tr>
              <tr>
                <td>ok-text</td>
                <td>确定按钮文字</td>
                <td>String</td>
                <td>确定</td>
              </tr>
              <tr>
                <td>cancel-text</td>
                <td>取消按钮文字</td>
                <td>String</td>
                <td>取消</td>
              </tr>
              <tr>
                <td>width</td>
                <td>对话框宽度，单位 px。对话框的宽度是响应式的，当屏幕尺寸小于 768px 时，宽度会变为自动<code>auto</code></td>
                <td>Number | String</td>
                <td>520</td>
              </tr>
              <tr>
                <td>style</td>
                <td>设置浮层样式，调整浮层位置等</td>
                <td>Object</td>
                <td>-</td>
              </tr>
              <tr>
                <td>class-name</td>
                <td>设置对话框容器的类名，可辅助实现垂直居中等自定义效果</td>
                <td>String</td>
                <td>-</td>
              </tr>
              <tr>
                <td>transition-names</td>
                <td>自定义显示动画，第一项是模态框，第二项是背景</td>
                <td>Array</td>
                <td>['ease', 'fade']</td>
              </tr>
            </tbody>
          </table>
          <h4>事件说明</h4>
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
                <td style="text-align: left;">on-ok</td>
                <td style="text-align: left;">点击确定的回调</td>
                <td style="text-align: left;">Function</td>
                <td></td>
              </tr>
              <tr>
                <td style="text-align: left;">on-cancel</td>
                <td style="text-align: left;">点击取消的回调</td>
                <td style="text-align: left;">Function</td>
                <td></td>
              </tr>
              <tr>
                <td style="text-align: left;">on-mask</td>
                <td style="text-align: left;">点击浮层的回调</td>
                <td style="text-align: left;">Function</td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>
      </ga-row>
    </ga-panel>
  </v-page>
</template>
<script>
import basicModal from './module/basicModal.vue';
import zdyModal from './module/zidingyiModal.vue';
import stopClose from './module/stopClose.vue';

export default {
  components: {
    basicModal,
    zdyModal,
    stopClose
  },
  data() {
    return {}
  },


  methods: {

  }
}

</script>
