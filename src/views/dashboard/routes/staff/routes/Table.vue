<template>
  <v-row justify="space-between" class="my-10">
    <v-col cols="12">
      <v-btn elevation="3" class="rounded-lg mb-4" to="/dashboard/staffs/create">
        <v-icon class="mr-2">mdi-account-plus</v-icon>
        <span class="text-capitalize">Create New</span>
      </v-btn>
      <v-btn elevation="3" class="rounded-lg ml-4 mb-4 bg-indigo" to="/dashboard/staffs/createStaffRole">
        <v-icon class="mr-2">mdi-account-lock</v-icon>
        <span class="text-capitalize">Create Staff Roll</span>
      </v-btn>
      <v-btn elevation="3" class="rounded-lg ml-4 mb-4 bg-indigo" to="/dashboard/staffs/createDepartment">
        <v-icon class="mr-2">mdi-office-building</v-icon>
        <span class="text-capitalize">Create Department</span>
      </v-btn>
    </v-col>
    <v-col cols="12">
      <v-card elevation="3" class="rounded-lg">
        <v-card-title>Staff List</v-card-title>
        <ClassroomTable />
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import ClassroomTable from "../../components/ClassroomTable.vue";
export default {
  components: { ClassroomTable },
};
</script>

<style>
</style>