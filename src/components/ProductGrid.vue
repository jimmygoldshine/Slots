<template>
  <div class='product-grid'>
    <product-grid-item v-for="(product, index) in filteredProducts" :key="index" :product="product"></product-grid-item>
  </div>
</template>

<script>

import Vue from 'vue'
import ProductGridItem from './ProductGridItem'

export default {
  props: ['wheelSelection', 'products'],

  components: {
    ProductGridItem
  },

  data() {
    return {
      productScores: {},
      filteredProducts: []
    }
  },

  created() {
    for (var i = 0; i < this.products.length; i++) {
      this.productScores[this.products[i].name] = 0
    };
    for (var attribute in this.wheelSelection) {
      this.scoreProducts(attribute, this.wheelSelection[attribute]);
    }
    this.filterProducts();
    this.selectedProduct = this.filteredProducts[0];
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
          this.productScores[product.name] += 1;
        }
      }
    }
  },

  computed: {
    getUrl: function() {
      return this.selectedProduct.img
    }
  }
};

</script>

<style>

.product-grid {
  width: 80%;
  margin: 100px auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
}

</style>
