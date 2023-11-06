<template>
  <div class="d-flex justify-content-center text-black mt-5">
    <h3>Task-1</h3>
  </div>

  <div class="d-flex justify-content-center">
    <div class="col-10 category-filter-block">
      <category-card v-for="category in getCategories" :key="category" :category="category" />
    </div>
  </div>
</template>

<script>
import {mapGetters} from "vuex";
import CategoryCard from "@/components/CategoryCard.vue";

export default {
  name: "CategoryPanel",
  components: {CategoryCard},
  computed: {
    ...mapGetters(["getCategories"]),
  }
};
</script>
