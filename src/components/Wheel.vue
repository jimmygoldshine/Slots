<template>
  <div class="wheel-container">
    <div v-bind:class="isSpinning" v-bind:id="number">
    </div>
    <button id="hold">HOLD</button>
  </div>
</template>

<script>
export default {
  props: ['spinning', 'number', 'tileCount'],

  data () {
    return {
      spin: false,
      selection: "3"
    }
  },

  watch: {
    spinning: function() {
      if(this.spinning) {
        this.selection = this.getRandomTile();
        this.$emit('selection', this.selection)
      }
    }
  },
  methods: {
    getRandomTile: function() {
      var number = Math.floor(Math.random() * parseInt(this.tileCount)) + 1;
      return number.toString();
    }
  },
  computed: {
    isSpinning: function() {
      if(this.spinning) {
        return "spinning-" + this.selection
      } else {
        return "static-" + this.selection
      }
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
  margin: 0 10px;
  height: 100%;
  background-size: 100% auto;
}

#hold {
  margin: 10px 0;
  padding: 10px 20px;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  font-weight: bold;
  font-size: 20px;
  background: rgba(215, 0, 0, 0.67);
  border: 2px solid #8f0303;
}

#hold:hover {
  cursor: pointer;
}

#hold:focus {
  outline: 0
}

#wheel-1.static-1 {
  background-image: url('../assets/pounds.png');
  background-position: 0 2183px;
  background-size: 100% auto;
  height: 100%;
}

#wheel-1.spinning-1 {
  background-image: url('../assets/pounds.png');
  background-size: 100% auto;
  width: 100%;
  height: 100%;
  animation-name: wheelspin-1;
  animation-duration: 4s;
  animation-timing-function: ease-out;
  animation-fill-mode: forwards;
}

@keyframes wheelspin-1 {
   100% { background-position: 0 2183px; }
}

#wheel-1.static-2 {
  background-image: url('../assets/pounds.png');
  background-position: 0 2302px;
  background-size: 100% auto;
  height: 100%;
}

#wheel-1.spinning-2 {
  background-image: url('../assets/pounds.png');
  background-size: 100% auto;
  width: 100%;
  animation-name: wheelspin-2;
  animation-duration: 4s;
  animation-timing-function: ease-out;
  animation-fill-mode: forwards;
  height: 100%;
}

@keyframes wheelspin-2 {
   100% { background-position: 0 2302px; }
}

#wheel-1.static-3 {
  background-image: url('../assets/pounds.png');
  background-position: 0 2410px;
  height: 100%;
  background-size: 100% auto;
}

#wheel-1.spinning-3 {
  background-image: url('../assets/pounds.png');
  background-size: 100% auto;
  height: 100%;
  width: 100%;
  animation-name: wheelspin-3;
  animation-duration: 4s;
  animation-timing-function: ease-out;
  animation-fill-mode: forwards;
}

@keyframes wheelspin-3 {
  100% { background-position: 0 2410px; }
}

#wheel-1.static-4 {
  background-image: url('../assets/pounds.png');
  background-position: 0 2530px;
  background-size: 100% auto;
  height: 100%;
}

#wheel-1.spinning-4 {
  background-image: url('../assets/pounds.png');
  background-size: 100% auto;
  width: 100%;
  height: 100%;
  animation-name: wheelspin-4;
  animation-duration: 4s;
  animation-timing-function: ease-out;
  animation-fill-mode: forwards;
}

@keyframes wheelspin-4 {
   100% { background-position: 0 2530px; }
}

#wheel-2.static-1 {
  background-image: url('../assets/boats.png');
  background-position: 0 2330px;
  background-size: 100% auto;
  height: 100%;
}

#wheel-2.spinning-1 {
  background-image: url('../assets/boats.png');
  background-size: 100% auto;
  width: 100%;
  height: 100%;
  animation-name: wheelspin-1;
  animation-duration: 4s;
  animation-timing-function: ease-out;
  animation-fill-mode: forwards;
}

#wheel-2.static-2 {
  background-image: url('../assets/boats.png');
  background-position: 0 2422px;
  background-size: 100% auto;
  height: 100%;
}

#wheel-2.spinning-2 {
  background-image: url('../assets/boats.png');
  background-size: 100% auto;
  width: 100%;
  height: 100%;
  animation-name: wheelspin-2;
  animation-duration: 4s;
  animation-timing-function: ease-out;
  animation-fill-mode: forwards;
}

#wheel-2.static-3 {
  background-image: url('../assets/boats.png');
  background-position: 0 2302px;
  height: 100%;
  background-size: 100% auto;
}

#wheel-2.spinning-3 {
  background-image: url('../assets/boats.png');
  background-size: 100% auto;
  width: 100%;
  height: 100%;
  animation-name: wheelspin-3;
  animation-duration: 4s;
  animation-timing-function: ease-out;
  animation-fill-mode: forwards;
}

#wheel-2.static-4 {
  background-image: url('../assets/boats.png');
  background-position: 0 2606px;
  background-size: 100% auto;
  height: 100%;
}

#wheel-2.spinning-4 {
  background-image: url('../assets/boats.png');
  background-size: 100% auto;
  width: 100%;
  height: 100%;
  animation-name: wheelspin-4;
  animation-duration: 4s;
  animation-timing-function: ease-out;
  animation-fill-mode: forwards;
}

#wheel-3.static-1 {
  background-image: url('../assets/ages.png');
  background-position: 0 2330px;
  background-size: 100% auto;
  height: 100%;
}

#wheel-3.spinning-1 {
  background-image: url('../assets/ages.png');
  background-size: 100% auto;
  width: 100%;
  height: 100%;
  animation-name: wheelspin-1;
  animation-duration: 4s;
  animation-timing-function: ease-out;
  animation-fill-mode: forwards;
}

#wheel-3.static-2 {
  background-image: url('../assets/ages.png');
  background-position: 0 2422px;
  background-size: 100% auto;
  height: 100%;
}

#wheel-3.spinning-2 {
  background-size: 100% auto;
  height: 100%;
  background-image: url('../assets/ages.png');
  animation-name: wheelspin-2;
  animation-duration: 4s;
  animation-timing-function: ease-out;
  animation-fill-mode: forwards;
}

#wheel-3.static-3 {
  background-image: url('../assets/ages.png');
  background-position: 0 2514px;
  height: 100%;
  background-size: 100% auto;
}

#wheel-3.spinning-3 {
  background-size: 100% auto;
  height: 100%;
  background-image: url('../assets/ages.png');
  animation-name: wheelspin-3;
  animation-duration: 4s;
  animation-timing-function: ease-out;
  animation-fill-mode: forwards;
}

#wheel-3.static-4 {
  background-image: url('../assets/ages.png');
  background-size: 100% auto;
  height: 100%;
}

#wheel-3.spinning-4 {
  background-size: 100% auto;
  height: 100%;
  background-image: url('../assets/ages.png');
  animation-name: wheelspin-4;
  animation-duration: 4s;
  animation-timing-function: ease-out;
  animation-fill-mode: forwards;
}

#wheel-3.static-5 {
  background-image: url('../assets/ages.png');
  background-position: 0 2606px;
  background-size: 100% auto;
  height: 100%;
}

#wheel-3.spinning-5 {
  background-size: 100% auto;
  height: 100%;
  background-image: url('../assets/ages.png');
  animation-name: wheelspin-5;
  animation-duration: 4s;
  animation-timing-function: ease-out;
  animation-fill-mode: forwards;
}

@keyframes wheelspin-5 {
  100% {background-position: 0 3006px};
}


</style>
