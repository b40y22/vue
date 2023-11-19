<template>
  <nav-component />
  <div class="container mt-5">
    <router-view />
  </div>
</template>

<script>
import NavComponent from "@/components/NavComponent.vue";
import { mapActions } from "vuex";

export default {
  name: "InitView",
  components: { NavComponent },
  methods: {
    ...mapActions("weekDays", ["initWeekDays"]),
    ...mapActions("employees", ["initEmployees"]),
    ...mapActions("candidates", ["initCandidates"]),
    ...mapActions("positions", ["initPositions"]),
    ...mapActions("meets", ["initMeets"]),
  },
  created() {
    this.initWeekDays();
    this.initEmployees();
    this.initCandidates();
    this.initPositions();
    this.initMeets();
  },
};
</script>
