export const mutations = {
  getAllPosts(state, payload) {
    state.posts = payload;
  },

  setNewPost(state, payload) {
    state.posts.push(payload);
  },

  setOnePost(state, payload) {
    state.post = payload;
    console.log(payload);
  },

  // editOnePost(state, payload) {
  //   state.post = state.posts.find((post) => post.id === payload.id);
  // },

  deleteOnePost(state, payload) {
    state.posts = state.posts.filter((post) => {
      post.id !== payload.id;
    });
  },
};
