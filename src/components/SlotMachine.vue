<template>
  <div>
    <h1>{{ msg }}</h1>
    <button id="spin-btn" v-on:click="spin">SPIN</button>
    <div id='wheels-container'>
      <wheel v-on:selection="wheelOneSelection" v-bind:spinning="isSpinning" number="1" title="Price"></wheel>
      <wheel v-on:selection="wheelTwoSelection" v-bind:spinning="isSpinning" number="2" title="Category"></wheel>
      <wheel v-on:selection="wheelThreeSelection" v-bind:spinning="isSpinning" number="3" title="Recipient"></wheel>
    </div>
    <div id='wheel-feedback' v-if="spun">
      <span id="header">Spin Result</span>
      <span>Price: {{ this.convert("price") }}</span>
      <span>Catgegory: {{ this.convert("type") }}</span>
      <span>Recipient: {{ this.convert("demographic") }}</span>
    </div>
    <product-grid v-if="spun" :products="products" :wheelSelection="wheels"></product-grid>
    </div>
  </div>
</template>

<script>

import Wheel from './Wheel'
import Product from './Product'
import ProductGrid from './ProductGrid'
import ProductGridItem from './ProductGridItem'
import axios from 'axios'
import VueAxios from 'vue-axios'

export default {
  components: {
    Wheel, ProductGrid, ProductGridItem
  },

  data() {
    return {
      msg: 'Gift Finder',
      x: 0,
      wheels: {
        'price': 3,
        'type': 3,
        'demographic': 3
      },
      isSpinning: false,
      spun: false,
      products: []
    }
  },
  mounted() {
    window.addEventListener('devicemotion', this.onDeviceMotion);
    this.getProducts();
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
      this.wheels.price = parseFloat(value);
    },
    wheelTwoSelection: function(value) {
      this.wheels.type = parseInt(value);
    },
    wheelThreeSelection: function(value) {
      this.wheels.demographic = parseInt(value);
    },
    getProducts: function() {
      var self = this;
      var url = "https://script.googleusercontent.com/macros/echo?user_content_key=P_2j6Ku73bUrvD9Zgc6h7h8_REqq70RTAv4HurDArVjec-cIQXAIbRyNHvrffNZNBnqz5bKdHyneOel_blfge93xQ46pH--6OJmA1Yb3SEsKFZqtv3DaNYcMrmhZHmUMWojr9NvTBuBLhyHCd5hHa1ZsYSbt7G4nMhEEDL32U4DxjO7V7yvmJPXJTBuCiTGh3rUPjpYM_V0PJJG7TIaKp__EhJe2pGrpKVDjpB_m67cuKMYZgD5z8rjZefWH2R9kJSfvdMsAqQh98o8SgsUAoMKiW3k6MDkf31SIMZH6H4k&lib=MbpKbbfePtAVndrs259dhPT7ROjQYJ8yx";
      axios.get(url)
        .then((response) => {
          var products = response.data.Sheet1;
          self.products = self.scoreAttributes(products)
      });
    },
    scoreAttributes: function(products) {
      for (var i = 0; i < products.length; i++) {
        products[i].priceScore = this.scorePrice(products[i]);
        products[i].demographicScore = this.scoreDemographic(products[i]);
        products[i].typeScore = this.scoreType(products[i]);
      }
      return products
    },
    scorePrice: function(product) {
      if (product.price < 15) {
        return [1];
      } else if (product.price < 30) {
        return [2];
      } else if (product.price < 50) {
        return [3];
      } else {
        return [4];
      }
    },
    scoreDemographic: function(product) {
      if (typeof(product.demographic) === 'number') {
        return [parseInt(product.demographic)]
      }
      return product.demographic.split(',').map((char) => {
        return parseInt(char)
      })
    },
    scoreType: function(product) {
      if (typeof(product.type) === 'number') {
        return [parseInt(product.type)]
      }
      return product.type.split(',').map((char) => {
        return parseInt(char)
      })
    },
    convert: function(wheel) {
      var conversionObject = {"price": {1: "£0 - £15", 2: "£15 - £30", 3: "£30 - £50", 4: "£50+"},
                              "type": {1: "Clothing", 2: "Fun & Games", 3: "Accessories", 4: "Health & Beauty"},
                              "demographic": {1: "Her", 2: "Him", 3: "Kids", 4: "Babies"}}
      return conversionObject[wheel][this.wheels[wheel]]
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
  }
};

</script>

<style scoped>

#wheels-container {
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  height: 300px;
  width: 900px;
}

#spin-btn {
  padding: 20px 0;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  font-size: 20px;
  margin: 10px 0 40px 0px;
  padding: 10px 20px;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  font-weight: bold;
  font-size: 20px;
  filter: brightness(120%);
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

#spin-btn:active {
  filter: brightness(75%);
}

#spin-btn:hover {
  cursor: pointer;
}

#spin-btn:focus {
  outline: 0;
}

#wheel-feedback {
  position: relative;
  top: 80px;
  font-size: 1.2rem;
  border: 1px solid gray;
  border-radius: 2px;
  width: fit-content;
  margin: 0 auto;
  padding: 5px 50px;
}

#header {
  line-height: 2rem;
  text-decoration: underline;
  font-weight: bold;
}

span {
  display: block;
}

</style>
