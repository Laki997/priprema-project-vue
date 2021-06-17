export const getters = {
  user: (state) => state.activeUser,
  isAuthenticated: (state) => !!state.token,
};
