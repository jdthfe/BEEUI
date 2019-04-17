// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import VueI18n from 'vue-i18n'
import App from './App'
import router from './router'
import Language from './language/index';

import _ from 'lodash'
Vue.config.productionTip = false
Vue.use(VueRouter);
Vue.use(VueI18n);

// 设置语言
const navLang = navigator.language;
const localLang = (navLang === 'zh-CN' || navLang === 'en-US') ? navLang : false;
const lang = window.localStorage.getItem('language') || localLang || 'zh-CN';
Vue.config.lang = lang;

// 多语言配置
const locales = Language;
const mergeZH = locales['zh-CN'];
const mergeEN = locales['en-US'];
Vue.locale('zh-CN', mergeZH);
Vue.locale('en-US', mergeEN);

/**
 * 引入公共css文件
 */
import './assets/style/common.less';
import './package/styles/index.less';

import vCode from '@/public/components/code.vue';
import gaRow from '@/package/components/grid/row.vue';
import gaCol from '@/package/components/grid/col.vue';
import gaPanel from '@/public/components/common/panel.vue';
import vPage from '@/public/components/common/page.vue';

Vue.component('ga-panel', gaPanel);
Vue.component('v-page', vPage);
Vue.component('ga-row', gaRow);
Vue.component('ga-col', gaCol);
Vue.component('v-code', vCode);

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    render: h => h(App)
})
