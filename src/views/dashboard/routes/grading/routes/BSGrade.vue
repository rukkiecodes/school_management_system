<template>
  <v-row justify="center" class="mt-3">
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
      <v-card width="400" max-width="100%" elevation="5">
        <v-card-title> Input Grade </v-card-title>
        <v-card-text>
          <v-row justify="space-between">
            <v-col cols="12">
              <v-select
                label="Class Level"
                density="compact"
                variant="outlined"
                hide-details
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
                ]"
              />
            </v-col>
            <v-col cols="12">
              <v-select
                label="Class Room"
                density="compact"
                variant="outlined"
                hide-details
                :items="[]"
              />
            </v-col>
          </v-row>
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
    