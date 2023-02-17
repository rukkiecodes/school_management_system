<template>
  <v-container>
    <v-sheet height="400" class="d-flex flex-column justify-center">
      <h1 class="text-grey-darken-3 text-lg-h3">
        Hello,
        <span class="text-capitalize">{{ student?.firstname }}</span> .<span
          class="text-capitalize"
          >{{ student?.othername }}</span
        >. <span class="text-capitalize">{{ student?.lastname }}</span>
      </h1>
      <span class="text-grey-darken-4">Here are your reports for the term</span>
    </v-sheet>

    <v-row justify="space-between">
      <v-col v-for="(card, i) in cards" :key="i" cols="12" sm="6" md="4">
        <v-card
          :to="card.to"
          height="150"
          color="indigo-lighten-5"
          class="d-flex flex-column"
          flat
        >
          <v-card-text class="pb-0">
            <p class="text-h5 font-weight-bold text-indigo-accent-4">
              {{ card.title }}
            </p>
            <p class="text-indigo-accent-4">
              {{ card.subtext }}: {{ card.count }}
            </p>
          </v-card-text>
          <v-breadcrumbs
            density="compact"
            class="
              pt-0
              d-flex
              justify-end
              text-caption text-indigo-accent-4
              font-weight-bold
            "
            :items="card.breadcrumbs"
          ></v-breadcrumbs>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    student: null,
    cards: [
      {
        title: "Event",
        subtext: "Number of Events",
        count: 0,
        to: "/student/dashboard/events",
        breadcrumbs: ["student", "dashboard", "events"],
      },
      {
        title: "Subject",
        subtext: "Number of Subject",
        count: 0,
        to: "/student/dashboard/subject",
        breadcrumbs: ["student", "dashboard", "subject"],
      },
      {
        title: "Accounting",
        subtext: "Number of Accounting",
        count: 0,
        to: "/student/dashboard/accounting",
        breadcrumbs: ["student", "dashboard", "accounting"],
      },
      {
        title: "Grades",
        subtext: "Number of Grades",
        count: 0,
        to: "/student/dashboard/grades",
        breadcrumbs: ["student", "dashboard", "grades"],
      },
      {
        title: "Attendance",
        subtext: "Number of Attendance",
        count: 0,
        to: "/student/dashboard/grades",
        breadcrumbs: ["student", "dashboard", "attendance"],
      },
      {
        title: "BS Grades",
        subtext: "Number of BS Grades",
        count: 0,
        to: "/student/dashboard/grades",
        breadcrumbs: ["student", "dashboard", "bsgrades"],
      },
    ],
  }),

  mounted() {
    this.student = JSON.parse(localStorage.getItem("student"));
  },
};
</script>
