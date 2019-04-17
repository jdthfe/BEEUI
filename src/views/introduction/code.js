let code = {};

code.down = `
// 安装命令（master分支）：
npm install git+http://source.jd.com/app/fez-ui.git --save

// 安装命令（dev分支）：
npm install git+http://source.jd.com/app/fez-ui.git#develop --save
`
code.base = `
  import Vue from 'vue';
  import VueRouter from 'vue-router';
  import App from 'components/app.vue';
  import Routers from './router.js';
  import gaui from 'gaui';
  import 'gaui/lib/styles/gaui.css';

  Vue.use(VueRouter);
  Vue.use(gaui);

  // vue文件模版使用统一带上ga-，例如：<ga-panel></ga-panel>

  // The routing configuration
  const RouterConfig = {
      routes: Routers
  };
  const router = new VueRouter(RouterConfig);

  new Vue({
      el: '#app',
      router: router,
      render: h => h(App)
  });
`;

code.anxu = `
  // 第一步：下载babel-plugin-import和babel-preset-es2015（gaui打包依赖这个，后期替换）插件

  //第二步：.babelrc文件配置加入es2015以及配置plugins，片段代码如下：
  {
    "presets": [
      "es2015"
    ],
    "plugins": [
      ["import", {
        "libraryName": "gaui",
        "libraryDirectory": "src/package/components"
      }]
    ],
  }
  // 第三步：如下使用
  /**
   * gaui 布局组件
   */
  import { Row,Message } from 'gaui'
  Vue.component('ga-row', Row);
  Vue.prototype.$Message = Message;
`;

code.bower = `
  <link rel="stylesheet" type="text/css" href="./bower_components/ga-ui/lib/styles/gaui.css">
  <script type="text/javascript" src="./bower_components/ga-ui/lib/gaui.js"></script>
`;

code.wz =`
const gaui = {
  Button,
  ButtonGroup: Button.Group,
  Cascader,
  DatePicker,
  Dropdown,
  DropdownItem: Dropdown.Item,
  DropdownMenu: Dropdown.Menu,
  Icon,
  Input,
  Select,
  Option: Option,
  OptionGroup,
  Checkbox,
  CheckboxGroup: Checkbox.Group,
  Tabs,
  Pane: Tabs.Pane,
  Tooltip,
  Poptip,
  Page,
  Table,
  Modal,
  Affix,
  Menu,
  MenuGroup: Menu.Group,
  MenuItem: Menu.Item,
  Submenu: Menu.Sub,
  Radio,
  RadioGroup: Radio.Group,
  Message,
  Row,
  Col,
  Notice,
  Spin,
  Progress,
  Timescale,
  Contrasttime,
  Breadcrumb,
  BreadcrumbItem: Breadcrumb.Item,
  Form,
  FormItem: Form.Item,
  BackTop,
  Badge,
  Step: Steps.Step,
  Steps,
  Upload,
  Panel,
  Timeline,
  TimelineItem: Timeline.Item,
  Switch,
  Slider
};

// use使用重命名注册组件
const components = {
  GaButton: Button,
  GaButtonGroup: Button.Group,
  GaCascader: Cascader,
  GaDatePicker: DatePicker,
  GaDropdown: Dropdown,
  GaDropdownItem: Dropdown.Item,
  GaDropdownMenu: Dropdown.Menu,
  GaIcon: Icon,
  GaInput: Input,
  GaSelect: Select,
  GaOption: Option,
  GaOptionGroup: OptionGroup,
  GaCheckbox: Checkbox,
  GaCheckboxGroup: Checkbox.Group,
  GaTabs: Tabs,
  GaTabPane: Tabs.Pane,
  GaTooltip: Tooltip,
  GaPoptip: Poptip,
  GaPage: Page,
  GaTable: Table,
  GaModal: Modal,
  GaAffix: Affix,
  GaMenu: Menu,
  GaMenuGroup: Menu.Group,
  GaMenuItem: Menu.Item,
  GaSubmenu: Menu.Sub,
  GaRadio: Radio,
  GaRadioGroup: Radio.Group,
  Message: Message,
  GaRow: Row,
  GaCol: Col,
  Notice: Notice,
  GaSpin: Spin,
  GaProgress: Progress,
  GaTimescale: Timescale,
  GaContrasttime: Contrasttime,
  GaBreadcrumb: Breadcrumb,
  GaBreadcrumbItem: Breadcrumb.Item,
  GaForm: Form,
  GaFormItem: Form.Item,
  GaBackTop: BackTop,
  GaBadge: Badge,
  GaStep: Steps.Step,
  GaSteps: Steps,
  GaUpload: Upload,
  GaPanel: Panel,
  GaTimeline: Timeline,
  GaTimelineItem: Timeline.Item,
  GaSwitch: Switch,
  GaSlider: Slider
}
` 

export default code;
