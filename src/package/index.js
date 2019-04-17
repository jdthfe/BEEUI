// es6 polyfill
import 'core-js/fn/array/find-index'
import locale from './locale'

import Button from './components/button'
import Cascader from './components/cascader'
import DatePicker from './components/date-picker'
import Dropdown from './components/dropdown'
import Icon from './components/icon'
import Input from './components/input'
import Checkbox from './components/checkbox'
import Tabs from './components/tabs'
import Tooltip from './components/tooltip'
import {
  Select,
  Option,
  OptionGroup
} from './components/select'
import Page from './components/page'
import Table from './components/table'
import Modal from './components/modal'
import Affix from './components/affix'
import Menu from './components/menu'
import Radio from './components/radio'
import Message from './components/message'
import {
  Row,
  Col
} from './components/grid'
import Notice from './components/notice'
import Spin from './components/spin'
import Progress from './components/progress'
import Poptip from './components/poptip/'
import Timescale from './components/timescale/'
import Contrasttime from './components/contrasttime/'
import Breadcrumb from './components/breadcrumb'
import Form from './components/form'
import BackTop from './components/back-top'
import Badge from './components/badge'
import Steps from './components/steps'
import Upload from './components/upload'
import Panel from './components/panel'
import Timeline from './components/timeline'
import Switch from './components/switch'
import Slider from './components/slider'
import Address from './components/address'

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
  Slider,
  Address
}

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
  GaSlider: Slider,
  GaAddress: Address
}

const install = function (Vue, opts = {}) {
  locale.use(opts.locale)
  locale.i18n(opts.i18n)

  Object.keys(components).forEach((key) => {
      Vue.component(key, components[key])
  })

  // Vue.prototype.$Loading = LoadingBar
  Vue.prototype.$Message = Message
  Vue.prototype.$Modal = Modal
  Vue.prototype.$Notice = Notice
}

// auto install
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

module.exports = Object.assign(gaui, {
  install
}) // eslint-disable-line no-undef
