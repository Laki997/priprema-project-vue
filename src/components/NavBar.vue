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
        </template>
      </div>
    </nav>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters(
      { isAuthenticated: "auth/isAuthenticated" },
      { user: "auth/user" }
    ),
  },

  methods: {
    ...mapActions(
      { logout: "auth/logout" },
      { getActiveUser: "auth/getActiveUser" }
    ),

    async logoutUser() {
      await this.logout();
      this.$router.push("/login");
    },
  },

  async created() {
    await this.$store.dispatch("auth/getActiveUser");
  },
};
</script>

<style scoped></style>
