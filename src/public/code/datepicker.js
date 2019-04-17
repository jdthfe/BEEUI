let code = {};

code.basic = `
<template>
    <ga-date-picker type="year" v-model="value1" placeholder="选择年" format="yyyy" />

    <ga-date-picker type="month" v-model="value2" placeholder="选择月" format="yyyy-MM" />

    <ga-date-picker type="week" v-model="value3" @get-week="getWeek" placeholder="选择周" format="yyyy-WW"
                   />

    <ga-date-picker placeholder="选择日" v-model="value4" @on-change="onChange" />
    <ga-date-picker type="season" v-model="value5" @get-season="getSeason" :options="seasonOptions" placeholder="选择季度" format="yyyy-SS"></ga-date-picker>
    
    <ga-date-picker 
      type="monthrange" 
      v-model="value6" 
      placeholder="选择月区间" 
      format="yyyy-MR" 
    
      @get-monthrange="getMonthrange"
      :options="monthrangeOptions" />

</template>
<script>
export default {
  data() {
    return {
      value1: "",
      value2: "",
      value3: moment(),
      value4: "",
      value5: "2017-08",
      value6: {
        start: moment('2018-06'),
        end: moment('2018-09')
      },
      monthrangeOptions: {
        disabledDate(date) {
          let isDisable = false;
          const Month = moment(date).format('M')
          if(Number(Month) > 0 && Number(Month) < 6) {
            isDisable = true
          } 
          return isDisable
        }
      },
      seasonOptions: {
        disabledDate(date) {
          let isDisable = false;
          const dateNow = new Date();
          const dateFullYear = date.getFullYear();
          const dateNowFullYear = dateNow.getFullYear();

          if (dateFullYear < dateNowFullYear - 1) {
            isDisable = true;
          } else if (dateFullYear > dateNowFullYear) {
            isDisable = true;
          } else if (date.getMonth() > dateNow.getMonth()) {
            isDisable = true;
          }

          //          return dateFullYear < dateNowFullYear-1 || dateFullYear > dateNowFullYear || date.getMonth() > dateNow.getMonth();
          return isDisable;
        }
      },
      Code: Code
    };
  },
  methods: {
    getWeek(val) {
      console.log(val);
    },
    getSeason(val) {
      console.log(val);
    },
    onChange(val) {
      console.log(val);
    }
  }

</script>
`;

code.confirm = `
<template>
    <ga-date-picker type="date" confirm v-model="value1" placeholder="选择日期"/>
    <ga-date-picker type="daterange" confirm v-model="value2" placeholder="选择日期区间"/>
</template>
<script>
  export default {
    data() {
      return {
        value1: '',
        value2: ''
      }
    }
  }
</script>
`;

code.disabled = `
<template>
    <ga-date-picker type="date" v-model="value1" :options='options1' placeholder="选择日期"/>
    <ga-date-picker type="month" v-model="value2" :options='options2' placeholder="选择月"/>
</template>
<script>
  export default {
    data() {
      return {
        value1: '',
        value2: '',
        options1: {
          disabledDate(date) {
            return date && date.valueOf() < Date.now() - 86400000 || date.valueOf() > Date.now() + 1889119625;
          }
        },
        options2: {
          disabledDate(date) {
            return date && date.valueOf() < Date.now() - 86400000 || date.valueOf() > Date.now() + 2889119625;
          }
        }
      }
    }
  }
</script>
`;

code.shifenmiao = `
<template>
  <ga-panel :moduleName="moduleName">
    <ga-date-picker type="datetime" format="yyyy-MM-dd HH:mm:ss" placeholder="选择日期和时间" v-model="value"
                   @on-change="timeChange"></ga-date-picker>
  </ga-panel>
</template>
<script>
  export default {
    data() {
      return {
        value: ''
      }
    },
    methods: {
      timeChange(time) {
        console.log(time);
      }
    }
  }

</script>
`;

code.size = `
<template>
    <ga-date-picker type="date" size="small" placeholder="选择日期"></ga-date-picker>
    <ga-date-picker type="date" placeholder="选择日期"></ga-date-picker>
    <ga-date-picker type="date" size="large" placeholder="选择日期"></ga-date-picker>
</template>
`;

code.conditions = `
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
      width: 150px;
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
<template>
  <ga-panel :moduleName="moduleName">
    <div class="date-picker">
      <ga-date-picker v-show="dropdownType==='DAY'" type="date" placeholder="选择日期" :clearable=false v-model="datePicker"
                     @on-change="getDatePicker" class="picker-style"></ga-date-picker>

      <ga-date-picker v-show="dropdownType==='WEEK'" type="week" placeholder="选择日期" :clearable=false v-model="datePicker"
                     format="yyyy-WW" @on-change="getDatePicker" class="picker-style"></ga-date-picker>

      <ga-date-picker v-show="dropdownType==='MONTH'" type="month" placeholder="选择日期" :clearable=false
                     v-model="datePicker" format="yyyy-MM" @on-change="getDatePicker" class="picker-style"></ga-date-picker>

      <ga-date-picker v-show="dropdownType==='SEASON'" type="season" placeholder="选择季度" :clearable=false
                     v-model="datePicker" format="yyyy-SS" @on-change="getDatePicker" class="picker-style"></ga-date-picker>
      <!-- choose date || week || month -->
      <div v-if="!hiddenSearch" class="input-group-btn">
        <ga-dropdown @on-click="dropdownSelectType" trigger="click">
          <ga-button type="ghost">{{dropdownSelected}}
            <ga-icon type="arrow-down-b" class="icon-arrow"></ga-icon>
          </ga-button>
          <ga-dropdown-menu slot="list">
            <ga-dropdown-item :name="v" v-for="(v,index) in dropdownOptions" :key="index">{{v.name}}</ga-dropdown-item>
          </ga-dropdown-menu>
        </ga-dropdown>
      </div><!--/ends choose -->
    </div>
  </ga-panel>
</template>
<script>
  import vDatePicker from '@/package/components/date-picker/index';
  import Code from '@/public/code/datepicker.js';
  import vDropdown from '@/package/components/dropdown/index';
  const vDropdownMenu = vDropdown.Menu;
  const vDropdownItem = vDropdown.Item;
  import vButton from '@/package/components/button/index';
  import vIcon from '@/package/components/icon/index';

  export default {
    components: {
      vDatePicker,
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
`;

export default code;
