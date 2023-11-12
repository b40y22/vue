<template>
  <div class="category-card" :class="{active:isCategorySelected}" @click="$emit('select-category', category)">
    <div class="category-card-image-block">
      <img :src="category.image" alt="" class="category-card-image">
    </div>
    <div class="category-card-title">
      {{category.name}}
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "CategoryCard",
  computed: {
    ...mapGetters(["getCurrentCategory"]),
    isCategorySelected() {
      if (this.getCurrentCategory) {
        return this.getCurrentCategory.category === this.category.category;
      }
      return false;
    },
  },
  props: {
    category: {
      type: Object,
      required: true
    }
  }
};
</script>
