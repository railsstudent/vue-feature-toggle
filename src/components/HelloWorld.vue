<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      Is I18n supported?
      <span style="font-weight: bold">{{ isI18nEnabled }}</span>
    </p>
    <p>
      Which version of Vue should ESG use?
      <span style="font-weight: bold">{{ vueVersion }}</span>
    </p>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { UnleashClient } from "unleash-proxy-client";

@Component
export default class HelloWorld extends Vue {
  @Prop() private msg!: string;
  @Prop() private featureToggerClient!: UnleashClient;

  isI18nEnabled = false;
  vueVersion = "";

  updateFeatureFlags() {
    this.isI18nEnabled = this.featureToggerClient.isEnabled("IS_18N_ENABLED");
    this.vueVersion = this.featureToggerClient.isEnabled("IS_VUE3_COOL")
      ? "Vue 3 + Vite is cool"
      : "Stick with Vue 2 but I won't like it";
  }

  mounted() {
    this.updateFeatureFlags();

    this.featureToggerClient.on("update", () => {
      this.updateFeatureFlags();
    });
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
