import { createStore } from "vuex";
import { categories, products } from "@/data";

export default createStore({
  state: {
    categories: [],
    products: [],
  },
  getters: {
    getCategories: ({ categories }) => categories,
    getProducts: ({ products }) => products,
  },
  mutations: {
    setCategories(state, categories) {
      state.categories = categories;
    },
    setProducts(state, products) {
      state.products = products;
    },
  },
  actions: {
    setCategories(context) {
      context.commit("setCategories", categories);
    },
    setProducts(context) {
      context.commit("setProducts", products);
    },
  },
  modules: {},
});
