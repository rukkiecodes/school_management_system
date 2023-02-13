<template>
  <v-container>
    <v-card flat>
      <v-tabs v-model="tab" bg-color="primary">
        <v-tab value="one">Invoices</v-tab>
        <v-tab value="two">Fees</v-tab>
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
                <tr
                  v-for="account in allStudentAccountingArray"
                  :key="account.id"
                >
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
                <tr
                  v-for="account in allStudentFeesArray"
                  :key="account.id"
                >
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
    ...mapGetters(["allStudentAccountingArray", "allStudentFeesArray"]),
  },
};
</script>
