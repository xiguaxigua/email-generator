import Vue from 'vue'
import Block from '../components/mail-comps/block'
import LeftRightBlock from '../components/mail-comps/left-right-block'
import HTag from '../components/mail-comps/h-tag.vue'
import PTag from '../components/mail-comps/p-tag.vue'
import ImgTag from '../components/mail-comps/img-tag.vue'
import {
  Menu,
  Submenu,
  MenuItem,
  MenuItemGroup,
  Tabs,
  TabPane,
  Loading
} from 'element-ui'

[
  Block,
  LeftRightBlock,
  Menu,
  Submenu,
  MenuItem,
  MenuItemGroup,
  Tabs,
  TabPane,
  HTag,
  PTag,
  ImgTag
].forEach(comp => { Vue.component(comp.name, comp) })

Vue.use(Loading.directive)

Vue.prototype.$loading = Loading.service
