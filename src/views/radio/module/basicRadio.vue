<template>
  <ga-panel :moduleName="moduleName">
    {{button5}}
    <Radio-group v-model="button5" type="button" @on-change="onChange">
      <Radio :label="item.name" :type="item.type" v-for="(item,index) in radioData" :key="index"></Radio>
    </Radio-group>
    <Radio-group v-model="button6" type="button" size="small">
      <Radio label="整体"></Radio>
      <Radio label="POP"></Radio>
      <Radio label="自营"></Radio>
    </Radio-group>
    {{button6}}
    <v-code language="html">
      {{Code.base}}
    </v-code>
  </ga-panel>
</template>
<script>
import Radio from '@/package/components/radio/radio.vue';
import RadioGroup from '@/package/components/radio/radio-group.vue';
import Code from '@/public/code/radio.js';
export default {
  components: {
    Radio,
    RadioGroup
  },

  data() {
    return {
      moduleName: '特殊样式单选',
      button4: '',
      button5: 'POP',
      button6: '自营',
      radioData: [],
      Code:Code
    }
  },
  mounted() {
    this.wq();
  },

  methods: {
    onChange(val, obj) {
      console.log(val, obj)
    },
    wq() {
      this.$nextTick(() => {
        this.button4 = '整体'
        this.button5 = '整体'
      })


      this.radioData = [{
        name: '整体',
        type: 'ALL'
      }, {
        name: '自营',
        type: 'SELF'
      }, {
        name: 'pop',
        type: 'POP'
      }]
    }
  }
}

</script>
