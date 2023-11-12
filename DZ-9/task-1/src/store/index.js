import { createStore } from "vuex";
import { companies } from "@/data/data";

export default createStore({
  state: {
    companies: [],
    filters: {
      name: null,
      rate: null,
      year: null,
      owner: null,
    },
  },
  getters: {
    getCompanies: ({ companies }) => companies,
    getFilteredCompanies: (state) => {
      let result = state.companies.filter((company) => {
        const name =
          !state.filters.name ||
          company.name.toLowerCase().includes(state.filters.name.toLowerCase());
        const rate =
          !state.filters.rate ||
          company.rate.toString().includes(state.filters.rate.toString());
        const year =
          !state.filters.year ||
          company.year.toString().includes(state.filters.year.toString());
        const owner =
          !state.filters.owner ||
          company.owner
            .toLowerCase()
            .includes(state.filters.owner.toLowerCase());
        return name && rate && year && owner;
      });
      return result.length ? result : state.companies;
    },
  },
  mutations: {
    editCompany(state, company) {
      state.companies = state.companies.filter(
        (item) => company.id !== item.id
      );
      state.companies.push(company);
    },
    removeCompany(state, id) {
      state.companies = state.companies.filter((company) => company.id !== id);
    },
    setCompanies(state, companies) {
      state.companies = companies;
    },
    setFilters(state, filters) {
      state.filters = filters;
    },
    storeCompany(state, company) {
      let maxId = 0;
      state.companies.forEach((item) => {
        if (item.id > maxId) {
          maxId = item.id;
        }
      });
      state.companies.push({ ...company, id: ++maxId });
    },
  },
  actions: {
    editCompany({ commit }, company) {
      commit("editCompany", company);
    },
    removeCompany({ commit }, id) {
      commit("removeCompany", id);
    },
    setCompanies({ commit }) {
      commit("setCompanies", companies);
    },
    setFilters({ commit }, filters) {
      commit("setFilters", filters);
    },
    storeCompany({ commit }, company) {
      commit("storeCompany", company);
    },
  },
  modules: {},
});
