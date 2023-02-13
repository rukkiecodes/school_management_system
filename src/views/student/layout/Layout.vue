<template>
  <v-container fluid class="pa-0">
    <v-app-bar title="Student's Dashboard" order="1" flat></v-app-bar>

    <v-navigation-drawer border="0">
      <v-list>
        <v-list-item
          v-for="(item, i) in studentDashboardRoutes"
          :key="i"
          :to="item.to"
        >
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <router-view />
  </v-container>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  mounted() {
    this.getallStudentSubjects();
    this.getallStudentEvents();
    this.getallStudentAccounting();
    this.getallStudentFees();
  },

  methods: {
    ...mapActions([
      "getallStudentSubjects",
      "getallStudentEvents",
      "getallStudentAccounting",
      "getallStudentFees",
    ]),
  },

  computed: {
    ...mapGetters(["studentDashboardRoutes"]),
  },
};
</script>
