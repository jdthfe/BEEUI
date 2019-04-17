<template>
  <div class="date-radio">
    <Radio-group v-model="button6" vertical type="button">
        <Radio :label="item.value" v-for="(item,index) in radioList" :key="index"></Radio>
    </Radio-group>
    <date-time
      :value="value4"
      @on-pick="onPick"/></date-time>
    <v-button type="primary" class="determine-btn" @click.native="determineClick">{{determinetxt}}</v-button>
  </div>
</template>

<script>
import Radio from '../../../components/radio/radio.vue';
import RadioGroup from '../../../components/radio/radio-group.vue';
import dateTime from './dateTime.vue';
import vButton from '../../../components/button/button.vue';


export default {
  name: 'dateDacu',
  components: {
    Radio,
    RadioGroup,
    dateTime,
    vButton
  },
  data() {
    return {
      button6: '',
      determinetxt:'确定',
      value4:'',
      options1: {
        // disabledDate(date) {
        //   return date && date.valueOf() < Date.now() - 986400000 || date.valueOf() > Date.now() + 1889119625;
        // }
      },
      radioList:[],
      allDate:''
    }
  },
  props:{
    value: {
      default () {
        return {
          value: '',
          label: ''
        }
      }
    },
  },
  watch:{
    'value': {
      handler(val, oldval) {
        if (val) {
          let nowArray = val.value.split('-');
          let now = new Date(val.value);

          if(nowArray[1] < '07'){
            this.radioList.push({
              value:`${nowArray[0]-1}-06`
            })
            this.radioList.push({
              value:`${nowArray[0]-1}-11`
            })
            this.$nextTick(()=>{
              this.button6 = `${nowArray[0]-1}-06`;
            })

          }else if(nowArray[1] >= '06' && nowArray[1] < '12'){
            this.radioList.push({
              value:`${nowArray[0]-1}-11`
            })
            this.radioList.push({
              value:`${nowArray[0]}-06`
            })
            this.$nextTick(()=>{
              this.button6 = `${nowArray[0]-1}-11`;
            })

          }else{
            this.radioList.push({
              value:`${nowArray[0]}-06`
            })
            this.radioList.push({
              value:`${nowArray[0]}-11`
            })
            this.$nextTick(()=>{
              this.button6 = `${nowArray[0]}-06`;
            })
          }
        }
      },
      deep: true
    },
    'button6':{
      handler(val,oldval){
        /**
         * 根据val判断可选日期
         */
        this.value4 = val;
        this.allDate = val + '-01';
      },
      deep:true
    }
  },
  methods:{
    determineClick(){
      this.$emit('out-date',this.allDate)
    },
    onPick(val){
      this.allDate = val;
    }
  }
}
</script>
