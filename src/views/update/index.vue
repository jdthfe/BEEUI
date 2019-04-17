<template>
  <v-page>
    <ga-panel moduleName="更新日志">
      <v-time-line style="height: 1225px;overflow-y:auto;overflow-x:hidden;margin-top:10px;">
        <v-time-line-item v-for="(item,index) in timelinelist.data" :key="index">
          <p class="time" style="font-size:18px;">
            <h2>{{item.version}}</h2>
          </p>
          <p class="time" style="font-size:16px;">{{item.time}}</p>
          <ul class="time-line-ul">
            <li v-for="(its,index) in item.list" :key="index" :class="{'redclass':its.isRed}">
              {{its.value}}
              <a :href="its.url">{{its.urlvalue}}</a>
            </li>
          </ul>
        </v-time-line-item>
      </v-time-line>
    </ga-panel>　
  </v-page>
</template>
<script>

import '@/assets/style/views/introduction.less';

import vPage from '@/public/components/common/page.vue';
import vRow from '@/package/components/grid/row.vue';
import vCol from '@/package/components/grid/col.vue';
import vTimeLine from '@/package/components/timeline/timeline.vue';
import vTimeLineItem from '@/package/components/timeline/timeline-item.vue';

import timelinelist from './timelinelist.js';

export default {
  name: 'Introduction',
  components: {
    vRow,
    vCol,
    vPage,
    vTimeLine,
    vTimeLineItem
  },
  data() {
    return {
      timelinelist: []
    }
  },
  created() {
    this.timelinelist = timelinelist;
  },
  mounted() {

  }
}

</script>
<style lang="less" scoped>
.redclass {
  color: red
}
.time-line-ul {
  margin-top: 10px;
  li {
    font-size: 14px;
    list-style: circle;
    margin-left: 30px;
  }
}
</style> 
