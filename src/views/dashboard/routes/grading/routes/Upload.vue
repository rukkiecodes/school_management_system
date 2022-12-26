<template>
  <v-row justify="center">
    <v-col cols="12">
      <v-btn
        flat
        class="px-5"
        variant="tonal"
        @click="$router.go(-1)"
        color="indigo text-capitalize rounded-lg"
        ><v-icon class="mr-2">mdi-arrow-left</v-icon> Go Back</v-btn
      >
    </v-col>
    <v-col cols="12" class="d-flex justify-center">
      <v-card elevation="3" class="rounded-lg" width="400" max-width="100%">
        <v-card-title>Upload Grades</v-card-title>
        <v-card-text>
          <v-file-input
            variant="outlined"
            density="compact"
            class="mt-4"
            hide-details
            label="Choose a file"
          />

          <v-card-actions class="px-0 mt-3">
            <v-spacer />
            <v-btn
              elevation="3"
              class="text-capitalize bg-indigo px-5 rounded-lg"
              >Create</v-btn
            >
          </v-card-actions>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import DropZone from "dropzone-vue";
import "dropzone-vue/dist/dropzone-vue.common.css";
export default {
  components: {
    DropZone,
  },
};
</script>
