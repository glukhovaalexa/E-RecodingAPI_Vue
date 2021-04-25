<template>
  <div class="mt-4">
    <div class="row">
      <sidnav-component />
      <div class="col-5">
        <h2 class="alert-info text-center">Edit recoding</h2>
        <div class="card m-auto" style="width: 100%">
          <form @submit.prevent="editReception" class="d-flex flex-column align-items-center">
            <div class="card-body">
              <h5 class="card-title">
                {{ reception.doctor.name }} {{ reception.doctor.lastname }}
              </h5>
              <p class="card-text">
                {{ reception.doctor.roomNumber }} room number
              </p>
              <v-date-picker
                v-model="reception.date"
                mode="dateTime"
                :timezone="timezone"
              />
            </div>
            <button type="submit" class="btn btn-primary mt-2 mb-4" style="width:50%">Edit</button>
          </form>
        </div>
      </div>
      <div class="col-4">
        <img src="../assets/doctor.jpg" alt="" style="max-width: 100%" />
      </div>
    </div>
  </div>
</template>

<script>
import moment from "moment";

export default {
  data() {
    return {
      reception: {},
      receptionEdit: {},
    };
  },
  mounted() {
    this.axios

      .get(
        process.env.VUE_APP_API_URL + `/reception?id=${this.$route.params.id}`
      )
      .then((response) => (this.reception = response.data))
      .catch((err) => console.log(err))
      .finally(() => (this.loading = false));
  },
  methods: {
    editReception() {
      this.axios
        .put(
          process.env.VUE_APP_API_URL +
            `/reception?id=${this.$route.params.id}`,
          this.getReceptionEdit()
        )
        .then(() => {
          this.$router.push({ name: "/receptions" });
        })
        .catch((err) => console.log(err))
        .finally(() => (this.loading = false));
    },
    getReceptionEdit() {
      this.receptionEdit.id = this.reception.id;
      this.receptionEdit.doctor_id = this.reception.doctor.id;
      this.receptionEdit.user_id = this.reception.user.id;
      this.receptionEdit.date = this.formatDate(this.reception.date);
      return this.receptionEdit;
    },
    formatDate(value) {
      return moment(String(value)).format("YYYY-MM-DD hh:mm");
    },
  },
};
</script>
