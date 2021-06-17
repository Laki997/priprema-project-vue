<template>
  <div>
    <form @submit.prevent="onSubmit">
      <div class="form-group">
        <label for="name">Name</label>
        <input
          type="text"
          name="name"
          class="form-control"
          id="name"
          aria-describedby="emailHelp"
          placeholder="Enter name"
          v-model="user.name"
          required
        />
      </div>
      <div class="form-group">
        <label for="email">Email</label>
        <input
          type="email"
          name="email"
          class="form-control"
          id="email"
          aria-describedby="emailHelp"
          placeholder="Enter email"
          v-model="user.email"
          required
        />
      </div>
      <div class="form-group">
        <label for="password">Password</label>
        <input
          type="password"
          name="password"
          class="form-control"
          id="password"
          aria-describedby="emailHelp"
          placeholder="Enter password"
          v-model="user.password"
          required
        />
      </div>
      <div class="form-group">
        <label for="password">Confirm password</label>
        <input
          type="password"
          name="password_confirmation"
          class="form-control"
          id="password_confirmation"
          aria-describedby="emailHelp"
          placeholder="Confirm password"
          v-model="user.password_confirmation"
          required
        />
      </div>

      <button type="submit" class="btn btn-primary">Register</button>
    </form>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  data() {
    return {
      user: {
        name: "",
        password: "",
        email: "",
        password_confirmation: "",
      },

      errors: {
        email: "",
        password: "",
      },
    };
  },

  methods: {
    ...mapActions({ register: "auth/register" }),

    async onSubmit() {
      await this.register(this.user)
        .then(() => {
          this.$router.push("/about");
        })
        .catch((error) => {
          this.errors.email = error.response.data.errors.email;
          this.errors.password = error.response.data.errors.password;

          // const [email, password] = Object.values(error.response.data.errors);
          // console.log(email, password);

          // alert(email + "\n" + password);

          const errors = Object.values(this.errors);
          alert(`ERORRS:  ${errors}  ` + "\n");
        });
    },
  },
};
</script>

<style scoped></style>
