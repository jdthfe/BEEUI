let code = {};

code.base = `
<template>
  <div>
    <ga-select 
      v-model="model3" 
      clearable 
      width="300" 
      label-in-value
      :prefix-icon="prefixIcon"
      @on-change="onChange"
      @on-focus="onClick">
      <ga-option 
        v-for="(item,index) in cityList" 
        :value="item.value" 
        :key="index">{{item.label}}</ga-option>
    </ga-select>
    {{model3}}
    <ga-select 
      v-model="model3" 
      disabled 
      width="200">
      <ga-option 
        v-for="(item,index) in cityList" 
        :value="item.value" 
        :key="index">{{item.label}}</ga-option>
    </ga-select>
  </div>
</template>
<script>
export default {
  created() {
    setTimeout(() => {
      this.cityList = [{
        value: 'beijing',
        label: '北京市',
        type: 'pop',
      }, {
        value: 'shanghai',
        type: 'pop',
        label: '上海市'
      }, {
        value: 'shenzhen',
        type: 'pop',
        label: '深圳市'
      }, {
        value: 'hangzhou',
        type: 'pop',
        label: '杭州市'
      }, {
        value: 'nanjing',
        type: 'pop',
        label: '南京市'
      }, {
        value: 'chongqing',
        type: 'pop',
        label: '重庆市'
      }]
      this.$nextTick(() => {
        this.model3 = 'beijing'
      })
    }, 3000)
  },
  data() {
    return {
      cityList: [],
      model3: '',
      prefixIcon: 'ios-location'
    }
  },
  methods: {
    onChange(value) {
      console.log(value)
    },
    onClick() {
      this.cityList = [{
        value: 'nanjing',
        type: 'pop',
        label: '南京市'
      }, {
        value: 'chongqing',
        type: 'pop',
        label: '重庆市'
      }]
    }
  }
}
</script>
`;

code.duoxuan = `
  <template>
    <ga-select v-model="model3" filterable multiple width="200">
        <ga-option v-for="(item,index) in cityList" :value="item.value" :key="index">{{item.label}}</ga-option>
    </ga-select>
</template>
<script>
export default {
    data() {
      return {
          cityList: [
              {
                  value: 'beijing',
                  label: '北京市'
              },
              {
                  value: 'shanghai',
                  label: '上海市'
              },
              {
                  value: 'shenzhen',
                  label: '深圳市'
              },
              {
                  value: 'hangzhou',
                  label: '杭州市'
              },
              {
                  value: 'nanjing',
                  label: '南京市'
              },
              {
                  value: 'chongqing',
                  label: '重庆市'
              }
          ],
          model3: []
      }
  },
}
`;

