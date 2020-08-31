<template>
  <div id="app" class="container">
    <div class="text-center">
      <b-img
          class="App-logo"
          src="/logo.png"
          fluid
          alt="Fluid image"
      />
    </div>
    <hr/>
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
.App-logo {
  height: 30vmin;
  pointer-events: none;
}

@media (prefers-reduced-motion: no-preference) {
  .App-logo {
    animation: App-logo-float infinite 3s ease-in-out;
  }
}

@keyframes App-logo-float {
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(10px)
  }
  100% {
    transform: translateY(0px)
  }
}
</style>
