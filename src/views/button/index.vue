<template>
  <v-page>
    <ga-row>
      <basic-button></basic-button>
      <shape-button></shape-button>
      <size-button></size-button>
      <loading-button></loading-button>
    </ga-row>
    <ga-panel moduleName="API说明">
      <ga-row>
        <div class="api">
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
                <td>按钮类型，可选值为<code>primary</code>、<code>ghost</code>、<code>dashed</code>、<code>text</code>、<code>info</code>、<code>success</code>、<code>warning</code>、<code>error</code>或者不设置</td>
                <td>String</td>
                <td>-</td>
              </tr>
              <tr>
                <td>size</td>
                <td>按钮大小，可选值为<code>large</code>和<code>small</code>或者不设置</td>
                <td>String</td>
                <td>-</td>
              </tr>
              <tr>
                <td>shape</td>
                <td>按钮形状，可选值为<code>circle</code>或者不设置</td>
                <td>String</td>
                <td>-</td>
              </tr>
              <tr>
                <td>long</td>
                <td>开启后，按钮的长度为 100%</td>
                <td>Boolean</td>
                <td>false</td>
              </tr>
              <tr>
                <td>html-type</td>
                <td>设置<code>button</code>原生的<code>type</code>，可选值为<code>button</code>、<code>submit</code>、<code>reset</code></td>
                <td>String</td>
                <td>button</td>
              </tr>
              <tr>
                <td>disabled</td>
                <td>设置按钮为禁用状态</td>
                <td>Boolean</td>
                <td>false</td>
              </tr>
              <tr>
                <td>loading</td>
                <td>设置按钮为加载中状态</td>
                <td>Boolean</td>
                <td>false</td>
              </tr>
              <tr>
                <td>icon</td>
                <td>设置按钮的图标类型</td>
                <td>String</td>
                <td>-</td>
              </tr>
              <tr>
                <td>on-click</td>
                <td>绑定的click方法</td>
                <td>Function</td>
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
import vPage from '@/public/components/common/page.vue';
import vPanel from '@/public/components/common/panel.vue';

import basicButton from './module/basicButton.vue'
import shapeButton from './module/shapeButton.vue'
import sizeButton from './module/sizeButton.vue'
import loadingButton from './module/loadingButton.vue'

export default {
  components: {
    vPage, //页面公共模版
    basicButton,
    shapeButton,
    vPanel,
    sizeButton,
    loadingButton
  }
}

</script>
