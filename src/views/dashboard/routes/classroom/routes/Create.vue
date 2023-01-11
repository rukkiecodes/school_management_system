<template>
  <v-row justify="center" class="mt-3">
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
      <v-card width="400" max-width="100%">
        <v-card-title> Add Classroom </v-card-title>

        <v-card-text>
          <v-text-field
            placeholder="Name"
            density="compact"
            variant="outlined"
            v-model="addClassroom.name"
          />
          <v-select
            v-model="addClassroom.level"
            placeholder="Select level"
            density="compact"
            variant="outlined"
            :items="[
              'JSS1',
              'JSS2',
              'JSS3',
              'SS1',
              'SS2',
              'SS3',
              'Basic 5',
              'Basic 4',
              'Basic 3',
              'BASIC 4',
              'basic 2',
              'Basic 1',
              'Transition',
              'Reception 2',
              'Reception 1',
              'Preschool',
              '1',
            ]"
          />
          <v-select
            v-model="addClassroom.classtype"
            placeholder="Select class type"
            density="compact"
            variant="outlined"
            :items="['Art', 'Science']"
          />
          <v-select
            v-model="addClassroom.formteacher"
            placeholder="Select form teacher"
            density="compact"
            variant="outlined"
            :items="[
              'UDENTA, FLORENCE E',
              'IKECHUKWU, CHIDIEBERE I',
              'MALVAN, MALVAN Malvan',
              'Akpatang, Henrietta O',
              'Nnadi, Judith A',
              'OBEY, ESTHER E',
              'ONUOHA, GLORIOUS N',
              'OKWU, IYKE IFEANYI',
              'TAANADEEBA, SORGORTOM S',
              'DIDIA, LUCKY EJIKEME',
              'MGBAKAR, GIFT CHINENYE',
              'MATTHEWS, GRACE CHINYERE',
              'ASUO, HART S',
              'WILSON, UDOBUNDU A',
              'ADE, ALPHONSUS P',
              'MATTHEW, GOODLIFE A',
              'MONDAY, ESEREGHI VICTORY',
              'GBOTOR, ELABANABARI BEN',
            ]"
          />
          <v-select
            v-model="addClassroom.promotesto"
            placeholder="Select promotion class"
            density="compact"
            variant="outlined"
            :items="[
              'JSS1',
              'JSS2',
              'JSS3',
              'SS1',
              'SS2',
              'SS3',
              'Basic 5',
              'Basic 4',
              'Basic 3',
              'BASIC 4',
              'basic 2',
              'Basic 1',
              'Transition',
              'Reception 2',
              'Reception 1',
              'Preschool',
              '1',
            ]"
          />
          <v-text-field
            v-model="addClassroom.assignedfee"
            placeholder="Assigned fee"
            density="compact"
            type="number"
            variant="outlined"
          />
          <v-select
            v-model="addClassroom.gradeprofile"
            placeholder="Select grade profile"
            density="compact"
            variant="outlined"
            :items="['Secondary school', 'MGM', 'New']"
          />
        </v-card-text>
        <v-card-actions>
          <v-btn
            @click="addNewClassroom"
            :loading="addClassroom.loading"
            block
            class="text-capitalize bg-indigo px-5"
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
    ...mapActions(["addNewClassroom"]),
  },

  computed: {
    ...mapState(["addClassroom"]),
  },
};
</script>