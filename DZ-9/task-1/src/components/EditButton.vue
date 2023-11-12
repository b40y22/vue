<template>
  <button
    type="submit"
    class="btn btn-primary mt-3"
    @click="$emit('edit-company')"
  >
    Update
  </button>
</template>

<script>
export default {
  name: "EditButton",
};
</script>
