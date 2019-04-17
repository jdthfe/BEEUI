<template>
  <ga-panel :moduleName="moduleName">
    <ga-select
      v-model="model1"
      filterable
      :loading="loading"
      remote
      :prefix-icon="prefixIcon"
      :remote-method="remoteMethod"
      clearable
      width="200"
      @on-query-change="onQueryChange">
      <ga-option v-for="item in cityList" :value="item.value" :key="item.value">{{item.label}}</ga-option>
    </ga-select>
    {{model1}}
    <v-code language="html">
      {{Code.search}}
    </v-code>
  </ga-panel>
</template>
<script>
import gaSelect from "@/package/components/select/select.vue";
import gaOption from "@/package/components/select/option.vue";
import Code from "@/public/code/select.js";

import $ from "jquery";

export default {
  components: {
    gaSelect,
    gaOption
  },

  data() {
    return {
      Code: Code,
      moduleName: "远程搜索(单选多选都支持)",
      cityList: [],
      model1: "",
      loading: false,
      prefixIcon: 'ios-location',
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
