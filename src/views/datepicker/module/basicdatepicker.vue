<template>
  <ga-panel :moduleName="moduleName">

    <ga-date-picker 
      type="year" 
      v-model="value1" 
      placeholder="选择年" 
      format="yyyy" />
    {{value1}}

    <ga-date-picker 
      type="month" 
      v-model="value2" 
      placeholder="选择月" 
      format="yyyy-MM" />
    {{value2}}

    <ga-date-picker 
      type="week" 
      v-model="value3" 
      @get-week="getWeek" 
      placeholder="选择周" 
      format="yyyy-WW"/>
    {{value3}}

    <ga-date-picker 
      placeholder="选择日" 
      v-model="value4" 
      @on-change="onChange" />
    {{value4}}

    <ga-date-picker 
      type="season" 
      v-model="value5" 
      @get-season="getSeason" 
      :options="seasonOptions" 
      placeholder="选择季度" 
      format="yyyy-SS" />
    {{value5}}

    <ga-date-picker 
      type="monthrange" 
      v-model="value6" 
      placeholder="选择月区间" 
      format="yyyy-MR" 
      @get-monthrange="getMonthrange"
      :options="monthrangeOptions" />

    <v-code language="html">
      {{Code.basic}}
    </v-code>

  </ga-panel>
</template>
<script>
import moment from "moment";
import gaDatePicker from "@/package/components/date-picker/index";
import Code from "@/public/code/datepicker.js";

export default {
  components: {
    gaDatePicker
  },

  data() {
    return {
      moduleName: "年、月、周、日、季度、月区间",
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
      // console.log(val);
    },
    getSeason(val) {
      // console.log(val);
    },
    onChange(val) {
      // console.log(val);
    },
    getMonthrange(val) {
      // console.log(val)
    }
  }
};
</script>
