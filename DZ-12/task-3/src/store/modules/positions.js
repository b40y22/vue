import { positions } from "@/data";

export default {
  namespaced: true,
  state: {
    positions: [],
  },
  getters: {
    getPosition: ({ positions }) => positions,
    getPositionById: (state) => (positionId) =>
      state.positions.find((position) => position.id === positionId),
  },
  mutations: {
    init(state, positionsList) {
      state.positions = positionsList;
    },
  },
  actions: {
    initPositions({ commit }) {
      commit("init", positions);
    },
  },
  modules: {},
};
