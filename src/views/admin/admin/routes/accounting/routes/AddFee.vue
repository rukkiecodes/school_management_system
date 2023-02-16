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
      <v-card elevation="2" width="400" max-width="100%">
        <v-card-title>Add Fee Item</v-card-title>
        <v-card-text>
          <v-text-field
            placeholder="Name"
            density="compact"
            variant="outlined"
            v-model="addFee.name"
          />
          <v-text-field
            density="compact"
            variant="outlined"
            placeholder="Description"
            v-model="addFee.description"
          />
          <v-text-field
            type="number"
            density="compact"
            variant="outlined"
            placeholder="First Term Amout"
            v-model="addFee.firstTerm"
          />
          <v-text-field
            type="number"
            density="compact"
            variant="outlined"
            placeholder="Second Term Amout"
            v-model="addFee.secondTerm"
          />
          <v-text-field
            type="number"
            density="compact"
            variant="outlined"
            placeholder="Third Term Amout"
            v-model="addFee.thirdTerm"
          />
          <v-text-field
            density="compact"
            variant="outlined"
            placeholder="Class"
            v-model="addFee.class"
          />
          <v-text-field
            density="compact"
            variant="outlined"
            placeholder="Session"
            v-model="addFee.session"
          />
        </v-card-text>
        <v-card-actions>
          <v-btn
            block
            @click="addFeeItem"
            :loading="addFee.loading"
            class="bg-indigo-accent-4 text-capitalize"
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
    ...mapActions(["addFeeItem"]),
  },

  computed: {
    ...mapState(["addFee"]),
  },
};
</script>
