<template>
  <product-manager/>
</template>

<script>
import ProductManager from "./components/ProductManager.vue";

export default {
  name: "App",
  components: {
    ProductManager
  }
};
</script>

<style scoped>
@import "assets/styles/index.scss";
</style>