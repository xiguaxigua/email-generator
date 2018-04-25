<template>
  <div class="page-set-detail">
    <main-canvas class="main-section"></main-canvas>
    <tool-box class="tool-section"></tool-box>
  </div>
</template>

<script>
import MainCanvas from './comps/main-canvas'
import ToolBox from './comps/tool-box'

export default {
  components: {
    MainCanvas,
    ToolBox
  }
}
</script>

<style lang="less">
@import "../../common/constants.less";

.page-set-detail {
  display: flex;
  height: 100%;
  background-color: @bg-gray-color;

  .main-section {
    overflow: auto;
    flex: 1;
    border-right: 1px solid @border-color;
  }

  .tool-section {
    width: 300px;
  }
}
</style>
