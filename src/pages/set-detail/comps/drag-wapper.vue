<template>
  <div class="drag-wapper" ref="dragWapper">
    <div class="top-tool-bar">
      <div class="left-part">
        <i
          draggable="true"
          @dragstart.stop="dragStart"
          class="icon-menu">
        </i>
      </div>
      <div class="right-part">
        <i class="icon-bin" @click="del"></i>
      </div>
    </div>
    <slot></slot>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
  props: {
    info: Object,
    index: Number
  },

  methods: {
    ...mapMutations({
      setDragItem: 'SET_DRAGGING_ITEM'
    }),
    dragStart (e) {
      const { info, setDragItem, index, $refs: { dragWapper } } = this

      e.dataTransfer.effectAllowed = 'move'
      e.dataTransfer.setDragImage(dragWapper, 15, 15)

      setTimeout(() => {
        dragWapper.parentElement.removeChild(dragWapper)
      }, 200)

      setDragItem(Object.assign({}, info, {
        type: 'betweenComponent',
        index
      }))
      return true
    },
    del () {
      this.$emit('del', this.index)
    }
  }
}
</script>

<style lang="less">
.page-set-detail {
  padding-top: 10px;

  .drag-wapper {
    position: relative;

    .top-tool-bar {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      background-color: rgba(0, 0, 0, .5);
      justify-content: space-between;
      padding: 10px;
      display: flex;
      height: 10px;
      overflow: hidden;
      opacity: 0;
      z-index: 10;

      &:hover {
        height: auto;
        opacity: 1;
      }

      i {
        color: #fff;
        cursor: pointer;
      }
    }
  }
}
</style>
