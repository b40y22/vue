<template>
  <div class="container mt-5">
    <div class="d-flex">
      <div class="col d-flex justify-content-start">
        <h3>Companies list</h3>
      </div>
      <div class="col d-flex justify-content-center">
        <router-link to="/create" class="btn btn-outline-secondary action"
          >Add new company</router-link
        >
      </div>
    </div>
    <table class="table table-hover">
      <thead>
        <tr>
          <th scope="col">№</th>
          <th scope="col">Company name</th>
          <th scope="col">Rate</th>
          <th scope="col">Year</th>
          <th scope="col">Owner</th>
          <th scope="col">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(company, index) in getFilteredCompanies"
          :key="company.id"
          @click="log(company.name)"
        >
          <td>{{ index + 1 }}</td>
          <td>{{ company.name }}</td>
          <td>{{ company.rate }}</td>
          <td>{{ company.year }}</td>
          <td>{{ company.owner }}</td>
          <td>
            <button
              class="btn btn-outline-secondary action"
              @click="removeCurrentCompany(company.id)"
            >
              Delete
            </button>
            <router-link
              :to="{ name: 'edit', params: { id: company.id } }"
              class="btn btn-outline-secondary action"
              >Edit</router-link
            >
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "CompaniesList",
  computed: {
    ...mapGetters(["getCompanies", "getFilteredCompanies"]),
  },
  methods: {
    ...mapActions(["removeCompany"]),
    removeCurrentCompany(id) {
      this.removeCompany(id);
    },
    log(name) {
      console.log(name);
    },
  },
};
</script>
