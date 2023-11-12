<template>
  <div class="home">
    <filter-component />

    <hr class="separate" />

    <companies-list />
  </div>
</template>

<script>
// @ is an alias to /src
import FilterComponent from "@/components/FilterComponent.vue";
import CompaniesList from "@/components/CompaniesList.vue";
import { mapActions } from "vuex";

export default {
  name: "HomeView",
  components: { CompaniesList, FilterComponent },
  methods: {
    ...mapActions(["setCompanies"]),
    initCompanies() {
      this.setCompanies();
    },
  },
  created() {
    this.initCompanies();
  },
};
</script>
