<template>
  <v-container>
    <v-table>
      <thead>
        <tr>
          <th class="text-left">First name</th>
          <th class="text-left">Last name</th>
          <th class="text-left">Login code</th>
          <th class="text-left">Class room</th>
          <th class="text-left">Session</th>
          <th class="text-left">term</th>
          <th class="text-left">payment status</th>
          <th class="text-left">Payment method</th>
          <th class="text-left">Amount paid</th>
          <th class="text-left">Amount due</th>
          <th class="text-left">Assigned fee</th>
          <th class="text-left">Email</th>
          <th class="text-left">Phone</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="student in allStudentsArray" :key="student.id">
          <td>{{ student.firstname }}</td>
          <td>{{ student.lastname }}</td>
          <td>{{ student.logincode }}</td>
          <td>{{ student.classroom }}</td>
          <td>{{ student.session }}</td>
          <td>{{ student.term }}</td>
          <td>{{ student.paymentstatus }}</td>
          <td>{{ student.paymentmethod }}</td>
          <td>{{ student.amountpaid }}</td>
          <td>{{ student.amountdue }}</td>
          <td>{{ student.assignedfee }}</td>
          <td>{{ student.email }}</td>
          <td>{{ student.phone }}</td>
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
    ...mapGetters(["allStudentsArray"]),
  },
};
</script>
