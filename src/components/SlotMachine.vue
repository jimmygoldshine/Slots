<template>
  <div>
    <h1>{{ msg }}</h1>
    <div>{{ x }}, {{ y }}, {{ z }}</div>
    <div id='wheels-container'>
      <wheel v-bind:spinning="isSpinning" number="wheel-1" tile-count="4"></wheel>
      <wheel v-bind:spinning="isSpinning" number="wheel-2" tile-count="4"></wheel>
      <wheel v-bind:spinning="isSpinning" number="wheel-3" tile-count="5"></wheel>
    </div>
    <button v-on:click="spin">Spin</button>
  </div>
</template>

<script>

import Wheel from './Wheel'

export default {
  components: {
    Wheel
  },

  data() {
    return {
      msg: 'Welcome to the Slot',
      x: 0,
      y: 0,
      z: 0,
      isSpinning: false
    }
  },
  mounted() {
    window.addEventListener('devicemotion', this.onDeviceMotion)
  },
  methods: {
    onDeviceMotion: function(event) {
      this.x = Math.round((event.acceleration.x)).toFixed(2);
      this.y = Math.round((event.acceleration.y)).toFixed(2);
      this.z = Math.round((event.acceleration.z)).toFixed(2);
    },
    spin: function(event) {
      this.isSpinning = true;
      var self = this;
      setTimeout(function() {
        self.isSpinning = false;
      }, 5000);
    }
  },
  watch: {
    x: function(value) {
      if (value < 8 && value > -8) {
        var self = this;
        setTimeout(function() {
          self.msg = 'Welcome to Your Slot'
          self.isSpinning = false;
        }, 5000);
      } else {
        this.msg = 'Holy Cow!';
        this.isSpinning = true;
      }
    }
  },
};

</script>

<style>

#wheels-container {
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  height: 300px;
  width: 600px;
}

</style>
