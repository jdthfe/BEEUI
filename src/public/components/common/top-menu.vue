<template>
  <ga-menu mode="horizontal" :active-name="activeName">
    <div class="layout-logo">
      <v-top-logo></v-top-logo>
    </div>
    <div class="layout-nav top-menu">
      <a :href="item.href" :target="item.target" v-for="(item, index) in menuList" :key="index">
        <ga-menu-item :name="item.name" :style="'color:'+item.color">
          {{item.value}}
        </ga-menu-item>
      </a>
    </div>
    <ga-select v-model="model" clearable style="width:100px;margin-top: 15px;" @on-change="onChange">
      <ga-option v-for="(item,index) in languageList" :value="item.value" :key="index">{{ item.label }}</ga-option>
    </ga-select>
  </ga-menu>
</template>
<script>
import Vue from 'vue'
import vTopLogo from './logo.vue';
import gaSelect from '@/package/components/select/select.vue';
import gaOption from '@/package/components/select/option.vue';
import gaMenu from '@/package/components/menu/menu.vue';
import gaMenuItem from '@/package/components/menu/menu-item.vue';

export default {
  name: "top-menu",
  components: {
    vTopLogo,
    gaMenu,
    gaMenuItem,
    gaSelect,
    gaOption
  },
  data() {
    return {
      model: "",
      nickName: "",
      languageList: [{
        label: '中文',
        value: 'zh-CN'
      },{
        label:'英文',
        value:'en-US'
      }],
      menuList: [{
          href: '#/introduction',
          value: '文档',
          name: '1',
          target: '_self'
        }, {
          href: 'http://192.168.200.127:8080/fed-module/index.html#/',
          value: '模块集市',
          name: '2',
          target: '_blank'
        },
        {
          href: '#/cli',
          value: '脚手架',
          name: '4',
          target: '_self'
        }, {
          href: 'http://192.168.200.127:8080/gaui-widgets/dist/#/',
          value: '业务组件',
          name: '6',
          target: '_blank'
        }, {
          href: 'http://192.168.200.127:8080/gammadoc/',
          value: '前端团队规范',
          name: '5',
          target: '_blank',
          color: '#ff3300'
        }
      ],
      activeName: '',
      urlList: [{
        value: 'index',
        index: 1
      }, {
        value: 'ga-module',
        index: 2
      }]
    }
  },
  watch: {

  },
  created() {
    let _vm = this;
    _vm.setActiveName(location.href);
    _vm.model = window.localStorage.getItem('language') || 'zh-CN'
  },
  methods: {
    /**
     * 根据url地址判断默认选择哪一项
     */
    setActiveName(url) {
      let _vm = this;
      for (let v of _vm.urlList) {
        if (url.includes(v.value)) {
          _vm.activeName = v.index;
          break;
        }
      }
    },
    onChange(val){
      Vue.config.lang = val;
      window.localStorage.setItem('language',val)
    }
  }

}

</script>
