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
    // console.log(post);
    store.commit("setOnePost", post);
  },

  async deleteOne(store, post) {
    await postService.delete(post.id);

    store.commit("deleteOnePost", post);
  },

  async editOne(store, post) {
    const data = await postService.edit(post);
    console.log(data);
    console.log(post);

    store.commit("setOnePost", post);
  },
};
