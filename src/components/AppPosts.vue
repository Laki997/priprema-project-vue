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
</template>

<script>
import store from "../store";
import { mapGetters, mapActions } from "vuex";
import PostRow from "./PostRow.vue";

export default {
  components: { PostRow },
  computed: {
    ...mapGetters({ allPosts: "posts/allPosts" }),
  },

  methods: {
    ...mapActions({ getAllPosts: "posts/getAllPosts" }),

    handlePostDelete(post) {
      if (this.$store.getters["auth/user"].id !== post.user_id) {
        alert("Samo autor posta sme da ga obrise");
      } else {
        store.dispatch("posts/deleteOne", post);

        this.getAllPosts();
      }
    },
  },

  async created() {
    await this.getAllPosts();
    await this.$store.dispatch("auth/getActiveUser");
  },
};
</script>

<style scoped></style>
