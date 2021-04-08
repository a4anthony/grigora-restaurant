import { createStore } from "vuex";

export default createStore({
  state: {
    activeMenu: ""
  },
  mutations: {
    setActiveMenu(state, data) {
      state.activeMenu = data;
      console.log(state);
    }
  },
  actions: {},
  modules: {}
});
