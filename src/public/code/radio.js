let code = {};

code.base = `
  <template>

    <ga-radio-group v-model="button5" type="button" @on-change="onChange">
      <ga-radio :label="item.name" :type="item.type" v-for="(item,index) in radioData" :key="index"></ga-radio>
    </ga-radio-group>
    <ga-radio-group v-model="button6" type="button" size="small">
      <ga-radio label="整体"></ga-radio>
      <ga-radio label="POP"></ga-radio>
      <ga-radio label="自营"></ga-radio>
    </ga-radio-group>
  </template>
  <script>
  export default {
  data() {
    return {
      button5: 'POP',
      button6: '自营',
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
`;

code.sample = `
  <template>
    <ga-radio-group v-model="button5" >
        <ga-radio label="整体"></ga-radio>
        <ga-radio label="POP"></ga-radio>
        <ga-radio label="自营"></ga-radio>
    </ga-radio-group>
    <ga-radio-group v-model="button6" size="small" vertical>
        <ga-radio label="整体"></ga-radio>
        <ga-radio label="POP"></ga-radio>
        <ga-radio label="自营"></ga-radio>
    </ga-radio-group>
    </template>
    <script>
    data() {
        return {
            button5: 'POP',
            button6: '自营',
        }
    },
    </script>
`;


export default code;
