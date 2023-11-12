<template>
    <div class="d-flex justify-content-center text-black mt-5">
        <div class="product-panel">
          <product-card v-for="product in getFilteredProducts" :key="product.id" :product="product"/>
        </div>
    </div>
</template>

<script>
import ProductCard from "@/components/ProductCard.vue";
import { mapGetters } from "vuex";

export default {
  name: "ProductPanel",
  computed: {
    ...mapGetters(["getProducts", "getFilteredProducts"])
  },
  components: { ProductCard },
};
</script>
