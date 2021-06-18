<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <template v-if="!isAuthenticated">
          <div class="navbar-nav">
            <router-link class="nav-item nav-link" to="/register"
              >Register</router-link
            >
          </div>
          <div class="navbar-nav">
            <router-link class="nav-item nav-link" to="/login"
              >Login</router-link
            >
          </div>
        </template>
        <template v-else>
          <div class="navbar-nav">
            <router-link class="nav-item nav-link" to="/posts"
              >Posts</router-link
            >
          </div>
          <div class="navbar-nav">
            <router-link class="nav-item nav-link" to="/add">Add</router-link>
          </div>
          <div class="navbar-nav">
            <a class="button" @click="logoutUser">Logout</a>
          </div>
          <div>
            <input
              class="navbar-nav"
              v-model="search"
              type="text"
              placeholder="Enter term"
            />
          </div>
          <div class="user">
            User:
            <b
              ><strong>{{ user.name }}</strong></b
            >
          </div>
        </template>
      </div>
    </nav>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from "vuex";

export default {
  data() {
    return {
      search: "",
      user: {},
    };
  },
  computed: {
    ...mapGetters({ isAuthenticated: "auth/isAuthenticated" }),
  },

  methods: {
    ...mapActions({ logout: "auth/logout" }),
    ...mapMutations({ setSearchTerm: "posts/setSearchTerm" }),

    async logoutUser() {
      await this.logout();
      this.$router.push("/login");
    },
  },
  watch: {
    search(value) {
      this.setSearchTerm(value);
    },
  },

  async created() {
    this.user = JSON.parse(localStorage.getItem("user"));
  },
};
</script>

<style scoped>
.user {
  background: wheat;
  color: blue;
}
</style>
