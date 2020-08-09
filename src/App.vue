<template>
  <div id="app" class="container">
    <div class="text-center">
      <b-img src="/logo.png" fluid alt="Fluid image"></b-img>
    </div>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
