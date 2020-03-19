<template>
  <div class="projects">
    <v-container class="ml-2 mt-4 mr-2">
      <v-layout row wrap class="mb-4"> </v-layout>
      <v-card flat v-for="project in items" :key="project.title" class="mb-1">
        <v-layout row wrap class="pa-3 project project no">
          <v-flex xs12 md6>
            <div class="caption grey--text">Unit</div>
            <div>{{ project.name }}</div>
          </v-flex>
          <v-flex xs6 sm4 md6>
            <div class="caption grey--text">Contact no</div>
            <div>
              {{ project.contact }}
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
          name: "Suwasariya Hotline",
          contact: "+9471 010 7107"
        },
        {
          id: 2,
          name: "Quarantine Unit",
          contact: "+94011 211 2705"
        },
        {
          id: 3,
          name: "Police Search",
          contact: "+94011 244 4480"
        },
        {
          id: 4,
          name: "Police Search",
          contact: "+94011 244 4481"
        },
        {
          id: 5,
          name: "Police Search",
          contact: "+94011 597 8720"
        },
        {
          id: 5,
          name: "Police Search",
          contact: "+94011 597 8730"
        },
        {
          id: 5,
          name: "Police Search",
          contact: "+94011 597 8734"
        }
      ]
    };
  }
};
</script>

<style scoped>
.project.no {
  border-left: 4px solid red;
}
</style>
