<template>
  <div>
    <post-row
      @post-delete="handlePostDelete"
      @title-asc="handleTitleAsc"
      @title-desc="handleTitleDesc"
      @date-asc="handleDateAsc"
      @date-desc="handleDateDesc"
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
    ...mapActions({ getTitleAsc: "posts/getTitleAsc" }),
    ...mapActions({ getTitleDesc: "posts/getTitleDesc" }),
    ...mapActions({ getDateAsc: "posts/getDateAsc" }),
    ...mapActions({ getDateDesc: "posts/getDateDesc" }),

    handlePostDelete(post) {
      if (this.$store.getters["auth/user"].id !== post.user_id) {
        alert("Samo autor posta sme da ga obrise");
      } else {
        store.dispatch("posts/deleteOne", post);

        this.getAllPosts();
      }
    },

    handleTitleAsc() {
      this.getTitleAsc();
    },
    handleTitleDesc() {
      this.getTitleDesc();
    },
    handleDateAsc() {
      this.getDateAsc();
    },
    handleDateDesc() {
      this.getDateDesc();
    },
  },

  async created() {
    await this.getAllPosts();
    await this.$store.dispatch("auth/getActiveUser");
  },
};
</script>

<style scoped></style>
