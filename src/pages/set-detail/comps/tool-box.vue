<template>
  <div class="tool-box">
    <el-tabs class="tabs-section" v-model="active">
      <el-tab-pane
        v-for="({ label, key }) in menus"
        :key="key"
        :label="label"
        :name="key">
        <component :is="active"></component>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import {
  MENUS
} from '../data'
import CompsList from './comps-list'
import GlobalStyle from './global-style'
import inlineStyle from './inline-style'

export default {
  data () {
    this.menus = MENUS

    return {
      active: MENUS[0].key
    }
  },

  methods: {
    clickHandler (tab, event) {
      console.log(tab, event)
    }
  },

  components: {
    CompsList,
    GlobalStyle,
    inlineStyle
  }
}
</script>

<style lang="less">
.page-set-detail {
  .tool-box {
    padding: 10px;
    height: 100%;
    background-color: #fff;

    .tabs-section {
      display: flex;
      flex-direction: column;
      height: 100%;

      .el-tabs__content {
        flex: 1;
        overflow: auto;
      }

      .el-tabs__nav-scroll {
        text-align: center;

        .el-tabs__nav {
          float: none;

          .el-tabs__active-bar {
            display: none;
          }
        }
      }
    }
  }
}
</style>
