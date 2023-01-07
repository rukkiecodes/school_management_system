<template>
  <v-row justify="center">
    <v-col cols="12">
      <v-btn flat class="px-5" variant="tonal" @click="$router.go(-1)" color="indigo text-capitalize "><v-icon
          class="mr-2">mdi-arrow-left</v-icon> Go Back</v-btn>
    </v-col>
    <v-col cols="12" class="d-flex justify-center">
      <v-card class="mt-10" width="400" max-width="100%">
        <v-card-title>Add Staff</v-card-title>
        <v-card-text>
          <v-row justify="space-between">
            <v-col cols="12">
              <v-text-field v-model="addStaff.firstname" label="First Name" density="compact" variant="outlined"
                hide-details />
            </v-col>
            <v-col cols="12">
              <v-text-field v-model="addStaff.lastname" label="Last name" density="compact" variant="outlined"
                hide-details />
            </v-col>
            <v-col cols="12">
              <v-text-field v-model="addStaff.othername" label="Other name" density="compact" variant="outlined"
                hide-details />
            </v-col>
            <v-col cols="12">
              <v-text-field v-model="addStaff.phone" label="Phone" density="compact" variant="outlined" hide-details />
            </v-col>
            <v-col cols="12">
              <v-text-field v-model="addStaff.email" label="Email" density="compact" variant="outlined" hide-details />
            </v-col>
            <v-col cols="12">
              <v-text-field v-model="addStaff.nextofkin" label="Next Of Kin" density="compact" variant="outlined"
                hide-details />
            </v-col>
            <v-col cols="12">
              <v-text-field v-model="addStaff.address" label="Address" density="compact" variant="outlined"
                hide-details />
            </v-col>
            <v-col cols="12">
              <v-select v-model="addStaff.department" :items="['ICT', 'Early year', 'Primary', 'Secondary']"
                label="department" density="compact" variant="outlined" hide-details />
            </v-col>
            <v-col cols="12">
              <v-text-field v-model="addStaff.role" label="Role" density="compact" variant="outlined" hide-details />
            </v-col>
          </v-row>
        </v-card-text>
        <v-card-actions>
          <v-btn @click="addNewStaff" :loading="addStaff.loading" block class="text-capitalize bg-indigo">Create</v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import { mapActions, mapState } from 'vuex'
export default {
  methods: {
    ...mapActions(['addNewStaff'])
  },

  computed: {
    ...mapState(['addStaff'])
  },
}
</script>