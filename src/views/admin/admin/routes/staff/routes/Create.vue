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
              <v-text-field v-model="addStaff.firstname" placeholder="First Name" density="compact" variant="outlined"
                hide-details />
            </v-col>
            <v-col cols="12">
              <v-text-field v-model="addStaff.lastname" placeholder="Last name" density="compact" variant="outlined"
                hide-details />
            </v-col>
            <v-col cols="12">
              <v-text-field v-model="addStaff.othername" placeholder="Other name" density="compact" variant="outlined"
                hide-details />
            </v-col>
            <v-col cols="12">
              <v-text-field v-model="addStaff.phone" placeholder="Phone" density="compact" variant="outlined" hide-details />
            </v-col>
            <v-col cols="12">
              <v-text-field v-model="addStaff.email" placeholder="Email" density="compact" variant="outlined" hide-details />
            </v-col>
            <v-col cols="12">
              <v-text-field v-model="addStaff.nextofkin" placeholder="Next Of Kin" density="compact" variant="outlined"
                hide-details />
            </v-col>
            <v-col cols="12">
              <v-text-field v-model="addStaff.address" placeholder="Address" density="compact" variant="outlined"
                hide-details />
            </v-col>
            <v-col cols="12">
              <v-select v-model="addStaff.department" :items="['ICT', 'Early year', 'Primary', 'Secondary']"
                placeholder="department" density="compact" variant="outlined" hide-details />
            </v-col>
            <v-col cols="12">
              <v-text-field v-model="addStaff.role" placeholder="Role" density="compact" variant="outlined" hide-details />
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