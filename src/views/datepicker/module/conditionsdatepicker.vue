
<template>
  <ga-panel :moduleName="moduleName">
    <div class="date-picker">
      <ga-date-picker 
        v-show="dropdownType==='DAY'" 
        type="date" 
        placeholder="选择日期" 
        :clearable=false 
        v-model="datePicker"
        @on-change="getDatePicker" 
        class="picker-style"
        width="150"/>
      <ga-date-picker 
        v-show="dropdownType==='WEEK'" 
        type="week" 
        placeholder="选择日期" 
        :clearable=false 
        v-model="datePicker"
        format="yyyy-WW" 
        @on-change="getDatePicker" 
        class="picker-style"
        width="150"/>
      <ga-date-picker 
        v-show="dropdownType==='MONTH'" 
        type="month" 
        placeholder="选择日期" 
        :clearable=false
        v-model="datePicker" 
        format="yyyy-MM" 
        @on-change="getDatePicker"
        class="picker-style"
        width="150"/>

      <ga-date-picker 
        v-show="dropdownType==='SEASON'" 
        type="season" 
        placeholder="选择季度" 
        :clearable=false
        v-model="datePicker" 
        format="yyyy-SS" 
        @on-change="getDatePicker"
        class="picker-style"
        width="150"/>
      <!-- choose date || week || month -->
      <div v-if="!hiddenSearch" class="input-group-btn">
        <v-dropdown @on-click="dropdownSelectType" trigger="click">
          <v-button type="ghost">{{dropdownSelected}}
            <v-icon type="arrow-down-b" class="icon-arrow"></v-icon>
          </v-button>
          <v-dropdown-menu slot="list">
            <v-dropdown-item :name="v" v-for="(v,index) in dropdownOptions" :key="index">{{v.name}}</v-dropdown-item>
          </v-dropdown-menu>
        </v-dropdown>
      </div><!--/ends choose -->
    </div>

    <v-code language="html">
      {{Code.conditions}}
    </v-code>

  </ga-panel>
</template>
<script>
  import moment from 'moment';
  import gaDatePicker from '@/package/components/date-picker/index';
  import Code from '@/public/code/datepicker.js';
  import vDropdown from '@/package/components/dropdown/index';
  const vDropdownMenu = vDropdown.Menu;
  const vDropdownItem = vDropdown.Item;
  import vButton from '@/package/components/button/index';
  import vIcon from '@/package/components/icon/index';

  export default {
    components: {
      gaDatePicker,
      vDropdown,
      vDropdownMenu,
      vDropdownItem,
      vButton,
      vIcon
    },
    props: {
      defaultDate: {
        type: String,
        default(){
          return moment().format('YYYY-MM-DD')
        },
        require: false
      },
      defaultDropType: {
        type: String,
        default(){
          return "DAY"
        },
        require: false
      },
      hiddenSearch: {
        type: Boolean,
        default(){
          return false
        },
        require: false
      }
    },
    data() {
      const _this = this;
      const _dropdownOptions = [
        {
          type: 'DAY',
          name: '按日查询'
        },
        {
          type: 'WEEK',
          name: '按周查询'
        },
        {
          type: 'MONTH',
          name: '按月查询'
        },
        {
          type: 'SEASON',
          name: '按季度查询'
        }
      ];
      let _dropSelected = '';
      for (const item of _dropdownOptions) {
        if (_this.defaultDropType === item.type) {
          _dropSelected = item.name;
        }
      }
      return {
        moduleName: "带时间--粒度",
        Code: Code,
        datePicker: moment().subtract('1', 'month').format('YYYY-MM'),
        dropdownType: _this.defaultDropType,
        dropdownSelected: _dropSelected,
        dropdownOptions: _dropdownOptions,
      }
    },
    methods: {
      getDatePicker(data) {
        console.log("当前选取日期为：" + data);
      },
      dropdownSelectType(val) {
        const _this = this;
        _this.dropdownType = val.type;
        _this.dropdownSelected = val.name;
        if (_this.dropdownType === 'MONTH') {
          _this.datePicker = moment().subtract('1', 'month');
        } else {
          _this.datePicker = moment();
        }
      }
    }
  }
</script>
<style lang="less">
  .ga-date-picker-cells-season span {
    width: 200px;
    height: 50px;
    cursor: pointer;
    border-radius: 3px;

    em {
      width: 200px;
      height: 50px;
      line-height: 50px;
      margin: 0;
    }
  }

  .date-picker {
    margin-top: 10px;
    .picker-style {
      // width: 150px;
      display: inline-block;
    }
    .input-group-btn {
      margin-left: -5px;
      display: inline-block;
    }
    .ga-date-picker-rel {
      .ga-input {
        border-radius: 4px 0 0 4px !important;
      }
    }
    .ga-dropdown-rel {
      button {
        height: 32px;
        border-left: 0;
        border-radius: 0 4px 4px 0;
      }
    }
  }
</style>