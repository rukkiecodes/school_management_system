<template>
  <v-row justify="center" class="mt-3">
    <v-col cols="12">
      <v-btn
        flat
        class="px-5"
        variant="tonal"
        @click="$router.go(-1)"
        color="indigo-accent-4 text-capitalize "
        ><v-icon class="mr-2">mdi-arrow-left</v-icon> Go Back</v-btn
      >
    </v-col>
    <v-col cols="12" class="d-flex justify-center">
      <v-card width="400" max-width="100%">
        <v-card-title> Input Attendance </v-card-title>
        <v-card-text>
          <v-text-field
            v-model="addAttendance.studentname"
            placeholder="Student Name"
            density="compact"
            variant="outlined"
          />
          <v-text-field
            v-model="addAttendance.studentid"
            placeholder="Student id"
            type="number"
            density="compact"
            variant="outlined"
          />
          <v-text-field
            v-model="addAttendance.classlevel"
            placeholder="Class Level"
            density="compact"
            variant="outlined"
          />
          <v-text-field
            v-model="addAttendance.classroom"
            placeholder="Class Room"
            density="compact"
            variant="outlined"
          />
          <v-text-field
            v-model="addAttendance.attendancescore"
            placeholder="Attendance score"
            type="number"
            density="compact"
            variant="outlined"
          />
          <v-text-field
            v-model="addAttendance.session"
            placeholder="Session"
            density="compact"
            variant="outlined"
          />
          <v-text-field
            v-model="addAttendance.term"
            placeholder="Term"
            density="compact"
            variant="outlined"
          />
        </v-card-text>
        <v-card-actions>
          <v-btn
            @click="addNewAttendance"
            :loading="addAttendance.loading"
            block
            class="text-capitalize bg-indigo-accent-4 px-5"
            >Create</v-btn
          >
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  methods: {
    ...mapActions(["addNewAttendance"]),
  },

  computed: {
    ...mapState(["addAttendance"]),
  },
};
</script>