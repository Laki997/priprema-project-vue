import baseService from "./baseService";

class PostService extends baseService {
  async getAll(title, page) {
    const { data } = await this.client.get("/posts", {
      params: { title, page },
    });

    return data;
  }

  async getTitleAsc() {
    const { data } = await this.client.get("/posts/titleAsc");

    return data;
  }
  async getTitleDesc() {
    const { data } = await this.client.get("/posts/titleDesc");

    return data;
  }
  async getDateAsc() {
    const { data } = await this.client.get("/posts/dateAsc");

    return data;
  }
  async getDateDesc() {
    const { data } = await this.client.get("/posts/dateDesc");

    return data;
  }

  async create(data) {
    await this.client.post("/posts", data);
  }

  async getOne(id) {
    const { data } = await this.client.get(`/posts/${id}`);

    return data;
  }

  async delete(id) {
    const { data } = await this.client.delete(`/posts/${id}`);

    return data;
  }

  async edit(post) {
    const { data } = await this.client.put(`/posts/${post.id}`, post);
    return data;
  }
}

const postService = new PostService();
export default postService;
