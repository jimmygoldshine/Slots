<template>
  <div class='product'>
    <h2 class='match'>You've matched {{ this.filteredProducts.length }} products</h2>
    <v-touch @swipeleft="nextProduct" @swiperight="previousProduct">
      <div class='arrow' id='left'>
        <img v-on:click="previousProduct" v-bind:class="position" src='../assets/left-arrow.png'>
      </div>
      <div id="inner-product" v-bind:class='swipeStatus'>
      <div class='image'>
        <img :src="getUrl">
      </div>
      <div class='intro'>
        <h1 class='name'>{{ selectedProduct.name }}</h1>
        <span class='tagline'>{{ selectedProduct.tagline }}</span>
        <span class='availability'>{{ selectedProduct.availability }}</span>
        <span class='price'>£{{ selectedProduct.price }}</span>
        <button class='add-to-basket'>Add To Basket</button>
      </div>
      </div>
      <div class='arrow' id='right'>
        <img v-on:click="nextProduct" v-bind:class="position" src='../assets/right-arrow.png'>
      </div>
    </v-touch>
  </div>
</template>

<script>

import Vue from 'vue'
import VueTouch from 'vue-touch';
Vue.use(VueTouch)

export default {
  props: ['wheelSelection', 'products'],

  data() {
    return {
      productScores: {},
      filteredProducts: [],
      selectedProduct: null,
      arrowBounce: false,
      swipe: false
    }
  },

  created() {
    for (var i = 0; i < this.products.length; i++) {
      this.productScores[this.products[i].name] = 0
    };
    console.log('wheelS', this.wheelSelection);
    for (var attribute in this.wheelSelection) {
      this.scoreProducts(attribute, this.wheelSelection[attribute]);
    }
    this.filterProducts();
    this.selectedProduct = this.filteredProducts[0];
  },

  mounted() {
    this.bounce();
  },

  methods: {
    filterProducts: function() {
      var validProducts = []
      for (var product in this.productScores) {
        if (this.productScores[product] === 3) {
          validProducts.push(product)
        }
      }
      this.filteredProducts = this.products.filter((product) => {
        return validProducts.includes(product.name)
      })
    },
    scoreProducts: function(attribute, value) {
      for (var i = 0; i < this.products.length; i++) {
        var product = this.products[i];
        if (product[attribute + "Score"].includes(value)) {
          console.log('+1 for', product.name, ' on ', attribute);
          this.productScores[product.name] += 1;
        }
      }
    },
    nextProduct: function() {
      this.swipe = !this.swipe
      var currentIndex = this.filteredProducts.indexOf(this.selectedProduct);
      if (currentIndex === this.filteredProducts.length - 1) {
        this.selectedProduct = this.filteredProducts[0];
      } else {
        this.selectedProduct = this.filteredProducts[currentIndex + 1];
      }
      setTimeout(() => {
        this.swipe = !this.swipe
      }, 1000)
    },
    previousProduct: function() {
      this.swipe = !this.swipe
      var currentIndex = this.filteredProducts.indexOf(this.selectedProduct);
      if (currentIndex === 0) {
        this.selectedProduct = this.filteredProducts[this.filteredProducts.length-1];
      } else {
        this.selectedProduct = this.filteredProducts[currentIndex - 1]
      }
      setTimeout(() => {
        this.swipe = !this.swipe
      }, 1000)
    },
    bounce: function() {
      var self = this;
      this.interval = setInterval(function() {
        self.arrowBounce = !self.arrowBounce
      }, 500)
    }
  },

  computed: {
    getUrl: function() {
      return this.selectedProduct.img
    },
    position: function() {
      var status = this.arrowBounce ? "apex" : "floor";
      return status
    },
    swipeStatus: function() {
      var status = this.swipe ? "swipe" : "still";
      return status
    }
  }
};

</script>

<style>

.product > div {
  display: flex;
  flex-direction: row;
  width: 100%;
  align-items: center;
}

#inner-product {
  padding: 5px;
  border: 1px solid grey;
  display: flex;
  flex-direction: row;
  width: 90%;
  align-items: center;
  -webkit-box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.75);
  -moz-box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.75);
  box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.75);
}


#inner-product.swipe {
  transform: rotateY(360deg);
  transition: 1s;
	transform-style: preserve-3d;
}

.image, .intro {
  width: 50%;
  height: 100%;
}

.intro {
  display: flex;
  flex-direction: column;
  flex: 1 1 0;
  align-self: flex-start;
  padding: 20px 20px 0;
  text-align: left;
}

.name {
  text-transform: uppercase;
  font-weight: 900;
  margin: 0 0 5px;
}

.tagline {
  font-size: 18px;
  font-weight: 500;
  padding-bottom: 20px;
}

.availability {
  color: #00a876;
  font-weight: 700;
  font-size: 18px;
  text-transform: capitalize;
  padding-bottom: 20px;
}

.price {
  font-weight: 900;
  font-size: 32px;
  padding-bottom: 20px;
}

.add-to-basket {
  width: 250px;
  font-size: 24px;
  font-weight: 700;
  background: #343434;
  padding: 9px 19px;
  color: #fff;
  text-transform: uppercase;
  border-radius: 2px;
  border: none;
  text-align: center;
}

.image > img {
  width: 100%
}

.arrow {
  position: relative;
  top: 50%;
  width: 105px;
  height: 100px;
  cursor: pointer;
}

.arrow > img {
  width: 100%;
  height: 100%;
  transition: all 0.5s linear;
}

#left.arrow > img.apex {
  text-align:right;
  transform: translate(-10px, 0px);
  transition: all 0.5s linear;
}

#right.arrow > img.apex {
  transform: translate(10px, 0px);
  transition: all 0.5s linear;
}

</style>
