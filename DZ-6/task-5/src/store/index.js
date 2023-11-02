import { createStore } from "vuex";

export default createStore({
  state: {
    products: [],
    suppliers: [],
    brands: [],
    filters: {
      supplier: [],
      brand: [],
    }
  },
  getters: {
    getBrands: ({ brands }) => brands,
    getProducts: ({ products }) => products,
    getSuppliers: ({ suppliers }) => suppliers,
    getFilters: ({ filters }) => filters,
  },
  mutations: {
    setBrands(state, brands) {
      state.brands = brands;
    },
    setProducts(state, products) {
      state.products = products;
    },
    setSuppliers(state, suppliers) {
      state.suppliers = suppliers;
    },
    // example - filter: {title:brand, value:asus}
    addToFilter(state, filter) {
      if (!filter.title || !filter.value) {
        console.error('filter has wrong structure')
      }

      let double = false;
      state.filters[filter.title].forEach((filterItem) => {
        if (filterItem.id === filter.value.id) {
          double = true;
        }
      })

      if (!double) {
        state.filters[filter.title].push(filter.value);
      }
    },
    removeFromFilter(state, filter) {
      state.filters[filter.title] = state.filters[filter.title].filter((filterItem) => {
        return filterItem.id !== filter.value.id
      })
    }
  },
  actions: {
    setBrands(context, brands) {
      context.commit("setBrands", brands);
    },
    setProducts(context, products) {
      context.commit("setProducts", products);
    },
    setSuppliers(context, suppliers) {
      context.commit("setSuppliers", suppliers);
    },
    addToFilter(context, filter) {
      context.commit("addToFilter", filter);
    },
    removeFromFilter(context, filter) {
      context.commit("removeFromFilter", filter);
    }
  },
  modules: {},
});
