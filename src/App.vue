<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld
      msg="Test feature flag with Unleash Proxy"
      :featureToggerClient="featureToggerClient"
    />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import HelloWorld from "./components/HelloWorld.vue";
import { unleash } from "./config/feature-toggle.config";

@Component({
  components: {
    HelloWorld,
  },
})
export default class App extends Vue {
  featureToggerClient = unleash;

  mounted() {
    this.featureToggerClient.start();
  }

  unmounted() {
    this.featureToggerClient.stop();
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
