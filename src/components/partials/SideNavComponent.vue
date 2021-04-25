<template>
    <div class="col-3">
      <ul class="nav flex-column">
        <li class="nav-item pt-1 pb-1">
          <router-link to="/dashboard" class="nav-item nav-link text-white bg-info d-flex pl-4">
            <box-icon type='solid' name='dashboard'></box-icon> 
            <span class="pl-4">Dashboard</span>
          </router-link>
        </li>
        <li class="nav-item pt-1 pb-1">
          <router-link to="/profile/doctors" class="nav-item nav-link text-white bg-info d-flex pl-4">
            <box-icon type='solid' name='user-rectangle'></box-icon>
            <span class="pl-4">Doctors</span>    
          </router-link>
        </li>
        <li class="nav-item pt-1 pb-1">
          <router-link to="/receptions" class="nav-item nav-link text-white bg-info d-flex pl-4">
            <box-icon name='list-ul'></box-icon>
            <span class="pl-4">Receptions</span>    
          </router-link>
        </li>
        <li v-on:click="logout()" class="nav-item pt-1 pb-1">
          <router-link to="/" class="nav-item nav-link text-white bg-info d-flex pl-4">
            <box-icon name='log-out'></box-icon>
            <span class="pl-4">Logout</span>
          </router-link>
        </li>
      </ul>

      <router-view />
    </div>
</template>

<script>
export default {
    methods: {
    logout() {
      localStorage.auth = '';
        this.axios
        .get(process.env.VUE_APP_API_URL + `/logout`)
        .then(response => (this.response = response.data))
        .catch(err => console.log(err))
        .finally(() => this.loading = false)
    },
  },
};
</script>
