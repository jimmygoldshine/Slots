<template>
  <div class='product-container'>
    <div class='found'>
      <h2 class='match'>found </h2>
      <span>{{ this.filteredProducts.length }}</span>
    </div>
    <div class='product-grid'>
      <product-grid-item v-for="(product, index) in filteredProducts" :key="index" :product="product"></product-grid-item>
    </div>
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
      this.productScores[this.products[i].id] = 0
    };
    for (var attribute in this.wheelSelection) {
      this.scoreProducts(attribute, this.wheelSelection[attribute]);
    }
    this.filterProducts();
    console.log(this.wheelSelection);
    console.log(this.productScores);
    console.log(this.filteredProducts);
  },

  methods: {
    filterProducts: function() {
      var validProducts = []
      for (var product in this.productScores) {
        if (this.productScores[product] === 3) {
          console.log('here')
          validProducts.push(parseInt(product))
        }
      }
      console.log(validProducts)
      this.filteredProducts = this.products.filter((product) => {
        return validProducts.includes(product.id)
      })
    },
    scoreProducts: function(attribute, value) {
      for (var i = 0; i < this.products.length; i++) {
        var product = this.products[i];
        if (product[attribute + "Score"].includes(value)) {
          console.log('+1 on', attribute)
          this.productScores[product.id] += 1;
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

<style scoped>

.product-container {
  width: 80%;
  margin: 100px auto;
}

.product-grid {
  border-top: 1px solid #eaeaea;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
}

.found {
  text-align: right;
}

.match {
  display: inline-block;
}

</style>
