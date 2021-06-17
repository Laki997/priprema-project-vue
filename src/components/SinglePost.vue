<template>
  <div>
    <div>
      <h1>Single Post</h1>

      <hr />
      <h3>{{ singlePost.title }}</h3>
      <h3>{{ singlePost.body }}</h3>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  props: ["id"],
  computed: {
    ...mapGetters({ singlePost: "posts/singlePost" }),
  },

  methods: {
    ...mapActions({ getOne: "posts/getOne" }),
  },

  async created() {
    await this.getOne(this.id);
  },
};
</script>

<style scoped></style>
