import { meetsList } from "@/data";

export default {
  namespaced: true,
  state: {
    meets: [],
  },
  getters: {
    getMeets: (state, getters, rootState, rootGetters) =>
      state.meets.map((meet) => ({
        id: meet.id,
        candidate: rootGetters["candidates/getCandidate"](meet.candidateId),
        employee: rootGetters["employees/getEmployee"](meet.employeeId),
        weekDay: rootGetters["weekDays/getWeekDay"](meet.weekDayId),
      })),
  },
  mutations: {
    addMeet(state, meet) {
      state.meets.push({
        id: new Date().getTime(),
        ...meet,
      });
    },
    init(state, meetsList) {
      state.meets = meetsList;
    },
    deleteMeet(state, meetId) {
      state.meets = state.meets.filter((meet) => meet.id !== meetId);
    },
  },
  actions: {
    addMeet({ commit }, meet) {
      commit("addMeet", meet);
    },
    initMeets({ commit }) {
      commit("init", meetsList);
    },
    deleteMeet({ commit }, meetId) {
      commit("deleteMeet", meetId);
    },
  },
  modules: {},
};
