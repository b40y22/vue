<template>
  <div class="d-flex justify-content-center mt-5">
    <div class="form-container">
      <div class="form-group">
        <label for="company-name">Name</label>
        <input
          type="text"
          class="form-control"
          id="company-name"
          v-model="company.name"
        />
      </div>

      <div class="form-group">
        <label for="company-rate">Rate</label>
        <input
          type="text"
          class="form-control"
          id="company-rate"
          v-model="company.rate"
        />
      </div>

      <div class="form-group">
        <label for="company-year">Year</label>
        <input
          type="text"
          class="form-control"
          id="company-year"
          v-model="company.year"
        />
      </div>

      <div class="form-group">
        <label for="company-owner">Owner</label>
        <input
          type="text"
          class="form-control"
          id="company-owner"
          v-model="company.owner"
        />
      </div>

      <save-button v-if="isCreateUrl" @save-company="saveCompany" />
      <edit-button v-else @edit-company="updateCompany" />
    </div>
  </div>
</template>

<script>
import SaveButton from "@/components/CreateButton.vue";
import EditButton from "@/components/EditButton.vue";
import { mapActions, mapGetters } from "vuex";

export default {
  name: "FormCompany",
  data() {
    return {
      company: {
        name: null,
        rate: null,
        year: null,
      },
    };
  },
  computed: {
    ...mapGetters(["getCompanies"]),
    isCreateUrl() {
      return this.$route.path === "/create";
    },
  },
  components: { EditButton, SaveButton },
  methods: {
    ...mapActions(["setCompanies", "editCompany", "storeCompany"]),
    initCompanies() {
      this.setCompanies();
    },
    saveCompany() {
      this.storeCompany(this.company);
      this.$router.push({ name: "home" });
    },
    updateCompany() {
      this.editCompany(this.company);
      this.$router.push({ name: "home" });
    },
  },
  created() {
    this.initCompanies();

    if (this.$route.name === "edit") {
      this.company = this.getCompanies.filter(
        (company) => company.id === parseInt(this.$route.params.id)
      )[0];
    }
  },
};
</script>
