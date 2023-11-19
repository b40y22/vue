<template>
  <div class="add-candidate-title">Додати працівника</div>
  <div class="row mt-3 mb-5">
    <div class="col-lg-4">
      <label for="">Ім'я працівника</label>
      <input
        type="text"
        class="form-control"
        v-model="newEmployee.name"
        @keydown.enter="addNewEmployee"
      />
    </div>
    <div class="col-lg-2">
      <div class="dropdown">
        <label for="">Позиція</label>
        <select
          class="form-control"
          type="button"
          @click="togglePositionsList"
          v-model="newEmployee.positionId"
          @keydown.enter="addNewEmployee"
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
      <button type="button" class="btn btn-primary" @click="addNewEmployee">
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
      <tr v-for="(employee, index) in getEmployees" :key="employee.id">
        <th scope="row">{{ index + 1 }}</th>
        <td>{{ employee.name }}</td>
        <td>{{ employee.positionName }}</td>
        <td>
          <button
            class="btn btn-outline-danger"
            @click="deleteCurrentEmployee(employee.id)"
          >
            Видалити
          </button>
          <router-link
            class="btn btn-outline-primary mx-2"
            :to="{ name: 'employee-edit', params: { id: employee.id } }"
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
  name: "EmployeesView",
  data() {
    return {
      newEmployee: {
        name: "",
        positionId: 0,
      },
      showPositions: false,
    };
  },
  computed: {
    ...mapGetters("employees", ["getEmployees"]),
    ...mapGetters("positions", ["getPosition"]),
  },
  methods: {
    ...mapActions("employees", ["deleteEmployee", "addEmployee"]),
    addNewEmployee() {
      this.addEmployee(this.newEmployee);
      this.newEmployee = {
        name: "",
        positionId: 0,
      };
    },
    deleteCurrentEmployee(employeeId) {
      this.deleteEmployee(employeeId);
    },
    togglePositionsList() {
      this.showPositions = !this.showPositions;
    },
  },
};
</script>
