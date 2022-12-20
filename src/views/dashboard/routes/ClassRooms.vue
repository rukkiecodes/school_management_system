<template>
  <v-container>
    <BarVue />

    <v-row justify="space-between" align="start" class="my-10">
      <v-col cols="12">
        <v-btn elevation="3" class="rounded-lg">
          <v-icon class="mr-2">mdi-home</v-icon>
          <span class="text-capitalize">Create New</span>
        </v-btn>
      </v-col>
      <v-col cols="12">
        <v-card elevation="3" class="rounded-lg">
          <ClassroomTable />
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import BarVue from "./components/Bar.vue";
import ClassroomTable from "./components/ClassroomTable.vue";
export default {
  components: { BarVue, ClassroomTable },
};
</script>
