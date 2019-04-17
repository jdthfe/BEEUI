import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

export default new Router({
  // mode: 'history',
  routes: [
    {
      path: '/',
      component: () => import ('../views/index/index.vue')
    },{
      path: '/introduction',
      component: () => import ('../views/introduction/index.vue')
    },{
      path: '/update',
      component: () => import ('../views/update/index.vue'),
    },{
      path: '/icon',
      component: () => import ('../views/icon/index.vue')
    },{
      path: '/button',
      component: () => import ('../views/button/index.vue')
    },{
      path: '/input',
      component: () => import ('../views/input/index.vue')
    },{
      path: '/modal',
      component: () => import ('../views/modal/index.vue')
    },{
      path: '/cascader',
      component: () => import ('../views/cascader/index.vue')
    },{
      path: '/dropdown',
      component: () => import ('../views/dropdown/index.vue')
    },{
      path: '/checkbox',
      component: () => import ('../views/checkbox/index.vue')
    },{
      path: '/tabs',
      component: () => import ('../views/tabs/index.vue')
    },{
      path: '/tooltip',
      component: () => import ('../views/tooltip/index.vue')
    },{
      path: '/table',
      component: () => import ('../views/table/index.vue')
    },{
      path: '/page',
      component: () => import ('../views/page/index.vue')
    },{
      path: '/select',
      component: () => import ('../views/select/index.vue')
    },{
      path: '/affix',
      component: () => import ('../views/affix/index.vue')
    },{
      path: '/menu',
      component: () => import ('../views/menu/index.vue')
    },{
      path: '/radio',
      component: () => import ('../views/radio/index.vue')
    },{
      path: '/message',
      component: () => import ('../views/message/index.vue')
    },{
      path: '/progress',
      component: () => import ('../views/progress/index.vue')
    },{
      path: '/grid',
      component: () => import ('../views/grid/index.vue')
    },{
      path: '/spin',
      component: () => import ('../views/spin/index.vue')
    },{
      path: '/datepicker',
      component: () => import ('../views/datepicker/index.vue')
    },{
      path: '/timescale',
      component: () => import ('../views/timescale/index.vue')
    },{
      path: '/breadcrumb',
      component: () => import ('../views/breadcrumb/index.vue')
    },{
      path: '/form',
      component: () => import ('../views/form/index.vue')
    },{
      path: '/notice',
      component: () => import ('../views/notice/index.vue')
    },{
      path:'/contrasttime',
      component: () => import ('../views/contrasttime/index.vue')
    },{
      path:'/backtop',
      component: () => import ('../views/backtop/index.vue')
    },{
      path:'/badge',
      component: () => import ('../views/badge/index.vue')
    },{
      path:'/cli',
      component: () => import ('../views/cli/index.vue')
    },{
      path:'/steps',
      component: () => import ('../views/steps/index.vue')
    },{
      path:'/upload',
      component: () => import ('../views/upload/index.vue')
    },{
      path:'/panel',
      component: () => import ('../views/panel/index.vue')
    },{
      path:'/theme',
      component: () => import ('../views/theme/index.vue')
    },{
      path:'/rate',
      component: () => import ('../views/rate/index.vue')
    },{
      path:'/switch',
      component: () => import ('../views/switch/index.vue')
    },{
      path:'/poptip',
      component: () => import ('../views/poptip/index.vue')
    },{
      path:'/slider',
      component: () => import ('../views/slider/index.vue')
    },{
      path: '/address',
      component: () => import ('../views/address/index.vue')
    }
  ],
})
