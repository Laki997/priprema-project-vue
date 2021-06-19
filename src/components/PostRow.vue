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
          <th>Date</th>
          <td>{{ post.created_at }}</td>
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
          <td>
            <button class="btn btn-success" @click="filterTitleAsc">
              Title asc
            </button>
          </td>
          <td>
            <button class="btn btn-success" @click="filterTitleDesc">
              Title desc
            </button>
          </td>
          <td>
            <button class="btn btn-success" @click="filterDateAsc">
              Date asc
            </button>
          </td>
          <td>
            <button class="btn btn-success" @click="filterDateDesc">
              Date desc
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

    filterTitleAsc() {
      this.$emit("title-asc");
    },
    filterTitleDesc() {
      this.$emit("title-desc");
    },
    filterDateAsc() {
      this.$emit("date-asc");
    },
    filterDateDesc() {
      this.$emit("date-desc");
    },
  },
};
</script>

<style scoped></style>
