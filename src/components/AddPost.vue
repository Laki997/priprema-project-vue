<template>
  <div>
    <form @submit.prevent="onSubmit">
      <div class="form-group">
        <label for="title">Title</label>
        <input
          type="text"
          name="title"
          class="form-control"
          id="title"
          aria-describedby="emailHelp"
          placeholder="Enter title"
          v-model="post.title"
          required
        />
      </div>
      <div class="form-group">
        <label for="email">Body</label>
        <textarea
          rows="5"
          cols="5"
          type="text"
          name="body"
          class="form-control"
          id="body"
          aria-describedby="emailHelp"
          placeholder="Enter body"
          v-model="post.body"
          required
        />
      </div>

      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {
      post: {},
    };
  },

  methods: {
    ...mapActions({ createPost: "posts/createPost" }),

    async onSubmit() {
      await this.createPost(this.post);
      this.$router.push("/");
    },
  },
};
</script>

<style scoped></style>
