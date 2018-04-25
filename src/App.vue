<template>
  <div id="app">
    <top-bar class="top-section"></top-bar>
    <router-view/>
  </div>
</template>

<script>
import TopBar from './components/top-bar'
export default {
  name: 'App',

  components: {
    TopBar
  }
}
</script>

<style lang="less">
#app {
  position: relative;
  height: 100%;
  padding-top: 60px;
  font-family: "Avenir", Helvetica, Arial, sans-serif;

  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  .top-section {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 60px;
    z-index: 10;
  }
}
</style>
