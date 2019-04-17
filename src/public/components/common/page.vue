<template>
  <div class="layout">
    <v-top-menu></v-top-menu>
    <div class="layout-content layout-content-other">
      <ga-row>
        <ga-col span="4">
          <ga-menu :active-name="activeName" width="auto">
            <ga-menu-group :title="items.name" v-for="(items,idx) in menuList" :key="idx">
              <a :href="ite.href" v-for="(ite, index) in items.subNav" :key="index">
                <ga-menu-item :name="ite.ids" :style="ite.style">
                  {{ite.name}}
                </ga-menu-item>
              </a>
            </ga-menu-group>
          </ga-menu>
        </ga-col>
        <ga-col span="20" class="right-col">
          <slot></slot>
        </ga-col>
      </ga-row>
    </div>
    <div class="layout-copy">
      <v-footer></v-footer>
    </div>
    <ga-back-top></ga-back-top>
  </div>
</template>
<script>
/**
 * 菜单导航模块
 */
import gaMenu from '@/package/components/menu/menu.vue';
import gaMenuItem from '@/package/components/menu/menu-item.vue';
import gaMenuGroup from '@/package/components/menu/menu-group.vue';

import gaBackTop from '@/package/components/back-top/back-top.vue';

/**
 * 顶部导航模块
 */
import vTopMenu from "./top-menu.vue";

import gaAffix from '@/package/components/affix/affix.vue';

/**
 * 页脚
 */
import vFooter from "./foot.vue";

import Service from './common';

export default {
  components: {
    gaMenu,
    gaMenuItem,
    vTopMenu,
    vFooter,
    gaMenuGroup,
    gaAffix,
    gaBackTop
  },
  data() {
    return {
      menuList: [],
      activeName: '',
      urlList: [{
          value: 'theme',
          index: '50',
        },{
          value: 'introduction',
          index: '51',
        },{
          value: 'update',
          index: '52',
        }, {
          value: 'button',
          index: '1',
        }, {
          value: 'input',
          index: '2',
        }, {
          value: 'modal',
          index: '3',
        }, {
          value: 'cascader',
          index: '4',

        }, {
          value: 'icon',
          index: '5',

        }, {
          value: 'dropdown',
          index: '6',

        }, {
          value: 'checkbox',
          index: '7',

        }, {
          value: 'tabs',
          index: '8',

        }, {
          value: 'tooltip',
          index: '9',

        }, {
          value: 'table',
          index: '10',

        }, {
          value: 'page',
          index: '11',

        }, {
          value: 'select',
          index: '12',

        }, {
          value: 'affix',
          index: '13',

        }, {
          value: 'menu',
          index: '14',

        }, {
          value: 'radio',
          index: '15',

        }, {
          value: 'message',
          index: '16',

        }, {
          value: 'progress',
          index: '17',

        }, {
          value: 'grid',
          index: '19',

        }, {
          value: 'spin',
          index: '20',

        }, {
          value: 'datepicker',
          index: '21',

        }, {
          value: 'drag',
          index: '22',

        }, {
          value: 'timescale',
          index: '23',

        }, {
          value: 'breadcrumb',
          index: '24',

        }, {
          value: 'form',
          index: '25',

        }, {
          value: 'notice',
          index: '26',

        }, {
          value: 'contrasttime',
          index: '27',

        }, {
          value: 'backtop',
          index: '28',
        },{
          value:'badge',
          index: '29',
        },{
          value:'steps',
          index: '30',
        },{
          value:'upload',
          index: '31',
        },{
          value:'panel',
          index: '32',
        },{
          value:'rate',
          index: '33',
        },{
          value:'switch',
          index: '34',
        },{
          value:'poptip',
          index: '35',
        },{
          value:'slider',
          index: '36',
        },{
          value:'address',
          index: '37',
        }
      ]
    }
  },
  mounted() {
    let _vm = this;
    Service.login().then((data) => {
      _vm.menuList = data.navList;
      _vm.$nextTick(() => {
        _vm.setActiveName(location.href);
      })
    })
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
    }
  }
}

</script>
