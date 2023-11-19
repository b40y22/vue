import { candidatesList } from "@/data";

export default {
  namespaced: true,
  state: {
    candidates: [],
  },
  getters: {
    getCandidate: (state) => (candidateId) => {
      return state.candidates.find((candidate) => candidate.id === candidateId);
    },
    getCandidates: (state, getters, rootState, rootGetters) =>
      state.candidates.map((candidate) => ({
        ...candidate,
        positionName: rootGetters["positions/getPositionById"](
          candidate.positionId
        ).name,
      })),
  },
  mutations: {
    addCandidate(state, candidate) {
      state.candidates.push({
        id: new Date().getTime(),
        ...candidate,
      });
    },
    deleteCandidate(state, candidateId) {
      state.candidates = state.candidates.filter(
        (candidate) => candidate.id !== candidateId
      );
    },
    editCandidate(state, candidate) {
      state.candidates = state.candidates.filter(
        (item) => item.id !== candidate.id
      );
      state.candidates.push(candidate);
    },
    init(state, candidatesList) {
      state.candidates = candidatesList;
    },
  },
  actions: {
    addCandidate({ commit }, candidate) {
      commit("addCandidate", candidate);
    },
    deleteCandidate({ commit }, candidateId) {
      commit("deleteCandidate", candidateId);
    },
    editCandidate({ commit }, candidate) {
      commit("editCandidate", candidate);
    },
    initCandidates({ commit }) {
      commit("init", candidatesList);
    },
  },
  modules: {},
};
