<template>
  <button
    type="submit"
    class="btn btn-primary mt-3"
    @click="$emit('save-company')"
  >
    Save
  </button>
</template>

<script>
export default {
  name: "SaveButton",
};
</script>
