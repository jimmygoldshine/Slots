<template>
  <div v-bind:class="isSpinning" v-bind:id="number">
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

div {
  flex: 1 1 0;
  background-image: url('../assets/pounds.png');
  background-size: 100% auto;
  width: 80%;
  margin: 0 10px;
}

.spinning {
  flex: 1 1 0;
  background-image: url('../assets/pounds.png');
  background-size: 100% auto;
  width: 100%;
  animation-name: spin-1;
  animation-duration: 4s;
  animation-timing-function: ease-out;
  animation-fill-mode: forwards;
}

#wheel-1.static-1 {
  background-image: url('../assets/pounds.png');
  background-position: 0 2330px;
}

#wheel-1.spinning-1 {
  background-image: url('../assets/pounds.png');
  background-size: 100% auto;
  width: 100%;
  animation-name: wheelspin-1;
  animation-duration: 4s;
  animation-timing-function: ease-out;
  animation-fill-mode: forwards;
}

@keyframes wheelspin-1 {
   100% { background-position: 0 2330px; }
}

#wheel-1.static-2 {
  background-image: url('../assets/pounds.png');
  background-position: 0 2422px;
}

#wheel-1.spinning-2 {
  background-image: url('../assets/pounds.png');
  background-size: 100% auto;
  width: 100%;
  animation-name: wheelspin-2;
  animation-duration: 4s;
  animation-timing-function: ease-out;
  animation-fill-mode: forwards;
}

@keyframes wheelspin-2 {
   100% { background-position: 0 2422px; }
}

#wheel-1.static-3 {
  background-image: url('../assets/pounds.png');
  background-position: 0 2514px;
}

#wheel-1.spinning-3 {
  background-image: url('../assets/pounds.png');
  background-size: 100% auto;
  width: 100%;
  animation-name: wheelspin-3;
  animation-duration: 4s;
  animation-timing-function: ease-out;
  animation-fill-mode: forwards;
}

@keyframes wheelspin-3 {
  100% { background-position: 0 2514px; }
}

#wheel-1.static-4 {
  background-image: url('../assets/pounds.png');
  background-position: 0 2606px;
}

#wheel-1.spinning-4 {
  background-image: url('../assets/pounds.png');
  background-size: 100% auto;
  width: 100%;
  animation-name: wheelspin-4;
  animation-duration: 4s;
  animation-timing-function: ease-out;
  animation-fill-mode: forwards;
}

@keyframes wheelspin-4 {
   100% { background-position: 0 2606px; }
}

#wheel-2.static-1 {
  background-image: url('../assets/boats.png');
  background-position: 0 2330px;
}

#wheel-2.spinning-1 {
  background-image: url('../assets/boats.png');
  background-size: 100% auto;
  width: 100%;
  animation-name: wheelspin-1;
  animation-duration: 4s;
  animation-timing-function: ease-out;
  animation-fill-mode: forwards;
}

#wheel-2.static-2 {
  background-image: url('../assets/boats.png');
  background-position: 0 2422px;
}

#wheel-2.spinning-2 {
  background-image: url('../assets/boats.png');
  background-size: 100% auto;
  width: 100%;
  animation-name: wheelspin-2;
  animation-duration: 4s;
  animation-timing-function: ease-out;
  animation-fill-mode: forwards;
}

#wheel-2.static-3 {
  background-image: url('../assets/boats.png');
  background-position: 0 2514px;
}

#wheel-2.spinning-3 {
  background-image: url('../assets/boats.png');
  background-size: 100% auto;
  width: 100%;
  animation-name: wheelspin-3;
  animation-duration: 4s;
  animation-timing-function: ease-out;
  animation-fill-mode: forwards;
}

#wheel-2.static-4 {
  background-image: url('../assets/boats.png');
  background-position: 0 2606px;
}

#wheel-2.spinning-4 {
  background-image: url('../assets/boats.png');
  background-size: 100% auto;
  width: 100%;
  animation-name: wheelspin-4;
  animation-duration: 4s;
  animation-timing-function: ease-out;
  animation-fill-mode: forwards;
}

#wheel-3.static-1 {
  background-image: url('../assets/ages.png');
  background-position: 0 2330px;
}

#wheel-3.spinning-1 {
  background-image: url('../assets/ages.png');
  background-size: 100% auto;
  width: 100%;
  animation-name: wheelspin-1;
  animation-duration: 4s;
  animation-timing-function: ease-out;
  animation-fill-mode: forwards;
}

#wheel-3.static-2 {
  background-image: url('../assets/ages.png');
  background-position: 0 2422px;
}

#wheel-3.spinning-2 {
  background-image: url('../assets/ages.png');
  animation-name: wheelspin-2;
  animation-duration: 4s;
  animation-timing-function: ease-out;
  animation-fill-mode: forwards;
}

#wheel-3.static-3 {
  background-image: url('../assets/ages.png');
  background-position: 0 2514px;
}

#wheel-3.spinning-3 {
  background-image: url('../assets/ages.png');
  animation-name: wheelspin-3;
  animation-duration: 4s;
  animation-timing-function: ease-out;
  animation-fill-mode: forwards;
}

#wheel-3.static-4 {
  background-image: url('../assets/ages.png')
}

#wheel-3.spinning-4 {
  background-image: url('../assets/ages.png');
  animation-name: wheelspin-4;
  animation-duration: 4s;
  animation-timing-function: ease-out;
  animation-fill-mode: forwards;
}

#wheel-3.static-5 {
  background-image: url('../assets/ages.png');
  background-position: 0 2606px;
}

#wheel-3.spinning-5 {
  background-image: url('../assets/ages.png');
  animation-name: wheelspin-5;
  animation-duration: 4s;
  animation-timing-function: ease-out;
  animation-fill-mode: forwards;
}



</style>
