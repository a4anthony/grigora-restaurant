import { createStore } from "vuex";

export default createStore({
  state: {
    activeMenu: "",
    activeSubMenu: ""
  },
  mutations: {
    setActiveMenu(state, data) {
      state.activeMenu = data;
      if (state.activeMenu.data.length !== 0) {
        state.activeSubMenu = state.activeMenu.data[0];
      }
    },
    setActiveSubMenu(state, data) {
      state.activeSubMenu = data;
    }
  },
  actions: {},
  modules: {}
});
