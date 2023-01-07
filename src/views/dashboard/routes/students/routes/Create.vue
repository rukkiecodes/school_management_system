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
        <v-card-title>Student Sign up</v-card-title>
        <v-card-text>
          <v-row justify="space-between">
            <v-col cols="12">
              <v-file-input
                clearable
                label="Select student's file"
                density="compact"
                variant="outlined"
                hide-details
              />
            </v-col>
            <v-col cols="12">
              <v-text-field
                label="User Name"
                density="compact"
                variant="outlined"
                hide-details
              />
            </v-col>
            <v-col cols="12">
              <v-text-field
                label="Phone Number"
                density="compact"
                variant="outlined"
                hide-details
              />
            </v-col>
            <v-col cols="12">
              <v-text-field
                label="Email Address"
                density="compact"
                variant="outlined"
                hide-details
              />
            </v-col>
            <v-col cols="12">
              <v-select
                label="Gender"
                density="compact"
                variant="outlined"
                hide-details
                :items="['Male', 'Female']"
              />
            </v-col>
            <v-col cols="12">
              <v-text-field
                label="Next Of Kin"
                density="compact"
                variant="outlined"
                hide-details
              />
            </v-col>
            <v-col cols="12">
              <v-text-field
                label="First Name"
                density="compact"
                variant="outlined"
                hide-details
              />
            </v-col>
            <v-col cols="12">
              <v-text-field
                label="Surname"
                density="compact"
                variant="outlined"
                hide-details
              />
            </v-col>
            <v-col cols="12">
              <v-text-field
                label="Middle Name"
                density="compact"
                variant="outlined"
                hide-details
              />
            </v-col>
            <v-col cols="12">
              <v-text-field
                label="Contact Address"
                density="compact"
                variant="outlined"
                hide-details
              />
            </v-col>
            <v-col cols="12">
              <v-select
                label="Current Class Room"
                density="compact"
                variant="outlined"
                hide-details
                :items="[
                  'Basic 2',
                  'Basic 3',
                  'Basic 5',
                  'JSS2',
                  'JSS3',
                  'Preschool',
                  'SS3',
                  'SS2',
                  'SS1',
                  'Reception 2',
                  'Transition',
                  'Reception 1',
                  'Basic 4',
                  'Basic 1',
                  'JSS1',
                ]"
              />
            </v-col>
            <v-col cols="12">
              <v-select
                label="Assigned Fee"
                density="compact"
                variant="outlined"
                hide-details
                :items="['Use Class Default']"
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
