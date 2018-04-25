import Vue from 'vue'
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
  Menu,
  Submenu,
  MenuItem,
  MenuItemGroup,
  Tabs,
  TabPane
].forEach(comp => Vue.use(comp))

Vue.use(Loading.directive)

Vue.prototype.$loading = Loading.service
