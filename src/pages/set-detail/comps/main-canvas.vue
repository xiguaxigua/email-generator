<template>
  <div class="main-canvas" @click="current = 0">
    <center>
      <table
        border="0"
        cellpadding="0"
        cellspacing="0"
        height="100%"
        width="100%"
        class="bodyTable">
        <tr>
          <td align="center" valign="top" class="bodyCell" @click.stop>
            <table border="0" cellpadding="0" cellspacing="0" width="600" class="emailBody">
              <tr>
                <td
                  align="center"
                  valign="top"
                  @dragover.stop.prevent
                  @drop.stop.prevent="drop"
                  @dragleave.stop.prevent="dragLeave"
                  class="canvas-container">
                  <div class="container-placeholder" v-if="!content.length"></div>
                  <drag-wapper
                    v-for="(item, index) in content"
                    :key="item.id"
                    :class="{
                      'current-focus': item.id === current,
                      'on-dragging-state': dragging
                    }"
                    :info="item"
                    :index="index"
                    @del="del"
                    @dragenter.native.prevent="dragEnterComp"
                    @dragover.native.stop.prevent="dragOverComp">
                    <component :is="item.name"></component>
                  </drag-wapper>
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
    </center>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import Block from '../mail-comps/block'
import LeftRightBlock from '../mail-comps/left-right-block'
import DragWapper from './drag-wapper'

export default {
  data () {
    this.directionUp = false
    this.currentNode = null
    this.currentParent = null

    return {
      content: [],
      current: 0,
      dragging: false
    }
  },

  computed: {
    ...mapState(['draggingItem'])
  },

  methods: {
    ...mapMutations({
      setDragItem: 'SET_DRAGGING_ITEM'
    }),
    dragEnter (e) {
      const { draggingItem } = this
      const { type } = draggingItem
      if (type !== 'component') return
      this.dragging = true
    },
    dragLeave (e) {
      const classList = e.fromElement.classList
      if (!classList.contains('empty-holder')) {
        this.dragging = false
        this.clearEmptyHolder()
      }
    },
    dragEnterComp (e) {
    },
    dragOverComp (e) {
      const {
        clearEmptyHolder,
        draggingItem
      } = this
      const {
        type
      } = draggingItem || {}

      const directionBottom = this.getDirection(e)
      const node = e.currentTarget
      const parent = node.parentElement
      this.currentNode = node
      this.currentParent = parent

      clearEmptyHolder()

      const emptyHolder = this.getEmptyHolder()
      if (type === 'component') {
        if (directionBottom) {
          parent.insertBefore(emptyHolder, node.nextSibling)
          this.directionUp = false
        } else if (type === 'betweenComponent') {
          parent.insertBefore(emptyHolder, node)
          this.directionUp = true
        }
      } else {
        // parent.removeChild(parent.children[index])
        if (directionBottom) {
          parent.insertBefore(emptyHolder, node.nextSibling)
          this.directionUp = false
        } else {
          parent.insertBefore(emptyHolder, node)
          this.directionUp = true
        }
      }
    },
    drop (e) {
      const {
        currentNode,
        currentParent,
        content,
        draggingItem,
        clearEmptyHolder
      } = this
      const {
        type,
        index: originIndex
      } = draggingItem || {}
      const parent = currentParent || e.currentTarget.parentElement
      const nodes = Array.prototype.slice.call(parent.children)
      const index = nodes.indexOf(currentNode)

      clearEmptyHolder()

      if (type === 'component') {
        this.dragging = false
        this.setDragItem(null)

        if (this.directionUp) {
          content.splice(index - 1, 0, draggingItem)
        } else {
          content.splice(index + 1, 0, draggingItem)
        }
      } else if (type === 'betweenComponent') {
        this.dragging = false
        this.setDragItem(null)
        content.splice(originIndex, 1)
        if (this.directionUp) {
          content.splice(index - 1, 0, draggingItem)
        } else {
          content.splice(index + 1, 0, draggingItem)
        }
      }
      const contentTemp = content
      this.content = []
      this.$nextTick(() => {
        this.content = contentTemp
      })
    },
    clearEmptyHolder () {
      const emptyHolderEl = document.querySelector('.empty-holder')
      if (emptyHolderEl) emptyHolderEl.parentNode.removeChild(emptyHolderEl)
    },
    del (index) {
      this.content.splice(index, 1)
    },
    getDirection (e) {
      const node = e.currentTarget
      const y = e.offsetY
      const height = node.clientHeight
      return y > height * 0.5
    },
    clickHandler (item) {
      this.current = item.id
    },
    getEmptyHolder () {
      const box = document.createElement('div')
      box.classList.add('empty-holder')
      return box
    }
  },

  components: {
    Block,
    LeftRightBlock,
    DragWapper
  }
}
</script>

<style lang="less">
@import './main-canvas.less';
.page-set-detail {
  .main-canvas {
    .canvas-container {
      min-height: 100px;
    }

    .empty-holder {
      height: 50px;
      background-color: #ccc;
      border: 1px solid blue;
    }

    .container-placeholder {
      float: left;
      height: 100px;
      width: 0;
      visibility: hidden;
    }

    .on-dragging-state {
      outline: 1px solid red;
    }

    .current-focus {
      outline: 1px dotted blue;
    }
  }
}
</style>
