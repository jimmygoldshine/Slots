<template>
  <div id='product'>
    <img :src="getPic">
  </div>
</template>

<script>

export default {
  props: ['wheelSelection'],

  data() {
    return {
      products: [require("../assets/product1.png"), require("../assets/product2.png"), require("../assets/product3.png")],
      selectedProduct: null
    }
  },

  mounted() {
    console.log(this.wheelSelection);
    if(this.wheelSelection[0] < 2) {
      this.selectedProduct = this.products[0]
    } else if (this.wheelSelection[0] > 3) {
      this.selectedProduct = this.products[2]
    } else {
      this.selectedProduct = this.products[1]
    }
  },

  computed: {
    getPic: function() {
      return this.selectedProduct
    }
  }
};

</script>

<style>

#product > img {
  width: 100%
}

</style>
