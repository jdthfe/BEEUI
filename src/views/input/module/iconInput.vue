<template>
  <ga-panel :moduleName="moduleName">
    <p>通过 icon 属性可以在输入框右边加一个图标。点击图标，会触发 on-click 事件</p>
    <ga-input 
      v-model="value4" 
      suffix-icon="ios-clock-outline" 
      placeholder="请输入..."
      @on-click="onChangeFn"/>
    <ga-input 
      v-model="value4" 
      prefix-icon="ios-search" 
      placeholder="请输入..."
      @on-click="onChangeFn"/>  
    <v-code language="html">
      {{Code.icon}}
    </v-code>
  </ga-panel>
</template>
<script>
import gaInput from '@/package/components/input/input.vue';
import Code from '@/public/code/input.js';
export default {
  components: {
    gaInput
  },
  data() {
    return {
      moduleName: 'icon input',
      value4: '',
      Code:Code
    }
  },
  methods: {
    onChangeFn(val) {
      console.log(val)
    }
  }
}
</script>
