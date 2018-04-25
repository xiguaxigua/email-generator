<template>
  <div class="comps-list">
    <h3 class="header-3">容器</h3>
    <ul class="comps-container">
      <li
        v-for="({ label, key, icon }) in compsList"
        :key="key"
        draggable="true"
        @dragstart.stop="dragStart($event, key, 'component')"
        class="comp-item">
        <i :class="[`icon-${icon}`]"></i>
        <span>{{ label }}</span>
      </li>
    </ul>
    <h3 class="header-3">元素</h3>
    <ul class="tags-container">
      <li
        v-for="({ label, key, icon }) in tagsList"
        :key="key"
        draggable="true"
        @dragstart.stop="dragStart($event, key, 'tag')"
        class="tag-item">
        <i :class="[`icon-${icon}`]"></i>
        <span>{{ label }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
import {
  COMPS_LIST,
  TAGS_LIST
} from '../data'
import { mapMutations } from 'vuex'

export default {
  data () {
    this.compsList = COMPS_LIST
    this.tagsList = TAGS_LIST
    return {}
  },

  methods: {
    ...mapMutations({
      setDragItem: 'SET_DRAGGING_ITEM'
    }),
    dragStart (e, name, type) {
      e.dataTransfer.dropEffect = 'move'
      this.setDragItem({
        name,
        type,
        id: Date.now()
      })
    }
  }
}
</script>

<style lang="less">
.page-set-detail {
  .comps-list {
    padding: 10px;

    .comps-container,
    .tags-container {
      margin: 0;
      padding: 0;
      list-style: none;

      .comp-item,
      .tag-item {
        width: 150px;
        height: 25px;
        padding-left: 5px;
        margin-bottom: 5px;
        line-height: 25px;
        cursor: pointer;
        border-radius: 4px;

        &:hover {
          background-color: #f9f9f9;
        }

        i {
          display: inline-block;
          vertical-align: middle;
        }

        span {
          vertical-align: middle;
        }
      }
    }
  }
}
</style>
