<template>
    <div class="d-flex justify-content-center text-black mt-3">
        <h3>Task-2</h3>
    </div>
    <div class="product-panel mt-5">
        <product-card v-for="productItem in productData" :key="productItem.id" :product-item="productItem"/>
    </div>
</template>

<script>
import ProductCard from "@/components/ProductCard.vue";

export default {
  name: "ProductPanel",
  components: {ProductCard},
  props: {
    productData: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>
.product-panel {
    background-color: #1f1f1f;
    display: flex;
    flex-direction: row;
    justify-content: center;
}
</style>