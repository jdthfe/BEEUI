<template>
  <ga-panel :moduleName="moduleName">
    <ga-row>
      <p>通过添加loading属性可以让按钮处于加载中状态，后两个按钮在点击时进入加载状态。</p>
      <ga-button type="primary" loading>Loading...</ga-button>
      <ga-button type="primary" :loading="loading" @on-click="toLoading">
        <span v-if="!loading">Click me!</span>
        <span v-else>Loading...</span>
      </ga-button>
      <ga-button type="primary" :loading="loading2" icon="checkmark-round" @on-click="toLoading2">
        <span v-if="!loading2">Click me!</span>
        <span v-else>Loading...</span>
      </ga-button>
    </ga-row>
    <v-code language="html">
      {{Code.loading}}
    </v-code>
  </ga-panel>
</template>
<script>
import gaButton from '@/package/components/button/button.vue';
import Code from '@/public/code/button.js';
export default {
  components: {
    gaButton
  },
  data() {
    return {
      moduleName: 'Loading按钮',
      Code: Code,
      loading: false,
      loading2: false
    }
  },

  methods: {
    toLoading() {
      this.loading = true;
    },
    toLoading2() {
      this.loading2 = true;
    }
  }

}

</script>
