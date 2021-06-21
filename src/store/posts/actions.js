import postService from "../../services/postService";

export const actions = {
  async getAllPosts(store, page) {
    const data = await postService.getAll(store.state.searchTerm, page);
    console.log(store.state.page);
    console.log(data);
    store.commit("pagination", data);
    store.commit("getAllPosts", data.data);
  },

  async getTitleAsc(store) {
    const data = await postService.getTitleAsc();

    store.commit("getAllPosts", data);
  },

  async getTitleDesc(store) {
    const data = await postService.getTitleDesc();

    store.commit("getAllPosts", data);
  },

  async getDateAsc(store) {
    const data = await postService.getDateAsc();

    store.commit("getAllPosts", data);
  },

  async getDateDesc(store) {
    const data = await postService.getDateDesc();

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

    store.commit("setOnePost", post);

    return data;
  },
};
