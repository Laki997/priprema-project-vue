import authService from "../../services/authService";

export const actions = {
  async login(store, credentials) {
    const { user, token } = await authService.login(credentials);
    localStorage.setItem("token", JSON.stringify(token));
    localStorage.setItem("user", JSON.stringify(user));
    console.log(user);

    store.commit("setActiveUser", user);
    store.commit("setToken", token);
  },

  async register(store, userData) {
    const { user, token } = await authService.register(userData);
    localStorage.setItem("token", JSON.stringify(token));
    localStorage.setItem("user", JSON.stringify(user));

    store.commit("setActiveUser", user);
    store.commit("setToken", token);
  },

  async logout(store) {
    await authService.logout();
    store.commit("setActiveUser", {});
    store.commit("setToken", null);
    localStorage.removeItem("token");
    localStorage.removeItem("user");
  },

  async getActiveUser(store) {
    if (store.getters.isAuthenticated) {
      console.log(store.getters.isAuthenticated);
      const activeUser = await authService.getActiveUser();
      console.log(activeUser);
      store.commit("setActiveUser", activeUser);
    } else {
      store.commit("setActiveUser", {});
    }
  },
};
