import Vue from 'vue'
import * as types from './mutation-types'

export default {
  [types.SET_DRAGGING_ITEM] (state, obj) {
    Vue.set(state, 'draggingItem', obj)
  }
}
