<template>
  <v-container>
    <v-card flat>
      <v-tabs v-model="tab" bg-color="primary">
        <v-tab value="one">Grades</v-tab>
        <v-tab value="two">Attendance</v-tab>
        <v-tab value="two">BS Grades</v-tab>
      </v-tabs>

      <v-card-text>
        <v-window v-model="tab">
          <v-window-item value="one">
            <v-table>
              <thead>
                <tr>
                  <th class="text-left">Name</th>
                  <th class="text-left">Calories</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="account in allStudentGradesArray" :key="account.id">
                  <td>{{ account.name }}</td>
                  <td>{{ account.calories }}</td>
                </tr>
              </tbody>
            </v-table>
          </v-window-item>

          <v-window-item value="two">
            <v-table>
              <thead>
                <tr>
                  <th class="text-left">Name</th>
                  <th class="text-left">Calories</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="account in allStudentAttendanceArray" :key="account.id">
                  <td>{{ account.name }}</td>
                  <td>{{ account.calories }}</td>
                </tr>
              </tbody>
            </v-table>
          </v-window-item>

          <v-window-item value="three">
            <v-table>
              <thead>
                <tr>
                  <th class="text-left">Name</th>
                  <th class="text-left">Calories</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="account in allStudentBSGradesArray" :key="account.id">
                  <td>{{ account.name }}</td>
                  <td>{{ account.calories }}</td>
                </tr>
              </tbody>
            </v-table>
          </v-window-item>
        </v-window>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  data: () => ({
    tab: null,
  }),

  computed: {
    ...mapGetters(["allStudentGradesArray", "allStudentAttendanceArray", "allStudentBSGradesArray"]),
  },
};
</script>
