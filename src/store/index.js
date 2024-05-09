// store/index.js
import { createStore } from 'vuex'; // Import createStore from vuex

export default createStore({
  state: {
    selectedYear: new Date().getFullYear(),
    selectedUnit: "All",
  },
  mutations: {
    SET_SELECTED_YEAR(state, year) {
      state.selectedYear = year;
    },
    SET_SELECTED_UNIT(state, unit) {
      state.selectedUnit = unit;
    },
  },
  actions: {
    updateSelectedYear({ commit }, year) {
      commit('SET_SELECTED_YEAR', year);
    },
    updateSelectedUnit({ commit }, unit) {
      commit('SET_SELECTED_UNIT', unit);
    },
  },
});
