<template>
  <div class="mt-4">
    <div class="row">
      <sidnav-component />
      <div class="col-9">
          <h2 class="alert-info text-center">You recoding</h2>
        <table class="table mt-4 table-hover">
          <thead class="table-dark">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Doctor</th>
              <th scope="col">Speciality</th>
              <th scope="col">Room number</th>
              <th scope="col">Date</th>
              <th scope="col"></th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="reception in receptions" :key="reception.id" class="text-dark">
              <th>{{ reception.id }}</th>
              <td>
                {{ reception.doctor.name }} {{ reception.doctor.lastname }}
              </td>
              <td>{{ reception.doctor.speciality.name }}</td>
              <td>{{ reception.doctor.roomNumber }}</td>
              <td>{{ reception.date }}</td>
              <td>
                <router-link
                  :to="{ name: '/reception', params: { id: reception.id } }"
                >
                  <box-icon
                    type="solid"
                    name="edit-alt"
                    color="green"
                  ></box-icon>
                </router-link>
              </td>
              <td>
                <form @submit.prevent="deleteReception(reception.id)">
                  <button type="submit">
                    <input type="hidden" v-model="reception.id" />
                    <box-icon type="solid" name="trash" color="red"></box-icon>
                  </button>
                </form>
              </td>
            </tr>
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
      receptions: {},
      receptionDelete: {},
    };
  },
  created() {
    this.getReceptions();
  },
  methods: {
    deleteReception(id) {
      this.receptionDelete.id = id;
      this.axios
        .delete(
          process.env.VUE_APP_API_URL + `/reception?id=` + id,
          this.receptionDelete
        )
        .then(() => {
          let i = this.receptions.map((data) => data.id).indexOf(id);
          this.receptions.splice(i, 1);
        })
        .catch((err) => console.log(err))
        .finally(() => (this.loading = false));
    },
    getReceptions() {
      this.axios
        .get(process.env.VUE_APP_API_URL + `/receptions?id=${localStorage.auth}`)
        .then((response) => (this.receptions = response.data))
        .catch((err) => console.log(err))
        .finally(() => (this.loading = false));
    },
  },
};
</script>