<template>
  <div class="product-card">
    <div class="product-card-image-block">
      <img :src="product.image" alt="" class="product-card-image">
    </div>

    <div>
      <div class="product-card-title">
        {{product.name}}
      </div>

      <div v-if="getDiscount(product)" class="product-price red">{{product.price}} ₴</div>
      <div v-else class="product-price"><b>{{product.price}} ₴</b></div>
      <div v-if="getDiscount(product)" class="product-discount gray discount">{{getDiscount(product)}} ₴</div>
    </div>
  </div>
</template>

<script>

export default {
  name: "ProductCard",
  methods: {
    getDiscount(product) {
      return product.discount ?? null;
    }
  },
  props: {
    product: {
      type: Object,
      required: true,
    }
  }
};
</script>

<style scoped>
  .product-price {
    margin-left: 10px;
  }
  .product-discount {
    margin-left: 10px;
  }
  .red {
    font-size: 14px;
    color: #b21c1c;
  }
  .gray {
    color: #696969;
  }
  .discount {
    text-decoration: line-through;
  }
  .product-card {
    display: flex;
    flex-direction: row;
    background-color: #ffffff;
    margin: 20px;
    height: 100px;
  }
  .product-card-image-block {
    background-color: #e5e5e5;
    display: flex;
    justify-content: center;
    padding: 10px;
    width: 160px;
  }

  .product-card-image {
    max-height: 150px;
    max-width: 140px;
  }

  .product-card-title {
    color: #2a2a2a;
    padding: 10px;
  }
</style>