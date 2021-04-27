<template>
  <div class="col-6 mx-auto">
    <main class="form-signin">
      <AlertComponent
        v-if="errors.message"
        :error="errors.message"
      ></AlertComponent>

      <form @submit.prevent="loginUser">
        <h1 class="h3 mb-3 fw-normal text-center">Please sign in</h1>
        <label for="email" class="visually-hidden">Email</label>
        <input
          type="email"
          v-model="user.email"
          id="email"
          class="form-control"
          placeholder="Email"
          required
        />
        <AlertComponent
          v-if="errors.email"
          :error="errors.email"
        ></AlertComponent>
        <label for="password" class="visually-hidden">Password</label>
        <input
          type="password"
          v-model="user.pass"
          id="password"
          class="form-control"
          placeholder="Password"
          required
        />
        <AlertComponent
          v-if="errors.pass"
          :error="errors.pass"
        ></AlertComponent>
        <button class="w-100 btn btn-lg btn-primary" type="submit">
          Sign in
        </button>
        <p class="mt-5 mb-3 text-muted">&copy; 2017–2021</p>
      </form>
    </main>
  </div>
</template>

<script>
import AlertComponent from "./partials/AlertComponent.vue";

export default {
  components: {
    AlertComponent,
  },
  data() {
    return {
      user: {},
      errors: {},
      response: {},
    };
  },
  methods: {
    loginUser() {
      this.axios
        .post(process.env.VUE_APP_API_URL + "/signin", this.user)
        .then((response) => {
          if (response.data.errors) {
            this.errors = response.data.errors;
          } else {
            this.auth(response.data.user.id, response.data.user.city_id);
            this.$router.push({ name: "/profile/doctors" });
          }
        })
        .catch((err) => console.log(err))
        .finally(() => (this.loading = false));
    },

    auth(id, city_id) {
        localStorage.auth = id;
        localStorage.city = city_id;
    },
  },
};
</script>