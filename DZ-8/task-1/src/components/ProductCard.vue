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
