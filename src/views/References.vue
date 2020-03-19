<template>
  <div class="projects">
    <v-container class="ml-2 mt-4 mr-2">
      <v-layout row wrap class="mb-4"> </v-layout>
      <v-card flat v-for="project in items" :key="project.title" class="mb-1">
        <v-layout row wrap class="pa-3 project project no">
          <v-flex xs12 md6>
            <div class="caption grey--text">Resource</div>
            <div>{{ project.name }}</div>
          </v-flex>
          <v-flex xs6 sm4 md6>
            <div class="caption grey--text">Url</div>
            <div>
              <a :href="project.url" target="_blank">{{ project.url }}</a>
            </div>
          </v-flex>
        </v-layout>
      </v-card>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          id: 1,
          name: "HEALTH PROMOTION BUREAU",
          url: "http://hpb.health.gov.lk"
        },
        {
          id: 2,
          name: "World Health Organization",
          url: "https://www.who.int"
        }
      ]
    };
  }
};
</script>

<style scoped>
.project.no {
  border-left: 4px solid orange;
}
</style>
