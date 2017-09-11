<template>
  <div>
    <h1>{{ msg }}</h1>
    <button id="spin-btn" v-on:click="spin">Shake your phone to spin</button>
    <div id='wheels-container'>
      <wheel v-on:selection="wheelOneSelection" v-bind:spinning="isSpinning" number="1" tile-count="4"></wheel>
      <wheel v-on:selection="wheelTwoSelection" v-bind:spinning="isSpinning" number="2" tile-count="4"></wheel>
      <wheel v-on:selection="wheelThreeSelection" v-bind:spinning="isSpinning" number="3" tile-count="4"></wheel>
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
      msg: 'Welcome to your One-Armed (Product) Bandit',
      x: 0,
      wheels: {
        'price': 3,
        'shipping': 3,
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
      this.wheels.price = parseInt(value);
    },
    wheelTwoSelection: function(value) {
      this.wheels.shipping = parseInt(value);
    },
    wheelThreeSelection: function(value) {
      this.wheels.demographic = parseInt(value);
    },
    getProducts: function() {
      var self = this;
      var url = "https://script.googleusercontent.com/macros/echo?user_content_key=aOWyUdloIYuDJsH4C-4mE1RffQC2WLTQ3SYLWrFV2VKXFe1U2qqJ9tCsha46VcT3FSG6k7_ewwPaawu7zXARjd-FsnTj3TOgOJmA1Yb3SEsKFZqtv3DaNYcMrmhZHmUMWojr9NvTBuBLhyHCd5hHa1ZsYSbt7G4nMhEEDL32U4DxjO7V7yvmJPXJTBuCiTGh3rUPjpYM_V0PJJG7TIaKp8ZXfFMpD9_6aoYsOj5GL7Jm2oCoVpd1eD-lOUeeAVmDvtX2-PjGw-4LtSco2M58hsKiW3k6MDkf31SIMZH6H4k&lib=MbpKbbfePtAVndrs259dhPT7ROjQYJ8yx";
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
        products[i].shippingScore = this.scoreShipping(products[i]);
      }
      return products
    },
    scorePrice: function(product) {
      if (product.price < 20) {
        return [1];
      } else if (product.price < 50) {
        return [2];
      } else if (product.price < 100) {
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
    scoreShipping: function(product) {
      if (typeof(product.shipping) === 'number') {
        return [parseInt(product.shipping)]
      }
      return product.shipping.split(',').map((char) => {
        return parseInt(char)
      })
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
    },
    rawProducts: function(products) {
      for (var i = 0; i < products.length; i++) {
        this.transformedProducts[i].price = this.transformPrice(this.transformedProducts[i]);
        this.transformedProducts[i].demographic = this.transformDemographic(this.transformedProducts[i]);
        this.transformedProducts[i].shipping = this.transformShipping(this.transformedProducts[i]);
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
  width: 900px;
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
