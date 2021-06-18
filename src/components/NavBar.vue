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
              @input="search"
              class="navbar-nav"
              type="text"
              placeholder="Enter term"
            />
          </div>
          <div class="user" v-if="user && isAuthenticated">
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
    return {};
  },
  computed: {
    ...mapGetters({ isAuthenticated: "auth/isAuthenticated" }),
    user() {
      return JSON.parse(localStorage.getItem("user"));
    },
  },

  methods: {
    ...mapActions({ logout: "auth/logout" }),
    ...mapActions("posts", ["getAllPosts"]),
    ...mapMutations({ setSearchTerm: "posts/setSearchTerm" }),

    async logoutUser() {
      await this.logout();
      this.$router.push("/login");
    },

    search(evt) {
      this.setSearchTerm(evt.target.value);

      this.getAllPosts();
    },

    async beforeCreated() {
      this.user = JSON.parse(localStorage.getItem("user"));
      console.log(this.user);
    },
  },
};
</script>

<style scoped>
.user {
  background: wheat;
  color: blue;
}
</style>
