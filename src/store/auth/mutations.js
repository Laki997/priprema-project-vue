export const mutations = {
  setActiveUser(state, payload) {
    state.activeUser = payload;
    console.log(payload);
  },

  setToken(state, payload) {
    state.token = payload;
  },
};
