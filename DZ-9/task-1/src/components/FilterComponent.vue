<template>
  <div class="container mt-5">
    <div class="d-flex justify-content-start"><h3>Filters</h3></div>
    <div class="row mt-2">
      <div class="col">
        <div class="form-group">
          <label for="title">Title</label>
          <input
            type="text"
            class="form-control"
            id="title"
            v-model="filterObject.name"
          />
        </div>
      </div>
      <div class="col">
        <div class="form-group">
          <label for="rate">Rate</label>
          <input
            type="text"
            class="form-control"
            id="rate"
            v-model="filterObject.rate"
          />
        </div>
      </div>
      <div class="col">
        <div class="form-group">
          <label for="year">Year</label>
          <input
            type="text"
            class="form-control"
            id="year"
            v-model="filterObject.year"
          />
        </div>
      </div>
      <div class="col">
        <div class="form-group">
          <label for="owner">Owner</label>
          <input
            type="text"
            class="form-control"
            id="owner"
            v-model="filterObject.owner"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "FilterComponent",
  data() {
    return {
      filterObject: {
        name: null,
        rate: null,
        year: null,
        owner: null,
      },
    };
  },
  methods: {
    ...mapActions(["setFilters"]),
  },
  watch: {
    filterObject: {
      handler() {
        this.setFilters(this.filterObject);
      },
      deep: true,
    },
  },
};
</script>
