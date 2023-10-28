import { createStore } from "vuex";

export default createStore({
  state: {
    products: [
      {name: 'Хліб', id: 1, price: 25, amount: 1},
      {name: 'Молоко', id: 2, price: 36, amount: 1},
      {name: 'Ковбаса', id: 3, price: 100, amount: 1},
      {name: 'Вода', id: 4, price: 21, amount: 1},
      {name: 'Масло', id: 5, price: 56, amount: 1},
      {name: 'Пиво', id: 6, price: 64, amount: 1},
      {name: 'Кава', id: 7, price: 26, amount: 1},
    ],
    currencies: [
      {title:'Гривня', short: 'грн', code: 'uah', id: 1},
      {title:'Доллар', short: '$', code: 'usd', id: 2},
    ],
    currentCurrency: 1,
    currencyRate: 38,
    productCart: []
  },
  getters: {
    getProducts(state) {
      return state.products;
    },
    getCurrencies(state) {
      return state.currencies;
    },
    getCurrentCurrency(state) {
      return state.currentCurrency;
    },
    getCurrencyRate(state) {
      return state.currencyRate;
    },
    getProductCart(state) {
      return state.productCart
    }
  },
  mutations: {
    addProductToCart(state, product) {
      let find = state.productCart.filter(item => item.id === product.id)
      if (find.length) {
        find[0].amount++
      } else {
        state.productCart.push(product);
      }
    },
    setSelectedCurrency(state, currencyId) {
      state.currentCurrency = currencyId
    },
    removeProductFromCart(state, index) {
      state.productCart[index].amount = 1
      state.productCart.splice(index, 1)
    }
  },
  actions: {
    addProductToCart(context, product) {
      context.commit('addProductToCart', product)
    },
    setSelectedCurrency(context) {
      context.commit('setSelectedCurrency')
    },
    removeProductFromCart(context, index) {
      context.commit('removeProductFromCart', index)
    }
  },
  modules: {},
});
