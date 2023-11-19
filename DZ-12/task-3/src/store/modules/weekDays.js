import { weekDayList } from "@/data";

export default {
  namespaced: true,
  state: {
    weekDays: [],
  },
  getters: {
    getWeekDay: (state) => (weekDayId) => {
      return state.weekDays.find((weekDay) => weekDay.id === weekDayId);
    },
    getWeekDays: ({ weekDays }) => weekDays,
  },
  mutations: {
    init(state, weekDayList) {
      state.weekDays = weekDayList;
    },
  },
  actions: {
    initWeekDays({ commit }) {
      commit("init", weekDayList);
    },
  },
  modules: {},
};
