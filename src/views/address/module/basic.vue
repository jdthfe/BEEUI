<template>
  <ga-panel :moduleName="moduleName">
    <ga-address 
      v-model="value" 
      :all-areas="allAreas"/>
    <v-code language="html">
      {{Code.base}}
    </v-code>
  </ga-panel>
</template>

<script>
import gaAddress from '@/package/components/address/address.vue';
import Code from '@/public/code/address.js';
export default {
  components: {
    gaAddress
  },

  data() {
    return {
      moduleName: '基本使用',
      Code:Code,
      value: [],
      allAreas: [
        {
          "id": "北京市",
          "name": "北京市",
          "level": "PROVINCE",
          "nodes": [
            {
              "id": "北京市",
              "name": "北京市",
              "level": "CITY",
              "nodes": [
                {
                  "id": "昌平区",
                  "name": "昌平区",
                  "level": "DISTRICT",
                  "nodes": []
                }
              ]
            }
          ]
        },
        {
          "id": "安徽省",
          "name": "安徽省",
          "level": "PROVINCE",
          "nodes": [{
            "id": "安庆市",
            "name": "安庆市",
            "level": "CITY",
            "nodes": [{
              "id": "大观区",
              "name": "大观区",
              "level": "DISTRICT",
              "nodes": []
            }]
          }]
        }    
      ]
    }
  },
  methods: {
    
  }
}

</script>
<style scoped>

</style>
