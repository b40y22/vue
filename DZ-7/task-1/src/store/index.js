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
      {name: 'Відмінник', id: 1},
      {name: 'Хорошист', id: 2},
      {name: 'Трійочник', id: 3},
      {name: 'Двійочник', id: 4},
      {name: 'Блатник', id: 5},
    ],
    grades: [
      {value: 12, id: 1},
      {value: 5, id: 2},
    ]
  },
  getters: {
    getStudents: ({students}) => students,
    getCategories: ({categories}) => categories,
    getGrades: ({grades}) => grades,
  },
  mutations: {},
  actions: {},
  modules: {},
});
