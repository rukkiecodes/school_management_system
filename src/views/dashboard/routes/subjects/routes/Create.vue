<template>
  <v-row justify="center">
    <v-col cols="12">
      <v-btn flat class="px-5" variant="tonal" @click="$router.go(-1)" color="indigo text-capitalize "><v-icon
          class="mr-2">mdi-arrow-left</v-icon> Go Back</v-btn>
    </v-col>
    <v-col cols="12" class="d-flex justify-center">
      <v-card class="mt-10" width="400" max-width="100%">
        <v-card-title> Add Subject </v-card-title>
        <v-card-text>
          <v-text-field v-model="addSubject.firstname" placeholder="First Name" density="compact" variant="outlined" />
          <v-text-field v-model="addSubject.lastname" placeholder="Last Name" density="compact" variant="outlined" />
          <v-text-field v-model="addSubject.othername" placeholder="Other Name" density="compact" variant="outlined" />
          <v-text-field v-model="addSubject.phone" placeholder="Phone" density="compact" variant="outlined" />
          <v-text-field v-model="addSubject.email" placeholder="Email" density="compact" variant="outlined" />
          <v-text-field v-model="addSubject.nextofkin" placeholder="Next Of Kin" density="compact" variant="outlined" />
          <v-text-field v-model="addSubject.address" placeholder="Address" density="compact" variant="outlined" />
          <v-select v-model="addSubject.gender" :items="['Male', 'Female']" placeholder="Gender" density="compact"
            variant="outlined" />
          <v-select v-model="addSubject.classroom" :items="['basic 4']" placeholder="Gender" density="compact"
            variant="outlined" />
          <v-text-field v-model="addSubject.assignedfee" placeholder="Assigned Fee" type="number" density="compact"
            variant="outlined" />
        </v-card-text>
        <v-card-actions>
          <v-btn @click="addNewSubject" :loading="addSubject.loading" block class="text-capitalize bg-indigo px-5 ">Create</v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import { mapActions, mapState } from 'vuex';
export default {
  methods: {
    ...mapActions(["addNewSubject"])
  },

  computed: {
    ...mapState(["addSubject"])
  }
};
</script>
