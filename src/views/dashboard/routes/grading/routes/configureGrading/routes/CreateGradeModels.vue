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
      <v-card width="650" max-width="100%" elevation="5">
        <v-card-title> Grade Model </v-card-title>
        <v-card-text>
          <v-row justify="space-between">
            <v-col cols="12">
              <v-text-field
                label="Grade Name"
                density="compact"
                variant="outlined"
                hide-details
              />
            </v-col>
            <v-card-subtitle class="font-weight-bold"
              >Available Grading Components</v-card-subtitle
            >
            <v-col cols="12">
              <v-row no-gutters>
                <v-col cols="6" sm="4">
                  <v-checkbox
                    label="Exam (60)"
                    density="compact"
                    hide-details
                  />
                </v-col>
                <v-col cols="6" sm="4">
                  <v-checkbox
                    label="1ST TERM (20)"
                    density="compact"
                    hide-details
                  />
                </v-col>
                <v-col cols="6" sm="4">
                  <v-checkbox
                    label="2ND TERM (20)"
                    density="compact"
                    hide-details
                  />
                </v-col>
                <v-col cols="6" sm="4">
                  <v-checkbox
                    label="3RD TERM (60)"
                    density="compact"
                    hide-details
                  />
                </v-col>
                <v-col cols="6" sm="4">
                  <v-checkbox
                    label="2nd CAT (20)"
                    density="compact"
                    hide-details
                  />
                </v-col>
                <v-col cols="6" sm="4">
                  <v-checkbox
                    label="EXAM (40)"
                    density="compact"
                    hide-details
                  />
                </v-col>
                <v-col cols="6" sm="4">
                  <v-checkbox
                    label="1st CAT (20)"
                    density="compact"
                    hide-details
                  />
                </v-col>
              </v-row>
            </v-col>

            <v-card-subtitle class="font-weight-bold">
              Available Grade Letterings</v-card-subtitle
            >
            <v-col cols="12">
              <v-row no-gutters>
                <v-col cols="6" sm="4">
                  <v-checkbox
                    label="A (100 - 80)"
                    density="compact"
                    hide-details
                  />
                </v-col>
                <v-col cols="6" sm="4">
                  <v-checkbox
                    label="B (79 - 70)"
                    density="compact"
                    hide-details
                  />
                </v-col>
                <v-col cols="6" sm="4">
                  <v-checkbox
                    label="C (69 - 60)"
                    density="compact"
                    hide-details
                  />
                </v-col>
                <v-col cols="6" sm="4">
                  <v-checkbox
                    label="D (59 - 50)"
                    density="compact"
                    hide-details
                  />
                </v-col>
                <v-col cols="6" sm="4">
                  <v-checkbox
                    label="E (49 - 40)"
                    density="compact"
                    hide-details
                  />
                </v-col>
                <v-col cols="6" sm="4">
                  <v-checkbox
                    label="C (69 - 60)"
                    density="compact"
                    hide-details
                  />
                </v-col>
                <v-col cols="6" sm="4">
                  <v-checkbox
                    label="F (39 - 0)"
                    density="compact"
                    hide-details
                  />
                </v-col>
              </v-row>
            </v-col>

            <v-card-subtitle class="font-weight-bold">
              Available Grade Letterings</v-card-subtitle
            >
            <v-col cols="12">
              <v-row no-gutters>
                <v-col cols="12" class="mb-5 mb-sm-0">
                  <v-checkbox
                    label="(100 - 90) Excellent Performance {first_name} keep it up!"
                    density="compact"
                    hide-details
                  />
                </v-col>
                <v-col cols="12" class="mb-5 mb-sm-0">
                  <v-checkbox
                    label="(89 - 80) Brilliant performance {first_name}. Keep it up!"
                    density="compact"
                    hide-details
                  />
                </v-col>
                <v-col cols="12" class="mb-5 mb-sm-0">
                  <v-checkbox
                    label="(79 - 70) Very good result {first_name} . Keep it up!"
                    density="compact"
                    hide-details
                  />
                </v-col>
                <v-col cols="12" class="mb-5 mb-sm-0">
                  <v-checkbox
                    label="(69 - 50) Good result {first_name}. There is room for improvement next term"
                    density="compact"
                    hide-details
                  />
                </v-col>
                <v-col cols="12" class="mb-5 mb-sm-0">
                  <v-checkbox
                    label="(49 - 40) {first_name} passed this term. Study harder next term"
                    density="compact"
                    hide-details
                  />
                </v-col>
                <v-col cols="12" class="mb-5 mb-sm-0">
                  <v-checkbox
                    label="(39 - 0) {first_name} failed this term. Study harder next term. GRADE E"
                    density="compact"
                    hide-details
                  />
                </v-col>
              </v-row>
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
      