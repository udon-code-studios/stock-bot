<template>
    <form>
        <label>Symbol: <input id="symbol" required></label>
        <input type="submit" value="Submit">
    </form>
</template>

<script lang=ts>
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Controls extends Vue {
  
}
</script>

<style scoped>
</style>