code.duoji = `
<template>
  <div>
    <ga-select 
      v-model="model1" 
      clearable
      filterable 
      width="200"
      label-in-value
      @on-change="getCascader">
      <ga-option 
        v-for="(item,index) in cityList" 
        :value="item.value" 
        :key="index">{{item.label}}</ga-option>
    </ga-select>
    <ga-select 
      v-model="model2"
      clearable 
      filterable 
      :disabled="!model1" 
      width="200"
      label-in-value
      @on-change="getCascader2">
      <ga-option 
        v-for="(item,index) in cityList2" 
        :value="item.value" 
        :key="item.value">{{item.label}}</ga-option>
    </ga-select>
    <ga-select 
      v-model="model3"
      clearable 
      filterable
      label-in-value
      :disabled="!model2" 
      width="200">
      <ga-option 
        v-for="(item,index) in cityList3" 
        :value="item.value" 
        :key="item.value">{{item.label}}</ga-option>
    </ga-select>
  </div>
</template>
<script>
export default {
  data() {
    return {
      cityList: [],
      cityList2: [],
      cityList3: [],
      model1: '',
      model2: '',
      model3: '',
    }
  },
  mounted() {
      this.cityList = [{
        value: 'beijing',
        label: '北京市'
      }, {
        value: 'shanghai',
        label: '上海市'
      }, {
        value: 'shenzhen',
        label: '深圳市'
      }, {
        value: 'hangzhou',
        label: '杭州市'
      }, {
        value: 'nanjing',
        label: '南京市'
      }, {
        value: 'chongqing',
        label: '重庆市'
      }]
  },
  methods: {
    getCascader(val) {
      this.model2 = ''
      if(this.cityList2.length) {
        this.cityList2 = [{
          value: 'nanjing',
          label: '南京市'
        }, {
          value: 'chongqing',
          label: '重庆市'
        }]
      } else {
        this.cityList2 = [{
          value: 'shanghai',
          label: '上海市'
        }, {
          value: 'shenzhen',
          label: '深圳市'
        }, {
          value: 'hangzhou',
          label: '杭州市'
        }]
      }
      
    },
    getCascader2(val) {
      this.model3 = ''
      if(this.cityList3.length) {
        this.cityList3 = [{
          value: 'nanjing',
          label: '南京市'
        }, {
          value: 'chongqing',
          label: '重庆市'
        }]
      } else {
        this.cityList3 = [{
          value: 'shanghai',
          label: '上海市'
        }, {
          value: 'shenzhen',
          label: '深圳市'
        }, {
          value: 'hangzhou',
          label: '杭州市'
        }]
      }
    }
  }
}
</script>
`

