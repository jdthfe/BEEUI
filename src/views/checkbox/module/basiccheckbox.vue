<template>
  <ga-panel :moduleName="moduleName">
    <v-checkbox-group v-model="social">
      <v-checkbox label="twitter" disabled>
        <v-icon type="social-twitter"></v-icon>
        <span>Twitter</span>
      </v-checkbox>
      <v-checkbox label="facebook">
        <v-icon type="social-facebook"></v-icon>
        <span>Facebook</span>
      </v-checkbox>
      <v-checkbox label="github">
        <v-icon type="social-github"></v-icon>
        <span>Github</span>
      </v-checkbox>
      <v-checkbox label="snapchat">
        <v-icon type="social-snapchat"></v-icon>
        <span>Snapchat</span>
      </v-checkbox>
    </v-checkbox-group>
    {{social}}
    <v-checkbox-group v-model="fruit" @on-change="onChange">
      <ga-row class="aaa">
        <ga-col class="bbb">
          <v-checkbox label="香蕉"></v-checkbox>
          <v-checkbox label="苹果"></v-checkbox>
          <v-checkbox label="西瓜"></v-checkbox>
        </ga-col>
      </ga-row>
    </v-checkbox-group>
    {{fruit}}
    <v-code language="html">
      {{Code.base}}
    </v-code>
  </ga-panel>
</template>
<script>
import vCheckbox from '@/package/components/checkbox/checkbox.vue';
import vCheckboxGroup from '@/package/components/checkbox/checkbox-group.vue';
import vIcon from '@/package/components/icon/icon.vue';

import Code from '@/public/code/checkbox.js';

export default {
  components: {
    vCheckbox,
    vIcon,
    vCheckboxGroup
  },

  data() {
    return {
      moduleName: '基础复选框',
      Code:Code,
      social: ['facebook', 'github'],
      fruit: ['苹果']
    }
  },

  methods: {
    onChange(val) {
      console.log(val)
    }
  }
}

</script>
