let code = {};

code.base = `
<template>
    <ga-address 
      v-model="value" 
      :all-areas="allAreas"/>
</template>

<script>
export default {
  data() {
    return {
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

`;

export default code;
