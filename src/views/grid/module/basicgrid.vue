<template>
  <ga-panel :moduleName="moduleName" class="grid">
    <ga-row>
      <ga-col span="12">col-12</ga-col>
      <ga-col span="12">col-12</ga-col>
    </ga-row>
    <br>
    <ga-row>
      <ga-col span="8">col-8</ga-col>
      <ga-col span="8">col-8</ga-col>
      <ga-col span="8">col-8</ga-col>
    </ga-row>
    <br>
    <ga-row>
      <ga-col span="6">col-6</ga-col>
      <ga-col span="6">col-6</ga-col>
      <ga-col span="6">col-6</ga-col>
      <ga-col span="6">col-6</ga-col>
    </ga-row>
    <ga-row type="flex">
      <ga-col span="6" order="4">1 | order-4</ga-col>
      <ga-col span="6" order="3">2 | order-3</ga-col>
      <ga-col span="6" order="2">3 | order-2</ga-col>
      <ga-col span="6" order="1">4 | order-1</ga-col>
    </ga-row>
    <ga-row>
      <ga-col span="8">col-8</ga-col>
      <ga-col span="8" offset="8">col-8 | offset-8</ga-col>
    </ga-row>
    <br>
    <ga-row>
      <ga-col span="6" offset="8">col-6 | offset-8</ga-col>
      <ga-col span="6" offset="4">col-6 | offset-4</ga-col>
    </ga-row>
    <br>
    <ga-row>
      <ga-col span="12" offset="8">col-12 | offset-8</ga-col>
    </ga-row>
    <v-code language="html">
      {{Code.base}}
    </v-code>
  </ga-panel>
</template>
<script>
import Code from '@/public/code/grid.js';
export default {
  components: {

  },

  data() {
    return {
      moduleName: '基本使用',
      Code:Code
    }
  },
  props: {

  },

  watch: {

  },

  methods: {}
}

</script>
<style scoped>

.grid .ga-col {
  background: rgba(0,153,229,.7);
  margin-top: 10px;
  padding: 10px 0;
  color:#fff;
  text-align: center;
}
.top,
.bottom {
  text-align: center;
}

.center {
  width: 300px;
  margin: 10px auto;
  overflow: hidden;
}

.center-left {
  float: left;
}

.center-right {
  float: right;
}

</style>
