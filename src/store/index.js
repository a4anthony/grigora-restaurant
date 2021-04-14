import { createStore } from "vuex";

export default createStore({
  state: {
    activeMenu: "",
    activeSubMenu: "",
    sideDrawerStatus: null,
    showMoreInfoModal: false,
    showLocationSearchModal: false
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
    },
    setSideDrawerStatus(state, data) {
      state.sideDrawerStatus = data;
    },
    setShowMoreInfoModal(state) {
      state.showMoreInfoModal = !state.showMoreInfoModal;
    },
    setShowLocationSearchModal(state) {
      state.showLocationSearchModal = !state.showLocationSearchModal;
    }
  },
  actions: {},
  modules: {}
});
