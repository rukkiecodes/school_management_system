<template>
  <v-row justify="space-between" class="my-10">
    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates earum
    voluptatum dolores veritatis eveniet magnam placeat ducimus facilis
    accusamus ab laboriosam minus, animi quasi, repellendus vitae eum, ipsam in
    rerum.
    <!-- <v-col cols="12">
      <v-btn elevation="3" class="rounded-lg" to="/dashboard/classRooms/create">
        <v-icon class="mr-2">mdi-home</v-icon>
        <span class="text-capitalize">Create New</span>
      </v-btn>
    </v-col>
    <v-col cols="12">
      <v-card elevation="3" class="rounded-lg">
        <ClassroomTable />
      </v-card>
    </v-col> -->
  </v-row>
</template>

<script>
import ClassroomTable from "../../components/ClassroomTable.vue";
export default {
  components: { ClassroomTable },
};
</script>
