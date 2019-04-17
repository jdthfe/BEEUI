<template>
  <ga-panel moduleName="slot使用">
    <ga-poptip placement="right" width="400">
        <ga-button type="ghost">click 激活</ga-button>
        <div class="api" slot="content">
            <table>
                <thead>
                    <tr>
                        <th>版本号</th>
                        <th>更新时间</th>
                        <th>说明</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>0.9.5</td>
                        <td>2016-10-26</td>
                        <td>新增信息提示组件 <code>Tooltip</code>和<code>Poptip</code></td>
                    </tr>
                    <tr>
                        <td>0.9.4</td>
                        <td>2016-10-25</td>
                        <td>新增对话框组件 <code>Modal</code></td>
                    </tr>
                    <tr>
                        <td>0.9.2</td>
                        <td>2016-09-28</td>
                        <td>新增选择器组件 <code>Select</code></td>
                    </tr>
                </tbody>
            </table>
        </div>
    </ga-poptip>
    <v-code language="html" style="width:100%;clear:both">
      {{Code.slot}}
    </v-code>
  </ga-panel>
</template>
<script>
import gaPoptip from "@/package/components/poptip/poptip.vue";
import gaButton from '@/package/components/button/button.vue';

import Code from "@/public/code/poptip.js";

export default {
  components: {
    gaPoptip,
    gaButton
  },
  data() {
    return {
      Code: Code
    };
  }
};
</script>
