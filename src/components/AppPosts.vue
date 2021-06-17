<template>
  <div>
    <div v-for="post in allPosts" :key="post.id">
      <table class="table">
        <tbody>
          <tr>
            <th>{{ post.id }}</th>
            <th>Title</th>
            <td>{{ post.title }}</td>
            <th>Body</th>
            <td>{{ post.body }}</td>
            <th>Actions</th>
            <td>
              <router-link
                :to="`/posts/${post.id}`"
                tag="button"
                class="btn btn-primary"
                >Info</router-link
              >
            </td>
            <td><button class="btn btn-warning">Edit</button></td>
            <td>
              <button class="btn btn-danger">
                Delete
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
// import store from "../store";
export default {
  computed: {
    ...mapGetters({ allPosts: "posts/allPosts" }),
  },

  methods: {
    ...mapActions({ getAllPosts: "posts/getAllPosts" }),
  },

  async created() {
    await this.getAllPosts();
  },
};
</script>

<style scoped></style>
