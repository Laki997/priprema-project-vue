import { actions } from "./actions";
import { mutations } from "./mutations";
import { getters } from "./getters";

const store = {
  namespaced: true,
  state: () => ({
    posts: [],
    post: {},
  }),
  actions,
  getters,
  mutations,
};

export default store;
