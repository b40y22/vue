<template>
  <div class="add-candidate-title">Редагування працівника</div>
  <div class="row mt-3 mb-5">
    <div class="col-lg-4">
      <div class="form-group">
        <label for="name">Ім'я</label>
        <input
          type="email"
          class="form-control"
          id="name"
          v-model="employee.name"
        />
      </div>

      <div class="form-group mt-3">
        <select
          class="form-control"
          type="button"
          v-model="employee.positionId"
        >
          <option
            class="dropdown-item"
            v-for="position in getPosition"
            :value="position.id"
            :key="position.id"
          >
            {{ position.name }}
          </option>
        </select>
      </div>

      <button
        type="submit"
        class="btn btn-primary mt-3"
        @click="updateCandidate"
      >
        Оновити
      </button>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "CandidateEdit",
  data() {
    return {
      employee: {},
    };
  },
  computed: {
    ...mapGetters("employees", ["getEmployee"]),
    ...mapGetters("positions", ["getPosition"]),
  },
  methods: {
    ...mapActions("employees", ["editEmployee"]),
    updateCandidate() {
      this.editEmployee(this.employee);
      this.$router.push({ name: "employees" });
    },
  },
  created() {
    this.employee = this.getEmployee(parseInt(this.$route.params.id));
  },
};
</script>
