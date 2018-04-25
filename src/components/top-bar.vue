<template>
  <el-menu
    :default-active="active"
    class="component-top-bar"
    mode="horizontal"
    @select="selectHandler"
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#ffd04b">
    <el-menu-item index="1">Email Generator</el-menu-item>
  </el-menu>
</template>

<script>
export default {
  data () {
    return {
      active: ''
    }
  },
  methods: {
    selectHandler () {
      console.log('select')
    }
  }
}
</script>

<style lang="less">
.component-top-bar {

}
</style>
