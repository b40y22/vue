<template>
    <div class="d-flex justify-content-center text-black mt-5">
        <div class="product-panel">
          <product-card v-for="product in getProducts" :key="product.id" :product="product"/>
        </div>
    </div>
</template>

<script>
import ProductCard from "@/components/ProductCard.vue";
import { mapGetters } from "vuex";

export default {
  name: "ProductPanel",
  computed: {
    ...mapGetters(["getProducts"])
  },
  components: { ProductCard },
};
</script>

<style scoped>
.product-panel {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  width: 1000px;
}
</style>