<template>
  <v-container fluid class="pa-0">
    <v-app-bar title="Student's Dashboard" order="1" flat></v-app-bar>

    <v-navigation-drawer border="0">
      <template v-slot:prepend>
        <v-card height="150" class="d-flex" flat>
          <v-card-text class="d-flex flex-column align-center justify-center">
            <v-avatar color="indigo-accent-4" size="60">
              <span class="text-lg-h5">
                {{ student?.firstname.charAt(0).toUpperCase() }}
                {{ student?.lastname.charAt(0).toUpperCase() }}
              </span>
            </v-avatar>
            <span class="mt-2 font-weight-bold text-grey-darken-3">
              <span class="text-capitalize">{{ student?.firstname }} {{ ' ' }}</span>
              <span class="text-capitalize">{{ student?.lastname }}</span>
            </span>
          </v-card-text>
        </v-card>
      </template>
      <v-list density="compact">
        <v-list-item
          density="compact"
          class="mb-2 rounded-e-lg"
          active-color="indigo-accent-4"
          v-for="(item, i) in staffDashboardRoutes"
          :key="i"
          :to="item.to"
        >
          <template v-slot:prepend>
            <v-icon :icon="item.icon"></v-icon>
          </template>
          <v-list-item-title class="text-body-2">{{
            item.title
          }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <router-view />
  </v-container>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  data: () => ({
    student: null,
  }),

  mounted() {
    this.getallStaffSubjects();
    this.getallStaffEvents();
    this.getallStaffFees();
    this.getallStudents();
    this.student = JSON.parse(localStorage.getItem("student"));
  },

  methods: {
    ...mapActions([
      "getallStaffSubjects",
      "getallStaffEvents",
      "getallStaffFees",
      "getallStudents",
    ]),
  },

  computed: {
    ...mapGetters(["staffDashboardRoutes"]),
  },
};
</script>
