<template>
  <div class="add-candidate-title">Редагування кандідата</div>
  <div class="row mt-3 mb-5">
    <div class="col-lg-4">
      <div class="form-group">
        <label for="name">Ім'я</label>
        <input
          type="email"
          class="form-control"
          id="name"
          v-model="candidate.name"
        />
      </div>

      <div class="form-group mt-3">
        <select
          class="form-control"
          type="button"
          v-model="candidate.positionId"
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
      candidate: {},
    };
  },
  computed: {
    ...mapGetters("candidates", ["getCandidate"]),
    ...mapGetters("positions", ["getPosition"]),
  },
  methods: {
    ...mapActions("candidates", ["editCandidate"]),
    updateCandidate() {
      this.editCandidate(this.candidate);
      this.$router.push({ name: "candidates" });
    },
  },
  created() {
    this.candidate = this.getCandidate(parseInt(this.$route.params.id));
  },
};
</script>
