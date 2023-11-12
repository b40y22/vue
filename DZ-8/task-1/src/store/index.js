import { createStore } from "vuex";
import { categories, products } from "@/data";

export default createStore({
  state: {
    categories: [],
    currentCategory: null,
    products: [],
  },
  getters: {
    getCategories: ({ categories }) => categories,
    getProducts: ({ products }) => products,
    getFilteredProducts: (state) => {
      if (state.currentCategory) {
        return state.products.filter((product) => product.category === state.currentCategory.category);
      }
      return state.products;
    },
    getCurrentCategory: ({ currentCategory }) => currentCategory,
  },
  mutations: {
    setCategories(state, categories) {
      state.categories = categories;
    },
    setCurrentCategory(state, category) {
      state.currentCategory = category;
    },
    setProducts(state, products) {
      state.products = products;
    },
  },
  actions: {
    setCategories(context) {
      context.commit("setCategories", categories);
    },
    setCurrentCategory(context, category) {
      context.commit("setCurrentCategory", category);
    },
    setProducts(context) {
      context.commit("setProducts", products);
    },
  },
  modules: {},
});
