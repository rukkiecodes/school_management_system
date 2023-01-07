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
        <v-card-title> Add Subject </v-card-title>
        <v-card-text>
          <v-row justify="space-between">
            <v-col cols="12">
              <v-text-field
                label="Subject Name"
                density="compact"
                variant="outlined"
                hide-details
              />
            </v-col>
            <v-col cols="12">
              <v-text-field
                label="Subject code"
                density="compact"
                variant="outlined"
                hide-details
              />
            </v-col>
            <v-col cols="12">
              <v-select
                label="Parent Subject"
                density="compact"
                variant="outlined"
                hide-details
                :items="[
                  'ENGLISH LANGUAGE',
                  'MATHEMATICS',
                  'SOCIAL STUDIES',
                  'CHRISTIAN RELIGIOUS STUDY',
                  'LITERATURE',
                  'HOME ECONOMICS',
                  'COMPUTER SCIENCE',
                  'BASIC SCIENCE',
                  'BASIC TECHNOLOGY',
                  'CREATIVE ART',
                  'MUSIC',
                  'FRENCH',
                  'AGRICULTURAL SCIENCE',
                  'PHYSICAL AND HEALTH EDUCATION',
                  'BUSINESS STUDIES',
                  'ECONOMICS',
                  'GOVERNMENT',
                  'FINANCIAL ACCOUNTING',
                  'TECHNICAL DRAWING',
                  'PHYSICS',
                  'FURTHER MATHEMATHICS',
                  'GEOGRAPHY',
                  'BIOLOGY',
                  'CHEMISTRY',
                  'DATA PROCESSING',
                  'COMMERCE',
                  'History',
                  'Spelling',
                  'ICT',
                  'PHSE',
                  'QUANTITATIVE REASONING',
                  'Verbal Reasoning',
                  'SCIENCE',
                  'Christian Religious Knowledge',
                  'Numeracy',
                  'Calligraphy',
                  'Religious Education',
                  'Literacy',
                  'Handwriting',
                  'Personal, Social and Emotional Development',
                  'Expressive Art and Design',
                  'Understanding the World',
                  'Communication and Language',
                  'Physical Development',
                  'CIVIC EDUCATION',
                  'Project',
                ]"
              />
            </v-col>
            <v-col cols="12">
              <v-select
                label="Subject Category"
                density="compact"
                variant="outlined"
                hide-details
                :items="[]"
              />
            </v-col>
            <v-col cols="12">
              <v-switch label="Show in Subject Strengths"></v-switch>
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

<script>
export default {};
</script>

<style>
</style>