let code = {};

code.base = `
<template>
    <ga-cascader :data="data" v-model="value1" change-on-select clearable width="300" @on-change="onChange"></ga-cascader>
    <ga-button type="primary" @on-click="clear">清空</ga-button>
  </template>
  <script>
  export default {
    data() {
      return {
        value1: ['beijing'],
        data: [{
          value: 'beijing',
          label: '北京',
          children: [{
            value: 'gugong',
            label: '故宫'
          }, {
            value: 'tiantan',
            label: '天坛'
          }, {
            value: 'wangfujing',
            label: '王府井'
          }]
        }, {
          value: 'jiangsu',
          label: '江苏',
          children: [{
            value: 'nanjing',
            label: '南京',
            children: [{
              value: 'fuzimiao',
              label: '夫子庙',
            }]
          }, {
            value: 'suzhou',
            label: '苏州',
            children: [{
              value: 'zhuozhengyuan',
              label: '拙政园',
            }, {
              value: 'shizilin',
              label: '狮子林',
            }]
          }],
        }]
      }
    },
    methods: {
    onChange(value, selectedData) {
      console.log(value, selectedData)
    },
    clear(){
      this.value1 = [];
    }
  }
  }
  </script>
`;

code.zdy = `
<template>
    <ga-cascader :data="data" v-model="value2" :render-format="formatFn"></ga-cascader>
  </template>
  <script>
  export default {
    data() {
      return {
        value2: ['beijing'],
        data: [{
          value: 'beijing',
          label: '北京',
          children: [{
              value: 'gugong',
              label: '故宫'
            },
            {
              value: 'tiantan',
              label: '天坛'
            },
            {
              value: 'wangfujing',
              label: '王府井'
            }
          ]
        }, {
          value: 'jiangsu',
          label: '江苏',
          children: [{
              value: 'nanjing',
              label: '南京',
              children: [{
                value: 'fuzimiao',
                label: '夫子庙',
              }]
            },
            {
              value: 'suzhou',
              label: '苏州',
              children: [{
                  value: 'zhuozhengyuan',
                  label: '拙政园',
                },
                {
                  value: 'shizilin',
                  label: '狮子林',
                }
              ]
            }
          ],
        }]
      }
    },
    formatFn(labels, selectedData) {
      return labels.join(',')
    }
  }

  </script>
`;

code.disable = `
<template>
<ga-cascader :data="data" v-model="value1"></ga-cascader>
</template>
<script>
    export default {
        data () {
            return {
                value1: ['beijing'],
                data: [{
                    value: 'beijing',
                    label: '北京',
                    children: [
                        {
                            value: 'gugong',
                            label: '故宫'
                        },
                        {
                            value: 'tiantan',
                            label: '天坛'
                        },
                        {
                            value: 'wangfujing',
                            label: '王府井'
                        }
                    ]
                }, {
                    value: 'jiangsu',
                    label: '江苏',
                    disabled: true,
                    children: [
                        {
                            value: 'nanjing',
                            label: '南京',
                            children: [
                                {
                                    value: 'fuzimiao',
                                    label: '夫子庙',
                                }
                            ]
                        },
                        {
                            value: 'suzhou',
                            label: '苏州',
                            children: [
                                {
                                    value: 'zhuozhengyuan',
                                    label: '拙政园',
                                },
                                {
                                    value: 'shizilin',
                                    label: '狮子林',
                                }
                            ]
                        }
                    ],
                }]
            }
        }
    }
</script>
`;

code.lastvalue = `
<template>
    <ga-cascader 
      :data="data" 
      v-model="value1" 
      change-on-select 
      clearable 
      width="300"
      last-value
      @on-change="onChange"/>
    {{value1}}
</template>
<script>
export default {
  data() {
    return {
      value1: [],
      data: [{
        value: 'beijing',
        label: '北京',
        children: [{
          value: 'gugong',
          label: '故宫'
        }, {
          value: 'tiantan',
          label: '天坛'
        }, {
          value: 'wangfujing',
          label: '王府井'
        }]
      }, {
        value: 'jiangsu',
        label: '江苏',
        children: [{
          value: 'nanjing',
          label: '南京',
          children: [{
            value: 'fuzimiao',
            label: '夫子庙',
          }]
        }, {
          value: 'suzhou',
          label: '苏州',
          children: [{
            value: 'zhuozhengyuan',
            label: '拙政园',
          }, {
            value: 'shizilin',
            label: '狮子林',
          }]
        }],
      }]
    }
  },
  methods: {
    onChange(value, selectedData) {
      console.log(value, selectedData)
    }
  }
}

</script>

`

code.remote = `
<template>
    <ga-cascader 
      :data="data" 
      v-model="value1" 
      change-on-select
      clearable
      trigger="click"
      last-value
      width="300"
      remote
      :remote-method="remoteMethod"
      @on-change="onChange"/>
    {{value1}}
</template>
<script>
export default {
  data() {
    return {
      value1: [],
      data: [],
      flag: true
    }
  },
  created() {
    setTimeout(() => {
      this.data = [{
        value: 'beijing',
        label: '北京',
        children: [],
        level: 1
      }, {
        value: 'jiangsu',
        label: '江苏',
        children: [],
        level: 1        
      }]
    }, 2000)
  },
  methods: {
    onChange(value, selectedData) {
      // console.log(value, selectedData)
    },
    remoteMethod(val, cb) {
      setTimeout(() => {
        if(this.flag) {
          val.children = [
            {
              value: 'gugong',
              label: '故宫',
              children: [],
              level: 2
            }, {
              value: 'tiantan',
              label: '天坛',
              children: [],
              level: 2
            }, {
              value: 'wangfujing',
              label: '王府井',
              children: [],
              level: 2
            }
          ]
          this.flag = false
        } else {
          val.children = [
            {
              value: 'gugon1',
              label: '故宫1',
              children: [],
              level: 3
            }, {
              value: 'tianta1',
              label: '天坛1',
              children: [],
              level: 3
            }, {
              value: 'wangfujin1',
              label: '王府井1',
              children: [],
              level: 3
            }
          ]
        }
        cb()
      }, 1000)
    }
  }
}

</script>
`

export default code;
