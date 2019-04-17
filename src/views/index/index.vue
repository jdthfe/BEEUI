<template>
  <div class="index-body">
    <ga-row class="index-row">
      <ga-col span="24">
        <div class="index-con">
          <div class="txt-logo">
            Gamma FE
          </div>
          <div class="txt-con">
            {{$t("index.title")}}
          </div>
          <ga-button type="info" size="large">
            <router-link to="/introduction">开始使用</router-link>
          </ga-button>
        </div>
      </ga-col>
    </ga-row>
    <div class="mask">
    </div>
  </div>
</template>
<script>
import '@/assets/style/views/index.less';

import gaRow from '@/package/components/grid/row.vue';
import gaCol from '@/package/components/grid/col.vue';

import gaButton from '@/package/components/button/button.vue';

export default {
  name: 'Index',
  components: {
    gaRow,
    gaCol,
    gaButton
  }
}

</script>
