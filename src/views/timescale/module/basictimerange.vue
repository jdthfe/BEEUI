<template>
  <ga-panel :moduleName="moduleName">
    <timescale :value="value1" placeholder="选择时间段" :disabledselect="disabledselect" @selected="selectedfn" style="width: 150px">
      <div slot="custombtn">
        <v-button type="primary" @click.native="todayTotal">今日累计</v-button>
      </div>
    </timescale>
    <v-code language="html">
      {{Code.base}}
    </v-code>
  </ga-panel>
</template>
<script>
import timescale from '@/package/components/timescale/timescale.vue';
import vButton from '@/package/components/button/button.vue';
import Code from '@/public/code/timescale.js';

export default {
  components: {
    timescale,
    vButton
  },

  data() {
    return {
      Code: Code,
      moduleName: '48个时间段',
      value1: {
        label: '',
        value: ''
      },
      disabledselect: [],
      timeScale: [{
        value: '00:00~00:29',
        label: '1',
      }, {
        value: '00:30~00:59',
        label: '2',
      }, {
        value: '01:00~01:29',
        label: '3'
      }, {
        value: '01:30~01:59',
        label: '4'
      }, {
        value: '02:00~02:29',
        label: '5'
      }, {
        value: '02:30~02:59',
        label: '6'
      }, {
        value: '03:00~03:29',
        label: '7'
      }, {
        value: '03:30~03:59',
        label: '8'
      }, {
        value: '04:00~04:29',
        label: '9'
      }, {
        value: '04:30~04:59',
        label: '10'
      }, {
        value: '05:00~05:29',
        label: '11'
      }, {
        value: '05:30~05:59',
        label: '12'
      }, {
        value: '06:00~06:29',
        label: '13'
      }, {
        value: '06:30~06:59',
        label: '14'
      }, {
        value: '07:00~07:29',
        label: '15'
      }, {
        value: '07:30~07:59',
        label: '16'
      }, {
        value: '08:00~08:29',
        label: '17'
      }, {
        value: '08:30~08:59',
        label: '18'
      }, {
        value: '09:00~09:29',
        label: '19'
      }, {
        value: '09:30~09:59',
        label: '20'
      }, {
        value: '10:00~10:29',
        label: '21'
      }, {
        value: '10:30~10:59',
        label: '22'
      }, {
        value: '11:00~11:29',
        label: '23'
      }, {
        value: '11:30~11:59',
        label: '24'
      }, {
        value: '12:00~12:29',
        label: '25'
      }, {
        value: '12:30~12:59',
        label: '26'
      }, {
        value: '13:00~13:29',
        label: '27'
      }, {
        value: '13:30~13:59',
        label: '28'
      }, {
        value: '14:00~14:29',
        label: '29'
      }, {
        value: '14:30~14:59',
        label: '30'
      }, {
        value: '15:00~15:29',
        label: '31'
      }, {
        value: '15:30~15:59',
        label: '32'
      }, {
        value: '16:00~16:29',
        label: '33'
      }, {
        value: '16:30~16:59',
        label: '34'
      }, {
        value: '17:00~17:29',
        label: '35'
      }, {
        value: '17:30~17:59',
        label: '36'
      }, {
        value: '18:00~18:29',
        label: '37'
      }, {
        value: '18:30~18:59',
        label: '38'
      }, {
        value: '19:00~19:29',
        label: '39'
      }, {
        value: '19:30~19:59',
        label: '40'
      }, {
        value: '20:00~20:29',
        label: '41'
      }, {
        value: '20:30~20:59',
        label: '42'
      }, {
        value: '21:00~21:29',
        label: '43'
      }, {
        value: '21:30~21:59',
        label: '44'
      }, {
        value: '22:00~22:29',
        label: '45'
      }, {
        value: '22:30~22:59',
        label: '46'
      }, {
        value: '23:00~23:29',
        label: '47'
      }, {
        value: '23:30~23:59',
        label: '48'
      }]
    }
  },
  mounted() {
    setTimeout(() => {
      this.disabledselect = ['1', '2', '3'];
      this.value1 = {
        label: '15',
        value: ''
      }
      // this.value2 = '15'
    }, 1000)
  },
  methods: {
    selectedfn(val, num) {
      console.log(val, num)
    },
    todayTotal() {
      let nowString = moment(new Date).format("HH:mm");
      for (let v of this.timeScale) {
        if (nowString >= v.value.split('~')[0] && v.value.split('~')[1] >= nowString) {
          this.value1 = {
            label: v.label,
            value: '今日累计'
          }
          break;
        }
      }
    }
  }
}

</script>
