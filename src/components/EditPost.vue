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
          v-model="newPost.title"
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
          v-model="newPost.body"
          required
        />
      </div>

      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

// import store from "../store";

export default {
  data() {
    return {
      newPost: {},
    };
  },

  props: ["id"],
  computed: {
    ...mapGetters({ singlePost: "posts/singlePost" }),
  },

  methods: {
    ...mapActions({ getOne: "posts/getOne" }, { editOne: "posts/editOne" }),

    async onSubmit() {
      if (this.$store.getters["auth/user"].id !== this.newPost.user_id) {
        alert("Nazalost, samo autor posta sme da ga modifkuje!");
      } else {
        await this.$store.dispatch("posts/editOne", this.newPost);
        this.$router.push("/posts");
      }
    },
  },

  async created() {
    await this.getOne(this.id);
    this.newPost = this.singlePost;
    await this.$store.dispatch("auth/getActiveUser");
  },
};
</script>

<style scoped></style>
