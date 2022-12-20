<template>
  <v-navigation-drawer border="0">
    <v-list density="compact">
      <v-list-subheader>Main</v-list-subheader>

      <v-list-item
        v-for="(route, i) in dashboardRoutes"
        :key="i"
        :to="route.to"
        :value="route.title"
        active-color="primary"
      >
        <template v-slot:prepend>
          <v-icon :icon="route.icon"></v-icon>
        </template>

        <v-list-item-title v-text="route.title"></v-list-item-title>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["dashboardRoutes"]),
  },
};
</script>
