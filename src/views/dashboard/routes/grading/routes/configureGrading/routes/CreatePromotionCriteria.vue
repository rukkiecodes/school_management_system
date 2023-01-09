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
        <v-card-title> Promotion Criteria </v-card-title>
        <v-card-text>
          <v-row justify="space-between">
            <v-col cols="12">
              <v-text-field
                placeholder="Criteria Name"
                density="compact"
                variant="outlined"
                hide-details
              />
            </v-col>
            <v-col cols="12">
              <v-select
                placeholder="Rule Options (for mulitple rules)"
                density="compact"
                variant="outlined"
                hide-details
                :items="[
                  'Student Must Pass at least one rule',
                  'Student Must Pass all rules',
                ]"
              />
            </v-col>
            <v-col cols="12">
              <v-combobox
                placeholder="Promotion Rules"
                density="compact"
                variant="outlined"
                hide-details
                multiple
                clearable
                :items="['Scores above 2 in Average']"
              />
            </v-col>
            <v-col cols="12">
              <v-combobox
                placeholder="Assigned Classrooms"
                density="compact"
                variant="outlined"
                hide-details
                multiple
                clearable
                :items="[
                  'Basic 1',
                  'Basic 2',
                  'Basic 3',
                  'Basic 4',
                  'Basic 5',
                  'JSS 1',
                  'JSS 2',
                  'JSS 3',
                  'Preschool',
                  'SS 3',
                  'SS 2',
                  'SS 1',
                  'Reception 1',
                  'Reception 2',
                  'Transition',

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
      