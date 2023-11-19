<template>
  <div class="add-candidate-title">Додати співбесіду</div>
  <div class="row mt-3 mb-5">
    <!--  Employees  -->
    <div class="col-lg-3">
      <label for="">Працівник</label>
      <select
        class="form-control"
        :class="{ 'bg-danger': errorSelectDayIsBusy }"
        type="button"
        @click="toggleEmployeesList"
        v-model="currentEmployee.id"
      >
        <option
          class="dropdown-item"
          v-for="employee in getEmployees"
          :value="employee.id"
          :key="employee.id"
        >
          {{ employee.name }}
        </option>
      </select>
    </div>

    <!--  Candidate  -->
    <div class="col-lg-3">
      <label for="">Кандідат</label>
      <select
        class="form-control"
        type="button"
        @click="toggleCandidatesList"
        v-model="currentCandidate.id"
      >
        <option
          class="dropdown-item"
          v-for="candidate in getCandidates"
          :value="candidate.id"
          :key="candidate.id"
        >
          {{ candidate.name }}
        </option>
      </select>
    </div>

    <!--  Week days  -->
    <div class="col-lg-2">
      <div class="dropdown">
        <label for="">День тижня</label>
        <select
          class="form-control"
          :class="{ 'bg-danger': errorSelectDayIsBusy }"
          type="button"
          @click="toggleWeekDayList"
          v-model="currentWeekDay.id"
        >
          <option
            class="dropdown-item"
            v-for="day in getWeekDays"
            :value="day.id"
            :key="day.id"
          >
            {{ day.name }}
          </option>
        </select>
      </div>
    </div>
    <div class="col mt-4">
      <button type="button" class="btn btn-primary" @click="addCurrentMeet">
        Додати
      </button>
    </div>
  </div>

  <hr />

  <table class="table table-hover mt-5">
    <thead>
      <tr>
        <th scope="col">№</th>
        <th scope="col">Працівник</th>
        <th scope="col">Кандідат</th>
        <th scope="col">День</th>
        <th scope="col">Дії</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(meet, index) in getMeets" :key="meet.id">
        <th scope="row">{{ index + 1 }}</th>
        <td>{{ meet.employee.name }}</td>
        <td>{{ meet.candidate.name }}</td>
        <td>{{ meet.weekDay.name }}</td>
        <td>
          <button
            class="btn btn-outline-danger"
            @click="deleteCurrentMeet(meet.id)"
          >
            Видалити
          </button>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "MeetsView",
  data() {
    return {
      currentEmployee: {
        id: null,
      },
      currentCandidate: {
        id: null,
      },
      currentWeekDay: {
        id: null,
      },
      errorSelectDayIsBusy: false,
      newMeet: {
        employeeId: null,
        candidateId: null,
        weekDayId: null,
      },
      showCandidates: false,
      showPositions: false,
      showEmployees: false,
      showWeekDays: false,
    };
  },
  computed: {
    ...mapGetters("candidates", ["getCandidates"]),
    ...mapGetters("employees", ["getEmployees"]),
    ...mapGetters("weekDays", ["getWeekDays"]),
    ...mapGetters("meets", ["getMeets"]),
  },
  methods: {
    ...mapActions("meets", ["addMeet", "deleteMeet"]),
    addCurrentMeet() {
      this.validate();
      if (!this.errorSelectDayIsBusy) {
        this.addMeet({
          employeeId: this.currentEmployee.id,
          candidateId: this.currentCandidate.id,
          weekDayId: this.currentWeekDay.id,
        });
      }
    },
    validate() {
      this.errorSelectDayIsBusy = false;
      let result = this.getMeets.find(
        (meet) =>
          meet.weekDay.id === this.currentWeekDay.id &&
          meet.employee.id === this.currentEmployee.id
      );
      if (result) {
        this.errorSelectDayIsBusy = true;
      }
    },
    deleteCurrentMeet(meetId) {
      this.deleteMeet(meetId);
    },
    toggleCandidatesList() {
      this.showCandidates = !this.showCandidates;
    },
    toggleEmployeesList() {
      this.showEmployees = !this.showEmployees;
    },
    toggleWeekDayList() {
      this.showPositions = !this.showPositions;
    },
  },
  watch: {
    currentEmployee: {
      handler() {
        this.validate();
      },
      deep: true,
    },
    currentWeekDay: {
      handler() {
        this.validate();
      },
      deep: true,
    },
  },
};
</script>
