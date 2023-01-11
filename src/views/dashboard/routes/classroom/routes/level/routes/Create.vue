<template>
  <v-row justify="center" class="mt-3">
    <v-col cols="12">
      <v-btn flat class="px-5" variant="tonal" @click="$router.go(-1)" color="indigo text-capitalize "><v-icon
          class="mr-2">mdi-arrow-left</v-icon> Go Back</v-btn>
    </v-col>
    <v-col cols="12" class="d-flex justify-center">
      <v-card width="400" max-width="100%">
        <v-card-title> Add Class Level </v-card-title>

        <v-card-text>
          <v-text-field v-model="addClassroomLevel.name" placeholder="Class Level(name)" density="compact"
            variant="outlined" />
          <v-select v-model="addClassroomLevel.category" placeholder="Class level" density="compact" variant="outlined"
            :items="['Nursery', 'Primary', 'Secondary']" />
          <v-select v-model="addClassroomLevel.graduationlevel" placeholder="Class level" density="compact"
            variant="outlined" :items="['Yes', 'No']" />
        </v-card-text>
        <v-card-actions>
          <v-btn @click="addNewClassroomLevel" :loading="addClassroomLevel.loading" block
            class="text-capitalize bg-indigo px-5 ">Create</v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>
  
<script>
import { mapActions, mapState } from 'vuex'
export default {
  methods: {
    ...mapActions(["addNewClassroomLevel"])
  },

  computed: {
    ...mapState(["addClassroomLevel"])
  }
}
</script>