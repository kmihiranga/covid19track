<template>
  <v-container>
    <v-layout row wrap>
      <v-flex sm6 xs12 md6 lg4>
        <v-container>
          <v-card color="#ff5252" max-height="600" dark>
            <v-card-title class="headline text-uppercase">
              <v-icon large left>local_hospital</v-icon>Total Cases
            </v-card-title>

            <v-card-subtitle
              class="font-italic"
              style="overflow-y: auto; height:150px"
              >"Hands touch many surfaces and can pick up viruses. Once
              contaminated, hands can transfer the virus to your eyes, nose or
              mouth. From there, the virus can enter your body and can make you
              sick"</v-card-subtitle
            >
            <v-list-item>
              <v-list-item-content>
                <div class="overline text-right">Total cases Count(Local)</div>
                <v-list-item-title class="display-2 mb-1 text-right">{{
                  details.data.local_total_cases
                }}</v-list-item-title>
                <div>
                  <v-divider></v-divider>
                </div>
              </v-list-item-content>
            </v-list-item>
            <v-card-actions>
              <div class="caption white--text">
                Last Update {{ details.data.update_date_time | moment }}
              </div>
            </v-card-actions>
          </v-card>
        </v-container>
      </v-flex>
      <v-flex sm6 xs12 md6 lg4>
        <v-container>
          <v-card color="#4db6ac" max-height="600" dark>
            <v-card-title class="headline text-uppercase">
              <v-icon large left>warning</v-icon>New Cases
            </v-card-title>

            <v-card-subtitle
              class="font-italic"
              style="overflow-y: auto; height:150px"
              >"Make sure you, and the people around you, follow good
              respiratory hygiene. This means covering your mouth and nose with
              your bent elbow or tissue when you cough or sneeze. Then dispose
              of the used tissue immediately."</v-card-subtitle
            >
            <v-list-item>
              <v-list-item-content>
                <div class="overline text-right">
                  Total New Cases Count(Local)
                </div>
                <v-list-item-title class="display-2 mb-1 text-right">{{
                  details.data.local_new_cases
                }}</v-list-item-title>
                <div>
                  <v-divider></v-divider>
                </div>
              </v-list-item-content>
            </v-list-item>
            <v-card-actions>
              <div class="caption white--text">
                Last Update {{ details.data.update_date_time | moment }}
              </div>
            </v-card-actions>
          </v-card>
        </v-container>
      </v-flex>
      <v-flex sm6 xs12 md6 lg4>
        <v-container>
          <v-card color="#ffa726" max-height="600" dark>
            <v-card-title class="headline text-uppercase">
              <v-icon large left>autorenew</v-icon>Recovered
            </v-card-title>

            <v-card-subtitle
              class="font-italic"
              style="overflow-y: auto; height:150px"
              >"Stay home if you feel unwell. If you have a fever, cough and
              difficulty breathing, seek medical attention and call in advance.
              Follow the directions of your local health
              authority."</v-card-subtitle
            >
            <v-list-item>
              <v-list-item-content>
                <div class="overline text-right">Total Recovered(Local)</div>
                <v-list-item-title class="display-2 mb-1 text-right">{{
                  details.data.local_recovered
                }}</v-list-item-title>
                <div>
                  <v-divider></v-divider>
                </div>
              </v-list-item-content>
            </v-list-item>
            <v-card-actions>
              <div class="caption white--text">
                Last Update {{ details.data.update_date_time | moment }}
              </div>
            </v-card-actions>
          </v-card>
        </v-container>
      </v-flex>
      <v-flex sm6 xs12 md6 lg4>
        <v-container>
          <v-card color="#42a5f5" max-height="600" dark>
            <v-card-title class="headline text-uppercase">
              <v-icon large left>public</v-icon>Global Cases
            </v-card-title>

            <v-card-subtitle
              class="font-italic"
              style="overflow-y: auto; height:150px"
              >"Taking a hot bath will not prevent you from catching COVID-19.
              Your normal body temperature remains around 36.5°C to 37°C,
              regardless of the temperature of your bath or
              shower."</v-card-subtitle
            >
            <v-list-item>
              <v-list-item-content>
                <div class="overline text-right">Total Cases (Global)</div>
                <v-list-item-title class="display-2 mb-1 text-right">{{
                  details.data.global_total_cases
                }}</v-list-item-title>
                <div>
                  <v-divider></v-divider>
                </div>
              </v-list-item-content>
            </v-list-item>
            <v-card-actions>
              <div class="caption white--text">
                Last Update {{ details.data.update_date_time | moment }}
              </div>
            </v-card-actions>
          </v-card>
        </v-container>
      </v-flex>
      <v-flex sm6 xs12 md6 lg4>
        <v-container>
          <v-card color="#bcaaa4" max-height="600" dark>
            <v-card-title class="headline text-uppercase">
              <v-icon large left>autorenew</v-icon>Global Recovered
            </v-card-title>

            <v-card-subtitle
              class="font-italic"
              style="overflow-y: auto; height:150px"
              >"To date there has been no information nor evidence to suggest
              that the new coronavirus could be transmitted by
              mosquitoes"</v-card-subtitle
            >
            <v-list-item>
              <v-list-item-content>
                <div class="overline text-right">
                  Total Recovered(Global)
                </div>
                <v-list-item-title class="display-2 mb-1 text-right">{{
                  details.data.global_recovered
                }}</v-list-item-title>
                <div>
                  <v-divider></v-divider>
                </div>
              </v-list-item-content>
            </v-list-item>
            <v-card-actions>
              <div class="caption white--text">
                Last Update {{ details.data.update_date_time | moment }}
              </div>
            </v-card-actions>
          </v-card>
        </v-container>
      </v-flex>
      <v-flex sm6 xs12 md6 lg4>
        <v-container>
          <v-card color="#ff5722" max-height="600" dark>
            <v-card-title class="headline text-uppercase">
              <v-icon large left>face</v-icon>Global Deaths
            </v-card-title>

            <v-card-subtitle
              class="font-italic"
              style="overflow-y: auto; height:150px"
              >"If you are healthy, you only need to wear a mask if you are
              taking care of a person with suspected 2019-nCoV
              infection."</v-card-subtitle
            >
            <v-list-item>
              <v-list-item-content>
                <div class="overline text-right">Total Deaths(Global)</div>
                <v-list-item-title class="display-2 mb-1 text-right">{{
                  details.data.global_deaths
                }}</v-list-item-title>
                <div>
                  <v-divider></v-divider>
                </div>
              </v-list-item-content>
            </v-list-item>
            <v-card-actions>
              <div class="caption white--text">
                Last Update {{ details.data.update_date_time | moment }}
              </div>
            </v-card-actions>
          </v-card>
        </v-container>
      </v-flex>
      <v-flex sm6 xs12 md6 lg4>
        <v-container>
          <v-card color="#78909c" max-height="600" dark>
            <v-card-title class="headline text-uppercase">
              <v-icon large left>face</v-icon>Deaths
            </v-card-title>

            <v-card-subtitle
              class="font-italic"
              style="overflow-y: auto; height:150px"
              >"Hand dryers are not effective in killing the 2019-nCoV. To
              protect yourself against the new coronavirus, you should
              frequently clean your hands with an alcohol-based hand rub or wash
              them with soap and water."</v-card-subtitle
            >
            <v-list-item>
              <v-list-item-content>
                <div class="overline text-right">Total Deaths(Local)</div>
                <v-list-item-title class="display-2 mb-1 text-right">{{
                  details.data.local_deaths
                }}</v-list-item-title>
                <div>
                  <v-divider></v-divider>
                </div>
              </v-list-item-content>
            </v-list-item>
            <v-card-actions>
              <div class="caption white--text">
                Last Update {{ details.data.update_date_time | moment }}
              </div>
            </v-card-actions>
          </v-card>
        </v-container>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import axios from "axios";
import moment from "moment";

export default {
  data() {
    return {
      details: {}
    };
  },
  created() {
    this.getData();
  },
  mounted() {},
  filters: {
    moment: function(date) {
      return moment(date).format("MMMM Do YYYY, h:mm:ss a");
    }
  },
  methods: {
    getData() {
      axios
        .get("http://hpb.health.gov.lk/api/get-current-statistical")
        .then(res => {
          console.log(res);
          console.log("connected");
          this.details = res.data;
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