code.yw = `
<template>
  <div class="tsselect">
    <ga-select v-model="model" :origindata="tsdataClone" placeholder="请输入" :removeFlag="false" multiple width="200">
      <li class="search-fixed">
        <ga-input v-model="value1" placeholder="请输入..." @on-change="onChange" />
      </li>
      <ul>
        <li class="ga-select-item" :title="item.labelValue" v-for="(item,index) in tsdata" :key="index">
          <ga-checkbox-group :value="checkAllGroup" @on-change="clickItem(item,index)">
            <ga-checkbox :label="item.value" v-model="item.boolean" :disabled="checkAllGroup.length===4&&item.boolean===false">
              <span>{{item.label}}</span>
            </ga-checkbox>
          </ga-checkbox-group>
        </li>
      </ul>
      <li class="tsselect-btn-group">
        <ga-button type="primary" @on-click="clearClick">清空</ga-button>
        <ga-button type="primary" @on-click="okClick">确定</ga-button>
      </li>
    </ga-select>
  </div>
</template>
<script>
  export default {
    components: {
      vSelect,
      vOption,
      vInput,
      vButton,
      vCheckboxGroup,
      vCheckbox
    },
    created() {
      setTimeout(() => {
        this.tsdata = [{
            value: 'beijing',
            label: '北京市',
            boolean:false,
          },
          {
            value: 'shanghai',
            boolean:false,
            label: '上海市',
          },
          {
            value: 'shenzhen',
            boolean:false,
            label: '深圳市'
          },
          {
            value: 'hangzhou',
            boolean:false,
            label: '杭州市'
          },
          {
            value: 'nanjing',
            boolean:false,
            label: '南京市'
          },
          {
            value: 'chongqing',
            boolean:false,
            label: '重庆市'
          }
        ]
        this.tsdataClone = [{
            value: 'beijing',
            boolean:false,
            label: '北京市'
          },
          {
            value: 'shanghai',
            boolean:false,
            label: '上海市'
          },
          {
            value: 'shenzhen',
            boolean:false,
            label: '深圳市'
          },
          {
            value: 'hangzhou',
            boolean:false,
            label: '杭州市'
          },
          {
            value: 'nanjing',
            boolean:false,
            label: '南京市'
          },
          {
            value: 'chongqing',
            boolean:false,
            label: '重庆市'
          }
        ]
      }, 2000)
    },
    data() {
      return {
        model: [],
        modelclone: [],
        tsdata: [],
        tsdataClone: [],
        value1: '',
        checkAllGroup: []
      }
    },
    methods: {
      okClick() {
        const _vm = this;
        _vm.model = Object.assign([], _vm.modelclone);
        _vm.$emit('tsselected', _vm.model);
      },
      clearClick() {
        const _vm = this;
        _vm.model = [];
        _vm.modelclone = [];
        _vm.checkAllGroup = [];
        _vm.$emit('tsselected', _vm.model);
      },
      itemSelect(item) {
        const _vm = this;
        let className = '';
        if (_vm.modelclone.includes(item.value)) {
          className = 'ga-select-item ga-select-item-selected'
        } else {
          className = 'ga-select-item'
        }
        return className
      },
      onChange(e) {
        const _vm = this;
        let newtsdata = [];
        _vm.checkAllGroup = [];
        _vm.modelclone = [];
        if (e.target.value === '') {
          _vm.tsdata = _vm.tsdataClone
        } else {
          for (let v of _vm.tsdataClone) {
            if (v.label.includes(e.target.value)) {
              newtsdata.push(v)
            }
          }
          _vm.tsdata = newtsdata;
        }
      },
      clickItem(item, index) {
        const _vm = this;

        if (!_vm.modelclone.includes(item.value)) {
          if (_vm.modelclone.length >= 4) {
            return
          }
          _vm.modelclone.push(item.value);
          _vm.checkAllGroup.push(item.value);
        } else {
          for (let v of Object.keys(_vm.modelclone)) {
            if (_vm.modelclone[v] === item.value) {
              _vm.modelclone.splice(v, 1);
              _vm.checkAllGroup.splice(v,1)
            }
          }
        }
      }
    }
  }
  </script>
  <style lang="less">
  .tsselect {
  display: inline-block;
  margin-right: 17px;
  .ga-select-multiple {
    .ga-input-type {

      width: 222px;
      margin-left: 10px;
    }
    .search-fixed {
      // position: fixed;
    }
    .ga-select-selection {
      max-height: 24px;
      overflow: hidden;
    }
    .ga-tag {
      margin: 0; // float: left;
      display: inline;
      line-height: 32px;
      background: transparent;
      border: none;
      padding:0;
      span {
        padding: 10px 0;
        &:after {
          content: ","
        }
      }
    }
    .ga-select-dropdown {
      overflow: inherit;
      width: 450px !important;
      max-height: inherit !important;
    }
    .ga-select-dropdown-list {
      ul {
        margin-top: 5px;
        overflow: auto;
        height: 160px;
        float: left;
        width: 100%;
      }
    }
    .ga-select-item {
      clear: inherit;
      float: left;
      width: 110px;
      line-height: 25px;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      &:hover{
        background:transparent;
      }
    }
    .tsselect-btn-group {
      border-top: 1px solid #d7dde4;
      display: inline-block;
      width: 100%;
      text-align: right;
      button:nth-child(1) {
        float: left;
        margin-left: 5px;
      }
      button {
        margin-top: 5px;
        margin-right: 5px;
      }
    }
  }
}
</style>
`;

code.filterable = `
<template>
  <ga-select 
    v-model="model1" 
    filterable 
    width="200">
    <ga-option 
      v-for="item in cityList" 
      :value="item.value" 
      :key="item.value">
      {{item.label}}
    </ga-option>
  </ga-select>
  <ga-select 
    v-model="model2" 
    filterable 
    multiple 
    width="200">
    <ga-option 
      v-for="item in cityList" 
      :value="item.value" 
      :key="item.value">
      {{item.label}}
    </ga-option>
  </ga-select>
</template>
<script>
  export default {
  data() {
    return {
      cityList: [{
        value: 'beijing',
        label: '北京市',
        type: 'pop',
      }, {
        value: 'shanghai',
        type: 'pop',
        label: '上海市'
      }, {
        value: 'shenzhen',
        type: 'pop',
        label: '深圳市'
      }, {
        value: 'hangzhou',
        type: 'pop',
        label: '杭州市'
      }, {
        value: 'nanjing',
        type: 'pop',
        label: '南京市'
      }, {
        value: 'chongqing',
        type: 'pop',
        label: '重庆市'
      }],
      model1: 'beijing',
      model2:['beijing','shanghai']
    }
  },
}
</script>
`;

