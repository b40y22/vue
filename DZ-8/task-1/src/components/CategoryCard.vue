<template>
  <div class="category-card ">
    <div class="category-card-image-block">
      <img :src="category.image" alt="" class="category-card-image">
    </div>
    <div class="category-card-title">
      {{category.name}}
    </div>
  </div>
</template>

<script>
export default {
  name: "CategoryCard",
  props: {
    category: {
      type: Object,
      required: true
    }
  }
};
</script>

<style scoped>
  .active {
    border: 3px solid #fa8282;
  }
</style>
