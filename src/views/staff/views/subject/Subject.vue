<template>
  <v-container>
    <v-table>
      <thead>
        <tr>
          <th class="text-left">Name</th>
          <th class="text-left">Code</th>
          <th class="text-left">Class</th>
          <th class="text-left">Parent subject</th>
          <th class="text-left">Subject category</th>
          <th class="text-left">Showin subject</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in allStaffSubjectsArray" :key="item.name">
          <td>{{ item.name }}</td>
          <td>{{ item.code }}</td>
          <td>{{ item.class }}</td>
          <td>{{ item.parentsubject }}</td>
          <td>{{ item.subjectcategory }}</td>
          <td>{{ item.showinsubject }}</td>
        </tr>
      </tbody>
    </v-table>
  </v-container>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters(["allStaffSubjectsArray"]),
  },
};
</script>
