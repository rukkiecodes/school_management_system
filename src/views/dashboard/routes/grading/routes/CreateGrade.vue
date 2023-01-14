<template>
  <v-row justify="center">
    <v-col cols="12">
      <v-btn
        flat
        class="px-5"
        variant="tonal"
        @click="$router.go(-1)"
        color="indigo text-capitalize "
        ><v-icon class="mr-2">mdi-arrow-left</v-icon> Go Back</v-btn
      >
    </v-col>
    <v-col cols="12" class="d-flex justify-center">
      <v-card class="mt-10" width="400" max-width="100%">
        <v-card-title>Add Grade</v-card-title>
        <v-card-text>
          <v-text-field
            v-model="addGrade.studentname"
            placeholder="Student Name"
            density="compact"
            variant="outlined"
          />
          <v-text-field
            v-model="addGrade.studentid"
            placeholder="Student id"
            type="number"
            density="compact"
            variant="outlined"
          />
          <v-text-field
            v-model="addGrade.class"
            placeholder="Class"
            density="compact"
            variant="outlined"
          />
          <v-text-field
            v-model="addGrade.subject"
            placeholder="Subject"
            density="compact"
            variant="outlined"
          />
          <v-text-field
            v-model="addGrade.firstca"
            placeholder="First CA"
            type="number"
            density="compact"
            variant="outlined"
          />
          <v-text-field
            v-model="addGrade.secondca"
            type="number"
            placeholder="Second CA"
            density="compact"
            variant="outlined"
          />
          <v-text-field
            v-model="addGrade.exam"
            type="number"
            placeholder="Exam"
            density="compact"
            variant="outlined"
          />
          <v-text-field
            v-model="addGrade.term"
            placeholder="Term"
            density="compact"
            variant="outlined"
          />
        </v-card-text>
        <v-card-actions>
          <v-btn
            @click="addNewGrade"
            :loading="addGrade.loading"
            block
            class="text-capitalize bg-indigo"
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
    ...mapActions(["addNewGrade"]),
  },

  computed: {
    ...mapState(["addGrade"]),
  },
};
</script>