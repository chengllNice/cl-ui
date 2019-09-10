import devHome from '../views/mainContent/devPage/Home.vue'
import devLayout from '../views/mainContent/devPage/LayoutView.vue'
import devMenu from '../views/mainContent/devPage/MenuView.vue'
import devButton from '../views/mainContent/devPage/ButtonView.vue'
import devBadge from '../views/mainContent/devPage/BadgeView.vue'
import devInput from '../views/mainContent/devPage/InputView.vue'
import devSelect from '../views/mainContent/devPage/SelectView.vue'
import devCheckbox from '../views/mainContent/devPage/CheckboxView.vue'
import devRadio from '../views/mainContent/devPage/RadioView.vue'
import devSwitch from '../views/mainContent/devPage/SwitchView.vue'
import devSlider from '../views/mainContent/devPage/SliderView.vue'
import devUpload from '../views/mainContent/devPage/UploadView.vue'
import devPopover from '../views/mainContent/devPage/PopoverView.vue'
import devTooltip from '../views/mainContent/devPage/TooltipView.vue'
import devTag from '../views/mainContent/devPage/TagView.vue'
import devModal from '../views/mainContent/devPage/ModalView.vue'
import devMessage from '../views/mainContent/devPage/MessageView.vue'
import devProgress from '../views/mainContent/devPage/ProgressView.vue'
import devAlter from '../views/mainContent/devPage/AlterView.vue'
import devCard from '../views/mainContent/devPage/CardView.vue'
import devDrawer from '../views/mainContent/devPage/DrawerView.vue'
import devNotice from '../views/mainContent/devPage/NoticeView.vue'
import devTable from '../views/mainContent/devPage/TableView.vue'
import devCollapse from '../views/mainContent/devPage/CollapseView.vue'
import devGrid from '../views/mainContent/devPage/GridView.vue'

let routers = [
  {
    path: '/dev/home',
    name: 'devHome',
    component: devHome
  },
  {
    path: '/dev/layout',
    name: 'devLayout',
    component: devLayout
  },
  {
    path: '/dev/menu',
    name: 'devMenu',
    component: devMenu
  },
  {
    path: '/dev/input',
    name: 'devInput',
    component: devInput
  },
  {
    path: '/dev/select',
    name: 'devSelect',
    component: devSelect
  },
  {
    path: '/dev/button',
    name: 'devButton',
    component: devButton
  },
  {
    path: '/dev/badge',
    name: 'devBadge',
    component: devBadge
  },
  {
    path: '/dev/checkbox',
    name: 'devCheckbox',
    component: devCheckbox
  },
  {
    path: '/dev/radio',
    name: 'devRadio',
    component: devRadio
  },
  {
    path: '/dev/switch',
    name: 'devSwitch',
    component: devSwitch
  },
  {
    path: '/dev/slider',
    name: 'devSlider',
    component: devSlider
  },
  {
    path: '/dev/upload',
    name: 'devUpload',
    component: devUpload
  },
  {
    path: '/dev/popover',
    name: 'devPopover',
    component: devPopover
  },
  {
    path: '/dev/tooltip',
    name: 'devTooltip',
    component: devTooltip
  },
  {
    path: '/dev/tag',
    name: 'devTag',
    component: devTag
  },
  {
    path: '/dev/modal',
    name: 'devModal',
    component: devModal
  },
  {
    path: '/dev/message',
    name: 'devMessage',
    component: devMessage
  },
  {
    path: '/dev/notice',
    name: 'devNotice',
    component: devNotice
  },
  {
    path: '/dev/progress',
    name: 'devProgress',
    component: devProgress
  },
  {
    path: '/dev/alter',
    name: 'devAlter',
    component: devAlter
  },
  {
    path: '/dev/card',
    name: 'devCard',
    component: devCard
  },
  {
    path: '/dev/drawer',
    name: 'devDrawer',
    component: devDrawer
  },
  {
    path: '/dev/table',
    name: 'devTable',
    component: devTable
  },
  {
    path: '/dev/collapse',
    name: 'devCollapse',
    component: devCollapse
  },
  {
    path: '/dev/grid',
    name: 'devGrid',
    component: devGrid
  },
];

export default routers;