import { actions } from "./actions";
import { mutations } from "./mutations";
import { getters } from "./getters";

const store = {
  namespaced: true,
  state: () => ({
    posts: [],
    post: {},
    searchTerm: "",
    pagination: {},
    page: 1,
  }),
  actions,
  getters,
  mutations,
};

export default store;
