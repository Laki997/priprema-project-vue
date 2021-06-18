import baseService from "./baseService";

class PostService extends baseService {
  async getAll(title) {
    const { data } = await this.client.get("/posts", { params: { title } });

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
