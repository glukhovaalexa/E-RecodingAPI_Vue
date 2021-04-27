<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="collapse navbar-collapse">
        <div class="navbar-nav">
          <router-link to="/" class="nav-item nav-link">Home</router-link>
          <div v-if="isAuth" style="display: flex">
            <router-link to="/profile" class="nav-item nav-link"
              >Profile</router-link
            >
            <li v-on:click="logout()" class="text-info btn btn-ligh">
              <router-link to="/"> Logout </router-link>
            </li>
          </div>
          <div v-else style="display: flex">
            <router-link to="/signin" class="nav-item nav-link"
              >Sign in</router-link
            >
            <router-link to="/signup" class="nav-item nav-link"
              >Sign up</router-link
            >
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isAuth: "",
      response: "",
    };
  },
  mounted() {
    this.isAuth = this.checkAuth();
  },
  methods: {
    checkAuth() {
      return localStorage.auth;
    },

    logout() {
        localStorage.auth = "";
        localStorage.city = '';

        this.axios
        .get(process.env.VUE_APP_API_URL + `/logout`)
        .then(response => (this.response = response.data))
        .catch(err => console.log(err))
        .finally(() => this.loading = false)
    },
  },
};
</script>