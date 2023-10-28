<template>
    <student-list-panel/>
</template>

<script>

import StudentListPanel from "@/components/StudentListPanel.vue";

export default {
  name: "App",
  components: {
      StudentListPanel
  },
};
</script>

<style lang="scss">
    @import "assets/index.scss";
</style>
