<template>
  <div class="mt-4">
    <div class="row">
      <sidnav-component />
      <div class="col-5">
        <h2 class="alert-info text-center">Choose comfortable time</h2>
        <div class="card m-auto" style="width: 100%">
            <form @submit.prevent="createReception" class="d-flex flex-column align-items-center">
                <div class="card-body">
                    <h5 class="card-title">{{ doctor.name }} {{ doctor.lastname }}</h5>
                    <p class="card-text">{{ doctor.roomNumber }} room number</p>
                    <div>
                        <v-date-picker
                        v-model="date"
                        mode="dateTime"
                        :timezone="timezone"
                        />
                    </div>
                </div>    
              <button type="submit" class="btn btn-primary mt-2 mb-4" style="width:50%">Visit</button>
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
      date: new Date(),
      timezone: "Europe/Moscow",
      doctor: {},
      reception: {},
    };
  },
  mounted() {
    this.axios

      .get(process.env.VUE_APP_API_URL + `/doctor?id=${this.$route.params.id}`)
      .then((response) => (this.doctor = response.data))
      .catch((err) => console.log(err))
      .finally(() => (this.loading = false));
  },
  methods: {
    createReception() {
      this.axios
        .post(process.env.VUE_APP_API_URL + `/reception`, this.getReception())
        .then(() => {
          this.$router.push({ name: "/profile/doctors" });
        });
    },
    getReception() {
      this.reception.doctor_id = this.doctor.id;
      this.reception.user_id = 1;
      this.reception.date = this.formatDate(this.date);
      return this.reception;
    },
    formatDate(value) {
      return moment(String(value)).format("YYYY-MM-DD hh:mm");
    },
  },
};
</script>
