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

  deleteOnePost(state, payload) {
    state.posts = state.posts.filter((post) => {
      post.id !== payload.id;
    });
  },
};
