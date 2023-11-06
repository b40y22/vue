<template>
  <category-panel/>
  <product-panel/>
</template>

<script>
import CategoryPanel from '@/components/CategoryPanel.vue';
import ProductPanel from "@/components/ProductPanel.vue";

export default {
  name: "ProductManager",
  components: {
      ProductPanel,
    CategoryPanel
  },
  created() {
    this.$store.dispatch("setCategories");
    this.$store.dispatch("setProducts");
  }
};
</script>