<template>
  <v-row justify="center">
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
      <v-card class="mt-10" width="400" max-width="100%">
        <v-card-title>Add Fee Group</v-card-title>
        <v-card-text>
          <v-row justify="space-between">
            <v-col cols="12">
              <v-text-field
                placeholder="Name"
                density="compact"
                variant="outlined"
                hide-details
              />
            </v-col>
            <v-col cols="12">
              <v-text-field
                placeholder="Description"
                density="compact"
                variant="outlined"
                hide-details
              />
            </v-col>
          </v-row>
        </v-card-text>
        <v-card-actions>
          <v-spacer />
          <v-btn class="text-capitalize bg-indigo-accent-4 px-5">Create</v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>
