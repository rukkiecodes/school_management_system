<template>
  <v-row justify="center">
    <v-col cols="12">
      <v-btn flat class="px-5" variant="tonal" @click="$router.go(-1)" color="indigo-accent-4 text-capitalize "><v-icon
          class="mr-2">mdi-arrow-left</v-icon> Go Back</v-btn>
    </v-col>
    <v-col cols="12" class="d-flex justify-center">
      <v-card class="mt-10" width="400" max-width="100%">
        <v-card-title>Add Student</v-card-title>
        <v-card-text>
          <v-row justify="space-between">
            <v-col cols="12">
              <v-text-field v-model="addStudent.firstname" placeholder="First Name" density="compact" variant="outlined"
                hide-details />
            </v-col>
            <v-col cols="12">
              <v-text-field v-model="addStudent.lastname" placeholder="Last name" density="compact" variant="outlined"
                hide-details />
            </v-col>
            <v-col cols="12">
              <v-text-field v-model="addStudent.othername" placeholder="Other name" density="compact" variant="outlined"
                hide-details />
            </v-col>
            <v-col cols="12">
              <v-text-field v-model="addStudent.phone" placeholder="Phone" density="compact" variant="outlined"
                hide-details />
            </v-col>
            <v-col cols="12">
              <v-text-field v-model="addStudent.email" placeholder="Email" density="compact" variant="outlined"
                hide-details />
            </v-col>
            <v-col cols="12">
              <v-text-field v-model="addStudent.nextofkin" placeholder="Next Of Kin" density="compact"
                variant="outlined" hide-details />
            </v-col>
            <v-col cols="12">
              <v-text-field v-model="addStudent.address" placeholder="Address" density="compact" variant="outlined"
                hide-details />
            </v-col>
            <v-col cols="12">
              <v-select v-model="addStudent.gender" :items="['Male', 'Female']" placeholder="Sex" density="compact"
                variant="outlined" hide-details />
            </v-col>
            <v-col cols="12">
              <v-text-field v-model="addStudent.classroom" placeholder="Classroom" density="compact" variant="outlined"
                hide-details />
            </v-col>
          </v-row>
        </v-card-text>
        <v-card-actions>
          <v-btn @click="addNewStudent" :loading="addStudent.loading" block
            class="text-capitalize bg-indigo">Create</v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import { mapActions, mapState } from 'vuex'
export default {
  methods: {
    ...mapActions(['addNewStudent'])
  },

  computed: {
    ...mapState(['addStudent'])
  },
}
</script>