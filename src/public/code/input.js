let code = {};

code.base = `
  <ga-input v-model="value" placeholder="请输入..." width="200"></ga-input>
  <script>
      export default {
          data() {
              return {
                  value:'',
              }
          }
      }
  </script>
`;

code.size = `
  <ga-input v-model="value1" size="large" placeholder="large size"></ga-input>
  <br>
  <ga-input v-model="value2" placeholder="default size"></ga-input>
  <br>
  <ga-input v-model="value3" size="small" placeholder="small size"></ga-input>
  <script>
      export default {
          data() {
              return {
                  value1:'',
                  value2:'',
                  value3:'',
              }
          }
      }
  </script>
`;

code.autosize = `
  <template>
      <ga-input v-model="value7" type="textarea" :autosize="true" placeholder="请输入..."></ga-input>
      <ga-input v-model="value8" disabled type="textarea" :autosize="{minRows: 2,maxRows: 5}" placeholder="请输入..."></ga-input>
  </template>
  <script>
      export default {
          data () {
              return {
                  value7: '',
                  value8: ''
              }
          }
      }
  </script>
`;


code.icon = `
  <template>
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
  </template>
  <script>
    export default {
        data () {
            return {
                value4: '',
            }
        },
        methods: {
            onChangeFn(val) {
              console.log(val)
            }
        }
    }
  </script>
`;

code.icon2 = `
  <template>
    <ga-input v-model="value12" width="300">
        <ga-select v-model="select1" slot="prepend" style="width: 80px">
            <ga-option value="http">http://</ga-option>
            <ga-option value="https">https://</ga-option>
        </ga-select>
        <ga-select v-model="select2" slot="append" style="width: 70px">
            <ga-option value="com">.com</ga-option>
            <ga-option value="org">.org</ga-option>
            <ga-option value="io">.io</ga-option>
        </ga-select>
    </ga-input>
  </template>
    <script>
      export default {
        data () {
          return {
            value4:'',
            select1: 'http',
            select2: 'com',
          }
        }
      }
    </script>
`;

code.clear=`
<template>
<ga-input 
    v-model="value" 
    :maxlength="20" 
    @on-change="changeValue" 
    placeholder="请输入..."
    width="200"
    clearable/>
</template>
<script>
export default {
  data() {
    return {
      value: '',
    }
  },

  methods: {
    changeValue(val) {
    }
  }
}

</script>
`
export default code;
