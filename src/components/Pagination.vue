<template>
  <div>
    <nav aria-label="Page navigation example">
      <ul class="pagination">
        <li
          class="page-item"
          :class="{ disabled: pagination.current_page === 1 }"
        >
          <a
            class="page-link"
            href="#"
            @click.prevent="changePage(pagination.current_page - 1)"
            >Previous</a
          >
        </li>
        <li
          :class="{ active: p === pagination.current_page }"
          class="page-item"
          v-for="(p, index) in pagination.last_page"
          :key="index"
        >
          <a class="page-link" href="#" @click.prevent="changePage(p)">{{
            p
          }}</a>
        </li>

        <li
          class="page-item"
          :class="{
            disabled: pagination.current_page === pagination.last_page,
          }"
        >
          <a
            class="page-link"
            href="#"
            @click.prevent="changePage(pagination.current_page + 1)"
            >Next</a
          >
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  props: ["pagination"],
  methods: {
    ...mapMutations({ setPage: "posts/setPage" }),
    changePage(page) {
      this.$emit("pagination", page);
      // this.setPage(page);
      // this.$store.commit("setPage", page);
      console.log(page);
    },
  },
};
</script>

<style scoped></style>
