<template>
  <div id="app">
    <slot-machine></slot-machine>
  </div>
</template>


<script>

import SlotMachine from './components/SlotMachine'

export default {
  name: 'app',
  components: {
    SlotMachine
  }
}
</script>

<style>
#app {
  position: absolute;
  width: 100%;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
