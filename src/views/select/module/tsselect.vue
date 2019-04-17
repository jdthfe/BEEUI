<template>
  <ga-panel :moduleName="moduleName" class="tsselect">
    <div class="tsselect">
      <v-select v-model="model" :origindata="tsdataClone" placeholder="请输入" :removeFlag="false" multiple width="200">
        <li class="search-fixed">
          <v-input v-model="value1" placeholder="请输入..." @on-change="onChange" />
        </li>
        <ul>
          <li class="ga-select-item" :title="item.labelValue" v-for="(item,index) in tsdata" :key="index">
            <v-checkbox-group :value="checkAllGroup" @on-change="clickItem(item,index)">
              <v-checkbox :label="item.value" v-model="item.boolean" :disabled="checkAllGroup.length===4&&item.boolean===false">
                <span>{{item.label}}</span>
              </v-checkbox>
            </v-checkbox-group>
          </li>
        </ul>
        <li class="tsselect-btn-group">
          <v-button type="primary" @on-click="clearClick">清空</v-button>
          <v-button type="primary" @on-click="okClick">确定</v-button>
        </li>
      </v-select>
      {{model}}
    </div>
    <v-code language="html">
      {{Code.yw}}
    </v-code>
  </ga-panel>
</template>
<script>
import vSelect from '@/package/components/select/select.vue';
import vOption from '@/package/components/select/option.vue';
import vInput from '@/package/components/input/input.vue';
import vCheckboxGroup from '@/package/components/checkbox/checkbox-group.vue';
import vCheckbox from '@/package/components/checkbox/checkbox.vue';
import vButton from '@/package/components/button/button.vue';
import Code from '@/public/code/select.js';

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

      // this.model = ['beijing','shanghai']
      // this.modelclone = ['beijing','shanghai']
      // this.checkAllGroup = ['beijing','shanghai']
      // this.$nextTick(()=>{
      //   let e = document.createEvent('Event')
      //   e.initEvent('click', true, true)
      //   document.dispatchEvent(e)
      // })
    }, 2000)
  },
  data() {
    return {
      Code: Code,
      moduleName: '多选带搜索展现形式业务组件',
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
  // display: inline-block;
  // margin-right: 17px;
  // width: 100%;
  .ga-select-multiple {
    .ga-input-type {

      width: 222px;
      margin-left: 10px;
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
      left: 0 !important;
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