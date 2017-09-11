<template>
  <div class="wheel-container">
    <div v-bind:class="isSpinning" v-bind:id="wheel">
    </div>
    <button id="hold" v-bind:class="light" v-on:click="hold">HOLD</button>
  </div>
</template>

<script>
export default {
  props: ['spinning', 'number', 'tileCount'],

  data() {
    return {
      selection: "3",
      held: false,
      lit: false
    }
  },

  mounted() {
    this.sequentialLighting()
  },

  watch: {
    spinning: function() {
      if(this.spinning && !this.held) {
        this.selection = this.getRandomTile();
        this.$emit('selection', this.selection)
        clearInterval(this.interval);
        this.sequentialLighting(3);
      }
      var self = this;
      if(!this.spinning) {
        clearInterval(this.interval);
        this.blockLighting()
      }
    }
  },

  methods: {
    getRandomTile: function() {
      var number = Math.floor(Math.random() * parseInt(this.tileCount)) + 1;
      return number.toString();
    },
    hold: function() {
      if (!this.spinning) {
        this.held = !(this.held)
      }
    },
    sequentialLighting: function(speed=1) {
      var self = this;
      setTimeout(function() {
        self.lit = true
        self.interval = setInterval(function() {
          self.lit = true;
          setTimeout(function() {
            self.lit = false
          }, (333/speed))
        }, (1000/speed))
      }, ((self.number-1)/3)*1000/speed)
    },
    blockLighting: function() {
      var self = this;
      this.interval = setInterval(function() {
        self.lit = !self.lit
      }, 500)
    }
  },

  computed: {
    isSpinning: function() {
      if(this.spinning && !this.held) {
        return "spinning-" + this.selection
      } else {
        return "static-" + this.selection
      }
    },
    wheel: function() {
      return "wheel-" + this.number.toString();
    },
    light: function() {
      var status = this.lit ? "light" : "dark";
      if (this.held) {
        status = "light"
      }
      return status
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
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

.wheel-container {
  flex: 1 1 0;
  background-size: 100% auto;
  border: -1px solid black;
  margin: 0 10px;
  height: 100%;
  background-size: 100% auto;
  box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.75);
}

#hold {
  margin: 10px 0;
  padding: 10px 20px;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  font-weight: bold;
  font-size: 20px;
  filter: brightness(75%);
  background: #d93434;
  background-image: -webkit-linear-gradient(top, #d93434, #9e2525);
  background-image: -moz-linear-gradient(top, #d93434, #9e2525);
  background-image: -ms-linear-gradient(top, #d93434, #9e2525);
  background-image: -o-linear-gradient(top, #d93434, #9e2525);
  background-image: linear-gradient(to bottom, #d93434, #9e2525);
  -webkit-border-radius: 3;
  -moz-border-radius: 3;
  border-radius: 3px;
  -webkit-box-shadow: 0px 2px 3px #666666;
  -moz-box-shadow: 0px 2px 3px #666666;
  box-shadow: 0px 2px 3px #666666;
  color: #000000;
  border: solid #8f1d1d 2px;
}

#hold:hover {
  cursor: pointer;
  filter: brightness(120%)
}

#hold:active {
  box-shadow: 0 0 1px 0 black inset;
}

#hold:focus {
  outline: 0
}

#wheel-1 + #hold.light,
#wheel-2 + #hold.light,
#wheel-3 + #hold.light {
  filter: brightness(120%)
}

#wheel-1.static-1 {
  background-image: url('../assets/pounds.png');
  background-position: 0 2440px;
  background-size: 100% auto;
  height: 100%;
}

#wheel-1.spinning-1 {
  background-image: url('../assets/pounds.png');
  background-size: 100% auto;
  width: 100%;
  height: 100%;
  animation-name: wheel-1-spin-1;
  animation-duration: 4s;
  animation-timing-function: ease-out;
  animation-fill-mode: forwards;
}

@keyframes wheel-1-spin-1 {
  100% { background-position: 0 2440px; }
}

#wheel-1.static-2 {
  background-image: url('../assets/pounds.png');
  background-position: 0 2572px;
  background-size: 100% auto;
  height: 100%;
}

#wheel-1.spinning-2 {
  background-image: url('../assets/pounds.png');
  background-size: 100% auto;
  width: 100%;
  animation-name: wheel-1-spin-2;
  animation-duration: 4s;
  animation-timing-function: ease-out;
  animation-fill-mode: forwards;
  height: 100%;
}

@keyframes wheel-1-spin-2 {
   100% { background-position: 0 2572px; }
}

#wheel-1.static-3 {
  background-image: url('../assets/pounds.png');
  background-position: 0 2710px;
  height: 100%;
  background-size: 100% auto;
}

