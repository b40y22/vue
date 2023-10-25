<template>
  <div class="card-box">
    <div class="product-image-box">
      <img :src="productItem.imgSrc" class="product-image" alt="">
    </div>

    <div class="d-flex product-desc">
      <div>
        <img :src="productItem.logo" alt="">
      </div>

      <div class="product-desc-title">
        {{productItem.companyTitle}}
      </div>
    </div>

    <div class="d-flex text-white">
      {{productItem.description}}
    </div>

  </div>
</template>

<script>
export default {
  name: "ProductCard",
  props: {
    productItem: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>
  .card-box {
    display: flex;
      //background-color: #eeeeee;
    flex-direction: column;
    margin: 10px;
  }

  .product-image {
      border-radius: 10px;
      width: 200px;
  }

  .product-image-box {
      border-radius: 10px;
      height: 200px;
      background-color: #ffffff;
  }

  .product-desc {
      color: #eeeeee;
  }

  .product-desc-title {
      padding-left: 10px;
  }
</style>