<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer" app clipped>
      <v-list dense>
        <v-list-item to="/">
          <v-list-item-action>
            <v-icon>mdi-view-dashboard</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>DETAILS</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item to="/hospitals">
          <v-list-item-action>
            <v-icon>add_location</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>HOSPITALS</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item to="/references">
          <v-list-item-action>
            <v-icon>book</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>REFERENCES</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item to="/hotlines">
          <v-list-item-action>
            <v-icon>perm_phone_msg</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>HOTLINES</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app clipped-left>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title>Covoid 19 | Latest Updates...</v-toolbar-title>
    </v-app-bar>

    <v-content>
      <router-view></router-view>
    </v-content>

    <v-footer padless inset>
      <v-row>
        <v-col class="text-center">
          <span
            >&copy; {{ new Date().getFullYear() }} —
            <strong
              >only for inform details. not for any personal purpose.</strong
            ></span
          >
        </v-col>
      </v-row>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: "App",
  props: {
    source: String
  },
  components: {},

  data() {
    return {
      drawer: null
    };
  },
  created() {
    this.$vuetify.theme.dark = true;
  }
};
</script>
