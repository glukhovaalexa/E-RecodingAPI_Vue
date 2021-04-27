<template>
  <div class="mt-4">
    <div class="row">
      <sidnav-component />
      <div class="col-9">
          <h2 class="alert-info text-center">Choose the specialist</h2>
        <table class="table mt-4 table-hover">
          <thead class="table-dark">
            <tr>
              <th scope="col">#</th>
              <th scope="col">First</th>
              <th scope="col">Last</th>
              <th scope="col">Room number</th>
              <th scope="col">Speciality</th>
              <th scope="col">Hospital name</th>
            </tr>
          </thead>
          <tbody>
            <router-link
              :to="{ name: '/profile/doctor', params: { id: doctor.id } }"
              v-for="doctor in doctors"
              :key="doctor.id" style="display:contents"
            >
              <tr class="text-dark">
                <th>{{ doctor.id }}</th>
                <td>{{ doctor.name }}</td>
                <td>{{ doctor.lastname }}</td>
                <td>{{ doctor.roomNumber }}</td>
                <td>{{ doctor.speciality.name }}</td>
                <td>{{ doctor.hospital.name }}</td>
              </tr>
            </router-link>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
        doctors: {},
        city_id: ''
    };
  },
  created() {
        this.city_id = localStorage.city
        this.axios

      .get(process.env.VUE_APP_API_URL + `/doctors?id=${this.city_id}`)
      .then((response) => (this.doctors = response.data))
      .catch((err) => console.log(err))
      .finally(() => (this.loading = false));
  },
};
</script>
