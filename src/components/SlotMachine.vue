<template>
  <div>
    <h1>{{ msg }}</h1>
    <button id="spin-btn" v-on:click="spin">Shake your phone to spin</button>
    <div id='wheels-container'>
      <wheel v-on:selection="wheelOneSelection" v-bind:spinning="isSpinning" number="wheel-1" tile-count="4"></wheel>
      <wheel v-on:selection="wheelTwoSelection" v-bind:spinning="isSpinning" number="wheel-2" tile-count="4"></wheel>
      <wheel v-on:selection="wheelThreeSelection" v-bind:spinning="isSpinning" number="wheel-3" tile-count="5"></wheel>
    </div>
    <div id='product-container' v-if="spun">
      <product v-bind:wheelSelection="wheels"></product>
    </div>
  </div>
</template>

<script>

import Wheel from './Wheel'
import Product from './Product'

export default {
  components: {
    Wheel, Product
  },

  data() {
    return {
      msg: 'Welcome to the Slot',
      x: 0,
      wheels: [3, 3, 3],
      isSpinning: false,
      spun: false
    }
  },
  mounted() {
    window.addEventListener('devicemotion', this.onDeviceMotion)
  },
  methods: {
    onDeviceMotion: function(event) {
      this.x = Math.round((event.acceleration.x)).toFixed(2);
    },
    spin: function(event) {
      this.x = 10
      var self = this;
      setTimeout(function() {
        self.x = 0;
      }, 1000);
    },
    wheelOneSelection: function(value) {
      this.wheels[0] = parseInt(value);
    },
    wheelTwoSelection: function(value) {
      this.wheels[1] = parseInt(value);
    },
    wheelThreeSelection: function(value) {
      this.wheels[2] = parseInt(value);
    }
  },
  watch: {
    x: function(value) {
      if (value > 8 || value < -8 && !this.spinning){
        this.isSpinning = true;
        this.spun = false;
        var self = this;
        setTimeout(function() {
          self.isSpinning = false;
          self.spun = true;
        }, 4100);
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
  width: 800px;
}

#product-container {
  margin: 100px auto;
  max-width: 1000px;
  height: 500px;
}

#spin-btn {
  padding: 20px 0;
  background: none;
  border: none;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  font-size: 20px
}

#spin-btn:focus {
  outline: 0;
}

</style>
