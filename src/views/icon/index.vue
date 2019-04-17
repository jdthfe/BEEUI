<template>
  <v-page>
    <ga-panel moduleName="API说明">
      <div class="api">
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
              <td>type</td>
              <td>图标的名称</td>
              <td>String</td>
              <td>-</td>
            </tr>
            <tr>
              <td>size</td>
              <td>图标的大小，单位是 px</td>
              <td>Number | String</td>
              <td>-</td>
            </tr>
            <tr>
              <td>color</td>
              <td>图标的颜色</td>
              <td>String</td>
              <td>-</td>
            </tr>
          </tbody>
        </table>
      </div>
    </ga-panel>
    <ga-panel :moduleName="moduleName">
      <div class="icons">
        <div class="icons-item" v-for="item in iconsName" @click="clip(item)">
          <i class="ga-icon" :class="[`ga-icon-${item.name}`]" style="font-size:32px"></i>
          <p>
            {{ item.name }}
          </p>
        </div>
      </div>
    </ga-panel>
  </v-page>
</template>
<style>
.icons-item {
  float: left;
  margin: 6px 6px 6px 0;
  width: 145px;
  text-align: center;
  list-style: none;
  cursor: pointer;
  height: 100px;
  color: #5c6b77;
  transition: all .2s ease;
  position: relative;
  padding-top: 10px;
}

</style>
<script>
import Clipboard from 'clipboard';
import vPage from '@/public/components/common/page.vue';
import vPanel from '@/public/components/common/panel.vue';

import Icon from '@/package/components/icon/icon.vue';
import Message from '@/package/components/message/index.js';

import iconsName from './iconname';

export default {
  components: {
    vPanel,
    Icon,
    vPage
  },

  data() {
    return {
      moduleName: '基础显示',
      iconsName: iconsName
    }
  },
  props: {

  },
  mounted() {

  },

  watch: {

  },

  methods: {
    clip(type) {
      const icon = `<ga-icon type="${type.name}"></ga-icon>`;
      const clipboard = new Clipboard('.icons', {
        text() {
          return icon
        }
      });
      clipboard.on('success', (e) => {
        e.clearSelection();
        clipboard.destroy();
        Message.success('组件代码已经复制到剪贴板');
      });
    },
  }
}

</script>
