import Q from 'q';

export default {
  login() {
    let prefix = prefix || "#/";
    let navList = [{
      name: "快速了解",
      icon: "",
      subNav: [{
          name: '主题定制',
          href: prefix + 'theme',
          ids: '50'
        }, {
          name: '基本介绍',
          href: prefix + 'introduction',
          ids: '51'
        },
        {
          name: '更新日志',
          href: prefix + 'update',
          ids: '52',
          style: 'color:#f30;font-weight:bold;'
        }
      ]
    }, {
      name: "General",
      icon: "",
      subNav: [{
        name: 'icon 图标',
        href: prefix + 'icon',
        ids: '5'

      }, {
        name: "Button 按钮",
        href: prefix + "button",
        ids: "1"
      }]}, {
        name: "Layout",
        icon: "",
        subNav: [{
          name: 'Grid 布局',
          href: prefix + 'grid',
          ids: "19"
  
        }, {
          name: 'Tabs 标签切换',
          href: prefix + 'tabs',
          ids: "8"
  
        }, {
          name: 'Table 表格',
          href: prefix + 'table',
          ids: "10"
  
        }, {
          name: 'Panel 面板组件',
          href: prefix + 'panel',
          ids: "32"
  
        }, {
          name: 'List 列表 ？',
          href: prefix + 'List',
          ids: "32"
  
        }]
      },{
        name:"Navigation",
        icon:"",
        subNav:[
          {
            name: 'Affix 固定',
            href: prefix + 'affix',
            ids: "13"
    
          },{
            name: 'Breadcrumb 面包屑',
            href: prefix + 'breadcrumb',
            ids: "24"
    
          }, {
            name: 'Dropdown 下拉菜单',
            href: prefix + 'dropdown',
            ids: "6"
    
          }, {
            name: 'Menu 菜单',
            href: prefix + 'menu',
            ids: "14"
    
          }, {
            name: 'Page 分页',
            href: prefix + 'page',
            ids: "11"
    
          }, {
            name: 'Steps 步骤条',
            href: prefix + 'steps',
            ids: "30"
    
          }
        ]
      }, {
      name: "Data Entry",
      icon: "",
      subNav: [{
        name: "Input 输入框",
        href: prefix + "input",
        ids: "2"

      }, {
        name: 'Cascader 级联选择',
        href: prefix + 'cascader',
        ids: "4"

      }, {
        name: 'Checkbox 复选框',
        href: prefix + 'checkbox',
        ids: "7"

      }, {
        name: 'Select 选择器',
        href: prefix + 'select',
        ids: "12"

      }, {
        name: 'Radio 单选',
        href: prefix + 'radio',
        ids: "15"

      }, {
        name: 'Datepicker 时间选择',
        href: prefix + 'datepicker',
        ids: "21"

      }, {
        name: 'Timescale 分段时刻',
        href: prefix + 'timescale',
        ids: "23"

      },  {
        name: 'Form 表单',
        href: prefix + 'form',
        ids: "25"

      }, {
        name: 'Contrasttime 对比日期',
        href: prefix + 'contrasttime',
        ids: "27"

      }, {
        name: 'Upload 上传组件',
        href: prefix + 'upload',
        ids: "31"

      }, {
        name: 'Rate 评分组件',
        href: prefix + 'rate',
        ids: "33"

      }, {
        name: 'Switch 开关',
        href: prefix + 'switch',
        ids: "34"

      }, {
        name: 'Slider 滑块',
        href: prefix + 'Slider',
        ids: "36"

      }, {
        name: 'Address 地址联动',
        href: prefix + 'Address',
        ids: "37"

      }]
    },{
      name:"Data Display",
      icon:"",
      subNav:[ 
        {
        name: 'Badge 徽标数',
        href: prefix + 'badge',
        ids: "29"

      }, {
        name: 'Portrait 头像 ？',
        href: prefix + 'Portrait',
        ids: "54"

      }, {
        name: 'Poptip 气泡提示',
        href: prefix + 'poptip',
        ids: "35"

      }, {
        name: 'Tooltip 提示框',
        href: prefix + 'tooltip',
        ids: "9"

      }
    ]},{
      name:"Feedback",
      icon:"",
      subNav:[
        {
          name: 'Alert 信息提示 ？',
          href: prefix + 'Alert',
          ids: "53"
        }, {
          name: "Modal 模态框",
          href: prefix + "modal",
          ids: "3"
  
        }, {
          name: 'Message 消息提示',
          href: prefix + 'message',
          ids: "16"
  
        }, {
          name: 'Notice 通知',
          href: prefix + 'notice',
          ids: "26"
  
        }, {
          name: 'Progress 进度条',
          href: prefix + 'progress',
          ids: "17"
  
        }, {
          name: 'Spin 加载',
          href: prefix + 'spin',
          ids: "20"
  
        }
      ]
    },
    {
      name:"Other",
      icon:"",
      subNav:[
        {
          name: 'Backtop 回到顶部',
          href: prefix + 'backtop',
          ids: "28"
  
        }
      ]
    }
  ];
    return Q.Promise((resolve, reject) => {
      resolve({
        navList
      });
    });
    // });
  }
};
