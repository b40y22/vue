import { employeesList } from "@/data";

export default {
  namespaced: true,
  state: {
    employees: [],
  },
  getters: {
    getEmployee: (state) => (employeeId) => {
      return state.employees.find((employee) => employee.id === employeeId);
    },
    getEmployees: (state, getters, rootState, rootGetters) =>
      state.employees.map((employee) => ({
        ...employee,
        positionName: rootGetters["positions/getPositionById"](
          employee.positionId
        ).name,
      })),
  },
  mutations: {
    init(state, employeesList) {
      state.employees = employeesList;
    },
    editEmployee(state, employee) {
      state.employees = state.employees.filter(
        (item) => item.id !== employee.id
      );
      state.employees.push(employee);
    },
    deleteEmployee(state, employeeId) {
      state.employees = state.employees.filter(
        (employee) => employee.id !== employeeId
      );
    },
    addEmployee(state, employee) {
      state.employees.push({
        id: new Date().getTime(),
        ...employee,
      });
    },
  },
  actions: {
    initEmployees({ commit }) {
      commit("init", employeesList);
    },
    deleteEmployee({ commit }, employeeId) {
      commit("deleteEmployee", employeeId);
    },
    editEmployee({ commit }, employee) {
      commit("editEmployee", employee);
    },
    addEmployee({ commit }, employee) {
      commit("addEmployee", employee);
    },
  },
  modules: {},
};
