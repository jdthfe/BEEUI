<template>
  <ga-panel :moduleName="moduleName">
    <v-page :total="100" show-sizer show-elevator show-total placement="bottom" align="left"></v-page>
    <v-page :total="100" show-sizer show-elevator show-total size="small" align="right"></v-page>
    <v-code language="html" style="width:100%;clear:both">
      {{Code.base}}
    </v-code>
  </ga-panel>
</template>
<script>
import vPage from '@/package/components/page/page.vue';
import vOptions from '@/package/components/page/options.vue';
import Code from '@/public/code/page.js';

export default {
  components: {
    vPage,
    vOptions
  },

  data() {
    return {
      Code: Code,
      moduleName: '分页位置',
    }
  }
}

</script>
