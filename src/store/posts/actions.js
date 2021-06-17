import postService from "../../services/postService";

export const actions = {
  async getAllPosts(store) {
    const data = await postService.getAll();

    store.commit("getAllPosts", data);
  },

  async createPost(store, data) {
    const post = await postService.create(data);

    store.commit("setNewPost", post);
  },

  async getOne(store, id) {
    const post = await postService.getOne(id);
    console.log(post);
    store.commit("setOnePost", post);
  },

  async deleteOne(store, id) {
    const post = await postService.delete(id);

    store.commit("deleteOnePost", post);
  },
};
