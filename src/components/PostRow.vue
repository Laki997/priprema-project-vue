<template>
  <div>
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
          <td>
            <router-link
              :to="`/edit/${post.id}`"
              tag="button"
              class="btn btn-warning"
              >Edit</router-link
            >
          </td>
          <td>
            <button @click="handleDelete" class="btn btn-danger">
              Delete
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  props: ["post"],
  methods: {
    handleDelete() {
      this.$emit("post-delete", this.post);
      console.log(this.post);
    },
  },
};
</script>

<style scoped></style>
