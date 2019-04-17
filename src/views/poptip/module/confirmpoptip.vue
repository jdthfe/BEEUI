<template>
  <ga-panel moduleName="confirm使用">
    
    <table>
      <tr>
        <td>
          <ga-poptip
            confirm
            title="您确认删除这条内容吗？"
            @on-ok="ok"
            @on-cancel="cancel">
            <ga-button>删除</ga-button>
          </ga-poptip>
        </td>
      </tr>
      <tr>
        <td>
          <ga-poptip
            confirm
            title="您确认删除这条内容吗？"
            @on-ok="ok"
            @on-cancel="cancel">
            <ga-button>删除</ga-button>
          </ga-poptip>
        </td>
      </tr>
    </table>
    <v-code language="html" style="width:100%;clear:both">
      {{Code.confirm}}
    </v-code>
  </ga-panel>
</template>
<script>
import gaPoptip from "@/package/components/poptip/poptip.vue";
import gaButton from "@/package/components/button/button.vue";
import Message from "@/package/components/message/index.js";

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
  },
  methods: {
    ok() {
      Message.info("点击了确定");
    },
    cancel() {
      Message.info("点击了取消");
    }
  }
};
</script>
