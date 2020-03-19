<template>
  <div class="hospitals">
    <v-container class="ml-2 mt-4 mr-2">
      <v-layout row wrap class="mb-4">
        <v-tooltip bottom>
          <template v-slot:activator="{ on }">
            <v-btn
              small
              outlined
              color="green"
              @click="sortBy('created_at')"
              class="mr-2"
              dark
              v-on="on"
            >
              <v-icon left small>folder</v-icon>
              <span class="caption text-lowercase">By Created At</span>
            </v-btn>
          </template>
          <span>Sort By</span>
        </v-tooltip>
      </v-layout>
      <v-card
        flat
        v-for="project in hospitals"
        :key="project.title"
        class="mb-1"
      >
        <v-layout row wrap class="pa-3 project project complete">
          <v-flex xs12 md6>
            <div class="caption grey--text">Hospital</div>
            <div>{{ project.hospital.name }}</div>
            <div class="caption grey--text">
              Created At {{ project.created_at | moment }}
            </div>
          </v-flex>
          <v-flex xs6 sm4 md2>
            <div class="caption grey--text">Total Treatments</div>
            <div>{{ project.treatment_total }}</div>
          </v-flex>
          <v-flex xs6 sm4 md2>
            <div class="caption grey--text">Total Tested</div>
            <div>{{ project.cumulative_total }}</div>
          </v-flex>
          <v-flex xs6 sm4 md2>
            <div class="caption grey--text">Total Foreign Treatment</div>
            <div>{{ project.treatment_foreign }}</div>
          </v-flex>
        </v-layout>
      </v-card>
    </v-container>
  </div>
</template>

<script>
import moment from "moment";
import axios from "axios";

export default {
  name: "hospitals",
  components: {},
  created() {
    this.getData();
  },
  data() {
    return {
      hospitals: []
    };
  },
  filters: {
    moment: function(date) {
      return moment(date).format("MMMM Do YYYY, h:mm:ss a");
    }
  },

  methods: {
    sortBy(prop) {
      this.hospitals.sort((a, b) => (a[prop] < b[prop] ? -1 : 1));
    },
    getData() {
      axios
        .get("http://hpb.health.gov.lk/api/get-current-statistical")
        .then(res => {
          console.log(res);
          console.log("connected");
          this.hospitals = res.data.data.hospital_data;
        })
        .catch(error => {
          console.log(error);
          console.log("connected");
        });
      setTimeout(() => {
        this.getData();
      }, 15000);
    }
  }
};
</script>
<style>
.project.complete {
  border-left: 4px solid #3cd1c2;
}
</style>
