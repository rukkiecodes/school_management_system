<template>
  <v-container>
    <v-table>
      <thead>
        <tr>
          <th class="text-left">Name</th>
          <th class="text-left">Class</th>
          <th class="text-left">Description</th>
          <th class="text-left">Session</th>
          <th class="text-left">First term amount</th>
          <th class="text-left">Second term amount</th>
          <th class="text-left">Third term amount</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="account in allStaffFeesArray" :key="account.id">
          <td>{{ account.name }}</td>
          <td>{{ account.class }}</td>
          <td>{{ account.description }}</td>
          <td>{{ account.session }}</td>
          <td>{{ account.firsttermamount }}</td>
          <td>{{ account.secondtermamount }}</td>
          <td>{{ account.thirdtermamount }}</td>
        </tr>
      </tbody>
    </v-table>
  </v-container>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  data: () => ({
    tab: null,
  }),

  computed: {
    ...mapGetters(["allStudentAccountingArray", "allStaffFeesArray"]),
  },
};
</script>
