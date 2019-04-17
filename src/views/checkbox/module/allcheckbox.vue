<template>
  <ga-panel :moduleName="moduleName">
    <div style="border-bottom: 1px solid #e9e9e9;padding-bottom:6px;margin-bottom:6px;">
      <ga-checkbox :indeterminate="indeterminate" :value="checkAll" @click.prevent.native="handleCheckAll">全选</ga-checkbox>
    </div>
    <ga-checkbox-group v-model="checkAllGroup" @on-change="checkAllGroupChange">
      <ga-checkbox label="香蕉"></ga-checkbox>
      <ga-checkbox label="苹果"></ga-checkbox>
      <ga-checkbox label="西瓜"></ga-checkbox>
    </ga-checkbox-group>
    <v-code language="html">
      {{Code.all}}
    </v-code>
  </ga-panel>
</template>
<script>
import gaCheckbox from '@/package/components/checkbox/checkbox.vue';
import gaCheckboxGroup from '@/package/components/checkbox/checkbox-group.vue';

import Code from '@/public/code/checkbox.js';

export default {
  components: {
    gaCheckbox,
    gaCheckboxGroup
  },

  data() {
    return {
      Code: Code,
      moduleName: '全选',
      indeterminate: true,
      checkAll: false,
      checkAllGroup: ['香蕉', '西瓜']
    }
  },
  methods: {
    handleCheckAll() {
      if (this.indeterminate) {
        this.checkAll = false;
      } else {
        this.checkAll = !this.checkAll;
      }
      this.indeterminate = false;

      if (this.checkAll) {
        this.checkAllGroup = ['香蕉', '苹果', '西瓜'];
      } else {
        this.checkAllGroup = [];
      }
    },
    checkAllGroupChange(data) {
      if (data.length === 3) {
        this.indeterminate = false;
        this.checkAll = true;
      } else if (data.length > 0) {
        this.indeterminate = true;
        this.checkAll = false;
      } else {
        this.indeterminate = false;
        this.checkAll = false;
      }
    }
  }
}

</script>
