<template>
  <div id="app" ref="app">
    <Header />
    <router-view />
  </div>
</template>

<script>
import Header from "./components/Header";
export default {
  name: "App",
  components: { Header },
};
</script>

<style lang="sass">
@import "src/assets/styles/colors.sass"
#app
  height: 100%
html
  height: 100%
  overflow: hidden
body
  height: 100%
  background: $black
  margin: 0
  font-family: Consolas, monospace
</style>
