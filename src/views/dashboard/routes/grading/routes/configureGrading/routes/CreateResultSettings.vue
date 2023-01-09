<template>
  <v-btn elevation="3" class="">
    <v-icon class="mr-2">mdi-home</v-icon>
    <span class="text-capitalize">Add New</span>

    <v-dialog v-model="dialog" activator="parent" width="500" scrollable>
      <v-card>
        <v-card-title class="pt-0 pr-0">
          <v-toolbar density="compact" color="transparent">
            Configure Result View
            <v-spacer />
            <v-btn icon @click="dialog = false">
              <v-icon>mdi-close</v-icon>
            </v-btn>
          </v-toolbar>
        </v-card-title>
        <v-card-text style="max-height: 500px">
          <v-card-subtitle class="pl-0 mb-4"
            >Add a configuration for result view</v-card-subtitle
          >
          <v-text-field placeholder="Name" density="compact" variant="outlined" />
          <v-divider class="my-5" />
          <v-row justify="space-between" no-gutters>
            <v-col cols="10" class="d-flex align-center">
              <span>Display Parent Subject</span>
            </v-col>
            <v-col cols="2">
              <v-switch hide-details />
            </v-col>

            <v-col cols="10" class="d-flex align-center">
              <span>Group by subject category</span>
            </v-col>
            <v-col cols="2">
              <v-switch hide-details />
            </v-col>

            <v-col cols="10" class="d-flex align-center">
              <span>Show Bs Grading</span>
            </v-col>
            <v-col cols="2">
              <v-switch hide-details />
            </v-col>

            <v-col cols="10" class="d-flex align-center">
              <span>Show Subject Scores</span>
            </v-col>
            <v-col cols="2">
              <v-switch hide-details />
            </v-col>

            <v-col cols="10" class="d-flex align-center">
              <span>Show Subject Strength</span>
            </v-col>
            <v-col cols="2">
              <v-switch hide-details />
            </v-col>

            <v-col cols="10" class="d-flex align-center">
              <span>Use Default Template</span>
            </v-col>
            <v-col cols="2">
              <v-switch hide-details />
            </v-col>

            <v-col cols="10" class="d-flex align-center">
              <span>Use two columns</span>
            </v-col>
            <v-col cols="2">
              <v-switch hide-details />
            </v-col>
          </v-row>
        </v-card-text>
        <v-card-actions>
          <v-spacer />
          <v-btn color="grey" @click="dialog = false">Close</v-btn>
          <v-btn class="bg-indigo" @click="dialog = false">Add</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-btn>
</template>
      
<script>
export default {
  data: () => ({
    dialog: false,
  }),
};
</script>