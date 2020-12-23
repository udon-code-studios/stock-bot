<template>
  <div id="app">
    <Controls />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Controls from './components/Controls.vue';

@Component({
  components: {
    Controls,
  },
})
export default class App extends Vue {}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 20px;
}
</style>
