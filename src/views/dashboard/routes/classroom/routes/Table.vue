<template>
  <v-row justify="space-between" class="my-10">
    <v-col cols="12">
      <v-btn elevation="3" class="" to="/dashboard/classRooms/create">
        <v-icon class="mr-2">mdi-home</v-icon>
        <span class="text-capitalize">Create New</span>
      </v-btn>
    </v-col>
    <v-col cols="12">
      <v-card elevation="3" class="">
        <v-card-title> Classroom List </v-card-title>
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
