<template>
  <div>
    <post-row
      @post-delete="handlePostDelete"
      v-for="post in allPosts"
      :post="post"
      :key="post.id"
    >
    </post-row>
  </div>
  <!-- <div v-for="post in allPosts" :key="post.id"> -->
  <!-- <table class="table">
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
      </table> -->
  <!-- </div> -->
</template>

<script>
import store from "../store";
import { mapActions, mapGetters } from "vuex";
import PostRow from "./PostRow.vue";
// import store from "../store";
export default {
  components: { PostRow },
  computed: {
    ...mapGetters({ allPosts: "posts/filteredPosts" }),
  },

  methods: {
    ...mapActions({ getAllPosts: "posts/getAllPosts" }),

    handlePostDelete(post) {
      store.dispatch("posts/deleteOne", post);
    },
  },

  async created() {
    await this.getAllPosts();
  },
};
</script>

<style scoped></style>
