<template>
  <v-row justify="center" class="mt-3">
    <v-col cols="12">
      <v-btn flat class="px-5" variant="tonal" @click="$router.go(-1)" color="indigo-accent-4 text-capitalize "><v-icon
          class="mr-2">mdi-arrow-left</v-icon> Go Back</v-btn>
    </v-col>
    <v-col cols="12" class="d-flex justify-center">
      <v-card width="400" max-width="100%">
        <v-card-title> Add Class Category </v-card-title>
        <v-card-subtitle>Add Class Category to the school. Example: Junior Secondary, Senior
          Secondary e.t.c</v-card-subtitle>
        <v-card-text>

          <v-text-field v-model="addClassroomCategory.name" placeholder="Class Category(name)" density="compact"
            variant="outlined" />
          <v-select v-model="addClassroomCategory.level" placeholder="Class level category" density="compact"
            variant="outlined" :items="['Nursery', 'Primary', 'Secondary']" />
        </v-card-text>
        <v-card-actions>
          <v-btn @click="addNewClassroomCategory" :loading="addClassroomCategory.loading" block
            class="text-capitalize bg-indigo-accent-4 px-5 ">Create</v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>
  
<script>
import { mapActions, mapState } from 'vuex'
export default {
  methods: {
    ...mapActions(["addNewClassroomCategory"])
  },

  computed: {
    ...mapState(["addClassroomCategory"])
  }
}
</script>