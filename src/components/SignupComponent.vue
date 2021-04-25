<template>
  <div class="col-6 mx-auto">
      <main class="form-signin">
        <form @submit.prevent="addUser">
          <h1 class="h3 mb-3 fw-normal text-center">Please sign up</h1>
          <label for="name" class="visually-hidden">Name</label>
          <input
            type="text"
            v-model="user.name"
            id="name"
            class="form-control"
            placeholder="Name"
            required
            autofocus
          />
          <AlertComponent v-if="errors.name" :error="errors.lastname"></AlertComponent>
          <label for="lastname" class="visually-hidden">lastname</label>
          <input
            type="text"
            v-model="user.lastname"
            id="lastname"
            class="form-control"
            placeholder="lastname"
            required
          />
          <AlertComponent v-if="errors.lastname" :error="errors.lastname"></AlertComponent>
          <label for="city" class="visually-hidden">City</label>
          <select v-model="user.city_id" class="form-control"
            placeholder="City"
            required>
              <option v-for="city in cities" :key="city.id" v-bind:value="city.id">{{city.name}}</option>
          </select>
          <label for="Phone" class="visually-hidden">Phone</label>
          <input
            type="phone"
            v-model="user.phone"
            id="phone"
            class="form-control"
            placeholder="Phone"
            required
          />
          <AlertComponent v-if="errors.phone" :error="errors.phone"></AlertComponent>
          <label for="email" class="visually-hidden">Email</label>
          <input
            type="email"
            v-model="user.email"
            id="email"
            class="form-control"
            placeholder="Email"
            required
          />
          <AlertComponent v-if="errors.email" :error="errors.email"></AlertComponent>
          <label for="password" class="visually-hidden">Password</label>
          <input
            type="password"
            v-model="user.pass"
            id="password"
            class="form-control"
            placeholder="Password"
            required
          />
          <AlertComponent v-if="errors.pass" :error="errors.pass"></AlertComponent>
          <label for="password_rep" class="visually-hidden"
            >Password repeat</label
          >
          <input
            type="password"
            v-model="user.pass_rep"
            id="password_rep"
            class="form-control"
            placeholder="Password repeat"
            required
          />
          <div class="checkbox mb-3">
            <label>
              <input type="checkbox" value="remember-me" /> Remember me
            </label>
          </div>
          <button class="w-100 btn btn-lg btn-primary" type="submit">
            Sign up
          </button>
          <p class="mt-5 mb-3 text-muted">&copy; 2017–2021</p>
        </form>
      </main>
  </div>
</template>

<script>

import AlertComponent from './partials/AlertComponent.vue'

    export default {
        components: {
            AlertComponent
        },
        data() {
            return {
                user: {},
                cities: {},
                errors: {} 
            };
        },
        mounted() {
            this.getCities();
                console.log(localStorage)
        },
        methods: {
            addUser() {
                this.axios
                    .post(process.env.VUE_APP_API_URL + `/signup`, this.user)
                    .then(response => {
                        if(response.data.errors){
                            (this.errors = response.data.errors)
                        }else{
                            this.auth();
                            this.$router.push({ name: "/profile/doctors" })
                        }
                    })
                    .catch(err => console.log(err))
                    .finally(() => this.loading = false)
            },

            getCities() {
                this.axios
                    .get(process.env.VUE_APP_API_URL + `/signup`)
                    .then(response => (this.cities = response.data))
                    .catch(err => console.log(err))
                    .finally(() => this.loading = false)
            },

            auth() {
                localStorage.auth = this.user.id
            }

        }
    }
</script>