<template>
  <ga-panel :moduleName="moduleName">
    <ga-checkbox-group 
      v-model="fruit" 
      @on-change="onChange"
      value-object>
      <ga-checkbox 
        :label="item"
        :value-object="item"
        v-for="(item, index) in fruitList"
        :key="index">{{item.label}}</ga-checkbox>
    </ga-checkbox-group>
    {{fruit}}
    <v-code language="html">
      {{Code.object}}
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
      moduleName: '绑定对象场景使用',
      Code:Code,
      fruit: [],
      fruitList: [
        {
          value: 1,
          label: '香蕉'
        },
        {
          value: 2,
          label: '苹果'
        },
        {
          value: 3,
          label: '西瓜'
        }
      ]
    }
  },

  methods: {
    onChange(val) {
      console.log(val)
    }
  }
}

</script>
