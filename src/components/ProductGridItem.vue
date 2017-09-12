<template>
  <div class='product'>
    <div class='image'>
      <img :src="getUrl">
    </div>
    <div class="product-info">
      <span id="name">{{ this.product.name }}</span>
      <span id="tagline">{{ this.product.tagline }}</span>
      <span id='price'>£{{ Number(this.product.price).toFixed(2) }}</span>
    </div>
  </div>
</template>

<script>

import Vue from 'vue'

export default {
  props: ['product'],


  computed: {
    getUrl: function() {
      return this.product.img
    }
  }
};

</script>

<style scoped>

.product {
  width: calc(23%);
  margin: 1%;
}

.img {
  width: 100%
}

img {
  width: 100%
}

.product-info {
  text-align: center;
}

span {
  display: block;
}

#name, #price {
  text-transform: uppercase;
  font-weight: bold;
}


</style>
