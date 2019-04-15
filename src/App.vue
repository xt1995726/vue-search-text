<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
html {
  height: 100%;
  overflow: hidden;
}

body {
  height: 100%;
  background: url("./assets/pc_bg.jpg") no-repeat;
  background-size: 100% 100%;
}
</style>
