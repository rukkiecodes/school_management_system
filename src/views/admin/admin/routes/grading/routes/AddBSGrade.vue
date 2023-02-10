<template>
  <v-row justify="center" class="mt-3">
    <v-col cols="12">
      <v-btn
        flat
        class="px-5"
        variant="tonal"
        @click="$router.go(-1)"
        color="indigo-accent-4 text-capitalize"
        ><v-icon class="mr-2">mdi-arrow-left</v-icon> Go Back</v-btn
      >
    </v-col>
    <v-col cols="12" class="d-flex justify-center">
      <v-card width="400" max-width="100%">
        <v-card-title> Add B/S Types </v-card-title>
        <v-card-text>
          <v-text-field
            placeholder="Name"
            density="compact"
            variant="outlined"
            v-model="addBSGrade.name"
          />
          <v-select
            placeholder="Category"
            density="compact"
            variant="outlined"
            v-model="addBSGrade.category"
            :items="['Psychomotor', 'Affective']"
          />
        </v-card-text>
        <v-card-actions>
          <v-btn
            block
            @click="addNewBSGrade"
            :loading="addBSGrade.loading"
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
    ...mapActions(["addNewBSGrade"]),
  },

  computed: {
    ...mapState(["addBSGrade"]),
  },
};
</script>