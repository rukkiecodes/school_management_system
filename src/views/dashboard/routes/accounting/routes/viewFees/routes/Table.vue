<template>
  <v-row justify="space-between" class="my-10">
    <v-col cols="12">
      <v-btn
        elevation="3"
        class="rounded-lg mb-4"
        to="/dashboard/accounting/viewFees/create"
      >
        <v-icon class="mr-2">mdi-account-plus</v-icon>
        <span class="text-capitalize">Create New</span>
      </v-btn>
    </v-col>
    <v-col cols="12">
      <v-card elevation="3" class="rounded-lg">
        <v-card-title>Staff List</v-card-title>

        <v-card-actions>
          <v-text-field
            label="Filter"
            density="compact"
            variant="underlined"
            prepend-inner-icon="mdi-magnify"
          />
        </v-card-actions>
        <v-table>
          <thead>
            <tr>
              <th class="text-left">Name</th>
              <th class="text-left">First Term</th>
              <th class="text-left">Second Term</th>
              <th class="text-left">Third Term</th>
              <th class="text-left"></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(fee, i) in fees" :key="i">
              <td>{{ fees?.name }}</td>
              <td>{{ fees?.firsttermamount }}</td>
              <td>{{ fees?.secondtermamount }}</td>
              <td>{{ fees?.thirdtermamount }}</td>
            </tr>
          </tbody>
        </v-table>
      </v-card>
    </v-col>
  </v-row>
</template>
  
  <script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["fees"]),
  },
};
</script>
  