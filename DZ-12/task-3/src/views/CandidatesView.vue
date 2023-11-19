<template>
  <div class="add-candidate-title">Додати кандідата</div>
  <div class="row mt-3 mb-5">
    <div class="col-lg-4">
      <label for="">Ім'я кандідата</label>
      <input
        type="text"
        class="form-control"
        v-model="newCandidate.name"
        @keydown.enter="addNewCandidate"
      />
    </div>
    <div class="col-lg-2">
      <div class="dropdown">
        <label for="">Позиція</label>
        <select
          class="form-control"
          type="button"
          @click="togglePositionsList"
          v-model="newCandidate.positionId"
          @keydown.enter="addNewCandidate"
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
    </div>
    <div class="col mt-4">
      <button type="button" class="btn btn-primary" @click="addNewCandidate">
        Додати
      </button>
    </div>
  </div>

  <hr />

  <table class="table table-hover mt-5">
    <thead>
      <tr>
        <th scope="col">№</th>
        <th scope="col">Ім'я</th>
        <th scope="col">Позиція</th>
        <th scope="col">Дії</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(candidate, index) in getCandidates" :key="candidate.id">
        <th scope="row">{{ index + 1 }}</th>
        <td>{{ candidate.name }}</td>
        <td>{{ candidate.positionName }}</td>
        <td>
          <button
            class="btn btn-outline-danger"
            @click="deleteCurrentCandidate(candidate.id)"
          >
            Видалити
          </button>
          <router-link
            class="btn btn-outline-primary mx-2"
            :to="{ name: 'candidate-edit', params: { id: candidate.id } }"
          >
            Редагувати
          </router-link>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "CandidatesView",
  data() {
    return {
      newCandidate: {
        name: "",
        positionId: 0,
      },
      showPositions: false,
    };
  },
  computed: {
    ...mapGetters("candidates", ["getCandidates"]),
    ...mapGetters("positions", ["getPosition"]),
  },
  methods: {
    ...mapActions("candidates", [
      "addCandidate",
      "deleteCandidate",
      "editCandidate",
    ]),
    addNewCandidate() {
      this.addCandidate(this.newCandidate);
      this.newCandidate = {
        name: "",
        positionId: 0,
      };
    },
    deleteCurrentCandidate(candidateId) {
      this.deleteCandidate(candidateId);
    },
    togglePositionsList() {
      this.showPositions = !this.showPositions;
    },
  },
};
</script>
