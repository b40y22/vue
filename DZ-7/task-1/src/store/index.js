import { createStore } from "vuex";

export default createStore({
  state: {
    students: [
      {name: 'Коваль Тарас', grade: 10, id: 1},
      {name: 'Григоренко Іван', grade: 9, id: 2},
      {name: 'Маркович Оля', grade: 11, id: 3},
      {name: 'Василенко Іра', grade: 12, id: 4},
      {name: 'Пилип Тарас', grade: 7, id: 5},
      {name: 'Баба Галя', grade: 35, id: 6},
      {name: 'Дід Степан', grade: 21, id: 7},
    ],
    categories: [
      {name: 'Відмінник', gradeArray: [10, 11, 12], id: 1},
      {name: 'Хорошист', gradeArray: [7, 8, 9], id: 2},
      {name: 'Трійочник', gradeArray: [4, 5, 6], id: 3},
      {name: 'Двійочник', gradeArray: [2, 3], id: 4},
      {name: 'Блатник', gradeArray: [1], id: 5},
    ],
    grades: [
      {value: 12, id: 1},
      {value: 5, id: 2},
    ],
    currentGradeId: 1,
    currentCategoryId: null,
  },
  getters: {
    getStudents: ({students}) => students,
    getCategories: ({categories}) => categories,
    getGrades: ({grades}) => grades,
    getCurrentGradeId: ({currentGradeId}) => currentGradeId,
    getCurrentCategoryId: ({currentCategoryId}) => currentCategoryId,
  },
  mutations: {
    setCurrentGrade(state, currentGradeId) {
      state.currentGradeId = currentGradeId
    },
    setCurrentCategoryId(state, currentCategoryId) {
      state.currentCategoryId = currentCategoryId
    }
  },
  actions: {
    setCurrentGrade(context, currentGradeId) {
      context.commit('setCurrentGrade', currentGradeId)
    },
    setCurrentCategoryId(context, currentCategoryId) {
      context.commit('setCurrentCategoryId', currentCategoryId)
    },
    addProductToCart(context, product) {
      context.commit('addProductToCart', product)
    },
  },
  modules: {},
});