#wheel-1.spinning-3 {
  background-image: url('../assets/pounds.png');
  background-size: 100% auto;
  height: 100%;
  width: 100%;
  animation-name: wheel-1-spin-3;
  animation-duration: 4s;
  animation-timing-function: ease-out;
  animation-fill-mode: forwards;
}

@keyframes wheel-1-spin-3 {
  100% { background-position: 0 2710px; }
}

#wheel-1.static-4 {
  background-image: url('../assets/pounds.png');
  background-position: 0 2860px;
  background-size: 100% auto;
  height: 100%;
}

#wheel-1.spinning-4 {
  background-image: url('../assets/pounds.png');
  background-size: 100% auto;
  width: 100%;
  height: 100%;
  animation-name: wheel-1-spin-4;
  animation-duration: 4s;
  animation-timing-function: ease-out;
  animation-fill-mode: forwards;
}

@keyframes wheel-1-spin-4 {
   100% { background-position: 0 2860px; }
}

#wheel-2.static-1 {
  background-image: url('../assets/boats.png');
  background-position: 0 2440px;
  background-size: 100% auto;
  height: 100%;
}

#wheel-2.spinning-1 {
  background-image: url('../assets/boats.png');
  background-size: 100% auto;
  width: 100%;
  height: 100%;
  animation-name: wheel-1-spin-1;
  animation-duration: 3.8s;
  animation-timing-function: ease-out;
  animation-fill-mode: forwards;
}

@keyframes wheel-2-spin-1 {
  100% { background-position: 0 3415px; }
}

#wheel-2.static-2 {
  background-image: url('../assets/type.png');
  background-position: 0 2572px;
  background-size: 100% auto;
  height: 100%;
}

#wheel-2.spinning-2 {
  background-image: url('../assets/type.png');
  background-size: 100% auto;
  width: 100%;
  height: 100%;
  animation-name: wheel-1-spin-2;
  animation-duration: 3.8s;
  animation-timing-function: ease-out;
  animation-fill-mode: forwards;
}

#wheel-2.static-3 {
  background-image: url('../assets/type.png');
  background-position: 0 2710px;
  height: 100%;
  background-size: 100% auto;
}

#wheel-2.spinning-3 {
  background-image: url('../assets/type.png');
  background-size: 100% auto;
  width: 100%;
  height: 100%;
  animation-name: wheel-1-spin-3;
  animation-duration: 3.8s;
  animation-timing-function: ease-out;
  animation-fill-mode: forwards;
}

@keyframes wheel-2-spin-3 {
  100% { background-position: 0 3665px; }
}

#wheel-2.static-4 {
  background-image: url('../assets/type.png');
  background-position: 0 2860px;
  background-size: 100% auto;
  height: 100%;
}

#wheel-2.spinning-4 {
  background-image: url('../assets/type.png');
  background-size: 100% auto;
  width: 100%;
  height: 100%;
  animation-name: wheel-1-spin-4;
  animation-duration: 3.8s;
  animation-timing-function: ease-out;
  animation-fill-mode: forwards;
}

@keyframes wheel-2-spin-4 {
  100% { background-position: 0 3680px; }
}

#wheel-3.static-1 {
  background-image: url('../assets/demos.png');
  background-position: 0 2440px;
  background-size: 100% auto;
  height: 100%;
}

#wheel-3.spinning-1 {
  background-image: url('../assets/demos.png');
  background-size: 100% auto;
  width: 100%;
  height: 100%;
  animation-name: wheel-1-spin-1;
  animation-duration: 3.5s;
  animation-timing-function: ease-out;
  animation-fill-mode: forwards;
}

#wheel-3.static-2 {
  background-image: url('../assets/demos.png');
  background-position: 0 2572px;
  background-size: 100% auto;
  height: 100%;
}

#wheel-3.spinning-2 {
  background-size: 100% auto;
  height: 100%;
  background-image: url('../assets/demos.png');
  animation-name: wheel-1-spin-2;
  animation-duration: 3.5s;
  animation-timing-function: ease-out;
  animation-fill-mode: forwards;
}

#wheel-3.static-3 {
  background-image: url('../assets/demos.png');
  background-position: 0 2710px;
  height: 100%;
  background-size: 100% auto;
}

#wheel-3.spinning-3 {
  background-size: 100% auto;
  height: 100%;
  background-image: url('../assets/demos.png');
  animation-name: wheel-1-spin-3;
  animation-duration: 3.5s;
  animation-timing-function: ease-out;
  animation-fill-mode: forwards;
}

#wheel-3.static-4 {
  background-image: url('../assets/demos.png');
  background-position: 0 2860px;
  background-size: 100% auto;
  height: 100%;
}

#wheel-3.spinning-4 {
  background-size: 100% auto;
  height: 100%;
  background-image: url('../assets/demos.png');
  animation-name: wheel-1-spin-4;
  animation-duration: 3.5s;
  animation-timing-function: ease-out;
  animation-fill-mode: forwards;
}


</style>