code.search = `
<template>
    <ga-select
      v-model="model1"
      filterable
      :loading="loading"
      remote
      :remote-method="remoteMethod"
      clearable
      width="200"
      @on-query-change="onQueryChange">
      <ga-option v-for="item in cityList" :value="item.value" :key="item.value">{{item.label}}</ga-option>
    </ga-select>
    {{model1}}
</template>
<script>

export default {
  data() {
    return {
      cityList: [],
      model1: "",
      loading: false
    };
  },
  created() {
    this.serviceGet();
  },
  methods: {
    serviceGet() {
      this.model1 = "v9.7.1";
    },
    remoteMethod(val, oldval) {
      const _vm = this;
      _vm.loading = true;
      if (val && val !== oldval) {
          $.ajax({
            url: "http://nodejs.org/dist/index.json",
            type: "GET",
            dataType: "json",
            data: { userAccount: val },
            success(data) {
              _vm.$nextTick(() => {
                _vm.cityList = [];
                for (let v of data) {
                  _vm.cityList.push({
                    value: v.version,
                    label: v.version
                  });
                }
                _vm.loading = false;
              });
            }
          });
      } else {
        _vm.loading = false;
      }
    },
    onQueryChange(val) {
      // console.log(val)
    }
  }
};
</script>
`

code.focus = `
<template>
    <ga-select 
      v-model="model3" 
      clearable 
      filterable 
      width="200"
      focus>
      <ga-option 
        v-for="(item,index) in cityList" 
        :value="item.value" 
        :key="index">{{item.label}}</ga-option>
    </ga-select>
</template>
<script>
export default {
  data() {
    return {
      Code:Code,
      moduleName: 'focus获取焦点',
      cityList: [{
        value: 'beijing',
        label: '北京市'
      }, {
        value: 'shanghai',
        label: '上海市'
      }, {
        value: 'shenzhen',
        label: '深圳市'
      }, {
        value: 'hangzhou',
        label: '杭州市'
      }, {
        value: 'nanjing',
        label: '南京市'
      }, {
        value: 'chongqing',
        label: '重庆市'
      }],
      model3: '',
    }
  },
}
</script>
`;

code.obj = `
<template>
    <ga-select 
      v-model="model3" 
      clearable 
      filterable 
      width="200"
      value-object
      @on-change="onChange">
      <ga-option 
        v-for="(item,index) in cityList" 
        :value="item.value"
        :value-object="item"
        :key="index">{{item.label}}</ga-option>
    </ga-select>
</template>
<script>
export default {
  data() {
    return {
      cityList: [{
        value: 'beijing',
        label: '北京市',
        children: [
          {
            value: 'beijing',
            label: '北京市',
          }
        ]
      }, {
        value: 'shanghai',
        label: '上海市',
        children: [
          {
            value: 'beijing',
            label: '北京市',
          }
        ]
      }, {
        value: 'shenzhen',
        label: '深圳市',
        children: [
          {
            value: 'beijing',
            label: '北京市',
          }
        ]
      }, {
        value: 'hangzhou',
        label: '杭州市',
        children: [
          {
            value: 'beijing',
            label: '北京市',
          }
        ]
      }, {
        value: 'nanjing',
        label: '南京市',
        children: [
          {
            value: 'beijing',
            label: '北京市',
          }
        ]
      }, {
        value: 'chongqing',
        label: '重庆市',
        children: [
          {
            value: 'beijing',
            label: '北京市',
          }
        ]
      }],
      model3: 'beijing',
    }
  },
  methods: {
    onChange(val) {
      this.obj = val
    }
  }
}
</script>

`
export default code;
