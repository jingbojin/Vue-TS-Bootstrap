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
    <hr/>
    <Footer/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Footer from '@/views/components/Footer.vue';

@Component({
  components: {
    Footer,
  }
})
export default class App extends Vue {}
</script>

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

a#forkme_banner {
  position: absolute;
  top: 0;
  left: 0;
  width: 138px;
  height: 138px;
  display: block;
  background: transparent url(assets/fork-sprite.png) 0 0 no-repeat;
  text-indent: -9000px;
  z-index: 3;
}
</style>
