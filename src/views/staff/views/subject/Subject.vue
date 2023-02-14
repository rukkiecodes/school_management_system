<template>
  <v-container>
    <v-table>
      <thead>
        <tr>
          <th class="text-left">Subject</th>
          <th class="text-left">Session</th>
          <th class="text-left">Teacher</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in allStudentSubjectsArray" :key="item.name">
          <td>{{ item.name }}</td>
          <td>{{ item.calories }}</td>
        </tr>
      </tbody>
    </v-table>
  </v-container>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters(["allStudentSubjectsArray"]),
  },
};
</script>
