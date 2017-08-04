<template>
  <div class='product'>
    <div class='arrow' id='left'>
      <span>Previous</span>
    </div>
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
    <div class='arrow' id='right'>
      <span>Next</span>
    </div>
  </div>
</template>

<script>

export default {
  props: ['wheelSelection', 'products'],

  data() {
    return {
      filteredProducts: [],
      selectedProduct: null
    }
  },

  created() {
    for (var attribute in this.wheelSelection) {
      this.filterProducts(attribute, this.wheelSelection[attribute])
    }
    var name = this.filteredProducts[0].name
    this.selectedProduct = this.selectProduct(name);
  },

  methods: {
    filterProducts: function(attribute, value) {
      var products = this.products.filter((product) => {
        if (product[attribute + "Score"].includes(value)) {
          return product
        }
      })
      this.filteredProducts = this.filteredProducts.concat(products);
    },
    selectProduct: function(name) {
      return this.products.find((product) => {
        return product.name === name
      })
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

.product {
  display: flex;
  flex-direction: row;
  width: 100%;
}

.image, .intro {
  width: 50%;
  height: 100%;
}

.intro {
  display: flex;
  flex-direction: column;
  flex: 1 1 0;
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

</style>
