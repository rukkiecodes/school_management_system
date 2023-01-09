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
      <v-card width="400" max-width="100%" elevation="5">
        <v-card-title> Add Grade Break Down </v-card-title>
        <v-card-text>
          <v-row justify="space-between">
            <v-col cols="12">
              <v-text-field
                placeholder="Grade Component"
                density="compact"
                variant="outlined"
                hide-details
              />
            </v-col>
            <v-col cols="12">
              <v-text-field
                placeholder="Score"
                density="compact"
                variant="outlined"
                hide-details
              />
            </v-col>
            <v-col cols="12">
              <v-select
                placeholder="Score"
                density="compact"
                variant="outlined"
                hide-details
                :items="[
                  'Examination',
                  'MidTermTest',
                  'ClassTest',
                  'ClassExercise',
                  'HomeWork',
                  'Others',
                ]"
              />
            </v-col>
          </v-row>
          <v-card-actions class="px-0 mt-3">
            <v-spacer />

            <v-btn
              elevation="3"
              class="text-capitalize bg-indigo px-5 "
              >Create</v-btn
            >
          </v-card-actions>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>
      